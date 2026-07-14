# Marketing Command Centers — Workflow

> **TL;DR**: Edit skills in `skills-source/`, voeg nieuwe skill toe aan `plugin-map.json`, run `python build-plugins.py`, upload de nieuwe `.plugin` uit `dist/` in Cowork.
>
> **Kwaliteit**: elke nieuwe of gewijzigde skill volgt `SKILL-WRITING-STANDARDS.md` (description-anatomie, bodystructuur, kwaliteitspoort, Definition of Done). Lees dat bestand voordat je schrijft.

## De makkelijke manier: laat Claude het doen

Open een **nieuw Cowork-gesprek** met de `_MARKETING COMMAND CENTERS` folder aangesloten en zeg iets als:

> "Voeg een skill `local-seo` toe aan het SEO/GEO command center. Doel: Local SEO voor klanten met fysieke vestigingen — Google Business Profile, lokale rankings, Maps, review-strategie."

Claude (in Cowork) leest dan dit bestand, de `skill-template.md`, en `plugin-map.json`, maakt een nieuwe skill-folder met een correcte SKILL.md aan, updatet `plugin-map.json`, runt `build-plugins.py` en geeft je het nieuwe `.plugin` bestand. Jij hoeft alleen in Cowork de oude plugin te deinstalleren en de nieuwe te installeren.

---

## De handmatige manier

### Bron-van-waarheid

Alle skills leven in `skills-source/<skill-name>/SKILL.md`. Daar edit je. Nergens anders.

### Hoe Cowork skills laadt

Cowork haalt skills NIET uit `~/.claude/skills/` (dat is Claude Code CLI). Cowork werkt met **plugins**: een zip (extensie `.plugin`) die je in de UI installeert via **Customize → Personal plugins → `+`**.

### Nieuwe skill toevoegen

1. Lees `SKILL-WRITING-STANDARDS.md` en 1 exemplaar-skill (kalibratie-leeslijst staat in dat bestand)
2. Kopieer `skill-template.md` naar `skills-source/<nieuwe-skill>/SKILL.md`
3. Pas de frontmatter aan:

    ```yaml
    ---
    name: nieuwe-skill
    description: >
      Rol/domein. Gebruik ALTIJD wanneer [situaties]. Trigger bij "zin 1", "zin 2", ...
      (8-15 letterlijke triggerzinnen). Slotzin: wat de skill leest en toepast.
      700-950 tekens; harde max 950 (validator kapt boven 1024).
    ---
    ```

   Belangrijk: `name:` moet exact matchen met de folder-naam. Format (folded `>` of quoted `"..."`) maakt niet uit voor de validator; folded `>` is de huisstijl.

4. Schrijf de body volgens de vaste structuur (Wanneer activeren → Werkwijze → Kern-kennis (2026) → Anti-patterns → Output-formaat → Dependencies → Integratie met andere skills → Tips), 200-290 regels, Nederlands, geen em-dash of en-dash, geen emoji. Draai de zelfvalidatie uit SKILL-WRITING-STANDARDS.md sectie 9.

5. Voeg de skill toe aan `plugin-map.json` onder de juiste plugin:

    ```json
    {
      "name": "seo-geo-command-center",
      "skills": [
        "...",
        "nieuwe-skill"
      ]
    }
    ```

6. Run: `python build-plugins.py`
7. In Cowork: Customize → Personal plugins → **uninstall** oude versie → klik `+` → selecteer `dist/<plugin>.plugin`
8. Start nieuw gesprek om de skill te laden.

### Bestaande skill wijzigen

1. Edit `skills-source/<skill>/SKILL.md`
2. Run: `python build-plugins.py [plugin-naam]` (of zonder argument = alle)
3. Herinstalleer de betreffende `.plugin` in Cowork

### Skill verwijderen

1. Verwijder de skill uit `plugin-map.json`
2. (Optioneel) verwijder de folder in `skills-source/` — is veilig want alleen gebruikt bij rebuild
3. Run `python build-plugins.py`
4. Herinstalleer plugin

### Nieuw Command Center (nieuwe plugin) toevoegen

1. Maak skills aan in `skills-source/` (volgens `SKILL-WRITING-STANDARDS.md`; begin met een master/router-skill plus 2-4 sub-skills)
2. Voeg nieuw object toe aan `plugin-map.json > plugins`:

    ```json
    {
      "name": "klaviyo-command-center",
      "version": "0.1.0",
      "description": "...",
      "keywords": ["email", "klaviyo"],
      "skills": ["klaviyo-specialist", "..."]
    }
    ```

3. Run `python build-plugins.py`
4. Installeer de nieuwe `.plugin` in Cowork

## Troubleshooting

- **Plugin validation failed bij upload**: meestal een te lange `description` in één van de skills. Cowork staat max ~1024 chars toe. Het build-script valideert dit nu vooraf — zie de foutmelding.
- **Skill-naam mismatch**: de `name:` in SKILL.md-frontmatter moet exact gelijk zijn aan de folder-naam.
- **Skill verschijnt niet in Cowork na install**: start een nieuw gesprek. Plugins worden alleen bij session-start geladen.
- **Twee versies zichtbaar in Personal plugins**: oude versie niet gedeïnstalleerd. Deinstalleer eerst.
- **Na edit werkt skill niet**: vergeet niet de plugin opnieuw te installeren in Cowork (de oude versie leeft daar in AppData, niet in skills-source).

## Wat NIET (meer) nodig is

De oude junction-infrastructuur (`setup-junctions.ps1`, scheduled task `MP-Skills-AutoSync`, `auto-sync-junctions.ps1`) werkt niet voor Cowork. Kan weg.
