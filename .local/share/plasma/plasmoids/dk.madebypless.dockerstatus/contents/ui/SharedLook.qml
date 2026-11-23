import QtQuick
import QtCore
import Qt.labs.folderlistmodel
import org.kde.plasma.plasma5support as P5Support
import "../code/look.js" as Look

// Reads the shared look (~/.config/madebypless-widgets/look.json), reads it again whenever the
// file changes, and writes it. This file is identical in every widget.
Item {
    id: shared

    visible: false

    readonly property string dir: decodeURIComponent(StandardPaths.writableLocation(StandardPaths.GenericConfigLocation)
        .toString().replace(/^file:\/\//, "")) + "/madebypless-widgets"
    readonly property string path: dir + "/look.json"

    // The shared look, or null when it hasn't been saved yet.
    property var values: null
    // True once the file has been read the first time.
    property bool loaded: false
    // Numbers the reads; see Look.readCommand().
    property int readSeq: 0

    signal saved()

    function reload() {
        exec.connectSource(Look.readCommand(dir, path, ++readSeq))
    }

    function save(look) {
        exec.connectSource(Look.writeCommand(dir, path, look))
    }

    Component.onCompleted: reload()

    P5Support.DataSource {
        id: exec
        engine: "executable"
        onNewData: (sourceName, data) => {
            disconnectSource(sourceName)
            if (sourceName.startsWith("mkdir -p " + Look.shellQuote(shared.dir) + " && cat ")) {
                shared.values = Look.parse(data.stdout || "")
                shared.loaded = true
                // The folder exists now; point the watcher at it in case it was just created.
                watcher.folder = "file://" + shared.dir
            } else {
                // The write carries on in the background; the folder watcher reloads once it's done.
                shared.saved()
            }
        }
    }

    // Watches the folder: saving replaces look.json, which makes the model refresh. The read
    // waits a moment, so it doesn't catch the folder halfway through a save.
    FolderListModel {
        id: watcher
        nameFilters: ["look.json"]
        showDirs: false
        onStatusChanged: if (status === FolderListModel.Ready && shared.loaded) reloadDelay.restart()
    }

    Timer {
        id: reloadDelay
        interval: 250
        onTriggered: shared.reload()
    }
}
