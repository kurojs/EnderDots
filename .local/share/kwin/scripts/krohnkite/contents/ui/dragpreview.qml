/*
    SPDX-FileCopyrightText: 2026 Krohnkite contributors

    SPDX-License-Identifier: MIT
*/

import QtQuick;
import org.kde.plasma.core as PlasmaCore;

/*
 * Ghost rectangle shown while dragging a window over a dock slot, so the user
 * can see where the window will land before releasing the mouse button.
 *
 * The dialog is an on-screen-display surface, frameless and always on top,
 * and it is meant to be transparent for input. On some KWin/X11 versions that
 * input transparency is not honored while the surface is mapped, so an idle
 * overlay would intercept clicks (observed as a 160x160 window at the
 * top-left corner). To avoid that, the dialog is unmapped whenever no preview
 * is active (`hide()`) and mapped again on demand.
 *
 * KWin re-runs OSD placement whenever the window is mapped or resized (see
 * Placement::placeOnScreenDisplay), which would override any position we set.
 * To cope with that, the window size/position are fixed to the active output
 * and only the inner rectangle moves; on the call that maps or relocates the
 * dialog the rectangle stays hidden, and it is only revealed on the next
 * (stable) call that re-asserts the position.
 */
PlasmaCore.Dialog {
    id: dragPreview

    type: PlasmaCore.Dialog.OnScreenDisplay
    flags: Qt.FramelessWindowHint | Qt.WindowStaysOnTopHint | Qt.WindowTransparentForInput | Qt.WindowDoesNotAcceptFocus
    location: PlasmaCore.Types.Floating
    backgroundHints: PlasmaCore.Dialog.NoBackground
    outputOnly: true
    hideOnWindowDeactivate: false

    visible: false

    /* Output(full screen) area the overlay is anchored to. */
    property int areaX: 0
    property int areaY: 0
    property int areaW: 0
    property int areaH: 0

    property color frameColor: Qt.rgba(0.24, 0.53, 0.94, 0.30)
    property color borderColor: Qt.rgba(0.24, 0.53, 0.94, 0.90)

    /* False until the dialog has been mapped and positioned for the current
     * area; the rectangle is revealed on the call after that settles. */
    property bool placed: false

    function showRect(ax, ay, aw, ah, x, y, w, h, frame, border) {
        if (frame !== undefined)
            frameColor = frame;
        if (border !== undefined)
            borderColor = border;

        if (aw <= 0 || ah <= 0 || w <= 0 || h <= 0) {
            hide();
            return;
        }

        var areaChanged = (areaX !== ax || areaY !== ay || areaW !== aw || areaH !== ah);
        if (areaChanged) {
            areaX = ax;
            areaY = ay;
            areaW = aw;
            areaH = ah;
            placed = false;
        }

        /* Position-only changes are always honored: the size is unchanged, so
         * KWin does not re-place the window. */
        dragPreview.x = areaX;
        dragPreview.y = areaY;

        previewRect.x = x - areaX;
        previewRect.y = y - areaY;
        previewRect.width = w;
        previewRect.height = h;

        if (areaChanged || !dragPreview.visible || !placed) {
            /* Mapping the dialog (or changing its size) makes KWin re-place the
             * OSD, which may override the position just set. Map it with the
             * rectangle hidden and wait for the next, size-stable call to reveal
             * the rectangle once the position has settled. */
            dragPreview.visible = true;
            previewRect.visible = false;
            placed = true;
            return;
        }

        previewRect.visible = true;
    }

    function hide() {
        previewRect.visible = false;
        dragPreview.visible = false;
        placed = false;
    }

    mainItem: Item {
        width: dragPreview.areaW
        height: dragPreview.areaH

        Rectangle {
            id: previewRect

            visible: false
            color: dragPreview.frameColor
            border.width: 2
            border.color: dragPreview.borderColor
            radius: 4
        }
    }
}
