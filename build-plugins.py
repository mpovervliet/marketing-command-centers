#!/usr/bin/env python3
"""
build-plugins.py
================
Rebuild Marketing Command Center .plugin bundles vanuit skills-source/.

Werkwijze:
  1. Lees plugin-map.json (mapping skill -> plugin)
  2. Voor elke plugin:
     - Valideer dat elke genoemde skill bestaat in skills-source/
     - Valideer dat SKILL.md folded-scalar frontmatter heeft (description: >)
     - Bouw plugin-folder in een tempdir
     - Schrijf .claude-plugin/plugin.json + README.md
     - Zip folder naar dist/<plugin-name>.plugin
  3. Print samenvatting

Usage:
  python build-plugins.py            # build alle plugins
  python build-plugins.py google-ads-command-center   # build één plugin

Dependencies:
  - Python 3.8+ (geen externe packages)
"""

from __future__ import annotations

import json
import re
import shutil
import sys
import tempfile
import zipfile
from pathlib import Path

ROOT = Path(__file__).parent.resolve()
SKILLS_SOURCE = ROOT / "skills-source"
PLUGIN_MAP = ROOT / "plugin-map.json"
DIST = ROOT / "dist"
PLUGINS_DIR = ROOT / "plugins"
MARKETPLACE_FILE = ROOT / ".claude-plugin" / "marketplace.json"


def load_config() -> dict:
    if not PLUGIN_MAP.exists():
        sys.exit(f"FOUT: {PLUGIN_MAP} niet gevonden")
    with open(PLUGIN_MAP, "r", encoding="utf-8") as f:
        return json.load(f)


def validate_skill(skill_name: str) -> tuple[bool, str]:
    """Return (is_ok, error_message). Checks existence + folded-scalar frontmatter."""
    skill_dir = SKILLS_SOURCE / skill_name
    if not skill_dir.is_dir():
        return False, f"skill-folder ontbreekt: {skill_dir}"
    skill_md = skill_dir / "SKILL.md"
    if not skill_md.exists():
        return False, f"SKILL.md ontbreekt: {skill_md}"
    content = skill_md.read_text(encoding="utf-8")
    # Pak frontmatter
    fm_match = re.match(r"^---\n(.*?)\n---\n", content, re.DOTALL)
    if not fm_match:
        return False, f"geen YAML frontmatter in {skill_md}"
    fm = fm_match.group(1)
    # Accepteer folded-scalar (description: >) OF double-quoted single line
    folded = re.search(r"^description:\s*>\s*\n((?:  .*\n?)+)", fm, re.MULTILINE)
    quoted = re.search(r'^description:\s*"(.+)"\s*$', fm, re.MULTILINE)
    if folded:
        desc_text = folded.group(1).replace("\n  ", " ").strip()
    elif quoted:
        desc_text = quoted.group(1)
    else:
        return False, (
            f"SKILL.md description-format onherkenbaar in {skill_md}.\n"
            f"      Gebruik 'description: >' gevolgd door ingesprongen regels, of \"double-quoted\" op één regel."
        )
    if len(desc_text) > 1024:
        return False, (
            f"description is {len(desc_text)} chars — Cowork accepteert max 1024.\n"
            f"      File: {skill_md}\n"
            f"      Kort de description in tot <1024 chars (idealiter 800-950)."
        )
    return True, ""


def build_plugin(plugin_spec: dict, author: dict) -> Path:
    name = plugin_spec["name"]
    print(f"\n=== {name} ===")

    # 1. Valideer alle skills
    for skill in plugin_spec["skills"]:
        ok, err = validate_skill(skill)
        if not ok:
            sys.exit(f"FOUT in {name}: {err}")
        print(f"  [OK] {skill}")

    # 2. Bouw plugin in tempdir
    with tempfile.TemporaryDirectory() as tmp:
        tmp_path = Path(tmp)
        plugin_dir = tmp_path / name
        (plugin_dir / ".claude-plugin").mkdir(parents=True)
        (plugin_dir / "skills").mkdir()

        # Copy skills
        for skill in plugin_spec["skills"]:
            src = SKILLS_SOURCE / skill
            dst = plugin_dir / "skills" / skill
            shutil.copytree(src, dst)

        # Write plugin.json
        manifest = {
            "name": name,
            "version": plugin_spec.get("version", "0.1.0"),
            "description": plugin_spec["description"],
            "author": author,
            "keywords": plugin_spec.get("keywords", []),
        }
        with open(plugin_dir / ".claude-plugin" / "plugin.json", "w", encoding="utf-8") as f:
            json.dump(manifest, f, indent=2, ensure_ascii=False)

        # Write README.md
        readme_lines = [f"# {name}\n", plugin_spec["description"], "", "## Skills in deze plugin", ""]
        for skill in plugin_spec["skills"]:
            readme_lines.append(f"- `{skill}`")
        readme_lines.append("")
        readme_lines.append(f"Gegenereerd door `build-plugins.py` uit `skills-source/`.")
        (plugin_dir / "README.md").write_text("\n".join(readme_lines), encoding="utf-8")

        # 2b. Kopieer ongezipte plugin-folder naar plugins/ (bron voor de git-marketplace)
        dest = PLUGINS_DIR / name
        if dest.exists():
            shutil.rmtree(dest)
        shutil.copytree(plugin_dir, dest)

        # 3. Zip naar dist/
        DIST.mkdir(exist_ok=True)
        out_path = DIST / f"{name}.plugin"
        # Bouw eerst in /tmp, schrijf dan bytes naar eindlocatie (OneDrive mount staat unlink niet toe)
        tmp_zip = tmp_path / f"{name}.plugin"
        with zipfile.ZipFile(tmp_zip, "w", zipfile.ZIP_DEFLATED) as zf:
            for path in plugin_dir.rglob("*"):
                if path.is_file():
                    arc = path.relative_to(plugin_dir)
                    zf.write(path, arc)
        with open(tmp_zip, "rb") as src, open(out_path, "wb") as dst:
            dst.write(src.read())

        size_kb = out_path.stat().st_size / 1024
        print(f"  => dist/{out_path.name} ({size_kb:.1f} KB, {len(plugin_spec['skills'])} skills)")
        return out_path


def build_marketplace(config: dict) -> None:
    """Schrijf .claude-plugin/marketplace.json met een entry per plugin in plugin-map.json.

    Draait altijd over ALLE plugins uit plugin-map.json (niet alleen de net-gebouwde),
    zodat een gedeeltelijke build (build-plugins.py <naam>) de marketplace niet uitdunt.
    """
    owner = config.get("author", {"name": "Unknown"})
    entries = []
    for plugin_spec in config["plugins"]:
        entries.append({
            "name": plugin_spec["name"],
            "source": f"./plugins/{plugin_spec['name']}",
            "description": plugin_spec["description"],
            "version": plugin_spec.get("version", "0.1.0"),
        })
    marketplace = {
        "name": "mp-marketing-command-centers",
        "owner": owner,
        "plugins": entries,
    }
    MARKETPLACE_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(MARKETPLACE_FILE, "w", encoding="utf-8") as f:
        json.dump(marketplace, f, indent=2, ensure_ascii=False)
    print(f"\n=== marketplace.json ===\n  => {MARKETPLACE_FILE} ({len(entries)} plugins)")


def main() -> None:
    config = load_config()
    author = config.get("author", {"name": "Unknown"})
    only = sys.argv[1] if len(sys.argv) > 1 else None

    targets = config["plugins"]
    if only:
        targets = [p for p in targets if p["name"] == only]
        if not targets:
            sys.exit(f"FOUT: plugin '{only}' niet gevonden in plugin-map.json")

    print(f"Bouwen vanuit: {SKILLS_SOURCE}")
    print(f"Output naar:   {DIST} + {PLUGINS_DIR}")
    built = []
    for plugin in targets:
        built.append(build_plugin(plugin, author))

    build_marketplace(config)

    print("\n=== Klaar ===")
    for p in built:
        print(f"  - {p}")
    print("\nGit-marketplace (aanbevolen): commit + push plugins/ en .claude-plugin/, dan in Cowork")
    print("  /plugin marketplace update mp-marketing-command-centers  (of: Directory -> Plugins -> sync)")
    print("\nLokale zip-fallback: Cowork -> Customize -> Personal plugins -> klik '+' -> selecteer .plugin")
    print("Als je daar een oude versie vervangt: eerst die versie deinstalleren.")


if __name__ == "__main__":
    main()
