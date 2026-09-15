from core.validation.widgets.base_model import CallbacksConfig, CustomBaseModel


class WorkspacesCallbacksConfig(CallbacksConfig):
    on_left: str = "activate_workspace"
    on_middle: str = "do_nothing"
    on_right: str = "do_nothing"


class WorkspacesConfig(CustomBaseModel):
    label_workspace_btn: str = "{index}"
    label_workspace_active_btn: str = "{index}"
    callbacks: WorkspacesCallbacksConfig = WorkspacesCallbacksConfig()