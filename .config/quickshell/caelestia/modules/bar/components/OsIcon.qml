import QtQuick
import Caelestia.Config
import qs.components
import qs.components.effects
import qs.services
import qs.utils

Item {
    id: root

    readonly property real logoSize: Tokens.sizes.bar.innerWidth - Tokens.padding.small
    // A file path points at user artwork: show it as-is instead of tinting it.
    readonly property bool isFileLogo: SysInfo.osLogo.startsWith("file://")

    implicitWidth: logoSize
    implicitHeight: logoSize

    MouseArea {
        anchors.fill: parent
        cursorShape: Qt.PointingHandCursor
        onClicked: {
            const screenState = ShellState.forActive();
            screenState.launcher = !screenState.launcher;
        }
    }

    Loader {
        asynchronous: true
        anchors.centerIn: parent
        sourceComponent: SysInfo.isDefaultLogo ? caelestiaLogo : distroIcon
    }

    Component {
        id: caelestiaLogo

        Logo {
            implicitWidth: root.logoSize
            implicitHeight: root.logoSize
        }
    }

    Component {
        id: distroIcon

        Loader {
            // User artwork (png/gif) keeps its own colours; icon theme names
            // keep the theme tint.
            sourceComponent: root.isFileLogo ? rawLogo : tintedLogo
        }
    }

    Component {
        id: rawLogo

        Item {
            implicitWidth: root.logoSize
            implicitHeight: root.logoSize

            // AnimatedImage also renders still images, so one component covers
            // both the png and the gif variant of the logo.
            AnimatedImage {
                anchors.fill: parent
                source: SysInfo.osLogo
                sourceSize: Qt.size(192, 192)
                fillMode: Image.PreserveAspectFit
                smooth: true
            }
        }
    }

    Component {
        id: tintedLogo

        ColouredIcon {
            source: SysInfo.osLogo
            implicitSize: root.logoSize
            colour: Colours.palette.m3tertiary
        }
    }
}
