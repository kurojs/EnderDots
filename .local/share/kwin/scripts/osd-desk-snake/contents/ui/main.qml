import QtQuick
import org.kde.kwin
import "logic.js" as Logic

// Entry point of the KWin script: listens to desktop changes and feeds the OSD.
Item {
    id: root

    function readSettings() {
        config.load((key, fallback) => KWin.readConfig(key, fallback));
    }

    // Workspace.windows is a QML list property; copy it into a plain array.
    function windows() {
        const list = Workspace.windows;
        const result = [];
        for (let i = 0; i < list.length; i++) {
            result.push(list[i]);
        }
        return result;
    }

    function collect(previous) {
        const desktops = Workspace.desktops;
        const current = Workspace.currentDesktop;
        const needWindows = config.markOccupied || config.style === 3;
        const grid = Logic.gridSize(desktops.length, Workspace.desktopGridWidth, Workspace.desktopGridHeight, config.layout);
        const areaOption = config.avoidPanels ? KWin.MaximizeArea : KWin.FullScreenArea;
        const area = Workspace.clientArea(areaOption, Workspace.activeScreen, current);
        return {
            desktops: Logic.desktopInfo(desktops, needWindows ? windows() : [], config.maxTaskIcons, Workspace.currentActivity),
            previousIndex: previous ? desktops.indexOf(previous) : -1,
            currentIndex: desktops.indexOf(current),
            columns: grid.columns,
            area: { x: area.x, y: area.y, width: area.width, height: area.height }
        };
    }

    // The OSD window only exists while it is shown: created on demand (about 2 ms)
    // and destroyed once faded out. A window kept hidden across a suspend or a
    // screen change could stop showing up on screen.
    function ensureOsd() {
        if (!osdLoader.item) {
            osdLoader.active = true;
        }
        return osdLoader.item;
    }

    function showOsd(previous) {
        if (previous) {
            gestureSettle.stop();
        }
        if (Workspace.isEffectActive("overview")) {
            return;
        }
        readSettings();
        if (config.hideWithSingleDesktop && Workspace.desktops.length < 2) {
            return;
        }
        ensureOsd().show(collect(previous));
        scheduleConfigRefresh();
    }

    Settings {
        id: config
        Component.onCompleted: root.readSettings()
    }

    Loader {
        id: osdLoader
        active: false
        sourceComponent: Osd {
            settings: config
            movable: root.liveAppOpen
            cursorPos: root.liveAppOpen ? Workspace.cursorPos : Qt.point(0, 0)
            onDropped: (x, y) => root.storeDrop(x, y)
            onClosed: Qt.callLater(() => {
                if (osdLoader.item && !osdLoader.item.visible) {
                    osdLoader.active = false;
                }
            })
        }
    }

    // Settings dialog: from System Settings, KWin script settings open in a
    // KCMultiDialog titled "Configure" (translated); from kcmshell6 the window class
    // is the module name. Neither names the script, so another script's settings
    // dialog also triggers this.
    // While one is open the indicator stays on screen and kwinrc is re-read every
    // second, so each Apply shows up right away.
    readonly property var settingsTitles: {
        const titles = ["Configure"];
        if (typeof i18nd === "function") {
            titles.push(i18nd("kcmutils6", "Configure"));
        }
        return titles;
    }
    property var settingsWindows: []
    // The live settings app (settings-app/) saves on every change and asks KWin to
    // re-read kwinrc itself, so only the cheap readConfig polling is needed then.
    readonly property string liveAppClass: "osd-desk-snake-settings"
    readonly property bool liveAppOpen: settingsWindows.some(w => String(w.resourceClass) === liveAppClass)

    function refreshFromConfig() {
        readSettings();
        if (osdLoader.item) {
            osdLoader.item.update(collect(null));
        }
    }

    function isSettingsWindow(w) {
        if (!w) {
            return false;
        }
        const cls = String(w.resourceClass);
        // kcmshell6 names the window after the module, which only serves script and effect settings.
        if (cls === "kcm_kwin4_genericscripted" || cls === root.liveAppClass) {
            return true;
        }
        return cls === "systemsettings" && settingsTitles.indexOf(String(w.caption)) >= 0;
    }

    function isLiveApp(w) {
        return !!w && String(w.resourceClass) === liveAppClass;
    }

    function trackWindow(w) {
        if (isSettingsWindow(w) && settingsWindows.indexOf(w) < 0) {
            settingsWindows = settingsWindows.concat([w]);
            if (isLiveApp(w)) {
                closeSettingsDialogs();
            }
            updateSettingsMode();
        }
    }

    // The settings app replaces the System Settings page (usually opened from the
    // link at its top): close that page, which would otherwise write back the
    // values it was opened with on Apply.
    function closeSettingsDialogs() {
        settingsWindows.filter(w => !isLiveApp(w)).forEach(w => w.closeWindow());
    }

    function untrackWindow(w) {
        if (settingsWindows.indexOf(w) >= 0) {
            settingsWindows = settingsWindows.filter(x => x !== w);
            updateSettingsMode();
        }
    }

    function updateSettingsMode() {
        const open = settingsWindows.length > 0;
        if (open) {
            readSettings();
            const osd = ensureOsd();
            osd.pinned = true;
            osd.present(collect(null));
            settingsPoll.start();
            sendSizeFloors();
        } else {
            settingsPoll.stop();
            if (osdLoader.item) {
                osdLoader.item.unpin();
            }
        }
    }

    Connections {
        target: Workspace
        function onCurrentDesktopChanged(previous) {
            root.showOsd(previous);
        }
        function onWindowAdded(window) {
            root.trackWindow(window);
        }
        function onWindowActivated(window) {
            root.trackWindow(window);
            // Already open and brought back, e.g. by the link of the settings page.
            if (root.isLiveApp(window)) {
                root.closeSettingsDialogs();
            }
        }
        function onWindowRemoved(window) {
            root.untrackWindow(window);
        }
    }

    // The settings app stops its cell size fields where they stop changing anything.
    function sendSizeFloors() {
        if (!liveAppOpen || !osdLoader.item) {
            return;
        }
        sendLimits.arguments = [osdLoader.item.sizeFloors];
        sendLimits.call();
    }

    onLiveAppOpenChanged: sendSizeFloors()

    Connections {
        target: osdLoader.item
        ignoreUnknownSignals: true
        function onSizeFloorsChanged() {
            root.sendSizeFloors();
        }
    }

    DBusCall {
        id: sendLimits
        service: "org.kde.osddesksnake.settings"
        path: "/Settings"
        dbusInterface: "org.kde.osddesksnake.Settings"
        method: "setLimits"
    }

    // A script cannot write its own settings: hand the dropped position to the settings app.
    function storeDrop(x, y) {
        const osd = osdLoader.item;
        const values = Logic.dropResult(osd.area, { width: osd.indicatorSize.width, height: osd.indicatorSize.height }, { x: x, y: y }, {
            positionMode: config.positionMode,
            anchor: config.anchor,
            margin: config.margin,
            snap: config.snapToAnchors,
            snapDistance: config.snapDistance
        });
        sendToSettingsApp.arguments = [values];
        sendToSettingsApp.call();
    }

    DBusCall {
        id: sendToSettingsApp
        service: "org.kde.osddesksnake.settings"
        path: "/Settings"
        dbusInterface: "org.kde.osddesksnake.Settings"
        method: "setValues"
    }

    Timer {
        id: settingsPoll
        interval: root.liveAppOpen ? 250 : 1000
        repeat: true
        onTriggered: root.liveAppOpen ? root.refreshFromConfig() : reparseConfig.call()
    }

    Component.onCompleted: {
        windows().forEach(w => root.trackWindow(w));
    }

    // With a swipe gesture KWin only changes the current desktop when the fingers
    // are lifted. Watch the same gestures KWin uses to switch desktops (all matching
    // gestures run side by side, so this does not interfere) and show the indicator
    // as soon as the desktops start moving.
    property bool gestureShown: false

    function gestureProgress(gesture, progress) {
        if (progress <= 0) {
            return;
        }
        if ((gesture.horizontal ? Workspace.desktopGridWidth : Workspace.desktopGridHeight) < 2) {
            return;
        }
        gestureSettle.stop();
        if (!gestureShown) {
            gestureShown = true;
            showOsd(null);
        }
        const osd = osdLoader.item;
        if (osd) {
            osd.keepAlive();
            osd.followGesture(Logic.gestureOffset(gesture.dir, progress));
        }
    }

    function gestureEnded() {
        gestureShown = false;
        gestureSettle.restart();
    }

    // After the fingers are lifted KWin either switches desktop (handled by
    // onCurrentDesktopChanged, which continues the slide) or cancels; in the
    // latter case nothing else happens, so slide the highlight back.
    Timer {
        id: gestureSettle
        interval: 150
        onTriggered: {
            if (osdLoader.item) {
                osdLoader.item.settleHighlight();
            }
        }
    }

    Instantiator {
        // Mirrors VirtualDesktopManager's gesture registrations in KWin 6.6.
        model: [
            { direction: SwipeGestureHandler.Direction.Left, dir: "left", fingers: 3, device: SwipeGestureHandler.Device.Touchpad, horizontal: true },
            { direction: SwipeGestureHandler.Direction.Right, dir: "right", fingers: 3, device: SwipeGestureHandler.Device.Touchpad, horizontal: true },
            { direction: SwipeGestureHandler.Direction.Left, dir: "left", fingers: 4, device: SwipeGestureHandler.Device.Touchpad, horizontal: true },
            { direction: SwipeGestureHandler.Direction.Right, dir: "right", fingers: 4, device: SwipeGestureHandler.Device.Touchpad, horizontal: true },
            { direction: SwipeGestureHandler.Direction.Up, dir: "up", fingers: 3, device: SwipeGestureHandler.Device.Touchpad, horizontal: false },
            { direction: SwipeGestureHandler.Direction.Down, dir: "down", fingers: 3, device: SwipeGestureHandler.Device.Touchpad, horizontal: false },
            { direction: SwipeGestureHandler.Direction.Left, dir: "left", fingers: 3, device: SwipeGestureHandler.Device.Touchscreen, horizontal: true },
            { direction: SwipeGestureHandler.Direction.Right, dir: "right", fingers: 3, device: SwipeGestureHandler.Device.Touchscreen, horizontal: true }
        ]
        delegate: SwipeGestureHandler {
            required property var modelData
            direction: modelData.direction
            fingerCount: modelData.fingers
            deviceType: modelData.device
            onProgressChanged: root.gestureProgress(modelData, progress)
            onActivated: root.gestureEnded()
            onCancelled: root.gestureEnded()
        }
    }

    // KWin keeps kwinrc cached and the script settings dialog does not ask it to
    // reload. Scripting.start() re-reads kwinrc (already running scripts are left
    // alone), so call it shortly after a switch, once the switch animation is over,
    // then apply the new values to the OSD if it is still visible.
    property double lastConfigRefresh: 0

    function scheduleConfigRefresh() {
        if (Date.now() - lastConfigRefresh > 3000 && !refreshTimer.running) {
            refreshTimer.start();
        }
    }

    Timer {
        id: refreshTimer
        interval: 700
        onTriggered: {
            root.lastConfigRefresh = Date.now();
            reparseConfig.call();
        }
    }

    DBusCall {
        id: reparseConfig
        service: "org.kde.KWin"
        path: "/Scripting"
        dbusInterface: "org.kde.kwin.Scripting"
        method: "start"
        onFinished: root.refreshFromConfig()
    }
}
