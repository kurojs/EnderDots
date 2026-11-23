import QtQuick
import QtQuick.Controls as QQC2
import QtQuick.Layouts
import org.kde.kirigami as Kirigami
import org.kde.kcmutils as KCM
import org.kde.kquickcontrols as KQuickControls
import org.kde.iconthemes as KIconThemes
import "../code/logic.js" as Logic
import "../code/look.js" as Look

KCM.SimpleKCM {
    id: page

    property bool cfg_useSharedLook
    property bool cfg_useSharedLookDefault

    // Sent when the shared look is edited, so the dialog enables Apply (it has no cfg_ property).
    signal configurationChanged()

    // With the shared look on, the controls below edit the shared look (saved for every widget
    // on Apply) instead of this widget's own settings. The logo image stays per widget.
    readonly property bool editingShared: cfg_useSharedLook && sharedDraft !== null
    property var sharedDraft: null
    property bool sharedDirty: false
    readonly property SharedLook sharedLook: SharedLook {
        onLoadedChanged: page.resetDraft()
        onValuesChanged: if (!page.sharedDirty) page.resetDraft()
    }

    readonly property var roleLabels: ({
        error: i18n("Error:"),
        attention: i18n("Attention:"),
        warning: i18n("Warning:"),
        active: i18n("Active:"),
        info: i18n("Info:"),
        ok: i18n("OK:"),
        neutral: i18n("Neutral:"),
        countBackground: i18n("Count background:")
    })

    // The shared colour roles, each with the states of this widget that use it.
    readonly property var roleRows: Look.roles.map(role => ({
        key: role,
        label: roleLabels[role],
        usedFor: Look.keysForRole(Logic.colorRoles, role).map(key => colorLabel(key)).join(", ")
    }))

    function colorLabel(key) {
        const setting = colorSettings.find(s => s.key === key)
        return setting ? setting.label.replace(/:$/, "") : key
    }

    // This widget's own appearance settings, as look.js expects them.
    function ownSettings() {
        const settings = {}
        for (const key of ["badgeStyle", "badgeSpacing", "logoSpacing", "showLogo"].concat(Object.keys(Logic.colorRoles))) {
            settings[key] = page["cfg_" + key]
        }
        return settings
    }

    // Start from the saved shared look or, before there is one, from this widget's own settings.
    function resetDraft() {
        if (sharedLook.loaded) {
            sharedDraft = sharedLook.values || Look.fromConfig(ownSettings(), Logic.colorRoles)
            sharedDirty = false
        }
    }

    function lookValue(key) {
        return editingShared ? sharedDraft[key] : page["cfg_" + key]
    }

    function setLookValue(key, value) {
        if (editingShared) {
            sharedDraft = Look.withValue(sharedDraft, key, value)
            sharedDirty = true
            configurationChanged()
        } else {
            page["cfg_" + key] = value
        }
    }

    // Colour rows use either a colour setting of this widget (colorFailed…) or a shared role (error…).
    function isRole(key) {
        return Look.roles.indexOf(key) >= 0
    }

    function colorValue(key) {
        if (isRole(key)) {
            return sharedDraft ? sharedDraft.colors[key] : Look.defaults.colors[key]
        }
        return page["cfg_" + key]
    }

    function colorDefault(key) {
        return isRole(key) ? Look.defaults.colors[key] : page["cfg_" + key + "Default"]
    }

    function setColorValue(key, value) {
        if (isRole(key)) {
            setLookValue(key, Look.colorName(value))
        } else {
            page["cfg_" + key] = value
        }
    }

    // Called by the settings dialog on Apply / OK.
    function saveConfig() {
        if (editingShared && sharedDirty) {
            sharedLook.save(sharedDraft)
            sharedDirty = false
        }
    }

    property string cfg_badgeStyle
    property string cfg_badgeStyleDefault
    property int cfg_badgeSpacing
    property int cfg_badgeSpacingDefault
    property int cfg_logoSpacing
    property int cfg_logoSpacingDefault
    property bool cfg_showLogo
    property bool cfg_showLogoDefault
    property string cfg_logoIcon
    property string cfg_logoIconDefault

    // The widget's own icon, used as the logo until another one is chosen.
    readonly property string defaultLogo: Qt.resolvedUrl("../images/logo.svg")

    property QtObject logoDialog: KIconThemes.IconDialog {
        title: i18n("Choose a Logo")
        onIconNameChanged: if (iconName) page.cfg_logoIcon = iconName
    }
    property color cfg_colorFailed
    property color cfg_colorFailedDefault
    property color cfg_colorUnhealthy
    property color cfg_colorUnhealthyDefault
    property color cfg_colorRestarting
    property color cfg_colorRestartingDefault
    property color cfg_colorPaused
    property color cfg_colorPausedDefault
    property color cfg_colorStopped
    property color cfg_colorStoppedDefault
    property color cfg_colorRunning
    property color cfg_colorRunningDefault
    property color cfg_colorCountBackground
    property color cfg_colorCountBackgroundDefault

    // One row per colour setting: the config key (without "cfg_") and its label.
    readonly property var colorSettings: [
        { key: "colorFailed", label: i18n("Failed:") },
        { key: "colorUnhealthy", label: i18n("Unhealthy:") },
        { key: "colorRestarting", label: i18n("Restarting:") },
        { key: "colorPaused", label: i18n("Paused:") },
        { key: "colorStopped", label: i18n("Stopped:") },
        { key: "colorRunning", label: i18n("Running:") },
        { key: "colorCountBackground", label: i18n("Count background:") }
    ]

    Kirigami.FormLayout {
        QQC2.CheckBox {
            Kirigami.FormData.label: i18n("Shared look:")
            text: i18n("Look the same as my other madebypless widgets")
            checked: page.cfg_useSharedLook
            onToggled: {
                page.cfg_useSharedLook = checked
                if (checked && !page.sharedLook.values && !page.sharedDirty) {
                    page.resetDraft()
                }
            }
        }

        QQC2.Label {
            Layout.fillWidth: true
            wrapMode: Text.WordWrap
            font: Kirigami.Theme.smallFont
            opacity: 0.7
            text: !page.cfg_useSharedLook
                ? i18n("The settings below apply to this widget only.")
                : page.sharedLook.values
                    ? i18n("The settings below are shared: changing them changes every widget that uses the shared look. The logo image is still chosen per widget.")
                    : i18n("No shared look has been saved yet, so this widget still uses its own settings. Change anything below and apply, and it becomes the shared look for every widget with this option on.")
        }

        QQC2.ComboBox {
            Kirigami.FormData.label: i18n("Badge style:")
            model: [i18n("Square"), i18n("Rounded")]
            currentIndex: page.lookValue("badgeStyle") === "rounded" ? 1 : 0
            onActivated: index => page.setLookValue("badgeStyle", index === 1 ? "rounded" : "square")
        }

        RowLayout {
            Kirigami.FormData.label: i18n("Badge spacing:")

            QQC2.Slider {
                from: 0
                to: 16
                stepSize: 1
                snapMode: QQC2.Slider.SnapAlways
                value: page.lookValue("badgeSpacing")
                onMoved: page.setLookValue("badgeSpacing", value)
            }

            QQC2.Label {
                text: i18n("%1 px", page.lookValue("badgeSpacing"))
            }
        }

        QQC2.CheckBox {
            Kirigami.FormData.label: i18n("Logo:")
            text: i18n("Show a logo in front of the badges in the panel")
            checked: page.lookValue("showLogo")
            onToggled: page.setLookValue("showLogo", checked)
        }

        RowLayout {
            enabled: page.lookValue("showLogo")

            QQC2.Button {
                icon.name: page.cfg_logoIcon || page.defaultLogo
                text: i18n("Choose…")
                onClicked: page.logoDialog.open()
                QQC2.ToolTip.text: i18n("Pick an icon, or an image file such as a downloaded logo")
                QQC2.ToolTip.visible: hovered
            }

            QQC2.ToolButton {
                icon.name: "edit-reset"
                display: QQC2.AbstractButton.IconOnly
                text: i18n("Use the widget's own icon")
                enabled: page.cfg_logoIcon !== ""
                onClicked: page.cfg_logoIcon = ""
                QQC2.ToolTip.text: text
                QQC2.ToolTip.visible: hovered
            }
        }

        RowLayout {
            Kirigami.FormData.label: i18n("Logo spacing:")
            enabled: page.lookValue("showLogo")

            QQC2.Slider {
                from: 0
                to: 24
                stepSize: 1
                snapMode: QQC2.Slider.SnapAlways
                value: page.lookValue("logoSpacing")
                onMoved: page.setLookValue("logoSpacing", value)
            }

            QQC2.Label {
                text: i18n("+%1 px", page.lookValue("logoSpacing"))
            }
        }

        Item {
            Kirigami.FormData.isSection: true
            Kirigami.FormData.label: i18n("Colours")
        }

        QQC2.Label {
            Layout.fillWidth: true
            wrapMode: Text.WordWrap
            font: Kirigami.Theme.smallFont
            opacity: 0.7
            text: i18n("The symbol and number on each badge switch between white and dark text to stay readable on the colour you pick.")
        }

        // This widget's own colours, or the shared colour roles (both kept, so switching
        // only changes which rows are visible).
        Repeater {
            model: page.colorSettings

            RowLayout {
                required property var modelData
                readonly property bool isDefault: Qt.colorEqual(page.colorValue(modelData.key), page.colorDefault(modelData.key))

                visible: !page.editingShared
                Kirigami.FormData.label: modelData.label

                KQuickControls.ColorButton {
                    color: page.colorValue(modelData.key)
                    dialogTitle: modelData.label
                    showAlphaChannel: false
                    onAccepted: picked => page.setColorValue(modelData.key, picked)
                }

                QQC2.ToolButton {
                    icon.name: "edit-reset"
                    display: QQC2.AbstractButton.IconOnly
                    text: i18n("Reset to default")
                    enabled: !isDefault
                    onClicked: page.setColorValue(modelData.key, page.colorDefault(modelData.key))
                    QQC2.ToolTip.text: text
                    QQC2.ToolTip.visible: hovered
                }
            }
        }

        Repeater {
            model: page.roleRows

            RowLayout {
                required property var modelData
                readonly property bool isDefault: Qt.colorEqual(page.colorValue(modelData.key), page.colorDefault(modelData.key))

                visible: page.editingShared
                Kirigami.FormData.label: modelData.label

                KQuickControls.ColorButton {
                    color: page.colorValue(modelData.key)
                    dialogTitle: modelData.label
                    showAlphaChannel: false
                    onAccepted: picked => page.setColorValue(modelData.key, picked)
                }

                QQC2.ToolButton {
                    icon.name: "edit-reset"
                    display: QQC2.AbstractButton.IconOnly
                    text: i18n("Reset to default")
                    enabled: !isDefault
                    onClicked: page.setColorValue(modelData.key, page.colorDefault(modelData.key))
                    QQC2.ToolTip.text: text
                    QQC2.ToolTip.visible: hovered
                }

                // Which of this widget's states use the colour.
                QQC2.Label {
                    visible: modelData.key !== "countBackground"
                    text: modelData.usedFor || i18n("Not used by this widget")
                    opacity: modelData.usedFor ? 0.8 : 0.5
                    font: Kirigami.Theme.smallFont
                }
            }
        }
    }
}
