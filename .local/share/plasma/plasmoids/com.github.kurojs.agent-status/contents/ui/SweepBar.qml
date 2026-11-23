import QtQuick

// Port of the YASB "SweepBar": a bouncing sweep of vertical bars with a fading trail.
Item {
    id: bar

    property color color: "#9CC8C8"
    property int columns: 16
    property real barWidth: 3
    property real barSpacing: 2
    property real barHeight: 16
    property real sigma: 1.5
    property real trail: 2.0
    property real envelope: 6.5
    property real step: 0.5
    property real minAlpha: 0.15
    property int intervalMs: 33

    property real pos: columns - 1
    property int dir: -1

    implicitWidth: columns * (barWidth + barSpacing) - barSpacing
    implicitHeight: barHeight
    width: implicitWidth
    height: implicitHeight

    function restart() {
        pos = columns - 1
        dir = -1
    }

    function alphaAt(i, p, d) {
        const env = Math.exp(-Math.pow((p - (columns - 1) / 2) / envelope, 2))
        const dist = i - p
        const behind = d === -1 ? i > p : i < p
        const spread = sigma * (behind ? trail : 1.0)
        const a = env * Math.exp(-(dist * dist) / (2 * spread * spread))
        return Math.min(1.0, Math.max(minAlpha, a))
    }

    Timer {
        interval: bar.intervalMs
        repeat: true
        running: bar.visible
        onTriggered: {
            bar.pos += bar.dir * bar.step
            if (bar.pos <= 0) {
                bar.pos = 0
                bar.dir = 1
            } else if (bar.pos >= bar.columns - 1) {
                bar.pos = bar.columns - 1
                bar.dir = -1
            }
        }
    }

    Repeater {
        model: bar.columns
        Rectangle {
            required property int index
            x: index * (bar.barWidth + bar.barSpacing)
            width: bar.barWidth
            height: bar.height
            color: bar.color
            opacity: bar.alphaAt(index, bar.pos, bar.dir)
        }
    }
}
