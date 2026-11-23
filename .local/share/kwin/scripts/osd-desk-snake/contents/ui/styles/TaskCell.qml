pragma ComponentBehavior: Bound

import QtQuick
import "../logic.js" as Logic
import org.kde.kirigami as Kirigami

// Task style: icons of the windows on each desktop, the number when empty.
CellFrame {
    id: cell

    readonly property var icons: cell.modelData.icons || []
    readonly property int extra: cell.modelData.extra || 0

    showOccupiedDot: false
    contentWidth: icons.length > 0 ? row.implicitWidth : number.implicitWidth

    Row {
        id: row
        anchors.centerIn: parent
        spacing: Math.round(3 * cell.s.sizeFactor)
        visible: cell.icons.length > 0
        opacity: cell.foregroundOpacity

        Repeater {
            model: cell.icons

            Kirigami.Icon {
                required property var modelData
                width: cell.s.taskIconSize
                height: cell.s.taskIconSize
                source: modelData
            }
        }

        Text {
            anchors.verticalCenter: parent.verticalCenter
            visible: cell.extra > 0
            text: "+" + cell.extra
            textFormat: Text.PlainText
            color: cell.foreground
            font.family: cell.indicator.labelFont.family
            font.pixelSize: Math.round(cell.indicator.labelFont.pixelSize * 0.8)
        }
    }

    Text {
        id: number
        anchors.centerIn: parent
        visible: cell.icons.length === 0
        text: String(cell.index + 1)
        textFormat: Text.PlainText
        color: cell.foreground
        opacity: Logic.lerp(cell.indicator.inactiveOpacity * 0.7, 1, cell.weight)
        font.family: cell.indicator.labelFont.family
        font.pixelSize: cell.indicator.labelFont.pixelSize
        font.bold: cell.active ? cell.s.activeBold : cell.s.bold
    }
}
