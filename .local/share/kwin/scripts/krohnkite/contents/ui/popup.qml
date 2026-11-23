/*
    SPDX-FileCopyrightText: 2018 Eon S. Jeon <esjeon@hyunmu.am>
    SPDX-FileCopyrightText: 2024 Vjatcheslav V. Kolchkov <akl334@protonmail.ch>

    SPDX-License-Identifier: MIT
*/

import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts 1.15
import org.kde.plasma.core as PlasmaCore;
import org.kde.kirigami as Kirigami

/*
 * Component Documentation
 *  - PlasmaCore global `theme` object:
 *      https://techbase.kde.org/Development/Tutorials/Plasma2/QML2/API#Plasma_Themes
 *  - PlasmaCore.Dialog:
 *      https://techbase.kde.org/Development/Tutorials/Plasma2/QML2/API#Top_Level_windows
 */

PlasmaCore.Dialog {
    id: popupDialog
    type: PlasmaCore.Dialog.OnScreenDisplay
    flags: Qt.Popup | Qt.WindowDoesNotAcceptFocus
    location: PlasmaCore.Types.Floating
    outputOnly: true

    visible: false
    property string layoutIcon: ""
    property var layouts: []
    property string selectedLayout: ""

    readonly property int layoutCardWidth: 150
    readonly property int layoutCardHeight: 96
    readonly property int layoutSpacing: 10
    property int layoutColumns: 1

    mainItem: Item {
        width: popupDialog.layouts.length > 0 ? layoutGrid.width : shortcutRow.width
        height: popupDialog.layouts.length > 0 ? layoutGrid.height : shortcutRow.height

        RowLayout {
            id: shortcutRow
            visible: popupDialog.layouts.length === 0
            width: implicitWidth
            height: implicitHeight
            spacing: 8

            Image {
                visible: popupDialog.layoutIcon !== ""
                source: popupDialog.layoutIcon === "" ? "" : Qt.resolvedUrl("layouts/" + popupDialog.layoutIcon + ".svg")
                Layout.preferredWidth: 40
                Layout.preferredHeight: 40
                fillMode: Image.PreserveAspectFit
                sourceSize.width: 80
                sourceSize.height: 80
            }

            Label {
                id: messageLabel
                padding: 10

                font.pointSize: Math.round(10)
                font.weight: Font.Bold
            }
        }

        Grid {
            id: layoutGrid
            visible: popupDialog.layouts.length > 0
            columns: popupDialog.layoutColumns
            spacing: popupDialog.layoutSpacing
            width: columns * popupDialog.layoutCardWidth + (columns - 1) * spacing
            height: Math.max(0, Math.ceil(popupDialog.layouts.length / Math.max(1, columns)) * popupDialog.layoutCardHeight
                + (Math.max(1, Math.ceil(popupDialog.layouts.length / Math.max(1, columns))) - 1) * spacing)

            Repeater {
                model: popupDialog.layouts

                delegate: Rectangle {
                    required property var modelData

                    width: popupDialog.layoutCardWidth
                    height: popupDialog.layoutCardHeight
                    radius: 8
                    color: modelData.id === popupDialog.selectedLayout
                        ? Kirigami.Theme.highlightColor
                        : Kirigami.Theme.alternateBackgroundColor
                    border.width: modelData.id === popupDialog.selectedLayout ? 2 : 1
                    border.color: modelData.id === popupDialog.selectedLayout
                        ? Kirigami.Theme.highlightColor
                        : Kirigami.Theme.disabledTextColor

                    Column {
                        anchors.centerIn: parent
                        width: parent.width - 16
                        spacing: 6

                        Image {
                            anchors.horizontalCenter: parent.horizontalCenter
                            source: Qt.resolvedUrl("layouts/" + modelData.icon + ".svg")
                            width: 64
                            height: 38
                            fillMode: Image.PreserveAspectFit
                            sourceSize.width: 128
                            sourceSize.height: 76
                        }

                        Label {
                            width: parent.width
                            text: modelData.name
                            horizontalAlignment: Text.AlignHCenter
                            elide: Text.ElideRight
                            font.bold: modelData.id === popupDialog.selectedLayout
                            color: modelData.id === popupDialog.selectedLayout
                                ? Kirigami.Theme.highlightedTextColor
                                : Kirigami.Theme.textColor
                        }
                    }
                }
            }
        }

        /* hides the popup window when triggered */
        Timer {
            id: hideTimer
            repeat: false

            onTriggered: {
                popupDialog.visible = false;
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
            popupDialog.x = area.x + (area.width - popupDialog.width) / 2;
            popupDialog.y = area.y + (area.height - popupDialog.height) / 2;
        });
    }

    function show(text, area, duration) {
        hideTimer.stop();

        layouts = [];
        selectedLayout = "";
        layoutIcon = "";
        messageLabel.text = text;

        center(area);
        visible = true;

        hideTimer.interval = duration;
        hideTimer.start();
    }

    function showLayoutShortcut(entry, area, duration) {
        hideTimer.stop();

        layouts = [];
        selectedLayout = "";
        layoutIcon = entry.icon;
        messageLabel.text = entry.name;

        center(area);
        visible = true;

        hideTimer.interval = duration;
        hideTimer.start();
    }

    function showLayouts(entries, selected, area, duration) {
        hideTimer.stop();

        layoutIcon = "";
        messageLabel.text = "";
        layouts = entries;
        selectedLayout = selected;
        layoutColumns = layoutColumnsFor(entries.length, area);

        center(area);
        visible = true;

        hideTimer.interval = duration;
        hideTimer.start();
    }
}
