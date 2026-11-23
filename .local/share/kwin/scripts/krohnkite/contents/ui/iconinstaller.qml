/*
    SPDX-FileCopyrightText: 2024 Vjatcheslav V. Kolchkov <akl334@protonmail.ch>
    SPDX-FileCopyrightText: 2026 Krohnkite contributors

    SPDX-License-Identifier: MIT
*/

import QtQuick 2.15
import org.kde.plasma.plasma5support as Plasma5Support

Item {
    Plasma5Support.DataSource {
        id: installer
        engine: "executable"
        connectedSources: []
        onNewData: function(sourceName, data) {
            disconnectSource(sourceName);
            if (data["exit code"] !== 0)
                console.warn("KROHNKITE: SVG icon installation failed: " + data.stderr);
            else if (data.stderr)
                console.warn("KROHNKITE: SVG icon installation warning: " + data.stderr);
        }

        function install() {
            var path = decodeURIComponent(String(Qt.resolvedUrl("../code/install-icons.py")))
                .replace(/^file:\/\//, "");
            connectSource("python3 '" + path.replace(/'/g, "'\\''") + "'");
        }
    }

    function install() {
        installer.install();
    }
}
