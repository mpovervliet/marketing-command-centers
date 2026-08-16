# Richting [letter]: [naam in 2-4 woorden]
Versie: 0.1 (stencil)
Status: TEMPLATE, 1 bestand per richting
Klant: [KLANT] | Flow: [kern-flow] | Datum: [datum]
Meereizende aannames: conversie-model [P1] | evidence-regime [P3] | merk-mandaat [P4] | markt [P5] | traject-omvang [P8]

> `traject-omvang` bepaalt hoeveel richtingen er in de set zitten (vijf bij `vol`, drie bij
> `light`) en hoe zwaar dit document is. Bij `light` geldt het verkorte format: **dezelfde
> verplichte velden**, alleen een kortere toelichting per veld. Een veld weglaten of leeg
> laten mag niet, ook niet bij `light`.

## De weddenschap

Wij zetten in op [segment of intentie] op [beslismoment BM-X],
ten koste van [wat we bewust niet optimaliseren].

> Het "ten koste van" is verplicht en moet concreet zijn. Een richting die alles
> bedient is een compromis, en compromissen lijken altijd op elkaar.

## User case

- **Wie:** [segment, met omvang uit de eigen data plus E-ID]
- **Wat die persoon op dat moment probeert te doen:** [de taak, geen persona-proza]
- **Waar het nu misgaat:** [frictie met concreet cijfer plus E-ID]
- **Wat deze richting anders doet:** [de ingreep in 2 zinnen]
- **Welke hypotheses dit bedient:** [H-nummers]
- **Welke hypotheses dit bewust NIET bedient:** [H-nummers, VERPLICHT, nooit leeg]

## Business case

- **Lek-omvang vandaag:** [sessies, conversies of waarde per periode, in de eenheid uit het klantprofiel, met segment en E-ID]
- **Realistische bandbreedte bij succes:** [range, met de rekenwijze zichtbaar erbij, gelabeld als vuistregel-berekening. Nooit een enkel beloofd percentage.]
- **Primaire KPI:** [conform Data-Contract]
- **Guardrails:** [3 stuks: 1 waarde- of conversie-guardrail, 1 kwaliteits-guardrail uit het conversie-model (retour, churn, leadkwaliteit, no-show), 1 zichtbaarheids-guardrail bij structuurwijziging]
- **Implementatielast:** [weken of sprints, uit `01_CONTEXT/Technical-Constraints.md`]
- **Wat deze richting kost als hij fout is:** [het echte risico, niet "minder conversie"]

## Onderbouwing

### Laag 1: eigen data (draagt de weddenschap, verplicht)

| E-ID | Bron | Bevinding met cijfer | Betrouwbaarheid |
|---|---|---|---|
| | | | |

### Laag 2: extern effectbewijs (versterkt de uitvoering)

Minimaal 2 items, waarvan minimaal 1 `E-CASE` of `E-PERS`.

| ID | Type | Bron plus URL plus datum | Wat het aantoont | Betrouwbaarheid |
|---|---|---|---|---|
| | E-CASE / E-PERS / E-COMP / E-TREND | | | |

> `E-PERS` vereist twee meetpunten: oudste vindplaats en huidige staat, beide met datum.
> `E-TREND` mag meeliften, nooit alleen dragen.

### Laag 3: patroon-adoptie

| E-REF / E-MOB | Site | Pattern | Design les |
|---|---|---|---|
| | | | |

## Functioneel mandaat

- **Primaire beslismechaniek:** [vergelijken / geleid worden / filteren / direct kiezen / uitgelegd krijgen]
- **Eerste scherm:** [welke taak het bedient en welke belofte het doet]
- **Wat bewust NIET op het eerste scherm staat:** [verplicht]
- **Paginastructuur:** [aantal en volgorde van secties]
- **Informatiedichtheid:** [hoog / midden / laag, met reden]

## Visueel mandaat

- **Brand-status:** [brand-vast / brand-open / brand-afwezig, conform P4 merk-mandaat in `01_CONTEXT/Client-Profile.md`]
- **Bij brand-open, welke oprekking en waarom:** [invullen, of "geen"]
- **Bij brand-afwezig, hoe deze richting de merkverkenning invult:** [er is nog geen design system; de tokens zijn hier geen bron maar een deliverable, en de spreiding over de richtingen is tegelijk de merkverkenning. Invullen, of "niet van toepassing"]
- **Dichtheid:** [invullen]
- **Typografische toon:** [invullen]
- **Kleurtemperatuur en contrastgebruik:** [invullen]
- **Beeldstrategie:** [invullen]
- **Ritme:** [invullen]
- **Referentie-schermen:** [E-REF/E-MOB IDs die deze visuele taal tonen]

> Het visuele mandaat moet de weddenschap versterken. Een zekerheidswedde ziet er
> anders uit dan een snelheidswedde. Zonder dit veld vallen alle richtingen terug
> op dezelfde default.

## Wat zou bewijzen dat deze richting fout is

[Het experiment of de meting die de weddenschap onderuit haalt.
VERPLICHT veld. Een richting zonder falsificatie is een mening.]

## Client-facing versie

Zelfde inhoud zonder E-IDs, property-IDs, toolnamen en GAQL.
Zie `00_PLAN/Client-vs-Internal-Output.md`.
