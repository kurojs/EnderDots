import QtQuick
import org.kde.kirigami as Kirigami
import "../logic.js" as Logic

// Icon style: one icon per desktop from the configured list.
CellFrame {
    id: cell

    contentWidth: icon.width
    contentHeight: icon.height

    Kirigami.Icon {
        id: icon
        anchors.centerIn: parent
        width: cell.s.iconSize
        height: cell.s.iconSize
        source: Logic.iconFor(cell.index, cell.s.icons, cell.s.iconFallback)
        color: cell.foreground
        opacity: cell.foregroundOpacity
    }
}
