#!/usr/bin/env bash
# deploy.sh
# Publiceert het prototype in 1 commando: toevoegen, vastleggen met tijdstempel, pushen.
# De statische hosting bouwt daarna automatisch, in de orde van een minuut.
#
# Gebruik:  bash deploy.sh            of:  bash deploy.sh "Korte omschrijving"
#
# Draai dit lokaal. Een cloud-sessie kan doorgaans geen bulk-content pushen;
# de sessie levert de bestanden, jij draait dit script.

set -euo pipefail
cd "$(dirname "$0")"

if [ ! -d .git ]; then
  echo "Geen git-repo in deze map. Eerst eenmalig opzetten, zie README.md."
  exit 1
fi

# Waarschuwing bij bestanden die niet in een publicatie horen (QA blok B3).
verdacht=$(find . -path ./.git -prune -o -type f \
  \( -name "*z_old*" -o -name "*_tmp*" -o -name "*-tmp*" -o -name "*_archief*" -o -name "*_preview*" -o -name "*-kies*" \) -print || true)
if [ -n "$verdacht" ]; then
  echo "LET OP: werk- of archiefbestanden gevonden in de publicatie:"
  echo "$verdacht" | sed 's/^/  - /'
  read -r -p "Toch doorgaan? (j/n) " antwoord
  [ "$antwoord" = "j" ] || exit 1
fi

git add -A

if [ -z "$(git status --porcelain)" ]; then
  echo "Niets gewijzigd, niets te publiceren."
  exit 0
fi

stamp=$(date "+%Y-%m-%d %H:%M")
if [ $# -ge 1 ] && [ -n "$1" ]; then
  commit="$1 ($stamp)"
else
  commit="Update: $stamp"
fi

git commit -m "$commit"
git push origin main

hash=$(git rev-parse --short HEAD)
echo
echo "Gepubliceerd. Commit: $hash"
echo "Noteer deze hash bij de QA-scorekaart in ../Prototype-Register.md."
echo "Doe daarna de statuscheck op de vijf vaste URL's uit ../Prototype-QA-Checklist.md."
