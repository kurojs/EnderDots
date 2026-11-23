pragma ComponentBehavior: Bound

import QtQuick
import QtQuick.Layouts
import Caelestia.Config
import Caelestia.I18n
import qs.components
import qs.services

StyledRect {
    id: root

    readonly property color colour: Colours.palette.m3tertiary
    readonly property int padding: Tokens.padding.medium
    readonly property var font: Tokens.font.body.builders.small.scale(1.45).family("Nagino")

    // Japanese date parts: kanji weekday, month and day.
    readonly property list<string> weekdayKanji: ["日", "月", "火", "水", "木", "金", "土"]
    readonly property string weekdayText: root.weekdayKanji[Time.date.getDay()] ?? ""
    readonly property string monthText: (Time.date.getMonth() + 1) + "月"
    readonly property string dayText: Time.date.getDate() + "日"

    // Japanese time is 24h, independent of the locale's 12h setting.
    readonly property string hourText: String(Time.hours).padStart(2, "0")
    readonly property string minuteText: String(Time.minutes).padStart(2, "0")

    function fontFor(text: string, metricWidth: int): font {
        // We don't count seconds for the max width because it changes too often
        const scale = text === "11" ? 1.15 : Math.min(1.05, Math.max(hourMetrics.width, minMetrics.width) / metricWidth);
        return root.font.width(scale * 100).letterSpacing(scale).build();
    }

    implicitWidth: Tokens.sizes.bar.innerWidth
    implicitHeight: layout.implicitHeight + root.padding * 2

    // Flat semi-transparent square behind the clock, matching the rest of the bar.
    color: Qt.alpha(Colours.tPalette.m3surfaceContainer, 0.35)
    radius: 4

    ColumnLayout {
        id: layout

        anchors.centerIn: parent
        spacing: 3

        Loader {
            Layout.alignment: Qt.AlignHCenter
            asynchronous: true
            active: Config.bar.clock.showIcon
            visible: active

            sourceComponent: MaterialIcon {
                text: "calendar_month"
                color: root.colour
            }
        }

        Loader {
            Layout.alignment: Qt.AlignHCenter
            asynchronous: true
            active: Config.bar.clock.showDate
            visible: active

            sourceComponent: ColumnLayout {
                spacing: 0

                StyledText {
                    Layout.alignment: Qt.AlignHCenter
                    text: root.weekdayText
                    font: Tokens.font.body.builders.small.scale(0.9).family("Nagino").build()
                    color: Qt.alpha(root.colour, 0.75)
                }

                StyledText {
                    Layout.alignment: Qt.AlignHCenter
                    text: root.monthText
                    font: Tokens.font.body.builders.small.scale(0.9).family("Nagino").build()
                    color: root.colour
                }

                StyledText {
                    Layout.alignment: Qt.AlignHCenter
                    text: root.dayText
                    font: root.font.scale(1.1).build()
                    color: root.colour
                }

                StyledRect {
                    Layout.fillWidth: true
                    Layout.leftMargin: -Tokens.padding.extraSmall
                    Layout.rightMargin: -Tokens.padding.extraSmall
                    Layout.topMargin: 4
                    Layout.bottomMargin: Tokens.padding.extraSmall / 2
                    implicitHeight: 1
                    color: Colours.palette.m3outlineVariant
                }
            }
        }

        StyledText {
            Layout.alignment: Qt.AlignHCenter
            text: root.hourText
            font: root.fontFor(text, hourMetrics.width)
            color: root.colour

            TextMetrics {
                id: hourMetrics

                font: root.font.build()
                text: root.hourText
            }
        }

        StyledText {
            Layout.alignment: Qt.AlignHCenter
            text: root.minuteText
            font: root.fontFor(text, minMetrics.width)
            color: root.colour

            TextMetrics {
                id: minMetrics

                font: root.font.build()
                text: root.minuteText
            }
        }

        Loader {
            Layout.alignment: Qt.AlignHCenter
            asynchronous: true
            active: Config.bar.clock.showSeconds
            visible: active

            sourceComponent: StyledText {
                text: Time.format("ss")
                font: root.fontFor(text, secMetrics.width)
                color: root.colour

                TextMetrics {
                    id: secMetrics

                    font: root.font.build()
                    text: Time.format("ss")
                }
            }
        }
    }
}
