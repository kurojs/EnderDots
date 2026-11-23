/*
    SPDX-FileCopyrightText: 2026 Krohnkite contributors

    SPDX-License-Identifier: MIT
*/

import QtQuick 2.15
import QtQuick.Controls 2.15
import org.kde.plasma.core as PlasmaCore
import org.kde.kirigami as Kirigami

/*
 * Interactive layout chooser.
 *
 * This is a separate dialog from popup.qml on purpose: the notification popup
 * is an input-transparent on-screen display, while the chooser must receive
 * mouse clicks without triggering KWin's own window-drag action.
 */
PlasmaCore.Dialog {
    id: chooserDialog
    type: PlasmaCore.Dialog.Normal
    flags: Qt.FramelessWindowHint | Qt.WindowStaysOnTopHint | Qt.Tool
    location: PlasmaCore.Types.Floating
    outputOnly: false

    visible: false
    property var layouts: []
    property string selectedLayout: ""
    /* Auto-hide delay used only after keyboard navigation has started. Zero
     * keeps the chooser open until the user dismisses it explicitly. */
    property int hideDelay: 0
    /* Fill color of the active layout card; kept in one place so it can be
     * made configurable later. */
    property color activeLayoutColor: Kirigami.Theme.highlightColor
    readonly property int layoutCardWidth: 150
    readonly property int layoutCardHeight: 96
    readonly property int layoutSpacing: 10
    property int layoutColumns: 1

    signal layoutSelected(string id)

    onVisibleChanged: {
        if (!visible) hideTimer.stop();
    }

    mainItem: FocusScope {
        id: chooserItem
        width: layoutGrid.width + 24
        height: layoutGrid.height + 24
        focus: true

        /* Only armed by navigate(); opening the chooser leaves it stopped. */
        Timer {
            id: hideTimer
            repeat: false
            onTriggered: chooserDialog.visible = false
        }

        Keys.onEscapePressed: chooserDialog.visible = false

        Shortcut {
            sequence: "Escape"
            onActivated: chooserDialog.visible = false
        }

        /* Clicking the padding around the grid dismisses the chooser. */
        MouseArea {
            anchors.fill: parent
            acceptedButtons: Qt.LeftButton
            onClicked: chooserDialog.visible = false
        }

        Grid {
            id: layoutGrid
            anchors.centerIn: parent
            z: 1
            columns: chooserDialog.layoutColumns
            spacing: chooserDialog.layoutSpacing
            width: columns * chooserDialog.layoutCardWidth + (columns - 1) * spacing
            height: Math.max(0, Math.ceil(chooserDialog.layouts.length / Math.max(1, columns)) * chooserDialog.layoutCardHeight
                + (Math.max(1, Math.ceil(chooserDialog.layouts.length / Math.max(1, columns))) - 1) * spacing)

            Repeater {
                model: chooserDialog.layouts

                delegate: Rectangle {
                    id: layoutCard
                    required property var modelData

                    objectName: "layoutCard-" + modelData.id
                    width: chooserDialog.layoutCardWidth
                    height: chooserDialog.layoutCardHeight
                    radius: 8
                    color: modelData.id === chooserDialog.selectedLayout
                        ? chooserDialog.activeLayoutColor
                        : Kirigami.Theme.alternateBackgroundColor
                    border.width: modelData.id === chooserDialog.selectedLayout ? 2 : 1
                    border.color: (modelData.id === chooserDialog.selectedLayout
                        || cardMouseArea.containsMouse)
                        ? chooserDialog.activeLayoutColor
                        : Kirigami.Theme.disabledTextColor

                    Column {
                        anchors.centerIn: parent
                        width: parent.width - 16
                        spacing: 6

                        Image {
                            anchors.horizontalCenter: parent.horizontalCenter
                            source: Qt.resolvedUrl("layouts/" + layoutCard.modelData.icon + ".svg")
                            width: 64
                            height: 38
                            fillMode: Image.PreserveAspectFit
                            sourceSize.width: 128
                            sourceSize.height: 76
                        }

                        Label {
                            width: parent.width
                            text: layoutCard.modelData.name
                            horizontalAlignment: Text.AlignHCenter
                            elide: Text.ElideRight
                            font.bold: layoutCard.modelData.id === chooserDialog.selectedLayout
                            color: layoutCard.modelData.id === chooserDialog.selectedLayout
                                ? Kirigami.Theme.highlightedTextColor
                                : Kirigami.Theme.textColor
                        }
                    }

                    MouseArea {
                        id: cardMouseArea
                        anchors.fill: parent
                        hoverEnabled: true
                        cursorShape: Qt.PointingHandCursor
                        onClicked: {
                            chooserDialog.layoutSelected(layoutCard.modelData.id);
                            chooserDialog.visible = false;
                        }
                    }
                }
            }
        }
    }

    function layoutColumnsFor(count, area) {
        const maxByWidth = Math.min(4, Math.floor((area.width - 32) / (layoutCardWidth + layoutSpacing)));
        return Math.max(1, Math.min(Math.max(1, count), maxByWidth));
    }

    function center(area) {
        const width = mainItem.width;
        const height = mainItem.height;
        this.x = area.x + (area.width - width) / 2;
        this.y = area.y + (area.height - height) / 2;
        Qt.callLater(function() {
            chooserDialog.x = area.x + (area.width - chooserDialog.width) / 2;
            chooserDialog.y = area.y + (area.height - chooserDialog.height) / 2;
        });
    }

    function showLayouts(entries, selected, area, duration) {
        layouts = entries;
        selectedLayout = selected;
        hideDelay = duration > 0 ? duration : 0;
        layoutColumns = layoutColumnsFor(entries.length, area);

        hideTimer.stop();
        center(area);
        visible = true;
        chooserItem.forceActiveFocus();
    }

    /*
     * Move the selection by one card in the given direction, apply the newly
     * selected layout and re-arm the auto-hide timer. Left/right stay within
     * the current row, up/down move by a whole row, and the edges clamp
     * instead of wrapping.
     */
    function navigate(dx, dy) {
        if (layouts.length === 0) return;

        const columns = Math.max(1, layoutColumns);
        let index = 0;
        for (let i = 0; i < layouts.length; i++) {
            if (layouts[i].id === selectedLayout) {
                index = i;
                break;
            }
        }

        let next = index;
        if (dx !== 0) {
            const rowStart = Math.floor(index / columns) * columns;
            const rowEnd = Math.min(layouts.length - 1, rowStart + columns - 1);
            next = Math.min(rowEnd, Math.max(rowStart, index + dx));
        } else if (dy !== 0) {
            next = Math.min(layouts.length - 1, Math.max(0, index + dy * columns));
        }

        if (next !== index) {
            selectedLayout = layouts[next].id;
            layoutSelected(selectedLayout);
        }

        if (hideDelay > 0) {
            hideTimer.interval = hideDelay;
            hideTimer.restart();
        }
    }
}
