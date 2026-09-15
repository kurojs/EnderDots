import logging
import math
import time

from PyQt6.QtCore import Qt, QTimer
from PyQt6.QtWidgets import QPushButton, QSizePolicy

from core.utils.utilities import refresh_widget_style
from core.validation.widgets.yasb.workspaces import WorkspacesConfig
from core.widgets.base import BaseWidget
from core.widgets.services.windows_desktops.service import WindowsDesktopService


KANJI = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]


_PULSE_PERIOD = 1.6
_PULSE_MIN = 0.10
_PULSE_MAX = 0.26


class WorkspacesWidget(BaseWidget):
    validation_schema = WorkspacesConfig

    def __init__(self, config: WorkspacesConfig):
        super().__init__(class_name="workspaces")
        self.config = config
        self._svc = WindowsDesktopService()

        self._svc.desktop_changed.connect(self._on_desktop_changed)
        self._svc.desktops_updated.connect(self._on_update_desktops)

        self._workspace_buttons: list[QPushButton] = []
        self._curr_index = self._svc.get_current_desktop().number

        self._pulse_timer = QTimer(self)
        self._pulse_timer.setInterval(40)
        self._pulse_timer.timeout.connect(self._pulse_tick)
        self._pulse_start = 0.0

        self.register_callback("activate_workspace", self._cb_activate_workspace)
        self.callback_left = config.callbacks.on_left
        self.callback_right = config.callbacks.on_right
        self.callback_middle = config.callbacks.on_middle

        self._init_container()
        self._svc.register_widget(self)

        try:
            self.destroyed.connect(lambda _=None: self._svc.unregister_widget(self))
        except Exception:
            pass

        self._rebuild()

    def _get_button_label(self, index: int) -> str:
        name = self._svc.get_desktop_name(index)
        fmt = self.config.label_workspace_active_btn if index == self._curr_index else self.config.label_workspace_btn
        kanji = KANJI[index] if 0 <= index < len(KANJI) else str(index)
        return fmt.format(index=index, name=name or str(index), kanji=kanji)

    def _clear(self):
        for i in reversed(range(self._widget_container_layout.count())):
            btn = self._widget_container_layout.itemAt(i).widget()
            self._widget_container_layout.removeWidget(btn)
            btn.setParent(None)
        self._workspace_buttons = []

    def _style(self, btn: QPushButton, active: bool):
        cls = "ws-btn active" if active else "ws-btn"
        btn.setProperty("class", cls)
        if active:
            self._pulse_start = time.monotonic()
            if not self._pulse_timer.isActive():
                self._pulse_timer.start()
            self._apply_pulse_style(btn)
        else:
            btn.setStyleSheet("")
        refresh_widget_style(btn)

    def _apply_pulse_style(self, btn: QPushButton):
        phase = time.monotonic() - self._pulse_start
        t = (math.sin(phase * (2 * math.pi) / _PULSE_PERIOD) + 1) / 2
        alpha = _PULSE_MIN + t * (_PULSE_MAX - _PULSE_MIN)
        btn.setStyleSheet(
            f"QPushButton {{ color: #9CC8C8; background-color: rgba(64, 128, 128, {alpha:.3f}); border: none; border-radius: 2px; }}"
        )

    def _pulse_tick(self):
        for btn, desktop in zip(self._workspace_buttons, self._svc.get_desktops()):
            if desktop.number == self._curr_index:
                self._apply_pulse_style(btn)

    def _rebuild(self):
        self._clear()
        desktops = self._svc.get_desktops()
        for desktop in desktops:
            index = desktop.number
            btn = QPushButton()
            btn.setProperty("class", "ws-btn")
            btn.setCursor(Qt.CursorShape.PointingHandCursor)
            btn.setSizePolicy(QSizePolicy.Policy.Fixed, QSizePolicy.Policy.Fixed)
            btn.clicked.connect(lambda checked=False, n=index: self._activate(n))
            btn.setToolTip(desktop.name or f"Desktop {index}")
            self._widget_container_layout.addWidget(btn)
            self._workspace_buttons.append(btn)
            self._style(btn, index == self._curr_index)
            self._set_text(btn, index)

    def _set_text(self, btn: QPushButton, index: int):
        btn.setText(self._get_button_label(index))

    def _refresh(self):
        for btn, desktop in zip(self._workspace_buttons, self._svc.get_desktops()):
            index = desktop.number
            self._style(btn, index == self._curr_index)
            self._set_text(btn, index)

    def _activate(self, index: int):
        try:
            WindowsDesktopService.switch_desktop(index)
            WindowsDesktopService().notify_desktop_changed(index)
        except Exception:
            logging.exception("Failed to focus desktop at index %s", index)
            raise

    def _cb_activate_workspace(self):
        self._refresh()

    def _on_desktop_changed(self, event_data: dict):
        new_index = event_data.get("index")
        if new_index is not None and new_index != self._curr_index:
            self._curr_index = new_index
            self._refresh()

    def _on_update_desktops(self, event_data=None, options=None):
        self._curr_index = self._svc.get_current_desktop().number
        self._rebuild()