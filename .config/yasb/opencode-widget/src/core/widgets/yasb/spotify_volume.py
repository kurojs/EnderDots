import logging
import re
from typing import Any

from PyQt6.QtCore import QTimer
from PyQt6.QtGui import QWheelEvent

from core.utils.tooltip import set_tooltip
from core.validation.widgets.yasb.spotify_volume import SpotifyVolumeConfig
from core.widgets.base import BaseWidget
from core.widgets.services.media.media import WindowsMedia
from core.widgets.services.volume.service import AudioOutputService


class SpotifyVolumeWidget(BaseWidget):
    validation_schema = SpotifyVolumeConfig

    def __init__(self, config: SpotifyVolumeConfig):
        super().__init__(class_name=f"spotify-volume-widget {config.class_name}")
        self.config = config
        self._session = None
        self._parsed_thresholds = []

        if isinstance(self.config.icons, dict):
            self._parsed_thresholds = sorted([int(k) for k in self.config.icons.keys() if k.isdigit()])

        self._service = AudioOutputService()
        self.media = WindowsMedia()
        self._init_container()
        self.build_widget_label(self.config.label, self.config.label_alt)

        self.register_callback("toggle_label", self._toggle_label)
        self.register_callback("toggle_mute", self.toggle_mute)
        self.register_callback("toggle_play_pause", self.toggle_play_pause)

        self.callback_left = self.config.callbacks.on_left
        self.callback_right = self.config.callbacks.on_right
        self.callback_middle = self.config.callbacks.on_middle

        self._update_state()

        self._poll_timer = QTimer()
        self._poll_timer.setInterval(1000)
        self._poll_timer.timeout.connect(self._update_state)
        self._poll_timer.start()

    def _get_volume_interface(self):
        if not self._session:
            return None
        return self._session.get("volume_interface")

    def _find_spotify_session(self):
        sessions = self._service.get_active_audio_sessions()
        exe = self.config.process.lower()
        for item in sessions:
            try:
                pid_name = item["session"].Process.name().lower()
                if item["name"].lower() == exe or pid_name == exe:
                    return item
            except Exception:
                continue
        return None

    def _update_state(self):
        self._session = self._find_spotify_session()
        self._update_label()

    def _update_label(self):
        volume_interface = self._get_volume_interface()
        if volume_interface is None:
            icon_volume = self._get_volume_icon()
            level_volume = "off"
            if self.config.tooltip:
                set_tooltip(self, "Spotify no reproduce audio.")
        else:
            try:
                mute_status = volume_interface.GetMute()
                level = round(volume_interface.GetMasterVolume() * 100)
                icon_volume = self._get_volume_icon(volume_interface, mute_status)
                level_volume = "mute" if mute_status else f"{level}%"
                if self.config.tooltip:
                    set_tooltip(self, f"Spotify {level}% {'(Muted)' if mute_status else ''}")
            except Exception as e:
                logging.error("Failed to get Spotify volume: %s", e)
                icon_volume = self._get_volume_icon()
                level_volume = "off"

        active_widgets = self._widgets_alt if getattr(self, "_show_alt_label", False) else self._widgets
        label_formats = self.config.label_alt if getattr(self, "_show_alt_label", False) else self.config.label
        label_options = {"{icon}": icon_volume, "{level}": level_volume}

        active_label_content = label_formats
        label_parts = re.split("(<span.*?>.*?</span>)", active_label_content)
        label_parts = [part for part in label_parts if part]
        widget_index = 0
        for part in label_parts:
            part = part.strip()
            if part:
                formatted_text = part
                for option, value in label_options.items():
                    formatted_text = formatted_text.replace(option, str(value))
                if widget_index < len(active_widgets) and hasattr(active_widgets[widget_index], "setText"):
                    active_widgets[widget_index].setText(formatted_text)
                widget_index += 1

    def _get_volume_icon(self, volume_interface=None, mute=False):
        if isinstance(self.config.icons, dict):
            if mute or (volume_interface is not None and volume_interface.GetMute()):
                return self.config.icons.get("muted", "")
            if volume_interface is None:
                return next(iter(self.config.icons.values()))
            volume = round(volume_interface.GetMasterVolume() * 100)
            for t in self._parsed_thresholds:
                if volume <= t:
                    return self.config.icons[str(t)]
            if self._parsed_thresholds:
                return self.config.icons[str(self._parsed_thresholds[-1])]
            return self.config.icons.get("muted", "")
        return self.config.icons[0]

    def _toggle_label(self):
        self._show_alt_label = not getattr(self, "_show_alt_label", False)
        for widget in self._widgets:
            widget.setVisible(not self._show_alt_label)
        for widget in self._widgets_alt:
            widget.setVisible(self._show_alt_label)
        self._update_label()

    def _set_volume(self, value: int):
        volume_interface = self._get_volume_interface()
        if volume_interface is None:
            return

        mute_status = False
        try:
            mute_status = bool(volume_interface.GetMute())
        except Exception:
            pass

        value = max(0, min(100, value))
        try:
            volume_interface.SetMasterVolume(float(value) / 100.0, None)
            if value > 0 and mute_status:
                try:
                    volume_interface.SetMute(False, None)
                except Exception:
                    pass
            self._update_label()
        except Exception as e:
            logging.error("Failed to set Spotify volume: %s", e)

    def toggle_mute(self):
        volume_interface = self._get_volume_interface()
        if volume_interface is None:
            return
        try:
            current = False
            try:
                current = bool(volume_interface.GetMute())
            except Exception:
                pass
            volume_interface.SetMute(not current, None)
            self._update_label()
        except Exception as e:
            logging.error("Failed to toggle Spotify mute: %s", e)

    def toggle_play_pause(self):
        _ = self.media.play_pause()

    def wheelEvent(self, event: QWheelEvent):
        delta = -event.angleDelta().y() if self.config.invert_wheel else event.angleDelta().y()
        if delta > 0:
            self._set_volume(self._current_level() + self.config.scroll_step)
        elif delta < 0:
            self._set_volume(self._current_level() - self.config.scroll_step)

    def _current_level(self) -> int:
        volume_interface = self._get_volume_interface()
        if volume_interface is None:
            return 0
        try:
            return round(volume_interface.GetMasterVolume() * 100)
        except Exception:
            return 0