import QtQuick

// Label style: number, desktop name, template or custom list.
CellFrame {
    id: cell

    contentWidth: label.implicitWidth
    contentHeight: label.implicitHeight
    stableWidth: Math.max(label.implicitWidth, boldest.advanceWidth)

    // The label as wide as it gets, bold if either state is.
    TextMetrics {
        id: boldest
        text: label.text
        font.family: label.font.family
        font.pixelSize: label.font.pixelSize
        font.bold: cell.s.bold || cell.s.activeBold
    }

    Text {
        id: label
        anchors.centerIn: parent
        text: cell.indicator.labelFor(cell.index)
        // Labels come from user settings and desktop names: never parse them as rich text.
        textFormat: Text.PlainText
        color: cell.foreground
        opacity: cell.foregroundOpacity
        font.family: cell.indicator.labelFont.family
        font.pixelSize: cell.indicator.labelFont.pixelSize
        font.bold: cell.active ? cell.s.activeBold : cell.s.bold
    }
}
