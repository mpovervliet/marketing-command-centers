# Rollout-Plan [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen in fase 9

Doel: gefaseerde uitrol per beslismoment met rollback-criteria, passend bij de
infrastructuur die er is.

## Route A — met staging, feature flags en devteam

| Fase | Wat gaat live | Go/no-go criterium | Guardrail (mag niet verslechteren) | Rollback |
|------|---------------|--------------------|--------------------------------------|----------|
| 1 | | | | Flag uit, terug naar vorige versie binnen [X] |

## Route B — zonder staging/feature flags, zonder devteam

Uitrol in een afgebakend tijdvenster met een dagelijkse guardrail-check en een
teruggezette versie klaar (bijv. een export van de oude pagina, of de vorige versie in
het CMS-revisiehistorie):

| Fase | Wat gaat live | Datum/venster | Dagelijkse check door | Guardrail | Terugzet-plan |
|------|---------------|----------------|------------------------|-----------|----------------|
| 1 | | | | | |

Bij een no-code CMS (WordPress/Elementor of vergelijkbaar) is de meeste terugzet-actie
letterlijk "vorige pagina-versie terugzetten via de revisiegeschiedenis van het platform" —
controleer bij intake (`01_CONTEXT/Technical-Constraints.md`, vraag 4) of die
revisiegeschiedenis bestaat en hoe ver terug hij gaat, vóórdat dit als rollback-plan wordt
opgeschreven.

## Voorbeeld (fictief, generiek — Route B)

| Fase | Wat gaat live | Datum/venster | Dagelijkse check door | Guardrail | Terugzet-plan |
|------|---------------|----------------|------------------------|-----------|----------------|
| 1 | T2 Prijs-/pakketpagina, nieuwe hero | Week 1, ma-vr | [KLANT]-contactpersoon | Aantal formulier-verzendingen daalt niet t.o.v. vorige week | Vorige paginaversie via CMS-revisiegeschiedenis (max 30 dagen terug) |
| 2 | E1 Offerteformulier, nieuwe volgorde velden | Week 2, ma-vr | [KLANT]-contactpersoon | Formulier-afrondingspercentage daalt niet | Formulier-plugin heeft eigen versiehistorie; vorige versie herstellen |

## Definition of Done

Elke fase heeft een expliciet go/no-go-criterium, een guardrail en een uitgeschreven
terugzet-plan dat past bij de daadwerkelijke infrastructuur van [KLANT] — geen
rollback-plan dat een feature-flag-systeem veronderstelt dat er niet is.
