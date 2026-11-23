import QtQuick
import "../logic.js" as Logic

// Shared frame for the label, icon and task styles: Kara-like highlight
// (full, square, line, full + line) plus the "occupied" dot.
Item {
    id: frame

    required property int index
    required property var modelData
    required property var indicator

    property bool showOccupiedDot: true
    property real contentWidth: 0
    // contentWidth in its widest state (a label may be bold only when active).
    property real stableWidth: contentWidth
    // Height of the centered label or icon, the dot sits under it.
    property real contentHeight: 0
    default property alias content: contentArea.data

    readonly property var s: indicator.settings
    // 0..1, how close the moving highlight is to this desktop.
    readonly property real weight: indicator.weightOf(index)
    readonly property bool active: weight > 0.5
    // Color and opacity for whatever the style draws inside the frame.
    readonly property color foreground: indicator.highlightFills
        ? indicator.mix(indicator.textColor, indicator.activeTextColor, weight)
        : indicator.textColor
    readonly property real foregroundOpacity: Logic.lerp(indicator.inactiveOpacity, 1, weight)

    readonly property var geo: Logic.cellGeometry(s.cellShape, s.cellShape === 1 ? indicator.widestContent : contentWidth,
                                                  s.cellWidth, s.cellHeight, s.cellRadius, s.sizeFactor)

    // How far the content, the dot and the line reach above and below the shape.
    // The cell grows by that much, the shape staying at its size in the middle:
    // nothing leaves the indicator (the OSD window cuts it off in KWin) and the
    // rows of a grid keep apart. Depends on the settings only, not on which
    // desktops hold windows, so the indicator keeps its size.
    readonly property var extents: Logic.cellExtents(geo.height, contentHeight, [
        showOccupiedDot && s.markOccupied ? { offset: s.markOffset, height: s.markSize } : null,
        s.highlight === 2 || s.highlight === 3 ? { offset: s.lineOffset, height: s.lineHeight } : null
    ])
    // Top of the shape in the cell.
    readonly property real shapeY: extents.top

    implicitWidth: geo.width
    implicitHeight: geo.height + extents.top + extents.bottom

    // The highlight shapes of this cell at full weight, in cell coordinates. With
    // "slide with the switch" the indicator draws one highlight going from one
    // cell's shapes to the next; with the fades, each cell draws its own below.
    readonly property var highlightRects: {
        const w = geo.width;
        const h = geo.height;
        // The square grows with wide content (names) so the text stays inside; stays square for circles.
        const wanted = Math.max(s.squareSize, contentWidth + 10 * s.sizeFactor);
        const sw = s.cellShape === 1 ? Math.min(wanted, w, h) : Math.min(wanted, w);
        const sh = s.cellShape === 1 ? sw : Math.min(s.squareSize, h);
        const lw = Math.min(s.lineWidth, w);
        const top = shapeY;
        return {
            full: { x: 0, y: top, width: w, height: h, radius: geo.radius },
            square: { x: (w - sw) / 2, y: top + (h - sh) / 2, width: sw, height: sh,
                      radius: Logic.shapeRadius(s.cellShape, sw, sh, s.cellRadius) },
            line: { x: (w - lw) / 2, y: top + Logic.markY(h, contentHeight, s.lineOffset), width: lw, height: s.lineHeight,
                    radius: s.lineHeight / 2 }
        };
    }
    readonly property bool ownHighlight: !indicator.slides

    // Full (0), or dimmed full under a line (3).
    Rectangle {
        readonly property var r: frame.highlightRects.full
        x: r.x
        y: r.y
        width: r.width
        height: r.height
        visible: frame.ownHighlight && (frame.s.highlight === 0 || frame.s.highlight === 3)
        radius: r.radius
        color: frame.indicator.activeColor
        opacity: frame.weight * (frame.s.highlight === 3 ? 0.35 : 1)
    }

    // Square (1).
    Rectangle {
        readonly property var r: frame.highlightRects.square
        x: r.x
        y: r.y
        width: r.width
        height: r.height
        visible: frame.ownHighlight && frame.s.highlight === 1
        radius: r.radius
        color: frame.indicator.activeColor
        opacity: frame.weight
        scale: 0.6 + 0.4 * frame.weight
    }

    // Line (2) or line over a dimmed full (3).
    Rectangle {
        readonly property var r: frame.highlightRects.line
        anchors.horizontalCenter: parent.horizontalCenter
        y: r.y
        visible: frame.ownHighlight && (frame.s.highlight === 2 || frame.s.highlight === 3)
        width: r.width * frame.weight
        height: r.height
        radius: r.radius
        color: frame.indicator.activeColor
    }

    Rectangle {
        objectName: "occupiedDot"
        anchors.horizontalCenter: parent.horizontalCenter
        y: frame.shapeY + Logic.markY(frame.geo.height, frame.contentHeight, frame.s.markOffset)
        visible: frame.showOccupiedDot && frame.s.markOccupied && frame.modelData.occupied
        width: frame.s.markSize
        height: frame.s.markSize
        radius: frame.s.markSize / 2
        // Also on the current desktop; on a filled highlight it takes the text color to stay visible.
        color: frame.indicator.highlightFills
            ? frame.indicator.mix(frame.indicator.occupiedColor, frame.indicator.activeTextColor, frame.weight)
            : frame.indicator.occupiedColor
        opacity: Math.max(0, Math.min(100, frame.s.markOpacity)) / 100
    }

    // Content (label, icon...) centered on the shape.
    Item {
        id: contentArea
        y: frame.shapeY
        width: frame.width
        height: frame.geo.height
    }
}
