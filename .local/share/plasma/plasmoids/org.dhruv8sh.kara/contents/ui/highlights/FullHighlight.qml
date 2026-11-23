import QtQuick
import QtQuick.Layouts
import org.kde.kirigami as Kirigami
Rectangle {
    id: full
    anchors.fill: parent
    z: -2
    property real op: 0
    property alias col: full.color
    property bool pulsing: false
    property real pulseT: 0.5
    opacity: pulsing ? cfg.pulseMin + pulseT * (cfg.pulseMax - cfg.pulseMin) : op
    Behavior on opacity {
        enabled: !full.pulsing
        NumberAnimation {
            duration: cfg.animationDuration
        }
    }
}
