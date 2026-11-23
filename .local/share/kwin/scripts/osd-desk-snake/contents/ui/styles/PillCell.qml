import QtQuick
import "../logic.js" as Logic

// Pill style: one marker per desktop (pill, circle, square, diamond or bar). Size,
// color and opacity follow the highlight weight, so the active shape slides from
// one desktop to the next as the highlight moves.
Item {
    id: cell

    required property int index
    required property var modelData
    required property var indicator

    readonly property var s: indicator.settings
    readonly property real weight: indicator.weightOf(index)
    readonly property var geo: Logic.markerGeometryAt(s.pillShape, weight, {
        width: s.pillWidth,
        height: s.pillHeight,
        activeWidth: s.pillActiveWidth,
        activeHeight: s.pillActiveHeight,
        radius: s.pillRadius
    })

    implicitWidth: geo.width
    implicitHeight: geo.height

    readonly property bool occupied: s.markOccupied && modelData.occupied
    readonly property bool ringMark: occupied && s.pillMark === 0
    readonly property real ringWidth: Math.max(1, Math.min(s.ringWidth, Math.min(geo.innerWidth, geo.innerHeight) / 2))
    // With a ring gap the pill shrinks inside its ring, back to full size as it becomes active.
    readonly property real inset: ringMark && s.ringGap > 0 ? (ringWidth + s.ringGap) * (1 - weight) : 0

    Rectangle {
        id: pill
        objectName: "pillFill"
        anchors.centerIn: parent
        width: Math.max(0, cell.geo.innerWidth - 2 * cell.inset)
        height: Math.max(0, cell.geo.innerHeight - 2 * cell.inset)
        radius: Math.max(0, Math.min(cell.geo.radius - cell.inset, width / 2, height / 2))
        rotation: cell.geo.rotation
        color: cell.indicator.mix(cell.indicator.inactiveColor, cell.indicator.activeColor, cell.weight)
        opacity: Logic.lerp(cell.indicator.inactiveOpacity, 1, cell.weight)
    }

    // Outline on desktops that hold windows, drawn inside the marker so every
    // marker keeps the same size. A sibling of the marker so it keeps full opacity
    // while the marker is dimmed; it fades out as the desktop becomes active.
    Rectangle {
        objectName: "pillRing"
        anchors.centerIn: parent
        width: cell.geo.innerWidth
        height: cell.geo.innerHeight
        radius: Math.min(cell.geo.radius, width / 2, height / 2)
        rotation: pill.rotation
        visible: cell.ringMark
        color: "transparent"
        border.width: cell.ringWidth
        border.color: cell.indicator.occupiedColor
        opacity: 0.9 * (1 - cell.weight)
    }

    // "Dot in the middle": the pill stays as on an empty desktop. Also on the
    // current desktop, in the highlighted text color so it shows on the pill.
    Rectangle {
        objectName: "pillDot"
        anchors.centerIn: parent
        visible: cell.occupied && cell.s.pillMark === 1
        width: cell.s.markSize
        height: cell.s.markSize
        radius: width / 2
        color: cell.indicator.mix(cell.indicator.occupiedColor, cell.indicator.activeTextColor, cell.weight)
        opacity: Math.max(0, Math.min(100, cell.s.markOpacity)) / 100
    }
}
