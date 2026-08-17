#!/usr/bin/env python3
"""
_gen_searchindex.py
===================
Bouwt search-index.json over de DEFINITIEVE bestandsset van het prototype.

Draai dit script altijd als laatste stap van de build. Draait het eerder, dan wijst
de zoekfunctie naar pagina's die daarna nog wijzigen of verdwijnen.

Naast de index doet dit script twee gratis QA-controles die je anders pas in de
browser vindt:
  - pagina's zonder DDR-koppeling (QA blok A1)
  - interne links die nergens naartoe wijzen (QA blok C1)

Gebruik:
  python _gen_searchindex.py
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).parent.resolve()
OUT = ROOT / "search-index.json"
SKIP_DIRS = {".git", "_data", "__pycache__", "assets", "css", "js"}

TAGS = re.compile(r"<(script|style)[^>]*>.*?</\1>", re.S | re.I)
MARKUP = re.compile(r"<[^>]+>")
TITLE = re.compile(r"<title>(.*?)</title>", re.S | re.I)
DDR = re.compile(r'data-ddr="([^"]*)"')
HREF = re.compile(r'href="([^"#?:]+\.html)[^"]*"')


def pages() -> list[Path]:
    return sorted(
        p for p in ROOT.rglob("*.html")
        if not any(part in SKIP_DIRS or part.startswith("_") for part in p.relative_to(ROOT).parts[:-1])
    )


def main() -> None:
    index, zonder_ddr, kapot = [], [], []
    files = pages()
    bestaand = {p.resolve() for p in files}

    for path in files:
        raw = path.read_text(encoding="utf-8", errors="ignore")
        titel_match = TITLE.search(raw)
        titel = (titel_match.group(1).strip() if titel_match else path.stem).split("|")[0].strip()
        tekst = MARKUP.sub(" ", TAGS.sub(" ", raw))
        tekst = " ".join(tekst.split())[:1200]
        url = path.relative_to(ROOT).as_posix()
        index.append({"url": url, "titel": titel, "tekst": tekst})

        ddr = DDR.search(raw)
        if not ddr or not ddr.group(1) or ddr.group(1).startswith(("GEEN", "DDR-HX", "DDR-[")):
            zonder_ddr.append(url)

        for href in HREF.findall(raw):
            doel = (path.parent / href).resolve()
            if doel not in bestaand:
                kapot.append(f"{url} -> {href}")

    OUT.write_text(json.dumps(index, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"search-index.json geschreven: {len(index)} pagina's")
    print(f"QA A1, pagina's zonder DDR-koppeling: {len(zonder_ddr)}")
    for u in zonder_ddr[:10]:
        print(f"  - {u}")
    print(f"QA C1, gebroken interne links: {len(kapot)}")
    for k in kapot[:10]:
        print(f"  - {k}")
    if zonder_ddr or kapot:
        print("Beide tellers horen 0 te zijn voordat je publiceert.")


if __name__ == "__main__":
    main()
