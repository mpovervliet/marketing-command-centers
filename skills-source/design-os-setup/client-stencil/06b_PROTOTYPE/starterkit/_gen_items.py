#!/usr/bin/env python3
"""
_gen_items.py
=============
Voorbeeldgenerator volgens het patroon uit ../Generator-Patroon.md.

Regels die dit script bewust afdwingt:
  - data en presentatie gescheiden: alle inhoud komt uit _data/items.json
  - deterministisch: dezelfde data geeft byte-identieke output, geen tijdstempels
  - blok-markers: de head-sectie staat tussen <!-- seo-head --> en <!-- /seo-head -->
    zodat een tweede pass meta kan herschrijven zonder de pagina te herbouwen
  - telbaar: het script drukt invoer- en uitvoeraantallen af, zodat een dubbele
    slug of een stille overschrijving direct opvalt

Gebruik:
  python _gen_items.py

Gegenereerde bestanden nooit met de hand editen: pas de JSON of dit script aan.
"""

from __future__ import annotations

import html
import json
import sys
from pathlib import Path

ROOT = Path(__file__).parent.resolve()
DATA = ROOT / "_data" / "items.json"

PAGE = """<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex,nofollow">
<title>{titel} | prototype</title>
<link rel="stylesheet" href="../css/theme.css">
<!-- seo-head -->
<meta name="description" content="{intro_attr}">
<!-- /seo-head -->
</head>
<body data-page="{template}" data-pr-id="{pr_id}" data-ddr="{ddr}">

<div class="proto-badge" role="note">Prototype, geen opgeleverde website</div>

<header class="site-header">
  <div class="wrap header-in">
    <a class="logo" href="../index.html">Terug naar start</a>
  </div>
</header>

<main id="main">
  <section class="hero">
    <div class="wrap">
      <h1>{titel}</h1>
      <p class="lead">{intro}</p>
      <a class="btn btn-primary" href="{cta_doel}">{cta_label}</a>
    </div>
  </section>
  <section class="section">
    <div class="wrap">
      <h2>Kenmerken</h2>
      <ul>
{kenmerken}
      </ul>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="wrap"><p>Prototype ter toetsing van ontwerpbeslissingen.</p></div>
</footer>

<script src="../js/app.js"></script>
</body>
</html>
"""


def main() -> None:
    if not DATA.exists():
        sys.exit(f"FOUT: {DATA} niet gevonden")
    payload = json.loads(DATA.read_text(encoding="utf-8"))
    items = payload["items"]
    template = payload.get("template", "detail")
    out_dir = ROOT / payload.get("map", "detail")
    out_dir.mkdir(parents=True, exist_ok=True)

    slugs = [i["slug"] for i in items]
    doubles = {s for s in slugs if slugs.count(s) > 1}
    if doubles:
        sys.exit(f"FOUT: dubbele slugs, dit zou pagina's stil overschrijven: {sorted(doubles)}")

    written = []
    for n, item in enumerate(items, start=1):
        kenmerken = "\n".join(
            f"        <li>{html.escape(k)}</li>" for k in item.get("kenmerken", [])
        )
        page = PAGE.format(
            titel=html.escape(item["titel"]),
            intro=html.escape(item.get("intro", "")),
            intro_attr=html.escape(item.get("intro", ""), quote=True),
            template=template,
            pr_id=f"PRG-01-{n:03d}",
            ddr=item.get("ddr", "GEEN DDR GEKOPPELD"),
            cta_label=html.escape(item.get("cta", {}).get("label", "Verder")),
            cta_doel=item.get("cta", {}).get("doel", "../index.html"),
            kenmerken=kenmerken,
        )
        target = out_dir / f"{item['slug']}.html"
        target.write_text(page, encoding="utf-8")
        written.append(target.name)

    zonder_ddr = [i["slug"] for i in items if not i.get("ddr") or i["ddr"].startswith(("DDR-HX", "DDR-["))]
    print(f"invoer: {len(items)} items -> uitvoer: {len(written)} bestanden in {out_dir.name}/")
    if zonder_ddr:
        print(f"LET OP: {len(zonder_ddr)} items zonder echte DDR-koppeling: {zonder_ddr[:5]}")
    print("Vergeet _gen_searchindex.py niet: die draait altijd als laatste.")


if __name__ == "__main__":
    main()
