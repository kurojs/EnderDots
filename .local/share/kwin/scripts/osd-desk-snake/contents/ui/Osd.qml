import QtQuick
import org.kde.kirigami as Kirigami
import "logic.js" as Logic

// The on-screen window: a plain transparent window, the indicator draws its own
// background. PlasmaCore.Dialog is avoided on purpose: inside KWin it sets a window
// mask and animating the window opacity both log a warning on every change.
//
// Two geometries. Compact (normal use): the window is exactly the indicator.
// Expanded (settings app open): the window covers the whole area and the indicator
// moves inside it, so dragging never changes the window geometry. That matters:
// effects such as "geometry change" animate every move of a window (with forced
// blur), which leaves trails when the window follows the pointer. For the same
// reason the window switches between the two geometries only while hidden.
Window {
    id: dialog

    property var settings
    // Geometry of the area the OSD is placed in (screen, or screen minus panels).
    property var area: ({ x: 0, y: 0, width: 0, height: 0 })
    // Movable while the settings app is open; otherwise the indicator ignores the pointer.
    property bool movable: false
    // Global pointer position, fed from Workspace.cursorPos while movable.
    property point cursorPos
    property bool dragging: false
    // Set once the settings app is open; the window stays expanded until it is
    // destroyed after fading out (main.qml), so it never has to collapse.
    property bool expanded: false
    // Expanded window geometry, only updated while hidden (see whileHidden).
    property rect frame
    readonly property bool pointerOnIndicator: movable && (dragging
        || (cursorPos.x >= x + indicator.x && cursorPos.x < x + indicator.x + indicator.width
            && cursorPos.y >= y + indicator.y && cursorPos.y < y + indicator.y + indicator.height))
    // Read by KWin (InternalWindow::hitTest) on every pointer move: when true, pointer
    // events go to what is below. The expanded window only takes the pointer over the
    // indicator itself.
    property bool outputOnly: !pointerOnIndicator

    // The user dropped the indicator here (its top-left, global coordinates).
    signal dropped(real x, real y)
    // The indicator faded out; the window can be destroyed (see main.qml).
    signal closed()

    // Lowest useful cell sizes, for the settings app (see Indicator.sizeFloors).
    readonly property var sizeFloors: indicator.sizeFloors
    // Size of the indicator itself (the expanded window is larger).
    readonly property size indicatorSize: Qt.size(Math.ceil(indicator.implicitWidth), Math.ceil(indicator.implicitHeight))
    // Signature of what the indicator shows; reassigning desktops rebuilds every
    // delegate and cuts running animations, so only do it when something changed.
    property string signature

    flags: Qt.BypassWindowManagerHint | Qt.FramelessWindowHint | Qt.WindowDoesNotAcceptFocus
    color: "transparent"
    visible: false
    // A QML Window under an Item otherwise waits for that item's window to show,
    // and the root of a KWin script has none.
    transientParent: null
    width: Math.max(1, expanded ? frame.width : indicatorSize.width)
    height: Math.max(1, expanded ? frame.height : indicatorSize.height)

    Indicator {
        id: indicator
        width: implicitWidth
        height: implicitHeight
        settings: dialog.settings
        // "Fade and zoom" grows the indicator while it fades in.
        scale: dialog.settings.appearEffect === 1 ? 0.85 + 0.15 * opacity : 1

        onImplicitWidthChanged: if (dialog.visible) dialog.place()
        onImplicitHeightChanged: if (dialog.visible) dialog.place()

        // Hint that the indicator can be dragged.
        Rectangle {
            anchors.fill: parent
            visible: dialog.movable
            color: "transparent"
            radius: Kirigami.Units.cornerRadius
            border.width: 2
            // Pale red: stands out from the indicator colors, only shown while configuring.
            border.color: "#ff8a8a"
            opacity: dialog.dragging ? 1 : 0.7
        }

        MouseArea {
            property point pressCursor
            property point pressPosition

            function follow() {
                indicator.x = Math.round(pressPosition.x + dialog.cursorPos.x - pressCursor.x);
                indicator.y = Math.round(pressPosition.y + dialog.cursorPos.y - pressCursor.y);
            }

            anchors.fill: parent
            enabled: dialog.movable && dialog.expanded
            cursorShape: dialog.dragging ? Qt.ClosedHandCursor : Qt.OpenHandCursor
            onPressed: {
                pressCursor = dialog.cursorPos;
                pressPosition = Qt.point(indicator.x, indicator.y);
                dialog.dragging = true;
            }
            onPositionChanged: if (dialog.dragging) follow()
            onReleased: {
                follow();
                dialog.dragging = false;
                dialog.dropped(dialog.x + indicator.x, dialog.y + indicator.y);
            }
            onCanceled: {
                dialog.dragging = false;
                dialog.place();
            }
        }
    }

    // Runs `change` with the window hidden, so no effect sees a geometry change.
    function whileHidden(change) {
        const wasVisible = dialog.visible;
        if (wasVisible) {
            dialog.visible = false;
        }
        change();
        if (wasVisible) {
            dialog.visible = true;
        }
    }

    function expand() {
        if (!expanded) {
            whileHidden(() => {
                expanded = true;
                place();
            });
        }
    }

    function place() {
        if (dragging) {
            return;
        }
        const size = { width: indicatorSize.width, height: indicatorSize.height };
        const p = settings.positionMode === 1
            ? Logic.freePosition(area, size, settings.percentX, settings.percentY)
            : Logic.anchorPosition(area, size, settings.anchor, settings.margin, settings.offsetX, settings.offsetY);
        if (expanded) {
            if (frame.x !== area.x || frame.y !== area.y || frame.width !== area.width || frame.height !== area.height) {
                whileHidden(() => {
                    frame = Qt.rect(area.x, area.y, area.width, area.height);
                    dialog.x = area.x;
                    dialog.y = area.y;
                });
            }
            indicator.x = p.x - area.x;
            indicator.y = p.y - area.y;
        } else {
            indicator.x = 0;
            indicator.y = 0;
            dialog.x = p.x;
            dialog.y = p.y;
        }
    }

    onMovableChanged: if (movable) expand()
    // Created while the settings app is already open.
    Component.onCompleted: if (movable) expand()

    readonly property int rows: Math.ceil(indicator.desktops.length / Math.max(1, indicator.columns))

    function pointOf(index) {
        const p = Logic.gridPoint(index, indicator.columns);
        return Qt.point(p.x, p.y);
    }

    // Animates the highlight to desktop `to`. Following motion: slides from wherever
    // the highlight is (possibly between two desktops, after a swipe). Cross-fade
    // motion: desktop `from` fades out while `to` fades in.
    function moveHighlight(from, to) {
        highlightAnimation.stop();
        crossfadeAnimation.stop();
        const instant = settings.animationDuration <= 0;
        if (indicator.crossfade) {
            indicator.fromIndex = from;
            indicator.crossProgress = instant ? 1 : 0;
            if (!instant) {
                crossfadeAnimation.start();
            }
            return;
        }
        const point = pointOf(to);
        if (instant) {
            indicator.highlight = point;
            return;
        }
        highlightAnimation.from = indicator.highlight;
        highlightAnimation.to = point;
        highlightAnimation.start();
    }

    // Swipe in progress: the highlight follows the fingers, offset in grid cells
    // from the desktop the swipe started on.
    function followGesture(offset) {
        if (indicator.crossfade) {
            return;
        }
        highlightAnimation.stop();
        const base = pointOf(indicator.currentIndex);
        const p = Logic.clampToGrid({ x: base.x + offset.x, y: base.y + offset.y }, indicator.columns, rows);
        indicator.highlight = Qt.point(p.x, p.y);
    }

    // Swipe cancelled: back to the current desktop.
    function settleHighlight() {
        moveHighlight(indicator.currentIndex, indicator.currentIndex);
    }

    function setContent(data) {
        const next = Logic.infoSignature(data.desktops);
        if (next !== signature) {
            signature = next;
            indicator.desktops = data.desktops;
        }
        indicator.columns = data.columns;
        // Final size before place(), which the callers run next.
        indicator.layoutNow();
    }

    // Data waiting for the "delay before showing" to elapse.
    property var pending: null
    // While pinned (settings dialog open) the indicator never fades out.
    property bool pinned: false

    function unpin() {
        pinned = false;
        if (dialog.visible) {
            hideTimer.restart();
        }
    }

    // data: { desktops, previousIndex, currentIndex, columns, area }
    function show(data) {
        if (!dialog.visible && settings.showDelay > 0) {
            // Switches during the delay collapse into one, from the first previous desktop.
            if (pending) {
                data.previousIndex = pending.previousIndex;
            }
            pending = data;
            delayTimer.restart();
            return;
        }
        present(data);
    }

    function present(data) {
        setContent(data);
        area = data.area;
        fadeOut.stop();

        // Opening: start from the previous desktop. Already shown: from the one shown.
        const from = dialog.visible ? indicator.currentIndex
                                    : (data.previousIndex >= 0 ? data.previousIndex : data.currentIndex);
        indicator.currentIndex = data.currentIndex;
        if (!dialog.visible) {
            // Open on the previous desktop and move to the new one, alongside KWin's
            // desktop switch animation.
            highlightAnimation.stop();
            indicator.highlight = pointOf(from);
            indicator.opacity = 0;
            place();
            dialog.visible = true;
        } else {
            place();
        }
        moveHighlight(from, data.currentIndex);
        fadeIn.restart();
        hideTimer.restart();
    }

    // Keeps a visible indicator on screen, e.g. while a swipe gesture is in progress.
    function keepAlive() {
        if (!dialog.visible) {
            return;
        }
        if (fadeOut.running) {
            fadeOut.stop();
            fadeIn.restart();
        }
        hideTimer.restart();
    }

    // Refreshes content and position without restarting the animation or the timer.
    function update(data) {
        if (!dialog.visible) {
            return;
        }
        setContent(data);
        area = data.area;
        if (!highlightAnimation.running) {
            // The grid may have changed (layout setting).
            indicator.highlight = pointOf(indicator.currentIndex);
        }
        place();
    }

    PropertyAnimation {
        id: highlightAnimation
        target: indicator
        property: "highlight"
        duration: dialog.settings.animationDuration
        easing.type: indicator.easing
    }

    NumberAnimation {
        id: crossfadeAnimation
        target: indicator
        property: "crossProgress"
        from: 0
        to: 1
        duration: dialog.settings.animationDuration
        easing.type: indicator.easing
    }

    NumberAnimation {
        id: fadeIn
        target: indicator
        property: "opacity"
        to: 1
        duration: dialog.settings.fadeInDuration
    }

    NumberAnimation {
        id: fadeOut
        target: indicator
        property: "opacity"
        to: 0
        duration: dialog.settings.fadeOutDuration
        onFinished: {
            dialog.visible = false;
            dialog.closed();
        }
    }

    Timer {
        id: delayTimer
        interval: Math.max(1, dialog.settings.showDelay)
        onTriggered: {
            const data = dialog.pending;
            dialog.pending = null;
            if (data) {
                dialog.present(data);
            }
        }
    }

    Timer {
        id: hideTimer
        interval: Math.max(100, dialog.settings.displayDuration)
        onTriggered: {
            if (dialog.pinned) {
                return;
            }
            fadeIn.stop();
            fadeOut.start();
        }
    }
}
