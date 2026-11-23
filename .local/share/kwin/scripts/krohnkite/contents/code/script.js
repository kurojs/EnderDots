"use strict";
function getOppositeDirection(direction) {
    switch (direction) {
        case "right":
            return "left";
        case "left":
            return "right";
        case "up":
            return "down";
        case "down":
            return "up";
    }
}
const ArrangeReason = {
    forcedArrangeScreen: "forcedArrangeScreen",
    moveWindowToOutput: "moveWindowToOutput",
    transferWindowToVDesktop: "transferWindowToVDesktop",
    quickRelocationWindows: "quickRelocationWindows",
    relocationOutputChangedCB: "relocationOutputChangedCB",
    relocationCompletionCB: "relocationCompletionCB",
    manageDock: "manageDock",
    outputChangedCB: "outputChangedCB",
    activitiesChangedCB: "activitiesChangedCB",
    screensChangedCB: "screensChangedCB",
    virtualScreenGeometryChangedCB: "virtualScreenGeometryChangedCB",
    currentDesktopChangedCB: "currentDesktopChangedCB",
    windowRemovedCB: "windowRemovedCB",
    currentActivityChangedCB: "currentActivityChangedCB",
    windowAdded: "windowAdded",
    windowDesktopsChangedCB: "windowDesktopsChangedCB",
    windowFullScreenChangedCB: "windowFullScreenChangedCB",
    windowMinimizedChangedCB: "windowMinimizedChangedCB",
    windowSkipPagerCB: "windowSkipPagerCB",
    windowInteractiveMoveResizeSteppedCB: "WindowInteractiveMoveResizeSteppedCB",
    windowMoveResizedChangedCB: "windowMoveResizedChangedCB",
    windowBufferGeometryChangedCB: "windowBufferGeometryChangedCB",
    windowMaximizeAboutChangeCB: "windowMaximizeAboutChangeCB",
    stackingOrderChanged: "stackingOrderChanged",
    shortcutCB: "shortcutCB",
    shortcutLayoutCB: "shortcutLayoutCB",
};
const ConfigVariables = {
    tileLayoutInitialRotationAngle: "tileLayoutInitialRotationAngle",
    monocleMaximize: "monocleMaximize",
    monocleMinimizeRest: "monocleMinimizeRest",
    quarterLayoutReset: "quarterLayoutReset",
    columnsLayoutInitialRotationAngle: "columnsLayoutInitialRotationAngle",
    columnsBalanced: "columnsBalanced",
    columnsLayerConf: "columnsLayerConf",
    columnsApplyConfOnNewColumns: "columnsApplyConfOnNewColumns",
    columnsLimitColumns: "columnsLimitColumns",
    stairReverse: "stairReverse",
    spreadLayoutSpace: "spreadLayoutSpace",
    tileLayoutEnabled: "tileLayoutEnabled",
    monocleLayoutEnabled: "monocleLayoutEnabled",
    threeColumnLayoutEnabled: "threeColumnLayoutEnabled",
    spiralLayoutEnabled: "spiralLayoutEnabled",
    quarterLayoutEnabled: "quarterLayoutEnabled",
    stackedLayoutEnabled: "stackedLayoutEnabled",
    columnsLayoutEnabled: "columnsLayoutEnabled",
    spreadLayoutEnabled: "spreadLayoutEnabled",
    floatingLayoutEnabled: "floatingLayoutEnabled",
    stairLayoutEnabled: "stairLayoutEnabled",
    binaryTreeLayoutEnabled: "binaryTreeLayoutEnabled",
    cascadeLayoutEnabled: "cascadeLayoutEnabled",
    tileLayoutOrder: "tileLayoutOrder",
    monocleLayoutOrder: "monocleLayoutOrder",
    threeColumnLayoutOrder: "threeColumnLayoutOrder",
    spiralLayoutOrder: "spiralLayoutOrder",
    quarterLayoutOrder: "quarterLayoutOrder",
    stackedLayoutOrder: "stackedLayoutOrder",
    columnsLayoutOrder: "columnsLayoutOrder",
    spreadLayoutOrder: "spreadLayoutOrder",
    floatingLayoutOrder: "floatingLayoutOrder",
    stairLayoutOrder: "stairLayoutOrder",
    binaryTreeLayoutOrder: "binaryTreeLayoutOrder",
    cascadeLayoutOrder: "cascadeLayoutOrder",
    tileLayoutCapacity: "tileLayoutCapacity",
    threeColumnLayoutCapacity: "threeColumnLayoutCapacity",
    spiralLayoutCapacity: "spiralLayoutCapacity",
    stackedLayoutCapacity: "stackedLayoutCapacity",
    columnsLayoutCapacity: "columnsLayoutCapacity",
    spreadLayoutCapacity: "spreadLayoutCapacity",
    stairLayoutCapacity: "stairLayoutCapacity",
    binaryTreeLayoutCapacity: "binaryTreeLayoutCapacity",
    cascadeLayoutCapacity: "cascadeLayoutCapacity",
    srfExceededToScreen: "srfExceededToScreen",
    srfToScreenOrderLeft: "srfToScreenOrderLeft",
    srfToScreenOrderTop: "srfToScreenOrderTop",
    srfToScreenOrderRight: "srfToScreenOrderRight",
    srfToScreenOrderBottom: "srfToScreenOrderBottom",
    srfExceededToVDesktop: "srfExceededToVDesktop",
    srfToVDesktopOrderLeft: "srfToVDesktopOrderLeft",
    srfToVDesktopOrderTop: "srfToVDesktopOrderTop",
    srfToVDesktopOrderRight: "srfToVDesktopOrderRight",
    srfToVDesktopOrderBottom: "srfToVDesktopOrderBottom",
    srfOvercapacityEviction: "srfOvercapacityEviction",
    srfOvercapacityMode: "srfOvercapacityMode",
    srfAllowShortcutMoveToFullSurface: "srfAllowShortcutMoveToFullSurface",
    srfDefineCfg: "srfDefineCfg",
    srfDefaultConfig: "srfDefaultConfig",
    screenGapTop: "screenGapTop",
    screenGapLeft: "screenGapLeft",
    screenGapBetween: "screenGapBetween",
    screenGapRight: "screenGapRight",
    screenGapBottom: "screenGapBottom",
    gapsOverrideConfig: "gapsOverrideConfig",
    limitTileWidth: "limitTileWidth",
    limitTileWidthRatio: "limitTileWidthRatio",
    shortcutConf: "shortcutConf",
    altRegisterTimeout: "altRegisterTimeout",
    altRegisterIsToggle: "altRegisterIsToggle",
    altRegisterIsPushedTwice: "altRegisterIsPushedTwice",
    shortcutSequenceTime: "shortcutSequenceTime",
    adjustLayout: "adjustLayout",
    adjustLayoutLive: "adjustLayoutLive",
    focusNormal: "focusNormal",
    focusMeta: "focusMeta",
    focusMoveScreensNormal: "focusMoveScreensNormal",
    focusMoveVDesktopsNormal: "focusMoveVDesktopsNormal",
    focusMoveScreensMeta: "focusMoveScreensMeta",
    focusMoveVDesktopsMeta: "focusMoveVDesktopsMeta",
    movePointerOnFocus: "movePointerOnFocus",
    movePointerOnFocusShortcutsOnly: "movePointerOnFocusShortcutsOnly",
    movePointerOnResize: "movePointerOnResize",
    newWindowPosition: "newWindowPosition",
    ignoreClass: "ignoreClass",
    ignoreTitle: "ignoreTitle",
    ignoreRole: "ignoreRole",
    ignoreActivity: "ignoreActivity",
    ignoreScreen: "ignoreScreen",
    ignoreVDesktop: "ignoreVDesktop",
    tileNothing: "tileNothing",
    tilingClass: "tilingClass",
    screenDefaultLayout: "screenDefaultLayout",
    floatDefaultSizeEnable: "floatDefaultSizeEnable",
    floatDefaultWidth: "floatDefaultWidth",
    floatDefaultHeight: "floatDefaultHeight",
    floatRandomEnable: "floatRandomEnable",
    floatRandomWidth: "floatRandomWidth",
    floatRandomHeight: "floatRandomHeight",
    floatSizeStepWidth: "floatSizeStepWidth",
    floatSizeStepHeight: "floatSizeStepHeight",
    floatAsDefault: "floatAsDefault",
    floatUtility: "floatUtility",
    floatConfig: "floatConfig",
    dockOrderLeft: "dockOrderLeft",
    dockOrderTop: "dockOrderTop",
    dockOrderRight: "dockOrderRight",
    dockOrderBottom: "dockOrderBottom",
    dockHHeight: "dockHHeight",
    dockHWide: "dockHWide",
    dockHGap: "dockHGap",
    dockHEdgeGap: "dockHEdgeGap",
    dockHAlignment: "dockHAlignment",
    dockHEdgeAlignment: "dockHEdgeAlignment",
    dockVHeight: "dockVHeight",
    dockVWide: "dockVWide",
    dockVGap: "dockVGap",
    dockVEdgeGap: "dockVEdgeGap",
    dockVAlignment: "dockVAlignment",
    dockVEdgeAlignment: "dockVEdgeAlignment",
    dockSurfacesConfig: "dockSurfacesConfig",
    dockWindowClassConfig: "dockWindowClassConfig",
    dockFrameColor: "dockFrameColor",
    dockBorderColor: "dockBorderColor",
    dockTopDragZone: "dockTopDragZone",
    dockBottomDragZone: "dockBottomDragZone",
    dockLeftDragZone: "dockLeftDragZone",
    dockRightDragZone: "dockRightDragZone",
    tiledWindowsLayer: "tiledWindowsLayer",
    floatedWindowsLayer: "floatedWindowsLayer",
    soleWindowWidth: "soleWindowWidth",
    soleWindowHeight: "soleWindowHeight",
    soleWindowNoBorders: "soleWindowNoBorders",
    soleWindowNoGaps: "soleWindowNoGaps",
    soleWindowOutputOverride: "soleWindowOutputOverride",
    unfitGreater: "unfitGreater",
    unfitLess: "unfitLess",
    notificationDuration: "notificationDuration",
    layoutPerActivity: "layoutPerActivity",
    layoutPerDesktop: "layoutPerDesktop",
    noTileBorder: "noTileBorder",
    optVKeyboardSupport: "optVKeyboardSupport",
    keepTilingOnDrag: "keepTilingOnDrag",
    dragPreview: "dragPreview",
    preventMinimize: "preventMinimize",
    preventProtrusion: "preventProtrusion",
    floatSkipPagerWindows: "floatSkipPagerWindows",
    logging: "logging",
    logNewWindows: "logNewWindows",
    logFilteredWindows: "logFilteredWindows",
    logUnmanagedWindows: "logUnmanagedWindows",
    logWorkspaceSignals: "logWorkspaceSignals",
    logWorkspaceSignalsSubmodules: "logWorkspaceSignalsSubmodules",
    logWindowSignals: "logWindowSignals",
    logWindowSignalsSubmodules: "logWindowSignalsSubmodules",
    logOther: "logOther",
    logOtherSubmodules: "logOtherSubmodules",
    logFilter: "logFilter",
    logFilterStr: "logFilterStr",
};
const WindowState = {
    Unmanaged: "Unmanaged",
    NativeFullscreen: "NativeFullscreen",
    NativeMaximized: "NativeMaximized",
    Floating: "Floating",
    Maximized: "Maximized",
    Tiled: "Tiled",
    TiledAfloat: "TiledAfloat",
    Undecided: "Undecided",
    Docked: "Docked",
};
const KrohnkiteAction = {
    FocusNext: "FocusNext",
    FocusPrev: "FocusPrev",
    DWMLeft: "DWMLeft",
    DWMRight: "DWMRight",
    FocusUp: "FocusUp",
    FocusDown: "FocusDown",
    FocusLeft: "FocusLeft",
    FocusRight: "FocusRight",
    MoveLeft: "MoveLeft",
    MoveRight: "MoveRight",
    MoveUp: "MoveUp",
    MoveDown: "MoveDown",
    SwapUp: "SwapUp",
    SwapDown: "SwapDown",
    GrowWidth: "GrowWidth",
    GrowHeight: "GrowHeight",
    ShrinkWidth: "ShrinkWidth",
    ShrinkHeight: "ShrinkHeight",
    Increase: "Increase",
    Decrease: "Decrease",
    ToggleFloat: "ToggleFloat",
    ToggleFloatAll: "ToggleFloatAll",
    SetMaster: "SetMaster",
    NextLayout: "NextLayout",
    PreviousLayout: "PreviousLayout",
    LayoutChooser: "LayoutChooser",
    SetTileLayout: "SetTileLayout",
    SetMonocleLayout: "SetMonocleLayout",
    SetThreeColumnLayout: "SetThreeColumnLayout",
    SetSpreadLayout: "SetSpreadLayout",
    SetStairLayout: "SetStairLayout",
    SetFloatingLayout: "SetFloatingLayout",
    SetQuarterLayout: "SetQuarterLayout",
    SetStackedLayout: "SetStackedLayout",
    SetColumnsLayout: "SetColumnsLayout",
    SetSpiralLayout: "SetSpiralLayout",
    SetBinaryTreeLayout: "SetBinaryTreeLayout",
    SetCascadeLayout: "SetCascadeLayout",
    Rotate: "Rotate",
    RotatePart: "RotatePart",
    ToggleDock: "ToggleDock",
    RaiseSurfaceCapacity: "RaiseSurfaceCapacity",
    LowerSurfaceCapacity: "LowerSurfaceCapacity",
    ResetSurfaceCapacity: "ResetSurfaceCapacity",
    ShowCurrentCapacity: "ShowCurrentCapacity",
    AlterRegister: "AlterRegister",
    ToggleRegister: "ToggleRegister",
};
const LogModules = {
    newWindowAdded: "newWindowAdded",
    newWindowFiltered: "newWindowFiltered",
    newWindowUnmanaged: "newWindowUnmanaged",
    screensChanged: "screensChanged",
    virtualScreenGeometryChanged: "virtualScreenGeometryChanged",
    currentActivityChanged: "currentActivityChanged",
    currentDesktopChanged: "currentDesktopChanged",
    windowAdded: "windowAdded",
    windowActivated: "windowActivated",
    windowRemoved: "windowRemoved",
    surfaceChanged: "surfaceChanged",
    activitiesChanged: "activitiesChanged",
    bufferGeometryChanged: "bufferGeometryChanged",
    desktopsChanged: "desktopsChanged",
    fullScreenChanged: "fullScreenChanged",
    interactiveMoveResizeStepped: "interactiveMoveResizeStepped",
    maximizedAboutToChange: "maximizedAboutToChange",
    minimizedChanged: "minimizedChanged",
    moveResizedChanged: "moveResizedChanged",
    outputChanged: "outputChanged",
    stackingOrderChanged: "stackingOrderChanged",
    shortcut: "shortcut",
    arrangeScreen: "arrangeScreen",
    printConfig: "printConfig",
    setTimeout: "setTimeout",
    window: "window",
    dbus: "dbus",
};
const LogPartitions = {
    newWindow: {
        number: 100,
        name: "newWindow",
        modules: [
            LogModules.newWindowAdded,
            LogModules.newWindowFiltered,
            LogModules.newWindowUnmanaged,
        ],
    },
    workspaceSignals: {
        number: 200,
        name: "workspaceSignal",
        modules: [
            LogModules.screensChanged,
            LogModules.virtualScreenGeometryChanged,
            LogModules.currentActivityChanged,
            LogModules.currentDesktopChanged,
            LogModules.windowAdded,
            LogModules.windowActivated,
            LogModules.windowRemoved,
            LogModules.surfaceChanged,
        ],
    },
    windowSignals: {
        number: 300,
        name: "windowSignal",
        modules: [
            LogModules.activitiesChanged,
            LogModules.bufferGeometryChanged,
            LogModules.desktopsChanged,
            LogModules.fullScreenChanged,
            LogModules.interactiveMoveResizeStepped,
            LogModules.maximizedAboutToChange,
            LogModules.minimizedChanged,
            LogModules.moveResizedChanged,
            LogModules.outputChanged,
            LogModules.stackingOrderChanged,
        ],
    },
    other: {
        number: 1000,
        name: "other",
        modules: [
            LogModules.shortcut,
            LogModules.arrangeScreen,
            LogModules.printConfig,
            LogModules.setTimeout,
            LogModules.window,
            LogModules.dbus,
        ],
    },
};
let CONFIG;
let LOG;
let DBUS;
class Dock {
    constructor(cfg, priority = 0) {
        this.renderedOutputId = "";
        this.renderedTime = null;
        this.priority = priority;
        this.position = null;
        this.cfg = Object.assign({}, cfg);
        this.autoDock = false;
        this.caption = null;
    }
    clone() {
        let dock = new Dock(this.cfg, this.priority);
        dock.renderedOutputId = this.renderedOutputId;
        dock.renderedTime = this.renderedTime;
        dock.position = this.position;
        dock.autoDock = this.autoDock;
        dock.caption = this.caption;
        return dock;
    }
}
const DockPosition = {
    left: "left",
    right: "right",
    top: "top",
    bottom: "bottom",
};
const HDockAlignment = {
    center: 1,
    left: 2,
    right: 3,
};
const VDockAlignment = {
    center: 1,
    top: 2,
    bottom: 3,
};
const EdgeAlignment = {
    outside: 1,
    middle: 2,
    inside: 3,
};
class DefaultDockCfg {
    constructor() {
        let hHeight = validateNumber(CONFIG.dockHHeight, 1, 50);
        if (hHeight instanceof Err) {
            warning(`getDefaultCfg: hHeight: ${hHeight}`);
            this.hHeight = 25;
        }
        else
            this.hHeight = hHeight;
        let hWide = validateNumber(CONFIG.dockHWide, 1, 100);
        if (hWide instanceof Err) {
            warning(`getDefaultCfg: hWide: ${hWide}`);
            this.hWide = 100;
        }
        else
            this.hWide = hWide;
        let vHeight = validateNumber(CONFIG.dockVHeight, 1, 100);
        if (vHeight instanceof Err) {
            warning(`getDefaultCfg: vHeight: ${vHeight}`);
            this.vHeight = 100;
        }
        else
            this.vHeight = vHeight;
        let vWide = validateNumber(CONFIG.dockVWide, 1, 50);
        if (vWide instanceof Err) {
            warning(`getDefaultCfg: vWide: ${vWide}`);
            this.vWide = 25;
        }
        else
            this.vWide = vWide;
        let hGap = validateNumber(CONFIG.dockHGap);
        if (hGap instanceof Err) {
            warning(`getDefaultCfg: hGap: ${hGap}`);
            this.hGap = 0;
        }
        else
            this.hGap = hGap;
        let hEdgeGap = validateNumber(CONFIG.dockHEdgeGap);
        if (hEdgeGap instanceof Err) {
            warning(`getDefaultCfg: hEdgeGap: ${hEdgeGap}`);
            this.hEdgeGap = 0;
        }
        else
            this.hEdgeGap = hEdgeGap;
        let vGap = validateNumber(CONFIG.dockVGap);
        if (vGap instanceof Err) {
            warning(`getDefaultCfg: vGap: ${vGap}`);
            this.vGap = 0;
        }
        else
            this.vGap = vGap;
        let vEdgeGap = validateNumber(CONFIG.dockVEdgeGap);
        if (vEdgeGap instanceof Err) {
            warning(`getDefaultCfg: vEdgeGap: ${vEdgeGap}`);
            this.vEdgeGap = 0;
        }
        else
            this.vEdgeGap = vEdgeGap;
        let hAlignmentNumber = validateNumber(CONFIG.dockHAlignment);
        if (hAlignmentNumber instanceof Err) {
            warning(`getDefaultCfg: hAlignment: ${hAlignmentNumber}`);
            this.hAlignment = HDockAlignment.center;
        }
        else {
            switch (hAlignmentNumber) {
                case 0:
                    this.hAlignment = HDockAlignment.center;
                    break;
                case 1:
                    this.hAlignment = HDockAlignment.left;
                    break;
                case 2:
                    this.hAlignment = HDockAlignment.right;
                    break;
                default:
                    warning(`getDefaultCfg: hAlignment:${hAlignmentNumber} is not a valid alignment`);
                    this.hAlignment = HDockAlignment.center;
                    break;
            }
        }
        let hEdgeAlignmentNumber = validateNumber(CONFIG.dockHEdgeAlignment);
        if (hEdgeAlignmentNumber instanceof Err) {
            warning(`getDefaultCfg: hEdgeAlignment: ${hEdgeAlignmentNumber}`);
            this.hEdgeAlignment = EdgeAlignment.outside;
        }
        else {
            switch (hEdgeAlignmentNumber) {
                case 0:
                    this.hEdgeAlignment = EdgeAlignment.outside;
                    break;
                case 1:
                    this.hEdgeAlignment = EdgeAlignment.middle;
                    break;
                case 2:
                    this.hEdgeAlignment = EdgeAlignment.inside;
                    break;
                default:
                    warning(`getDefaultCfg: hEdgeAlignment:${hEdgeAlignmentNumber} is not a valid alignment`);
                    this.hEdgeAlignment = EdgeAlignment.outside;
                    break;
            }
        }
        let vAlignmentNumber = validateNumber(CONFIG.dockVAlignment);
        if (vAlignmentNumber instanceof Err) {
            warning(`getDefaultCfg: vAlignment: ${vAlignmentNumber}`);
            this.vAlignment = VDockAlignment.center;
        }
        else {
            switch (vAlignmentNumber) {
                case 0:
                    this.vAlignment = VDockAlignment.center;
                    break;
                case 1:
                    this.vAlignment = VDockAlignment.top;
                    break;
                case 2:
                    this.vAlignment = VDockAlignment.bottom;
                    break;
                default:
                    warning(`getDefaultCfg: vAlignment: ${vAlignmentNumber} is not valid alignment`);
                    this.vAlignment = VDockAlignment.center;
                    break;
            }
        }
        let vEdgeAlignmentNumber = validateNumber(CONFIG.dockVEdgeAlignment);
        if (vEdgeAlignmentNumber instanceof Err) {
            warning(`getDefaultCfg: vEdgeAlignment: ${vEdgeAlignmentNumber}`);
            this.vEdgeAlignment = EdgeAlignment.outside;
        }
        else {
            switch (vEdgeAlignmentNumber) {
                case 0:
                    this.vEdgeAlignment = EdgeAlignment.outside;
                    break;
                case 1:
                    this.vEdgeAlignment = EdgeAlignment.middle;
                    break;
                case 2:
                    this.vEdgeAlignment = EdgeAlignment.inside;
                    break;
                default:
                    warning(`getDefaultCfg: vEdgeAlignment:${vEdgeAlignmentNumber} is not a valid alignment`);
                    this.vEdgeAlignment = EdgeAlignment.outside;
                    break;
            }
        }
    }
    static get instance() {
        if (!DefaultDockCfg._dockInstance) {
            DefaultDockCfg._dockInstance = new DefaultDockCfg();
        }
        return DefaultDockCfg._dockInstance;
    }
    static reset() {
        DefaultDockCfg._dockInstance = undefined;
    }
    cloneAndUpdate(cfg) {
        return Object.assign({}, DefaultDockCfg.instance, cfg);
    }
}
class DockEntry {
    constructor(cfg, id) {
        this.tilesArea = null;
        this.dockCfg = cfg;
        this._slots = this.parseSlots();
        this._id = id;
    }
    get id() {
        return this._id;
    }
    get slots() {
        return this._slots;
    }
    remove(window) {
        for (let slot of this.slots) {
            slot.remove(window);
        }
    }
    clearSlots() {
        for (const slot of this.slots) {
            slot.windows = [];
        }
    }
    arrange(dockedWindows, workingArea) {
        const IS_WIDE = workingArea.width > workingArea.height;
        const renderedTime = getTime();
        const renderedOutputId = this.id;
        this.arrangeSlots(dockedWindows);
        this.assignSizes(workingArea);
        const leftSlot = this.getSlot(DockPosition.left);
        const rightSlot = this.getSlot(DockPosition.right);
        const topSlot = this.getSlot(DockPosition.top);
        const bottomSlot = this.getSlot(DockPosition.bottom);
        let leftBorder = workingArea.x;
        let width = workingArea.width;
        let topBorder = workingArea.y;
        let height = workingArea.height;
        const mark = (window) => {
            window.dock.renderedTime = renderedTime;
            window.dock.renderedOutputId = renderedOutputId;
        };
        const leftSlotArrange = () => {
            if (leftSlot === null)
                return;
            const windows = leftSlot.windows;
            if (windows.length === 1) {
                const cfg = windows[0].dock.cfg;
                const leftSlotHeight = Math.min((workingArea.height * cfg.vHeight) / 100, height);
                const initRect = new Rect(leftBorder, topBorder, (workingArea.width * cfg.vWide) / 100, leftSlotHeight);
                leftBorder = leftBorder + initRect.width;
                width = width - initRect.width;
                windows[0].geometry = DockEntry.align(initRect, leftSlot.position, cfg, height);
                mark(windows[0]);
                return;
            }
            const cfg = windows[0].dock.cfg;
            const stripWidth = Math.min((workingArea.width * cfg.vWide) / 100, width);
            const [alignedWidth, alignedLeft] = DockEntry.alignEdge(stripWidth, leftBorder, cfg.vEdgeGap, leftSlot.position, cfg.vEdgeAlignment);
            this.layoutVertical(windows, alignedLeft, topBorder, alignedWidth, height, cfg, mark);
            leftBorder = leftBorder + stripWidth;
            width = width - stripWidth;
        };
        const rightSlotArrange = () => {
            if (rightSlot === null)
                return;
            const windows = rightSlot.windows;
            if (windows.length === 1) {
                const cfg = windows[0].dock.cfg;
                const rightSlotHeight = Math.min((workingArea.height * cfg.vHeight) / 100, height);
                const initRect = new Rect(workingArea.x +
                    workingArea.width -
                    (workingArea.width * cfg.vWide) / 100, topBorder, (workingArea.width * cfg.vWide) / 100, rightSlotHeight);
                width = width - initRect.width;
                windows[0].geometry = DockEntry.align(initRect, rightSlot.position, cfg, height);
                mark(windows[0]);
                return;
            }
            const cfg = windows[0].dock.cfg;
            const stripWidth = Math.min((workingArea.width * cfg.vWide) / 100, width);
            const [alignedWidth, alignedLeft] = DockEntry.alignEdge(stripWidth, workingArea.x + workingArea.width - stripWidth, cfg.vEdgeGap, rightSlot.position, cfg.vEdgeAlignment);
            this.layoutVertical(windows, alignedLeft, topBorder, alignedWidth, height, cfg, mark);
            width = width - stripWidth;
        };
        const topSlotArrange = () => {
            if (topSlot === null)
                return;
            const windows = topSlot.windows;
            if (windows.length === 1) {
                const cfg = windows[0].dock.cfg;
                const topSlotWidth = Math.min((workingArea.width * cfg.hWide) / 100, width);
                const initRect = new Rect(leftBorder, topBorder, topSlotWidth, (workingArea.height * cfg.hHeight) / 100);
                topBorder = topBorder + initRect.height;
                height = height - initRect.height;
                windows[0].geometry = DockEntry.align(initRect, topSlot.position, cfg, width);
                mark(windows[0]);
                return;
            }
            const cfg = windows[0].dock.cfg;
            const stripHeight = Math.min((workingArea.height * cfg.hHeight) / 100, height);
            const [alignedHeight, alignedTop] = DockEntry.alignEdge(stripHeight, topBorder, cfg.hEdgeGap, topSlot.position, cfg.hEdgeAlignment);
            this.layoutHorizontal(windows, leftBorder, alignedTop, width, alignedHeight, cfg, mark);
            topBorder = topBorder + stripHeight;
            height = height - stripHeight;
        };
        const bottomSlotArrange = () => {
            if (bottomSlot === null)
                return;
            const windows = bottomSlot.windows;
            if (windows.length === 1) {
                const cfg = windows[0].dock.cfg;
                const bottomSlotWidth = Math.min((workingArea.width * cfg.hWide) / 100, width);
                const initRect = new Rect(leftBorder, workingArea.y +
                    workingArea.height -
                    (workingArea.height * cfg.hHeight) / 100, bottomSlotWidth, (workingArea.height * cfg.hHeight) / 100);
                height = height - initRect.height;
                windows[0].geometry = DockEntry.align(initRect, bottomSlot.position, cfg, width);
                mark(windows[0]);
                return;
            }
            const cfg = windows[0].dock.cfg;
            const stripHeight = Math.min((workingArea.height * cfg.hHeight) / 100, height);
            const [alignedHeight, alignedTop] = DockEntry.alignEdge(stripHeight, workingArea.y + workingArea.height - stripHeight, cfg.hEdgeGap, bottomSlot.position, cfg.hEdgeAlignment);
            this.layoutHorizontal(windows, leftBorder, alignedTop, width, alignedHeight, cfg, mark);
            height = height - stripHeight;
        };
        if (IS_WIDE) {
            leftSlotArrange();
            rightSlotArrange();
            topSlotArrange();
            bottomSlotArrange();
        }
        else {
            topSlotArrange();
            bottomSlotArrange();
            leftSlotArrange();
            rightSlotArrange();
        }
        this.tilesArea = new Rect(leftBorder, topBorder, width, height);
        return this.tilesArea;
    }
    handleShortcut(window, shortcut) {
        const found = this.findWindow(window);
        if (found === null)
            return false;
        const { slot, index } = found;
        const isVertical = slot.position === DockPosition.left ||
            slot.position === DockPosition.right;
        if (isVertical) {
            switch (shortcut) {
                case KrohnkiteAction.MoveUp:
                case KrohnkiteAction.MoveDown: {
                    const delta = shortcut === KrohnkiteAction.MoveUp ? -1 : 1;
                    if (this.moveWithinSlot(slot, index, delta))
                        return true;
                    return this.moveToSide(window, slot, shortcut === KrohnkiteAction.MoveUp
                        ? DockPosition.top
                        : DockPosition.bottom);
                }
                case KrohnkiteAction.MoveLeft:
                    if (slot.position === DockPosition.left)
                        return false;
                    return this.moveToSide(window, slot, DockPosition.left);
                case KrohnkiteAction.MoveRight:
                    if (slot.position === DockPosition.right)
                        return false;
                    return this.moveToSide(window, slot, DockPosition.right);
                default:
                    return false;
            }
        }
        switch (shortcut) {
            case KrohnkiteAction.MoveLeft:
            case KrohnkiteAction.MoveRight: {
                const delta = shortcut === KrohnkiteAction.MoveLeft ? -1 : 1;
                if (this.moveWithinSlot(slot, index, delta))
                    return true;
                return this.moveToSide(window, slot, shortcut === KrohnkiteAction.MoveLeft
                    ? DockPosition.left
                    : DockPosition.right);
            }
            case KrohnkiteAction.MoveUp:
                if (slot.position === DockPosition.top)
                    return false;
                return this.moveToSide(window, slot, DockPosition.top);
            case KrohnkiteAction.MoveDown:
                if (slot.position === DockPosition.bottom)
                    return false;
                return this.moveToSide(window, slot, DockPosition.bottom);
            default:
                return false;
        }
    }
    moveWithinSlot(slot, index, delta) {
        const targetIndex = index + delta;
        if (targetIndex < 0 || targetIndex >= slot.windows.length)
            return false;
        const window = slot.windows[index];
        slot.windows[index] = slot.windows[targetIndex];
        slot.windows[targetIndex] = window;
        return true;
    }
    moveToSide(window, source, position) {
        const target = this.getSlotByPosition(position);
        if (target === null || target === source)
            return false;
        if (!source.remove(window))
            return false;
        target.windows.push(window);
        window.dock.position = position;
        return true;
    }
    setCrossSize(window, size) {
        const found = this.findWindow(window);
        if (found === null)
            return false;
        const key = found.slot.position === DockPosition.left ||
            found.slot.position === DockPosition.right
            ? "vWide"
            : "hHeight";
        for (const member of found.slot.windows)
            member.dock.cfg[key] = size;
        return true;
    }
    findWindow(window) {
        for (const slot of this.slots) {
            const index = slot.windows.indexOf(window);
            if (index >= 0)
                return { slot, index };
        }
        return null;
    }
    static align(initRect, position, cfg, wholeSize) {
        let leftBorder = initRect.x;
        let topBorder = initRect.y;
        let width = initRect.width;
        let height = initRect.height;
        switch (position) {
            case DockPosition.left:
            case DockPosition.right:
                [width, leftBorder] = DockEntry.alignEdge(width, leftBorder, cfg.vEdgeGap, position, cfg.vEdgeAlignment);
                if (2 * cfg.vGap < height) {
                    if (wholeSize - height < 2 * cfg.vGap) {
                        topBorder = topBorder + cfg.vGap;
                        height = height - 2 * cfg.vGap;
                    }
                    else if (cfg.vAlignment === VDockAlignment.top) {
                        topBorder = topBorder + cfg.vGap;
                    }
                    else if (cfg.vAlignment === VDockAlignment.center) {
                        topBorder = topBorder + (wholeSize - height) / 2;
                    }
                    else if (cfg.vAlignment === VDockAlignment.bottom) {
                        topBorder = topBorder + (wholeSize - height - cfg.vGap);
                    }
                }
                return new Rect(leftBorder, topBorder, width, height);
            case DockPosition.top:
            case DockPosition.bottom:
                [height, topBorder] = DockEntry.alignEdge(height, topBorder, cfg.hEdgeGap, position, cfg.hEdgeAlignment);
                if (2 * cfg.hGap < width) {
                    if (wholeSize - width < 2 * cfg.hGap) {
                        leftBorder = leftBorder + cfg.hGap;
                        width = width - 2 * cfg.hGap;
                    }
                    else if (cfg.hAlignment === HDockAlignment.left) {
                        leftBorder = leftBorder + cfg.hGap;
                    }
                    else if (cfg.hAlignment === HDockAlignment.center) {
                        leftBorder = leftBorder + (wholeSize - width) / 2;
                    }
                    else if (cfg.hAlignment === HDockAlignment.right) {
                        leftBorder = leftBorder + (wholeSize - width - cfg.hGap);
                    }
                }
                return new Rect(leftBorder, topBorder, width, height);
        }
    }
    static alignEdge(dimension, sideBorder, gap, position, alignment) {
        if (2 * gap > dimension)
            return [dimension, sideBorder];
        switch (alignment) {
            case EdgeAlignment.outside:
                if (position === DockPosition.right || position === DockPosition.bottom)
                    sideBorder = sideBorder + gap;
                return [dimension - gap, sideBorder];
            case EdgeAlignment.middle:
                return [dimension - 2 * gap, sideBorder + gap];
            case EdgeAlignment.inside:
                if (position === DockPosition.left || position === DockPosition.top)
                    sideBorder = sideBorder + gap;
                return [dimension - gap, sideBorder];
        }
    }
    layoutVertical(windows, x, y, width, height, cfg, mark) {
        let gap = Math.max(0, cfg.vGap);
        if (gap * (windows.length + 1) > height)
            gap = Math.max(0, height / (windows.length + 1));
        const available = Math.max(0, height - gap * (windows.length + 1));
        const sizes = DockEntry.distribute(windows.map((window) => window.dock.cfg.vHeight), available, windows.map((window) => window.minSize.height));
        let cursor = y + gap;
        windows.forEach((window, index) => {
            window.geometry = new Rect(x, cursor, width, sizes[index]);
            cursor = cursor + sizes[index] + gap;
            mark(window);
        });
    }
    layoutHorizontal(windows, x, y, width, height, cfg, mark) {
        let gap = Math.max(0, cfg.hGap);
        if (gap * (windows.length + 1) > width)
            gap = Math.max(0, width / (windows.length + 1));
        const available = Math.max(0, width - gap * (windows.length + 1));
        const sizes = DockEntry.distribute(windows.map((window) => window.dock.cfg.hWide), available, windows.map((window) => window.minSize.width));
        let cursor = x + gap;
        windows.forEach((window, index) => {
            window.geometry = new Rect(cursor, y, sizes[index], height);
            cursor = cursor + sizes[index] + gap;
            mark(window);
        });
    }
    static distribute(weights, available, minimums) {
        const count = weights.length;
        if (count === 0)
            return [];
        const positive = weights.map((weight) => Math.max(0, weight));
        const sum = positive.reduce((total, weight) => total + weight, 0);
        const sizes = sum > 0
            ? positive.map((weight) => (available * weight) / sum)
            : positive.map(() => available / count);
        const totalMinimum = minimums.reduce((total, minimum) => total + Math.max(0, minimum), 0);
        if (totalMinimum > available)
            return sizes;
        for (let pass = 0; pass < count; pass++) {
            let deficit = 0;
            let flexible = 0;
            for (let i = 0; i < count; i++) {
                if (sizes[i] < minimums[i]) {
                    deficit += minimums[i] - sizes[i];
                    sizes[i] = minimums[i];
                }
                else {
                    flexible += sizes[i] - minimums[i];
                }
            }
            if (deficit <= 0 || flexible <= 0)
                break;
            for (let i = 0; i < count; i++) {
                const extra = sizes[i] - minimums[i];
                if (extra > 0)
                    sizes[i] -= (deficit * extra) / flexible;
            }
        }
        return sizes;
    }
    getSlot(position) {
        const slot = this.getSlotByPosition(position);
        if (slot === null)
            return null;
        this.getValidWindows(slot);
        return slot.windows.length > 0 ? slot : null;
    }
    getValidWindows(slot) {
        slot.windows = slot.windows.filter((window) => window.state === WindowState.Docked &&
            window.dock.position === slot.position);
        return slot.windows;
    }
    getSlotByPosition(position) {
        return this.slots.find((slot) => slot.position === position) || null;
    }
    arrangeSlots(dockedWindows) {
        const dockedSet = new Set(dockedWindows);
        const placed = new Set();
        for (const slot of this.slots) {
            slot.windows = slot.windows.filter((window) => {
                if (!dockedSet.has(window) || window.state !== WindowState.Docked)
                    return false;
                if (window.dock.position !== null &&
                    window.dock.position !== slot.position)
                    return false;
                window.dock.position = slot.position;
                placed.add(window);
                return true;
            });
        }
        const remaining = dockedWindows.filter((window) => !placed.has(window));
        for (const window of remaining) {
            if (window.dock.position !== null &&
                this.getSlotByPosition(window.dock.position) === null)
                window.dock.position = null;
        }
        remaining.sort((a, b) => this.compareDockPriority(a, b));
        for (const window of remaining) {
            let slot = window.dock.position !== null
                ? this.getSlotByPosition(window.dock.position)
                : null;
            if (slot === null) {
                slot = this.slots.length > 0 ? this.slots[0] : null;
                if (slot === null) {
                    window.state = WindowState.Tiled;
                    continue;
                }
                window.dock.position = slot.position;
            }
            slot.windows.push(window);
        }
    }
    compareDockPriority(a, b) {
        if (a.dock.priority !== b.dock.priority)
            return b.dock.priority - a.dock.priority;
        const aTime = a.dock.renderedTime;
        const bTime = b.dock.renderedTime;
        if (aTime === null && bTime !== null)
            return -1;
        if (bTime === null && aTime !== null)
            return 1;
        if (aTime !== null && bTime !== null && aTime !== bTime)
            return aTime - bTime;
        if (a.dock.renderedOutputId === this.id && b.dock.renderedOutputId !== this.id)
            return -1;
        if (b.dock.renderedOutputId === this.id && a.dock.renderedOutputId !== this.id)
            return 1;
        return 0;
    }
    assignSizes(workingArea) {
        const MAX_SIDE_SIZE = 70;
        const MAX_OPPOSITE_SIDES_SIZE = 70;
        const MAX_GAPS = {
            width: workingArea.width * 0.05,
            height: workingArea.height * 0.05,
        };
        const groups = new Map();
        for (const slot of this.slots) {
            const windows = this.getValidWindows(slot);
            if (windows.length === 0)
                continue;
            const isVertical = slot.position === DockPosition.left ||
                slot.position === DockPosition.right;
            const crossKey = isVertical ? "vWide" : "hHeight";
            const alongKey = isVertical ? "vHeight" : "hWide";
            const gapKey = isVertical ? "vGap" : "hGap";
            const edgeGapKey = isVertical
                ? "vEdgeGap"
                : "hEdgeGap";
            const edgeAlignment = isVertical
                ? windows[0].dock.cfg.vEdgeAlignment
                : windows[0].dock.cfg.hEdgeAlignment;
            const crossDimension = Math.max(1, isVertical ? workingArea.width : workingArea.height);
            const alongDimension = Math.max(1, isVertical ? workingArea.height : workingArea.width);
            let crossSize = 0;
            let gap = 0;
            let edgeGap = 0;
            for (const window of windows) {
                const cfg = window.dock.cfg;
                crossSize = Math.max(crossSize, cfg[crossKey]);
                gap = Math.max(gap, cfg[gapKey]);
                edgeGap = Math.max(edgeGap, cfg[edgeGapKey]);
            }
            gap = Math.max(0, Math.min(gap, isVertical ? MAX_GAPS.height : MAX_GAPS.width));
            edgeGap = Math.max(0, edgeGap);
            const edgeReserve = edgeAlignment === EdgeAlignment.middle ? 2 * edgeGap : edgeGap;
            for (const window of windows) {
                const cfg = window.dock.cfg;
                const minCross = Math.max(((isVertical ? window.minSize.width : window.minSize.height) * 100) /
                    crossDimension, 5);
                const minAlong = Math.max(((isVertical ? window.minSize.height : window.minSize.width) * 100) /
                    alongDimension, 5);
                if (cfg[alongKey] < minAlong)
                    cfg[alongKey] = minAlong;
                if (windows.length === 1 && cfg[alongKey] > 100)
                    cfg[alongKey] = 100;
                cfg[gapKey] = gap;
                cfg[edgeGapKey] = edgeGap;
                crossSize = Math.max(crossSize, minCross + (100 * edgeReserve) / crossDimension);
            }
            crossSize = Math.min(crossSize, MAX_SIDE_SIZE);
            for (const window of windows)
                window.dock.cfg[crossKey] = crossSize;
            groups.set(slot.position, {
                windows,
                crossKey,
                crossSize,
            });
        }
        const clampPair = (firstPosition, secondPosition) => {
            const first = groups.get(firstPosition);
            const second = groups.get(secondPosition);
            if (first === undefined || second === undefined)
                return;
            let firstSize = first.crossSize;
            let secondSize = second.crossSize;
            if (firstSize + secondSize <= MAX_OPPOSITE_SIDES_SIZE)
                return;
            if (firstSize > MAX_OPPOSITE_SIDES_SIZE / 2 &&
                secondSize > MAX_OPPOSITE_SIDES_SIZE / 2) {
                firstSize = MAX_OPPOSITE_SIDES_SIZE / 2;
                secondSize = MAX_OPPOSITE_SIDES_SIZE / 2;
            }
            else if (firstSize > MAX_OPPOSITE_SIDES_SIZE / 2) {
                firstSize = MAX_OPPOSITE_SIDES_SIZE - secondSize;
            }
            else {
                secondSize = MAX_OPPOSITE_SIDES_SIZE - firstSize;
            }
            first.crossSize = firstSize;
            second.crossSize = secondSize;
            for (const window of first.windows)
                window.dock.cfg[first.crossKey] = firstSize;
            for (const window of second.windows)
                window.dock.cfg[second.crossKey] = secondSize;
        };
        clampPair(DockPosition.left, DockPosition.right);
        clampPair(DockPosition.top, DockPosition.bottom);
    }
    parseSlots() {
        const slots = [];
        if (CONFIG.dockOrder[0] !== 0)
            slots.push(new DockSlot(DockPosition.left, CONFIG.dockOrder[0]));
        if (CONFIG.dockOrder[1] !== 0)
            slots.push(new DockSlot(DockPosition.top, CONFIG.dockOrder[1]));
        if (CONFIG.dockOrder[2] !== 0)
            slots.push(new DockSlot(DockPosition.right, CONFIG.dockOrder[2]));
        if (CONFIG.dockOrder[3] !== 0)
            slots.push(new DockSlot(DockPosition.bottom, CONFIG.dockOrder[3]));
        slots.sort((a, b) => a.order - b.order);
        return slots;
    }
}
function parseDockUserSurfacesCfg() {
    let surfacesCfg = [];
    for (const line of CONFIG.dockSurfacesConfig) {
        const eqIdx = line.indexOf(":");
        if (eqIdx === -1) {
            warning(`Invalid dock surface config: "${line}" — missing ":" (expected: srfLabel:shortname=value,...)`);
            continue;
        }
        const srfLabel = line.slice(0, eqIdx).trim();
        if (srfLabel.length === 0) {
            warning(`Invalid dock surface config: "${line}" — label is empty`);
            continue;
        }
        const paramsStr = line.slice(eqIdx + 1).trim();
        const rawCfg = paramsStr.length > 0
            ? paramsStr
                .split(",")
                .map((p) => p.trim())
                .filter((p) => p.length > 0)
            : [];
        const partialDockCfg = parseSplittedUserCfg(rawCfg);
        if (partialDockCfg instanceof Err) {
            warning(`Invalid dock surface config: "${line}". ${partialDockCfg}`);
            continue;
        }
        if (Object.keys(partialDockCfg).length > 0) {
            surfacesCfg.push({
                srfLabel,
                cfg: DefaultDockCfg.instance.cloneAndUpdate(partialDockCfg),
            });
        }
    }
    return surfacesCfg;
}
function parseDockUserWindowClassesCfg() {
    let userWindowClassesCfg = {};
    let captionUserCfg = null;
    let withCaption = 0;
    if (CONFIG.dockWindowClassConfig.length === 0)
        return userWindowClassesCfg;
    CONFIG.dockWindowClassConfig.forEach((cfg) => {
        let windowCfgString = cfg.split(":").map((part) => part.trim());
        if (windowCfgString.length === 4) {
            withCaption = 1;
            captionUserCfg = windowCfgString[withCaption];
        }
        else if (windowCfgString.length !== 3) {
            warning(`Invalid window class config: "${cfg}" should have two colons or three colons if you want configure the window title`);
            return;
        }
        let splittedUserCfg = windowCfgString[withCaption + 2]
            .split(",")
            .map((part) => part.trim().toLowerCase());
        let partialDockCfg;
        if (splittedUserCfg[0] !== "") {
            partialDockCfg = parseSplittedUserCfg(splittedUserCfg);
            if (partialDockCfg instanceof Err) {
                warning(`Invalid User window class config: ${cfg}. ${partialDockCfg}`);
                return;
            }
        }
        else
            partialDockCfg = {};
        let splittedSpecialFlags = windowCfgString[withCaption + 1]
            .split(",")
            .map((part) => part.trim().toLowerCase());
        let dock = parseSpecialFlags(splittedSpecialFlags, partialDockCfg);
        if (dock instanceof Err) {
            warning(`Invalid User window class config: ${cfg}. ${dock}`);
            return;
        }
        dock.caption = captionUserCfg;
        userWindowClassesCfg[windowCfgString[0]] = dock;
    });
    return userWindowClassesCfg;
}
function parseSpecialFlags(splittedSpecialFlags, partialDockCfg) {
    let dock = new Dock(DefaultDockCfg.instance.cloneAndUpdate(partialDockCfg));
    splittedSpecialFlags.forEach((flag) => {
        switch (flag) {
            case "auto":
            case "a":
                dock.autoDock = true;
                break;
            case "pin":
            case "p":
                dock.priority = 5;
                break;
            case "left":
            case "l":
                dock.position = DockPosition.left;
                break;
            case "right":
            case "r":
                dock.position = DockPosition.right;
                break;
            case "top":
            case "t":
                dock.position = DockPosition.top;
                break;
            case "bottom":
            case "b":
                dock.position = DockPosition.bottom;
                break;
            default:
                warning(`parse Special Flags: ${splittedSpecialFlags}.Unknown special flag: ${flag}`);
        }
    });
    return dock;
}
function parseSplittedUserCfg(splittedUserCfg) {
    let errors = [];
    const shortNames = {
        hh: "hHeight",
        hw: "hWide",
        hgv: "hEdgeGap",
        hgh: "hGap",
        ha: "hAlignment",
        he: "hEdgeAlignment",
        vh: "vHeight",
        vw: "vWide",
        vgh: "vEdgeGap",
        vgv: "vGap",
        ve: "vEdgeAlignment",
        va: "vAlignment",
    };
    let dockCfg = {};
    splittedUserCfg.forEach((part) => {
        let splittedPart = part.split("=").map((part) => part.trim());
        if (splittedPart.length !== 2) {
            errors.push(`"${part}" can have only one equal sign`);
            return;
        }
        if (splittedPart[0].length === 0 || splittedPart[1].length === 0) {
            errors.push(`"${part}" can not have empty shortname or value`);
            return;
        }
        if (shortNames[splittedPart[0]] in dockCfg) {
            errors.push(`"${part}" has duplicate shortname`);
            return;
        }
        if (!(splittedPart[0] in shortNames)) {
            errors.push(`"${part}" has unknown shortname`);
            return;
        }
        if (["he", "ve"].indexOf(splittedPart[0]) >= 0) {
            switch (splittedPart[1]) {
                case "outside":
                case "o":
                case "0":
                    dockCfg[shortNames[splittedPart[0]]] = EdgeAlignment.outside;
                    break;
                case "middle":
                case "m":
                case "1":
                    dockCfg[shortNames[splittedPart[0]]] = EdgeAlignment.middle;
                    break;
                case "inside":
                case "i":
                case "2":
                    dockCfg[shortNames[splittedPart[0]]] = EdgeAlignment.inside;
                    break;
                default:
                    errors.push(` "${part}" value can be o,m or i or output,middle,input or 0,1,2`);
                    return;
            }
        }
        else if (splittedPart[0] === "va") {
            switch (splittedPart[1]) {
                case "center":
                case "c":
                case "0":
                    dockCfg[shortNames[splittedPart[0]]] = VDockAlignment.center;
                    break;
                case "1":
                case "top":
                case "t":
                    dockCfg[shortNames[splittedPart[0]]] = VDockAlignment.top;
                    break;
                case "2":
                case "bottom":
                case "b":
                    dockCfg[shortNames[splittedPart[0]]] = VDockAlignment.bottom;
                    break;
                default:
                    errors.push(` "${part}" value can be c,t or b or center,top,bottom or 0,1,2`);
                    return;
            }
        }
        else if (splittedPart[0] === "ha") {
            switch (splittedPart[1]) {
                case "center":
                case "c":
                case "0":
                    dockCfg[shortNames[splittedPart[0]]] = HDockAlignment.center;
                    break;
                case "1":
                case "left":
                case "l":
                    dockCfg[shortNames[splittedPart[0]]] = HDockAlignment.left;
                    break;
                case "2":
                case "right":
                case "r":
                    dockCfg[shortNames[splittedPart[0]]] = HDockAlignment.right;
                    break;
                default:
                    errors.push(`"${part}" value can be c,l or r or center,left,right or 0,1,2`);
                    return;
            }
        }
        else {
            let value;
            switch (splittedPart[0]) {
                case "hw":
                case "vh":
                    value = validateNumber(splittedPart[1], 1, 100);
                    break;
                case "hh":
                case "vw":
                    value = validateNumber(splittedPart[1], 1, 50);
                    break;
                case "hgh":
                case "vgv":
                case "vgh":
                case "vgv":
                    value = validateNumber(splittedPart[1]);
                    break;
                default:
                    errors.push(`unknown shortname ${splittedPart[0]}`);
                    return;
            }
            if (value instanceof Err)
                errors.push(`splittedPart[0]: ${value}`);
            else
                dockCfg[shortNames[splittedPart[0]]] = value;
        }
    });
    if (errors.length > 0) {
        return new Err(errors.join("\n"));
    }
    return dockCfg;
}
class DockSlot {
    get position() {
        return this._position;
    }
    get order() {
        return this._order;
    }
    constructor(position, order) {
        this._position = position;
        this._order = order;
        this.windows = [];
    }
    add(window, index = this.windows.length) {
        const target = Math.max(0, Math.min(index, this.windows.length));
        this.windows.splice(target, 0, window);
    }
    remove(window) {
        const index = this.windows.indexOf(window);
        if (index < 0)
            return false;
        this.windows.splice(index, 1);
        return true;
    }
    indexOf(window) {
        return this.windows.indexOf(window);
    }
}
class DockStore {
    constructor() {
        this.store = {};
        this.defaultCfg = DefaultDockCfg.instance;
        this.surfacesCfg = parseDockUserSurfacesCfg();
        this.windowClassesCfg = parseDockUserWindowClassesCfg();
    }
    render(srf, visibles, workingArea) {
        const entry = this.getOrCreateEntry(srf);
        const dockedWindows = visibles.filter((w) => w.state === WindowState.Docked);
        if (dockedWindows.length === 0) {
            entry.clearSlots();
            entry.tilesArea = workingArea;
        }
        else {
            entry.tilesArea = entry.arrange(dockedWindows, workingArea);
        }
        return entry.tilesArea;
    }
    getOrCreateEntry(srf) {
        let entry = this.store[srf.id];
        if (!entry) {
            entry = new DockEntry(this.getSurfaceCfg(srf), srf.id);
            this.store[srf.id] = entry;
        }
        return entry;
    }
    attachWindow(window) {
        const cfg = this.windowClassesCfg[window.windowClassName];
        window.setDockTemplate(cfg !== null && cfg !== void 0 ? cfg : new Dock(this.getSurfaceCfg(window.surface)));
    }
    drag(dragAction) {
        const window = dragAction.window;
        const result = dragAction.result;
        const wasDocked = dragAction.initialState === WindowState.Docked;
        const entry = this.getOrCreateEntry(dragAction.srf);
        dragAction.tilesArea = entry.tilesArea;
        if (wasDocked) {
            const source = this.findWindow(window);
            if (source !== null)
                this.ensureSnapshot(dragAction, source.entry);
        }
        this.ensureSnapshot(dragAction, entry);
        this.restoreSnapshots(dragAction);
        const wasPreviewDocked = window.state === WindowState.Docked;
        if (!wasDocked)
            window.setTransientState(dragAction.initialState);
        const dockHit = this.getDockPosition(dragAction, entry);
        if (dockHit.position === null) {
            dragAction.dockTarget = null;
            if (!wasDocked) {
                if (wasPreviewDocked) {
                    result.isProcessed = true;
                    result.isArrangeNeeded = true;
                }
                else {
                    result.isProcessed = false;
                    result.isArrangeNeeded = false;
                }
                return;
            }
            this.remove(window);
            window.setTransientState(WindowState.Tiled);
            result.isProcessed = true;
            result.isArrangeNeeded = true;
            return;
        }
        dragAction.dockTarget = dockHit.position;
        if (dockHit.window === window) {
            result.isProcessed = true;
            result.isArrangeNeeded = true;
            return;
        }
        if (dockHit.window !== null && dockHit.zone === "swap") {
            this.swapWith(dragAction, entry, dockHit, wasDocked);
        }
        else {
            this.insertAt(dragAction, entry, dockHit);
        }
        result.isProcessed = true;
        result.isArrangeNeeded = true;
    }
    finishDrag(dragAction) {
        for (const id in dragAction.dockSnapshots) {
            const snapshot = dragAction.dockSnapshots[id];
            for (const saved of snapshot.states) {
                if (saved.state === WindowState.Docked &&
                    saved.window.state !== WindowState.Docked)
                    saved.window.previousState = WindowState.Docked;
            }
        }
        dragAction.dockSnapshots = {};
    }
    adjust(basis, widthDiff, heightDiff) {
        const cfg = basis.dock.cfg;
        const workingArea = basis.surface.workingArea;
        const entry = this.store[basis.surface.id];
        switch (basis.dock.position) {
            case DockPosition.left:
            case DockPosition.right:
                cfg.vHeight =
                    cfg.vHeight + (100 * heightDiff) / workingArea.height;
                {
                    const size = cfg.vWide + (100 * widthDiff) / workingArea.width;
                    if (entry === undefined || !entry.setCrossSize(basis, size))
                        cfg.vWide = size;
                }
                break;
            case DockPosition.top:
            case DockPosition.bottom:
                cfg.hWide = cfg.hWide + (100 * widthDiff) / workingArea.width;
                {
                    const size = cfg.hHeight + (100 * heightDiff) / workingArea.height;
                    if (entry === undefined || !entry.setCrossSize(basis, size))
                        cfg.hHeight = size;
                }
                break;
        }
    }
    swapWith(dragAction, entry, dockHit, wasDocked) {
        const window = dragAction.window;
        const target = dockHit.window;
        const targetSlot = entry.slots.find((slot) => slot.position === dockHit.position);
        if (targetSlot === undefined)
            return;
        const targetIndex = targetSlot.indexOf(target);
        if (!wasDocked) {
            targetSlot.remove(target);
            target.setTransientState(WindowState.Tiled);
            this.remove(window);
            targetSlot.add(window, targetIndex);
            window.setTransientState(WindowState.Docked);
            window.dock.position = targetSlot.position;
            return;
        }
        const source = this.findWindow(window);
        if (source === null) {
            this.insertAt(dragAction, entry, {
                position: targetSlot.position,
                window: null,
                index: targetIndex,
                zone: "append",
            });
            return;
        }
        if (source.entry === entry && source.slot === targetSlot) {
            const sourceIndex = source.index;
            const temporary = source.slot.windows[sourceIndex];
            source.slot.windows[sourceIndex] = target;
            source.slot.windows[targetIndex] = temporary;
            return;
        }
        source.slot.remove(window);
        targetSlot.remove(target);
        source.slot.add(target, source.index);
        targetSlot.add(window, targetIndex);
        target.setTransientState(WindowState.Docked);
        window.setTransientState(WindowState.Docked);
        target.dock.position = source.slot.position;
        window.dock.position = targetSlot.position;
    }
    insertAt(dragAction, entry, dockHit) {
        if (dockHit.position === null)
            return;
        const targetSlot = entry.slots.find((slot) => slot.position === dockHit.position);
        if (targetSlot === undefined)
            return;
        let index = dockHit.zone === "after" ? dockHit.index + 1 : dockHit.index;
        const source = this.findWindow(dragAction.window);
        if (source !== null &&
            source.entry === entry &&
            source.slot === targetSlot &&
            source.index < index)
            index = index - 1;
        this.remove(dragAction.window);
        targetSlot.add(dragAction.window, index);
        dragAction.window.setTransientState(WindowState.Docked);
        dragAction.window.dock.position = targetSlot.position;
    }
    ensureSnapshot(dragAction, entry) {
        if (dragAction.dockSnapshots[entry.id] !== undefined)
            return;
        const states = [];
        for (const slot of entry.slots) {
            for (const window of slot.windows)
                states.push({
                    window,
                    state: window.state,
                    dockPosition: window.dock.position,
                    geometry: window.geometry.clone(),
                });
        }
        dragAction.dockSnapshots[entry.id] = {
            srfId: entry.id,
            slots: entry.slots.map((slot) => ({
                position: slot.position,
                windows: slot.windows.slice(),
            })),
            states,
        };
    }
    restoreSnapshots(dragAction) {
        for (const id in dragAction.dockSnapshots) {
            const entry = this.store[id];
            if (entry === undefined)
                continue;
            const snapshot = dragAction.dockSnapshots[id];
            for (const slot of entry.slots) {
                const saved = snapshot.slots.find((savedSlot) => savedSlot.position === slot.position);
                slot.windows = saved === undefined ? [] : saved.windows.slice();
            }
            for (const saved of snapshot.states) {
                saved.window.setTransientState(saved.state);
                saved.window.dock.position = saved.dockPosition;
                saved.window.geometry = saved.geometry.clone();
            }
        }
    }
    findWindow(window) {
        for (const id in this.store) {
            const entry = this.store[id];
            const found = entry.findWindow(window);
            if (found !== null)
                return Object.assign({ entry }, found);
        }
        return null;
    }
    getDockPosition(dragAction, entry) {
        const { mousePointer, middlePointer, neighbors, workingArea, window, } = dragAction;
        const canSwap = entry.id === dragAction.initialSrfId;
        for (const dockSlot of entry.slots) {
            for (const target of dockSlot.windows) {
                if (target.state !== WindowState.Docked)
                    continue;
                if (target.geometry === null)
                    continue;
                const point = target.geometry.includesPoint(mousePointer)
                    ? mousePointer
                    : target.geometry.includesPoint(middlePointer)
                        ? middlePointer
                        : null;
                if (point === null)
                    continue;
                const index = dockSlot.indexOf(target);
                if (target === window)
                    return {
                        position: dockSlot.position,
                        window: target,
                        index,
                        zone: "swap",
                    };
                let zone = "swap";
                if (dockSlot.position === DockPosition.left ||
                    dockSlot.position === DockPosition.right) {
                    if (target.geometry.height > 0) {
                        const relative = (point.y - target.geometry.y) / target.geometry.height;
                        if (relative < 0.25)
                            zone = "before";
                        else if (relative > 0.75)
                            zone = "after";
                    }
                }
                else if (target.geometry.width > 0) {
                    const relative = (point.x - target.geometry.x) / target.geometry.width;
                    if (relative < 0.25)
                        zone = "before";
                    else if (relative > 0.75)
                        zone = "after";
                }
                if (!canSwap && zone === "swap")
                    zone = "before";
                return {
                    position: dockSlot.position,
                    window: target,
                    index,
                    zone,
                };
            }
        }
        for (const dockSlot of entry.slots) {
            const dragZone = dockSlot.position === DockPosition.top
                ? CONFIG.dockTopDragZone
                : dockSlot.position === DockPosition.bottom
                    ? CONFIG.dockBottomDragZone
                    : dockSlot.position === DockPosition.left
                        ? CONFIG.dockLeftDragZone
                        : CONFIG.dockRightDragZone;
            if (!this.isSideZoneHit(dragAction, dockSlot.position, dragZone))
                continue;
            const point = this.getSidePoint(dragAction, dockSlot.position);
            return {
                position: dockSlot.position,
                window: null,
                index: this.getInsertionIndex(dockSlot, point, dockSlot.position),
                zone: "append",
            };
        }
        return { position: null, window: null, index: 0, zone: "append" };
    }
    getSidePoint(dragAction, position) {
        const { mousePointer, middlePointer, neighbors } = dragAction;
        switch (position) {
            case DockPosition.top:
                return neighbors.up ? middlePointer : mousePointer;
            case DockPosition.bottom:
                return neighbors.down ? middlePointer : mousePointer;
            case DockPosition.left:
                return neighbors.left ? middlePointer : mousePointer;
            case DockPosition.right:
                return neighbors.right ? middlePointer : mousePointer;
        }
    }
    isSideZoneHit(dragAction, position, dragZone) {
        if (dragZone <= 0)
            return false;
        const { workingArea, neighbors } = dragAction;
        const point = this.getSidePoint(dragAction, position);
        switch (position) {
            case DockPosition.top:
                return workingArea.isTopZone(point, dragZone, "pixels", !neighbors.up);
            case DockPosition.left:
                return workingArea.isLeftZone(point, dragZone, "pixels", !neighbors.left);
            case DockPosition.right:
                return workingArea.isRightZone(point, dragZone, "pixels", !neighbors.right);
            case DockPosition.bottom:
                return workingArea.isBottomZone(point, dragZone, "pixels", !neighbors.down);
        }
    }
    getInsertionIndex(slot, point, position) {
        for (let index = 0; index < slot.windows.length; index++) {
            const geometry = slot.windows[index].geometry;
            if (geometry === null)
                continue;
            if (position === DockPosition.left ||
                position === DockPosition.right) {
                const center = geometry.y + geometry.height / 2;
                if (point.y < center)
                    return index;
            }
            else {
                const center = geometry.x + geometry.width / 2;
                if (point.x < center)
                    return index;
            }
        }
        return slot.windows.length;
    }
    remove(window) {
        for (let key in this.store) {
            this.store[key].remove(window);
        }
    }
    handleShortcut(ctx, window, action) {
        let result = false;
        const entry = this.store[ctx.currentSurface.id];
        switch (action) {
            case KrohnkiteAction.GrowWidth:
            case KrohnkiteAction.ShrinkWidth: {
                const increment = action === KrohnkiteAction.GrowWidth ? 1 : -1;
                if (window.dock.position === DockPosition.left ||
                    window.dock.position === DockPosition.right) {
                    const size = window.dock.cfg.vWide + increment;
                    if (entry === undefined || !entry.setCrossSize(window, size))
                        window.dock.cfg.vWide = size;
                }
                else {
                    window.dock.cfg.hWide += increment;
                }
                result = true;
                break;
            }
            case KrohnkiteAction.GrowHeight:
            case KrohnkiteAction.ShrinkHeight: {
                const increment = action === KrohnkiteAction.GrowHeight ? 1 : -1;
                if (window.dock.position === DockPosition.left ||
                    window.dock.position === DockPosition.right) {
                    window.dock.cfg.vHeight += increment;
                }
                else {
                    const size = window.dock.cfg.hHeight + increment;
                    if (entry === undefined || !entry.setCrossSize(window, size))
                        window.dock.cfg.hHeight = size;
                }
                result = true;
                break;
            }
            case KrohnkiteAction.MoveLeft:
            case KrohnkiteAction.MoveUp:
            case KrohnkiteAction.MoveRight:
            case KrohnkiteAction.MoveDown:
                if (entry !== undefined) {
                    result = entry.handleShortcut(window, action);
                }
                break;
        }
        return result;
    }
    isNewWindowHaveDocked(window) {
        if (window.windowClassName in this.windowClassesCfg &&
            (this.windowClassesCfg[window.windowClassName].caption === null ||
                DriverWindow.isContain([this.windowClassesCfg[window.windowClassName].caption], window.window.windowCaption)) &&
            this.windowClassesCfg[window.windowClassName].autoDock === true)
            return true;
        return false;
    }
    getSurfaceCfg(srf) {
        let dockCfg = null;
        for (let surfaceCfg of this.surfacesCfg) {
            if (srf.isFit(surfaceCfg.srfLabel)) {
                dockCfg = Object.assign({}, surfaceCfg.cfg);
                break;
            }
        }
        if (dockCfg === null)
            dockCfg = this.defaultCfg.cloneAndUpdate({});
        return dockCfg;
    }
}
const winTypesCfg = [
    2 | 4 | 1,
    8,
    1,
    4,
    2,
    1 | 4,
    1 | 2,
    4 | 2,
    16,
];
const hardcodedIgnoreClasses = [
    "krunner",
    "yakuake",
    "spectacle",
    "kded5",
    "xwaylandvideobridge",
    "plasmashell",
    "ksplashqml",
    "org.kde.plasmashell",
    "org.kde.polkit-kde-authentication-agent-1",
    "org.kde.kruler",
    "kruler",
    "kwin_wayland",
    "ksmserver-logout-greeter",
    "org.krohnkite.configurator",
];
const hardcodedFloatConfig = [
    "systemsettings:Configure — System Settings:auto=1",
    "systemsettings:Настройка — Параметры системы:auto=1",
    "systemsettings:配置 — 系统设置:auto=1",
];
function isValidConfigKey(key) {
    return key in ConfigVariables;
}
function toCssColor(value, fallback) {
    if (typeof value !== "string")
        return fallback;
    const str = value.trim();
    if (str.length === 0)
        return fallback;
    if (str.charAt(0) === "#")
        return str;
    if (str.indexOf(",") !== -1) {
        const parts = str.split(",").map((part) => parseInt(part.trim(), 10));
        if ((parts.length === 3 || parts.length === 4) &&
            parts.every((part) => !isNaN(part))) {
            const clamp = (n) => Math.max(0, Math.min(255, n));
            const r = clamp(parts[0]);
            const g = clamp(parts[1]);
            const b = clamp(parts[2]);
            const a = clamp(parts.length === 4 ? parts[3] : 255);
            const hex = (n) => (n < 16 ? "0" : "") + n.toString(16);
            return "#" + hex(a) + hex(r) + hex(g) + hex(b);
        }
    }
    return fallback;
}
class KWinConfig {
    constructor() {
        var _a;
        this.tileLayoutInitialAngle = KWIN.readConfig("tileLayoutInitialRotationAngle", "0");
        this.monocleMaximize = KWIN.readConfig("monocleMaximize", true);
        this.monocleMinimizeRest = KWIN.readConfig("monocleMinimizeRest", false);
        this.quarterLayoutReset = KWIN.readConfig("quarterLayoutReset", false);
        this.columnsLayoutInitialAngle = KWIN.readConfig("columnsLayoutInitialRotationAngle", "0");
        this.columnsBalanced = KWIN.readConfig("columnsBalanced", false);
        this.columnsLayerConf = separate(KWIN.readConfig("columnsLayerConf", ""), ",");
        this.columnsApplyConfOnNewColumns = KWIN.readConfig("columnsApplyConfOnNewColumns", false);
        this.columnsLimitColumns = KWIN.readConfig("columnsLimitColumns", false);
        this.stairReverse = KWIN.readConfig("stairReverse", false);
        this.spreadLayoutSpace = validateNumberWithDefault(KWIN.readConfig("spreadLayoutSpace", 4), 4, "spreadLayoutSpace", 0, 15);
        const layoutsList = [
            [TileLayout, true],
            [MonocleLayout, false],
            [ThreeColumnLayout, true],
            [SpiralLayout, true],
            [QuarterLayout, false],
            [StackedLayout, true],
            [ColumnsLayout, true],
            [SpreadLayout, true],
            [FloatingLayout, false],
            [StairLayout, true],
            [BinaryTreeLayout, true],
            [CascadeLayout, true],
        ];
        const sortedLayouts = KWinConfig.getSortedLayouts(layoutsList);
        this.layoutOrder = KWinConfig.getLayoutOrder(sortedLayouts);
        const layoutConfig = KWinConfig.getLayoutFactories(sortedLayouts);
        this.layoutFactories = layoutConfig.factories;
        this.layoutFactoryCapacities = layoutConfig.capacities;
        this.srfExceededToScreen = KWIN.readConfig("srfExceededToScreen", false);
        const directionConfigs = [
            {
                direction: "left",
                screenKey: "srfToScreenOrderLeft",
                vDesktopKey: "srfToVDesktopOrderLeft",
                defaultOrder: 1,
            },
            {
                direction: "up",
                screenKey: "srfToScreenOrderTop",
                vDesktopKey: "srfToVDesktopOrderTop",
                defaultOrder: 2,
            },
            {
                direction: "right",
                screenKey: "srfToScreenOrderRight",
                vDesktopKey: "srfToVDesktopOrderRight",
                defaultOrder: 3,
            },
            {
                direction: "down",
                screenKey: "srfToScreenOrderBottom",
                vDesktopKey: "srfToVDesktopOrderBottom",
                defaultOrder: 4,
            },
        ];
        this.srfToScreenOrder = directionConfigs
            .map(({ direction, screenKey: key, defaultOrder }) => ({
            direction,
            order: Number(KWIN.readConfig(key, defaultOrder)),
        }))
            .filter((el) => el.order !== 0)
            .sort((a, b) => a.order - b.order)
            .map((el) => el.direction);
        this.srfExceededToVDesktop = KWIN.readConfig("srfExceededToVDesktop", false);
        this.srfToVDesktopOrder = directionConfigs
            .map(({ direction, vDesktopKey: key, defaultOrder }) => ({
            direction,
            order: Number(KWIN.readConfig(key, defaultOrder)),
        }))
            .filter((el) => el.order !== 0)
            .sort((a, b) => a.order - b.order)
            .map((el) => el.direction);
        this.srfOvercapacityEviction =
            Number(KWIN.readConfig("srfOvercapacityEviction", 1)) === 1
                ? "oldest"
                : "lastFocused";
        this.srfOvercapacityMode =
            Number(KWIN.readConfig("srfOvercapacityMode", 1)) === 0
                ? "float"
                : "minimize";
        this.srfAllowShortcutMoveToFullSurface = KWIN.readConfig("srfAllowShortcutMoveToFullSurface", false);
        this.srfDefineCfg = separate(KWIN.readConfig("srfDefineCfg", ""), "\n");
        this.srfDefaultConfig = separate(KWIN.readConfig("srfDefaultConfig", ""), "\n");
        this.screenGapTop = KWIN.readConfig("screenGapTop", 0);
        this.screenGapLeft = KWIN.readConfig("screenGapLeft", 0);
        this.screenGapBetween = KWIN.readConfig("screenGapBetween", 0);
        this.screenGapRight = KWIN.readConfig("screenGapRight", 0);
        this.screenGapBottom = KWIN.readConfig("screenGapBottom", 0);
        this.gapsOverrideConfig = separate(KWIN.readConfig("gapsOverrideConfig", ""), "\n");
        this.limitTileWidthRatio = 0;
        if (KWIN.readConfig("limitTileWidth", false))
            this.limitTileWidthRatio = KWIN.readConfig("limitTileWidthRatio", 1.6);
        this.altRegisterTimeout = validateNumberWithDefault(KWIN.readConfig("altRegisterTimeout", 3000), 3000, "altRegisterTimeout", 100, 9999);
        this.altRegisterIsToggle = KWIN.readConfig("altRegisterIsToggle", false);
        this.altRegisterIsPushedTwice = KWIN.readConfig("altRegisterIsPushedTwice", false);
        this.shortcutSequenceTime = validateNumberWithDefault(KWIN.readConfig("shortcutSequenceTime", 400), 400, "shortcutSequenceTime", 0, 9999);
        this.shortcutConf = parseShortcutConf(separate(KWIN.readConfig("shortcutConf", ""), "\n"));
        this.adjustLayout = KWIN.readConfig("adjustLayout", true);
        this.adjustLayoutLive = KWIN.readConfig("adjustLayoutLive", true);
        this.focusNormalCfg =
            winTypesCfg[validateNumberWithDefault(KWIN.readConfig("focusNormal", 0), 0, "focusNormal", 0, winTypesCfg.length)];
        this.focusMetaCfg =
            winTypesCfg[validateNumberWithDefault(KWIN.readConfig("focusMeta", 1), 1, "focusMeta", 0, winTypesCfg.length)];
        this.focusMoveScreensNormal = KWIN.readConfig("focusMoveScreensNormal", true);
        this.focusMoveVDesktopsNormal = KWIN.readConfig("focusMoveVDesktopsNormal", true);
        this.focusMoveScreensMeta = KWIN.readConfig("focusMoveScreensMeta", false);
        this.focusMoveVDesktopsMeta = KWIN.readConfig("focusMoveVDesktopsMeta", true);
        this.movePointerOnFocus = KWIN.readConfig("movePointerOnFocus", false);
        this.movePointerOnFocusShortcutsOnly = KWIN.readConfig("movePointerOnFocusShortcutsOnly", false);
        this.movePointerOnResize = KWIN.readConfig("movePointerOnResize", false);
        this.newWindowPosition =
            (_a = ["last", "first", "second"][validateNumberWithDefault(KWIN.readConfig("newWindowPosition", 0), 0, "newWindowPosition", 0, 2)]) !== null && _a !== void 0 ? _a : "last";
        this.ignoreClass = hardcodedIgnoreClasses.concat(separate(KWIN.readConfig("ignoreClass", ""), ","));
        this.ignoreTitle = separate(KWIN.readConfig("ignoreTitle", ""), ",");
        this.ignoreRole = separate(KWIN.readConfig("ignoreRole", "quake"), ",");
        this.ignoreActivity = separate(KWIN.readConfig("ignoreActivity", ""), ",");
        this.ignoreScreen = separate(KWIN.readConfig("ignoreScreen", ""), ",");
        this.ignoreVDesktop = separate(KWIN.readConfig("ignoreVDesktop", ""), ",");
        this.tileNothing = KWIN.readConfig("tileNothing", false);
        this.tilingClass = separate(KWIN.readConfig("tilingClass", ""), ",");
        this.screenDefaultLayout = separate(KWIN.readConfig("screenDefaultLayout", ""), ",");
        this.floatConfig = {
            isNativeSizeOverride: KWIN.readConfig("floatDefaultSizeEnable", false),
            floatWidth: validateNumberWithDefault(KWIN.readConfig("floatDefaultWidth", 50), 50, "floatDefaultWidth", 1, 100),
            floatHeight: validateNumberWithDefault(KWIN.readConfig("floatDefaultHeight", 50), 50, "floatDefaultHeight", 1, 100),
            randomize: KWIN.readConfig("floatRandomEnable", true),
            randomWidth: validateNumberWithDefault(KWIN.readConfig("floatRandomWidth", 15), 15, "floatRandomWidth", 1, 100),
            randomHeight: validateNumberWithDefault(KWIN.readConfig("floatRandomHeight", 15), 15, "floatRandomHeight", 1, 100),
            sizeStepWidth: validateNumberWithDefault(KWIN.readConfig("floatSizeStepWidth", 6), 6, "floatSizeStepWidth", 0, 100),
            sizeStepHeight: validateNumberWithDefault(KWIN.readConfig("floatSizeStepHeight", 4), 4, "floatSizeStepHeight", 0, 100),
            config: parseFloatConfig(hardcodedFloatConfig.concat(separate(KWIN.readConfig("floatConfig", ""), "\n"))),
        };
        this.floatAsDefault = KWIN.readConfig("floatAsDefault", false);
        this.floatUtility = KWIN.readConfig("floatUtility", true);
        this.dockOrder = [
            KWIN.readConfig("dockOrderLeft", 1),
            KWIN.readConfig("dockOrderTop", 2),
            KWIN.readConfig("dockOrderRight", 3),
            KWIN.readConfig("dockOrderBottom", 4),
        ];
        this.dockHHeight = KWIN.readConfig("dockHHeight", 15);
        this.dockHWide = KWIN.readConfig("dockHWide", 100);
        this.dockHGap = KWIN.readConfig("dockHGap", 0);
        this.dockHEdgeGap = KWIN.readConfig("dockHEdgeGap", 0);
        this.dockHAlignment = KWIN.readConfig("dockHAlignment", 0);
        this.dockHEdgeAlignment = KWIN.readConfig("dockHEdgeAlignment", 0);
        this.dockVHeight = KWIN.readConfig("dockVHeight", 100);
        this.dockVWide = KWIN.readConfig("dockVWide", 15);
        this.dockVEdgeGap = KWIN.readConfig("dockVEdgeGap", 0);
        this.dockVGap = KWIN.readConfig("dockVGap", 0);
        this.dockVAlignment = KWIN.readConfig("dockVAlignment", 0);
        this.dockVEdgeAlignment = KWIN.readConfig("dockVEdgeAlignment", 0);
        this.dockSurfacesConfig = separate(KWIN.readConfig("dockSurfacesConfig", ""), "\n");
        this.dockWindowClassConfig = separate(KWIN.readConfig("dockWindowClassConfig", ""), "\n");
        this.dockFrameColor = toCssColor(KWIN.readConfig("dockFrameColor", "61,135,240,77"), "#4d3d87f0");
        this.dockBorderColor = toCssColor(KWIN.readConfig("dockBorderColor", "61,135,240,230"), "#e63d87f0");
        this.dockTopDragZone = validateNumberWithDefault(KWIN.readConfig("dockTopDragZone", 15), 15, "dockTopDragZone", 0, 999);
        this.dockBottomDragZone = validateNumberWithDefault(KWIN.readConfig("dockBottomDragZone", 15), 15, "dockBottomDragZone", 0, 999);
        this.dockLeftDragZone = validateNumberWithDefault(KWIN.readConfig("dockLeftDragZone", 15), 15, "dockLeftDragZone", 0, 999);
        this.dockRightDragZone = validateNumberWithDefault(KWIN.readConfig("dockRightDragZone", 15), 15, "dockRightDragZone", 0, 999);
        this.tiledWindowsLayer = getWindowLayer(KWIN.readConfig("tiledWindowsLayer", 0));
        this.floatedWindowsLayer = getWindowLayer(KWIN.readConfig("floatedWindowsLayer", 1));
        this.soleWindowDefaultProps = {
            width: validateNumberWithDefault(KWIN.readConfig("soleWindowWidth", 100), 100, "soleWindowDefault.Width", 1, 100, true),
            height: validateNumberWithDefault(KWIN.readConfig("soleWindowHeight", 100), 100, "soleWindowDefault.Height", 1, 100, true),
            noBorders: Boolean(KWIN.readConfig("soleWindowNoBorders", false)),
            noGaps: Boolean(KWIN.readConfig("soleWindowNoGaps", false)),
        };
        this.soleWindowOutputOverride = KWinConfig.getSoleWindowsOverriddenProps(KWIN.readConfig("soleWindowOutputOverride", ""), this.soleWindowDefaultProps);
        this.unfitLess = KWIN.readConfig("unfitLess", true);
        this.unfitGreater = KWIN.readConfig("unfitGreater", false);
        this.notificationDuration = KWIN.readConfig("notificationDuration", 1000);
        this.layoutPerActivity = KWIN.readConfig("layoutPerActivity", true);
        this.layoutPerDesktop = KWIN.readConfig("layoutPerDesktop", true);
        this.noTileBorder = KWIN.readConfig("noTileBorder", false);
        this.optVKeyboardSupport = KWIN.readConfig("optVKeyboardSupport", false);
        this.keepTilingOnDrag = KWIN.readConfig("keepTilingOnDrag", true);
        this.dragPreview = KWIN.readConfig("dragPreview", true);
        this.preventMinimize = KWIN.readConfig("preventMinimize", false);
        if (this.preventMinimize && this.monocleMinimizeRest) {
            this.preventMinimize = false;
        }
        this.preventProtrusion = KWIN.readConfig("preventProtrusion", true);
        this.floatSkipPager = KWIN.readConfig("floatSkipPagerWindows", false);
        const loggingEnabled = KWIN.readConfig("logging", false);
        if (loggingEnabled) {
            let logParts = [];
            let newWindowSubmodules = [];
            if (KWIN.readConfig("logNewWindows", false))
                newWindowSubmodules.push("1");
            if (KWIN.readConfig("logFilteredWindows", false))
                newWindowSubmodules.push("2");
            if (KWIN.readConfig("logUnmanagedWindows", false))
                newWindowSubmodules.push("3");
            if (newWindowSubmodules.length > 0)
                logParts.push([LogPartitions.newWindow, newWindowSubmodules]);
            if (KWIN.readConfig("logWorkspaceSignals", false)) {
                let workspaceSignalsSubmodules = separate(KWIN.readConfig("logWorkspaceSignalsSubmodules", ""), ",");
                logParts.push([
                    LogPartitions.workspaceSignals,
                    workspaceSignalsSubmodules,
                ]);
            }
            if (KWIN.readConfig("logWindowSignals", false)) {
                let windowSignalsSubmodules = separate(KWIN.readConfig("logWindowSignalsSubmodules", ""), ",");
                logParts.push([LogPartitions.windowSignals, windowSignalsSubmodules]);
            }
            if (KWIN.readConfig("logOther", false)) {
                let otherSubmodules = separate(KWIN.readConfig("logOtherSubmodules", ""), ",");
                logParts.push([LogPartitions.other, otherSubmodules]);
            }
            const logFilters = KWIN.readConfig("logFilter", false)
                ? separate(KWIN.readConfig("logFilterStr", ""), ",")
                : [];
            this.loggingConfig = {
                enabled: true,
                parts: logParts,
                filters: logFilters,
            };
        }
        else {
            this.loggingConfig = { enabled: false, parts: [], filters: [] };
        }
    }
    static getSoleWindowsOverriddenProps(props, defaultProps) {
        let outputProps = {};
        if (props.trim() === "") {
            return outputProps;
        }
        const warn_mess = "The sole window properties cannot be overridden.";
        separate(props, ",").forEach((userOutputStr) => {
            const outputRawProps = separate(userOutputStr, ":");
            if (outputRawProps.length < 2 || outputRawProps.length > 5) {
                warning(`${warn_mess} Number of parts separated by colon:${outputRawProps.length} in ${outputRawProps} but have to be 2-5`);
                return;
            }
            let outputParams = Object.assign({}, defaultProps);
            let validatedResult;
            for (let i = 1; i < outputRawProps.length; i++) {
                if (i < 3) {
                    validatedResult = validateNumber(outputRawProps[i], 1, 100, true);
                }
                else {
                    validatedResult = validateNumber(outputRawProps[i], 0, 1);
                }
                if (validatedResult instanceof Err) {
                    warning(`${warn_mess} in ${outputRawProps}. ${validatedResult}`);
                    return;
                }
                switch (i) {
                    case 1:
                        outputParams.width = validatedResult;
                        break;
                    case 2: {
                        outputParams.height = validatedResult;
                        break;
                    }
                    case 3:
                        outputParams.noBorders = Boolean(validatedResult);
                        break;
                    case 4:
                        outputParams.noGaps = Boolean(validatedResult);
                        break;
                }
            }
            outputProps[outputRawProps[0].trim()] = outputParams;
        });
        return outputProps;
    }
    static getSortedLayouts(layoutsList) {
        let sortedLayouts = [];
        for (const [idx, [layoutClass, isCapacity]] of layoutsList.entries()) {
            const enabledConfigKey = `${unCapitalize(layoutClass.id)}Enabled`;
            if (!isValidConfigKey(enabledConfigKey)) {
                warning(`kwinconfig: unrecognized config key "${enabledConfigKey}" for layout ${layoutClass.id}, treating layout as enabled`);
            }
            else if (!KWIN.readConfig(enabledConfigKey, true)) {
                continue;
            }
            const orderConfigKey = `${unCapitalize(layoutClass.id)}Order`;
            if (!isValidConfigKey(orderConfigKey)) {
                warning(`kwinconfig: unrecognized config key "${orderConfigKey}" for layout ${layoutClass.id}, skipping layout order`);
                continue;
            }
            let validatedOrder = validateNumber(KWIN.readConfig(orderConfigKey, idx + 1), 1, 12);
            if (validatedOrder instanceof Err) {
                validatedOrder = idx + 1;
                warning(`kwinconfig: layout order for ${layoutClass.id} is invalid, using default value ${validatedOrder}`);
            }
            sortedLayouts.push({
                order: validatedOrder,
                layoutClass: layoutClass,
                isCapacity: isCapacity,
            });
        }
        sortedLayouts.sort((a, b) => a.order - b.order);
        if (sortedLayouts.length === 0) {
            sortedLayouts.push({
                order: 1,
                layoutClass: TileLayout,
                isCapacity: false,
            });
        }
        return sortedLayouts;
    }
    static getLayoutOrder(sortedLayouts) {
        let layoutOrder = [];
        sortedLayouts.forEach(({ layoutClass }) => {
            layoutOrder.push(layoutClass.id);
        });
        return layoutOrder;
    }
    static getLayoutFactories(sortedLayouts) {
        let layoutFactories = {};
        let layoutFactoryCapacities = {};
        for (const { layoutClass, isCapacity } of sortedLayouts) {
            if (isCapacity) {
                const capacityConfigKey = `${unCapitalize(layoutClass.id)}Capacity`;
                if (!isValidConfigKey(capacityConfigKey)) {
                    warning(`kwinconfig: unrecognized config key "${capacityConfigKey}" for layout ${layoutClass.id}, skipping capacity config`);
                    layoutFactories[layoutClass.id] = () => new layoutClass(null);
                    layoutFactoryCapacities[layoutClass.id] = null;
                    continue;
                }
                let capacity = validateNumber(KWIN.readConfig(capacityConfigKey, 99), 0, 99);
                if (capacity instanceof Err) {
                    warning(`kwinconfig: layout capacity for ${layoutClass.id} is invalid: ${capacity}`);
                    layoutFactories[layoutClass.id] = () => new layoutClass(null);
                    layoutFactoryCapacities[layoutClass.id] = null;
                }
                else if (capacity === 0 || capacity > 98) {
                    layoutFactories[layoutClass.id] = () => new layoutClass(null);
                    layoutFactoryCapacities[layoutClass.id] = null;
                }
                else {
                    layoutFactories[layoutClass.id] = () => new layoutClass(capacity);
                    layoutFactoryCapacities[layoutClass.id] = capacity;
                }
            }
            else {
                layoutFactories[layoutClass.id] = () => new layoutClass();
                layoutFactoryCapacities[layoutClass.id] = null;
            }
        }
        return { factories: layoutFactories, capacities: layoutFactoryCapacities };
    }
    signature() {
        const serializable = {};
        for (const key of Object.keys(this).sort()) {
            if (key !== "layoutFactories")
                serializable[key] = this[key];
        }
        return JSON.stringify(serializable);
    }
    equals(other) {
        return this.signature() === other.signature();
    }
    createLogger() {
        if (!this.loggingConfig.enabled)
            return undefined;
        const parts = this.loggingConfig.parts.map(([partition, modules]) => [partition, [...modules]]);
        return new Logging(parts, [...this.loggingConfig.filters]);
    }
    toString() {
        return "Config(" + JSON.stringify(this, undefined, 2) + ")";
    }
}
var KWINCONFIG;
class DBusManager {
    constructor(dBusQml) {
        this._isConnected = false;
        this._vkCallbacks = [];
        this._vkCallInFlight = false;
        this._entered = false;
        this._disposed = false;
        this._connections = [];
        try {
            this._dBusMoveMouseToFocus = dBusQml.getDBusMoveMouseToFocus();
            this._dBusMoveMouseToCenter = dBusQml.getDBusMoveMouseToCenter();
            this._dBusMoveMouseToScreenCenter =
                dBusQml.getDBusMoveMouseToScreenCenter();
            this._connect(this._dBusMoveMouseToCenter.finished, this.moveMouseToFocusCallback.bind(this));
            this._connect(this._dBusMoveMouseToFocus.failed, () => {
                LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.dbus, "callFailed", " 'MoveMouseToFocus' failed");
            });
            this._connect(this._dBusMoveMouseToCenter.failed, () => {
                LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.dbus, "callFailed", " 'MoveMouseToCenter' failed");
            });
            this._dBusConnectAttempts = 40;
            this._existsCall = dBusQml.getDBusExists();
            this._connect(this._existsCall.finished, this._dBusIsOn.bind(this));
            this._connect(this._existsCall.failed, this._checkDBusConn.bind(this));
            this._existsCall.call();
            this._vkVisibleCall = dBusQml.getDBusVirtualKeyboardVisible();
            this._connect(this._vkVisibleCall.finished, this._onVKResult.bind(this));
            this._connect(this._vkVisibleCall.failed, this._onVKFailed.bind(this));
        }
        catch (error) {
            this.dispose();
            throw error;
        }
    }
    _dBusIsOn() {
        this._isConnected = true;
        info("DBus: connected");
    }
    _checkDBusConn() {
        if (this._dBusConnectAttempts-- > 0)
            this.setTimeout(this._existsCall.call, 500);
        else
            warning("DBus failed");
    }
    moveMouseToCenter(timeout) {
        if (!this._isConnected)
            return;
        if (timeout !== undefined)
            this.setTimeout(this._dBusMoveMouseToCenter.call, timeout);
        else
            this._dBusMoveMouseToCenter.call();
    }
    moveMouseToScreenCenter(timeout) {
        if (!this._isConnected)
            return;
        if (timeout !== undefined)
            this.setTimeout(this._dBusMoveMouseToScreenCenter.call, timeout);
        else
            this._dBusMoveMouseToScreenCenter.call();
    }
    moveMouseToFocus(timeout) {
        if (!this._isConnected)
            return;
        if (timeout !== undefined)
            this.setTimeout(this._dBusMoveMouseToFocus.call, timeout);
        else
            this._dBusMoveMouseToFocus.call();
    }
    moveMouseToFocusCallback() {
        this.moveMouseToFocus();
    }
    _onVKResult(result) {
        const isVisible = !!result[0];
        this._vkCallInFlight = false;
        const cbs = this._vkCallbacks.splice(0);
        for (const cb of cbs)
            cb(isVisible);
    }
    _onVKFailed() {
        this._vkCallInFlight = false;
        const cbs = this._vkCallbacks.splice(0);
        for (const cb of cbs)
            cb(false);
    }
    checkVirtualKeyboardVisible(callback) {
        if (this._disposed)
            return;
        if (!this._isConnected) {
            callback(false);
            return;
        }
        this._vkCallbacks.push(callback);
        if (!this._vkCallInFlight) {
            this._vkCallInFlight = true;
            this._vkVisibleCall.call();
        }
    }
    _enter(callback) {
        if (this._entered || this._disposed)
            return;
        this._entered = true;
        try {
            callback();
        }
        catch (e) {
            warning(`DBusProtectFunc: Error raised line: ${e.lineNumber}. Error: ${e}`);
        }
        finally {
            this._entered = false;
        }
    }
    setTimeout(func, timeout) {
        KWinSetTimeout(() => this._enter(func), timeout);
    }
    dispose() {
        if (this._disposed)
            return;
        this._disposed = true;
        this._vkCallbacks = [];
        this._vkCallInFlight = false;
        for (const { signal, callback } of this._connections.splice(0)) {
            try {
                signal.disconnect(callback);
            }
            catch (_) {
            }
        }
    }
    _connect(signal, callback) {
        signal.connect(callback);
        this._connections.push({ signal, callback });
    }
}
var KWIN;
const LayoutOSDNames = {
    TileLayout: { name: "Tile", icon: "tile" },
    MonocleLayout: { name: "Monocle", icon: "monocle" },
    ThreeColumnLayout: { name: "Three Column", icon: "threecolumn" },
    SpiralLayout: { name: "Spiral", icon: "spiral" },
    QuarterLayout: { name: "Quarter", icon: "quarter" },
    StackedLayout: { name: "Stacked", icon: "stacked" },
    ColumnsLayout: { name: "Columns", icon: "columns" },
    SpreadLayout: { name: "Spread", icon: "spread" },
    FloatingLayout: { name: "Floating", icon: "floating" },
    StairLayout: { name: "Stair", icon: "stair" },
    BinaryTreeLayout: { name: "Binary Tree", icon: "binarytree" },
    CascadeLayout: { name: "Cascade", icon: "cascade" },
};
function logProtectedError(e) {
    const line = e && e.lineNumber !== undefined ? e.lineNumber : "unknown";
    warning(`ProtectFunc: Error raised line: ${line}. Error: ${String(e)}`);
}
class ReentrancyGuard {
    constructor() {
        this._entered = false;
    }
    run(callback) {
        if (this._entered)
            return;
        this._entered = true;
        try {
            callback();
        }
        catch (e) {
            logProtectedError(e);
        }
        finally {
            this._entered = false;
        }
    }
}
class KWinDriver {
    get backend() {
        return KWinDriver.backendName;
    }
    get currentDesktop() {
        return this.workspace.currentDesktop;
    }
    get currentSurface() {
        const output = resolveWindowOutput(this.workspace, this.workspace.activeWindow);
        return this._surfaceStore.getSurface(output, this.workspace.currentActivity, this.workspace.currentDesktop);
    }
    set currentSurface(value) {
        const ksrf = value;
        if (this.workspace.currentDesktop.id !== ksrf.vDesktop.id)
            this.workspace.currentDesktop = ksrf.vDesktop;
        if (this.workspace.currentActivity !== ksrf.activity)
            this.workspace.currentActivity = ksrf.activity;
    }
    get currentWindow() {
        const client = this.workspace.activeWindow;
        return client ? this.windowMap.get(client) : null;
    }
    set currentWindow(window) {
        if (window !== null) {
            window.focusTime = getTime();
            this.workspace.activeWindow = window.window.window;
        }
    }
    get currentSurfaces() {
        const currentSurfaces = [];
        this.workspace.screens.forEach((output) => {
            currentSurfaces.push(this._surfaceStore.getSurface(output, this.workspace.currentActivity, this._outputCurrentDesktop(output)));
        });
        return currentSurfaces;
    }
    get cursorPosition() {
        const workspacePos = this.workspace.cursorPos;
        return workspacePos !== null
            ? { x: workspacePos.x, y: workspacePos.y }
            : null;
    }
    get isRegister() {
        return this._isRegister.state;
    }
    constructor(api, config) {
        KWIN = api.kwin;
        CONFIG = KWINCONFIG = config !== null && config !== void 0 ? config : new KWinConfig();
        LOG = KWINCONFIG.createLogger();
        this.workspace = api.workspace;
        this._shortcuts = new Map(api.shortcuts.map((entry) => [entry.name, new Shortcut(entry)]));
        this._shortcutSequences = new Map();
        this._shortcutPressTime = 0;
        this._shortcutFinishToken = 0;
        this._runningShortcutSequence = null;
        this.engine = new TilingEngine();
        this.control = new TilingController(this.engine);
        this.windowMap = new WrapperMap((client) => DriverWindow.generateID(client), (client) => new WindowClass(new DriverWindow(client, this.workspace, this._surfaceStore)));
        this._connections = [];
        this._started = false;
        this._disposed = false;
        this._lastInteractiveMoveResize = 0;
        this._pointerRequest = null;
        this._pointerCenterPending = false;
        this._layoutPassActive = false;
        this._layoutChooserSurfaceId = null;
        this._surfaceStore = new KWinSurfaceStore(this.workspace);
        this._isRegister = {
            state: false,
            lastPushed: 0,
            toggleMode: CONFIG.altRegisterIsToggle,
            alterActionID: 0,
        };
        DBUS = new DBusManager(api.dbus);
    }
    main() {
        if (this._started || this._disposed)
            return;
        this._started = true;
        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.printConfig, undefined, `Config: ${CONFIG}`);
        this._bindEvents();
        this._bindShortcut();
        const clients = this.workspace.stackingOrder;
        for (let i = 0; i < clients.length; i++) {
            this.addWindow(clients[i], false);
        }
        this.control.onSurfaceUpdate(this, "forcedArrangeScreen");
    }
    dispose() {
        if (this._disposed)
            return;
        this._disposed = true;
        for (const { signal, callback } of this._connections.splice(0)) {
            try {
                signal.disconnect(callback);
            }
            catch (_) {
            }
        }
        for (const window of this.windowMap)
            window.window.dispose();
        this.engine.relocationWindows.clear();
        this.engine.windows.list = [];
        this.windowMap.clear();
        this.hideDragPreview();
        this._shortcutSequences.clear();
        this._shortcuts.clear();
        this._runningShortcutSequence = null;
        DBUS.dispose();
    }
    addWindow(client, arrange = true) {
        if (client.dock) {
            this.manageDock(client, arrange);
            return null;
        }
        if (!client.deleted &&
            client.pid >= 0 &&
            !client.popupWindow &&
            client.normalWindow &&
            !client.hidden &&
            client.width * client.height > 10) {
            const window = this.windowMap.add(client);
            if (client.active)
                this.control.onWindowFocused(this, window);
            if (client.maximizeMode > 0) {
                window.window.maximized = true;
            }
            if (arrange)
                this.control.onWindowAdded(this, window, "windowAdded");
            else
                this.engine.manage(window);
            if (window.state !== WindowState.Unmanaged) {
                this._bindWindowEvents(window, client);
                LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.newWindowAdded, "", debugWin(client), {
                    winClass: [`${client.resourceClass}`],
                });
                return window;
            }
            else {
                this.windowMap.remove(client);
                LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.newWindowUnmanaged, "", debugWin(client), {
                    winClass: [`${client.resourceClass}`],
                });
            }
        }
        else {
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.newWindowFiltered, "", debugWin(client), {
                winClass: [`${client.resourceClass}`],
            });
        }
        return null;
    }
    manageDock(client, arrange = true) {
        const placementArea = () => toRect(this.workspace.clientArea(0, client.output, this.workspace.currentDesktop));
        let prevPlacement = {
            desktop: this.workspace.currentDesktop,
            area: placementArea(),
        };
        if (arrange)
            this.control.onSurfaceUpdate(this, "manageDock");
        this._connect(client.frameGeometryChanged, () => {
            if (!client || client.deleted) {
                return;
            }
            const desktop = this.workspace.currentDesktop;
            const area = placementArea();
            if (desktop.id === prevPlacement.desktop.id &&
                area.equals(prevPlacement.area)) {
                return;
            }
            prevPlacement = { desktop, area };
            this.control.onSurfaceUpdate(this, "manageDock");
        });
    }
    focusNeighborWindow(direction, winTypes) {
        let window = this.workspace.activeWindow;
        if (!window)
            return false;
        let windows = this._getWindowsByDirection(winTypes, this.currentSurface, toRect(window.frameGeometry), direction);
        if (windows.length === 0)
            return false;
        return this._setFocusOnSurface(window, this.currentSurface, direction, winTypes, windows);
    }
    focusOutput(window, direction, winTypes) {
        let neighbor = this.getNeighborOutput(direction, this.workspace.activeScreen);
        if (neighbor === null)
            return false;
        this._makeActiveScreen(neighbor, false);
        let neighbor_surface = this._surfaceStore.getSurface(neighbor, this.workspace.currentActivity, this._outputCurrentDesktop(neighbor));
        if (!this._setFocusOnSurface(window, neighbor_surface, direction, winTypes)) {
            this.showNotification("Active screen");
        }
        return true;
    }
    focusSpecial(direction) {
        switch (direction) {
            case "up": {
                let screens = this.workspace.screens;
                if (screens.length === 1)
                    return true;
                let output = this.workspace.activeScreen;
                let idx = screens.indexOf(output);
                if (idx < 0) {
                    warning(`kwindriver: focusNeighborWindow: screen doesn't found.`);
                    return false;
                }
                idx = idx < screens.length - 1 ? idx + 1 : 0;
                this._makeActiveScreen(screens[idx]);
                this.requestPointerOnFocus("screen", true);
                return false;
            }
            case "down": {
                let window = this.workspace.activeWindow;
                if (!window)
                    return false;
                let windows = this._getWindowsByDirection(16, this.currentSurface, toRect(window.frameGeometry), direction);
                let idx = windows.indexOf(window);
                if (idx < 0) {
                    this.workspace.activeWindow = windows[0];
                    this.requestPointerOnFocus("window", true);
                    return false;
                }
                if (windows.length === 1)
                    return false;
                idx = idx < windows.length - 1 ? idx + 1 : 0;
                this.workspace.activeWindow = windows[idx];
                this.requestPointerOnFocus("window", true);
                return false;
            }
            case "right":
            case "left": {
                let desktops = this.workspace.desktops;
                if (desktops.length === 1)
                    return true;
                let currentDesktop = this.workspace.currentDesktop;
                let idx = desktops.indexOf(currentDesktop);
                if (idx < 0) {
                    warning(`kwindriver: focusNeighborWindow: vDesktop doesn't found.`);
                    return false;
                }
                if (direction === "left") {
                    idx = idx > 0 ? idx - 1 : desktops.length - 1;
                }
                else {
                    idx = idx < desktops.length - 1 ? idx + 1 : 0;
                }
                this.workspace.currentDesktop = desktops[idx];
                return true;
            }
        }
    }
    focusVDesktop(window, direction, winTypes) {
        let neighbor = this.getNeighborVDesktop(direction);
        if (neighbor === null)
            return false;
        let targetOutput = this.workspace.activeScreen;
        this._setOutputDesktop(targetOutput, neighbor);
        this._makeActiveScreen(targetOutput, false);
        let neighbor_surface = this._surfaceStore.getSurface(targetOutput, this.workspace.currentActivity, neighbor);
        let result = this._setFocusOnSurface(window, neighbor_surface, direction, winTypes);
        this.requestPointerOnFocus("screen", true);
        return result;
    }
    getNeighborOutput(direction, source) {
        let retOutput = null;
        let intersection = 0;
        let sourceRect = toRect(source.geometry);
        function isOutputCandidate(targetRect, coordinate) {
            let currentIntersection = sourceRect.intersection(targetRect, coordinate);
            if (currentIntersection > intersection) {
                intersection = currentIntersection;
                return true;
            }
            return false;
        }
        for (let target of this.workspace.screens) {
            if (target === source)
                continue;
            let targetRect = toRect(target.geometry);
            switch (direction) {
                case "left": {
                    if (sourceRect.x === targetRect.maxX) {
                        if (isOutputCandidate(targetRect, "y"))
                            retOutput = target;
                    }
                    break;
                }
                case "right": {
                    if (sourceRect.maxX === targetRect.x) {
                        if (isOutputCandidate(targetRect, "y"))
                            retOutput = target;
                    }
                    break;
                }
                case "up": {
                    if (sourceRect.y === targetRect.maxY) {
                        if (isOutputCandidate(targetRect, "x"))
                            retOutput = target;
                    }
                    break;
                }
                case "down": {
                    if (sourceRect.maxY === targetRect.y) {
                        if (isOutputCandidate(targetRect, "x"))
                            retOutput = target;
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        }
        return retOutput;
    }
    getNeighborVDesktop(direction, sourceVDesktop) {
        var _a;
        const currentVDesktop = sourceVDesktop != null ? sourceVDesktop : this.workspace.currentDesktop;
        const vDesktops = this.workspace.desktops;
        const netSize = this.workspace.desktopGridSize;
        if (!currentVDesktop)
            return null;
        const total = vDesktops.length;
        const width = netSize.width;
        const height = netSize.height;
        const idx = vDesktops.indexOf(currentVDesktop);
        if (idx < 0)
            return null;
        if ((direction === "left" || direction === "right") && width === 1)
            return null;
        if ((direction === "up" || direction === "down") && height === 1)
            return null;
        if (direction === "left" || direction === "right") {
            const col = (idx % width) + 1;
            if (direction === "left") {
                if (col === 1)
                    return null;
                return (_a = vDesktops[idx - 1]) !== null && _a !== void 0 ? _a : null;
            }
            else {
                if (col === width)
                    return null;
                return idx + 1 < total ? vDesktops[idx + 1] : null;
            }
        }
        else {
            const row = Math.ceil((idx + 1) / width);
            if (direction === "up") {
                if (row === 1)
                    return null;
                const neighborIdx = idx - width;
                return neighborIdx >= 0 ? vDesktops[neighborIdx] : null;
            }
            else {
                if (row === height)
                    return null;
                const neighborIdx = idx + width;
                return neighborIdx < total ? vDesktops[neighborIdx] : null;
            }
        }
    }
    getSurface(output, vDesktop) {
        if (!vDesktop) {
            vDesktop = this._outputCurrentDesktop(output);
        }
        return this._surfaceStore.getSurface(output, this.workspace.currentActivity, vDesktop);
    }
    setTimeout(func, timeout) {
        KWinSetTimeout(() => this._runProtected(func), timeout);
    }
    showNotification(text) {
        if (CONFIG.notificationDuration > 0)
            popupDialog.showNotification(text, CONFIG.notificationDuration);
    }
    showLayoutOSD() {
        if (CONFIG.notificationDuration <= 0)
            return;
        const entries = CONFIG.layoutOrder
            .filter((id) => LayoutOSDNames[id] !== undefined)
            .map((id) => ({
            id,
            name: LayoutOSDNames[id].name,
            icon: LayoutOSDNames[id].icon,
        }));
        if (entries.length === 0)
            return;
        const selected = this.engine.layouts.getCurrentLayout(this.currentSurface).classID;
        popupDialog.showLayouts(entries, selected, CONFIG.notificationDuration);
    }
    showLayoutShortcut(id) {
        const entry = LayoutOSDNames[id];
        if (!entry || CONFIG.notificationDuration <= 0)
            return;
        popupDialog.showLayoutShortcut({ id, name: entry.name, icon: entry.icon }, CONFIG.notificationDuration);
    }
    showLayoutChooser() {
        const surface = this.currentSurface;
        if (layoutChooserDialog.isOpen() &&
            this._layoutChooserSurfaceId === surface.id) {
            layoutChooserDialog.hide();
            this._layoutChooserSurfaceId = null;
            return;
        }
        const entries = CONFIG.layoutOrder
            .filter((id) => LayoutOSDNames[id] !== undefined)
            .map((id) => ({
            id,
            name: LayoutOSDNames[id].name,
            icon: LayoutOSDNames[id].icon,
        }));
        if (entries.length === 0)
            return;
        const selected = this.engine.layouts.getCurrentLayout(surface).classID;
        this._layoutChooserSurfaceId = surface.id;
        layoutChooserDialog.showLayouts(entries, selected, CONFIG.notificationDuration);
        DBUS.moveMouseToScreenCenter(KWinDriver.POINTER_CENTER_DELAY_MS);
    }
    handleLayoutChooserShortcut(action) {
        if (!layoutChooserDialog.isOpen())
            return false;
        switch (action) {
            case KrohnkiteAction.DWMLeft:
            case KrohnkiteAction.FocusLeft:
                layoutChooserDialog.navigate(-1, 0);
                return true;
            case KrohnkiteAction.DWMRight:
            case KrohnkiteAction.FocusRight:
                layoutChooserDialog.navigate(1, 0);
                return true;
            case KrohnkiteAction.FocusUp:
                layoutChooserDialog.navigate(0, -1);
                return true;
            case KrohnkiteAction.FocusDown:
                layoutChooserDialog.navigate(0, 1);
                return true;
            default:
                return false;
        }
    }
    selectLayoutFromOSD(id) {
        if (CONFIG.layoutOrder.indexOf(id) === -1)
            return;
        this._runProtected(() => {
            if (this.engine.layouts.getCurrentLayout(this.currentSurface).classID === id)
                return;
            this.engine.setLayout(this, id, false);
            this.engine.arrange(this, "shortcutLayoutCB");
        });
    }
    showDragPreview(area, rect) {
        if (!CONFIG.dragPreview)
            return;
        dragPreview.showRect(area.x, area.y, area.width, area.height, rect.x, rect.y, rect.width, rect.height, CONFIG.dockFrameColor, CONFIG.dockBorderColor);
    }
    hideDragPreview() {
        dragPreview.hide();
    }
    shortcutSequencesArrange() { }
    _setRegisterTimeout(timeId, timeout) {
        this.setTimeout(() => {
            if (timeId === this._isRegister.alterActionID &&
                this._isRegister.state !== this._isRegister.toggleMode) {
                const timeNow = getTime();
                const timeSinceLastPressShortcut = timeNow - this._shortcutPressTime;
                if (timeSinceLastPressShortcut < CONFIG.altRegisterTimeout) {
                    this._setRegisterTimeout(timeId, CONFIG.altRegisterTimeout - timeSinceLastPressShortcut);
                }
                else {
                    this._isRegister.state = this._isRegister.toggleMode;
                    this.showNotification(`Register ${this._isRegister.state ? "on" : "off"}`);
                }
            }
        }, timeout !== null && timeout !== void 0 ? timeout : CONFIG.notificationDuration + 5);
    }
    alterRegisterHdl(action) {
        switch (action) {
            case "AlterRegister": {
                this._isRegister.state = !this._isRegister.state;
                this._isRegister.alterActionID = getTime();
                this.showNotification(`Register ${this._isRegister.state ? "on" : "off"}`);
                if (this._isRegister.state !== this._isRegister.toggleMode) {
                    this._setRegisterTimeout(this._isRegister.alterActionID);
                }
                break;
            }
            case "ToggleRegister": {
                this._isRegister.alterActionID = 0;
                this._isRegister.toggleMode = !this._isRegister.toggleMode;
                this._isRegister.state = this._isRegister.toggleMode;
                this.showNotification(`Register toggled ${this._isRegister.state ? "on" : "off"}`);
                break;
            }
        }
    }
    relocateWindows() {
        const relocationWindows = this.engine.relocationWindows;
        if (relocationWindows.totalNumWinsPrepareToOutput === 0) {
            this._transferWindowsToVDesktops();
            return true;
        }
        let totalWindowsSentToOutput = 0;
        for (const [output, windows] of relocationWindows.toOutputs.entries()) {
            for (const window of windows) {
                if (this._moveWindowToOutput(window, output)) {
                    if (relocationWindows.isSending === false)
                        relocationWindows.isSending = true;
                    totalWindowsSentToOutput++;
                }
            }
        }
        if (totalWindowsSentToOutput === 0) {
            relocationWindows.clear();
            return false;
        }
        if (this._sendingWindowsProcessCall("quickRelocationWindows"))
            return true;
        const time = getTime();
        relocationWindows.startTime = time;
        const forcedArrangeScreen = () => {
            if (relocationWindows.isSending && relocationWindows.startTime <= time) {
                warning(`${getMethodName()}. Forced Arrange. Start time: ${time}, Number of prepared Windows: ${relocationWindows.totalNumWinsPrepareToOutput}, sent:${totalWindowsSentToOutput}, sending to Output: ${relocationWindows.getWinsSendingToOutput}, prepare to transfer to VDesktop: ${relocationWindows.totalNumWinsPrepareToVDesktop}`);
                relocationWindows.clear();
                try {
                    this.control.engine.arrange(this, "forcedArrangeScreen");
                }
                catch (e) {
                    warning(`${getMethodName()}: ${e}`);
                }
            }
        };
        this.setTimeout(forcedArrangeScreen, TilingEngine.SENDING_WINDOWS_MAX_WAIT_TIME);
        return true;
    }
    _moveWindowToOutput(window, targetOutput) {
        const client = window.window.window;
        if (client == null)
            return false;
        window.isSendingToOutput = true;
        window.relocationTargetOutput = targetOutput;
        try {
            this.workspace.sendClientToScreen(client, targetOutput);
        }
        catch (e) {
            window.isSendingToOutput = false;
            window.relocationTargetOutput = null;
            warning(`${getMethodName()}: sendClientToScreen() failed. ${e}`);
            return false;
        }
        this.setTimeout(() => this._finishOutputRelocation(window, targetOutput), 0);
        return true;
    }
    _finishOutputRelocation(window, targetOutput) {
        if (!window.isAlive() || !window.isSendingToOutput)
            return;
        const client = window.window.window;
        if (!outputIsAlive(client.output))
            return;
        if (client.output.name !== targetOutput.name)
            return;
        window.isSendingToOutput = false;
        window.relocationTargetOutput = null;
        this._sendingWindowsProcessCall("relocationCompletionCB");
    }
    _scheduleSurfaceArrange(window, reason, mayBeOverviewDrop = false) {
        const token = ++window.surfaceArrangeToken;
        const overviewWasActive = mayBeOverviewDrop &&
            typeof this.workspace.isEffectActive === "function" &&
            this.workspace.isEffectActive("overview");
        window.isRelocationPending = true;
        this.setTimeout(() => {
            if (window.surfaceArrangeToken !== token)
                return;
            if (!window.isAlive()) {
                window.isRelocationPending = false;
                return;
            }
            window.isRelocationPending = false;
            if (overviewWasActive && this._moveOverviewDropToCursorOutput(window)) {
                if (window.surfaceArrangeToken !== token)
                    return;
            }
            this.control.onWindowChanged(this, window, reason, "deferred surface change", [window.surface]);
        }, 0);
    }
    _moveOverviewDropToCursorOutput(window) {
        if (typeof this.workspace.isEffectActive !== "function" ||
            !this.workspace.isEffectActive("overview"))
            return false;
        const client = window.window.window;
        if (!client || client.deleted)
            return false;
        if (client.desktops.length !== 1)
            return false;
        let cursorOutput = null;
        try {
            cursorOutput = this.workspace.screenAt(this.workspace.cursorPos);
        }
        catch (e) {
            return false;
        }
        if (!outputIsAlive(cursorOutput) ||
            !outputIsAlive(client.output) ||
            cursorOutput.name === client.output.name)
            return false;
        const targetDesktop = client.desktops[0];
        const sourceDesktop = this._outputCurrentDesktop(client.output);
        const cursorDesktop = this._outputCurrentDesktop(cursorOutput);
        if (targetDesktop.id !== cursorDesktop.id &&
            targetDesktop.id === sourceDesktop.id)
            return false;
        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.outputChanged, "overviewCrossScreenDrop", `window: caption:${client.caption} internalID:${client.internalId}, ` +
            `output: ${client.output.name} -> ${cursorOutput.name}, ` +
            `desktop: ${targetDesktop.name}`);
        const targetGeom = toRect(cursorOutput.geometry);
        const actual = window.actualGeometry;
        const targetRect = new Rect(targetGeom.x + Math.floor((targetGeom.width - actual.width) / 2), targetGeom.y + Math.floor((targetGeom.height - actual.height) / 2), actual.width, actual.height);
        client.frameGeometry = toQRect(targetRect);
        return true;
    }
    _transferWindowsToVDesktops() {
        const overCapacityWindows = this.engine.relocationWindows;
        if (overCapacityWindows.totalNumWinsPrepareToVDesktop <= 0)
            return;
        let totalWindowsTransferToVDesktop = 0;
        for (const [vDesktop, windows,] of overCapacityWindows.toVDesktops.entries()) {
            for (const window of windows) {
                this._moveWinToVDesktop(window, vDesktop);
                totalWindowsTransferToVDesktop++;
            }
        }
        this._relocateWindowsProcessFinish("transferWindowToVDesktop");
    }
    _relocateWindowsProcessFinish(reason) {
        var _a, _b, _c, _d;
        if (this.engine.relocationWindows.activeWindow !== null)
            this.currentWindow = this.engine.relocationWindows.activeWindow;
        if (this.engine.relocationWindows.direction !== null) {
            let win;
            if (this.engine.relocationWindows.totalNumWinsPrepareToOutput === 1) {
                win = (_b = (_a = this.engine.relocationWindows.toOutputs.entries()[0]) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b[0];
            }
            else if (this.engine.relocationWindows.totalNumWinsPrepareToVDesktop === 1) {
                win = (_d = (_c = this.engine.relocationWindows.toVDesktops.entries()[0]) === null || _c === void 0 ? void 0 : _c[1]) === null || _d === void 0 ? void 0 : _d[0];
            }
            else {
                warning(`${getMethodName()}. there is Direction assign but toOutputs or toVDesktops arrays length not equals one`);
                return;
            }
            if (win) {
                const srfRect = win.surface.workingArea;
                const winGeom = win.actualGeometry;
                let newX = winGeom.x;
                let newY = winGeom.y;
                switch (this.engine.relocationWindows.direction) {
                    case "left":
                        newX = srfRect.maxX - winGeom.width;
                        break;
                    case "right":
                        newX = srfRect.x;
                        break;
                    case "up":
                        newY = srfRect.maxY - winGeom.height;
                        break;
                    case "down":
                        newY = srfRect.y;
                        break;
                }
                win.forceSetGeometry(this, new Rect(newX, newY, winGeom.width, winGeom.height));
            }
            this.engine.relocationWindows.clear();
            return;
        }
        this.engine.relocationWindows.clear();
        try {
            this.control.engine.arrange(this, reason);
        }
        catch (e) {
            warning(`${getMethodName()}: ${e}`);
        }
    }
    _sendingWindowsProcessCall(reason) {
        if (this.engine.relocationWindows.isSending &&
            !this.engine.relocationWindows.isExistSendingWindowsToOutput) {
            if (this.engine.relocationWindows.isExistTransferWindowsToVDesktop) {
                this._transferWindowsToVDesktops();
                return true;
            }
            this._relocateWindowsProcessFinish(reason);
            return true;
        }
        return false;
    }
    moveWinToVDesktopByDirection(window, direction) {
        let targetVDesktop = this.getNeighborVDesktop(direction);
        if (targetVDesktop === null)
            return false;
        let client = window.window.window;
        const sourceSurface = window.surface;
        this.engine.beginArrangeBatch();
        try {
            this.workspace.currentDesktop = targetVDesktop;
            this._moveWinToVDesktop(window, targetVDesktop);
            this.workspace.activeWindow = client;
        }
        finally {
            this.engine.endArrangeBatch(this, "shortcutCB", `${getMethodName()}:moveToVDesktop`, [sourceSurface]);
        }
        return false;
    }
    _moveWinToVDesktop(window, virtualDesktop) {
        let client = window.window.window;
        const desktops = client.desktops;
        if (desktops.length !== 0 && !desktops.find((d) => d === virtualDesktop)) {
            client.desktops = [virtualDesktop];
        }
    }
    _getWindowsByDirection(wType, surface, rect, direction, window) {
        let windows = [];
        function mapWinClassToKWinWindow(winClassWindows) {
            return winClassWindows.map((winClassWin) => winClassWin.window.window);
        }
        switch (wType) {
            case 1 | 2 | 4: {
                windows = mapWinClassToKWinWindow(this.engine.windows.getVisibleWindows(surface));
                break;
            }
            case 8: {
                windows = [];
                break;
            }
            case 1: {
                windows = mapWinClassToKWinWindow(this.engine.windows.getVisibleTiles(surface));
                break;
            }
            case 4: {
                windows = mapWinClassToKWinWindow(this.engine.windows.getVisibleFloat(surface));
                break;
            }
            case 2: {
                windows = mapWinClassToKWinWindow(this.engine.windows.getVisibleDocked(surface));
                break;
            }
            case 1 | 4: {
                windows = mapWinClassToKWinWindow(this.engine.windows.getVisibleTilesOrFloat(surface));
                break;
            }
            case 1 | 2: {
                windows = mapWinClassToKWinWindow(this.engine.windows.getVisibleTilesOrDocked(surface));
                break;
            }
            case 4 | 2: {
                windows = mapWinClassToKWinWindow(this.engine.windows.getVisibleFloatOrDocked(surface));
                break;
            }
            case 16: {
                windows = this.workspace.stackingOrder.filter((win) => win.output === surface.output &&
                    (win.desktops.length === 0 ||
                        win.desktops.indexOf(surface.vDesktop) > -1) &&
                    !win.minimized &&
                    !win.hidden &&
                    !win.deleted &&
                    win.resourceClass !== "plasmashell");
                return windows;
            }
        }
        let filterFunc;
        switch (direction) {
            case "left":
                filterFunc = (r) => {
                    return r.x < rect.x && rect.intersection(r, "y") > 0;
                };
                break;
            case "right":
                filterFunc = (r) => {
                    return r.x > rect.x && rect.intersection(r, "y") > 0;
                };
                break;
            case "up":
                filterFunc = (r) => {
                    return r.y < rect.y && rect.intersection(r, "x") > 0;
                };
                break;
            case "down":
                filterFunc = (r) => {
                    return r.y > rect.y && rect.intersection(r, "x") > 0;
                };
                break;
        }
        windows = windows.filter((win) => {
            if (window && window === win)
                return false;
            let r = toRect(win.frameGeometry);
            return filterFunc(r);
        });
        return windows;
    }
    _makeActiveScreen(output, notify = true) {
        for (let win of this.workspace.stackingOrder) {
            if (win.resourceClass === "plasmashell" && win.output === output) {
                this.workspace.activeWindow = win;
                if (notify)
                    this.showNotification("Active screen");
                break;
            }
        }
    }
    _computeCrossScreenSourceRect(window, surface, direction) {
        const tG = toRect(surface.output.geometry);
        const sG = window.output.geometry;
        const winRect = toRect(window.frameGeometry);
        if (direction === "left" || direction === "right") {
            const y_ratio = (winRect.y - sG.y) / sG.height;
            const y = tG.y + tG.height * y_ratio;
            const h = Math.min(winRect.height, tG.height - (y - tG.y));
            if (direction === "left") {
                return new Rect(tG.maxX - 5, y, 5, h);
            }
            else {
                return new Rect(tG.x, y, 5, h);
            }
        }
        else {
            const x_ratio = (winRect.x - sG.x) / sG.width;
            const x = tG.x + tG.width * x_ratio;
            const w = Math.min(winRect.width, tG.width - (x - tG.x));
            if (direction === "up") {
                return new Rect(x, tG.maxY - 5, w, 5);
            }
            else {
                return new Rect(x, tG.y, w, 5);
            }
        }
    }
    _computeSurfaceEdgeSourceRect(surface, direction) {
        const g = toRect(surface.output.geometry);
        switch (direction) {
            case "left":
                return new Rect(g.maxX - 5, g.y, 5, g.height);
            case "right":
                return new Rect(g.x, g.y, 5, g.height);
            case "up":
                return new Rect(g.x, g.maxY - 5, g.width, 5);
            case "down":
                return new Rect(g.x, g.y, g.width, 5);
        }
    }
    _setFocusOnSurface(window, surface, direction, winTypes, localWindows = null) {
        var _a, _b;
        let sourceRect;
        if (localWindows !== null && window !== null) {
            sourceRect = toRect(window.frameGeometry);
        }
        else if (window !== null) {
            sourceRect = this._computeCrossScreenSourceRect(window, surface, direction);
        }
        else {
            sourceRect = this._computeSurfaceEdgeSourceRect(surface, direction);
        }
        let windows;
        if (localWindows !== null) {
            windows = localWindows;
        }
        else {
            windows = this._getWindowsByDirection(winTypes, surface, sourceRect, direction);
        }
        let focusCandidate = null;
        let fCTimeStamp = null;
        let distance = null;
        for (const win of windows) {
            if (window !== null && win === window)
                continue;
            let winRect = toRect(win.frameGeometry);
            const d = direction === "left"
                ? sourceRect.x - winRect.maxX
                : direction === "right"
                    ? winRect.x - sourceRect.maxX
                    : direction === "up"
                        ? sourceRect.y - winRect.maxY
                        : winRect.y - sourceRect.maxY;
            if (focusCandidate === null || distance === null || d < distance) {
                distance = d;
                focusCandidate = win;
                fCTimeStamp = null;
            }
            else if (d === distance) {
                if (fCTimeStamp === null) {
                    fCTimeStamp = (_a = this.engine.windows.getWindowById(String(focusCandidate.internalId))) === null || _a === void 0 ? void 0 : _a.focusTime;
                }
                let timestamp = (_b = this.engine.windows.getWindowById(String(win.internalId))) === null || _b === void 0 ? void 0 : _b.focusTime;
                if ((timestamp && fCTimeStamp && timestamp > fCTimeStamp) ||
                    (timestamp && !fCTimeStamp)) {
                    fCTimeStamp = timestamp;
                    focusCandidate = win;
                }
            }
        }
        if (focusCandidate !== null) {
            const focusWindow = this.windowMap.get(focusCandidate);
            this.currentWindow = focusWindow;
        }
        return focusCandidate !== null;
    }
    _outputCurrentDesktop(output) {
        if (typeof this.workspace.currentDesktopForScreen === "function") {
            try {
                const d = this.workspace.currentDesktopForScreen(output);
                if (d)
                    return d;
            }
            catch (e) {
            }
        }
        return this.workspace.currentDesktop;
    }
    _setOutputDesktop(output, desktop) {
        if (typeof this.workspace.setCurrentDesktopForScreen === "function") {
            try {
                this.workspace.setCurrentDesktopForScreen(desktop, output);
                return;
            }
            catch (e) {
            }
        }
        this.workspace.currentDesktop = desktop;
    }
    _previousDesktopSurfaces(previousDesktop, output) {
        if (previousDesktop === undefined || previousDesktop === null)
            return [];
        const outputs = output !== undefined && output !== null
            ? [output]
            : this.workspace.screens;
        return outputs.map((out) => this._surfaceStore.getSurface(out, this.workspace.currentActivity, previousDesktop));
    }
    _onShortcut(shortcut) {
        this._shortcutPressTime = getTime();
        const token = ++this._shortcutFinishToken;
        const control = (action) => {
            if (shortcut.name) {
                LOG === null || LOG === void 0 ? void 0 : LOG.send("shortcut", "ControlFuncCall", `action:${action}`);
                this.control.onShortcut(this, action, "shortcutCB");
            }
        };
        const runSeq = (runningShortcutSequences) => {
            let maxSeqInProcess = null;
            for (let i = runningShortcutSequences.seq.length - 1; i >= 0; i--) {
                const seq = runningShortcutSequences.seq[i];
                if (seq.state === "inProcess") {
                    switch (seq.next(shortcut)) {
                        case "inProcess": {
                            maxSeqInProcess =
                                maxSeqInProcess !== null
                                    ? Math.max(maxSeqInProcess, seq.sequence.length)
                                    : seq.sequence.length;
                            break;
                        }
                        case "finish": {
                            if (maxSeqInProcess === null ||
                                maxSeqInProcess <= seq.sequence.length) {
                                runningShortcutSequences.finishAction = seq.resolve(this.isRegister);
                            }
                            else {
                                runningShortcutSequences.actionCandidate = seq.resolve(this.isRegister);
                            }
                            break;
                        }
                    }
                }
            }
            const notFinished = runningShortcutSequences.finishAction === "empty";
            if (maxSeqInProcess === null && notFinished)
                return false;
            else if (notFinished) {
                runningShortcutSequences.pressTime = this._shortcutPressTime;
                this.setTimeout(() => this.onShortcutFinish(token), runningShortcutSequences.seq[0].timeout + 5);
            }
            return true;
        };
        if (this._runningShortcutSequence !== null) {
            if (runSeq(this._runningShortcutSequence)) {
                if (this._runningShortcutSequence.finishAction !== "empty") {
                    let a = this._runningShortcutSequence.finishAction;
                    this._runningShortcutSequence = null;
                    control(a);
                }
                return;
            }
            else {
                this._runningShortcutSequence = null;
                return;
            }
        }
        const shortcutSequences = this._shortcutSequences.get(shortcut.name);
        if (this._runningShortcutSequence === null &&
            shortcutSequences !== undefined) {
            const seq = shortcutSequences.map((s) => new ShortcutSequence(s));
            this._runningShortcutSequence = {
                pressTime: this._shortcutPressTime,
                seq,
                finishAction: "empty",
                actionCandidate: shortcut.resolve(this.isRegister),
            };
            this.setTimeout(() => this.onShortcutFinish(token), seq[0].timeout + 5);
            return;
        }
        control(shortcut.resolve(this.isRegister));
    }
    onShortcutFinish(token) {
        if (this._runningShortcutSequence !== null &&
            token === this._shortcutFinishToken &&
            this._runningShortcutSequence.pressTime === this._shortcutPressTime) {
            this.control.onShortcut(this, this._runningShortcutSequence.actionCandidate, "shortcutCB");
            this._runningShortcutSequence = null;
        }
    }
    _bindShortcut() {
        if (CONFIG.altRegisterIsPushedTwice) {
            const conf = {
                shortcuts: ["AlterRegisterSC", "AlterRegisterSC"],
                mainAction: "ToggleRegister",
                registerAction: "ToggleRegister",
                sequenceTime: null,
            };
            const list = this._shortcutSequences.get("AlterRegisterSC");
            if (list === undefined)
                this._shortcutSequences.set("AlterRegisterSC", [conf]);
            else
                list.push(conf);
        }
        for (const conf of CONFIG.shortcutConf) {
            if (conf.shortcuts.length === 1) {
                const shortcut = this._shortcuts.get(conf.shortcuts[0]);
                if (shortcut === undefined)
                    continue;
                if (conf.mainAction !== undefined)
                    shortcut.action = conf.mainAction;
                if (conf.registerAction !== undefined)
                    shortcut.registerAction = conf.registerAction;
            }
            else {
                const first = conf.shortcuts[0];
                const list = this._shortcutSequences.get(first);
                if (list === undefined)
                    this._shortcutSequences.set(first, [conf]);
                else
                    list.push(conf);
            }
        }
        for (const shortcut of this._shortcuts.values()) {
            const action = shortcut.action;
            const registerAction = shortcut.registerAction;
            const isRegisterAction = (a) => a === KrohnkiteAction.AlterRegister ||
                a === KrohnkiteAction.ToggleRegister;
            if (isRegisterAction(action) || isRegisterAction(registerAction)) {
                if (action !== registerAction) {
                    warning(`${getMethodName()}. Shortcut "${shortcut.name}": action and registerAction must be equal to AlterRegister or ToggleRegister; fixing.`);
                    if (isRegisterAction(action))
                        shortcut.registerAction = action;
                    else
                        shortcut.action = registerAction;
                }
            }
        }
        for (const list of this._shortcutSequences.values()) {
            list.sort((a, b) => a.shortcuts.length - b.shortcuts.length);
            const maxTime = list.reduce((max, conf) => { var _a; return Math.max(max, (_a = conf.sequenceTime) !== null && _a !== void 0 ? _a : CONFIG.shortcutSequenceTime); }, 0);
            for (const conf of list)
                conf.sequenceTime = maxTime;
        }
        for (const shortcut of this._shortcuts.values()) {
            this._connect(shortcut.hdl.activated, () => {
                LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.shortcut, `Shortcut pressed:`, `${shortcut.name}`);
                this._onShortcut(shortcut);
            });
        }
    }
    _connect(signal, handler) {
        const guard = new ReentrancyGuard();
        const wrapper = (...args) => {
            if (this._disposed || typeof this.workspace === "undefined")
                signal.disconnect(wrapper);
            else
                guard.run(() => handler.apply(this, args));
        };
        signal.connect(wrapper);
        this._connections.push({ signal, callback: wrapper });
        return wrapper;
    }
    _runProtected(callback) {
        if (this._disposed)
            return;
        try {
            callback();
        }
        catch (e) {
            logProtectedError(e);
        }
    }
    _bindEvents() {
        this._connect(this.workspace.screensChanged, () => {
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.screensChanged, "eventFired");
            this._surfaceStore.onOutputsChanged();
            this.control.onSurfaceUpdate(this, "screensChangedCB");
        });
        this._connect(this.workspace.virtualScreenGeometryChanged, () => {
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.virtualScreenGeometryChanged, "eventFired");
            this.control.onSurfaceUpdate(this, "virtualScreenGeometryChangedCB");
        });
        this._connect(this.workspace.currentActivityChanged, (activityId) => {
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.currentActivityChanged, "eventFired", `Activity ID:${activityId}`);
            this.control.onCurrentActivityChanged(this, "currentActivityChangedCB");
        });
        this._connect(this.workspace.currentDesktopChanged, (previousDesktop, _currentDesktop, output) => {
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.currentDesktopChanged, "eventFired", `Virtual Desktop. previous name:${previousDesktop === null || previousDesktop === void 0 ? void 0 : previousDesktop.name}, id:${previousDesktop === null || previousDesktop === void 0 ? void 0 : previousDesktop.id}`);
            this.control.onSurfaceUpdate(this, "currentDesktopChangedCB", this._previousDesktopSurfaces(previousDesktop, output));
        });
        this._connect(this.workspace.windowAdded, (client) => {
            if (!client)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.windowAdded, "eventFired", `window: caption:${client.caption} internalID:${client.internalId}`, { winClass: [`${client.resourceClass}`] });
            const window = this.addWindow(client);
            if (client.active && window !== null) {
                this.control.onWindowFocused(this, window);
                this.requestPointerOnFocus("screen", false);
            }
        });
        this._connect(this.workspace.windowActivated, (client) => {
            if (!client || client.deleted)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.windowActivated, "eventFired", `window: caption:${client.caption} internalID:${client.internalId}`, { winClass: [`${client.resourceClass}`] });
            const window = this.windowMap.get(client);
            if (client.active && window !== null) {
                this.control.onWindowFocused(this, window);
            }
        });
        this._connect(this.workspace.windowRemoved, (client) => {
            if (!client)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.windowRemoved, "eventFired", `window: caption:${client.caption} internalID:${client.internalId}`, { winClass: [`${client.resourceClass}`] });
            if (client.dock) {
                this.control.onSurfaceUpdate(this, "windowRemovedCB");
                return;
            }
            const window = this.windowMap.get(client);
            if (window) {
                this.control.onWindowRemoved(this, window, "windowRemovedCB");
                this.windowMap.remove(client);
            }
        });
        this._connect(this.workspace.activityRemoved, (id) => {
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.surfaceChanged, "eventFired", `Activity: id: ${id} has been removed.`);
            this._surfaceStore.removeByActivity(id);
        });
        this._connect(this.workspace.desktopsChanged, () => {
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.surfaceChanged, "eventFired", `Virtual Desktops Changed`);
            this._surfaceStore.checkVirtualDesktops();
        });
    }
    onLayoutStart() {
        this._layoutPassActive = true;
    }
    onLayoutSettled() {
        this._layoutPassActive = false;
        if (this._pointerRequest === null)
            return;
        if (this._pointerCenterPending)
            return;
        this._pointerCenterPending = true;
        this.setTimeout(() => {
            this._pointerCenterPending = false;
            const request = this._pointerRequest;
            this._pointerRequest = null;
            if (request === null)
                return;
            if (request.reason === "focus" && !CONFIG.movePointerOnFocus)
                return;
            if (request.reason === "resize" && !CONFIG.movePointerOnResize)
                return;
            if (request.reason === "resize" &&
                getTime() - this._lastInteractiveMoveResize <
                    KWinDriver.INTERACTIVE_POINTER_GRACE_MS)
                return;
            if (request.target === "screen")
                DBUS.moveMouseToCenter();
            else
                DBUS.moveMouseToFocus();
        }, KWinDriver.POINTER_CENTER_DELAY_MS);
    }
    requestPointerOnFocus(target, byShortcut) {
        if (!CONFIG.movePointerOnFocus)
            return;
        if (CONFIG.movePointerOnFocusShortcutsOnly && !byShortcut)
            return;
        this._pointerRequest = { target, reason: "focus" };
        if (!this._layoutPassActive)
            this.onLayoutSettled();
    }
    onWindowSizeCommitted(client) {
        var _a;
        if (!CONFIG.movePointerOnResize)
            return;
        if (!client.active || client.move || client.resize)
            return;
        if (getTime() - this._lastInteractiveMoveResize <
            KWinDriver.INTERACTIVE_POINTER_GRACE_MS)
            return;
        if (((_a = this._pointerRequest) === null || _a === void 0 ? void 0 : _a.reason) !== "focus")
            this._pointerRequest = { target: "window", reason: "resize" };
        if (!this._layoutPassActive)
            this.onLayoutSettled();
    }
    _bindWindowEvents(window, client) {
        let moving = false;
        let resizing = false;
        this._connect(client.activitiesChanged, () => {
            if (!client || client.deleted)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.activitiesChanged, "eventFired", `window: caption:${client.caption} internalID:${client.internalId}, activities: ${client.activities.join(",")}`, { winClass: [`${client.resourceClass}`] });
            this.control.onWindowChanged(this, window, "activitiesChangedCB", "activity=" + client.activities.join(","));
        });
        this._connect(client.bufferGeometryChanged, () => {
            if (!client || client.deleted)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.bufferGeometryChanged, "eventFired", `Window: caption:${client.caption} internalId:${client.internalId}, moving:${moving}, resizing:${resizing}, actualGeometry: ${window.actualGeometry}, commitGeometry:${window.geometry}`, { winClass: [`${client.resourceClass}`] });
            if (moving)
                this.control.onWindowMove(window);
            else if (resizing)
                this.control.onWindowResize(this, window, "windowBufferGeometryChangedCB");
            else {
                if (!window.actualGeometry.equals(window.geometry))
                    if (CONFIG.optVKeyboardSupport) {
                        DBUS.checkVirtualKeyboardVisible((isVkVisible) => {
                            if (!isVkVisible &&
                                !window.actualGeometry.equals(window.geometry))
                                this.control.onWindowGeometryChanged(this, window);
                        });
                    }
                    else {
                        this.control.onWindowGeometryChanged(this, window);
                    }
            }
        });
        this._connect(client.desktopsChanged, () => {
            if (!client || client.deleted)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.desktopsChanged, "eventFired", `window: caption:${client.caption} internalID:${client.internalId}, desktops: ${client.desktops}`, { winClass: [`${client.resourceClass}`] });
            if (window.isSendingToOutput) {
                const target = window.relocationTargetOutput;
                if (target !== null)
                    this.setTimeout(() => this._finishOutputRelocation(window, target), 0);
                return;
            }
            this._scheduleSurfaceArrange(window, "windowDesktopsChangedCB", true);
        });
        this._connect(client.fullScreenChanged, () => {
            if (!client || client.deleted)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.fullScreenChanged, "eventFired", `window: caption:${client.caption} internalID:${client.internalId}, fullscreen: ${client.fullScreen}`, { winClass: [`${client.resourceClass}`] });
            this.control.onWindowChanged(this, window, "windowFullScreenChangedCB", "fullscreen=" + client.fullScreen);
        });
        this._connect(client.interactiveMoveResizeStepped, (geometry) => {
            if (!client || client.deleted)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.interactiveMoveResizeStepped, "eventFired", `window: caption:${client.caption} internalID:${client.internalId},interactiveMoveResizeStepped:${geometry}`, { winClass: [`${client.resourceClass}`] });
            this._lastInteractiveMoveResize = getTime();
            if (client.resize)
                return;
            this.control.onWindowDragging(this, window, geometry, "windowInteractiveMoveResizeSteppedCB");
        });
        this._connect(client.maximizedAboutToChange, (mode) => {
            if (!client || client.deleted)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.maximizedAboutToChange, "eventFired", `window: caption:${client.caption} internalID:${client.internalId},maximizedAboutToChange:${mode}`, { winClass: [`${client.resourceClass}`] });
            window.window.maximized = mode > 0;
            this.control.onWindowMaximizeChanged(this, window, "windowMaximizeAboutChangeCB");
        });
        this._connect(client.minimizedChanged, () => {
            if (!client || client.deleted)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.minimizedChanged, "eventFired", `window: caption:${client.caption} internalID:${client.internalId},minimized:${client.minimized}`, { winClass: [`${client.resourceClass}`] });
            if (KWINCONFIG.preventMinimize) {
                client.minimized = false;
                this.workspace.activeWindow = client;
            }
            else {
                let comment = client.minimized ? "minimized" : "unminimized";
                this.control.onWindowChanged(this, window, "windowMinimizedChangedCB", comment);
            }
        });
        this._connect(client.moveResizedChanged, () => {
            if (!client || client.deleted)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.moveResizedChanged, "eventFired", `Window: caption:${client.caption} internalId:${client.internalId}, moving:${moving}, resizing:${resizing}`, { winClass: [`${client.resourceClass}`] });
            this._lastInteractiveMoveResize = getTime();
            if (moving !== client.move) {
                moving = client.move;
                if (moving) {
                    this.control.onWindowMoveStart(window);
                }
                else {
                    this.control.onWindowMoveOver(this, window, "windowMoveResizedChangedCB");
                }
            }
            if (resizing !== client.resize) {
                resizing = client.resize;
                if (resizing)
                    this.control.onWindowResizeStart(window);
                else
                    this.control.onWindowResizeOver(this, window, "windowMoveResizedChangedCB");
            }
        });
        this._connect(client.outputChanged, () => {
            if (!client || client.deleted)
                return;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.outputChanged, "eventFired", `window: caption:${client.caption} internalID:${client.internalId} output: ${client.output.name}`, { winClass: [`${client.resourceClass}`] });
            if (window.isSendingToOutput) {
                const target = window.relocationTargetOutput;
                if (target !== null)
                    this.setTimeout(() => this._finishOutputRelocation(window, target), 0);
                else {
                    window.isSendingToOutput = false;
                    this._sendingWindowsProcessCall("relocationOutputChangedCB");
                }
                return;
            }
            this._scheduleSurfaceArrange(window, "outputChangedCB");
        });
        this._connect(client.stackingOrderChanged, () => {
            if (!client || client.deleted)
                return;
            if (this.currentWindow === window) {
                LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.stackingOrderChanged, "eventFired", `window: caption:${client.caption} internalID:${client.internalId} stackingOrder:${client.stackingOrder}`, { winClass: [`${client.resourceClass}`] });
                this.control.onStackingOrderChanged(this, window, "stackingOrderChanged");
            }
        });
        if (CONFIG.floatSkipPager) {
            this._connect(client.skipPagerChanged, () => {
                this.control.onWindowSkipPagerChanged(this, window, client.skipPager, "windowSkipPagerCB");
            });
        }
    }
}
KWinDriver.backendName = "kwin";
KWinDriver.INTERACTIVE_POINTER_GRACE_MS = 500;
KWinDriver.POINTER_CENTER_DELAY_MS = 30;
class KWinRuntime {
    constructor(api) {
        this.driver = null;
        this.config = null;
        this.generation = 0;
        this.reloading = false;
        this.disposed = false;
        this.api = api;
        KWIN = api.kwin;
    }
    selectLayout(id) {
        if (!this.config || !this.driver)
            return false;
        if (this.config.layoutOrder.indexOf(id) === -1)
            return false;
        this.driver.selectLayoutFromOSD(id);
        return true;
    }
    start() {
        if (this.driver !== null || this.disposed)
            return;
        const config = new KWinConfig();
        this.startDriver(config, false);
    }
    reloadIfChanged() {
        if (this.disposed || this.reloading || this.config === null)
            return false;
        const candidate = new KWinConfig();
        if (this.config.equals(candidate))
            return false;
        const previousConfig = this.config;
        this.reloading = true;
        try {
            this.stopDriver();
            try {
                this.startDriver(candidate, true);
                return true;
            }
            catch (error) {
                warning(`KWinRuntime: configuration reload failed; restoring the previous runtime. ${String(error)}`);
                try {
                    this.startDriver(previousConfig, false);
                }
                catch (rollbackError) {
                    this.config = null;
                    warning(`KWinRuntime: restoring the previous runtime also failed. ${String(rollbackError)}`);
                    throw error;
                }
                return false;
            }
        }
        finally {
            this.reloading = false;
        }
    }
    dispose() {
        if (this.disposed)
            return;
        this.disposed = true;
        this.stopDriver();
        this.config = null;
    }
    startDriver(config, isReload) {
        DefaultGapsCfg.reset();
        DefaultDockCfg.reset();
        let nextDriver = null;
        try {
            nextDriver = new KWinDriver(this.api, config);
            nextDriver.main();
        }
        catch (error) {
            if (nextDriver !== null) {
                try {
                    nextDriver.dispose();
                }
                catch (disposeError) {
                    warning(`KWinRuntime: failed to dispose an incomplete runtime. ${String(disposeError)}`);
                }
            }
            KWinTimerPool.instance.dispose();
            throw error;
        }
        this.config = config;
        this.driver = nextDriver;
        this.generation++;
        if (isReload)
            print(`KROHNKITE: configuration reloaded (generation ${this.generation})`);
    }
    stopDriver() {
        if (this.driver !== null) {
            this.driver.dispose();
            this.driver = null;
        }
        KWinTimerPool.instance.dispose();
    }
}
class KWinTimerPool {
    constructor() {
        this.timers = [];
        this.activeTimers = [];
        this.generation = 0;
        this.numTimers = 0;
    }
    setTimeout(func, timeout) {
        if (this.timers.length === 0) {
            this.numTimers++;
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.setTimeout, "setTimeout/newTimer", `numTimers: ${this.numTimers}`);
        }
        const timer = this.timers.pop() ||
            Qt.createQmlObject("import QtQuick 2.0; Timer {}", scriptRoot);
        const generation = this.generation;
        const callback = () => {
            try {
                timer.triggered.disconnect(callback);
            }
            catch (e) {
            }
            try {
                func();
            }
            catch (e) {
            }
            this.removeActive(timer, callback);
            if (generation === this.generation)
                this.timers.push(timer);
        };
        timer.interval = timeout;
        timer.repeat = false;
        timer.triggered.connect(callback);
        this.activeTimers.push({ timer, callback });
        timer.start();
    }
    dispose() {
        this.generation++;
        for (const entry of this.activeTimers.splice(0)) {
            try {
                entry.timer.stop();
                entry.timer.triggered.disconnect(entry.callback);
                entry.timer.destroy();
            }
            catch (_) {
            }
        }
        for (const timer of this.timers.splice(0)) {
            try {
                timer.stop();
                timer.destroy();
            }
            catch (_) {
            }
        }
        this.numTimers = 0;
    }
    removeActive(timer, callback) {
        const idx = this.activeTimers.findIndex((entry) => entry.timer === timer && entry.callback === callback);
        if (idx >= 0)
            this.activeTimers.splice(idx, 1);
    }
}
KWinTimerPool.instance = new KWinTimerPool();
function KWinSetTimeout(func, timeout) {
    KWinTimerPool.instance.setTimeout(func, timeout);
}
const Shortcuts = {
    AlterRegisterSC: {
        defaultAction: KrohnkiteAction.AlterRegister,
        defaultRegisterAction: KrohnkiteAction.AlterRegister,
    },
    FocusNextSC: {
        defaultAction: KrohnkiteAction.FocusNext,
        defaultRegisterAction: KrohnkiteAction.SwapUp,
    },
    FocusPrevSC: {
        defaultAction: KrohnkiteAction.FocusPrev,
        defaultRegisterAction: KrohnkiteAction.SwapDown,
    },
    FocusLeftSC: {
        defaultAction: KrohnkiteAction.FocusLeft,
        defaultRegisterAction: KrohnkiteAction.FocusLeft,
    },
    FocusRightSC: {
        defaultAction: KrohnkiteAction.FocusRight,
        defaultRegisterAction: KrohnkiteAction.FocusRight,
    },
    FocusDownSC: {
        defaultAction: KrohnkiteAction.FocusDown,
        defaultRegisterAction: KrohnkiteAction.FocusDown,
    },
    FocusUpSC: {
        defaultAction: KrohnkiteAction.FocusUp,
        defaultRegisterAction: KrohnkiteAction.FocusUp,
    },
    MoveDownSC: {
        defaultAction: KrohnkiteAction.MoveDown,
        defaultRegisterAction: KrohnkiteAction.SwapDown,
    },
    MoveUpSC: {
        defaultAction: KrohnkiteAction.MoveUp,
        defaultRegisterAction: KrohnkiteAction.SwapUp,
    },
    MoveLeftSC: {
        defaultAction: KrohnkiteAction.MoveLeft,
        defaultRegisterAction: null,
    },
    MoveRightSC: {
        defaultAction: KrohnkiteAction.MoveRight,
        defaultRegisterAction: null,
    },
    ToggleDockSC: {
        defaultAction: KrohnkiteAction.ToggleDock,
        defaultRegisterAction: null,
    },
    GrowHeightSC: {
        defaultAction: KrohnkiteAction.GrowHeight,
        defaultRegisterAction: null,
    },
    ShrinkHeightSC: {
        defaultAction: KrohnkiteAction.ShrinkHeight,
        defaultRegisterAction: null,
    },
    ShrinkWidthSC: {
        defaultAction: KrohnkiteAction.ShrinkWidth,
        defaultRegisterAction: null,
    },
    GrowWidthSC: {
        defaultAction: KrohnkiteAction.GrowWidth,
        defaultRegisterAction: null,
    },
    IncreaseSC: {
        defaultAction: KrohnkiteAction.Increase,
        defaultRegisterAction: KrohnkiteAction.FocusNext,
    },
    DecreaseSC: {
        defaultAction: KrohnkiteAction.Decrease,
        defaultRegisterAction: KrohnkiteAction.FocusPrev,
    },
    ToggleFloatSC: {
        defaultAction: KrohnkiteAction.ToggleFloat,
        defaultRegisterAction: null,
    },
    ToggleFloatAllSC: {
        defaultAction: KrohnkiteAction.ToggleFloatAll,
        defaultRegisterAction: null,
    },
    NextLayoutSC: {
        defaultAction: KrohnkiteAction.NextLayout,
        defaultRegisterAction: null,
    },
    PreviousLayoutSC: {
        defaultAction: KrohnkiteAction.PreviousLayout,
        defaultRegisterAction: null,
    },
    LayoutChooserSC: {
        defaultAction: KrohnkiteAction.LayoutChooser,
        defaultRegisterAction: null,
    },
    RotateSC: {
        defaultAction: KrohnkiteAction.Rotate,
        defaultRegisterAction: KrohnkiteAction.RotatePart,
    },
    RotatePartSC: {
        defaultAction: KrohnkiteAction.RotatePart,
        defaultRegisterAction: KrohnkiteAction.Rotate,
    },
    SetMasterSC: {
        defaultAction: KrohnkiteAction.SetMaster,
        defaultRegisterAction: null,
    },
    RaiseSurfaceCapacitySC: {
        defaultAction: KrohnkiteAction.RaiseSurfaceCapacity,
        defaultRegisterAction: KrohnkiteAction.ShowCurrentCapacity,
    },
    LowerSurfaceCapacitySC: {
        defaultAction: KrohnkiteAction.LowerSurfaceCapacity,
        defaultRegisterAction: KrohnkiteAction.ResetSurfaceCapacity,
    },
    SetTileLayoutSC: {
        defaultAction: KrohnkiteAction.SetTileLayout,
        defaultRegisterAction: null,
    },
    SetMonocleLayoutSC: {
        defaultAction: KrohnkiteAction.SetMonocleLayout,
        defaultRegisterAction: null,
    },
    SetThreeColumnLayoutSC: {
        defaultAction: KrohnkiteAction.SetThreeColumnLayout,
        defaultRegisterAction: null,
    },
    SetSpreadLayoutSC: {
        defaultAction: KrohnkiteAction.SetSpreadLayout,
        defaultRegisterAction: null,
    },
    SetStairLayoutSC: {
        defaultAction: KrohnkiteAction.SetStairLayout,
        defaultRegisterAction: null,
    },
    SetFloatingLayoutSC: {
        defaultAction: KrohnkiteAction.SetFloatingLayout,
        defaultRegisterAction: null,
    },
    SetQuarterLayoutSC: {
        defaultAction: KrohnkiteAction.SetQuarterLayout,
        defaultRegisterAction: null,
    },
    SetStackedLayoutSC: {
        defaultAction: KrohnkiteAction.SetStackedLayout,
        defaultRegisterAction: null,
    },
    SetColumnsLayoutSC: {
        defaultAction: KrohnkiteAction.SetColumnsLayout,
        defaultRegisterAction: null,
    },
    SetSpiralLayoutSC: {
        defaultAction: KrohnkiteAction.SetSpiralLayout,
        defaultRegisterAction: null,
    },
    SetBinaryTreeLayoutSC: {
        defaultAction: KrohnkiteAction.SetBinaryTreeLayout,
        defaultRegisterAction: null,
    },
    SetCascadeLayoutSC: {
        defaultAction: KrohnkiteAction.SetCascadeLayout,
        defaultRegisterAction: null,
    },
};
class ShortcutBase {
    resolve(isRegister) {
        if (isRegister && this.registerAction !== null)
            return this.registerAction;
        return this.action;
    }
}
class Shortcut extends ShortcutBase {
    constructor(entry) {
        super();
        const defaults = Shortcuts[entry.name];
        this.name = entry.name;
        this.hdl = entry.hdl;
        this.defaultAction = defaults.defaultAction;
        this.defaultRegisterAction = defaults.defaultRegisterAction;
        this.action = defaults.defaultAction;
        this.registerAction = defaults.defaultRegisterAction;
    }
}
class ShortcutSequence extends ShortcutBase {
    get state() {
        if (this._state === "inProcess" &&
            getTime() - this.timeout > this._beginTime)
            this._state = "timeIsUp";
        return this._state;
    }
    set state(s) {
        this._state = s;
    }
    constructor(shortcutConf) {
        var _a, _b;
        super();
        this.sequence = shortcutConf.shortcuts;
        this.action = (_a = shortcutConf.mainAction) !== null && _a !== void 0 ? _a : null;
        this.registerAction = (_b = shortcutConf.registerAction) !== null && _b !== void 0 ? _b : null;
        this._currentIndex = 0;
        this.timeout =
            shortcutConf.sequenceTime !== null
                ? shortcutConf.sequenceTime
                : CONFIG.shortcutSequenceTime;
        this._beginTime = getTime();
        this._state = "inProcess";
    }
    next(shortcut) {
        if (this.state !== "inProcess")
            return this.state;
        this._currentIndex++;
        this._beginTime = getTime();
        if (shortcut.name === this.sequence[this._currentIndex]) {
            if (this._currentIndex === this.sequence.length - 1) {
                this.state = "finish";
            }
            else {
                this.state = "inProcess";
            }
        }
        else {
            this.state = "failed";
        }
        return this.state;
    }
}
class KWinSurfaceStore {
    constructor(workspace) {
        this._store = {};
        this.workspace = workspace;
        this._vDesktopsIds = new Set();
        this._evictedCapacities = {};
        this._definedSurfaces = {};
        this._applyUsrDefSurfaces(CONFIG.srfDefineCfg);
        this._userSurfacesCfg = this.getSurfacesUserCfg();
        this._liveOutputNames = this._getLiveOutputNames();
    }
    checkVirtualDesktops() {
        let desktops = new Set();
        this.workspace.desktops.forEach((desktop) => {
            desktops.add(desktop.id);
        });
        let removeIds = [...this._vDesktopsIds].filter((x) => !desktops.has(x));
        for (let id of removeIds) {
            LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.surfaceChanged, "checkVirtualDesktops", `The Virtual Desktop with id:${id} was deleted.`);
            this._removeById(id, "vDesktopId");
            this._vDesktopsIds.delete(id);
        }
    }
    getSurface(output, activity, vDesktop) {
        const id = KWinSurface.generateId(output, activity, vDesktop);
        if (!(id in this._store)) {
            let surfaceCfg = this._surfaceCfg(output, activity, vDesktop);
            this._store[id] = new KWinSurface(output, activity, vDesktop, this.workspace, surfaceCfg, this);
            if (id in this._evictedCapacities) {
                this._store[id].capacity = this._evictedCapacities[id];
                delete this._evictedCapacities[id];
            }
            this._vDesktopsIds.has(vDesktop.id) ||
                this._vDesktopsIds.add(vDesktop.id);
        }
        else {
            this._store[id].output = output;
        }
        return this._store[id];
    }
    isFit(surface, label) {
        return this._surfaceMatchesLabel(surface.output.name, surface.activity, surface.vDesktop.name, label);
    }
    removeByActivity(id) {
        this._removeById(id, "activityId");
    }
    onOutputsChanged() {
        this._liveOutputNames = this._getLiveOutputNames();
        this._removeOutdatedSurfaces();
    }
    _removeOutdatedSurfaces() {
        this._getLiveOutputNames();
        const removeIds = Object.keys(this._store).filter((id) => !this._liveOutputNames.has(this._store[id].outputName));
        if (removeIds.length === 0)
            return;
        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.surfaceChanged, "removeOutdatedSurfaces", `outputs removed; dropping surfaces: ${removeIds
            .map((id) => this._store[id].toString())
            .join("#")}`);
        removeIds.forEach((id) => {
            this._evictedCapacities[id] = this._store[id].capacity;
            delete this._store[id];
        });
    }
    _getLiveOutputNames() {
        const liveNames = new Set();
        this.workspace.screens.forEach((output) => {
            if (outputIsAlive(output))
                liveNames.add(output.name);
        });
        return liveNames;
    }
    _surfaceCfg(output, activity, vDesktop) {
        for (let i = 0; i < this._userSurfacesCfg.length; i++) {
            let userCfg = this._userSurfacesCfg[i];
            if (this._surfaceMatchesLabel(output.name, activity, vDesktop.name, userCfg.userLabel))
                return userCfg.cfg;
        }
        return null;
    }
    _surfaceMatchesLabel(outputName, activity, vDesktopName, label) {
        const defined = this._definedSurfaces[label];
        if (defined === undefined)
            return false;
        if (defined.outputNames.length !== 0) {
            let foundIdx = defined.outputNames.indexOf(outputName);
            if (foundIdx === -1)
                return false;
            if (defined.outputNames.length > 1 && foundIdx !== 0) {
                for (let i = 0; i < foundIdx; i++) {
                    if (this._liveOutputNames.has(defined.outputNames[i]))
                        return false;
                }
            }
        }
        if ((defined.activityId === "" || defined.activityId === activity) &&
            (defined.virtualDesktopNames.length === 0 ||
                defined.virtualDesktopNames.indexOf(vDesktopName) !== -1))
            return true;
        return false;
    }
    _removeById(sourceId, byType) {
        let removeIds = [];
        for (let id of Object.keys(this._store)) {
            if ((byType === "vDesktopId" && this._store[id].vDesktop.id === sourceId) ||
                (byType === "activityId" && this._store[id].activity === sourceId))
                removeIds.push(id);
        }
        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.surfaceChanged, "removeById", `remove from surface store by ${byType} next surfaces: ${removeIds.map((id) => this._store[id].toString()).join("#")}`);
        removeIds.forEach((id) => {
            delete this._store[id];
        });
    }
    _applyUsrDefSurfaces(userConfig) {
        for (const line of userConfig) {
            const eqIdx = line.indexOf("=");
            if (eqIdx === -1) {
                warning(`Invalid defined surface: "${line}" — missing "=" (expected: label=Surface)`);
                continue;
            }
            const label = line.slice(0, eqIdx).trim();
            if (label.length === 0) {
                warning(`Invalid defined surface: "${line}" — label is empty`);
                continue;
            }
            const surface = line.slice(eqIdx + 1).trim();
            const parts = surface.split(":").map((p) => p.trim());
            if (parts.length > 3) {
                warning(`Invalid defined surface: "${line}" — too many colons (expected: outputs[:vDesktops[:activity]])`);
                continue;
            }
            const outputStr = parts[0];
            const outputNames = outputStr
                .split(",")
                .map((o) => o.trim())
                .filter((o) => o.length > 0);
            const virtualDesktopNames = parts.length >= 2
                ? parts[1]
                    .split(",")
                    .map((d) => d.trim())
                    .filter((d) => d.length > 0)
                : [];
            const activityId = parts.length >= 3 ? parts[2] : "";
            const entries = {
                label,
                outputNames,
                virtualDesktopNames,
                activityId,
            };
            if (this._definedSurfaces[label] !== undefined) {
                warning(`Duplicate label "${label}" — overwriting previous definition`);
            }
            this._definedSurfaces[label] = entries;
        }
    }
    getSurfacesUserCfg() {
        let userCfg = [];
        for (const line of CONFIG.srfDefaultConfig) {
            const colonIdx = line.indexOf(":");
            if (colonIdx === -1) {
                warning(`Invalid surface config: "${line}" — missing ":" (expected: label:param=value,...)`);
                continue;
            }
            const label = line.slice(0, colonIdx).trim();
            if (label.length === 0) {
                warning(`Invalid surface config: "${line}" — label is empty`);
                continue;
            }
            const paramsStr = line.slice(colonIdx + 1).trim();
            const rawCfg = paramsStr.length > 0
                ? paramsStr
                    .split(",")
                    .map((p) => p.trim())
                    .filter((p) => p.length > 0)
                : [];
            const validatedCfg = KWinSurfaceStore.validateUserCfg(rawCfg);
            const defined = this._definedSurfaces[label];
            if (defined === undefined) {
                warning(`Surface config label "${label}" not found in defined surfaces`);
                continue;
            }
            userCfg.push(new SurfaceCfg(label, validatedCfg));
        }
        return userCfg;
    }
    static validateUserCfg(rawCfg) {
        let errors = [];
        const cfgFields = ["cp", "capacity", "oc", "overcapacity"];
        const cfgPossibleValues = "cp=6,oc=false";
        let surfaceCfg = {
            capacity: 99,
            isOvercapacityCandidate: true,
        };
        rawCfg.forEach((part) => {
            let splittedPart = part.split("=").map((p) => p.trim().toLowerCase());
            if (splittedPart.length !== 2) {
                errors.push(`"${part}" have to has the one equal sign`);
                return;
            }
            const [userCfgField, userValue] = splittedPart;
            if (userCfgField.length === 0 || userValue.length === 0) {
                errors.push(`"${part}" can not have empty field or value`);
                return;
            }
            if (cfgFields.indexOf(userCfgField) < 0) {
                errors.push(`"${userCfgField}" has unknown parameter. Possible parameters: ${cfgFields.join(",")}.Possible values: ${cfgPossibleValues}`);
                return;
            }
            switch (userCfgField) {
                case "cp":
                case "capacity":
                    const value = validateNumber(userValue, 1, 99);
                    if (value instanceof Err) {
                        errors.push(`splittedPart[0]: ${value}`);
                        break;
                    }
                    surfaceCfg["capacity"] = value;
                    break;
                case "oc":
                case "overcapacity":
                    surfaceCfg["isOvercapacityCandidate"] =
                        userValue === "false" || userValue === "disable" ? false : true;
                    break;
                default:
                    errors.push(`"${part}" has unknown parameter. Possible parameters: ${cfgFields.join(",")}`);
                    return;
            }
        });
        if (errors.length > 0) {
            warning(errors.join("\n"));
        }
        return surfaceCfg;
    }
}
class KWinSurface {
    static getHash(s) {
        let hash = 0;
        if (s.length == 0)
            return `0`;
        for (let i = 0; i < s.length; i++) {
            let charCode = s.charCodeAt(i);
            hash = (hash << 5) - hash + charCode;
            hash = hash & hash;
        }
        return `${hash}`;
    }
    get isOvercapacityCandidate() {
        return this._isOvercapacityCandidate;
    }
    static generateId(output, activity, vDesktop, isLayoutId = false) {
        let path = output.name;
        if (isLayoutId) {
            if (KWINCONFIG.layoutPerActivity)
                path += "@" + activity;
            if (KWINCONFIG.layoutPerDesktop)
                path += "#" + vDesktop.id;
        }
        else {
            path += "@" + activity;
            path += "#" + vDesktop.id;
        }
        return KWinSurface.getHash(path);
    }
    get workingArea() {
        const output = this.output;
        if (outputIsAlive(output)) {
            try {
                const area = this._workspace.clientArea(0, output, this.vDesktop);
                this._lastWorkingArea = toRect(area);
                return this._lastWorkingArea;
            }
            catch (e) {
            }
        }
        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.surfaceChanged, "workingArea", `output ${this.outputName} is gone; using cached workingArea`);
        return this._lastWorkingArea !== null
            ? this._lastWorkingArea
            : new Rect(0, 0, 0, 0);
    }
    get capacity() {
        return this._capacity;
    }
    set capacity(capacity) {
        this._capacity = capacity;
    }
    get output() {
        if (!outputIsAlive(this._output)) {
            const live = findOutputByName(this._workspace, this.outputName);
            if (live !== null)
                this._output = live;
        }
        return this._output;
    }
    set output(value) {
        this._output = value;
    }
    constructor(output, activity, vDesktop, workspace, surfaceConfig, surfaceStore) {
        this.id = KWinSurface.generateId(output, activity, vDesktop);
        this.layoutId = KWinSurface.generateId(output, activity, vDesktop, true);
        this.ignore =
            KWINCONFIG.ignoreActivity.indexOf(activity) >= 0 ||
                KWINCONFIG.ignoreScreen.indexOf(output.name) >= 0 ||
                KWINCONFIG.ignoreVDesktop.indexOf(vDesktop.name) >= 0;
        this.outputName = output.name;
        this._output = output;
        this.activity = activity;
        this.vDesktop = vDesktop;
        this._workspace = workspace;
        this._surfaceStore = surfaceStore;
        this._capacity =
            typeof (surfaceConfig === null || surfaceConfig === void 0 ? void 0 : surfaceConfig.capacity) === "number"
                ? surfaceConfig.capacity
                : null;
        this._isOvercapacityCandidate =
            typeof (surfaceConfig === null || surfaceConfig === void 0 ? void 0 : surfaceConfig.isOvercapacityCandidate) === "boolean"
                ? surfaceConfig.isOvercapacityCandidate
                : true;
        this._lastWorkingArea = null;
    }
    isFit(label) {
        return this._surfaceStore.isFit(this, label);
    }
    getParams() {
        return [this.outputName, this.activity, this.vDesktop.name];
    }
    next() {
        return null;
    }
    toString() {
        return ("KWinSurface(" +
            [this.outputName, this.activity, this.vDesktop.name].join(", ") +
            ")");
    }
}
function parseShortcutConf(lines) {
    const result = [];
    const shortcutNames = {};
    for (const name of Object.keys(Shortcuts)) {
        shortcutNames[name.toLowerCase()] = name;
    }
    const actionNames = {};
    for (const key of Object.keys(KrohnkiteAction)) {
        const action = KrohnkiteAction[key];
        actionNames[action.toLowerCase()] = action;
    }
    const parseAction = (rawVal) => {
        if (rawVal.toLowerCase() === "null")
            return null;
        return actionNames[rawVal.toLowerCase()];
    };
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed)
            continue;
        if (trimmed.startsWith("#"))
            continue;
        const parts = trimmed.split(":");
        if (parts.length !== 2) {
            warning(`parseShortcutConf: invalid format in "${trimmed}"`);
            continue;
        }
        const shortcutStrs = separate(parts[0], ",");
        if (shortcutStrs.length === 0) {
            warning(`parseShortcutConf: empty shortcut list in "${trimmed}"`);
            continue;
        }
        const shortcuts = [];
        let valid = true;
        for (const s of shortcutStrs) {
            const name = shortcutNames[s.toLowerCase()];
            if (name === undefined) {
                warning(`parseShortcutConf: unknown shortcut "${s}" in "${trimmed}"`);
                valid = false;
                break;
            }
            shortcuts.push(name);
        }
        if (!valid)
            continue;
        let mainAction = undefined;
        let registerAction = undefined;
        let sequenceTime = null;
        const flags = separate(parts[1], ",");
        for (const flag of flags) {
            const eqIdx = flag.indexOf("=");
            if (eqIdx < 0) {
                warning(`parseShortcutConf: invalid flag "${flag}" in "${trimmed}"`);
                valid = false;
                break;
            }
            const key = flag.slice(0, eqIdx).trim().toLowerCase();
            const rawVal = flag.slice(eqIdx + 1).trim();
            switch (key) {
                case "mainaction":
                case "ma": {
                    const action = parseAction(rawVal);
                    if (action === undefined) {
                        warning(`parseShortcutConf: unknown action "${rawVal}" in "${trimmed}"`);
                        valid = false;
                        break;
                    }
                    mainAction = action;
                    break;
                }
                case "registeraction":
                case "ra": {
                    const action = parseAction(rawVal);
                    if (action === undefined) {
                        warning(`parseShortcutConf: unknown action "${rawVal}" in "${trimmed}"`);
                        valid = false;
                        break;
                    }
                    registerAction = action;
                    break;
                }
                case "sequencetime":
                case "st": {
                    const t = validateNumber(rawVal, 0, 9999);
                    if (t instanceof Err) {
                        warning(`parseShortcutConf: invalid sequence time "${rawVal}" in "${trimmed}"`);
                        valid = false;
                        break;
                    }
                    sequenceTime = t;
                    break;
                }
                default:
                    warning(`parseShortcutConf: unknown flag "${flag}" in "${trimmed}"`);
                    valid = false;
                    break;
            }
            if (!valid)
                break;
        }
        if (!valid)
            continue;
        if (mainAction === undefined && registerAction === undefined) {
            warning(`parseShortcutConf: no action flag (mainaction/registeraction) in "${trimmed}"`);
            continue;
        }
        result.push({ shortcuts, mainAction, registerAction, sequenceTime });
    }
    return result;
}
function parseFloatConfig(lines) {
    const result = [];
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed)
            continue;
        if (trimmed.startsWith("#"))
            continue;
        const parts = trimmed.split(":");
        const classList = parts[0].trim();
        if (classList) {
            const rawParts = classList.split(",");
            const classes = rawParts.map((c) => c.trim()).filter((c) => c !== "");
            if (classes.length < rawParts.length) {
                warning(`parseFloatConfig: empty class name in list "${classList}"`);
                continue;
            }
        }
        let title = "";
        let paramsStr = "";
        if (parts.length === 2) {
            paramsStr = parts[1];
        }
        else if (parts.length === 3) {
            title = parts[1];
            paramsStr = parts[2];
        }
        else if (parts.length > 3) {
            warning(`parseFloatConfig: invalid format in "${trimmed}"`);
            continue;
        }
        const entry = {
            class: classList,
            title,
            shouldFloat: true,
            auto: false,
            width: null,
            height: null,
            leftIndent: null,
            topIndent: null,
            stepWidth: null,
            stepHeight: null,
        };
        if (paramsStr) {
            const params = separate(paramsStr, ",");
            for (const param of params) {
                const eqIdx = param.indexOf("=");
                const key = eqIdx >= 0
                    ? param.slice(0, eqIdx).trim().toLowerCase()
                    : param.trim().toLowerCase();
                const rawVal = eqIdx >= 0
                    ? param
                        .slice(eqIdx + 1)
                        .trim()
                        .toLowerCase()
                    : "";
                switch (key) {
                    case "shouldfloat":
                    case "f":
                        entry.shouldFloat = rawVal === "true" || rawVal === "1";
                        break;
                    case "auto":
                    case "a":
                        entry.auto = rawVal === "true" || rawVal === "1";
                        break;
                    case "width":
                    case "w": {
                        const w = parseNumber(rawVal, false);
                        if (w instanceof Err) {
                            warning(`parseFloatConfig: invalid width "${rawVal}"`);
                        }
                        else {
                            const vw = validateNumber(w, 1, 100);
                            if (vw instanceof Err) {
                                warning(`parseFloatConfig: width out of range: ${rawVal}`);
                            }
                            else {
                                entry.width = vw;
                            }
                        }
                        break;
                    }
                    case "height":
                    case "h": {
                        const h = parseNumber(rawVal, false);
                        if (h instanceof Err) {
                            warning(`parseFloatConfig: invalid height "${rawVal}"`);
                        }
                        else {
                            const vh = validateNumber(h, 1, 100);
                            if (vh instanceof Err) {
                                warning(`parseFloatConfig: height out of range: ${rawVal}`);
                            }
                            else {
                                entry.height = vh;
                            }
                        }
                        break;
                    }
                    case "leftindent":
                    case "li":
                    case "left": {
                        let unit = "px";
                        let numStr = rawVal;
                        if (rawVal.endsWith("%")) {
                            unit = "%";
                            numStr = rawVal.slice(0, -1);
                        }
                        else if (rawVal.endsWith("px")) {
                            numStr = rawVal.slice(0, -2);
                        }
                        const l = parseNumber(numStr, true);
                        if (l instanceof Err) {
                            warning(`parseFloatConfig: invalid left indent "${rawVal}"`);
                        }
                        else {
                            entry.leftIndent = { value: l, unit };
                        }
                        break;
                    }
                    case "topindent":
                    case "ti":
                    case "top": {
                        let unit = "px";
                        let numStr = rawVal;
                        if (rawVal.endsWith("%")) {
                            unit = "%";
                            numStr = rawVal.slice(0, -1);
                        }
                        else if (rawVal.endsWith("px")) {
                            numStr = rawVal.slice(0, -2);
                        }
                        const t = parseNumber(numStr, true);
                        if (t instanceof Err) {
                            warning(`parseFloatConfig: invalid top indent "${rawVal}"`);
                        }
                        else {
                            entry.topIndent = { value: t, unit };
                        }
                        break;
                    }
                    case "stepwidth":
                    case "sw": {
                        const sw = parseNumber(rawVal, false);
                        if (sw instanceof Err) {
                            warning(`parseFloatConfig: invalid step width "${rawVal}"`);
                        }
                        else {
                            const vsw = validateNumber(sw, 0, 100);
                            if (vsw instanceof Err) {
                                warning(`parseFloatConfig: step width out of range: ${rawVal}`);
                            }
                            else {
                                entry.stepWidth = vsw;
                            }
                        }
                        break;
                    }
                    case "stepheight":
                    case "sh": {
                        const sh = parseNumber(rawVal, false);
                        if (sh instanceof Err) {
                            warning(`parseFloatConfig: invalid step height "${rawVal}"`);
                        }
                        else {
                            const vsh = validateNumber(sh, 0, 100);
                            if (vsh instanceof Err) {
                                warning(`parseFloatConfig: step height out of range: ${rawVal}`);
                            }
                            else {
                                entry.stepHeight = vsh;
                            }
                        }
                        break;
                    }
                    default:
                        warning(`parseFloatConfig: unknown param "${key}"`);
                }
            }
        }
        result.push(entry);
    }
    return result;
}
class DriverWindow {
    static generateID(w) {
        return w.internalId.toString();
    }
    get isActive() {
        return this.window.active;
    }
    get fullScreen() {
        return this.window.fullScreen;
    }
    get floatGeometry() {
        if (this._floatGeometry === null) {
            this._floatGeometry = this._getInitFloatGeometry();
        }
        return this._floatGeometry;
    }
    set floatGeometry(value) {
        this._floatGeometry = value;
    }
    get geometry() {
        return toRect(this.window.frameGeometry);
    }
    get windowClassName() {
        return this.window.resourceClass;
    }
    get windowCaption() {
        return this.window.caption;
    }
    get stackingOrder() {
        return this.window.stackingOrder;
    }
    get shouldIgnore() {
        if (this.window.deleted)
            return true;
        return (this.window.specialWindow ||
            this.window.resourceClass === "plasmashell" ||
            this.isIgnoredByConfig);
    }
    get shouldFloat() {
        return (this.floatConfig.shouldFloat ||
            (CONFIG.floatSkipPager && this.window.skipPager) ||
            this.window.modal ||
            this.window.transient ||
            !this.window.resizeable ||
            (KWINCONFIG.floatUtility &&
                (this.window.dialog || this.window.splash || this.window.utility)));
    }
    get minimized() {
        return this.window.minimized;
    }
    get nativeFloatGeometry() {
        return this._nativeFloatGeometry;
    }
    get surface() {
        let activity;
        let vDesktop;
        if (this.window.activities.length === 0)
            activity = this.workspace.currentActivity;
        else if (this.window.activities.indexOf(this.workspace.currentActivity) >= 0)
            activity = this.workspace.currentActivity;
        else
            activity = this.window.activities[0];
        if (this.window.desktops.length === 1) {
            vDesktop = this.window.desktops[0];
        }
        else if (this.window.desktops.length === 0) {
            vDesktop = this.workspace.currentDesktop;
        }
        else {
            if (this.window.desktops.indexOf(this.workspace.currentDesktop) >= 0)
                vDesktop = this.workspace.currentDesktop;
            else
                vDesktop = this.window.desktops[0];
        }
        return this._surfaceStore.getSurface(this.resolvedOutput, activity, vDesktop);
    }
    get resolvedOutput() {
        return resolveWindowOutput(this.workspace, this.window);
    }
    set surface(srf) {
        const ksrf = srf;
        if (this.window.desktops[0] !== ksrf.vDesktop)
            this.window.desktops = [ksrf.vDesktop];
        if (this.window.activities[0] !== ksrf.activity)
            this.window.activities = [ksrf.activity];
    }
    get minSize() {
        return {
            width: this.window.minSize.width,
            height: this.window.minSize.height,
        };
    }
    get maxSize() {
        return {
            width: this.window.maxSize.width,
            height: this.window.maxSize.height,
        };
    }
    get srfTime() {
        if (this._srfTime.time === null)
            this._srfTime.time = getTime();
        return this._srfTime.time;
    }
    constructor(window, workspace, surfaceStore) {
        this.workspace = workspace;
        this._surfaceStore = surfaceStore;
        this._srfTime = { time: null, srfId: null };
        this.window = window;
        this.isCommittedEver = false;
        this._nativeFloatGeometry = toRect(window.frameGeometry);
        this._floatGeometry = null;
        this.id = DriverWindow.generateID(window);
        this.maximized = false;
        this.noBorderManaged = false;
        this.noBorderOriginal = window.noBorder;
        this.layerManaged = false;
        this.keepAboveOriginal = window.keepAbove;
        this.keepBelowOriginal = window.keepBelow;
        this.minimizedManaged = false;
        this.minimizedOriginal = window.minimized;
        this.floatConfig = this._getFloatConfig(window);
        this.isIgnoredByConfig =
            DriverWindow.isContain(KWINCONFIG.ignoreClass, window.resourceClass) ||
                DriverWindow.isContain(KWINCONFIG.ignoreClass, window.resourceName) ||
                matchWords(this.window.caption, KWINCONFIG.ignoreTitle) >= 0 ||
                DriverWindow.isContain(KWINCONFIG.ignoreRole, window.windowRole) ||
                (KWINCONFIG.tileNothing &&
                    !DriverWindow.isContain(KWINCONFIG.tilingClass, window.resourceClass));
    }
    isAlive() {
        try {
            return !!this.window && this.window.deleted === false;
        }
        catch (_) {
            return false;
        }
    }
    commit(ctx, geometry, noBorder, windowLayer) {
        if (!this.window || this.window.deleted)
            return;
        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.window, "KwinWindow#commit", `geometry:${geometry}, noBorder:${noBorder}, windowLayer:${windowLayer}`);
        if (this.window.resize)
            return;
        if (noBorder !== undefined) {
            if (!this.noBorderManaged && noBorder)
                this.noBorderOriginal = this.window.noBorder;
            else if (this.noBorderManaged && !this.window.noBorder)
                this.noBorderOriginal = false;
            if (noBorder)
                this.window.noBorder = true;
            else if (this.noBorderManaged)
                this.window.noBorder = this.noBorderOriginal;
            this.noBorderManaged = noBorder;
        }
        if (windowLayer !== undefined) {
            this.layerManaged = true;
            if (windowLayer === 2)
                this.window.keepAbove = true;
            else if (windowLayer === 0)
                this.window.keepBelow = true;
            else if (windowLayer === 1) {
                this.window.keepAbove = false;
                this.window.keepBelow = false;
            }
        }
        if (geometry !== undefined) {
            geometry = this.adjustGeometry(geometry);
            if (KWINCONFIG.preventProtrusion) {
                const winOutput = this.resolvedOutput;
                const area = toRect(this.workspace.clientArea(0, winOutput, this.workspace.currentDesktop));
                if (geometry.x < area.x &&
                    ctx.getNeighborOutput("left", winOutput) === null) {
                    geometry.x = area.x;
                }
                if (geometry.y < area.y &&
                    ctx.getNeighborOutput("up", winOutput) === null) {
                    geometry.y = area.y;
                }
                if (geometry.maxX > area.maxX &&
                    ctx.getNeighborOutput("right", winOutput) === null) {
                    if (geometry.width > area.width) {
                        geometry.x = area.x;
                        geometry.width = area.width;
                    }
                    else {
                        geometry.x = area.maxX - geometry.width;
                    }
                }
                if (geometry.maxY > area.maxY &&
                    ctx.getNeighborOutput("down", winOutput) === null) {
                    if (geometry.height > area.height) {
                        geometry.y = area.y;
                        geometry.height = area.height;
                    }
                    else {
                        geometry.y = area.maxY - geometry.height;
                    }
                }
                geometry = this.adjustGeometry(geometry);
            }
            if (this.window.deleted)
                return;
            const nextFrame = toQRect(geometry);
            const currentFrame = this.window.frameGeometry;
            if (nextFrame.width !== currentFrame.width ||
                nextFrame.height !== currentFrame.height)
                ctx.onWindowSizeCommitted(this.window);
            this.window.frameGeometry = nextFrame;
        }
    }
    toString() {
        return `${debugWin(this.window)}`;
    }
    setMinimizedByScript(minimized) {
        if (this.window.deleted)
            return;
        if (!this.minimizedManaged) {
            this.minimizedOriginal = this.window.minimized;
            this.minimizedManaged = true;
        }
        this.window.minimized = minimized;
    }
    dispose() {
        if (!this.window || this.window.deleted)
            return;
        try {
            if (this.noBorderManaged)
                this.window.noBorder = this.noBorderOriginal;
            if (this.layerManaged) {
                this.window.keepAbove = this.keepAboveOriginal;
                this.window.keepBelow = this.keepBelowOriginal;
            }
            if (this.minimizedManaged)
                this.window.minimized = this.minimizedOriginal;
        }
        catch (_) {
        }
        this.noBorderManaged = false;
        this.layerManaged = false;
        this.minimizedManaged = false;
    }
    visible(srf) {
        const ksrf = srf;
        return (!this.window.deleted &&
            !this.window.minimized &&
            (this.window.onAllDesktops ||
                this.window.desktops.indexOf(ksrf.vDesktop) !== -1) &&
            (this.window.activities.length === 0 ||
                this.window.activities.indexOf(ksrf.activity) !== -1) &&
            this.resolvedOutput === ksrf.output);
    }
    updateSrfTime(srfId) {
        if (srfId !== this._srfTime.srfId) {
            this._srfTime.srfId = srfId;
            this._srfTime.time = getTime();
        }
    }
    _getFloatConfig(window) {
        var _a, _b, _c, _d, _e, _f;
        const configs = CONFIG.floatConfig.config;
        const defaults = {
            shouldFloat: false,
            auto: CONFIG.floatAsDefault,
            width: this._nativeFloatGeometry.width,
            height: this._nativeFloatGeometry.height,
            leftIndent: { value: this._nativeFloatGeometry.x, unit: "px" },
            topIndent: { value: this._nativeFloatGeometry.y, unit: "px" },
            stepWidth: CONFIG.floatConfig.sizeStepWidth,
            stepHeight: CONFIG.floatConfig.sizeStepHeight,
        };
        if (!configs || configs.length === 0)
            return defaults;
        for (const cfg of configs) {
            if (cfg.class) {
                const classes = cfg.class
                    .split(",")
                    .map((c) => c.trim())
                    .filter((c) => c !== "");
                if (classes.length > 0) {
                    if (!DriverWindow.isContain(classes, window.resourceClass) &&
                        !DriverWindow.isContain(classes, window.resourceName))
                        continue;
                }
            }
            if (cfg.title) {
                if (!DriverWindow.isContain([cfg.title], window.caption))
                    continue;
            }
            return {
                shouldFloat: cfg.shouldFloat,
                auto: cfg.auto,
                width: (_a = cfg.width) !== null && _a !== void 0 ? _a : this._nativeFloatGeometry.width,
                height: (_b = cfg.height) !== null && _b !== void 0 ? _b : this._nativeFloatGeometry.height,
                leftIndent: (_c = cfg.leftIndent) !== null && _c !== void 0 ? _c : {
                    value: this._nativeFloatGeometry.x,
                    unit: "px",
                },
                topIndent: (_d = cfg.topIndent) !== null && _d !== void 0 ? _d : {
                    value: this._nativeFloatGeometry.y,
                    unit: "px",
                },
                stepWidth: (_e = cfg.stepWidth) !== null && _e !== void 0 ? _e : CONFIG.floatConfig.sizeStepWidth,
                stepHeight: (_f = cfg.stepHeight) !== null && _f !== void 0 ? _f : CONFIG.floatConfig.sizeStepHeight,
            };
        }
        return defaults;
    }
    static isContain(filterList, s) {
        for (let filterWord of filterList) {
            if (filterWord.startsWith("[") &&
                filterWord[filterWord.length - 1] === "]") {
                if (s
                    .toLowerCase()
                    .includes(filterWord.toLowerCase().slice(1, filterWord.length - 1)))
                    return true;
            }
            else if (s.toLowerCase() === filterWord.toLowerCase())
                return true;
        }
        return false;
    }
    adjustGeometry(geometry) {
        let width = geometry.width;
        let height = geometry.height;
        if (!this.window.resizeable) {
            width = this.window.width;
            height = this.window.height;
        }
        else {
            width = clip(width, this.window.minSize.width, this.window.maxSize.width);
            height = clip(height, this.window.minSize.height, this.window.maxSize.height);
        }
        return new Rect(geometry.x, geometry.y, width, height);
    }
    _getInitFloatGeometry() {
        var _a, _b, _c, _d;
        let outputGeometry = this.resolvedOutput.geometry;
        if (CONFIG.floatConfig === null) {
            return toRect(outputGeometry);
        }
        const cfg = this.floatConfig;
        const nativeW = this._nativeFloatGeometry.width;
        const nativeH = this._nativeFloatGeometry.height;
        const nativeX = this._nativeFloatGeometry.x;
        const nativeY = this._nativeFloatGeometry.y;
        const cfgWidth = (_a = cfg.width) !== null && _a !== void 0 ? _a : nativeW;
        const cfgHeight = (_b = cfg.height) !== null && _b !== void 0 ? _b : nativeH;
        const defaultLeft = { value: nativeX, unit: "px" };
        const defaultTop = { value: nativeY, unit: "px" };
        const cfgLeft = (_c = cfg.leftIndent) !== null && _c !== void 0 ? _c : defaultLeft;
        const cfgTop = (_d = cfg.topIndent) !== null && _d !== void 0 ? _d : defaultTop;
        const hasCustomWidth = cfg.width !== null && cfg.width !== nativeW;
        const hasCustomHeight = cfg.height !== null && cfg.height !== nativeH;
        const hasCustomLeft = cfg.leftIndent !== null &&
            (cfg.leftIndent.value !== nativeX || cfg.leftIndent.unit !== "px");
        const hasCustomTop = cfg.topIndent !== null &&
            (cfg.topIndent.value !== nativeY || cfg.topIndent.unit !== "px");
        let width = hasCustomWidth
            ? cfgWidth
            : CONFIG.floatConfig.isNativeSizeOverride
                ? outputGeometry.width * (CONFIG.floatConfig.floatWidth / 100)
                : nativeW;
        let height = hasCustomHeight
            ? cfgHeight
            : CONFIG.floatConfig.isNativeSizeOverride
                ? outputGeometry.height * (CONFIG.floatConfig.floatHeight / 100)
                : nativeH;
        let x;
        let y;
        if (hasCustomLeft) {
            if (cfgLeft.unit === "%") {
                x = outputGeometry.x + outputGeometry.width * (cfgLeft.value / 100);
            }
            else {
                x = cfgLeft.value;
            }
        }
        else if (hasCustomWidth) {
            x = outputGeometry.x + outputGeometry.width / 2 - width / 2;
        }
        else {
            x = outputGeometry.x + outputGeometry.width / 2 - width / 2;
        }
        if (hasCustomTop) {
            if (cfgTop.unit === "%") {
                y = outputGeometry.y + outputGeometry.height * (cfgTop.value / 100);
            }
            else {
                y = cfgTop.value;
            }
        }
        else if (hasCustomHeight) {
            y = outputGeometry.y + outputGeometry.height / 2 - height / 2;
        }
        else {
            y = outputGeometry.y + outputGeometry.height / 2 - height / 2;
        }
        if (!this.window.resizeable) {
            if (this.window.maxSize.width < width) {
                x = x + (width - this.window.maxSize.width) / 2;
                width = this.window.maxSize.width;
            }
            if (this.window.maxSize.height < height) {
                y = y + (height - this.window.maxSize.height) / 2;
                height = this.window.maxSize.height;
            }
        }
        else {
            if (this.window.minSize.width > outputGeometry.width) {
                width = this.window.minSize.width;
                x = outputGeometry.x;
            }
            if (this.window.minSize.height > outputGeometry.height) {
                height = this.window.minSize.height;
                y = outputGeometry.y;
            }
            if (CONFIG.floatConfig.randomize) {
                x =
                    x +
                        getRandomInt((x - outputGeometry.x) * (CONFIG.floatConfig.randomWidth / 100), true);
                y =
                    y +
                        getRandomInt((y - outputGeometry.y) * (CONFIG.floatConfig.randomHeight / 100), true);
            }
        }
        return new Rect(x, y, width, height);
    }
}
const LayoutShortcutIds = {
    ["SetTileLayout"]: "TileLayout",
    ["SetMonocleLayout"]: "MonocleLayout",
    ["SetThreeColumnLayout"]: "ThreeColumnLayout",
    ["SetSpreadLayout"]: "SpreadLayout",
    ["SetStairLayout"]: "StairLayout",
    ["SetFloatingLayout"]: "FloatingLayout",
    ["SetQuarterLayout"]: "QuarterLayout",
    ["SetStackedLayout"]: "StackedLayout",
    ["SetColumnsLayout"]: "ColumnsLayout",
    ["SetSpiralLayout"]: "SpiralLayout",
    ["SetBinaryTreeLayout"]: "BinaryTreeLayout",
    ["SetCascadeLayout"]: "CascadeLayout",
};
class TilingController {
    constructor(engine) {
        this.engine = engine;
        this.dragAction = null;
    }
    onSurfaceUpdate(ctx, reason, extraSurfaces) {
        this.engine.arrange(ctx, reason, getMethodName(), extraSurfaces);
    }
    onCurrentActivityChanged(ctx, reason) {
        this.engine.arrange(ctx, reason, getMethodName());
    }
    onStackingOrderChanged(ctx, window, reason) {
        const layout = this.engine.layouts.getCurrentLayout(window.surface);
        if (layout instanceof SpreadLayout) {
            this.engine.arrange(ctx, reason, getMethodName());
        }
    }
    onWindowAdded(ctx, window, reason) {
        this.engine.manage(window);
        if (window.isTileable) {
            const srf = ctx.currentSurface;
            const tiles = this.engine.windows.getVisibleTiles(srf);
        }
        if (window.state !== WindowState.NativeMaximized &&
            window.state !== WindowState.NativeFullscreen)
            this.engine.arrange(ctx, reason, getMethodName());
    }
    onWindowSkipPagerChanged(ctx, window, skipPager, reason) {
        if (skipPager)
            window.state = WindowState.Floating;
        else
            window.state = WindowState.Undecided;
        this.engine.arrange(ctx, reason, getMethodName());
    }
    onWindowRemoved(ctx, window, reason) {
        if (this.dragAction !== null && this.dragAction.window === window)
            this.finishDrag(ctx);
        this.engine.unmanage(window);
        this.engine.arrange(ctx, reason, getMethodName());
    }
    onWindowMoveStart(window) {
    }
    onWindowMove(window) {
    }
    onWindowDragging(ctx, window, windowRect, reason) {
        if (!(window.isTiled || window.isDocked))
            return;
        const srf = window.surface;
        const workingArea = srf.workingArea.clone();
        const draggingRect = toRect(windowRect);
        const mousePointer = ctx.cursorPosition || draggingRect.activationPoint;
        const middlePointer = {
            x: draggingRect.center.x,
            y: mousePointer.y,
        };
        const getNeighbors = (srf) => ({
            left: ctx.getNeighborOutput("left", srf.output) !== null,
            right: ctx.getNeighborOutput("right", srf.output) !== null,
            up: ctx.getNeighborOutput("up", srf.output) !== null,
            down: ctx.getNeighborOutput("down", srf.output) !== null,
        });
        const markActionTime = () => {
            if (this.dragAction === null)
                return;
            this.dragAction.actionTime = getTime();
        };
        const getDragAction = () => {
            window.isDragging = true;
            const initialState = window.state;
            return {
                result: { isProcessed: false, isArrangeNeeded: false },
                actionTime: getTime(),
                srf,
                initialSrfId: srf.id,
                workingArea,
                tilesArea: null,
                window,
                dockTarget: null,
                mousePointer,
                middlePointer,
                neighbors: getNeighbors(srf),
                neighborsSrfId: srf.id,
                dockSnapshots: {},
                initialState,
                isLayoutHasDragStep: false,
            };
        };
        if (this.dragAction === null) {
            window.window.commit(ctx, new Rect(window.actualGeometry.x, window.actualGeometry.y, Math.max(window.minSize.width, workingArea.width * 0.25), Math.max(window.minSize.height, workingArea.height * 0.25)));
            this.dragAction = getDragAction();
        }
        else {
            if (window === this.dragAction.window) {
                this.dragAction.actionTime = getTime();
                this.dragAction.mousePointer = mousePointer;
                this.dragAction.middlePointer = middlePointer;
                this.dragAction.srf = srf;
                this.dragAction.workingArea = workingArea;
            }
            else {
                this.finishDrag(ctx);
                this.dragAction = getDragAction();
            }
        }
        this.dragAction.result = { isProcessed: false, isArrangeNeeded: false };
        this.dragAction.dockTarget = null;
        if (this.dragAction.neighborsSrfId !== srf.id) {
            this.dragAction.neighbors = getNeighbors(srf);
            this.dragAction.neighborsSrfId = srf.id;
        }
        this.engine.docks.drag(this.dragAction);
        if (this.dragAction.result.isProcessed) {
            if (this.dragAction.result.isArrangeNeeded)
                this.engine.arrange(ctx, reason, getMethodName());
            this.updateDragPreview(ctx);
            return markActionTime();
        }
        const layout = this.engine.layouts.getCurrentLayout(srf);
        if (!layout.drag) {
            this.updateDragPreview(ctx);
            return markActionTime();
        }
        this.dragAction.isLayoutHasDragStep = true;
        layout.drag(new EngineContext(ctx, this.engine), this.dragAction);
        if (this.dragAction.result.isArrangeNeeded)
            this.engine.arrange(ctx, reason, getMethodName());
        this.updateDragPreview(ctx);
        return markActionTime();
    }
    updateDragPreview(ctx) {
        const dragAction = this.dragAction;
        if (dragAction === null ||
            dragAction.dockTarget === null ||
            dragAction.window.state !== WindowState.Docked) {
            ctx.hideDragPreview();
            return;
        }
        ctx.showDragPreview(toRect(dragAction.srf.output.geometry), dragAction.window.geometry);
    }
    onWindowMoveOver(ctx, window, reason) {
        window.isDragging = false;
        if (this.dragAction !== null && this.dragAction.window === window) {
            const isLayoutHasDragStep = this.dragAction.isLayoutHasDragStep;
            this.finishDrag(ctx);
            if (isLayoutHasDragStep) {
                this.engine.arrange(ctx, reason, `${getMethodName()}:windowState=${window.state}`);
                return;
            }
        }
        if (window.state === WindowState.Tiled) {
            const tiles = this.engine.windows.getVisibleTiles(ctx.currentSurface);
            const cursorPos = ctx.cursorPosition || window.actualGeometry.center;
            const targets = tiles.filter((tile) => tile !== window && tile.actualGeometry.includesPoint(cursorPos));
            if (targets.length === 1) {
                this.engine.windows.swap(window, targets[0]);
                this.engine.arrange(ctx, reason, `${getMethodName()}:windowState=${window.state}`);
                return;
            }
        }
        if (!CONFIG.keepTilingOnDrag && window.state === WindowState.Tiled) {
            const diff = window.actualGeometry.subtract(window.geometry);
            const distance = Math.sqrt(Math.pow(diff.x, 2) + Math.pow(diff.y, 2));
            if (distance > 30) {
                window.floatGeometry = window.actualGeometry;
                window.state = WindowState.Floating;
                this.engine.arrange(ctx, reason, `${getMethodName()}:windowState=${window.state}:keepTilingOnDrag=${CONFIG.keepTilingOnDrag}`);
                return;
            }
        }
        window.commit(ctx);
    }
    finishDrag(ctx) {
        const dragAction = this.dragAction;
        if (dragAction === null)
            return;
        ctx.hideDragPreview();
        const { window, initialState } = dragAction;
        this.engine.docks.finishDrag(dragAction);
        this.dragAction = null;
        if (window.isAlive()) {
            window.isDragging = false;
            if (window.state !== initialState)
                window.previousState = initialState;
        }
    }
    onWindowResizeStart(window) {
    }
    onWindowResize(ctx, window, reason) {
        if (CONFIG.adjustLayout &&
            CONFIG.adjustLayoutLive &&
            window.state === WindowState.Tiled) {
            this.engine.adjustLayout(window);
            this.engine.arrange(ctx, reason, `${getMethodName()}:windowState=${window.state}`);
        }
        else if (window.state === WindowState.Docked) {
            this.engine.adjustDock(window);
            this.engine.arrange(ctx, reason, `${getMethodName()}:windowState=${window.state}`);
        }
    }
    onWindowResizeOver(ctx, window, reason) {
        if (CONFIG.adjustLayout && window.isTiled) {
            this.engine.adjustLayout(window);
            this.engine.arrange(ctx, reason, `${getMethodName()}:windowState=${window.state}`);
        }
        else if (window.state === WindowState.Docked) {
            this.engine.adjustDock(window);
            this.engine.arrange(ctx, reason, `${getMethodName()}:windowState=${window.state}`);
        }
        else if (!CONFIG.adjustLayout)
            this.engine.enforceSize(ctx, window);
    }
    onWindowMaximizeChanged(ctx, window, reason) {
        this.engine.arrange(ctx, reason, getMethodName());
    }
    onWindowGeometryChanged(ctx, window) {
        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.bufferGeometryChanged, "enforceSize", `Window: id:${window.id} actualGeometry: ${window.actualGeometry}, commitGeometry:${window.geometry}`, { winClass: [`${window.window.window.resourceClass}`] });
        this.engine.enforceSize(ctx, window);
    }
    onWindowChanged(ctx, window, reason, comment, extraSurfaces) {
        if (window) {
            const workingArea = window.surface.workingArea;
            if (window.floatGeometry.width > workingArea.width) {
                window.floatGeometry.width = workingArea.width;
            }
            if (window.floatGeometry.height > workingArea.height) {
                window.floatGeometry.height = workingArea.height;
            }
            window.floatGeometry.x =
                workingArea.x + (workingArea.width - window.floatGeometry.width) / 2;
            window.floatGeometry.y =
                workingArea.y + (workingArea.height - window.floatGeometry.height) / 2;
            this.engine.arrange(ctx, reason, `${getMethodName()}:windowState=${window.state}`, extraSurfaces);
        }
    }
    onWindowFocused(ctx, window) {
        window.focusTime = getTime();
    }
    onDesktopsChanged(ctx, window) {
        if (window.state !== WindowState.Docked)
            window.state = WindowState.Undecided;
    }
    onShortcut(ctx, action, reason) {
        if (action === null)
            return;
        if (ctx.handleLayoutChooserShortcut(action))
            return;
        let isArrangeNeeded = true;
        let currentCapacity;
        const window = ctx.currentWindow;
        if (this.engine.handleDockWinShortcut(ctx, window, action, reason) ||
            this.engine.handleFloatWinShortcut(ctx, window, action) ||
            this.engine.handleLayoutShortcut(ctx, action, reason) ||
            this.engine.handleTiledWinShortcut(ctx, window, action, reason)) {
            if (window)
                ctx.requestPointerOnFocus("window", true);
            return;
        }
        switch (action) {
            case KrohnkiteAction.AlterRegister:
            case KrohnkiteAction.ToggleRegister:
                ctx.alterRegisterHdl(action);
                isArrangeNeeded = false;
                break;
            case KrohnkiteAction.FocusNext:
                this.engine.focusOrder(ctx, +1);
                isArrangeNeeded = false;
                break;
            case KrohnkiteAction.FocusPrev:
                this.engine.focusOrder(ctx, -1);
                isArrangeNeeded = false;
                break;
            case KrohnkiteAction.FocusUp:
                isArrangeNeeded = this.engine.focusDir(ctx, "up");
                break;
            case KrohnkiteAction.FocusDown:
                isArrangeNeeded = this.engine.focusDir(ctx, "down");
                break;
            case KrohnkiteAction.DWMLeft:
            case KrohnkiteAction.FocusLeft:
                isArrangeNeeded = this.engine.focusDir(ctx, "left");
                break;
            case KrohnkiteAction.DWMRight:
            case KrohnkiteAction.FocusRight:
                isArrangeNeeded = this.engine.focusDir(ctx, "right");
                break;
            case KrohnkiteAction.SetMaster:
                if (window)
                    this.engine.setMaster(ctx, window);
                break;
            case KrohnkiteAction.ToggleFloat:
                if (window)
                    this.engine.toggleFloat(window);
                break;
            case KrohnkiteAction.ToggleFloatAll:
                this.engine.floatAll(ctx, ctx.currentSurface);
                break;
            case KrohnkiteAction.NextLayout:
                this.engine.cycleLayout(ctx, 1);
                break;
            case KrohnkiteAction.PreviousLayout:
                this.engine.cycleLayout(ctx, -1);
                break;
            case KrohnkiteAction.LayoutChooser:
                ctx.showLayoutChooser();
                isArrangeNeeded = false;
                break;
            case KrohnkiteAction.SetTileLayout:
            case KrohnkiteAction.SetMonocleLayout:
            case KrohnkiteAction.SetThreeColumnLayout:
            case KrohnkiteAction.SetSpreadLayout:
            case KrohnkiteAction.SetStairLayout:
            case KrohnkiteAction.SetFloatingLayout:
            case KrohnkiteAction.SetQuarterLayout:
            case KrohnkiteAction.SetStackedLayout:
            case KrohnkiteAction.SetColumnsLayout:
            case KrohnkiteAction.SetSpiralLayout:
            case KrohnkiteAction.SetBinaryTreeLayout:
            case KrohnkiteAction.SetCascadeLayout:
                this.engine.setLayout(ctx, LayoutShortcutIds[action]);
                break;
            case KrohnkiteAction.ToggleDock:
                if (window)
                    this.engine.toggleDock(window);
                break;
            case KrohnkiteAction.RaiseSurfaceCapacity:
                currentCapacity = this.engine.raiseSurfaceCapacity(ctx);
                ctx.showNotification(`Surface capacity: ${currentCapacity !== null ? currentCapacity : "unlimited"}`);
                break;
            case KrohnkiteAction.LowerSurfaceCapacity:
                currentCapacity = this.engine.lowerSurfaceCapacity(ctx);
                ctx.showNotification(`Surface capacity: ${currentCapacity}`);
                break;
            case KrohnkiteAction.ResetSurfaceCapacity:
                currentCapacity = this.engine.ResetSurfaceCapacity(ctx);
                ctx.showNotification(`Surface capacity: ${currentCapacity !== null ? currentCapacity : "unlimited"}`);
                isArrangeNeeded = false;
                break;
            case KrohnkiteAction.ShowCurrentCapacity:
                currentCapacity = this.engine.getCurrentSurfaceCapacity(ctx);
                ctx.showNotification(`Surface capacity: ${currentCapacity !== null ? currentCapacity : "unlimited"}`);
                isArrangeNeeded = false;
                break;
        }
        if (isArrangeNeeded) {
            this.engine.arrange(ctx, reason, `${getMethodName()}:shortcut=${action}`);
        }
    }
}
class RelocationWindows {
    get totalNumWinsPrepareToOutput() {
        let total = 0;
        for (const windows of this.toOutputs) {
            total += windows.length;
        }
        return total;
    }
    get totalNumWinsPrepareToVDesktop() {
        let total = 0;
        for (const windows of this.toVDesktops) {
            total += windows.length;
        }
        return total;
    }
    get getWinsSendingToOutput() {
        let total = 0;
        for (const [output, windows] of this.toOutputs.entries()) {
            for (const w of windows) {
                if (output.name === w.surface.output.name && w.isSendingToOutput)
                    total++;
            }
        }
        return total;
    }
    get isExistSendingWindowsToOutput() {
        for (const [output, windows] of this.toOutputs.entries()) {
            for (const w of windows) {
                if (output.name !== w.surface.output.name && w.isSendingToOutput)
                    return true;
            }
        }
        return false;
    }
    get isExistTransferWindowsToVDesktop() {
        for (const windows of this.toVDesktops) {
            for (const w of windows) {
                if (w instanceof WindowClass)
                    return true;
            }
        }
        return false;
    }
    constructor() {
        this.isSending = false;
        this.startTime = 0;
        this.toOutputs = new WrapperMap((client) => client.name, (_) => new Array());
        this.toVDesktops = new WrapperMap((client) => client.id, (_) => new Array());
        this.activeWindow = null;
        this.direction = null;
    }
    clear() {
        for (const windows of this.toOutputs) {
            windows.forEach((w) => {
                w.isSendingToOutput = false;
                w.relocationTargetOutput = null;
            });
        }
        this.isSending = false;
        this.startTime = 0;
        this.toOutputs.clear();
        this.toVDesktops.clear();
        this.activeWindow = null;
        this.direction = null;
    }
}
class TilingEngine {
    constructor() {
        this.layouts = new LayoutStore();
        this.windows = new WindowStore();
        this.docks = new DockStore();
        this.relocationWindows = new RelocationWindows();
        this.arrangeProcessId = null;
        this.makeWinActive = null;
        this._overCapacityMinimized = [];
        this._defaultGaps = null;
        this._gapsSurfacesCfg = [];
        this._arranging = false;
        this._arrangePending = false;
        this._pendingExtraSurfaces = new Map();
        this._batchDepth = 0;
    }
    adjustLayout(basis) {
        let delta = basis.geometryDelta;
        if (delta === null)
            return;
        const srf = basis.surface;
        const layout = this.layouts.getCurrentLayout(srf);
        if (layout.adjust) {
            const gaps = this.getGaps(srf);
            const area = srf.workingArea.gap(gaps.left, gaps.right, gaps.top, gaps.bottom);
            const tiles = this.windows.getVisibleTiles(srf);
            layout.adjust(area, tiles, basis, delta, gaps.between);
        }
    }
    adjustDock(basis) {
        if (basis.actualGeometry === basis.geometry)
            return;
        const widthDiff = basis.actualGeometry.width - basis.geometry.width;
        const heightDiff = basis.actualGeometry.height - basis.geometry.height;
        this.docks.adjust(basis, widthDiff, heightDiff);
    }
    resizeFloat(ctx, window, dir, step) {
        const srf = window.surface;
        const hStepSize = (srf.workingArea.width * window.window.floatConfig.stepWidth) / 100;
        const vStepSize = (srf.workingArea.height * window.window.floatConfig.stepHeight) / 100;
        let hStep, vStep;
        switch (dir) {
            case "east":
                ((hStep = step), (vStep = 0));
                break;
            case "west":
                ((hStep = -step), (vStep = 0));
                break;
            case "south":
                ((hStep = 0), (vStep = step));
                break;
            case "north":
                ((hStep = 0), (vStep = -step));
                break;
        }
        const geometry = window.actualGeometry;
        const width = geometry.width + hStepSize * hStep;
        const height = geometry.height + vStepSize * vStep;
        window.forceSetGeometry(ctx, new Rect(geometry.x, geometry.y, width, height));
    }
    resizeTile(basis, dir, step) {
        const srf = basis.surface;
        const gaps = this.getGaps(srf);
        if (dir === "east") {
            const maxX = basis.geometry.maxX;
            const easternNeighbor = this.windows
                .getVisibleTiles(srf)
                .filter((tile) => tile.geometry.x >= maxX);
            if (easternNeighbor.length === 0) {
                dir = "west";
                step *= -1;
            }
        }
        else if (dir === "south") {
            const maxY = basis.geometry.maxY;
            const southernNeighbor = this.windows
                .getVisibleTiles(srf)
                .filter((tile) => tile.geometry.y >= maxY);
            if (southernNeighbor.length === 0) {
                dir = "north";
                step *= -1;
            }
        }
        const hStepSize = srf.workingArea.width * 0.03;
        const vStepSize = srf.workingArea.height * 0.03;
        let delta;
        switch (dir) {
            case "east":
                delta = new RectDelta(hStepSize * step, 0, 0, 0);
                break;
            case "west":
                delta = new RectDelta(0, hStepSize * step, 0, 0);
                break;
            case "south":
                delta = new RectDelta(0, 0, vStepSize * step, 0);
                break;
            case "north":
            default:
                delta = new RectDelta(0, 0, 0, vStepSize * step);
                break;
        }
        const layout = this.layouts.getCurrentLayout(srf);
        if (layout.adjust) {
            const area = srf.workingArea.gap(gaps.left, gaps.right, gaps.top, gaps.bottom);
            layout.adjust(area, this.windows.getVisibleTileables(srf), basis, delta, gaps.between);
        }
    }
    beginArrangeBatch() {
        this._batchDepth++;
    }
    endArrangeBatch(ctx, reason, message, extraSurfaces) {
        if (this._batchDepth === 0)
            return;
        this._batchDepth--;
        this._addPendingExtraSurfaces(extraSurfaces);
        if (this._batchDepth > 0)
            return;
        this.arrange(ctx, reason, message);
    }
    arrange(ctx, reason, message, extraSurfaces) {
        this._addPendingExtraSurfaces(extraSurfaces);
        if (this._arranging || this._batchDepth > 0) {
            this._arrangePending = true;
            return;
        }
        this._arranging = true;
        ctx.onLayoutStart();
        try {
            let passes = 0;
            do {
                this._arrangePending = false;
                const extras = [...this._pendingExtraSurfaces.values()];
                this._pendingExtraSurfaces.clear();
                this._arrangeOnce(ctx, reason, message, extras);
            } while (this._arrangePending &&
                ++passes < TilingEngine.MAX_ARRANGE_PASSES);
            if (this._arrangePending) {
                warning(`${getMethodName()}: arrange did not settle after ${TilingEngine.MAX_ARRANGE_PASSES} passes.`);
            }
        }
        finally {
            this._arranging = false;
            this._arrangePending = false;
            this._pendingExtraSurfaces.clear();
            ctx.onLayoutSettled();
        }
    }
    _addPendingExtraSurfaces(extraSurfaces) {
        if (extraSurfaces === undefined)
            return;
        for (const srf of extraSurfaces)
            this._pendingExtraSurfaces.set(srf.id, srf);
    }
    _arrangeOnce(ctx, reason, message, extraSurfaces) {
        this.arrangeProcessId = getRandomInt(1000000);
        if (LOG === null || LOG === void 0 ? void 0 : LOG.isModuleOn(LogModules.arrangeScreen)) {
            LOG.send(LogModules.arrangeScreen, "ArrangeScreens", `#######Reason: ${reason}:${message} arrangeProcessID:${this.arrangeProcessId}########`);
        }
        const surfaces = ctx.currentSurfaces;
        surfaces.forEach((srf) => this._restoreOverCapacityMinimized(srf));
        const extraScreensData = [];
        const knownSrfIds = new Set(surfaces.map((srf) => srf.id));
        for (const srf of extraSurfaces) {
            if (knownSrfIds.has(srf.id))
                continue;
            knownSrfIds.add(srf.id);
            extraScreensData.push(this.getTileables(srf));
        }
        extraScreensData.forEach((screenData) => {
            this.arrangeScreen(ctx, screenData, reason, this.arrangeProcessId);
        });
        let screensData = [];
        surfaces.forEach((srf) => {
            screensData.push(this.getTileables(srf));
        });
        if (this._isCheckCapacity(reason) &&
            (CONFIG.srfExceededToScreen || CONFIG.srfExceededToVDesktop)) {
            if (this.relocationWindows.isSending) {
                const time = getTime();
                if (time - this.relocationWindows.startTime <
                    TilingEngine.SENDING_WINDOWS_MAX_WAIT_TIME) {
                    warning(`Method: ${getMethodName()}.Attempt to Check OverCapacityWindows during sending Process.`);
                    return;
                }
                warning(`Method: ${getMethodName()}. OverCapacityWindows sending process is: enabled but SENDING_WINDOWS_MAX_WAIT_TIME is up.`);
            }
            this.relocationWindows.clear();
            screensData.forEach((screenData) => {
                if (screenData.overCapacity.length > 0) {
                    CONFIG.srfExceededToScreen &&
                        this._prepareWindowsMoveToOutput(ctx, screenData);
                    CONFIG.srfExceededToVDesktop &&
                        this._prepareOverCapacityWindowsTranferToVDesktop(ctx, screenData);
                }
            });
            if (!this.relocationWindows.isSending &&
                (this.relocationWindows.totalNumWinsPrepareToOutput > 0 ||
                    this.relocationWindows.totalNumWinsPrepareToVDesktop > 0)) {
                this.relocationWindows.activeWindow = ctx.currentWindow;
                ctx.relocateWindows();
                this.arrangeProcessId = null;
                return;
            }
        }
        screensData.forEach((screenData) => {
            this.arrangeScreen(ctx, screenData, reason, this.arrangeProcessId);
        });
        this.arrangeProcessId = null;
    }
    _isCheckCapacity(reason) {
        const reasons = [
            "forcedArrangeScreen",
            "moveWindowToOutput",
            "transferWindowToVDesktop",
            "sendToOutputProcessFinish",
        ];
        return reasons.indexOf(reason) < 0;
    }
    _searchAvailableSlotsForOvercapacity(ctx, sourceScreenData, output, screenDataStore, vDesktop, allowOverfill = false) {
        const overCapacity = sourceScreenData.overCapacity.length;
        if (overCapacity <= 0)
            return [];
        const targetSrf = ctx.getSurface(output, vDesktop);
        if (targetSrf == null || !targetSrf.isOvercapacityCandidate)
            return [];
        const targetCapacity = resolveSurfaceCapacity(this.layouts.getCurrentLayout(targetSrf).capacity, targetSrf.capacity);
        if (targetCapacity === 0)
            return [];
        if (!screenDataStore.has(targetSrf.id)) {
            screenDataStore.set(targetSrf.id, this.getTileables(targetSrf));
        }
        const sd = screenDataStore.get(targetSrf.id);
        const wasFull = sd.capacity !== null && sd.capacity - sd.awaitToMove.length <= 0;
        const availableSlots = resolveAvailableSlots(sd.capacity, sd.awaitToMove.length, overCapacity, allowOverfill);
        if (availableSlots <= 0)
            return [];
        const windowsToAvailableSlots = sourceScreenData.overCapacity.splice(0, availableSlots);
        if (allowOverfill && wasFull) {
            windowsToAvailableSlots.forEach((win) => {
                win.preserveOnSurface = targetSrf.id;
            });
        }
        sd.awaitToMove.push(...windowsToAvailableSlots);
        return windowsToAvailableSlots;
    }
    _prepareWindowsMoveToOutput(ctx, sourceScreenData, direction, allowOverfill = false) {
        let alreadyDone = new Set();
        const screenDataStore = new Map();
        const sourceOutput = sourceScreenData.srf.output;
        alreadyDone.add(sourceOutput);
        let outputQueue = new UniqueLifoFifo();
        this._getPossibleOutputs(ctx, sourceOutput, outputQueue, alreadyDone, direction);
        while (sourceScreenData.overCapacity.length > 0 && outputQueue.size !== 0) {
            let neighborOutput = outputQueue.shift();
            if (!neighborOutput)
                return false;
            const windowsToMove = this._searchAvailableSlotsForOvercapacity(ctx, sourceScreenData, neighborOutput, screenDataStore, undefined, allowOverfill);
            const windowsArr = this.relocationWindows.toOutputs.add(neighborOutput);
            windowsArr.push(...windowsToMove);
            if (sourceScreenData.overCapacity.length === 0)
                break;
            alreadyDone.add(neighborOutput);
            this._getPossibleOutputs(ctx, neighborOutput, outputQueue, alreadyDone, direction);
        }
    }
    _getPossibleOutputs(ctx, sourceOutput, outputQueue, alreadyDone, direction) {
        let order;
        if (direction)
            order = [direction];
        else
            order = CONFIG.srfToScreenOrder;
        for (let i = 0; i < order.length; i++) {
            const direction = order[i];
            const output = ctx.getNeighborOutput(direction, sourceOutput);
            if (output && !alreadyDone.has(output))
                outputQueue.push(output);
        }
    }
    _getPossibleVDesktops(ctx, sourceVDesktop, vDesktopsQueue, alreadyDone) {
        for (let i = 0; i < CONFIG.srfToVDesktopOrder.length; i++) {
            const direction = CONFIG.srfToScreenOrder[i];
            const vDesktop = ctx.getNeighborVDesktop(direction, sourceVDesktop);
            if (vDesktop && !alreadyDone.has(vDesktop))
                vDesktopsQueue.push(vDesktop);
        }
    }
    _prepareOverCapacityWindowsTranferToVDesktop(ctx, sourceScreenData) {
        let alreadyDone = new Set();
        const screenDataStore = new Map();
        alreadyDone.add(ctx.currentDesktop);
        let vDesktopsQueue = new UniqueLifoFifo();
        this._getPossibleVDesktops(ctx, ctx.currentDesktop, vDesktopsQueue, alreadyDone);
        while (sourceScreenData.overCapacity.length > 0 &&
            vDesktopsQueue.size !== 0) {
            let neighborVDesktop = vDesktopsQueue.shift();
            if (!neighborVDesktop)
                return;
            const windowsToTransfer = this._searchAvailableSlotsForOvercapacity(ctx, sourceScreenData, sourceScreenData.srf.output, screenDataStore, neighborVDesktop);
            if (windowsToTransfer.length !== 0) {
                const windowsArr = this.relocationWindows.toVDesktops.add(neighborVDesktop);
                windowsArr.push(...windowsToTransfer);
            }
            if (sourceScreenData.overCapacity.length === 0)
                break;
            alreadyDone.add(neighborVDesktop);
            this._getPossibleVDesktops(ctx, neighborVDesktop, vDesktopsQueue, alreadyDone);
        }
    }
    _isMinimizeOvercapacityMode() {
        return isMinimizeOvercapacityMode(CONFIG.srfOvercapacityMode, KWINCONFIG.preventMinimize);
    }
    _minimizeOvercapacityWindow(window) {
        if (this._overCapacityMinimized.indexOf(window) === -1)
            this._overCapacityMinimized.push(window);
        window.window.setMinimizedByScript(true);
    }
    _handleOverCapacityWindows(screenData) {
        if (!this._isMinimizeOvercapacityMode()) {
            screenData.overCapacity.forEach((win) => win.floatInPlace());
            return;
        }
        screenData.overCapacity.forEach((win) => {
            this._minimizeOvercapacityWindow(win);
            const idx = screenData.visibles.indexOf(win);
            if (idx >= 0)
                screenData.visibles.splice(idx, 1);
        });
    }
    _restoreOverCapacityMinimized(srf) {
        if (this._overCapacityMinimized.length === 0)
            return;
        this._overCapacityMinimized = this._overCapacityMinimized.filter((win) => win.isAlive() &&
            this.windows.indexOf(win) >= 0 &&
            win.minimized);
        if (this._overCapacityMinimized.length === 0)
            return;
        const restoreAll = !this._isMinimizeOvercapacityMode();
        let freeSlots = null;
        if (!restoreAll) {
            const layout = this.layouts.getCurrentLayout(srf);
            const capacity = resolveSurfaceCapacity(layout.capacity, srf.capacity);
            freeSlots =
                capacity === null
                    ? null
                    : Math.max(0, capacity - this.windows.getVisibleTileables(srf).length);
            if (freeSlots !== null && freeSlots <= 0)
                return;
        }
        const toRestore = selectRestorableWindows(this._overCapacityMinimized, srf.id, freeSlots, restoreAll);
        if (toRestore.length === 0)
            return;
        const restored = new Set(toRestore);
        this._overCapacityMinimized = this._overCapacityMinimized.filter((win) => !restored.has(win));
        toRestore.forEach((win) => win.window.setMinimizedByScript(false));
    }
    getTileables(srf) {
        let visibles = this.windows.getVisibleWindows(srf);
        visibles.forEach((window) => {
            window.window.updateSrfTime(srf.id);
            if (!window.window.isCommittedEver && window.window.floatConfig.auto) {
                window.state = WindowState.Floating;
            }
            else if (window.state === WindowState.Undecided) {
                window.state = window.shouldFloat
                    ? WindowState.Floating
                    : WindowState.Tiled;
            }
        });
        if (LOG === null || LOG === void 0 ? void 0 : LOG.isModuleOn(LogModules.arrangeScreen)) {
            let mes = "";
            visibles.forEach((tile) => {
                mes += `${tile}\n`;
            });
            LOG.print(LogModules.arrangeScreen, "visibles", mes);
        }
        let tileables = this.windows.getVisibleTileables(srf);
        const newWins = tileables.filter((t) => !t.window.isCommittedEver);
        if (CONFIG.newWindowPosition !== "last" &&
            newWins.length > 0 &&
            tileables.length > 1) {
            const anchor = tileables.find((t) => t.window.isCommittedEver);
            if (anchor) {
                this.windows.moveGroup(newWins, anchor, CONFIG.newWindowPosition === "second");
            }
            else {
                let bootstrapAnchor = newWins[0];
                for (const window of newWins.slice(1)) {
                    const insertAfter = CONFIG.newWindowPosition === "second";
                    this.windows.move(window, bootstrapAnchor, insertAfter);
                    if (!insertAfter)
                        bootstrapAnchor = window;
                }
            }
            tileables = this.windows.getVisibleTileables(srf);
        }
        const layout = this.layouts.getCurrentLayout(srf);
        const protectedWindows = tileables.filter((win) => win.preserveOnSurface === srf.id);
        const selection = selectOverCapacityWindows(tileables, resolveSurfaceCapacity(layout.capacity, srf.capacity), CONFIG.srfOvercapacityEviction, protectedWindows);
        tileables = selection.tileables;
        const overCapacity = selection.overCapacity;
        const freeCapacity = selection.freeSlots;
        visibles.forEach((win) => {
            if (win.preserveOnSurface === null)
                return;
            if (win.preserveOnSurface === srf.id ||
                (!win.isSendingToOutput && !win.isRelocationPending))
                win.preserveOnSurface = null;
        });
        let screenData = {
            visibles: visibles,
            tileables: tileables,
            layout: layout,
            workingArea: this.docks.render(srf, visibles, srf.workingArea.clone()),
            srf: srf,
            overCapacity: overCapacity,
            capacity: freeCapacity,
            awaitToMove: [],
        };
        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.arrangeScreen, "getTileablesReturn", `output: ${srf.output.name}\n visibles number: ${visibles.length}\n tileables.length: ${screenData.tileables.length}, workingArea: ${screenData.workingArea}, layout: ${screenData.layout},capacity: ${freeCapacity}, overCapacity: ${screenData.overCapacity.map((win) => win.window.windowClassName)}`);
        return screenData;
    }
    arrangeScreen(ctx, screenData, reason, processID) {
        const outputName = screenData.srf.output.name;
        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.arrangeScreen, "arrangeScreen", `output:processID: ${outputName}:${processID}`);
        this._handleOverCapacityWindows(screenData);
        const gaps = this.getGaps(screenData.srf);
        let tilingArea;
        let tileablesLen = screenData.tileables.length;
        const soleWindowProps = CONFIG.soleWindowOutputOverride[outputName] ||
            CONFIG.soleWindowDefaultProps;
        if ((CONFIG.monocleMaximize && screenData.layout instanceof MonocleLayout) ||
            (tileablesLen === 1 && soleWindowProps.noGaps)) {
            tilingArea = screenData.workingArea;
        }
        else if (tileablesLen === 1 &&
            (soleWindowProps.width < 100 || soleWindowProps.height < 100)) {
            const h_gap = (screenData.workingArea.height -
                screenData.workingArea.height * (soleWindowProps.height / 100)) /
                2;
            const v_gap = (screenData.workingArea.width -
                screenData.workingArea.width * (soleWindowProps.width / 100)) /
                2;
            tilingArea = screenData.workingArea.gap(v_gap, v_gap, h_gap, h_gap);
        }
        else
            tilingArea = screenData.workingArea.gap(gaps.left, gaps.right, gaps.top, gaps.bottom);
        if (tileablesLen > 0) {
            let engineCtx = new EngineContext(ctx, this);
            function layoutApply() {
                screenData.layout.apply(engineCtx, screenData.tileables, tilingArea, gaps.between);
                if (LOG === null || LOG === void 0 ? void 0 : LOG.isModuleOn(LogModules.arrangeScreen)) {
                    let mes = "";
                    screenData.tileables.forEach((tile) => {
                        mes += `${tile.id}, state:${tile.state}, commitGeometry:${tile.geometry}\n`;
                    });
                    LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.arrangeScreen, "LayoutApply", mes);
                }
            }
            function getNumberTileablesGreaterThenMin(tileables) {
                let numberOfTiles = 0;
                tileables.forEach((tile) => {
                    if (tile.minSize.height > tile.geometry.height ||
                        tile.minSize.width > tile.geometry.width) {
                        numberOfTiles++;
                    }
                });
                return numberOfTiles;
            }
            layoutApply();
            if ((CONFIG.unfitGreater || CONFIG.unfitLess) &&
                ["onWindowResize", "onWindowResizeOver"].indexOf(reason) < 0) {
                let unfitGreaterQuantity = 0;
                screenData.tileables = screenData.tileables.filter((tile) => {
                    if (CONFIG.unfitLess &&
                        (tile.maxSize.height < tile.geometry.height ||
                            tile.maxSize.width < tile.geometry.width)) {
                        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.arrangeScreen, "unfitLess", `id: ${tile.id} commitGeometry:${tile.geometry}. minSize:${tile.minSize.width}:${tile.minSize.height} - heightUnfit:${tile.minSize.height > tile.geometry.height} widthUnfit: ${tile.minSize.width > tile.geometry.width}, tile.maxSize:${tile.maxSize.width}:${tile.maxSize.height} heightUnfit: ${tile.maxSize.height < tile.geometry.height}, widthUnfit: ${tile.maxSize.width < tile.geometry.width}`);
                        tile.floatInPlace();
                        return false;
                    }
                    else if (CONFIG.unfitGreater &&
                        (tile.minSize.height > tile.geometry.height ||
                            tile.minSize.width > tile.geometry.width)) {
                        unfitGreaterQuantity += 1;
                        return true;
                    }
                    else {
                        return true;
                    }
                });
                if (screenData.tileables.length !== tileablesLen) {
                    layoutApply();
                }
                if (unfitGreaterQuantity > 0) {
                    LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.arrangeScreen, "UnfitGreater", `unfitGreaterQuantity: ${unfitGreaterQuantity}`);
                    if (screenData.tileables.length !== tileablesLen) {
                        unfitGreaterQuantity = getNumberTileablesGreaterThenMin(screenData.tileables);
                    }
                    while (screenData.tileables.length > 0 && unfitGreaterQuantity > 0) {
                        let tile = screenData.tileables.shift();
                        tile.floatInPlace();
                        layoutApply();
                        unfitGreaterQuantity = getNumberTileablesGreaterThenMin(screenData.tileables);
                    }
                }
            }
        }
        if (CONFIG.limitTileWidthRatio > 0 &&
            !(screenData.layout instanceof MonocleLayout)) {
            const maxWidth = Math.floor(screenData.workingArea.height * CONFIG.limitTileWidthRatio);
            screenData.tileables
                .filter((tile) => tile.isTiled && tile.geometry.width > maxWidth)
                .forEach((tile) => {
                const g = tile.geometry;
                tile.geometry = new Rect(g.x + Math.floor((g.width - maxWidth) / 2), g.y, maxWidth, g.height);
            });
        }
        if (soleWindowProps.noBorders && tileablesLen === 1) {
            screenData.visibles.forEach((window) => {
                if (window.state === WindowState.Tiled)
                    window.commit(ctx, soleWindowProps.noBorders);
                else
                    window.commit(ctx);
            });
        }
        else {
            screenData.visibles.forEach((window) => window.commit(ctx));
        }
        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.arrangeScreen, "#######################################################Finished", `${screenData.srf}`);
    }
    enforceSize(ctx, window) {
        if (window.isRelocationPending || window.isSendingToOutput)
            return;
        if (window.isTiled && !window.actualGeometry.equals(window.geometry)) {
            const srfId = window.surface.id;
            ctx.setTimeout(() => {
                if (window.isAlive() &&
                    !window.isRelocationPending &&
                    !window.isSendingToOutput &&
                    window.isTiled &&
                    window.surface.id === srfId)
                    window.commit(ctx);
            }, 10);
        }
    }
    manage(window) {
        if (!window.shouldIgnore) {
            this.docks.attachWindow(window);
            if (this.docks.isNewWindowHaveDocked(window)) {
                window.state = WindowState.Docked;
            }
            else
                window.state = WindowState.Undecided;
            this.windows.push(window);
        }
    }
    unmanage(window) {
        if (window.state === WindowState.Docked) {
            this.docks.remove(window);
        }
        this.windows.remove(window);
        this._overCapacityMinimized = this._overCapacityMinimized.filter((win) => win !== window);
    }
    focusOrder(ctx, step) {
        const window = ctx.currentWindow;
        if (window === null) {
            const tiles = this.windows.getVisibleTiles(ctx.currentSurface);
            if (tiles.length > 1)
                ctx.currentWindow = tiles[0];
            ctx.requestPointerOnFocus("window", true);
            return;
        }
        const visibles = this.windows.getVisibleWindows(ctx.currentSurface);
        if (visibles.length === 0)
            return;
        const idx = visibles.indexOf(window);
        if (!window || idx < 0) {
            ctx.currentWindow = visibles[0];
            ctx.requestPointerOnFocus("window", true);
            return;
        }
        const num = visibles.length;
        const newIndex = (idx + (step % num) + num) % num;
        ctx.currentWindow = visibles[newIndex];
        ctx.requestPointerOnFocus("window", true);
    }
    focusDir(ctx, dir) {
        let winTypes = ctx.isRegister ? CONFIG.focusMetaCfg : CONFIG.focusNormalCfg;
        if (winTypes === 16) {
            return ctx.focusSpecial(dir);
        }
        if (ctx.focusNeighborWindow(dir, winTypes)) {
            ctx.requestPointerOnFocus("window", true);
            return false;
        }
        if ((!ctx.isRegister && CONFIG.focusMoveScreensNormal) ||
            (ctx.isRegister && CONFIG.focusMoveScreensMeta)) {
            const result = ctx.focusOutput(null, dir, winTypes);
            if (result) {
                ctx.requestPointerOnFocus("screen", true);
                return false;
            }
        }
        if ((!ctx.isRegister && CONFIG.focusMoveVDesktopsNormal) ||
            (ctx.isRegister && CONFIG.focusMoveVDesktopsMeta)) {
            return ctx.focusVDesktop(null, dir, winTypes);
        }
        return false;
    }
    swapOrder(window, step) {
        const srf = window.surface;
        const visibles = this.windows.getVisibleWindows(srf);
        if (visibles.length < 2)
            return;
        const vsrc = visibles.indexOf(window);
        const vdst = wrapIndex(vsrc + step, visibles.length);
        const dstWin = visibles[vdst];
        this.windows.move(window, dstWin);
    }
    _moveTiled(ctx, direction, window) {
        const neighbor = this.getNeighborByDirection(ctx, window, direction);
        if (neighbor) {
            this.windows.swap(window, neighbor);
            return true;
        }
        if (ctx.isRegister
            ? CONFIG.focusMoveScreensMeta
            : CONFIG.focusMoveScreensNormal) {
            const sd = this.getTileables(window.surface);
            const idx = sd.tileables.indexOf(window);
            if (idx < 0) {
                warning(`${getMethodName()}: there is not windows among tileables.`);
                return false;
            }
            sd.overCapacity.push(...sd.tileables.splice(idx, 1));
            this._prepareWindowsMoveToOutput(ctx, sd, direction, CONFIG.srfAllowShortcutMoveToFullSurface);
            if (!this.relocationWindows.isSending &&
                this.relocationWindows.totalNumWinsPrepareToOutput > 0) {
                if (!ctx.relocateWindows())
                    warning(`${getMethodName()}: window cannot send to direction ${direction}`);
                return false;
            }
        }
        if (ctx.isRegister
            ? CONFIG.focusMoveVDesktopsMeta
            : CONFIG.focusMoveVDesktopsNormal)
            return ctx.moveWinToVDesktopByDirection(window, direction);
        return false;
    }
    _moveFloat(ctx, window, dir) {
        const relocation = this.relocationWindows;
        const srcOutput = window.surface.output;
        function isRelocationReady() {
            if (relocation.isSending) {
                if (getTime() - relocation.startTime <=
                    TilingEngine.SENDING_WINDOWS_MAX_WAIT_TIME) {
                    warning(`${getMethodName()} Relocation windows in process. relocationWindows.isSending=${relocation.isSending}`);
                    return false;
                }
                else {
                    warning(`${getMethodName()} Relocation windows with startTime:${relocation.startTime} was canceled.`);
                    relocation.clear();
                }
            }
            return true;
        }
        function floatRelocation(target) {
            const neighbor = target === "toOutput"
                ? ctx.getNeighborOutput(dir, srcOutput)
                : ctx.getNeighborVDesktop(dir);
            if (neighbor === null)
                return false;
            if (!isRelocationReady())
                return false;
            const winArr = target === "toOutput"
                ? relocation.toOutputs.add(neighbor)
                : relocation.toVDesktops.add(neighbor);
            winArr.push(window);
            return true;
        }
        const srf = window.surface;
        const srfRect = srf.workingArea;
        const geometry = window.actualGeometry;
        let x = geometry.x;
        let y = geometry.y;
        if ((x === srfRect.x && dir === "left") ||
            (x === srfRect.maxX - geometry.width && dir === "right") ||
            (y === srfRect.y && dir === "up") ||
            (y === srfRect.maxY - geometry.height && dir === "down")) {
            if ((ctx.isRegister
                ? CONFIG.focusMoveScreensMeta
                : CONFIG.focusMoveScreensNormal) &&
                floatRelocation("toOutput")) {
                this.relocationWindows.activeWindow = window;
                this.relocationWindows.direction = dir;
                ctx.relocateWindows();
                return;
            }
            if ((ctx.isRegister
                ? CONFIG.focusMoveVDesktopsMeta
                : CONFIG.focusMoveVDesktopsNormal) &&
                floatRelocation("toVDesktop")) {
                this.relocationWindows.activeWindow = window;
                this.relocationWindows.direction = dir;
                ctx.relocateWindows();
            }
            return;
        }
        const hStepSize = (srfRect.width * window.window.floatConfig.stepWidth) / 100;
        const vStepSize = (srfRect.height * window.window.floatConfig.stepHeight) / 100;
        let hStep, vStep;
        switch (dir) {
            case "up":
                ((hStep = 0), (vStep = -1));
                break;
            case "down":
                ((hStep = 0), (vStep = 1));
                break;
            case "left":
                ((hStep = -1), (vStep = 0));
                break;
            case "right":
                ((hStep = 1), (vStep = 0));
                break;
        }
        x = geometry.x + hStepSize * hStep;
        y = geometry.y + vStepSize * vStep;
        if (x < srfRect.x)
            x = srfRect.x;
        else if (x + geometry.width > srfRect.maxX)
            x = srfRect.maxX - geometry.width;
        if (y < srfRect.y)
            y = srfRect.y;
        else if (y + geometry.height > srfRect.maxY)
            y = srfRect.maxY - geometry.height;
        ctx.requestPointerOnFocus("window", true);
        window.forceSetGeometry(ctx, new Rect(x, y, geometry.width, geometry.height));
    }
    moveTiledWindow(ctx, dir) {
        const window = ctx.currentWindow;
        if (window === null) {
            const tiles = this.windows.getVisibleTiles(ctx.currentSurface);
            if (tiles.length > 0)
                ctx.currentWindow = tiles[0];
            ctx.requestPointerOnFocus("window", true);
            return false;
        }
        if (window.isTiled) {
            return this._moveTiled(ctx, dir, window);
        }
        return false;
    }
    toggleDock(window) {
        if (WindowClass.isToggleableState(window.state)) {
            if (window.isDocked)
                window.state = window.previousState;
            else
                window.state = WindowState.Docked;
        }
    }
    raiseSurfaceCapacity(ctx) {
        const currentSurface = ctx.currentSurface;
        if (currentSurface.capacity !== null) {
            currentSurface.capacity =
                currentSurface.capacity < 98 ? currentSurface.capacity + 1 : null;
        }
        else {
            let tileables = this.windows.getVisibleTileables(currentSurface);
            currentSurface.capacity =
                tileables.length < 98 ? tileables.length + 1 : null;
        }
        return currentSurface.capacity;
    }
    lowerSurfaceCapacity(ctx) {
        const currentSurface = ctx.currentSurface;
        if (currentSurface.capacity !== null) {
            currentSurface.capacity =
                currentSurface.capacity > 0 ? currentSurface.capacity - 1 : 0;
        }
        else {
            let tileables = this.windows.getVisibleTileables(currentSurface);
            currentSurface.capacity = tileables.length > 0 ? tileables.length - 1 : 0;
        }
        return currentSurface.capacity;
    }
    ResetSurfaceCapacity(ctx) {
        return (ctx.currentSurface.capacity = null);
    }
    getCurrentSurfaceCapacity(ctx) {
        const currentSurface = ctx.currentSurface;
        return resolveSurfaceCapacity(this.layouts.getCurrentLayout(currentSurface).capacity, currentSurface.capacity);
    }
    toggleFloat(window) {
        if (WindowClass.isToggleableState(window.state)) {
            if (window.isFloating)
                window.state = window.previousState;
            else
                window.state = WindowState.Floating;
        }
    }
    floatAll(ctx, srf) {
        const windows = this.windows.getVisibleWindows(srf);
        const numFloats = windows.reduce((count, window) => {
            return window.state === WindowState.Floating ? count + 1 : count;
        }, 0);
        if (numFloats === 0) {
            windows.forEach((window) => {
                if (WindowClass.isToggleableState(window.state))
                    window.state = WindowState.Floating;
            });
            ctx.showNotification("Float All");
        }
        else {
            windows.forEach((window) => {
                if (WindowClass.isToggleableState(window.state))
                    window.state = window.previousState;
            });
            ctx.showNotification("Tile All");
        }
    }
    setMaster(ctx, window) {
        this.windows.setMaster(window);
        const master = this.windows.surfaceMaster(window);
        if (master === null)
            return;
        ctx.currentWindow = master;
        ctx.requestPointerOnFocus("window", true);
    }
    cycleLayout(ctx, step) {
        const layout = this.layouts.cycleLayout(ctx.currentSurface, step);
        if (layout)
            ctx.showLayoutOSD();
    }
    setLayout(ctx, layoutClassID, showOSD = true) {
        const layout = this.layouts.setLayout(ctx.currentSurface, layoutClassID);
        if (layout && showOSD)
            ctx.showLayoutShortcut(layout.classID);
    }
    handleDockWinShortcut(ctx, window, action, reason) {
        if (window === null || !window.isDocked)
            return false;
        const isHandled = this.docks.handleShortcut(ctx, window, action);
        if (isHandled) {
            this.arrange(ctx, reason, `${getMethodName()}:action=${action}`);
        }
        return isHandled;
    }
    handleFloatWinShortcut(ctx, window, action) {
        if (window === null || !window.isFloating)
            return false;
        switch (action) {
            case KrohnkiteAction.Increase:
            case KrohnkiteAction.Decrease:
                break;
            case KrohnkiteAction.GrowWidth:
                this.resizeFloat(ctx, window, "east", 1);
                break;
            case KrohnkiteAction.ShrinkWidth:
                this.resizeFloat(ctx, window, "east", -1);
                break;
            case KrohnkiteAction.GrowHeight:
                this.resizeFloat(ctx, window, "south", 1);
                break;
            case KrohnkiteAction.ShrinkHeight:
                this.resizeFloat(ctx, window, "south", -1);
                break;
            case KrohnkiteAction.MoveLeft:
                this._moveFloat(ctx, window, "left");
                break;
            case KrohnkiteAction.MoveUp:
                this._moveFloat(ctx, window, "up");
                break;
            case KrohnkiteAction.MoveRight:
                this._moveFloat(ctx, window, "right");
                break;
            case KrohnkiteAction.MoveDown:
                this._moveFloat(ctx, window, "down");
                break;
            default:
                return false;
        }
        return true;
    }
    handleLayoutShortcut(ctx, action, reason) {
        const layout = this.layouts.getCurrentLayout(ctx.currentSurface);
        if (layout.handleShortcut) {
            const isHandled = layout.handleShortcut(new EngineContext(ctx, this), action);
            if (isHandled) {
                this.arrange(ctx, reason, `${getMethodName()}:shortcut=${action}`);
                return true;
            }
        }
        return false;
    }
    handleTiledWinShortcut(ctx, window, action, reason) {
        if (window === null || !window.isTiled)
            return false;
        let isArrangeNeeded = true;
        switch (action) {
            case KrohnkiteAction.GrowWidth:
                this.resizeTile(window, "east", 1);
                break;
            case KrohnkiteAction.ShrinkWidth:
                this.resizeTile(window, "east", -1);
                break;
            case KrohnkiteAction.GrowHeight:
                this.resizeTile(window, "south", 1);
                break;
            case KrohnkiteAction.ShrinkHeight:
                this.resizeTile(window, "south", -1);
                break;
            case KrohnkiteAction.SwapUp:
                this.swapOrder(window, -1);
                break;
            case KrohnkiteAction.SwapDown:
                this.swapOrder(window, +1);
                break;
            case KrohnkiteAction.MoveUp:
                isArrangeNeeded = this.moveTiledWindow(ctx, "up");
                break;
            case KrohnkiteAction.MoveDown:
                isArrangeNeeded = this.moveTiledWindow(ctx, "down");
                break;
            case KrohnkiteAction.MoveLeft:
                isArrangeNeeded = this.moveTiledWindow(ctx, "left");
                break;
            case KrohnkiteAction.MoveRight:
                isArrangeNeeded = this.moveTiledWindow(ctx, "right");
                break;
            default:
                return false;
        }
        if (isArrangeNeeded) {
            this.arrange(ctx, reason, `${getMethodName()}:shortcut=${action}`);
        }
        return true;
    }
    getNeighborByDirection(ctx, basis, dir) {
        let vertical;
        let sign;
        switch (dir) {
            case "up":
                vertical = true;
                sign = -1;
                break;
            case "down":
                vertical = true;
                sign = 1;
                break;
            case "left":
                vertical = false;
                sign = -1;
                break;
            case "right":
                vertical = false;
                sign = 1;
                break;
            default:
                return null;
        }
        let windows = this.windows.getVisibleTileables(ctx.currentSurface);
        const candidates = windows
            .filter(vertical
            ? (tile) => tile.geometry.y * sign > basis.geometry.y * sign
            : (tile) => tile.geometry.x * sign > basis.geometry.x * sign)
            .filter(vertical
            ? (tile) => overlap(basis.geometry.x, basis.geometry.maxX, tile.geometry.x, tile.geometry.maxX)
            : (tile) => overlap(basis.geometry.y, basis.geometry.maxY, tile.geometry.y, tile.geometry.maxY));
        if (candidates.length === 0)
            return null;
        const min = sign *
            candidates.reduce(vertical
                ? (prevMin, tile) => Math.min(tile.geometry.y * sign, prevMin)
                : (prevMin, tile) => Math.min(tile.geometry.x * sign, prevMin), Infinity);
        const closest = candidates.filter(vertical
            ? (tile) => tile.geometry.y === min
            : (tile) => tile.geometry.x === min);
        return closest.sort((a, b) => b.focusTime - a.focusTime)[0];
    }
    getGaps(srf) {
        if (this._defaultGaps === null) {
            this._defaultGaps = DefaultGapsCfg.instance;
            this._gapsSurfacesCfg = gapsSurfaceCfg.parseGapsUserSurfacesCfg();
        }
        const surfaceCfg = this._gapsSurfacesCfg.find((surfaceCfg) => srf.isFit(surfaceCfg.userLabel));
        if (surfaceCfg === undefined)
            return this._defaultGaps;
        return surfaceCfg.cfg;
    }
}
TilingEngine.SENDING_WINDOWS_MAX_WAIT_TIME = 100;
TilingEngine.MAX_ARRANGE_PASSES = 10;
class EngineContext {
    get backend() {
        return this.drvctx.backend;
    }
    get currentWindow() {
        return this.drvctx.currentWindow;
    }
    set currentWindow(window) {
        this.drvctx.currentWindow = window;
    }
    get cursorPos() {
        return this.drvctx.cursorPosition;
    }
    get surfaceParams() {
        let srf = this.drvctx.currentSurface;
        return (srf.output.name, srf.activity, srf.vDesktop.name);
    }
    constructor(drvctx, engine) {
        this.drvctx = drvctx;
        this.engine = engine;
    }
    setTimeout(func, timeout) {
        this.drvctx.setTimeout(func, timeout);
    }
    cycleFocus(step) {
        this.engine.focusOrder(this.drvctx, step);
    }
    moveWindowByWinId(window, targetId, after) {
        let target = this.engine.windows.getWindowById(targetId);
        if (target === null)
            return;
        this.engine.windows.moveNew(window, target, after);
    }
    getWindowById(id) {
        return this.engine.windows.getWindowById(id);
    }
    setPrevMaster(window, prev) {
        this.engine.windows.setPrevMaster(window, prev);
    }
    getPrevMaster(window) {
        return this.engine.windows.getPrevMaster(window);
    }
    showNotification(text) {
        this.drvctx.showNotification(text);
    }
    showLayoutOSD() {
        this.drvctx.showLayoutOSD();
    }
    showLayoutShortcut(id) {
        this.drvctx.showLayoutShortcut(id);
    }
}
class DefaultGapsCfg {
    constructor() {
        let left = validateNumber(CONFIG.screenGapLeft);
        if (left instanceof Err) {
            warning(`DefaultGapsCfg: left: ${left}`);
            this.left = 0;
        }
        else
            this.left = left;
        let right = validateNumber(CONFIG.screenGapRight);
        if (right instanceof Err) {
            warning(`DefaultGapsCfg: right: ${right}`);
            this.right = 0;
        }
        else
            this.right = right;
        let top = validateNumber(CONFIG.screenGapTop);
        if (top instanceof Err) {
            warning(`DefaultGapsCfg: top: ${top}`);
            this.top = 0;
        }
        else
            this.top = top;
        let bottom = validateNumber(CONFIG.screenGapBottom);
        if (bottom instanceof Err) {
            warning(`DefaultGapsCfg: bottom: ${bottom}`);
            this.bottom = 0;
        }
        else
            this.bottom = bottom;
        let between = validateNumber(CONFIG.screenGapBetween);
        if (between instanceof Err) {
            warning(`DefaultGapsCfg: between: ${between}`);
            this.between = 0;
        }
        else
            this.between = between;
    }
    static get instance() {
        if (!DefaultGapsCfg._gapsInstance) {
            DefaultGapsCfg._gapsInstance = new DefaultGapsCfg();
        }
        return DefaultGapsCfg._gapsInstance;
    }
    static reset() {
        DefaultGapsCfg._gapsInstance = undefined;
    }
    cloneAndUpdate(cfg) {
        return Object.assign({}, DefaultGapsCfg.instance, cfg);
    }
}
class gapsSurfaceCfg {
    constructor(label, cfg) {
        this.label = label;
        this.cfg = cfg;
    }
    isFit(srf) {
        return srf.isFit(this.label);
    }
    toString() {
        return `gapsSurfaceCfg: Label: ${this.label} cfg: ${this.cfg}`;
    }
    static parseGapsUserSurfacesCfg() {
        let surfacesCfg = [];
        if (CONFIG.gapsOverrideConfig.length === 0)
            return surfacesCfg;
        CONFIG.gapsOverrideConfig.forEach((cfg) => {
            let surfaceCfgString = cfg.split(":").map((part) => part.trim());
            if (surfaceCfgString.length !== 2) {
                warning(`Invalid Gaps surface config: ${cfg}, config must have exactly one colon (expected: surfaceLabel:left=5,right=10,...)`);
                return;
            }
            let label = surfaceCfgString[0];
            let userCfg = surfaceCfgString[1];
            let splittedUserCfg = userCfg
                .split(",")
                .map((part) => part.trim().toLowerCase());
            let partialGapsCfg = gapsSurfaceCfg.parseSplittedGapsCfg(splittedUserCfg);
            if (partialGapsCfg instanceof Err) {
                warning(`Invalid Gaps User surface config: ${cfg}. ${partialGapsCfg}`);
                return;
            }
            if (Object.keys(partialGapsCfg).length > 0) {
                surfacesCfg.push(new SurfaceCfg(label, DefaultGapsCfg.instance.cloneAndUpdate(partialGapsCfg)));
            }
        });
        return surfacesCfg;
    }
    static parseSplittedGapsCfg(splittedUserCfg) {
        let errors = [];
        let value;
        let gapsCfg = {};
        splittedUserCfg.forEach((part) => {
            let splittedPart = part
                .split("=")
                .map((part) => part.trim().toLowerCase());
            if (splittedPart.length !== 2) {
                errors.push(`"${part}" can have only one equal sign`);
                return;
            }
            if (splittedPart[0].length === 0 || splittedPart[1].length === 0) {
                errors.push(`"${part}" can not have empty name or value`);
                return;
            }
            value = validateNumber(splittedPart[1]);
            if (value instanceof Err) {
                errors.push(`GapsCfg: ${part}, ${splittedPart[1]} ${value}`);
                return;
            }
            switch (splittedPart[0]) {
                case "left":
                case "l":
                    gapsCfg["left"] = value;
                    break;
                case "right":
                case "r":
                    gapsCfg["right"] = value;
                    break;
                case "top":
                case "t":
                    gapsCfg["top"] = value;
                    break;
                case "bottom":
                case "b":
                    gapsCfg["bottom"] = value;
                    break;
                case "between":
                case "e":
                    gapsCfg["between"] = value;
                    break;
                default:
                    errors.push(` "${part}" unknown parameter name. It can be l,r,t,b,e or left,right,top,bottom,between`);
                    return;
            }
        });
        if (errors.length > 0) {
            return new Err(errors.join("\n"));
        }
        return gapsCfg;
    }
}
class LayoutStoreEntry {
    get currentLayout() {
        return this.loadLayout(this.currentID);
    }
    constructor(outputName, desktopName, activity, desktopId) {
        let layouts = CONFIG.layoutOrder.map((layout) => layout.toLowerCase());
        let layouts_str = layouts.map((layout, i) => i + "." + layout + " ");
        print(`Krohnkite: Screen(output):${outputName}, Desktop(name):${desktopName}(id):${desktopId}, Activity: ${activity}, layouts: ${layouts_str}`);
        this.currentIndex = 0;
        this.currentID = CONFIG.layoutOrder[0];
        CONFIG.screenDefaultLayout.some((entry) => {
            let cfg = entry.split(":");
            const cfgLength = cfg.length;
            if (cfgLength < 2 && cfgLength > 4)
                return false;
            let cfgOutput = cfg[0];
            let cfgActivity = "";
            let cfgVDesktop = "";
            let cfgLayout = undefined;
            if (cfgLength === 2) {
                cfgLayout = cfg[1];
            }
            else if (cfgLength === 3) {
                cfgVDesktop = cfg[1];
                cfgLayout = cfg[2];
            }
            else if (cfgLength === 4) {
                cfgActivity = cfg[1];
                cfgVDesktop = cfg[2];
                cfgLayout = cfg[3];
            }
            if (cfgLayout === undefined)
                return false;
            let cfgLayoutId = parseInt(cfgLayout);
            if (isNaN(cfgLayoutId)) {
                cfgLayoutId = layouts.indexOf(cfgLayout.toLowerCase());
                cfgLayoutId =
                    cfgLayoutId >= 0
                        ? cfgLayoutId
                        : layouts.indexOf(cfgLayout.toLowerCase() + "layout");
            }
            if ((outputName === cfgOutput || cfgOutput === "") &&
                (desktopName === cfgVDesktop || cfgVDesktop === "") &&
                (activity === cfgActivity || cfgActivity === "") &&
                cfgLayoutId >= 0 &&
                cfgLayoutId < CONFIG.layoutOrder.length) {
                this.currentIndex = cfgLayoutId;
                this.currentID = CONFIG.layoutOrder[this.currentIndex];
                return true;
            }
        });
        this.layouts = {};
        this.previousID = this.currentID;
        this.loadLayout(this.currentID);
    }
    cycleLayout(step) {
        this.previousID = this.currentID;
        this.currentIndex =
            this.currentIndex !== null
                ? wrapIndex(this.currentIndex + step, CONFIG.layoutOrder.length)
                : 0;
        this.currentID = CONFIG.layoutOrder[this.currentIndex];
        return this.loadLayout(this.currentID);
    }
    setLayout(targetID) {
        let targetLayout = this.loadLayout(targetID);
        if (targetLayout instanceof MonocleLayout &&
            this.currentLayout instanceof MonocleLayout) {
            this.currentID = this.previousID;
            this.previousID = targetID;
            targetLayout = this.loadLayout(this.currentID);
        }
        else if (this.currentID !== targetID) {
            this.previousID = this.currentID;
            this.currentID = targetID;
        }
        this.updateCurrentIndex();
        return targetLayout;
    }
    updateCurrentIndex() {
        const idx = CONFIG.layoutOrder.indexOf(this.currentID);
        this.currentIndex = idx === -1 ? null : idx;
    }
    loadLayout(ID) {
        let layout = this.layouts[ID];
        if (!layout)
            layout = this.layouts[ID] = CONFIG.layoutFactories[ID]();
        return layout;
    }
}
class LayoutStore {
    constructor() {
        this.store = {};
    }
    getCurrentLayout(srf) {
        return srf.ignore
            ? FloatingLayout.instance
            : this.getEntry(srf).currentLayout;
    }
    cycleLayout(srf, step) {
        if (srf.ignore)
            return null;
        return this.getEntry(srf).cycleLayout(step);
    }
    setLayout(srf, layoutClassID) {
        if (srf.ignore)
            return null;
        if (CONFIG.layoutOrder.indexOf(layoutClassID) === -1)
            return null;
        return this.getEntry(srf).setLayout(layoutClassID);
    }
    getEntry(srf) {
        if (!this.store[srf.layoutId]) {
            let key_without_activity = KWinSurface.generateId(srf.output, "", srf.vDesktop);
            if (this.store[key_without_activity]) {
                this.store[srf.layoutId] = this.store[key_without_activity];
                delete this.store[key_without_activity];
            }
            else {
                this.store[srf.layoutId] = new LayoutStoreEntry(srf.output.name, srf.vDesktop.name, srf.activity, srf.vDesktop.id);
            }
        }
        return this.store[srf.layoutId];
    }
}
class WindowClass {
    static isTileableState(state) {
        return (state === WindowState.Tiled ||
            state === WindowState.Maximized ||
            state === WindowState.TiledAfloat);
    }
    static isTiledState(state) {
        return state === WindowState.Tiled || state === WindowState.Maximized;
    }
    static isFloatingState(state) {
        return state === WindowState.Floating || state === WindowState.TiledAfloat;
    }
    static isDockedState(state) {
        return state === WindowState.Docked;
    }
    static isToggleableState(state) {
        return (state === WindowState.Tiled ||
            state === WindowState.Floating ||
            state === WindowState.Docked);
    }
    get actualGeometry() {
        return this.window.geometry;
    }
    get shouldFloat() {
        return this.window.shouldFloat;
    }
    get shouldIgnore() {
        return this.window.shouldIgnore;
    }
    isAlive() {
        return this.window.isAlive();
    }
    get isTileable() {
        return WindowClass.isTileableState(this.state);
    }
    get isTiled() {
        return WindowClass.isTiledState(this.state);
    }
    get isFloating() {
        return WindowClass.isFloatingState(this.state);
    }
    get isDocked() {
        return WindowClass.isDockedState(this.state);
    }
    get geometryDelta() {
        if (this.geometry === this.actualGeometry)
            return null;
        return RectDelta.fromRects(this.geometry, this.actualGeometry);
    }
    get minSize() {
        return this._minSize;
    }
    get maxSize() {
        return this._maxSize;
    }
    get state() {
        if (this.window.fullScreen)
            return WindowState.NativeFullscreen;
        if (this.window.maximized)
            return WindowState.NativeMaximized;
        return this.internalState;
    }
    set state(value) {
        const state = this.state;
        if (state === value)
            return;
        if ((state === WindowState.Unmanaged || this.isTileable || this.isDocked) &&
            WindowClass.isFloatingState(value))
            this.shouldCommitFloat = true;
        else if (this.isFloating &&
            (WindowClass.isTileableState(value) || WindowClass.isDockedState(value)))
            this.floatGeometry = this.actualGeometry;
        if (state === WindowState.Tiled ||
            state === WindowState.Floating ||
            state === WindowState.Docked) {
            this.previousState = state;
        }
        this.internalState = value;
    }
    setTransientState(state) {
        this.internalState = state;
    }
    floatInPlace() {
        if (!this.isFloating)
            this.floatGeometry = this.actualGeometry.clone();
        this.state = WindowState.Floating;
    }
    get surface() {
        return this.window.surface;
    }
    set surface(srf) {
        this.window.surface = srf;
    }
    get weight() {
        const srfID = this.window.surface.id;
        const weight = this.weightMap[srfID];
        if (weight === undefined) {
            this.weightMap[srfID] = 1.0;
            return 1.0;
        }
        return weight;
    }
    set weight(value) {
        const srfID = this.window.surface.id;
        this.weightMap[srfID] = value;
    }
    get windowClassName() {
        return this.window.windowClassName;
    }
    get windowCaption() {
        return this.window.windowCaption;
    }
    get floatGeometry() {
        return this.window.floatGeometry;
    }
    set floatGeometry(value) {
        this.window.floatGeometry = value;
    }
    get dock() {
        if (this._dock === null)
            this._dock = this._dockTemplate.clone();
        return this._dock;
    }
    setDockTemplate(template) {
        this._dockTemplate = template;
    }
    constructor(window) {
        this.id = window.id;
        this.window = window;
        this.geometry = window.geometry;
        this.focusTime = 0;
        this.isSendingToOutput = false;
        this.isRelocationPending = false;
        this.preserveOnSurface = null;
        this.surfaceArrangeToken = 0;
        this.relocationTargetOutput = null;
        this.isDragging = false;
        this.internalState = WindowState.Unmanaged;
        this.previousState = WindowState.Tiled;
        this.shouldCommitFloat = this.shouldFloat;
        this.weightMap = {};
        this._dock = null;
        this._dockTemplate = new Dock(DefaultDockCfg.instance);
        this._minSize = window.minSize;
        this._maxSize = window.maxSize;
    }
    toString() {
        return `Window: id=${this.id}, state: ${this.state}. ${this.window}`;
    }
    commit(ctx, noBorders) {
        if (this.isDragging)
            return;
        if (!this.window.isCommittedEver)
            this.window.isCommittedEver = true;
        const state = this.state;
        LOG === null || LOG === void 0 ? void 0 : LOG.send(LogModules.arrangeScreen, "commit", `id: ${this.id}, state: ${state}, floatGeometry: ${this.floatGeometry}, commitGeometry: ${this.geometry}, noBorders: ${noBorders}`);
        switch (state) {
            case WindowState.NativeMaximized:
                this.window.commit(ctx, undefined, undefined, undefined);
                break;
            case WindowState.NativeFullscreen:
                this.window.commit(ctx, undefined, undefined, 1);
                break;
            case WindowState.Floating:
                if (!this.shouldCommitFloat)
                    break;
                this.window.commit(ctx, this.floatGeometry, false, CONFIG.floatedWindowsLayer);
                this.shouldCommitFloat = false;
                break;
            case WindowState.Maximized:
                this.window.commit(ctx, this.geometry, true, 1);
                break;
            case WindowState.Tiled:
                this.window.commit(ctx, this.geometry, CONFIG.noTileBorder || Boolean(noBorders), CONFIG.tiledWindowsLayer);
                break;
            case WindowState.TiledAfloat:
                if (!this.shouldCommitFloat)
                    break;
                this.window.commit(ctx, this.floatGeometry, false, CONFIG.floatedWindowsLayer);
                this.shouldCommitFloat = false;
                break;
            case WindowState.Floating:
                this.window.commit(ctx, this.geometry, CONFIG.noTileBorder || Boolean(noBorders), CONFIG.floatedWindowsLayer);
                break;
            case WindowState.Docked:
                this.window.commit(ctx, this.geometry, CONFIG.noTileBorder, CONFIG.tiledWindowsLayer);
                break;
        }
    }
    forceSetGeometry(ctx, geometry) {
        this.window.commit(ctx, geometry);
    }
    visible(srf) {
        return this.window.visible(srf);
    }
    get minimized() {
        return this.window.minimized;
    }
}
class WindowStore {
    constructor(windows) {
        this.list = windows || [];
        this._prevMaster = new Map();
    }
    move(srcWin, destWin, after) {
        const srcIdx = this.list.indexOf(srcWin);
        const destIdx = this.list.indexOf(destWin);
        if (srcIdx === -1 || destIdx === -1)
            return;
        this.list.splice(srcIdx, 1);
        this.list.splice(after ? destIdx + 1 : destIdx, 0, srcWin);
    }
    moveNew(srcWin, destWin, after) {
        const srcIdx = this.list.indexOf(srcWin);
        const destIdx = this.list.indexOf(destWin);
        if (srcIdx === -1 || destIdx === -1)
            return;
        if (srcIdx > destIdx) {
            this.list.splice(srcIdx, 1);
            this.list.splice(after ? destIdx + 1 : destIdx, 0, srcWin);
        }
        else if (destIdx > srcIdx) {
            this.list.splice(srcIdx, 1);
            this.list.splice(after ? destIdx : destIdx - 1, 0, srcWin);
        }
    }
    moveGroup(windows, destWin, after) {
        const removed = [];
        for (const win of windows) {
            const idx = this.list.indexOf(win);
            if (idx >= 0)
                removed.push(this.list.splice(idx, 1)[0]);
        }
        if (removed.length === 0)
            return;
        const destIdx = this.list.indexOf(destWin);
        if (destIdx === -1) {
            this.list.push(...removed);
            return;
        }
        this.list.splice(after ? destIdx + 1 : destIdx, 0, ...removed);
    }
    getWindowById(id) {
        let idx = this.list.map((w) => w.id).indexOf(id);
        return idx < 0 ? null : this.list[idx];
    }
    surfaceMaster(window) {
        const id = window.surface.id;
        for (const win of this.list) {
            if (win.surface.id === id)
                return win;
        }
        return null;
    }
    getPrevMaster(window) {
        const id = window.surface.id;
        const prev = this._prevMaster.get(id);
        if (prev === undefined ||
            prev === window ||
            !prev.isAlive() ||
            this.list.indexOf(prev) === -1 ||
            prev.surface.id !== id) {
            this._prevMaster.delete(id);
            return null;
        }
        return prev;
    }
    setPrevMaster(window, prev) {
        if (prev === null || prev === window || !prev.isAlive())
            return;
        const id = window.surface.id;
        if (prev.surface.id !== id || this.list.indexOf(prev) === -1)
            return;
        this._prevMaster.set(id, prev);
    }
    setMaster(window) {
        if (this.list.indexOf(window) === -1)
            return;
        const id = window.surface.id;
        const master = this.surfaceMaster(window);
        if (master === null || master === window) {
            const prev = this.getPrevMaster(window);
            if (prev === null)
                return;
            this.swap(window, prev);
            this._prevMaster.set(id, window);
            return;
        }
        this._prevMaster.set(id, master);
        this.swap(window, master);
    }
    swap(alpha, beta) {
        const alphaIndex = this.list.indexOf(alpha);
        const betaIndex = this.list.indexOf(beta);
        if (alphaIndex < 0 || betaIndex < 0)
            return;
        this.list[alphaIndex] = beta;
        this.list[betaIndex] = alpha;
    }
    get length() {
        return this.list.length;
    }
    at(idx) {
        return this.list[idx];
    }
    indexOf(window) {
        return this.list.indexOf(window);
    }
    push(window) {
        this.list.push(window);
    }
    beside_first(window) {
        this.list.splice(1, 0, window);
    }
    remove(window) {
        const idx = this.list.indexOf(window);
        if (idx >= 0)
            this.list.splice(idx, 1);
        for (const [id, prev] of this._prevMaster) {
            if (prev === window)
                this._prevMaster.delete(id);
        }
    }
    unshift(window) {
        this.list.unshift(window);
    }
    getVisibleTilesOrDocked(srf) {
        return this.list.filter((win) => win.visible(srf) && (win.isTiled || win.isDocked));
    }
    getVisibleTilesOrFloat(srf) {
        return this.list.filter((win) => win.visible(srf) && (win.isTiled || win.isFloating));
    }
    getVisibleFloatOrDocked(srf) {
        return this.list.filter((win) => win.visible(srf) && (win.isFloating || win.isDocked));
    }
    getVisibleTiles(srf) {
        return this.list.filter((win) => win.isTiled && win.visible(srf));
    }
    getVisibleDocked(srf) {
        return this.list.filter((win) => win.isDocked && win.visible(srf));
    }
    getVisibleFloat(srf) {
        return this.list.filter((win) => win.isFloating && win.visible(srf));
    }
    getVisibleWindows(srf) {
        return this.list.filter((win) => win.visible(srf));
    }
    getVisibleTileables(srf) {
        return this.list.filter((win) => win.isTileable && win.visible(srf));
    }
}
function getWindowLayer(index) {
    if (index === 0)
        return 0;
    else if (index === 1)
        return 1;
    else if (index === 2)
        return 2;
    else
        return 1;
}
class BinaryTreeLayout {
    get description() {
        return "BTree";
    }
    constructor(capacity) {
        this.classID = BinaryTreeLayout.id;
        this.capacity = capacity !== undefined ? capacity : null;
        this.tree = new DwindleTree();
        this.rendered = new Map();
        this.lastArea = null;
        this.lastGap = 0;
        this.lastMetrics = null;
        this.dragSession = null;
        this.dragKey = null;
    }
    apply(ctx, tileables, area, gap) {
        tileables.forEach((tileable) => (tileable.state = WindowState.Tiled));
        this.synchronize(ctx, tileables, area, gap);
        const metrics = this.metrics(tileables);
        this.lastArea = area;
        this.lastGap = gap;
        this.lastMetrics = metrics;
        this.rendered = this.tree.geometry(area, gap, metrics);
        tileables.forEach((tileable) => {
            const geometry = this.rendered.get(tileable.id);
            if (geometry !== undefined)
                tileable.geometry = geometry;
        });
    }
    adjust(area, tiles, basis, delta, gap) {
        if (this.tree.find(basis.id) === null)
            return;
        this.tree.adjust(area, gap, this.metrics(tiles), basis.id, delta);
    }
    drag(_ctx, dragAction) {
        var _a;
        if (!dragAction.window.isTiled)
            return;
        if (this.dragSession !== dragAction) {
            this.dragSession = dragAction;
            this.dragKey = null;
        }
        if (this.rendered.size === 0)
            return;
        const windowId = dragAction.window.id;
        const area = (_a = dragAction.tilesArea) !== null && _a !== void 0 ? _a : dragAction.workingArea;
        const edge = this.edgeAt(area, dragAction.mousePointer);
        if (edge !== null) {
            const key = `edge:${edge}`;
            if (key === this.dragKey)
                return;
            const dir = edge === "left" || edge === "right" ? "h" : "v";
            const before = edge === "left" || edge === "up";
            if (this.tree.moveToRoot(windowId, before, dir, true)) {
                this.dragKey = key;
                dragAction.result.isArrangeNeeded = true;
            }
            return;
        }
        const target = this.dropTarget(windowId, dragAction.mousePointer);
        if (target === null)
            return;
        const side = this.sideAt(target.rect, dragAction.mousePointer);
        const key = `target:${target.id}:${side}`;
        if (key === this.dragKey)
            return;
        const dir = side === "left" || side === "right" ? "h" : "v";
        const before = side === "left" || side === "up";
        if (this.tree.move(windowId, target.id, before, dir, true)) {
            this.dragKey = key;
            dragAction.result.isArrangeNeeded = true;
        }
    }
    handleShortcut(ctx, input) {
        const window = ctx.currentWindow;
        if (window === null || !window.isTiled)
            return false;
        switch (input) {
            case KrohnkiteAction.MoveLeft:
                return this.moveToNeighbor(ctx, window, "left");
            case KrohnkiteAction.MoveRight:
                return this.moveToNeighbor(ctx, window, "right");
            case KrohnkiteAction.MoveUp:
                return this.moveToNeighbor(ctx, window, "up");
            case KrohnkiteAction.MoveDown:
                return this.moveToNeighbor(ctx, window, "down");
            case KrohnkiteAction.SwapUp:
                return this.moveInOrder(window, -1);
            case KrohnkiteAction.SwapDown:
                return this.moveInOrder(window, +1);
            case KrohnkiteAction.Rotate:
                this.tree.rotateAll();
                return true;
            case KrohnkiteAction.RotatePart:
                return this.tree.toggleSplit(window.id);
            case KrohnkiteAction.SetMaster:
                ctx.showNotification("BTree: no master");
                return true;
            default:
                return false;
        }
    }
    clone() {
        return new BinaryTreeLayout(this.capacity !== undefined ? this.capacity : null);
    }
    toString() {
        return "BTreeLayout()";
    }
    synchronize(ctx, tileables, area, gap) {
        for (const windowId of this.tree.order) {
            if (ctx.getWindowById(windowId) === null)
                this.tree.remove(windowId);
        }
        const missing = tileables.filter((tileable) => this.tree.find(tileable.id) === null);
        if (missing.length === 0)
            return;
        let lastInserted = null;
        if (this.tree.isEmpty) {
            const rootWindow = this.pickAnchor(tileables, null);
            if (rootWindow === null)
                return;
            this.tree.insertRoot(rootWindow.id);
            lastInserted = rootWindow.id;
        }
        for (const tileable of missing) {
            if (this.tree.find(tileable.id) !== null)
                continue;
            const metrics = this.metrics(tileables);
            let anchorId = lastInserted;
            if (anchorId === null || !metrics.has(anchorId)) {
                const anchor = this.pickAnchor(tileables, metrics);
                anchorId = anchor !== null ? anchor.id : null;
            }
            if (anchorId === null) {
                const firstLeaf = this.tree.order[0];
                if (firstLeaf === undefined) {
                    this.tree.insertRoot(tileable.id);
                }
                else {
                    this.tree.insert(tileable.id, firstLeaf, this.newWindowGoesFirst(), "h");
                }
                lastInserted = tileable.id;
                continue;
            }
            const anchorRect = this.tree.geometry(area, gap, metrics).get(anchorId);
            if (anchorRect === undefined) {
                const fallbackId = this.tree.order.find((id) => metrics.has(id));
                if (fallbackId === undefined)
                    this.tree.insertRoot(tileable.id);
                else
                    this.tree.insert(tileable.id, fallbackId, this.newWindowGoesFirst(), "h");
                lastInserted = tileable.id;
                continue;
            }
            const dir = anchorRect.width >= anchorRect.height ? "h" : "v";
            this.tree.insert(tileable.id, anchorId, this.newWindowGoesFirst(), dir);
            lastInserted = tileable.id;
        }
    }
    newWindowGoesFirst() {
        return CONFIG.newWindowPosition === "first";
    }
    pickAnchor(tileables, metrics) {
        let best = null;
        for (const tileable of tileables) {
            if (metrics !== null) {
                if (!metrics.has(tileable.id))
                    continue;
                if (this.tree.find(tileable.id) === null)
                    continue;
            }
            if (best === null || tileable.focusTime > best.focusTime)
                best = tileable;
        }
        return best;
    }
    metrics(tileables) {
        const metrics = new Map();
        for (const tileable of tileables)
            metrics.set(tileable.id, tileable.minSize);
        return metrics;
    }
    edgeAt(area, pointer) {
        const marginX = Math.max(1, Math.floor(area.width * 0.1));
        const marginY = Math.max(1, Math.floor(area.height * 0.1));
        const edges = [
            ["left", pointer.x - area.x, marginX],
            ["right", area.maxX - pointer.x, marginX],
            ["up", pointer.y - area.y, marginY],
            ["down", area.maxY - pointer.y, marginY],
        ];
        let best = null;
        let bestDistance = Infinity;
        for (const [direction, distance, margin] of edges) {
            if (distance < 0 || distance > margin)
                continue;
            if (distance < bestDistance) {
                bestDistance = distance;
                best = direction;
            }
        }
        return best;
    }
    sideAt(rect, pointer) {
        const relX = (pointer.x - rect.x) / Math.max(1, rect.width);
        const relY = (pointer.y - rect.y) / Math.max(1, rect.height);
        if (Math.abs(relX - 0.5) >= Math.abs(relY - 0.5))
            return relX < 0.5 ? "left" : "right";
        return relY < 0.5 ? "up" : "down";
    }
    dropTarget(windowId, pointer) {
        for (const [id, rect] of this.rendered) {
            if (id === windowId)
                continue;
            if (rect.includesPoint(pointer))
                return { id, rect };
        }
        return null;
    }
    moveToNeighbor(ctx, window, direction) {
        const area = this.lastArea;
        const metrics = this.lastMetrics;
        const basis = this.rendered.get(window.id);
        if (area === null || metrics === null || basis === undefined)
            return false;
        const horizontal = direction === "left" || direction === "right";
        const forward = direction === "right" || direction === "down";
        const gap = this.lastGap;
        let focalX = basis.x + basis.width / 2;
        let focalY = basis.y + basis.height / 2;
        if (horizontal)
            focalX = forward ? basis.maxX + gap : basis.x - gap - 1;
        else
            focalY = forward ? basis.maxY + gap : basis.y - gap - 1;
        if (focalX < area.x ||
            focalX >= area.maxX ||
            focalY < area.y ||
            focalY >= area.maxY) {
            const dir = horizontal ? "h" : "v";
            const before = direction === "left" || direction === "up";
            const leaf = this.tree.find(window.id);
            const root = this.tree.root;
            if (leaf === null || !(root instanceof DwindleSplit))
                return false;
            const outer = before ? root.first : root.second;
            if (outer === leaf && root.horizontal === horizontal)
                return false;
            return this.tree.moveToRoot(window.id, before, dir, true);
        }
        const leaf = this.tree.find(window.id);
        const parent = leaf !== null ? leaf.parent : null;
        if (leaf !== null && parent !== null && parent.horizontal === horizontal) {
            const first = parent.first === leaf;
            const sibling = first ? parent.second : parent.first;
            if (first === forward &&
                sibling instanceof DwindleLeaf &&
                metrics.has(sibling.windowId))
                return this.tree.swapSides(window.id);
        }
        const neighborId = this.neighbor(ctx, window.id, direction);
        if (neighborId === null)
            return false;
        const target = this.rendered.get(neighborId);
        if (target === undefined)
            return false;
        const targetHorizontal = target.width >= target.height;
        const first = targetHorizontal
            ? focalX < target.x + target.width / 2
            : focalY < target.y + target.height / 2;
        return this.tree.move(window.id, neighborId, first, targetHorizontal ? "h" : "v");
    }
    moveInOrder(window, step) {
        const order = this.tree.order.filter((id) => this.rendered.has(id));
        const index = order.indexOf(window.id);
        if (index < 0)
            return false;
        const targetIndex = index + step;
        if (targetIndex < 0 || targetIndex >= order.length)
            return false;
        return this.tree.swapContents(window.id, order[targetIndex]);
    }
    neighbor(ctx, windowId, direction) {
        const basis = this.rendered.get(windowId);
        if (basis === undefined)
            return null;
        const vertical = direction === "up" || direction === "down";
        const sign = direction === "up" || direction === "left" ? -1 : 1;
        const candidates = [];
        for (const [id, rect] of this.rendered) {
            if (id === windowId)
                continue;
            const beyond = vertical
                ? rect.y * sign > basis.y * sign
                : rect.x * sign > basis.x * sign;
            if (!beyond)
                continue;
            const overlaps = vertical
                ? overlap(basis.x, basis.maxX, rect.x, rect.maxX)
                : overlap(basis.y, basis.maxY, rect.y, rect.maxY);
            if (!overlaps)
                continue;
            candidates.push({ id, rect });
        }
        if (candidates.length === 0)
            return null;
        const min = candidates.reduce((acc, candidate) => Math.min(acc, (vertical ? candidate.rect.y : candidate.rect.x) * sign), Infinity);
        const closest = candidates.filter((candidate) => (vertical ? candidate.rect.y : candidate.rect.x) * sign === min);
        closest.sort((a, b) => {
            var _a, _b, _c, _d;
            const aFocus = (_b = (_a = ctx.getWindowById(a.id)) === null || _a === void 0 ? void 0 : _a.focusTime) !== null && _b !== void 0 ? _b : 0;
            const bFocus = (_d = (_c = ctx.getWindowById(b.id)) === null || _c === void 0 ? void 0 : _c.focusTime) !== null && _d !== void 0 ? _d : 0;
            return bFocus - aFocus;
        });
        return closest[0].id;
    }
}
BinaryTreeLayout.id = "BinaryTreeLayout";
var CascadeDirection;
(function (CascadeDirection) {
    CascadeDirection[CascadeDirection["NorthWest"] = 0] = "NorthWest";
    CascadeDirection[CascadeDirection["North"] = 1] = "North";
    CascadeDirection[CascadeDirection["NorthEast"] = 2] = "NorthEast";
    CascadeDirection[CascadeDirection["East"] = 3] = "East";
    CascadeDirection[CascadeDirection["SouthEast"] = 4] = "SouthEast";
    CascadeDirection[CascadeDirection["South"] = 5] = "South";
    CascadeDirection[CascadeDirection["SouthWest"] = 6] = "SouthWest";
    CascadeDirection[CascadeDirection["West"] = 7] = "West";
})(CascadeDirection || (CascadeDirection = {}));
class CascadeLayout {
    static decomposeDirection(dir) {
        switch (dir) {
            case CascadeDirection.NorthWest:
                return [-1, -1];
            case CascadeDirection.North:
                return [-1, 0];
            case CascadeDirection.NorthEast:
                return [-1, 1];
            case CascadeDirection.East:
                return [0, 1];
            case CascadeDirection.SouthEast:
                return [1, 1];
            case CascadeDirection.South:
                return [1, 0];
            case CascadeDirection.SouthWest:
                return [1, -1];
            case CascadeDirection.West:
                return [0, -1];
        }
    }
    get description() {
        return "Cascade [" + CascadeDirection[this.dir] + "]";
    }
    constructor(capacity, dir = CascadeDirection.SouthEast) {
        this.dir = dir;
        this.classID = CascadeLayout.id;
        this.capacity = capacity !== undefined ? capacity : null;
    }
    apply(ctx, tileables, area, gap) {
        const [vertStep, horzStep] = CascadeLayout.decomposeDirection(this.dir);
        const stepSize = 25;
        const windowWidth = horzStep !== 0
            ? area.width - stepSize * (tileables.length - 1)
            : area.width;
        const windowHeight = vertStep !== 0
            ? area.height - stepSize * (tileables.length - 1)
            : area.height;
        const baseX = horzStep >= 0 ? area.x : area.maxX - windowWidth;
        const baseY = vertStep >= 0 ? area.y : area.maxY - windowHeight;
        let x = baseX, y = baseY;
        tileables.forEach((tile) => {
            tile.state = WindowState.Tiled;
            tile.geometry = new Rect(x, y, windowWidth, windowHeight);
            x += horzStep * stepSize;
            y += vertStep * stepSize;
        });
    }
    clone() {
        return new CascadeLayout(this.capacity, this.dir);
    }
    handleShortcut(ctx, input) {
        switch (input) {
            case KrohnkiteAction.Increase:
                this.dir = (this.dir + 1 + 8) % 8;
                ctx.showNotification(this.description);
                break;
            case KrohnkiteAction.Decrease:
                this.dir = (this.dir - 1 + 8) % 8;
                ctx.showNotification(this.description);
                break;
            default:
                return false;
        }
        return true;
    }
}
CascadeLayout.id = "CascadeLayout";
class ColumnLayout {
    get description() {
        return "Column";
    }
    toString() {
        let s = `ColumnLayout${this.windowIds.size}:`;
        this.windowIds.forEach((id) => (s = s + id + ","));
        return s;
    }
    constructor() {
        this.classID = ColumnLayout.id;
        this.weight = 1.0;
        this.minWeight = 0.0;
        this.parts = new RotateLayoutPart(new StackLayoutPart());
        this.windowIds = new Set();
        this.renderedWindowsIds = [];
        this.renderedWindowsRects = [];
        this.numberFloatedOrMinimized = 0;
        this.timestamp = 0;
    }
    get size() {
        return this.windowIds.size - this.numberFloatedOrMinimized;
    }
    set isHorizontal(value) {
        if (value)
            this.parts.angle = 270;
        else
            this.parts.angle = 0;
    }
    isEmpty() {
        return this.windowIds.size === this.numberFloatedOrMinimized;
    }
    apply(ctx, tileables, area, gap) {
        this.renderedWindowsIds = [];
        let columnTileables = tileables.filter((w) => {
            if (this.windowIds.has(w.id)) {
                this.renderedWindowsIds.push(w.id);
                return true;
            }
        });
        this.renderedWindowsRects = [];
        this.parts.apply(area, columnTileables, gap).forEach((geometry, i) => {
            columnTileables[i].geometry = geometry;
            this.renderedWindowsRects.push(geometry);
        });
    }
    getUpperWindowId(id) {
        let winId = this.renderedWindowsIds.indexOf(id);
        if (winId < 1)
            return null;
        return this.renderedWindowsIds[winId - 1];
    }
    getLowerWindowId(id) {
        let winId = this.renderedWindowsIds.indexOf(id);
        if (winId < 0 || winId === this.renderedWindowsIds.length - 1)
            return null;
        return this.renderedWindowsIds[winId + 1];
    }
    getWindowIdOnRight(x) {
        for (let i = 0; i < this.renderedWindowsIds.length; i++) {
            if (x < this.renderedWindowsRects[i].center.x + 10)
                return this.renderedWindowsIds[i];
        }
        return null;
    }
    getWindowIdOnTop(y) {
        for (let i = 0; i < this.renderedWindowsIds.length; i++) {
            if (y < this.renderedWindowsRects[i].center.y + 10)
                return this.renderedWindowsIds[i];
        }
        return null;
    }
    adjust(area, tiles, basis, delta, gap) {
        let columnTiles = tiles.filter((t) => this.windowIds.has(t.id));
        this.parts.adjust(area, columnTiles, basis, delta, gap);
    }
    actualizeWindowIds(ctx, ids) {
        let window;
        let floatedOrMinimized = 0;
        this.windowIds = new Set([...this.windowIds].filter((id) => {
            window = ctx.getWindowById(id);
            if (ids.has(id))
                return true;
            else if (window !== null && (window.minimized || window.isFloating)) {
                floatedOrMinimized += 1;
                return true;
            }
            return false;
        }));
        this.numberFloatedOrMinimized = floatedOrMinimized;
    }
}
ColumnLayout.id = "Column";
class ColumnsLayout {
    get description() {
        return "Columns";
    }
    get columns() {
        return this._columns;
    }
    get columnsConfiguration() {
        if (this._columnsConfiguration === null)
            return [];
        return this._columnsConfiguration;
    }
    constructor(capacity) {
        this.classID = ColumnsLayout.id;
        this.capacity = capacity !== undefined ? capacity : null;
        this.parts = [new ColumnLayout()];
        this._columns = [];
        this.direction = new windRose(CONFIG.columnsLayoutInitialAngle);
        this._columnsConfiguration = null;
    }
    adjust(area, tiles, basis, delta, gap) {
        let columnId = this.getColumnId(basis);
        if (columnId === null)
            return;
        let isReverse = this.direction.east || this.direction.south;
        let columnsLength = this.columns.length;
        if (((this.direction.east || this.direction.west) &&
            (delta.east !== 0 || delta.west !== 0)) ||
            ((this.direction.north || this.direction.south) &&
                (delta.north !== 0 || delta.south !== 0))) {
            const horizontal = this.direction.east || this.direction.west;
            const orderedColumns = isReverse
                ? this.columns.slice(0).reverse()
                : this.columns;
            const oldWeights = orderedColumns.map((column) => column.weight);
            const minLengths = orderedColumns.map((column) => column.minWeight);
            const axisLength = horizontal ? area.width : area.height;
            const availableLength = axisLength - (columnsLength - 1) * gap;
            const totalMin = minLengths.reduce((sum, min) => sum + min, 0);
            const weights = LayoutUtils.adjustAreaWeightsProportional(area, oldWeights, gap, isReverse ? columnsLength - 1 - columnId : columnId, delta, horizontal, totalMin <= availableLength ? minLengths : undefined);
            weights.forEach((weight, i) => {
                this.columns[isReverse ? columnsLength - 1 - i : i].weight =
                    weight * columnsLength;
            });
        }
        if (((delta.north !== 0 || delta.south !== 0) &&
            (this.direction.east || this.direction.west)) ||
            ((delta.east !== 0 || delta.west !== 0) &&
                (this.direction.north || this.direction.south))) {
            this.columns[columnId].adjust(area, tiles, basis, delta, gap);
        }
    }
    apply(ctx, tileables, area, gap) {
        if (this._columnsConfiguration === null)
            this._columnsConfiguration = this.getDefaultConfig(ctx);
        this.arrangeTileables(ctx, tileables);
        if (this.columns.length === 0)
            return;
        const horizontal = this.direction.east || this.direction.west;
        const orderedColumns = this.direction.east || this.direction.south
            ? this.columns.slice(0).reverse()
            : this.columns;
        const weights = orderedColumns.map((column) => column.weight);
        const minLengths = orderedColumns.map((column) => column.minWeight);
        const axisLength = horizontal ? area.width : area.height;
        const availableLength = axisLength - (this.columns.length - 1) * gap;
        const totalMin = minLengths.reduce((sum, min) => sum + min, 0);
        const rects = LayoutUtils.splitAreaWeighted(area, weights, gap, horizontal, totalMin <= availableLength ? minLengths : undefined);
        if (this.direction.east || this.direction.south) {
            let i = 0;
            for (var idx = this.columns.length - 1; idx >= 0; idx--) {
                this.columns[idx].isHorizontal = this.direction.south;
                this.columns[idx].apply(ctx, tileables, rects[i], gap);
                i++;
            }
        }
        else {
            for (var idx = 0; idx < this.columns.length; idx++) {
                this.columns[idx].isHorizontal = this.direction.north;
                this.columns[idx].apply(ctx, tileables, rects[idx], gap);
            }
        }
    }
    drag(ctx, dragAction) {
        if (this.columns.length === 0 ||
            (this.columns.length === 1 && this.columns[0].windowIds.size === 1))
            return;
        const window = dragAction.window;
        const workingArea = dragAction.tilesArea !== null
            ? dragAction.tilesArea
            : dragAction.workingArea;
        const columnId = this.getColumnId(window);
        const windowId = window.id;
        if (((this.direction.north &&
            workingArea.isTopZone(dragAction.mousePointer)) ||
            (this.direction.south &&
                workingArea.isBottomZone(dragAction.middlePointer)) ||
            (this.direction.west &&
                workingArea.isLeftZone(dragAction.mousePointer)) ||
            (this.direction.east &&
                workingArea.isRightZone(dragAction.mousePointer))) &&
            !(this.columns[0].windowIds.size === 1 &&
                this.columns[0].windowIds.has(windowId))) {
            if (columnId !== null)
                this.columns[columnId].windowIds.delete(windowId);
            let column;
            if (CONFIG.columnsLimitColumns &&
                this.columnsConfiguration.length > 0 &&
                this.parts.length >= this.columnsConfiguration.length) {
                column = this.parts[0];
            }
            else {
                column = this.insertColumn(true);
                if (CONFIG.columnsApplyConfOnNewColumns) {
                    this.applyColumnWeights();
                }
            }
            column.windowIds.add(windowId);
            dragAction.result.isArrangeNeeded = true;
            return;
        }
        if (((this.direction.north &&
            workingArea.isBottomZone(dragAction.middlePointer)) ||
            (this.direction.south &&
                workingArea.isTopZone(dragAction.mousePointer)) ||
            (this.direction.west &&
                workingArea.isRightZone(dragAction.mousePointer)) ||
            (this.direction.east &&
                workingArea.isLeftZone(dragAction.mousePointer))) &&
            !(this.columns[this.columns.length - 1].windowIds.size === 1 &&
                this.columns[this.columns.length - 1].windowIds.has(windowId))) {
            if (columnId !== null)
                this.columns[columnId].windowIds.delete(windowId);
            let column;
            if (CONFIG.columnsLimitColumns &&
                this.columnsConfiguration.length > 0 &&
                this.parts.length >= this.columnsConfiguration.length) {
                column = this.parts[this.parts.length - 1];
            }
            else {
                column = this.insertColumn(false);
                if (CONFIG.columnsApplyConfOnNewColumns) {
                    this.applyColumnWeights();
                }
            }
            column.windowIds.add(windowId);
            dragAction.result.isArrangeNeeded = true;
            return;
        }
        for (let colIdx = 0; colIdx < this.columns.length; colIdx++) {
            const column = this.columns[colIdx];
            for (let i = 0; i < column.renderedWindowsRects.length; i++) {
                const renderedRect = column.renderedWindowsRects[i];
                if ((this.direction.west &&
                    renderedRect.includesPoint(dragAction.mousePointer, 0)) ||
                    (this.direction.north &&
                        renderedRect.includesPoint(dragAction.mousePointer, 2)) ||
                    (this.direction.east &&
                        renderedRect.includesPoint(dragAction.mousePointer, 0)) ||
                    (this.direction.south &&
                        renderedRect.includesPoint(dragAction.mousePointer, 2))) {
                    if (column.renderedWindowsIds[i] === windowId) {
                        return;
                    }
                    if (i > 0 && column.renderedWindowsIds[i - 1] === windowId) {
                        return;
                    }
                    const renderedId = column.renderedWindowsIds[i];
                    if (columnId !== null && columnId !== colIdx)
                        this.columns[columnId].windowIds.delete(windowId);
                    column.windowIds.add(windowId);
                    ctx.moveWindowByWinId(window, renderedId);
                    dragAction.result.isArrangeNeeded = true;
                    return;
                }
                if ((this.direction.west &&
                    renderedRect.includesPoint(dragAction.mousePointer, 1)) ||
                    (this.direction.north &&
                        renderedRect.includesPoint(dragAction.mousePointer, 3)) ||
                    (this.direction.east &&
                        renderedRect.includesPoint(dragAction.mousePointer, 1)) ||
                    (this.direction.south &&
                        renderedRect.includesPoint(dragAction.mousePointer, 3))) {
                    if (column.renderedWindowsIds[i] === windowId) {
                        return;
                    }
                    if (i < column.renderedWindowsIds.length - 1 &&
                        column.renderedWindowsIds[i + 1] === windowId) {
                        return;
                    }
                    const renderedId = column.renderedWindowsIds[i];
                    if (columnId !== null && columnId !== colIdx)
                        this.columns[columnId].windowIds.delete(windowId);
                    column.windowIds.add(windowId);
                    ctx.moveWindowByWinId(window, renderedId, true);
                    dragAction.result.isArrangeNeeded = true;
                    return;
                }
            }
        }
        return;
    }
    arrangeTileables(ctx, tileables) {
        let latestTimestamp = 0;
        let partId = null;
        let newWindows = [];
        let tileableIds = new Set();
        let currentColumnId = 0;
        tileables.forEach((tileable) => {
            tileable.state = WindowState.Tiled;
            partId = this.getPartsId(tileable);
            if (partId !== null) {
                if (this.parts[partId].timestamp < tileable.focusTime) {
                    this.parts[partId].timestamp = tileable.focusTime;
                }
                if (this.parts[partId].timestamp > latestTimestamp) {
                    latestTimestamp = tileable.focusTime;
                    currentColumnId = partId;
                }
            }
            else {
                newWindows.push(tileable.id);
            }
            tileableIds.add(tileable.id);
        });
        const colsLength = CONFIG.columnsLimitColumns
            ? this.parts.length
            : this.columns.length;
        if (this.columnsConfiguration.length > 0 &&
            tileableIds.size > 0 &&
            newWindows.length > 0 &&
            this.columnsConfiguration.length > colsLength) {
            let new_columns_length = this.columnsConfiguration.length - colsLength > newWindows.length
                ? newWindows.length
                : this.columnsConfiguration.length - colsLength;
            for (let i = 0; i < new_columns_length; i++) {
                let winId = newWindows.shift();
                if (winId === undefined)
                    continue;
                let column = this.insertColumn(false);
                column.windowIds.add(winId);
            }
            this.applyColumnWeights();
        }
        if (CONFIG.columnsBalanced) {
            for (var [_, id] of newWindows.entries()) {
                let minSizeColumn = this.parts.reduce((prev, curr) => {
                    return prev.size < curr.size ? prev : curr;
                });
                minSizeColumn.windowIds.add(id);
            }
        }
        else {
            this.parts[currentColumnId].windowIds = new Set([
                ...this.parts[currentColumnId].windowIds,
                ...newWindows,
            ]);
        }
        this.parts.forEach((column) => {
            column.actualizeWindowIds(ctx, tileableIds);
        });
        this.parts = this.parts.filter((column) => column.windowIds.size !== 0);
        if (this.parts.length === 0)
            this.insertColumn(true);
        this.applyColumnsPosition();
        this.updateColumnsMinWeight(ctx);
    }
    updateColumnsMinWeight(ctx) {
        const horizontal = this.direction.east || this.direction.west;
        this.columns.forEach((column) => {
            let min = 0;
            column.windowIds.forEach((id) => {
                const win = ctx.getWindowById(id);
                if (win === null || win.isFloating || win.minimized)
                    return;
                const size = horizontal ? win.minSize.width : win.minSize.height;
                if (size > min)
                    min = size;
            });
            column.minWeight = Math.max(1, min);
        });
    }
    getColumnId(t) {
        if (t !== null) {
            const windowId = typeof t === "string" ? t : t.id;
            for (let i = 0; i < this.columns.length; i++) {
                if (this.columns[i].windowIds.has(windowId))
                    return i;
            }
        }
        return null;
    }
    getPartsId(t) {
        if (t !== null) {
            const windowId = typeof t === "string" ? t : t.id;
            for (let i = 0; i < this.parts.length; i++) {
                if (this.parts[i].windowIds.has(windowId))
                    return i;
            }
        }
        return null;
    }
    applyColumnsPosition() {
        this._columns = this.parts.filter((column) => !column.isEmpty());
    }
    applyColumnWeights() {
        if (this.columnsConfiguration.length > 0 &&
            this.columnsConfiguration[0] !== 0) {
            const columnsList = CONFIG.columnsLimitColumns
                ? this.parts
                : this.columns;
            const sumWeights = this.columnsConfiguration.reduce((a, b) => a + b, 0);
            for (let i = 0; i < columnsList.length && i < this.columnsConfiguration.length; i++) {
                columnsList[i].weight =
                    (this.columnsConfiguration[i] / sumWeights) * columnsList.length;
            }
        }
    }
    toColumnWithBiggerIndex(ctx) {
        const currentWindow = ctx.currentWindow;
        const currentWindowId = currentWindow !== null ? currentWindow.id : null;
        const activeColumnId = CONFIG.columnsLimitColumns && this.columnsConfiguration.length > 0
            ? this.getPartsId(currentWindowId)
            : this.getColumnId(currentWindowId);
        const columnList = CONFIG.columnsLimitColumns && this.columnsConfiguration.length > 0
            ? this.parts
            : this.columns;
        if (currentWindow === null ||
            currentWindowId === null ||
            activeColumnId === null ||
            (columnList[activeColumnId].windowIds.size < 2 &&
                (activeColumnId === columnList.length - 1 || columnList.length < 2)) ||
            (this.columnsConfiguration.length > 0 &&
                activeColumnId === columnList.length - 1 &&
                columnList.length >= this.columnsConfiguration.length)) {
            return false;
        }
        let targetColumn;
        const column = columnList[activeColumnId];
        const center = column.renderedWindowsRects[column.renderedWindowsIds.indexOf(currentWindowId)].center;
        column.windowIds.delete(currentWindowId);
        if (activeColumnId === columnList.length - 1) {
            targetColumn = this.insertColumn(false);
            targetColumn.windowIds.add(currentWindowId);
        }
        else {
            targetColumn = columnList[activeColumnId + 1];
            targetColumn.windowIds.add(currentWindowId);
        }
        let idOnTarget;
        if (this.direction.north || this.direction.south)
            idOnTarget = targetColumn.getWindowIdOnRight(center.x);
        else
            idOnTarget = targetColumn.getWindowIdOnTop(center.y);
        if (idOnTarget !== null)
            ctx.moveWindowByWinId(currentWindow, idOnTarget);
        else {
            const targetId = targetColumn.renderedWindowsIds[targetColumn.renderedWindowsIds.length - 1];
            ctx.moveWindowByWinId(currentWindow, targetId);
        }
        this.applyColumnsPosition();
        return true;
    }
    toColumnWithSmallerIndex(ctx) {
        const currentWindow = ctx.currentWindow;
        const currentWindowId = currentWindow !== null ? currentWindow.id : null;
        const activeColumnId = CONFIG.columnsLimitColumns && this.columnsConfiguration.length > 0
            ? this.getPartsId(currentWindowId)
            : this.getColumnId(currentWindowId);
        const columnList = CONFIG.columnsLimitColumns && this.columnsConfiguration.length > 0
            ? this.parts
            : this.columns;
        if (currentWindow === null ||
            currentWindowId === null ||
            activeColumnId === null ||
            (columnList[activeColumnId].windowIds.size < 2 &&
                (activeColumnId === 0 || columnList.length < 2)) ||
            (this.columnsConfiguration.length > 0 &&
                activeColumnId === 0 &&
                columnList.length >= this.columnsConfiguration.length)) {
            return false;
        }
        let targetColumn;
        const column = columnList[activeColumnId];
        const center = column.renderedWindowsRects[column.renderedWindowsIds.indexOf(currentWindowId)].center;
        column.windowIds.delete(currentWindowId);
        if (activeColumnId === 0) {
            targetColumn = this.insertColumn(true);
            targetColumn.windowIds.add(currentWindowId);
        }
        else {
            targetColumn = columnList[activeColumnId - 1];
            targetColumn.windowIds.add(currentWindowId);
        }
        let idOnTarget;
        if (this.direction.north || this.direction.south)
            idOnTarget = targetColumn.getWindowIdOnRight(center.x);
        else
            idOnTarget = targetColumn.getWindowIdOnTop(center.y);
        if (idOnTarget !== null)
            ctx.moveWindowByWinId(currentWindow, idOnTarget);
        else {
            const targetId = targetColumn.renderedWindowsIds[targetColumn.renderedWindowsIds.length - 1];
            ctx.moveWindowByWinId(currentWindow, targetId);
        }
        this.applyColumnsPosition();
        return true;
    }
    toUpOrLeft(ctx) {
        let currentWindow = ctx.currentWindow;
        let currentWindowId = currentWindow !== null ? currentWindow.id : null;
        let activeColumnId = this.getColumnId(currentWindowId);
        if (currentWindow === null ||
            currentWindowId === null ||
            activeColumnId === null ||
            this.columns[activeColumnId].windowIds.size < 2)
            return false;
        let upperWinId = this.columns[activeColumnId].getUpperWindowId(currentWindowId);
        if (upperWinId === null)
            return false;
        ctx.moveWindowByWinId(currentWindow, upperWinId);
        return true;
    }
    toBottomOrRight(ctx) {
        let currentWindow = ctx.currentWindow;
        let currentWindowId = currentWindow !== null ? currentWindow.id : null;
        let activeColumnId = this.getColumnId(currentWindowId);
        if (currentWindow === null ||
            currentWindowId === null ||
            activeColumnId === null ||
            this.columns[activeColumnId].windowIds.size < 2)
            return false;
        let lowerWinId = this.columns[activeColumnId].getLowerWindowId(currentWindowId);
        if (lowerWinId === null)
            return false;
        ctx.moveWindowByWinId(currentWindow, lowerWinId, true);
        return true;
    }
    showDirection(ctx) {
        let notification;
        if (this.direction.east)
            notification = "vertical ⟰";
        else if (this.direction.north)
            notification = "horizontal ⭆";
        else if (this.direction.west)
            notification = "vertical ⟱";
        else if (this.direction.south)
            notification = "horizontal ⭅";
        else
            notification = "";
        ctx.showNotification(notification);
    }
    handleShortcut(ctx, input) {
        let isApply = false;
        switch (input) {
            case KrohnkiteAction.MoveLeft:
                if (this.direction.north || this.direction.south) {
                    isApply = this.toUpOrLeft(ctx);
                }
                else if (this.direction.east) {
                    isApply = this.toColumnWithBiggerIndex(ctx);
                }
                else
                    isApply = this.toColumnWithSmallerIndex(ctx);
                break;
            case KrohnkiteAction.MoveRight:
                if (this.direction.north || this.direction.south) {
                    isApply = this.toBottomOrRight(ctx);
                }
                else if (this.direction.east) {
                    isApply = this.toColumnWithSmallerIndex(ctx);
                }
                else
                    isApply = this.toColumnWithBiggerIndex(ctx);
                break;
            case KrohnkiteAction.MoveUp:
                if (this.direction.north) {
                    isApply = this.toColumnWithSmallerIndex(ctx);
                }
                else if (this.direction.south) {
                    isApply = this.toColumnWithBiggerIndex(ctx);
                }
                else
                    isApply = this.toUpOrLeft(ctx);
                break;
            case KrohnkiteAction.MoveDown:
                if (this.direction.north) {
                    isApply = this.toColumnWithBiggerIndex(ctx);
                }
                else if (this.direction.south) {
                    isApply = this.toColumnWithSmallerIndex(ctx);
                }
                else
                    isApply = this.toBottomOrRight(ctx);
                break;
            case KrohnkiteAction.Rotate:
                this.direction.cwRotation();
                this.showDirection(ctx);
                isApply = true;
                break;
            case KrohnkiteAction.RotatePart:
                this.direction.ccwRotation();
                this.showDirection(ctx);
                isApply = true;
                break;
            default:
                return false;
        }
        return isApply;
    }
    insertColumn(onTop) {
        let column = new ColumnLayout();
        this.parts.splice(onTop ? 0 : this.parts.length, 0, column);
        return column;
    }
    getDefaultConfig(ctx) {
        let returnValue = [];
        let [outputName, activityId, vDesktopName] = ctx.surfaceParams;
        for (let conf of CONFIG.columnsLayerConf) {
            if (!conf || typeof conf !== "string")
                continue;
            let conf_arr = conf.split(":").map((part) => part.trim());
            if (conf_arr.length < 5) {
                warning(`Columns conf: ${conf} has less then 5 elements`);
                continue;
            }
            if ((outputName === conf_arr[0] || conf_arr[0] === "") &&
                (activityId === conf_arr[1] || conf_arr[1] === "") &&
                (vDesktopName === conf_arr[2] || conf_arr[2] === "")) {
                for (let i = 3; i < conf_arr.length; i++) {
                    let columnWeight = parseFloat(conf_arr[i]);
                    if (isNaN(columnWeight)) {
                        warning(`Columns conf:${conf_arr}: ${conf_arr[i]} is not a number.`);
                        returnValue = [];
                        break;
                    }
                    if (columnWeight === 0) {
                        warning(`Columns conf:${conf_arr}: weight cannot be zero`);
                        returnValue = [];
                        break;
                    }
                    returnValue.push(columnWeight);
                }
                if (returnValue.length > 1 &&
                    returnValue.every((el) => el === returnValue[0])) {
                    returnValue.fill(0);
                }
                return returnValue;
            }
        }
        return returnValue;
    }
}
ColumnsLayout.id = "ColumnsLayout";
class DwindleLeaf {
    constructor(windowId) {
        this.windowId = windowId;
        this.parent = null;
    }
}
class DwindleSplit {
    constructor(first, second, dir, ratio = 0.5, locked = false) {
        this.first = first;
        this.second = second;
        this.dir = dir;
        this.ratio = ratio;
        this.locked = locked;
        this.parent = null;
        this.first.parent = this;
        this.second.parent = this;
    }
    get horizontal() {
        return this.dir === "h";
    }
}
class DwindleTree {
    constructor() {
        this.root = null;
    }
    get isEmpty() {
        return this.root === null;
    }
    get order() {
        const order = [];
        const collect = (node) => {
            if (node instanceof DwindleLeaf) {
                order.push(node.windowId);
                return;
            }
            collect(node.first);
            collect(node.second);
        };
        if (this.root !== null)
            collect(this.root);
        return order;
    }
    find(windowId) {
        return DwindleTree.findIn(this.root, windowId);
    }
    static findIn(node, windowId) {
        var _a;
        if (node === null)
            return null;
        if (node instanceof DwindleLeaf)
            return node.windowId === windowId ? node : null;
        return ((_a = DwindleTree.findIn(node.first, windowId)) !== null && _a !== void 0 ? _a : DwindleTree.findIn(node.second, windowId));
    }
    insertRoot(windowId) {
        if (this.root !== null)
            return false;
        this.root = new DwindleLeaf(windowId);
        return true;
    }
    insert(windowId, anchorId, before, dir, locked = false) {
        if (this.find(windowId) !== null)
            return false;
        const anchor = this.find(anchorId);
        if (anchor === null)
            return this.insertRoot(windowId);
        const parent = anchor.parent;
        const leaf = new DwindleLeaf(windowId);
        const split = before
            ? new DwindleSplit(leaf, anchor, dir, 0.5, locked)
            : new DwindleSplit(anchor, leaf, dir, 0.5, locked);
        this.link(parent, anchor, split);
        return true;
    }
    remove(windowId) {
        const leaf = this.find(windowId);
        if (leaf === null)
            return false;
        const parent = leaf.parent;
        if (parent === null) {
            this.root = null;
            return true;
        }
        const sibling = parent.first === leaf ? parent.second : parent.first;
        this.link(parent.parent, parent, sibling);
        leaf.parent = null;
        parent.parent = null;
        return true;
    }
    move(windowId, neighborId, before, dir, locked = false) {
        if (windowId === neighborId)
            return false;
        if (this.find(windowId) === null || this.find(neighborId) === null)
            return false;
        this.remove(windowId);
        return this.insert(windowId, neighborId, before, dir, locked);
    }
    moveToRoot(windowId, before, dir, locked = true) {
        const leaf = this.find(windowId);
        if (leaf === null || leaf === this.root)
            return false;
        this.remove(windowId);
        const root = this.root;
        if (root === null) {
            this.root = new DwindleLeaf(windowId);
            return true;
        }
        const dragged = new DwindleLeaf(windowId);
        const split = before
            ? new DwindleSplit(dragged, root, dir, 0.5, locked)
            : new DwindleSplit(root, dragged, dir, 0.5, locked);
        split.parent = null;
        this.root = split;
        return true;
    }
    toggleSplit(windowId) {
        const leaf = this.find(windowId);
        const parent = leaf !== null ? leaf.parent : null;
        if (parent === null)
            return false;
        parent.dir = parent.horizontal ? "v" : "h";
        parent.locked = true;
        return true;
    }
    swapSides(windowId) {
        const leaf = this.find(windowId);
        const parent = leaf !== null ? leaf.parent : null;
        if (parent === null)
            return false;
        const first = parent.first;
        parent.first = parent.second;
        parent.second = first;
        parent.ratio = 0.5;
        return true;
    }
    swapContents(firstId, secondId) {
        const first = this.find(firstId);
        const second = this.find(secondId);
        if (first === null || second === null || first === second)
            return false;
        const windowId = first.windowId;
        first.windowId = second.windowId;
        second.windowId = windowId;
        return true;
    }
    rotateAll() {
        let changed = false;
        const rotate = (node) => {
            if (node instanceof DwindleLeaf)
                return;
            node.dir = node.horizontal ? "v" : "h";
            node.locked = true;
            changed = true;
            rotate(node.first);
            rotate(node.second);
        };
        if (this.root !== null)
            rotate(this.root);
        return changed;
    }
    geometry(area, gap, metrics) {
        const result = new Map();
        if (this.root !== null)
            this.layoutNode(this.root, area, gap, metrics, result);
        return result;
    }
    adjust(area, gap, metrics, basisId, delta) {
        if (this.root === null)
            return;
        this.adjustNode(this.root, area, gap, metrics, basisId, delta);
    }
    link(parent, node, replacement) {
        replacement.parent = parent;
        if (parent === null)
            this.root = replacement;
        else if (parent.first === node)
            parent.first = replacement;
        else
            parent.second = replacement;
    }
    layoutNode(node, area, gap, metrics, result) {
        if (node instanceof DwindleLeaf) {
            if (!metrics.has(node.windowId))
                return false;
            result.set(node.windowId, area);
            return true;
        }
        const firstPresent = this.hasPresent(node.first, metrics);
        const secondPresent = this.hasPresent(node.second, metrics);
        if (!firstPresent && !secondPresent)
            return false;
        if (!firstPresent)
            return this.layoutNode(node.second, area, gap, metrics, result);
        if (!secondPresent)
            return this.layoutNode(node.first, area, gap, metrics, result);
        if (!node.locked)
            node.dir = area.width >= area.height ? "h" : "v";
        const splitAxis = node.horizontal ? "x" : "y";
        const minFirst = this.minLength(node.first, splitAxis, gap, metrics);
        const minSecond = this.minLength(node.second, splitAxis, gap, metrics);
        const [firstArea, secondArea] = LayoutUtils.splitAreaWeighted(area, [node.ratio, 1 - node.ratio], gap, node.horizontal, [minFirst, minSecond]);
        this.layoutNode(node.first, firstArea, gap, metrics, result);
        this.layoutNode(node.second, secondArea, gap, metrics, result);
        return true;
    }
    adjustNode(node, area, gap, metrics, basisId, delta) {
        if (node instanceof DwindleLeaf)
            return delta;
        const firstContains = this.contains(node.first, basisId);
        const secondContains = this.contains(node.second, basisId);
        if (!firstContains && !secondContains)
            return delta;
        const firstPresent = this.hasPresent(node.first, metrics);
        const secondPresent = this.hasPresent(node.second, metrics);
        if (!firstPresent || !secondPresent) {
            const child = firstContains ? node.first : node.second;
            return this.adjustNode(child, area, gap, metrics, basisId, delta);
        }
        if (!node.locked)
            node.dir = area.width >= area.height ? "h" : "v";
        const splitAxis = node.horizontal ? "x" : "y";
        const minFirst = this.minLength(node.first, splitAxis, gap, metrics);
        const minSecond = this.minLength(node.second, splitAxis, gap, metrics);
        const [firstArea, secondArea] = LayoutUtils.splitAreaWeighted(area, [node.ratio, 1 - node.ratio], gap, node.horizontal, [minFirst, minSecond]);
        const target = firstContains ? 0 : 1;
        const child = firstContains ? node.first : node.second;
        const childArea = firstContains ? firstArea : secondArea;
        const remainder = this.adjustNode(child, childArea, gap, metrics, basisId, delta);
        const alongAxis = node.horizontal
            ? remainder.east !== 0 || remainder.west !== 0
            : remainder.south !== 0 || remainder.north !== 0;
        if (!alongAxis)
            return remainder;
        const axisLength = node.horizontal ? area.width : area.height;
        const minLengths = minFirst + minSecond <= axisLength - gap
            ? [minFirst, minSecond]
            : undefined;
        node.ratio = LayoutUtils.adjustAreaHalfWeights(area, node.ratio, gap, target, remainder, node.horizontal, minLengths);
        return node.horizontal
            ? new RectDelta(0, 0, remainder.south, remainder.north)
            : new RectDelta(remainder.east, remainder.west, 0, 0);
    }
    hasPresent(node, metrics) {
        if (node instanceof DwindleLeaf)
            return metrics.has(node.windowId);
        return (this.hasPresent(node.first, metrics) ||
            this.hasPresent(node.second, metrics));
    }
    contains(node, windowId) {
        if (node instanceof DwindleLeaf)
            return node.windowId === windowId;
        return (this.contains(node.first, windowId) ||
            this.contains(node.second, windowId));
    }
    minLength(node, axis, gap, metrics) {
        if (node instanceof DwindleLeaf) {
            const size = metrics.get(node.windowId);
            if (size === undefined)
                return 0;
            return axis === "x" ? size.width : size.height;
        }
        const firstPresent = this.hasPresent(node.first, metrics);
        const secondPresent = this.hasPresent(node.second, metrics);
        const first = this.minLength(node.first, axis, gap, metrics);
        const second = this.minLength(node.second, axis, gap, metrics);
        const splitAxis = node.horizontal ? "x" : "y";
        if (axis !== splitAxis)
            return Math.max(first, second);
        if (!firstPresent)
            return second;
        if (!secondPresent)
            return first;
        return first + second + gap;
    }
}
class FloatingLayout {
    constructor() {
        this.classID = FloatingLayout.id;
        this.description = "Floating";
    }
    apply(ctx, tileables, area, gap) {
        tileables.forEach((tileable) => (tileable.state = WindowState.TiledAfloat));
    }
    clone() {
        return this;
    }
    toString() {
        return "FloatingLayout()";
    }
}
FloatingLayout.id = "FloatingLayout";
FloatingLayout.instance = new FloatingLayout();
function minComponent(axis, tile, transposed) {
    if (axis === "y")
        return transposed ? tile.minSize.width : tile.minSize.height;
    return transposed ? tile.minSize.height : tile.minSize.width;
}
class FillLayoutPart {
    adjust(area, tiles, basis, delta, gap, transposed) {
        return delta;
    }
    apply(area, tiles, gap, transposed) {
        return tiles.map((tile) => {
            return area;
        });
    }
    minLength(axis, tiles, gap, transposed) {
        return tiles.reduce((max, tile) => Math.max(max, minComponent(axis, tile, transposed !== null && transposed !== void 0 ? transposed : false)), 0);
    }
    toString() {
        return `FillLayoutPart`;
    }
}
class HalfSplitLayoutPart {
    get horizontal() {
        return this.angle === 0 || this.angle === 180;
    }
    get reversed() {
        return this.angle === 180 || this.angle === 270;
    }
    constructor(primary, secondary) {
        this.primary = primary;
        this.secondary = secondary;
        this.angle = 0;
        this.primarySize = 1;
        this.ratio = 0.5;
    }
    adjust(area, tiles, basis, delta, gap, transposed) {
        const basisIndex = tiles.indexOf(basis);
        if (basisIndex < 0)
            return delta;
        if (tiles.length <= this.primarySize) {
            return this.primary.adjust(area, tiles, basis, delta, gap, transposed);
        }
        else if (this.primarySize === 0) {
            return this.secondary.adjust(area, tiles, basis, delta, gap, transposed);
        }
        else {
            const targetIndex = basisIndex < this.primarySize ? 0 : 1;
            if (targetIndex === 0) {
                delta = this.primary.adjust(area, tiles.slice(0, this.primarySize), basis, delta, gap, transposed);
            }
            else {
                delta = this.secondary.adjust(area, tiles.slice(this.primarySize), basis, delta, gap, transposed);
            }
            const [primaryMin, secondaryMin] = this.splitMinPair(tiles, gap, transposed);
            const axisLength = this.horizontal ? area.width : area.height;
            const minLengths = primaryMin + secondaryMin <= axisLength - gap
                ? this.reversed
                    ? [secondaryMin, primaryMin]
                    : [primaryMin, secondaryMin]
                : undefined;
            this.ratio = LayoutUtils.adjustAreaHalfWeights(area, this.reversed ? 1 - this.ratio : this.ratio, gap, this.reversed ? 1 - targetIndex : targetIndex, delta, this.horizontal, minLengths);
            if (this.reversed)
                this.ratio = 1 - this.ratio;
            switch (this.angle * 10 + targetIndex + 1) {
                case 1:
                case 1802:
                    return new RectDelta(0, delta.west, delta.south, delta.north);
                case 2:
                case 1801:
                    return new RectDelta(delta.east, 0, delta.south, delta.north);
                case 901:
                case 2702:
                    return new RectDelta(delta.east, delta.west, 0, delta.north);
                case 902:
                case 2701:
                    return new RectDelta(delta.east, delta.west, delta.south, 0);
            }
            return delta;
        }
    }
    toString() {
        return `<HalfSplitLayout: angle:${this.angle},ratio:${this.ratio},pr_size:${this.primarySize}.<<<Primary:${this.primary}---Secondary:${this.secondary}>>>`;
    }
    apply(area, tiles, gap, transposed) {
        if (tiles.length <= this.primarySize) {
            return this.primary.apply(area, tiles, gap, transposed);
        }
        else if (this.primarySize === 0) {
            return this.secondary.apply(area, tiles, gap, transposed);
        }
        else {
            const reversed = this.reversed;
            const ratio = reversed ? 1 - this.ratio : this.ratio;
            const [primaryMin, secondaryMin] = this.splitMinPair(tiles, gap, transposed);
            const minLengths = reversed
                ? [secondaryMin, primaryMin]
                : [primaryMin, secondaryMin];
            const [area1, area2] = LayoutUtils.splitAreaWeighted(area, [ratio, 1 - ratio], gap, this.horizontal, minLengths);
            const result1 = this.primary.apply(reversed ? area2 : area1, tiles.slice(0, this.primarySize), gap, transposed);
            const result2 = this.secondary.apply(reversed ? area1 : area2, tiles.slice(this.primarySize), gap, transposed);
            return result1.concat(result2);
        }
    }
    minLength(axis, tiles, gap, transposed) {
        if (tiles.length <= this.primarySize) {
            return this.primary.minLength(axis, tiles, gap, transposed);
        }
        else if (this.primarySize === 0) {
            return this.secondary.minLength(axis, tiles, gap, transposed);
        }
        const primaryMin = this.primary.minLength(axis, tiles.slice(0, this.primarySize), gap, transposed);
        const secondaryMin = this.secondary.minLength(axis, tiles.slice(this.primarySize), gap, transposed);
        const splitAxis = this.horizontal ? "x" : "y";
        return axis === splitAxis
            ? primaryMin + secondaryMin + gap
            : Math.max(primaryMin, secondaryMin);
    }
    splitMinPair(tiles, gap, transposed) {
        const splitAxis = this.horizontal ? "x" : "y";
        return [
            this.primary.minLength(splitAxis, tiles.slice(0, this.primarySize), gap, transposed),
            this.secondary.minLength(splitAxis, tiles.slice(this.primarySize), gap, transposed),
        ];
    }
}
class StackLayoutPart {
    adjust(area, tiles, basis, delta, gap, transposed) {
        const weights = LayoutUtils.adjustAreaWeightsProportional(area, tiles.map((tile) => tile.weight), gap, tiles.indexOf(basis), delta, false, StackLayoutPart.minLengths(tiles, transposed));
        weights.forEach((weight, i) => {
            tiles[i].weight = weight * tiles.length;
        });
        const idx = tiles.indexOf(basis);
        return new RectDelta(delta.east, delta.west, idx === tiles.length - 1 ? delta.south : 0, idx === 0 ? delta.north : 0);
    }
    apply(area, tiles, gap, transposed) {
        const weights = tiles.map((tile) => tile.weight);
        return LayoutUtils.splitAreaWeighted(area, weights, gap, false, StackLayoutPart.minLengths(tiles, transposed));
    }
    minLength(axis, tiles, gap, transposed) {
        const flag = transposed !== null && transposed !== void 0 ? transposed : false;
        if (axis === "y") {
            const sum = tiles.reduce((acc, tile) => acc + minComponent("y", tile, flag), 0);
            return sum + Math.max(0, tiles.length - 1) * gap;
        }
        return tiles.reduce((max, tile) => Math.max(max, minComponent("x", tile, flag)), 0);
    }
    static minLengths(tiles, transposed) {
        return tiles.map((tile) => transposed ? tile.minSize.width : tile.minSize.height);
    }
}
class RotateLayoutPart {
    constructor(inner, angle = 0) {
        this.inner = inner;
        this.angle = angle;
    }
    adjust(area, tiles, basis, delta, gap, transposed) {
        switch (this.angle) {
            case 0:
                break;
            case 90:
                area = new Rect(area.y, area.x, area.height, area.width);
                delta = new RectDelta(delta.south, delta.north, delta.east, delta.west);
                break;
            case 180:
                delta = new RectDelta(delta.west, delta.east, delta.south, delta.north);
                break;
            case 270:
                area = new Rect(area.y, area.x, area.height, area.width);
                delta = new RectDelta(delta.north, delta.south, delta.east, delta.west);
                break;
        }
        delta = this.inner.adjust(area, tiles, basis, delta, gap, this.innerTransposed(transposed));
        switch (this.angle) {
            case 0:
                delta = delta;
                break;
            case 90:
                delta = new RectDelta(delta.south, delta.north, delta.east, delta.west);
                break;
            case 180:
                delta = new RectDelta(delta.west, delta.east, delta.south, delta.north);
                break;
            case 270:
                delta = new RectDelta(delta.north, delta.south, delta.east, delta.west);
                break;
        }
        return delta;
    }
    apply(area, tiles, gap, transposed) {
        switch (this.angle) {
            case 0:
                break;
            case 90:
                area = new Rect(area.y, area.x, area.height, area.width);
                break;
            case 180:
                break;
            case 270:
                area = new Rect(area.y, area.x, area.height, area.width);
                break;
        }
        const innerResult = this.inner.apply(area, tiles, gap, this.innerTransposed(transposed));
        switch (this.angle) {
            case 0:
                return innerResult;
            case 90:
                return innerResult.map((g) => new Rect(g.y, g.x, g.height, g.width));
            case 180:
                return innerResult.map((g) => {
                    const rx = g.x - area.x;
                    const newX = area.x + area.width - (rx + g.width);
                    return new Rect(newX, g.y, g.width, g.height);
                });
            case 270:
                return innerResult.map((g) => {
                    const rx = g.x - area.x;
                    const newY = area.x + area.width - (rx + g.width);
                    return new Rect(g.y, newY, g.height, g.width);
                });
        }
    }
    innerTransposed(transposed) {
        const swapsAxes = this.angle === 90 || this.angle === 270;
        return (transposed !== null && transposed !== void 0 ? transposed : false) !== swapsAxes;
    }
    minLength(axis, tiles, gap, transposed) {
        const swapsAxes = this.angle === 90 || this.angle === 270;
        const innerAxis = swapsAxes
            ? axis === "x"
                ? "y"
                : "x"
            : axis;
        return this.inner.minLength(innerAxis, tiles, gap, this.innerTransposed(transposed));
    }
    rotate(amount) {
        let angle = this.angle + amount;
        if (angle < 0)
            angle = 270;
        else if (angle >= 360)
            angle = 0;
        this.angle = angle;
    }
}
class LayoutUtils {
    static splitWeighted([begin, length], weights, gap) {
        gap = gap !== undefined ? gap : 0;
        const n = weights.length;
        const actualLength = length - (n - 1) * gap;
        const weightSum = weights.reduce((sum, weight) => sum + weight, 0);
        let weightAcc = 0;
        const parts = weights.map((weight, i) => {
            const partBegin = (actualLength * weightAcc) / weightSum + i * gap;
            const partLength = (actualLength * weight) / weightSum;
            weightAcc += weight;
            return [begin + Math.floor(partBegin), Math.floor(partLength)];
        });
        let finalLength = parts.reduce((sum, [, length]) => sum + length, 0);
        finalLength += (n - 1) * gap;
        let remainder = length - finalLength;
        if (remainder > 0 && remainder < n) {
            for (let i = 0; i < remainder; i++) {
                parts[n - i - 1][1] += 1;
            }
        }
        return parts;
    }
    static splitAreaWeighted(area, weights, gap, horizontal, minLengths) {
        gap = gap !== undefined ? gap : 0;
        horizontal = horizontal !== undefined ? horizontal : false;
        const line = horizontal
            ? [area.x, area.width]
            : [area.y, area.height];
        const parts = minLengths !== undefined
            ? LayoutUtils.splitWeightedWithMinimum(line, weights, gap, minLengths)
            : LayoutUtils.splitWeighted(line, weights, gap);
        return parts.map(([begin, length]) => horizontal
            ? new Rect(begin, area.y, length, area.height)
            : new Rect(area.x, begin, area.width, length));
    }
    static splitWeightedWithMinimum([begin, length], weights, gap, minLengths) {
        gap = gap !== undefined ? gap : 0;
        const n = weights.length;
        const actualLength = length - (n - 1) * gap;
        const totalMin = minLengths.reduce((sum, min) => sum + min, 0);
        if (n === 0 || actualLength <= 0 || totalMin > actualLength) {
            return LayoutUtils.splitWeighted([begin, length], weights, gap);
        }
        const partLengths = new Array(n).fill(0);
        const fixed = new Array(n).fill(false);
        let remaining = actualLength;
        let activeWeightSum = weights.reduce((sum, weight) => sum + weight, 0);
        while (true) {
            if (activeWeightSum <= 0) {
                let activeCount = 0;
                for (let i = 0; i < n; i++)
                    if (!fixed[i])
                        activeCount++;
                for (let i = 0; i < n; i++) {
                    if (!fixed[i])
                        partLengths[i] = remaining / activeCount;
                }
                break;
            }
            let offender = -1;
            for (let i = 0; i < n; i++) {
                if (fixed[i])
                    continue;
                const size = (remaining * weights[i]) / activeWeightSum;
                if (size < minLengths[i]) {
                    offender = i;
                    break;
                }
            }
            if (offender === -1) {
                for (let i = 0; i < n; i++) {
                    if (!fixed[i])
                        partLengths[i] = (remaining * weights[i]) / activeWeightSum;
                }
                break;
            }
            partLengths[offender] = minLengths[offender];
            fixed[offender] = true;
            remaining -= minLengths[offender];
            activeWeightSum -= weights[offender];
        }
        let weightAcc = 0;
        const parts = partLengths.map((partLength, i) => {
            const partBegin = weightAcc + i * gap;
            weightAcc += partLength;
            return [begin + Math.floor(partBegin), Math.floor(partLength)];
        });
        let finalLength = parts.reduce((sum, [, partLength]) => sum + partLength, 0);
        finalLength += (n - 1) * gap;
        let remainder = length - finalLength;
        if (remainder > 0 && remainder < n) {
            for (let i = 0; i < remainder; i++) {
                parts[n - i - 1][1] += 1;
            }
        }
        return parts;
    }
    static splitAreaHalfWeighted(area, weight, gap, horizontal) {
        return LayoutUtils.splitAreaWeighted(area, [weight, 1 - weight], gap, horizontal);
    }
    static adjustWeights([begin, length], weights, gap, target, deltaFw, deltaBw) {
        const minLength = 1;
        const parts = this.splitWeighted([begin, length], weights, gap);
        const [targetBase, targetLength] = parts[target];
        if (target > 0 && deltaBw !== 0) {
            const neighbor = target - 1;
            const [neighborBase, neighborLength] = parts[neighbor];
            const delta = clip(deltaBw, minLength - targetLength, neighborLength - minLength);
            parts[target] = [targetBase - delta, targetLength + delta];
            parts[neighbor] = [neighborBase, neighborLength - delta];
        }
        if (target < parts.length - 1 && deltaFw !== 0) {
            const neighbor = target + 1;
            const [neighborBase, neighborLength] = parts[neighbor];
            const delta = clip(deltaFw, minLength - targetLength, neighborLength - minLength);
            parts[target] = [targetBase, targetLength + delta];
            parts[neighbor] = [neighborBase + delta, neighborLength - delta];
        }
        return LayoutUtils.calculateWeights(parts);
    }
    static adjustAreaWeights(area, weights, gap, target, delta, horizontal) {
        const line = horizontal
            ? [area.x, area.width]
            : [area.y, area.height];
        const [deltaFw, deltaBw] = horizontal
            ? [delta.east, delta.west]
            : [delta.south, delta.north];
        return LayoutUtils.adjustWeights(line, weights, gap, target, deltaFw, deltaBw);
    }
    static adjustWeightsProportional([begin, length], weights, gap, target, deltaFw, deltaBw, minLengths) {
        const parts = this.splitWeighted([begin, length], weights, gap);
        const sizes = parts.map(([, size]) => size);
        const n = sizes.length;
        const mins = sizes.map((_, i) => { var _a; return (_a = minLengths === null || minLengths === void 0 ? void 0 : minLengths[i]) !== null && _a !== void 0 ? _a : 1; });
        const shrinkPartners = (indices, amount) => {
            const room = indices.map((i) => Math.max(0, sizes[i] - mins[i]));
            const roomSum = room.reduce((sum, value) => sum + value, 0);
            const moved = Math.min(amount, roomSum);
            if (moved <= 0 || roomSum <= 0)
                return 0;
            indices.forEach((i, k) => {
                sizes[i] -= (moved * room[k]) / roomSum;
            });
            return moved;
        };
        const growPartners = (indices, amount) => {
            if (amount <= 0 || indices.length === 0)
                return 0;
            const total = indices.reduce((sum, i) => sum + sizes[i], 0);
            if (total <= 0) {
                indices.forEach((i) => {
                    sizes[i] += amount / indices.length;
                });
            }
            else {
                indices.forEach((i) => {
                    sizes[i] += (amount * sizes[i]) / total;
                });
            }
            return amount;
        };
        if (target > 0 && deltaBw !== 0) {
            const partners = [];
            for (let i = 0; i < target; i++)
                partners.push(i);
            if (deltaBw > 0) {
                sizes[target] += shrinkPartners(partners, deltaBw);
            }
            else {
                const moved = Math.min(-deltaBw, Math.max(0, sizes[target] - mins[target]));
                growPartners(partners, moved);
                sizes[target] -= moved;
            }
        }
        if (target < n - 1 && deltaFw !== 0) {
            const partners = [];
            for (let i = target + 1; i < n; i++)
                partners.push(i);
            if (deltaFw > 0) {
                sizes[target] += shrinkPartners(partners, deltaFw);
            }
            else {
                const moved = Math.min(-deltaFw, Math.max(0, sizes[target] - mins[target]));
                growPartners(partners, moved);
                sizes[target] -= moved;
            }
        }
        const total = sizes.reduce((sum, size) => sum + size, 0);
        if (total <= 0)
            return weights;
        return sizes.map((size) => size / total);
    }
    static adjustAreaWeightsProportional(area, weights, gap, target, delta, horizontal, minLengths) {
        const line = horizontal
            ? [area.x, area.width]
            : [area.y, area.height];
        const [deltaFw, deltaBw] = horizontal
            ? [delta.east, delta.west]
            : [delta.south, delta.north];
        return LayoutUtils.adjustWeightsProportional(line, weights, gap, target, deltaFw, deltaBw, minLengths);
    }
    static adjustAreaHalfWeights(area, weight, gap, target, delta, horizontal, minLengths) {
        const weights = [weight, 1 - weight];
        const newWeights = minLengths !== undefined
            ? LayoutUtils.adjustAreaWeightsProportional(area, weights, gap, target, delta, horizontal, minLengths)
            : LayoutUtils.adjustAreaWeights(area, weights, gap, target, delta, horizontal);
        return newWeights[0];
    }
    static calculateWeights(parts) {
        const totalLength = parts.reduce((acc, [base, length]) => acc + length, 0);
        return parts.map(([base, length]) => length / totalLength);
    }
    static calculateAreaWeights(area, geometries, gap, horizontal) {
        gap = gap !== undefined ? gap : 0;
        horizontal = horizontal !== undefined ? horizontal : false;
        const line = horizontal ? area.width : area.height;
        const parts = horizontal
            ? geometries.map((geometry) => [geometry.x, geometry.width])
            : geometries.map((geometry) => [geometry.y, geometry.height]);
        return LayoutUtils.calculateWeights(parts);
    }
}
class MonocleLayout {
    constructor() {
        this.description = "Monocle";
        this.classID = MonocleLayout.id;
    }
    apply(ctx, tileables, area, gap) {
        tileables.forEach((tile) => {
            tile.state = CONFIG.monocleMaximize
                ? WindowState.Maximized
                : WindowState.Tiled;
            tile.geometry = area;
        });
        if (ctx.backend === KWinDriver.backendName &&
            KWINCONFIG.monocleMinimizeRest) {
            const tiles = [...tileables];
            ctx.setTimeout(() => {
                const current = ctx.currentWindow;
                if (current && current.isTiled) {
                    tiles.forEach((window) => {
                        if (window !== current)
                            window.window.setMinimizedByScript(true);
                    });
                }
            }, 50);
        }
    }
    clone() {
        return this;
    }
    handleShortcut(ctx, input) {
        switch (input) {
            case KrohnkiteAction.DWMLeft:
            case KrohnkiteAction.FocusNext:
            case KrohnkiteAction.FocusUp:
            case KrohnkiteAction.FocusLeft:
                ctx.cycleFocus(-1);
                return true;
            case KrohnkiteAction.DWMRight:
            case KrohnkiteAction.FocusPrev:
            case KrohnkiteAction.FocusDown:
            case KrohnkiteAction.FocusRight:
                ctx.cycleFocus(1);
                return true;
            default:
                return false;
        }
    }
    toString() {
        return "MonocleLayout()";
    }
}
MonocleLayout.id = "MonocleLayout";
class QuarterLayout {
    get capacity() {
        return 4;
    }
    constructor() {
        this.classID = QuarterLayout.id;
        this.description = "Quarter";
        this.lhsplit = 0.5;
        this.rhsplit = 0.5;
        this.vsplit = 0.5;
        this.prevTileCount = 0;
    }
    resetSplits() {
        this.lhsplit = 0.5;
        this.rhsplit = 0.5;
        this.vsplit = 0.5;
    }
    adjust(area, tiles, basis, delta, gap) {
        if (tiles.length <= 1 || tiles.length > 4)
            return;
        const idx = tiles.indexOf(basis);
        if (idx < 0)
            return;
        if ((idx === 0 || idx === 3) && delta.east !== 0)
            this.vsplit = (area.width * this.vsplit + delta.east) / area.width;
        else if ((idx === 1 || idx === 2) && delta.west !== 0)
            this.vsplit = (area.width * this.vsplit - delta.west) / area.width;
        if (tiles.length === 4) {
            if (idx === 0 && delta.south !== 0)
                this.lhsplit = (area.height * this.lhsplit + delta.south) / area.height;
            if (idx === 3 && delta.north !== 0)
                this.lhsplit = (area.height * this.lhsplit - delta.north) / area.height;
        }
        if (tiles.length >= 3) {
            if (idx === 1 && delta.south !== 0)
                this.rhsplit = (area.height * this.rhsplit + delta.south) / area.height;
            if (idx === 2 && delta.north !== 0)
                this.rhsplit = (area.height * this.rhsplit - delta.north) / area.height;
        }
        this.vsplit = clip(this.vsplit, 1 - QuarterLayout.MAX_PROPORTION, QuarterLayout.MAX_PROPORTION);
        this.lhsplit = clip(this.lhsplit, 1 - QuarterLayout.MAX_PROPORTION, QuarterLayout.MAX_PROPORTION);
        this.rhsplit = clip(this.rhsplit, 1 - QuarterLayout.MAX_PROPORTION, QuarterLayout.MAX_PROPORTION);
    }
    clone() {
        const other = new QuarterLayout();
        other.lhsplit = this.lhsplit;
        other.rhsplit = this.rhsplit;
        other.vsplit = this.vsplit;
        other.prevTileCount = this.prevTileCount;
        return other;
    }
    apply(ctx, tileables, area, gap) {
        if (CONFIG.quarterLayoutReset) {
            if (tileables.length < this.prevTileCount && this.prevTileCount <= 4) {
                this.resetSplits();
            }
            this.prevTileCount = tileables.length;
        }
        for (let i = 0; i < 4 && i < tileables.length; i++)
            tileables[i].state = WindowState.Tiled;
        if (tileables.length > 4)
            tileables
                .slice(4)
                .forEach((tile) => (tile.state = WindowState.TiledAfloat));
        if (tileables.length === 1) {
            tileables[0].geometry = area;
            return;
        }
        const gap1 = gap / 2;
        const gap2 = gap - gap1;
        const leftWidth = area.width * this.vsplit;
        const rightWidth = area.width - leftWidth;
        const rightX = area.x + leftWidth;
        if (tileables.length === 2) {
            tileables[0].geometry = new Rect(area.x, area.y, leftWidth, area.height).gap(0, gap1, 0, 0);
            tileables[1].geometry = new Rect(rightX, area.y, rightWidth, area.height).gap(gap2, 0, 0, 0);
            return;
        }
        const rightTopHeight = area.height * this.rhsplit;
        const rightBottomHeight = area.height - rightTopHeight;
        const rightBottomY = area.y + rightTopHeight;
        if (tileables.length === 3) {
            tileables[0].geometry = new Rect(area.x, area.y, leftWidth, area.height).gap(0, gap1, 0, 0);
            tileables[1].geometry = new Rect(rightX, area.y, rightWidth, rightTopHeight).gap(gap2, 0, 0, gap1);
            tileables[2].geometry = new Rect(rightX, rightBottomY, rightWidth, rightBottomHeight).gap(gap2, 0, gap2, 0);
            return;
        }
        const leftTopHeight = area.height * this.lhsplit;
        const leftBottomHeight = area.height - leftTopHeight;
        const leftBottomY = area.y + leftTopHeight;
        if (tileables.length >= 4) {
            tileables[0].geometry = new Rect(area.x, area.y, leftWidth, leftTopHeight).gap(0, gap1, 0, gap1);
            tileables[1].geometry = new Rect(rightX, area.y, rightWidth, rightTopHeight).gap(gap2, 0, 0, gap1);
            tileables[2].geometry = new Rect(rightX, rightBottomY, rightWidth, rightBottomHeight).gap(gap2, 0, gap2, 0);
            tileables[3].geometry = new Rect(area.x, leftBottomY, leftWidth, leftBottomHeight).gap(0, gap2, gap2, 0);
        }
    }
    toString() {
        return "QuarterLayout()";
    }
}
QuarterLayout.MAX_PROPORTION = 0.8;
QuarterLayout.id = "QuarterLayout";
class SpiralLayout {
    constructor(capacity) {
        this.description = "Spiral";
        this.classID = SpiralLayout.id;
        this.capacity = capacity !== undefined ? capacity : null;
        this.depth = 1;
        this.parts = new HalfSplitLayoutPart(new FillLayoutPart(), new FillLayoutPart());
        this.parts.angle = 0;
    }
    adjust(area, tiles, basis, delta, gap) {
        this.parts.adjust(area, tiles, basis, delta, gap);
    }
    apply(ctx, tileables, area, gap) {
        tileables.forEach((tileable) => (tileable.state = WindowState.Tiled));
        this.bore(tileables.length);
        this.parts.apply(area, tileables, gap).forEach((geometry, i) => {
            tileables[i].geometry = geometry;
        });
    }
    toString() {
        return "Spiral()";
    }
    bore(depth) {
        if (this.depth >= depth)
            return;
        let hpart = this.parts;
        let i;
        for (i = 0; i < this.depth - 1; i++) {
            hpart = hpart.secondary;
        }
        const lastFillPart = hpart.secondary;
        let npart;
        while (i < depth - 1) {
            npart = new HalfSplitLayoutPart(new FillLayoutPart(), lastFillPart);
            npart.angle = (((i + 1) % 4) * 90);
            hpart.secondary = npart;
            hpart = npart;
            i++;
        }
        this.depth = depth;
    }
}
SpiralLayout.id = "SpiralLayout";
class SpreadLayout {
    constructor(capacity) {
        this.classID = SpreadLayout.id;
        this.description = "Spread";
        this.capacity = capacity !== undefined ? capacity : null;
        this.space = KWINCONFIG.spreadLayoutSpace / 100;
    }
    apply(ctx, tileables, area, gap) {
        tileables.forEach((tileable) => (tileable.state = WindowState.Tiled));
        const tiles = [...tileables].sort((a, b) => a.window.stackingOrder - b.window.stackingOrder);
        let numTiles = tiles.length;
        const spaceWidth = Math.floor(area.width * this.space);
        let cardWidth = area.width - spaceWidth * (numTiles - 1);
        const miniumCardWidth = area.width * 0.4;
        while (cardWidth < miniumCardWidth) {
            cardWidth += spaceWidth;
            numTiles -= 1;
        }
        for (let i = 0; i < tiles.length; i++)
            tiles[i].geometry = new Rect(area.x + (i < numTiles ? spaceWidth * (numTiles - i - 1) : 0), area.y, cardWidth, area.height);
    }
    clone() {
        const other = new SpreadLayout();
        other.space = this.space;
        return other;
    }
    handleShortcut(ctx, input) {
        switch (input) {
            case KrohnkiteAction.Decrease:
                this.space = Math.max(0.04, this.space - 0.01);
                break;
            case KrohnkiteAction.Increase:
                this.space = Math.min(0.1, this.space + 0.01);
                break;
            default:
                return false;
        }
        return true;
    }
    toString() {
        return "SpreadLayout(" + this.space + ")";
    }
}
SpreadLayout.id = "SpreadLayout";
class StackedLayout {
    get description() {
        return "Stacked";
    }
    constructor(capacity) {
        this.classID = StackedLayout.id;
        this.capacity = capacity !== undefined ? capacity : null;
        this.parts = new RotateLayoutPart(new HalfSplitLayoutPart(new StackLayoutPart(), new StackLayoutPart()));
    }
    adjust(area, tiles, basis, delta, gap) {
        this.parts.adjust(area, tiles, basis, delta, gap);
    }
    apply(ctx, tileables, area, gap) {
        tileables.forEach((tileable) => (tileable.state = WindowState.Tiled));
        if (tileables.length > 1) {
            this.parts.inner.angle = 90;
        }
        this.parts.apply(area, tileables, gap).forEach((geometry, i) => {
            tileables[i].geometry = geometry;
        });
    }
    clone() {
        const other = new StackedLayout();
        return other;
    }
    handleShortcut(ctx, input) {
        switch (input) {
            case KrohnkiteAction.Rotate:
                this.parts.rotate(90);
                break;
            default:
                return false;
        }
        return true;
    }
    toString() {
        return "StackedLayout()";
    }
}
StackedLayout.id = "StackedLayout";
class StairLayout {
    constructor(capacity) {
        this.classID = StairLayout.id;
        this.description = "Stair";
        this.capacity = capacity !== undefined ? capacity : null;
        this.space = 24;
    }
    apply(ctx, tileables, area, gap) {
        tileables.forEach((tileable) => (tileable.state = WindowState.Tiled));
        const tiles = tileables;
        const len = tiles.length;
        const space = this.space;
        const alignRight = Number(!KWINCONFIG.stairReverse);
        for (let i = 0; i < len; i++) {
            const dx = space * (len - i - 1);
            const dy = space * i;
            tiles[i].geometry = new Rect(area.x + alignRight * dx, area.y + dy, area.width - dx, area.height - dy);
        }
    }
    clone() {
        const other = new StairLayout();
        other.space = this.space;
        return other;
    }
    handleShortcut(ctx, input) {
        switch (input) {
            case KrohnkiteAction.Decrease:
                this.space = Math.max(16, this.space - 8);
                break;
            case KrohnkiteAction.Increase:
                this.space = Math.min(160, this.space + 8);
                break;
            default:
                return false;
        }
        return true;
    }
    toString() {
        return "StairLayout(" + this.space + ")";
    }
}
StairLayout.id = "StairLayout";
class ThreeColumnLayout {
    get description() {
        return "Three-Column [" + this.masterSize + "]";
    }
    constructor(capacity) {
        this.classID = ThreeColumnLayout.id;
        this.capacity = capacity !== undefined ? capacity : null;
        this.masterRatio = 0.6;
        this.masterSize = 1;
    }
    adjust(area, tiles, basis, delta, gap) {
        var _a, _b;
        const basisIndex = tiles.indexOf(basis);
        if (basisIndex < 0)
            return;
        if (tiles.length === 0)
            return;
        else if (tiles.length <= this.masterSize) {
            LayoutUtils.adjustAreaWeightsProportional(area, tiles.map((tile) => tile.weight), gap, tiles.indexOf(basis), delta, false, this.verticalMinLengths(tiles, area.height, gap)).forEach((newWeight, i) => (tiles[i].weight = newWeight * tiles.length));
        }
        else if (tiles.length === this.masterSize + 1) {
            const masterTiles = tiles.slice(0, this.masterSize);
            const stackTile = tiles[tiles.length - 1];
            const ratioWeights = LayoutUtils.adjustAreaWeightsProportional(area, [this.masterRatio, 1 - this.masterRatio], gap, basisIndex < this.masterSize ? 0 : 1, delta, true, this.horizontalMinLengths([masterTiles, [stackTile]], area.width, gap));
            this.masterRatio = ratioWeights[0];
            if (basisIndex < this.masterSize) {
                LayoutUtils.adjustAreaWeightsProportional(area, masterTiles.map((tile) => tile.weight), gap, basisIndex, delta, false, this.verticalMinLengths(masterTiles, area.height, gap)).forEach((newWeight, i) => (masterTiles[i].weight = newWeight * masterTiles.length));
            }
        }
        else if (tiles.length > this.masterSize + 1) {
            let basisGroup;
            if (basisIndex < this.masterSize)
                basisGroup = 1;
            else if (basisIndex < Math.floor((this.masterSize + tiles.length) / 2))
                basisGroup = 2;
            else
                basisGroup = 0;
            const rstackNumTile = Math.floor((tiles.length - this.masterSize) / 2);
            const [masterTiles, rstackTiles, lstackTiles] = partitionArrayBySizes(tiles, [
                this.masterSize,
                rstackNumTile,
            ]);
            const stackRatio = 1 - this.masterRatio;
            const groupMinLengths = this.horizontalMinLengths([lstackTiles, masterTiles, rstackTiles], area.width, gap);
            const stackMin = Math.max((_a = groupMinLengths === null || groupMinLengths === void 0 ? void 0 : groupMinLengths[0]) !== null && _a !== void 0 ? _a : 0, (_b = groupMinLengths === null || groupMinLengths === void 0 ? void 0 : groupMinLengths[2]) !== null && _b !== void 0 ? _b : 0);
            const ratioMinLengths = groupMinLengths
                ? [stackMin, groupMinLengths[1], stackMin]
                : undefined;
            const newRatios = LayoutUtils.adjustAreaWeightsProportional(area, [stackRatio, this.masterRatio, stackRatio], gap, basisGroup, delta, true, ratioMinLengths);
            const newMasterRatio = newRatios[1];
            const newStackRatio = basisGroup === 0 ? newRatios[0] : newRatios[2];
            this.masterRatio = newMasterRatio / (newMasterRatio + newStackRatio);
            const groupTiles = [lstackTiles, masterTiles, rstackTiles][basisGroup];
            LayoutUtils.adjustAreaWeightsProportional(area, groupTiles.map((tile) => tile.weight), gap, groupTiles.indexOf(basis), delta, false, this.verticalMinLengths(groupTiles, area.height, gap)).forEach((newWeight, i) => (groupTiles[i].weight = newWeight * groupTiles.length));
        }
    }
    apply(ctx, tileables, area, gap) {
        tileables.forEach((tileable) => (tileable.state = WindowState.Tiled));
        const tiles = tileables;
        if (tiles.length <= this.masterSize) {
            LayoutUtils.splitAreaWeighted(area, tiles.map((tile) => tile.weight), gap, false, this.verticalMinLengths(tiles, area.height, gap)).forEach((tileArea, i) => (tiles[i].geometry = tileArea));
        }
        else if (tiles.length === this.masterSize + 1) {
            const masterTiles = tiles.slice(0, this.masterSize);
            const stackTile = tiles[tiles.length - 1];
            const [masterArea, stackArea] = LayoutUtils.splitAreaWeighted(area, [this.masterRatio, 1 - this.masterRatio], gap, true, this.horizontalMinLengths([masterTiles, [stackTile]], area.width, gap));
            LayoutUtils.splitAreaWeighted(masterArea, masterTiles.map((tile) => tile.weight), gap, false, this.verticalMinLengths(masterTiles, masterArea.height, gap)).forEach((tileArea, i) => (masterTiles[i].geometry = tileArea));
            stackTile.geometry = stackArea;
        }
        else if (tiles.length > this.masterSize + 1) {
            const stackRatio = 1 - this.masterRatio;
            const rstackSize = Math.floor((tiles.length - this.masterSize) / 2);
            const [masterTiles, rstackTiles, lstackTiles] = partitionArrayBySizes(tiles, [
                this.masterSize,
                rstackSize,
            ]);
            const groupAreas = LayoutUtils.splitAreaWeighted(area, [stackRatio, this.masterRatio, stackRatio], gap, true, this.horizontalMinLengths([lstackTiles, masterTiles, rstackTiles], area.width, gap));
            [lstackTiles, masterTiles, rstackTiles].forEach((groupTiles, group) => {
                LayoutUtils.splitAreaWeighted(groupAreas[group], groupTiles.map((tile) => tile.weight), gap, false, this.verticalMinLengths(groupTiles, groupAreas[group].height, gap)).forEach((tileArea, i) => (groupTiles[i].geometry = tileArea));
            });
        }
    }
    clone() {
        const other = new ThreeColumnLayout();
        other.masterRatio = this.masterRatio;
        other.masterSize = this.masterSize;
        return other;
    }
    handleShortcut(ctx, input) {
        switch (input) {
            case KrohnkiteAction.Increase:
                this.resizeMaster(ctx, +1);
                return true;
            case KrohnkiteAction.Decrease:
                this.resizeMaster(ctx, -1);
                return true;
            case KrohnkiteAction.DWMLeft:
                this.masterRatio = clip(slide(this.masterRatio, -0.05), ThreeColumnLayout.MIN_MASTER_RATIO, ThreeColumnLayout.MAX_MASTER_RATIO);
                return true;
            case KrohnkiteAction.DWMRight:
                this.masterRatio = clip(slide(this.masterRatio, +0.05), ThreeColumnLayout.MIN_MASTER_RATIO, ThreeColumnLayout.MAX_MASTER_RATIO);
                return true;
            default:
                return false;
        }
    }
    toString() {
        return "ThreeColumnLayout(nmaster=" + this.masterSize + ")";
    }
    verticalMinLengths(tiles, axisLength, gap) {
        const minLengths = tiles.map((tile) => tile.minSize.height);
        const available = axisLength - (tiles.length - 1) * gap;
        const totalMin = minLengths.reduce((sum, min) => sum + min, 0);
        return totalMin <= available ? minLengths : undefined;
    }
    horizontalMinLengths(groups, axisLength, gap) {
        const minLengths = groups.map((group) => group.reduce((max, tile) => Math.max(max, tile.minSize.width), 0));
        const available = axisLength - (groups.length - 1) * gap;
        const totalMin = minLengths.reduce((sum, min) => sum + min, 0);
        return totalMin <= available ? minLengths : undefined;
    }
    resizeMaster(ctx, step) {
        this.masterSize = clip(this.masterSize + step, 1, 10);
        ctx.showNotification(this.description);
    }
}
ThreeColumnLayout.MIN_MASTER_RATIO = 0.2;
ThreeColumnLayout.MAX_MASTER_RATIO = 0.75;
ThreeColumnLayout.id = "ThreeColumnLayout";
class TileLayout {
    get description() {
        return "Tile [" + this.numMaster + "]";
    }
    get numMaster() {
        return this.parts.inner.primarySize;
    }
    set numMaster(value) {
        this.parts.inner.primarySize = value;
    }
    get masterRatio() {
        return this.parts.inner.ratio;
    }
    set masterRatio(value) {
        this.parts.inner.ratio = value;
    }
    constructor(capacity) {
        this.classID = TileLayout.id;
        this.master = null;
        this.capacity = capacity !== undefined ? capacity : null;
        this.parts = new RotateLayoutPart(new HalfSplitLayoutPart(new RotateLayoutPart(new StackLayoutPart()), new StackLayoutPart()));
        switch (CONFIG.tileLayoutInitialAngle) {
            case "1": {
                this.parts.angle = 90;
                break;
            }
            case "2": {
                this.parts.angle = 180;
                break;
            }
            case "3": {
                this.parts.angle = 270;
                break;
            }
        }
    }
    adjust(area, tiles, basis, delta, gap) {
        this.parts.adjust(area, tiles, basis, delta, gap);
    }
    apply(ctx, tileables, area, gap) {
        const master = tileables.length > 0 ? tileables[0] : null;
        if (master !== null &&
            this.master !== null &&
            this.master !== master &&
            this.master.isAlive()) {
            ctx.setPrevMaster(master, this.master);
        }
        if (master !== null && tileables.length > 1) {
            const prev = ctx.getPrevMaster(master);
            if (prev === null || tileables.indexOf(prev) === -1) {
                ctx.setPrevMaster(master, tileables[1]);
            }
        }
        this.master = master;
        tileables.forEach((tileable) => (tileable.state = WindowState.Tiled));
        this.parts.apply(area, tileables, gap).forEach((geometry, i) => {
            tileables[i].geometry = geometry;
        });
    }
    clone() {
        const other = new TileLayout();
        other.masterRatio = this.masterRatio;
        other.numMaster = this.numMaster;
        return other;
    }
    handleShortcut(ctx, input) {
        switch (input) {
            case KrohnkiteAction.DWMLeft:
                this.masterRatio = clip(slide(this.masterRatio, -0.05), TileLayout.MIN_MASTER_RATIO, TileLayout.MAX_MASTER_RATIO);
                break;
            case KrohnkiteAction.DWMRight:
                this.masterRatio = clip(slide(this.masterRatio, +0.05), TileLayout.MIN_MASTER_RATIO, TileLayout.MAX_MASTER_RATIO);
                break;
            case KrohnkiteAction.Increase:
                if (this.numMaster < 10)
                    this.numMaster += 1;
                ctx.showNotification(this.description);
                break;
            case KrohnkiteAction.Decrease:
                if (this.numMaster > 0)
                    this.numMaster -= 1;
                ctx.showNotification(this.description);
                break;
            case KrohnkiteAction.Rotate:
                this.parts.rotate(90);
                break;
            case KrohnkiteAction.RotatePart:
                this.parts.inner.primary.rotate(90);
                break;
            default:
                return false;
        }
        return true;
    }
    toString() {
        return ("TileLayout(nmaster=" +
            this.numMaster +
            ", ratio=" +
            this.masterRatio +
            ")");
    }
}
TileLayout.MIN_MASTER_RATIO = 0.2;
TileLayout.MAX_MASTER_RATIO = 0.8;
TileLayout.id = "TileLayout";
function debugWin(win) {
    var w_props = [
        { name: "caption", opt: win.caption },
        { name: "output.name", opt: win.output.name },
        { name: "resourceName", opt: win.resourceName },
        { name: "resourceClass", opt: win.resourceClass },
        { name: "skipPager", opt: win.skipPager },
        { name: "desktopWindow", opt: win.desktopWindow },
        { name: "windowRole", opt: win.windowRole },
        { name: "windowType", opt: win.windowType },
        { name: "pid", opt: win.pid },
        { name: "internalId", opt: win.internalId },
        { name: "stackingOrder", opt: win.stackingOrder },
        { name: "size", opt: win.size },
        { name: "width", opt: win.width },
        { name: "height", opt: win.height },
        { name: "dock", opt: win.dock },
        { name: "toolbar", opt: win.toolbar },
        { name: "menu", opt: win.menu },
        { name: "dialog", opt: win.dialog },
        { name: "splash", opt: win.splash },
        { name: "utility", opt: win.utility },
        { name: "dropdownMenu", opt: win.dropdownMenu },
        { name: "popupMenu", opt: win.popupMenu },
        { name: "tooltip", opt: win.tooltip },
        { name: "notification", opt: win.notification },
        { name: "criticalNotification", opt: win.criticalNotification },
        { name: "appletPopup", opt: win.appletPopup },
        { name: "onScreenDisplay", opt: win.onScreenDisplay },
        { name: "comboBox", opt: win.comboBox },
        { name: "managed", opt: win.managed },
        { name: "popupWindow", opt: win.popupWindow },
        { name: "outline", opt: win.outline },
        { name: "fullScreenable", opt: win.fullScreenable },
        { name: "closeable", opt: win.closeable },
        { name: "minimizable", opt: win.minimizable },
        { name: "specialWindow", opt: win.specialWindow },
        { name: "modal", opt: win.modal },
        { name: "resizeable", opt: win.resizeable },
        { name: "minimized", opt: win.minimized },
        { name: "tile", opt: win.tile },
        { name: "minSize", opt: win.minSize },
        { name: "maxSize", opt: win.maxSize },
        { name: "transient", opt: win.transient },
        { name: "transientFor", opt: win.transientFor },
        { name: "maximizable", opt: win.maximizable },
        { name: "maximizeMode", opt: win.maximizeMode },
        { name: "moveable", opt: win.moveable },
        { name: "moveableAcrossScreens", opt: win.moveableAcrossScreens },
        { name: "hidden", opt: win.hidden },
        { name: "keepAbove", opt: win.keepAbove },
        { name: "keepBelow", opt: win.keepBelow },
        { name: "opacity", opt: win.opacity },
    ];
    var s = "kwin window props:";
    w_props.forEach((el) => {
        if (typeof el.opt !== "undefined" &&
            (el.opt || el.opt === 0 || el.opt === "0")) {
            s += "<";
            s += el.name;
            s += ": ";
            s += el.opt;
            s += "> ";
        }
    });
    return s;
}
class Err {
    constructor(s) {
        this.error = s;
    }
    toString() {
        return `${this.error}`;
    }
}
function warning(s) {
    print(`Krohnkite.WARNING: ${s}`);
}
function info(s) {
    print(`Krohnkite: ${s}`);
}
function clip(value, min, max) {
    if (value < min)
        return min;
    if (value > max)
        return max;
    return value;
}
function slide(value, step) {
    if (step === 0)
        return value;
    return Math.floor(value / step + 1.000001) * step;
}
function matchWords(str, words) {
    for (let i = 0; i < words.length; i++) {
        if (str.indexOf(words[i]) >= 0)
            return i;
    }
    return -1;
}
function wrapIndex(index, length) {
    if (index < 0)
        return index + length;
    if (index >= length)
        return index - length;
    return index;
}
function getRandomInt(max, signed = false) {
    const randomNumber = Math.floor(Math.random() * max);
    if (signed && Math.random() < 0.5)
        return -randomNumber;
    return randomNumber;
}
function getTime() {
    const time = new Date().getTime();
    if (Number.isNaN(time)) {
        warning("getTime is Nan, wrong Time");
        return 0;
    }
    return time;
}
function partitionArray(array, predicate) {
    return array.reduce((parts, item, index) => {
        parts[predicate(item, index) ? 0 : 1].push(item);
        return parts;
    }, [[], []]);
}
function partitionArrayBySizes(array, sizes) {
    let base = 0;
    const chunks = sizes.map((size) => {
        const chunk = array.slice(base, base + size);
        base += size;
        return chunk;
    });
    chunks.push(array.slice(base));
    return chunks;
}
function overlap(min1, max1, min2, max2) {
    const min = Math.min;
    const max = Math.max;
    const dx = max(0, min(max1, max2) - max(min1, min2));
    return dx > 0;
}
class SurfaceCfg {
    constructor(userLabel, cfg) {
        this.userLabel = userLabel;
        this.cfg = cfg;
    }
    toString() {
        return `Surface: Label: ${this.userLabel} cfg: ${this.cfg}`;
    }
}
function surfaceIdParse(id) {
    let i1 = id.indexOf("@");
    let i2 = id.indexOf("#");
    let outputName = i1 !== -1 ? id.slice(0, i1) : id;
    let activity = i1 !== -1 && i2 !== -1 ? id.slice(i1 + 1, i2) : "";
    let desktopName = i2 !== -1 ? id.slice(i2 + 1) : "";
    return [outputName, activity, desktopName];
}
function getMethodName() {
    var _a;
    var err = new Error();
    return `${(_a = err.stack) === null || _a === void 0 ? void 0 : _a.split("\n")[1].split("@")[0]}`;
}
function unCapitalize(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}
function toQRect(rect) {
    return Qt.rect(rect.x, rect.y, rect.width, rect.height);
}
function toRect(qrect) {
    return new Rect(qrect.x, qrect.y, qrect.width, qrect.height);
}
function outputIsAlive(output) {
    try {
        return !!output && typeof output.name === "string";
    }
    catch (e) {
        return false;
    }
}
function findOutputByName(workspace, name) {
    for (const output of workspace.screens) {
        if (outputIsAlive(output) && output.name === name)
            return output;
    }
    return null;
}
function resolveWindowOutput(workspace, window) {
    return window && !window.deleted && outputIsAlive(window.output)
        ? window.output
        : workspace.activeScreen;
}
class Logging {
    constructor(modules, filters) {
        this._isIncludeMode = true;
        this._logModules = Logging.parseModules(modules);
        this._filters = this.parseFilters(filters);
        this._started = getTime();
    }
    send(module, action, message, filter) {
        if (module !== undefined && !this.isModuleOn(module))
            return;
        if (filter !== undefined) {
            if (this.isFiltered(filter))
                return;
        }
        this._print(module, action, message);
    }
    print(module, action, message) {
        this._print(module, action, message);
    }
    isModuleOn(module) {
        return this._logModules.has(module);
    }
    isFiltered(filter) {
        if (this._filters === null)
            return false;
        let key;
        for (key in filter) {
            if (this._filters[key] == null || filter[key] == null)
                continue;
            const isContain = DriverWindow.isContain(this._filters[key], filter[key][0]);
            if (this._isIncludeMode) {
                return isContain ? false : true;
            }
            else {
                return isContain ? true : false;
            }
        }
        return false;
    }
    static parseModules(modules) {
        let logModules = new Set();
        for (const module of modules) {
            const userModules = Logging._logParseUserModules(module[0], module[1]);
            if (userModules !== null) {
                logModules = new Set([...logModules, ...userModules]);
            }
        }
        return logModules;
    }
    parseFilters(filters) {
        if (filters.length === 0 || (filters.length === 1 && filters[0] === ""))
            return null;
        let logFilters;
        if (filters[0] !== "" && filters[0][0] === "!") {
            this._isIncludeMode = false;
            filters[0] = filters[0].slice(1);
        }
        logFilters = { winClass: null };
        for (const filter of filters) {
            const filterParts = filter.split("=");
            if (filterParts.length !== 2) {
                warning(`Invalid Log filter: ${filter}.Every filter have contain "=" equal sign`);
                continue;
            }
            if (filterParts[0].toLowerCase() === "winclass") {
                logFilters.winClass = filterParts[1].split(":");
                continue;
            }
            warning(`Unknown Log filter name:${filterParts[0]} in filter ${filter}.`);
            continue;
        }
        return logFilters;
    }
    _print(module, action, message) {
        const timestamp = (getTime() - this._started) / 1000;
        print(`Krohnkite.log [${timestamp}], ${module !== undefined ? `[${module}]` : ""} ${action !== undefined ? action : ""} ${message !== undefined ? message : ""}`);
    }
    static _logParseUserModules(logPartition, userStr) {
        let submodules;
        let includeMode = true;
        if (userStr.length === 0) {
            return new Set(logPartition.modules);
        }
        if (userStr[0] !== "" && userStr[0][0] === "!") {
            includeMode = false;
            userStr[0] = userStr[0].substring(1);
            submodules = new Set(logPartition.modules);
        }
        else {
            submodules = new Set();
        }
        for (let moduleStr of userStr) {
            if (moduleStr.includes("-")) {
                const range = moduleStr.split("-");
                if (range.length !== 2) {
                    warning(`Invalid module range:${range} in ${moduleStr}, ignoring module ${logPartition.name} `);
                    return null;
                }
                const start = validateNumber(range[0]);
                let end;
                if (range[1] === "") {
                    end = logPartition.modules.length;
                }
                else {
                    end = validateNumber(range[1]);
                }
                if (start instanceof Err || end instanceof Err) {
                    let err = start instanceof Err ? start : end;
                    warning(`Invalid module number: ${err} in ${moduleStr}, ignoring module ${logPartition.name}`);
                    return null;
                }
                if (start > end || start < 1) {
                    warning(`Invalid module range:${range}. The start must be less than end and both must be greater than zero. Module string: ${moduleStr}, ignoring module ${logPartition.name} `);
                    return null;
                }
                if (end > logPartition.modules.length) {
                    warning(`Invalid module range:${range}. The end must be less than or equal to the number of submodules:${logPartition.modules.length} in the module. Module string: ${moduleStr}, ignoring module ${logPartition.name} `);
                    return null;
                }
                if (includeMode) {
                    for (let i = start - 1; i < end; i++) {
                        submodules.add(logPartition.modules[i]);
                    }
                }
                else {
                    for (let i = start - 1; i < end; i++) {
                        submodules.delete(logPartition.modules[i]);
                    }
                }
            }
            else {
                let moduleNumber = validateNumber(moduleStr);
                if (moduleNumber instanceof Err) {
                    warning(`Invalid module number:${moduleNumber}. The module number must be a number. Module string: ${moduleStr}, ignoring module ${logPartition.name} `);
                    return null;
                }
                if (moduleNumber < 1 || moduleNumber > logPartition.modules.length) {
                    warning(`Invalid module number:${moduleNumber}. The module number must be >=1 and <= number of submodules:${logPartition.modules.length}. Module string: ${moduleStr}, ignoring module ${logPartition.name} `);
                    return null;
                }
                if (includeMode) {
                    submodules.add(logPartition.modules[moduleNumber - 1]);
                }
                else {
                    submodules.delete(logPartition.modules[moduleNumber - 1]);
                }
            }
        }
        return submodules;
    }
}
function resolveSurfaceCapacity(layoutCapacity, surfaceCapacity) {
    const layoutCap = layoutCapacity === undefined ? null : layoutCapacity;
    if (layoutCap === null && surfaceCapacity === null)
        return null;
    if (layoutCap === null || surfaceCapacity === null)
        return layoutCap || surfaceCapacity;
    return Math.min(layoutCap, surfaceCapacity);
}
function isMinimizeOvercapacityMode(mode, preventMinimize) {
    return mode === "minimize" && !preventMinimize;
}
function resolveAvailableSlots(capacity, awaitToMove, overCapacity, allowOverfill) {
    if (capacity === null)
        return overCapacity;
    const freeSlots = capacity - awaitToMove;
    if (freeSlots > 0)
        return Math.min(freeSlots, overCapacity);
    return allowOverfill ? overCapacity : 0;
}
function selectOverCapacityWindows(tileables, capacity, eviction, protectedWindows = []) {
    if (capacity === null || tileables.length <= capacity) {
        return {
            tileables: tileables.slice(),
            overCapacity: [],
            freeSlots: capacity === null ? null : capacity - tileables.length,
        };
    }
    const excess = tileables.length - capacity;
    const sorted = [...tileables].sort((a, b) => eviction === "oldest"
        ? a.window.srfTime - b.window.srfTime
        : b.focusTime - a.focusTime || b.window.srfTime - a.window.srfTime);
    const candidates = sorted.filter((win) => protectedWindows.indexOf(win) < 0);
    const pool = candidates.length >= excess ? candidates : sorted;
    const overCapacity = pool.slice(0, excess);
    const toRemove = new Set(overCapacity);
    return {
        tileables: tileables.filter((tile) => !toRemove.has(tile)),
        overCapacity,
        freeSlots: 0,
    };
}
function selectRestorableWindows(hidden, srfId, freeSlots, restoreAll) {
    const restore = [];
    let slots = freeSlots;
    for (let i = hidden.length - 1; i >= 0; i--) {
        if (!restoreAll && slots !== null && slots <= 0)
            break;
        const win = hidden[i];
        if (win.surface.id !== srfId)
            continue;
        restore.push(win);
        if (!restoreAll && slots !== null)
            slots--;
    }
    return restore;
}
class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    get maxX() {
        return this.x + this.width;
    }
    get maxY() {
        return this.y + this.height;
    }
    get center() {
        return {
            x: this.x + Math.floor(this.width / 2),
            y: this.y + Math.floor(this.height / 2),
        };
    }
    get activationPoint() {
        return { x: this.x + Math.floor(this.width / 2), y: this.y + 10 };
    }
    clone() {
        return new Rect(this.x, this.y, this.width, this.height);
    }
    equals(other) {
        return (this.x === other.x &&
            this.y === other.y &&
            this.width === other.width &&
            this.height === other.height);
    }
    gap(left, right, top, bottom) {
        return new Rect(this.x + left, this.y + top, this.width - (left + right), this.height - (top + bottom));
    }
    gap_mut(left, right, top, bottom) {
        this.x += left;
        this.y += top;
        this.width -= left + right;
        this.height -= top + bottom;
        return this;
    }
    includes(other) {
        return (this.x <= other.x &&
            this.y <= other.y &&
            other.maxX < this.maxX &&
            other.maxY < this.maxY);
    }
    includesPoint(point, part = 4) {
        const { x, y } = point;
        if (part === 0)
            return (this.x <= x &&
                x <= this.maxX &&
                this.y <= y &&
                y <= this.y + this.height / 2);
        else if (part === 1)
            return (this.x <= x &&
                x <= this.maxX &&
                y > this.y + this.height / 2 &&
                y <= this.maxY);
        else if (part === 2) {
            return (this.y <= y &&
                y <= this.maxY &&
                this.x <= x &&
                x <= this.x + this.height / 2);
        }
        else if (part === 3) {
            return (this.y <= y &&
                y <= this.maxY &&
                x > this.x + this.width / 2 &&
                x <= this.maxX);
        }
        else {
            return this.x <= x && x <= this.maxX && this.y <= y && y <= this.maxY;
        }
    }
    isTopZone(point, activeZone = 10, unit = "percents", mirror = false) {
        const { x, y } = point;
        let height = unit === "percents" ? (this.height * activeZone) / 100 : activeZone;
        const topEdge = mirror ? this.y - height : this.y;
        if (mirror)
            height = height * 2;
        return (topEdge <= y && y <= topEdge + height && this.x <= x && x <= this.maxX);
    }
    isBottomZone(point, activeZone = 10, unit = "percents", mirror = false) {
        const { x, y } = point;
        let height = unit === "percents" ? (this.height * activeZone) / 100 : activeZone;
        const bottomEdge = mirror ? this.maxY + height : this.maxY;
        if (mirror)
            height = height * 2;
        return (y >= bottomEdge - height &&
            y <= bottomEdge &&
            this.x <= x &&
            x <= this.maxX);
    }
    isLeftZone(point, activeZone = 10, unit = "percents", mirror = false) {
        const { x, y } = point;
        let wide = unit === "percents" ? (this.width * activeZone) / 100 : activeZone;
        const leftEdge = mirror ? this.x - wide : this.x;
        if (mirror)
            wide = wide * 2;
        return (leftEdge <= x && x <= leftEdge + wide && this.y <= y && y <= this.maxY);
    }
    isRightZone(point, activeZone = 10, unit = "percents", mirror = false) {
        const { x, y } = point;
        let wide = unit === "percents" ? (this.width * activeZone) / 100 : activeZone;
        const rightEdge = mirror ? this.maxX + wide : this.maxX;
        if (mirror)
            wide = wide * 2;
        return (x >= rightEdge - wide && x <= rightEdge && this.y <= y && y <= this.maxY);
    }
    subtract(other) {
        return new Rect(this.x - other.x, this.y - other.y, this.width - other.width, this.height - other.height);
    }
    intersection(other, coordinate) {
        if (coordinate === "x") {
            return Math.max(0, Math.min(this.maxX, other.maxX) - Math.max(this.x, other.x));
        }
        else {
            return Math.max(0, Math.min(this.maxY, other.maxY) - Math.max(this.y, other.y));
        }
    }
    distance(other) {
        return Math.sqrt(Math.pow((this.center.x - other.center.x), 2) +
            Math.pow((this.center.y - other.center.y), 2));
    }
    overallDimension(other, direction) {
        switch (direction) {
            case "left":
                return Math.abs(this.x - other.x);
            case "right":
                return Math.abs(this.maxX - other.maxX);
            case "up":
                return Math.abs(this.y - other.y);
            case "down":
                return Math.abs(this.maxY - other.maxY);
        }
    }
    toString() {
        return "Rect(" + [this.x, this.y, this.width, this.height].join(", ") + ")";
    }
}
class RectDelta {
    static fromRects(basis, target) {
        const diff = target.subtract(basis);
        return new RectDelta(diff.width + diff.x, -diff.x, diff.height + diff.y, -diff.y);
    }
    constructor(east, west, south, north) {
        this.east = east;
        this.west = west;
        this.south = south;
        this.north = north;
    }
    toString() {
        return ("WindowResizeDelta(" +
            [
                "east=" + this.east,
                "west=" + this.west,
                "north=" + this.north,
                "south=" + this.south,
            ].join(" ") +
            ")");
    }
}
class UniqueLifoFifo {
    constructor() {
        this.map = new Map();
    }
    push(item) {
        if (this.map.has(item))
            return false;
        this.map.set(item, item);
        return true;
    }
    pop() {
        let last;
        for (const k of this.map.keys())
            last = k;
        if (last === undefined)
            return undefined;
        this.map.delete(last);
        return last;
    }
    shift() {
        const [key] = this.map.keys();
        if (key === undefined)
            return undefined;
        this.map.delete(key);
        return key;
    }
    get size() {
        return this.map.size;
    }
    clear() {
        this.map.clear();
    }
}
function separate(str, separator) {
    if (!str || typeof str !== "string")
        return [];
    return str
        .split(separator)
        .map((part) => part.trim())
        .filter((part) => part != "");
}
function isNumeric(s) {
    if (typeof s != "string")
        return false;
    return !isNaN(s) && !isNaN(parseFloat(s));
}
function parseNumber(value, float = false) {
    if (!isNumeric(value)) {
        return new Err("Invalid number");
    }
    if (float) {
        return parseFloat(value);
    }
    else {
        return parseInt(value);
    }
}
function validateNumber(value, from, to, float = false) {
    let num;
    if (typeof value === "number") {
        num = value;
    }
    else {
        num = parseNumber(value, float);
        if (num instanceof Err) {
            return num;
        }
    }
    if (from !== undefined && num < from) {
        return new Err(`Number must be greater than or equal to ${from}`);
    }
    else if (to !== undefined && num > to) {
        return new Err(`Number must be less than or equal to ${to}`);
    }
    return num;
}
function validateNumberWithDefault(value, defaultValue, errMess, from, to, float = false) {
    let num;
    const err = `validateNumber: ${errMess}. param: ${value}. Error:`;
    if (typeof value === "number") {
        num = value;
    }
    else {
        num = parseNumber(value, float);
        if (num instanceof Err) {
            warning(`${err}${num.toString()}`);
            return defaultValue;
        }
    }
    if (from !== undefined && num < from) {
        warning(`${err}Number must be greater than or equal to ${from}`);
        return defaultValue;
    }
    else if (to !== undefined && num > to) {
        warning(`${err}Number must be less than or equal to ${to}`);
        return defaultValue;
    }
    return num;
}
class windRose {
    constructor(direction) {
        switch (direction) {
            case "0":
                this.direction = 0;
                break;
            case "1":
                this.direction = 1;
                break;
            case "2":
                this.direction = 2;
                break;
            case "3":
                this.direction = 3;
                break;
            default:
                this.direction = 0;
        }
    }
    get north() {
        return this.direction === 0;
    }
    get east() {
        return this.direction === 1;
    }
    get south() {
        return this.direction === 2;
    }
    get west() {
        return this.direction === 3;
    }
    cwRotation() {
        this.direction = (this.direction + 1) % 4;
    }
    ccwRotation() {
        this.direction = this.direction - 1 >= 0 ? this.direction - 1 : 3;
    }
    toString() {
        switch (this.direction) {
            case 0: {
                return "North";
            }
            case 1: {
                return "East";
            }
            case 2: {
                return "South";
            }
            case 3: {
                return "West";
            }
            default: {
                return "Unknown";
            }
        }
    }
}
class WrapperMap {
    constructor(hasher, wrapper) {
        this.hasher = hasher;
        this.wrapper = wrapper;
        this.items = {};
        this.objects = {};
    }
    add(item) {
        const key = this.hasher(item);
        if (this.has(item))
            return this.items[key];
        const wrapped = this.wrapper(item);
        this.items[key] = wrapped;
        this.objects[key] = item;
        return wrapped;
    }
    has(item) {
        return this.items[this.hasher(item)] !== undefined;
    }
    get(item) {
        const key = this.hasher(item);
        return this.items[key] || null;
    }
    getByKey(key) {
        return this.items[key] || null;
    }
    getKeyObject(key) {
        return this.objects[key] || null;
    }
    remove(item) {
        const key = this.hasher(item);
        delete this.objects[key];
        return delete this.items[key];
    }
    clear() {
        this.items = {};
        this.objects = {};
    }
    length() {
        return Object.keys(this.items).length;
    }
    entries() {
        return Object.keys(this.items).map((k) => [this.objects[k], this.items[k]]);
    }
    [Symbol.iterator]() {
        const keys = Object.keys(this.items);
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < keys.length) {
                    return { value: self.items[keys[index++]], done: false };
                }
                return { value: undefined, done: true };
            },
        };
    }
}
