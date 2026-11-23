import QtQuick
import QtQuick.Controls as QQC2
import QtQuick.Layouts
import org.kde.kirigami as Kirigami
import org.kde.kcmutils as KCM
import org.kde.plasma.plasma5support as P5Support

KCM.SimpleKCM {
    id: page

    property string cfg_context
    property alias cfg_pollInterval: pollInterval.value
    property alias cfg_showFailedInPanel: showFailedInPanel.checked
    property alias cfg_showUnhealthyInPanel: showUnhealthyInPanel.checked
    property alias cfg_showRestartingInPanel: showRestartingInPanel.checked
    property alias cfg_showPausedInPanel: showPausedInPanel.checked
    property alias cfg_showStoppedInPanel: showStoppedInPanel.checked
    property alias cfg_showRunningInPanel: showRunningInPanel.checked
    property alias cfg_showZeroInPanel: showZeroInPanel.checked
    property alias cfg_showTotalInPanel: showTotalInPanel.checked
    property alias cfg_notifyOnProblem: notifyOnProblem.checked
    property alias cfg_showImages: showImages.checked

    // Docker contexts, as {name, current}.
    property var dockerContexts: []
    readonly property string currentContext: (dockerContexts.find(c => c.current) || {}).name || ""
    // Keep a configured context in the list even if it has since been removed.
    readonly property var contextChoices: {
        const names = dockerContexts.map(c => c.name)
        return cfg_context && !names.includes(cfg_context) ? names.concat([cfg_context]) : names
    }

    P5Support.DataSource {
        engine: "executable"
        connectedSources: ["docker context ls --format '{{.Name}}\t{{.Current}}'"]
        onNewData: (sourceName, data) => {
            disconnectSource(sourceName)
            page.dockerContexts = data["stdout"].split("\n").filter(line => line.trim()).map(line => {
                const [name, current] = line.split("\t")
                return { name: name, current: current === "true" }
            })
        }
    }

    Kirigami.FormLayout {
        QQC2.ComboBox {
            Kirigami.FormData.label: i18n("Docker context:")
            model: [page.currentContext ? i18n("Current context (%1)", page.currentContext) : i18n("Current context")]
                .concat(page.contextChoices)
            currentIndex: page.cfg_context ? page.contextChoices.indexOf(page.cfg_context) + 1 : 0
            onActivated: index => page.cfg_context = index === 0 ? "" : page.contextChoices[index - 1]
        }
        QQC2.Label {
            Layout.fillWidth: true
            wrapMode: Text.WordWrap
            font: Kirigami.Theme.smallFont
            opacity: 0.7
            text: i18n("Contexts come from \"docker context ls\", e.g. a Podman machine or a remote host. Add one widget per context to watch several.")
        }

        QQC2.SpinBox {
            id: pollInterval
            Kirigami.FormData.label: i18n("Check every:")
            from: 5
            to: 600
            stepSize: 5
            textFromValue: (value, locale) => i18np("%1 second", "%1 seconds", value)
            valueFromText: (text, locale) => parseInt(text)
        }

        QQC2.CheckBox {
            id: showFailedInPanel
            Kirigami.FormData.label: i18n("Show badges:")
            text: i18n("Failed (exited with an error)")
        }
        QQC2.CheckBox {
            id: showUnhealthyInPanel
            text: i18n("Unhealthy")
        }
        QQC2.CheckBox {
            id: showRestartingInPanel
            text: i18n("Restarting")
        }
        QQC2.CheckBox {
            id: showPausedInPanel
            text: i18n("Paused")
        }
        QQC2.CheckBox {
            id: showStoppedInPanel
            text: i18n("Stopped")
        }
        QQC2.CheckBox {
            id: showRunningInPanel
            text: i18n("Running")
        }
        QQC2.Switch {
            id: showZeroInPanel
            text: i18n("Also show states with no containers")
        }
        QQC2.Switch {
            id: showTotalInPanel
            text: i18n("Show the total, e.g. \"(of 7)\"")
        }

        QQC2.CheckBox {
            id: showImages
            Kirigami.FormData.label: i18n("Popup:")
            text: i18n("Show images, with a delete button for unused ones")
        }

        QQC2.CheckBox {
            id: notifyOnProblem
            Kirigami.FormData.label: i18n("Notifications:")
            text: i18n("Notify when a container fails or becomes unhealthy")
        }
    }
}
