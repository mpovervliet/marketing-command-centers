> Aannames die met dit besluit meereizen (uit `01_CONTEXT/Client-Profile.md` op het moment
> van schrijven, zodat dit document later leesbaar blijft ook als het profiel wijzigt):
> conversie-model [P1] | evidence-regime [P3] | markt [P5]

# DDR-H[X]-[NN]: [beslissing in 3-5 woorden]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

**Decision ID:** DDR-H[X]-[NN]
**Hypothese:** H[X], [korte titel]
**ICE-score:** [score]
**Status:** [APPROVED / PERMANENT / NEEDS VALIDATION / BLOCKED / RESEARCH NEEDED]
**Bij PERMANENT:** [liftpercentage plus Experiment-ID van het gewonnen eigen experiment]
**Datum:** [datum]
**Eigenaar:** [lead]

## Beslissing

[De beslissing in proza: wat precies, niet "een betere hero". Concreet genoeg om als Figma-instructie te dienen: welke elementen, welke volgorde, wat is altijd zichtbaar, wat niet.]

## Gebruikersintentie die dit bedient

[Wat wil de gebruiker op dit moment, in eigen taal.]

## Frictie / kans die dit oplost

[Welke drop, klacht of twijfel lost dit op, met het kerncijfer.]

## Evidence Chain

| Evidence ID | Bron | Finding | Betrouwbaarheid |
|-------------|------|---------|----------------|
| E-[...] | | | Hoog / Middel / Laag |
| E-[...] | | | |

**Ankeritem:** [Evidence ID], gemeten [datum], vervalt [vervaldatum volgens de data decay policy
in `00_PLAN/Data-Governed-Design-Protocol.md`]. Bewijs verloopt zonder dat iemand iets doet, dus
de vervaldatum hoort hier zwart op wit te staan, niet alleen de meetdatum.

Deze tabel is de scoringsbasis. Alleen wat hier staat telt mee voor het anker en voor de
breedte. Referentieschermen (`E-REF`, `E-MOB`) tellen mee als bewijscategorie B5, maar
**alleen als ze in deze Evidence Chain-tabel staan**. Staan ze uitsluitend in de sectie
"Referentie-schermen" verderop, dan zijn ze illustratie en tellen ze niet mee voor de breedte.
Wil je ze laten meetellen, zet ze dan hierboven met Evidence ID, bron, finding en
betrouwbaarheid, en laat ze eventueel daarnaast in de referentie-sectie staan.

**Evidence Score: [X]/5 (anker T[n])**
[Motiveer in drie stappen, in deze volgorde. Stap 1: welke bron is het anker, waarom is dat de sterkste geldige (niet-verlopen) bron in deze keten, en welke bodem zet hij (T1 = 3, T2 = 2, T3 = 2, T4 = 1, T5 = 0). Stap 2: welke eigen categorieën (B1, B2, B3) zijn náást het anker gedekt, elk plus 1; stap 1 plus stap 2 is het eigen subtotaal. Stap 3: is dat subtotaal 3 of hoger, dan plus 1 als B4 of B5 gedekt is, samen nooit meer dan plus 1; is het 2 of lager, dan is dat de score en telt extern bewijs niet mee. Ankermodel, categorieën en de vier harde regels: `00_PLAN/Data-Governed-Design-Protocol.md`, sectie "Evidence Score". Noteer nooit een kaal getal: de vorm is `[X]/5 (anker T[n])`, niet `[X] (anker T[n])` en niet `[X]/5 (T[n])`.]

Score 3 is het minimum voor Figma-productie. Score 0-2 is NEEDS VALIDATION, dus concept only. Bij
score 0 hoort er geen DDR te komen: schrijf er eerst een hypothese en een meetplan bij.

## Conflicten

[Expliciet, ook als er geen zijn. Bij conflict: bronnen, betrouwbaarheidslabels, welke bron gevolgd is en waarom.]

## Componenten in Figma

| Component ID | Naam | Variant |
|-------------|------|---------|
| C-[XX] | | |
| C-[XX]b | | |

**Figma-naming:** `C-[XX]_[ComponentNaam]_DDR-H[X]-[NN]`

## KPI

**Primary:** [KPI met meetbare doelstelling, bijv. van X% naar >= Y%]
**Secondary:** [KPI]
**Guardrail 1:** [wat mag niet verslechteren]
**Guardrail 2:** [idem]
**Guardrail 3:** [idem, bijv. support-tickets]

## Tracking events (nieuw te implementeren)

- `[event_naam]`: [trigger]
- `[event_naam]`: [trigger]
- [bestaande ankere-events benoemen als "onveranderd"]

## Experiment

**Experiment ID:** EXP-[XX]
**Type:** [A/B 50/50 / gefaseerd / voor-na]
**Controle:** [huidige situatie]
**Variant:** [nieuwe situatie]
**Minimale testduur:** [doorgerekend op de MDE en het volume; bij een A/B minimaal 2 volle weken vanwege weekdag-patronen, maar die ondergrens is nooit het antwoord]
**MDE:** [minimaal detecteerbaar effect]

## Onzekerheden / ontbrekende data (VERPLICHT, mag niet leeg)

- [wat weten we niet]
- [welke data ontbreekt en is aangevraagd]

## Referentie-schermen (patroonbibliotheken; leeg laten als de beslissing geen patroonkeuze bevat, of als er geen bibliotheek beschikbaar is en dat als confidence-beperking is genoteerd)

Cross-industry patronen die de beslissing ondersteunen. Bronnen doorzoekbaar in `02_DATA-BASELINE/Reference-Library.md`.

Let op: deze sectie scoort niet. Referentieschermen vallen onder bewijscategorie B5 en tellen
alleen mee voor de breedte als ze óók in de Evidence Chain-tabel hierboven zijn opgenomen. Een
referentie die alleen hier staat, is context bij de uitvoering en verandert de Evidence Score niet.

| Evidence ID | Bron | Pattern | Design les |
|-------------|------|---------|-----------|
| E-REF-H[X]-[NNN] | | | |
| E-MOB-H[X]-[NNN] | | | |

**Sterkste industrie-validatie:** [welke referentie het probleem het meest direct oplost en waarom.]

## Aanvullende context

[Patronen uit de A/B-historie of andere DDRs die deze beslissing bevestigen of begrenzen.]
