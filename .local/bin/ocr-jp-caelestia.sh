#!/bin/bash
# OCR Japanese text from screen → clipboard + translation notification

set -euo pipefail

TMP_IMG="/tmp/ocr_$$.png"

AREA=$(slurp -b "#00000011" -c "#66666666" -w 2 2>/dev/null) || { notify-send -u critical "OCR-JP Error" "Selección cancelada."; exit 1; }

grim -g "$AREA" "$TMP_IMG" 2>/dev/null

if [ ! -s "$TMP_IMG" ]; then
    notify-send -u critical "OCR-JP Error" "No se pudo capturar la pantalla."
    exit 1
fi

JAPANESE_TEXT=$(tesseract "$TMP_IMG" stdout -l jpn --psm 6 2>/dev/null | sed '/^$/d' | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | sed 's/ //g' | tr -d '\n' | tr -d '\r')

if [ -z "$JAPANESE_TEXT" ]; then
    notify-send -u critical "OCR-JP Error" "No se detectó texto en japonés."
    rm -f "$TMP_IMG"
    exit 1
fi

echo -n "$JAPANESE_TEXT" | wl-copy

TRANSLATED=$(trans -b -s ja -t es "$JAPANESE_TEXT" 2>/dev/null) || TRANSLATED=""

export DBUS_SESSION_BUS_ADDRESS="unix:path=/run/user/$(id -u)/bus"

if [ -n "$TRANSLATED" ]; then
    notify-send "OCR Japonés" "🇯🇵 $JAPANESE_TEXT\n\n🇪🇸 $TRANSLATED"
else
    notify-send "OCR-JP" "Copiado: $JAPANESE_TEXT (Traducción no disponible)"
fi

rm -f "$TMP_IMG"
