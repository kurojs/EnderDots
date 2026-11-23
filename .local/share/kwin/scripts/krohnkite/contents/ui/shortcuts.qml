/*
    SPDX-FileCopyrightText: 2018 Eon S. Jeon <esjeon@hyunmu.am>
    SPDX-FileCopyrightText: 2024 Vjatcheslav V. Kolchkov <akl334@protonmail.ch>

    SPDX-License-Identifier: MIT
*/


import QtQuick;
import org.kde.kwin;

Item {
    id: shortcuts;

    ShortcutHandler {
        id: focusNext;

        name: "KrohnkiteFocusNext";
        text: "Krohnkite: Focus Next";
        sequence: "Meta+.";
    }
    ShortcutHandler {
        id: focusPrev;

        name: "KrohnkiteFocusPrev";
        text: "Krohnkite: Focus Previous";
        sequence: "Meta+,";
    }
    ShortcutHandler {
        id: focusLeft;

        name: "KrohnkiteFocusLeft";
        text: "Krohnkite: Focus Left";
        sequence: "Meta+H";
    }
    ShortcutHandler {
        id: focusRight;

        name: "KrohnkiteFocusRight";
        text: "Krohnkite: Focus Right";
        sequence: "Meta+L";
    }
    ShortcutHandler {
        id: toggleDock;

        name: "KrohnkitetoggleDock";
        text: "Krohnkite: Toggle Dock";
        sequence: "";
    }
    ShortcutHandler {
        id: focusDown;

        name: "KrohnkiteFocusDown";
        text: "Krohnkite: Focus Down";
        sequence: "Meta+J";
    }
    ShortcutHandler {
        id: focusUp;

        name: "KrohnkiteFocusUp";
        text: "Krohnkite: Focus Up";
        sequence: "Meta+K";
    }
    ShortcutHandler {
        id: shiftDown;

        name: "KrohnkiteShiftDown";
        text: "Krohnkite: Move Down/Next";
        sequence: "Meta+Shift+J";
    }
    ShortcutHandler {
        id: shiftUp;

        name: "KrohnkiteShiftUp";
        text: "Krohnkite: Move Up/Prev";
        sequence: "Meta+Shift+K";
    }
    ShortcutHandler {
        id: shiftLeft;

        name: "KrohnkiteShiftLeft";
        text: "Krohnkite: Move Left";
        sequence: "Meta+Shift+H";
    }
    ShortcutHandler {
        id: shiftRight;

        name: "KrohnkiteShiftRight";
        text: "Krohnkite: Move Right";
        sequence: "Meta+Shift+L";
    }
    ShortcutHandler {
        id: growHeight;

        name: "KrohnkiteGrowHeight";
        text: "Krohnkite: Grow Height";
        sequence: "Meta+Ctrl+J";
    }
    ShortcutHandler {
        id: shrinkHeight;

        name: "KrohnkiteShrinkHeight";
        text: "Krohnkite: Shrink Height";
        sequence: "Meta+Ctrl+K";
    }
    ShortcutHandler {
        id: shrinkWidth;

        name: "KrohnkiteShrinkWidth";
        text: "Krohnkite: Shrink Width";
        sequence: "Meta+Ctrl+H";
    }
    ShortcutHandler {
        id: growWidth;

        name: "KrohnkitegrowWidth";
        text: "Krohnkite: Grow Width";
        sequence: "Meta+Ctrl+L";
    }
    ShortcutHandler {
        id: increase;

        name: "KrohnkiteIncrease";
        text: "Krohnkite: Increase";
        sequence: "Meta+I";
    }
    ShortcutHandler {
        id: decrease;

        name: "KrohnkiteDecrease";
        text: "Krohnkite: Decrease";
        sequence: "Meta+D";
    }
    ShortcutHandler {
        id: toggleFloat;

        name: "KrohnkiteToggleFloat";
        text: "Krohnkite: Toggle Float";
        sequence: "Meta+F";
    }
    ShortcutHandler {
        id: floatAll;

        name: "KrohnkiteFloatAll";
        text: "Krohnkite: Toggle Float All";
        sequence: "Meta+Shift+F";
    }
    ShortcutHandler {
        id: nextLayout;

        name: "KrohnkiteNextLayout";
        text: "Krohnkite: Next Layout";
        sequence: "Meta+\\";
    }
    ShortcutHandler {
        id: previousLayout;

        name: "KrohnkitePreviousLayout";
        text: "Krohnkite: Previous Layout";
        sequence: "Meta+|";
    }
    ShortcutHandler {
        id: layoutChooser;

        name: "KrohnkiteLayoutChooser";
        text: "Krohnkite: Layout Chooser";
        sequence: "";
    }
    ShortcutHandler {
        id: rotate;

        name: "KrohnkiteRotate";
        text: "Krohnkite: Rotate";
        sequence: "Meta+R";
    }
    ShortcutHandler {
        id: rotatePart;

        name: "KrohnkiteRotatePart";
        text: "Krohnkite: Rotate Part";
        sequence: "Meta+Shift+R";
    }
    ShortcutHandler {
        id: setMaster;

        name: "KrohnkiteSetMaster";
        text: "Krohnkite: Set master";
        sequence: "Meta+Return";
    }
    ShortcutHandler {
        id: raiseSurfaceCapacity;

        name: "KrohnkiteRaiseSurfaceCapacity";
        text: "Krohnkite: Raise Surface Capacity";
        sequence: "";
    }
    ShortcutHandler {
        id: lowerSurfaceCapacity;

        name: "KrohnkiteLowerSurfaceCapacity";
        text: "Krohnkite: Lower Surface Capacity";
        sequence: "";
    }
    ShortcutHandler {
        id: alterRegister;

        name: "KrohnkiteMeta";
        text: "Krohnkite: Alter Register";
        sequence: "";
    }
    ShortcutHandler {
        id: tileLayout;

        name: "KrohnkiteTileLayout";
        text: "Krohnkite: Select Layout - Tile";
        sequence: "Meta+T";
    }
    ShortcutHandler {
        id: monocleLayout;

        name: "KrohnkiteMonocleLayout";
        text: "Krohnkite: Select Layout - Monocle";
        sequence: "Meta+M";
    }
    ShortcutHandler {
        id: treeColumnLayout;

        name: "KrohnkiteTreeColumnLayout";
        text: "Krohnkite: Select Layout -  Three Column";
        sequence: "";
    }
    ShortcutHandler {
        id: spreadLayout;

        name: "KrohnkiteSpreadLayout";
        text: "Krohnkite: Select Layout - Spread";
        sequence: "";
    }
    ShortcutHandler {
        id: stairLayout;

        name: "KrohnkiteStairLayout";
        text: "Krohnkite: Select Layout - Stair";
        sequence: "";
    }
    ShortcutHandler {
        id: floatingLayout;

        name: "KrohnkiteFloatingLayout";
        text: "Krohnkite: Select Layout - Floating";
        sequence: "";
    }
    ShortcutHandler {
        id: quarterLayout;

        name: "KrohnkiteQuarterLayout";
        text: "Krohnkite: Select Layout - Quarter";
        sequence: "";
    }
    ShortcutHandler {
        id: stackedLayout;

        name: "KrohnkiteStackedLayout";
        text: "Krohnkite: Select Layout - Stacked";
        sequence: "";
    }
    ShortcutHandler {
        id: bTreeLayout;

        name: "KrohnkiteBTreeLayout";
        text: "Krohnkite: Select Layout - BTree";
        sequence: "";
    }
    ShortcutHandler {
        id: spiralLayout;

        name: "KrohnkiteSpiralLayout";
        text: "Krohnkite: Select Layout - Spiral";
        sequence: "";
    }
    ShortcutHandler {
        id: columnsLayout;

        name: "KrohnkiteColumnsLayout";
        text: "Krohnkite: Select Layout - Columns";
        sequence: "";
    }
    ShortcutHandler {
        id: cascadeLayout;

        name: "KrohnkiteCascadeLayout";
        text: "Krohnkite: Select Layout - Cascade";
        sequence: "";
    }

    property var shortcutList: [
        { name: "FocusNextSC", hdl: focusNext },
        { name: "FocusPrevSC", hdl: focusPrev },
        { name: "FocusLeftSC", hdl: focusLeft },
        { name: "FocusRightSC", hdl: focusRight },
        { name: "ToggleDockSC", hdl: toggleDock },
        { name: "FocusDownSC", hdl: focusDown },
        { name: "FocusUpSC", hdl: focusUp },
        { name: "MoveDownSC", hdl: shiftDown },
        { name: "MoveUpSC", hdl: shiftUp },
        { name: "MoveLeftSC", hdl: shiftLeft },
        { name: "MoveRightSC", hdl: shiftRight },
        { name: "GrowHeightSC", hdl: growHeight },
        { name: "ShrinkHeightSC", hdl: shrinkHeight },
        { name: "ShrinkWidthSC", hdl: shrinkWidth },
        { name: "GrowWidthSC", hdl: growWidth },
        { name: "IncreaseSC", hdl: increase },
        { name: "DecreaseSC", hdl: decrease },
        { name: "ToggleFloatSC", hdl: toggleFloat },
        { name: "ToggleFloatAllSC", hdl: floatAll },
        { name: "NextLayoutSC", hdl: nextLayout },
        { name: "PreviousLayoutSC", hdl: previousLayout },
        { name: "LayoutChooserSC", hdl: layoutChooser },
        { name: "RotateSC", hdl: rotate },
        { name: "RotatePartSC", hdl: rotatePart },
        { name: "SetMasterSC", hdl: setMaster },
        { name: "RaiseSurfaceCapacitySC", hdl: raiseSurfaceCapacity },
        { name: "LowerSurfaceCapacitySC", hdl: lowerSurfaceCapacity },
        { name: "AlterRegisterSC", hdl: alterRegister },
        { name: "SetTileLayoutSC", hdl: tileLayout },
        { name: "SetMonocleLayoutSC", hdl: monocleLayout },
        { name: "SetThreeColumnLayoutSC", hdl: treeColumnLayout },
        { name: "SetSpreadLayoutSC", hdl: spreadLayout },
        { name: "SetStairLayoutSC", hdl: stairLayout },
        { name: "SetFloatingLayoutSC", hdl: floatingLayout },
        { name: "SetQuarterLayoutSC", hdl: quarterLayout },
        { name: "SetStackedLayoutSC", hdl: stackedLayout },
        { name: "SetColumnsLayoutSC", hdl: columnsLayout },
        { name: "SetSpiralLayoutSC", hdl: spiralLayout },
        { name: "SetBinaryTreeLayoutSC", hdl: bTreeLayout },
        { name: "SetCascadeLayoutSC", hdl: cascadeLayout }
    ];

}
