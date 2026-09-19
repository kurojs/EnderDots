import json
import logging
import math
import time
from pathlib import Path

from PyQt6.QtCore import Qt, QTimer
from PyQt6.QtGui import QColor, QFont, QPainter
from PyQt6.QtWidgets import QFrame, QLabel

from core.validation.widgets.yasb.opencode import OpenCodeConfig
from core.widgets.base import BaseWidget


class SweepBar(QFrame):
    """Draws the bouncing sweep of vertical bars with a fading trail via QPainter."""

    def __init__(self, config: OpenCodeConfig):
        super().__init__()
        self.config = config
        self.position = config.columns - 1
        self.direction = -1
        self.color = QColor("#8080C0")
        width = config.columns * (config.bar_width + config.bar_spacing) - config.bar_spacing
        self.setFixedSize(width, config.bar_height)
        self.setProperty("class", "opencode-sweep")

    def paintEvent(self, event):
        if not self.color.isValid():
            return
        painter = QPainter(self)
        painter.setRenderHint(QPainter.RenderHint.Antialiasing, False)
        config = self.config
        envelope = math.exp(-pow((self.position - (config.columns - 1) / 2) / config.envelope, 2))
        for i in range(config.columns):
            distance = i - self.position
            behind = i > self.position if self.direction == -1 else i < self.position
            spread = config.sigma * (config.trail if behind else 1.0)
            alpha = envelope * math.exp(-(distance * distance) / (2 * spread * spread))
            alpha = max(alpha, config.min_alpha)
            alpha = min(alpha, 1.0)
            bar_color = QColor(self.color)
            bar_color.setAlphaF(alpha)
            x = i * (config.bar_width + config.bar_spacing)
            painter.fillRect(x, 0, config.bar_width, config.bar_height, bar_color)
        painter.end()


class OpenCodeWidget(BaseWidget):
    validation_schema = OpenCodeConfig

    def __init__(self, config: OpenCodeConfig):
        super().__init__(timer_interval=config.poll_interval, class_name=config.class_name)
        self.config = config
        self._anim_running = False
        self._bounce_timer: QTimer | None = None
        self._last_state: tuple | None = None

        self._init_container()
        self._widget_container.setObjectName("opencode-widget-container")
        self._build_labels()

        self.register_callback("update_state", self._update_state)

        self.callback_left = self.config.callbacks.on_left
        self.callback_right = self.config.callbacks.on_right
        self.callback_middle = self.config.callbacks.on_middle
        self.callback_timer = "update_state"

        self.start_timer()

    def _build_labels(self):
        self._label = QLabel()
        self._label.setProperty("class", "label")
        font = QFont(self.config.font_family)
        font.setPixelSize(self.config.font_size)
        self._label.setFont(font)
        self._label.setContentsMargins(4, 0, 4, 0)

        self._sweep = SweepBar(self.config)

        self._widget_container_layout.addWidget(self._label)
        self._widget_container_layout.addWidget(self._sweep)
        self._sweep.hide()

    def _label_html(self, emoji: str, label: str, color: str | None = None) -> str:
        color_span = f' <span style="color: {color}">{label}</span>' if color else f" {label}"
        return (
            f'<span style="font-family: \'{self.config.font_family}\', \'Segoe UI Emoji\'; '
            f'font-size: {self.config.font_size}px">{emoji}{color_span}</span>'
        )

    def _apply_container_color(self, color: str):
        color_obj = QColor(color)
        if not color_obj.isValid():
            return
        r, g, b = color_obj.red(), color_obj.green(), color_obj.blue()
        base_bg = f"rgba({r}, {g}, {b}, 0.10)"
        hover_bg = f"rgba({r}, {g}, {b}, 0.18)"
        self._widget_container.setStyleSheet(
            f"""
            QFrame#opencode-widget-container {{ background-color: {base_bg}; border: none; border-radius: 2px; }}
            QFrame#opencode-widget-container:hover {{ background-color: {hover_bg}; }}
            """
        )

    def _reset_container_color(self):
        self._widget_container.setStyleSheet("")

    def _apply_state(self, state: dict):
        emoji = state.get("emoji", "🟣")
        label = state.get("label", "York")
        color = state.get("color", "#9C9CD4")
        key = ("active", emoji, label, color)
        if key == self._last_state:
            return
        self._last_state = key
        self._label.setText(self._label_html(emoji, label, color))
        self._apply_container_color(color)

        color_obj = QColor(color)
        if color_obj.isValid():
            self._sweep.color = color_obj

        self._sweep.position = self.config.columns - 1
        self._sweep.direction = -1
        self._start_bounce()

    def _idle(self):
        key = ("idle",)
        if key == self._last_state:
            return
        self._last_state = key
        self._apply_container_color("#9CC8C8")
        self._sweep.color = QColor("#9CC8C8")
        self._sweep.position = self.config.columns - 1
        self._sweep.direction = -1
        self._start_bounce()
        self._label.setText(self._label_html("🟣", "York", "#9CC8C8"))

    def _start_bounce(self):
        if not self._anim_running:
            self._bounce_timer = QTimer(self)
            self._bounce_timer.timeout.connect(self._bounce_tick)
            self._bounce_timer.start(self.config.anim_interval)
            self._anim_running = True
        self._sweep.show()

    def _stop_bounce(self):
        if self._bounce_timer:
            self._bounce_timer.stop()
            self._bounce_timer.deleteLater()
            self._bounce_timer = None
        self._anim_running = False
        self._sweep.hide()

    def _bounce_tick(self):
        config = self.config
        sweep = self._sweep
        sweep.position += sweep.direction * config.step
        if sweep.position <= 0:
            sweep.position = 0
            sweep.direction = 1
        elif sweep.position >= config.columns - 1:
            sweep.position = config.columns - 1
            sweep.direction = -1
        sweep.update()

    def _read_state(self, path: Path) -> tuple[dict | None, float | None]:
        """Read an agent state file. Returns (state, mtime) or (None, None) when absent or corrupt.

        A state that claims to be active on disk but whose file was NOT modified
        within ``stale_timeout`` is treated as idle: it means the owning process
        died (or was killed) before it could emit an explicit idle event. Without
        this guard the widget would stay stuck showing "writing"/"active" forever
        after a forced close.
        """
        try:
            if not path.exists():
                return None, None
            mtime = path.stat().st_mtime
            stale = (time.time() - mtime) * 1000 > self.config.stale_timeout
            raw = path.read_text(encoding="utf-8-sig")
            state = json.loads(raw)
            if not isinstance(state, dict) or "mode" not in state:
                return None, None
            if stale and state.get("mode") != "idle":
                # Stale active state => owning process no longer writing. Contribute as idle.
                return None, None
            return state, mtime
        except (json.JSONDecodeError, OSError):
            # Corrupt or unreadable files contribute as an idle state.
            return None, None
        except Exception as e:
            logging.exception("[opencode] failed to read state file: %s", e)
            return None, None

    def _merge_state(
        self,
        opencode: dict | None,
        pi: dict | None,
        opencode_mtime: float | None,
        pi_mtime: float | None,
    ) -> dict | None:
        """Merge the opencode and pi agent states (None == idle contributor).

        1. Both active -> the most recently modified file wins.
        2. One active -> the active one wins.
        3. Both idle or absent -> York idle (None).
        """
        opencode_active = opencode is not None and opencode.get("mode") != "idle"
        pi_active = pi is not None and pi.get("mode") != "idle"
        if opencode_active and pi_active:
            if opencode_mtime is not None and (pi_mtime is None or opencode_mtime >= pi_mtime):
                return opencode
            return pi
        if opencode_active:
            return opencode
        if pi_active:
            return pi
        return None

    def _update_state(self):
        opencode_state, opencode_mtime = self._read_state(Path(self.config.state_file))
        pi_state, pi_mtime = None, None
        if self.config.pi_state_file:
            pi_state, pi_mtime = self._read_state(Path(self.config.pi_state_file))
        merged = self._merge_state(opencode_state, pi_state, opencode_mtime, pi_mtime)
        if merged is not None:
            self._apply_state(merged)
        else:
            self._idle()