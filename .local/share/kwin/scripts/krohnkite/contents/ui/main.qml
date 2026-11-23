/*
    SPDX-FileCopyrightText: 2018 Eon S. Jeon <esjeon@hyunmu.am>
    SPDX-FileCopyrightText: 2024 Vjatcheslav V. Kolchkov <akl334@protonmail.ch>

    SPDX-License-Identifier: MIT
*/

import QtQuick 2.15
import org.kde.plasma.core as PlasmaCore;
import org.kde.plasma.components as Plasma;
import org.kde.kwin 3.0;
import org.kde.taskmanager as TaskManager
import "../code/script.js" as K

Item {
    id: scriptRoot
    property var runtime: null

    Loader {
        id: iconInstaller
        source: "iconinstaller.qml"

        onLoaded: item.install()
        onStatusChanged: {
            if (status === Loader.Error)
                console.warn("KROHNKITE: icon installer unavailable; "
                    + "install the Plasma5Support QML module or run install-icons.py manually");
        }
    }

    TaskManager.ActivityInfo {
        id: activityInfo
    }

    Loader {
        id: popupDialog
        source: "popup.qml"

        function showNotification(text, duration) {
            var area = Workspace.clientArea(KWin.FullScreenArea, Workspace.activeScreen, Workspace.currentDesktop);
            this.item.show(text, area, duration);
        }

        function showLayoutShortcut(entry, duration) {
            if (!this.item) return;
            var area = Workspace.clientArea(KWin.FullScreenArea, Workspace.activeScreen, Workspace.currentDesktop);
            this.item.showLayoutShortcut(entry, area, duration);
        }

        function showLayouts(entries, selected, duration) {
            if (!this.item) return;
            var area = Workspace.clientArea(KWin.FullScreenArea, Workspace.activeScreen, Workspace.currentDesktop);
            this.item.showLayouts(entries, selected, area, duration);
        }
    }

    Loader {
        id: layoutChooserDialog
        source: "layoutchooser.qml"

        function showLayouts(entries, selected, duration) {
            if (!this.item) return;
            var area = Workspace.clientArea(KWin.FullScreenArea, Workspace.activeScreen, Workspace.currentDesktop);
            this.item.showLayouts(entries, selected, area, duration);
        }

        function isOpen() {
            return this.item ? this.item.visible : false;
        }

        function hide() {
            if (this.item) this.item.visible = false;
        }

        function navigate(dx, dy) {
            if (this.item) this.item.navigate(dx, dy);
        }
    }

    Connections {
        target: layoutChooserDialog.item

        function onLayoutSelected(id) {
            if (runtime !== null) runtime.selectLayout(id);
        }
    }

    Loader {
        id: dragPreview
        source: "dragpreview.qml"

        function showRect(areaX, areaY, areaWidth, areaHeight, x, y, width, height, frameColor, borderColor) {
            if (this.item) this.item.showRect(areaX, areaY, areaWidth, areaHeight, x, y, width, height, frameColor, borderColor);
        }

        function hide() {
            if (this.item) this.item.hide();
        }
    }

    Component.onCompleted: {
        console.log("KROHNKITE: starting the script");
        const api = {
            "workspace": Workspace,
            // "options": Options,
            "kwin": KWin,
            "shortcuts": shortcutsLoader.item.shortcutList,
            "dbus": dbusCallLoader.item
        };

        runtime = new K.KWinRuntime(api);
        runtime.start();
    }

    Component.onDestruction: {
        configReloadTimer.stop();
        if (runtime !== null) {
            runtime.dispose();
            runtime = null;
        }
    }

    Connections {
        target: Options

        function onConfigChanged() {
            configReloadTimer.restart();
        }
    }

    Timer {
        id: configReloadTimer
        interval: 100
        repeat: false

        onTriggered: {
            if (runtime !== null)
                runtime.reloadIfChanged();
        }
    }
    Loader {
        id: shortcutsLoader;

        source: "shortcuts.qml";
    }

    Loader {
        id: dbusCallLoader;

        source: "dbus.qml"
    }
}
