import QtQuick
import "logic.js" as Logic
import "schema.js" as Schema

// All user settings, one typed property per main.xml entry (lower camel case).
// load() takes a reader (key, default) -> value, e.g. KWin.readConfig; without
// a reader every property is reset to its default.
QtObject {
    id: root

    // { Key: [type, default] }, generated from main.xml by tools/gen_config_ui.py.
    readonly property var schema: Schema.entries
    // Zoom as a factor. The sizes in Schema.zoomed are loaded already multiplied by
    // it, so the drawing code only scales its own fixed margins.
    readonly property real sizeFactor: Math.max(10, zoom) / 100

    property int showDelay
    property int fadeInDuration
    property int displayDuration
    property int fadeOutDuration
    property int appearEffect
    property int highlightMotion
    property int animationDuration
    property int animationEasing
    property bool hideWithSingleDesktop
    property int caption

    property int positionMode
    property int anchor
    property int margin
    property int offsetX
    property int offsetY
    property real percentX
    property real percentY
    property bool snapToAnchors
    property int snapDistance
    property bool avoidPanels

    property int layout
    property int spacing
    property int padding

    property int zoom
    property int style
    property int highlight
    property bool markOccupied
    property int markSize
    property int markOffset
    property int markOpacity
    property int inactiveOpacity

    property int pillShape
    property int pillMark
    property int ringWidth
    property int ringGap
    property int pillWidth
    property int pillHeight
    property int pillActiveWidth
    property int pillActiveHeight
    property int pillRadius

    property int cellShape
    property int cellWidth
    property int cellHeight
    property int cellRadius
    property int squareSize
    property int lineWidth
    property int lineHeight
    property int lineOffset

    property int labelSource
    property string labelTemplate
    property string labelList
    property int fontSize
    property bool bold
    property bool activeBold

    property string iconList
    property string iconFallback
    property int iconSize

    property int taskIconSize
    property int maxTaskIcons

    property bool useThemeColors
    property color activeColor
    property color inactiveColor
    property color textColor
    property color activeTextColor
    property color occupiedColor

    property int backgroundMode
    property color backgroundColor
    property int backgroundRadius
    property int backgroundOpacity

    // Derived lists, split once per load instead of once per delegate.
    readonly property var labels: Logic.splitList(labelList)
    readonly property var icons: Logic.splitList(iconList)

    function load(read) {
        const zoomDefault = schema.Zoom[1];
        const factor = Math.max(10, Logic.toInt(read ? read("Zoom", zoomDefault) : zoomDefault, zoomDefault)) / 100;
        for (const key in schema) {
            const type = schema[key][0];
            const fallback = schema[key][1];
            const raw = read ? read(key, fallback) : fallback;
            const name = key.charAt(0).toLowerCase() + key.slice(1);
            let value;
            switch (type) {
            case "int":
                value = Logic.toInt(raw, fallback);
                break;
            case "bool":
                value = Logic.toBool(raw, fallback);
                break;
            case "real":
                value = Logic.toReal(raw, fallback);
                break;
            case "color":
                value = Logic.parseColor(raw, fallback);
                break;
            default:
                value = (raw === undefined || raw === null) ? fallback : String(raw);
            }
            if (Schema.zoomed.indexOf(key) >= 0) {
                value = Math.round(value * factor);
            }
            if (root[name] !== value) {
                root[name] = value;
            }
        }
    }

    Component.onCompleted: load(null)
}
