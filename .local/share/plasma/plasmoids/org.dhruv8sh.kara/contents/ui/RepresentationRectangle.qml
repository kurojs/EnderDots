import QtQuick
import QtQuick.Layouts
import QtQuick.Controls
import org.kde.kirigami as Kirigami
import org.kde.taskmanager as TaskManager
import "./Utils.js" as Utils


Rectangle {
    id: reptRect
    visible: root.showOnlyActive ? (hasWindows || isActive) : true
    Layout.alignment: Qt.AlignHCenter | Qt.AlignVCenter
    color: "transparent"
    function updateGeometry(w,h) {
        reptRect.Layout.minimumHeight = h
        reptRect.Layout.maximumHeight = h
        reptRect.Layout.minimumWidth = w
        reptRect.Layout.maximumWidth = w
    }

    property int pos: 0
    property bool isActive: curr_page == pos
    property var abstractTasksModel: TaskManager.AbstractTasksModel
    property var isWindow: abstractTasksModel.IsWindow
    property var virtualDesktopsRole: abstractTasksModel.VirtualDesktops
    property var demandsAttentionRole: abstractTasksModel.DemandsAttention
    property int taskCount: 0
    property bool hasWindows: taskCount>0
    property bool hasDemandingWindow: false
    property bool highlightActive: cfg.type != 0 && cfg.highlightType != 0
    property bool needsAttention: hasDemandingWindow
    property real highlightOpacity: Utils.getHighlightOpacity()
    property alias hovered: mouseArea.containsMouse

    // Active-workspace pulse (port of the YASB workspaces widget):
    //   t(phase) = (sin(2*pi*phase/period) + 1) / 2, phase starts at 0 => t = 0.5
    // Built from three eased segments so it follows the sine exactly:
    //   0.5 -> 1 (OutSine, T/4), 1 -> 0 (InOutSine, T/2), 0 -> 0.5 (InSine, T/4)
    property bool pulsing: isActive && cfg.pulseActive && highlightActive
    property real pulseT: 0.5
    SequentialAnimation {
        running: reptRect.pulsing && reptRect.visible
        loops: Animation.Infinite
        NumberAnimation {
            target: reptRect; property: "pulseT"
            from: 0.5; to: 1.0
            duration: Math.max(40, cfg.pulsePeriod) / 4
            easing.type: Easing.OutSine
        }
        NumberAnimation {
            target: reptRect; property: "pulseT"
            to: 0.0
            duration: Math.max(40, cfg.pulsePeriod) / 2
            easing.type: Easing.InOutSine
        }
        NumberAnimation {
            target: reptRect; property: "pulseT"
            to: 0.5
            duration: Math.max(40, cfg.pulsePeriod) / 4
            easing.type: Easing.InSine
        }
    }
    property var highlightColor:  {
        if(isActive) return cfg.plasmaStyleColors
        ? Kirigami.Theme.highlightColor
        : cfg.pColor
        else return cfg.plasmaSemiColors
        ? Kirigami.Theme.highlightColor
        : cfg.semiColor
    }
    property var contentColor: {
        if(isActive) return cfg.defaultAltTextColors
        ? Kirigami.Theme.textColor
        : cfg.altColor
        else return cfg.plasmaTxtColors
        ? Kirigami.Theme.textColor
        : cfg.txtColor
    }

    Timer {
        id: blinkTimer
        interval: 1000
        running: hasDemandingWindow && cfg.blinkOnAttentionRequired
        onTriggered: highlightOpacity==0?1:0
    }

    MouseArea {
        id: mouseArea
        anchors.fill: parent
        onClicked: pagerModel.changePage(pos)
        acceptedButtons: Qt.LeftButton
        hoverEnabled: true
    }

    TaskManager.TasksModel {
        id: tasksModel
        activity: activityInfo.currentActivity
        virtualDesktop: virtualDesktopInfo.desktopIds[pos]
        filterByVirtualDesktop: true
        filterByActivity: true
        onCountChanged: {
            Qt.callLater(function() {
                Utils.updateTaskCount()
            })
        }
    }
    Loader {
        id: reptLoader
        anchors.centerIn: parent
        source: Utils.getRepSource()
        onLoaded: item.widthChanged()
    }
    HighlightLoader{}
    ToolTip {
        visible: cfg.tooltipOnHover && hovered
        text: virtualDesktopInfo.desktopNames[pos]
        delay: 2000
        timeout: 3000
    }
}
