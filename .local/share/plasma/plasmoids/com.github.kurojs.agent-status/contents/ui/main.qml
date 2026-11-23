import QtQuick
import QtQuick.Layouts
import org.kde.plasma.plasmoid
import org.kde.plasma.components as PlasmaComponents
import org.kde.plasma.plasma5support as Plasma5Support
import org.kde.kirigami as Kirigami

PlasmoidItem {
    id: root

    // Same behaviour as the YASB widget: an "active" state that hasn't been
    // refreshed within staleMs is treated as idle (owner died / went quiet).
    readonly property int staleMs: 8000
    readonly property int pollMs: 250

    readonly property var idleState: ({ emoji: "🟣", label: "York", color: "#9CC8C8", agent: "" })

    property var perAgent: ({})      // agent -> normalized state (or absent)
    property var current: idleState  // merged state shown in the bar
    property string stateKey: ""     // changes when emoji/label/color change (restarts the sweep)
    property color tint: "#9CC8C8"

    readonly property string readerScript: decodeURIComponent(
        Qt.resolvedUrl("../scripts/read-state.sh").toString().replace("file://", ""))

    function safeColor(c, fallback) {
        return (typeof c === "string" && /^#[0-9a-fA-F]{3,8}$/.test(c)) ? c : fallback
    }

    function esc(s) {
        return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function refresh(stdout) {
        const now = Date.now()
        const found = {}
        const lines = String(stdout).split("\n")
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i]
            const i1 = line.indexOf(" ")
            const i2 = line.indexOf(" ", i1 + 1)
            if (i1 < 0 || i2 < 0) continue
            const agent = line.slice(0, i1)
            const mtime = parseFloat(line.slice(i1 + 1, i2)) * 1000
            let st
            try { st = JSON.parse(line.slice(i2 + 1)) } catch (e) { continue }
            if (!st || typeof st !== "object" || !st.mode) continue
            const t = (typeof st.ts === "number") ? st.ts : mtime
            found[agent] = {
                agent: agent,
                mode: st.mode,
                emoji: st.emoji || "🔧",
                label: st.label || st.mode,
                color: safeColor(st.color, "#c99bff"),
                t: t,
                active: st.mode !== "idle" && (now - t) <= staleMs
            }
        }
        perAgent = found

        // Merge: most recently updated active agent wins; otherwise idle.
        let best = null
        for (const k in found) {
            const s = found[k]
            if (s.active && (best === null || s.t > best.t)) best = s
        }
        current = best ? best : idleState
        tint = current.color
        const key = current.emoji + "|" + current.label + "|" + current.color
        if (key !== stateKey) stateKey = key
    }

    toolTipMainText: "Agent Status"
    toolTipSubText: current.agent ? (current.agent + ": " + current.label) : "opencode / pi: idle"

    Plasma5Support.DataSource {
        engine: "executable"
        connectedSources: ["sh '" + root.readerScript + "'"]
        interval: root.pollMs
        onNewData: (source, data) => root.refresh(data["stdout"])
    }

    compactRepresentation: MouseArea {
        id: area
        hoverEnabled: true
        readonly property int pad: Kirigami.Units.largeSpacing
        Layout.minimumWidth: content.implicitWidth + 2 * pad
        Layout.preferredWidth: content.implicitWidth + 2 * pad
        onClicked: root.expanded = !root.expanded

        // YASB-style tinted container (10% -> 18% on hover)
        Rectangle {
            anchors.fill: parent
            anchors.topMargin: 4
            anchors.bottomMargin: 4
            radius: 2
            color: Qt.rgba(root.tint.r, root.tint.g, root.tint.b, area.containsMouse ? 0.18 : 0.10)
        }

        Connections {
            target: root
            function onStateKeyChanged() { sweep.restart() }
        }

        RowLayout {
            id: content
            anchors.centerIn: parent
            spacing: Kirigami.Units.largeSpacing

            PlasmaComponents.Label {
                textFormat: Text.RichText
                text: root.current.emoji + " <font color='" + root.current.color + "'>"
                      + root.esc(root.current.label) + "</font>"
                      + (root.current.agent
                         ? " <font color='" + Kirigami.Theme.disabledTextColor + "'>· "
                           + root.current.agent + "</font>"
                         : "")
            }
            SweepBar {
                id: sweep
                color: root.tint
                Layout.alignment: Qt.AlignVCenter
            }
        }
    }

    fullRepresentation: ColumnLayout {
        Layout.minimumWidth: Kirigami.Units.gridUnit * 14
        Layout.minimumHeight: Kirigami.Units.gridUnit * 4
        spacing: Kirigami.Units.smallSpacing

        Repeater {
            model: ["opencode", "pi"]
            RowLayout {
                required property string modelData
                readonly property var s: root.perAgent[modelData]
                readonly property bool on: s !== undefined && s.active
                Layout.fillWidth: true

                PlasmaComponents.Label { text: modelData; font.bold: true; Layout.fillWidth: true }
                PlasmaComponents.Label {
                    textFormat: Text.RichText
                    text: on ? (s.emoji + " <font color='" + s.color + "'>" + root.esc(s.label) + "</font>")
                             : "<font color='" + Kirigami.Theme.disabledTextColor + "'>"
                               + (s === undefined ? "sin datos" : "idle") + "</font>"
                }
            }
        }
        Item { Layout.fillHeight: true }
    }
}
