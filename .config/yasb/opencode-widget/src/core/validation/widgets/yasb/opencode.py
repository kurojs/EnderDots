from pydantic import Field

from core.validation.widgets.base_model import CallbacksConfig, CustomBaseModel


class OpenCodeConfig(CustomBaseModel):
    class_name: str = "opencode-widget"
    state_file: str
    pi_state_file: str | None = None
    poll_interval: int = Field(default=250, ge=50)
    anim_interval: int = Field(default=33, ge=16)
    columns: int = Field(default=16, ge=1, le=64)
    bar_width: int = Field(default=3, ge=1)
    bar_spacing: int = Field(default=2, ge=0)
    bar_height: int = Field(default=16, ge=1)
    sigma: float = Field(default=1.5, gt=0)
    trail: float = Field(default=2.0, gt=0)
    envelope: float = Field(default=6.5, gt=0)
    step: float = Field(default=0.37, gt=0)
    min_alpha: float = Field(default=0.15, ge=0, le=1)
    font_family: str = "なぎの"
    font_size: int = Field(default=20, ge=6, le=64)
    callbacks: CallbacksConfig = CallbacksConfig()