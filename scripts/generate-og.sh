#!/usr/bin/env bash
# Generate the Open Graph / Twitter card image at 1200x630.
#
# Usage:   bash scripts/generate-og.sh
# Outputs: public/og-image.png
#          public/twitter-image.png  (identical copy)
#
# Requires: ImageMagick `convert` (preinstalled on most Linux distros, brew on macOS).
# No Node, no npm deps. Re-run any time the copy needs to change.

set -euo pipefail
cd "$(dirname "$0")/.."

W=1200
H=630
BG="#0f0f12"
FG="#f0f2f4"
MUTED="#9aa0aa"
ACCENT="#53a6ff"

# Fonts. Falls back to ImageMagick's default if a path isn't present.
HERO_FONT="${HERO_FONT:-/usr/share/fonts/truetype/inter-zorin-os/Inter-Bold.ttf}"
TOP_FONT="${TOP_FONT:-/usr/share/fonts/truetype/inter-zorin-os/Inter-Medium.ttf}"
URL_FONT="${URL_FONT:-/usr/share/fonts/truetype/jetbrains-mono-zorin-os/JetBrainsMono-Regular.ttf}"

mkdir -p public

convert -size "${W}x${H}" "xc:${BG}" \
  -gravity NorthWest \
    -font "${URL_FONT}" -pointsize 22 -fill "${MUTED}" \
    -annotate +72+72 "raihan-js.github.io" \
  -gravity West \
    -font "${TOP_FONT}" -pointsize 38 -fill "${MUTED}" \
    -annotate +72-130 "Raihan Sikder" \
  -gravity West \
    -font "${HERO_FONT}" -pointsize 130 -fill "${FG}" \
    -annotate +68-30 "AI/ML Engineer" \
  -gravity West \
    -font "${TOP_FONT}" -pointsize 30 -fill "${MUTED}" \
    -annotate +72+80 "Trains small language models from scratch  ·  CTO @ ClarioScope AI" \
  -gravity SouthEast \
    -font "${URL_FONT}" -pointsize 20 -fill "${ACCENT}" \
    -annotate +72+72 "r" \
  public/og-image.png

cp public/og-image.png public/twitter-image.png

echo "Generated:"
identify -format "  %f  %wx%h  %b\n" public/og-image.png public/twitter-image.png
