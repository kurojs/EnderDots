import QtQuick
import QtQuick.Layouts
import org.kde.kirigami as Kirigami

Rectangle {
    id: sq
    anchors.fill: parent
    color: "transparent"
    property real op: 0
    property alias col: rect.color
    property bool pulsing: false
    property real pulseT: 0.5
    opacity: pulsing ? cfg.pulseMin + pulseT * (cfg.pulseMax - cfg.pulseMin) : op
    Rectangle {
        id: rect
        anchors.centerIn: parent
        height: cfg.sqDefaultSize ? parent.height * 0.95 : cfg.sqHighlightHeight
        width : cfg.sqDefaultSize ? parent.width  * 0.95 : cfg.sqHighlightWidth
        radius: height*0.22
        z: -1
    }
    Behavior on opacity {
        enabled: !sq.pulsing
        NumberAnimation {
            duration: cfg.animationDuration
        }
    }
}
