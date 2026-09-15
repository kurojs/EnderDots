from pydantic import Field

from core.validation.widgets.base_model import CallbacksConfig, CustomBaseModel


class SpotifyVolumeCallbacksConfig(CallbacksConfig):
    on_left: str = "toggle_mute"
    on_right: str = "do_nothing"


class SpotifyVolumeConfig(CustomBaseModel):
    label: str = "{icon} {level}"
    label_alt: str = "{icon} {level}"
    class_name: str = ""
    tooltip: bool = True
    scroll_step: int = Field(default=4, ge=1, le=100)
    invert_wheel: bool = False
    process: str = "Spotify.exe"
    icons: list[str] | dict[str, str] = {
        "muted": "\uf1f6",  # muted
        "10": "\uf001",  # very low
        "30": "\uf001",  # low
        "60": "\uf001",  # medium
        "100": "\uf001",  # high
    }
    callbacks: SpotifyVolumeCallbacksConfig = SpotifyVolumeCallbacksConfig()