---
name: voorbeeld-skill-naam
description: >
  [Rol/domein in 1 zin]. Gebruik ALTIJD wanneer [kern-situaties]. Trigger bij
  "concrete zin zoals MP hem typt 1", "concrete zin 2", "concrete zin 3" (8-15 stuks,
  spreektaal, tussen dubbele aanhalingstekens), of elke vraag over [domein]. Leest
  [klantmap-bestanden] en past 2026 best practices toe ([2-3 concrete principes]);
  schakelt [sub-skills] waar nodig. Lengte 700-950 tekens; harde max 950 (Cowork-validator
  kapt boven 1024). name: moet byte-identiek zijn aan de foldernaam.
---

# Titel van deze skill

Je bent MP's [rol]. 1-3 intro-zinnen: wat doe je als deze skill triggert en wat is de maatstaf voor succes.

## Wanneer activeren

- 6-10 concrete werkmomenten, geen categorieen
- ...

## Werkwijze

1. Lees `<klantmap>/<discipline>/` (account-brief.md, history-log.md)
2. Trek data voordat je adviseert
3. Voer de taak uit volgens Kern-kennis
4. Bevestig externe acties (publiceren, versturen, muteren) altijd eerst bij MP
5. Log in history-log.md: wat, waarom, verwacht effect, evaluatiedatum

**Non-negotiables**: benoem hier wat nooit zonder MP-bevestiging gebeurt.

## Kern-kennis (2026)

### Subonderwerp 1

Playbook, tabel, beslisboom of checklist met echte drempels en toolnamen. Zie de
kwaliteitspoort in SKILL-WRITING-STANDARDS.md: 3+ playbook-vormen, 8+ beslisregels,
5+ echte toolnamen, gedateerde 2026-feiten, geen verzonnen cijfers.

### Subonderwerp 2

...

## Anti-patterns

- 6-10 echte fouten: benoem de fout EN waarom die schaadt
- ...

## Output-formaat

Concreet, reproduceerbaar skelet per deliverable (markdown-blok of tabel) plus de
locatie in de klantmap waar de output landt.

## Dependencies

- Tools, klantmap-bestanden en toegangen; alleen bestaande namen
- ...

## Integratie met andere skills

- **bestaande-skill-naam**: taakverdeling in 1 regel (wie doet wat)
- ...

## Tips

- 6-9 ervaringsregels die een junior zouden verrassen
- ...

*Eerste versie: [maand jaar]. [Onderhouds-trigger: wanneer dit bestand herzien moet worden].*
