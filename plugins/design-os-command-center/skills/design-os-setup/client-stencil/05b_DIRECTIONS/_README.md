# 05b_DIRECTIONS: de weddenschappen
Versie: 0.1 (stencil)
Status: TEMPLATE, vullen in fase 5b

Doel: vóórdat er DDR's worden geschreven, een set echt verschillende en volledig
onderbouwde ontwerprichtingen op de kern-flow, zodat de keuze een strategische
weddenschap is in plaats van een smaakoordeel.

Eigenaar: `design-os-directions`.

## Hoeveel richtingen

Het aantal volgt `traject-omvang` (P8) uit `01_CONTEXT/Client-Profile.md`: vijf bij `vol`,
drie bij `light`. Nooit minder dan 3. Ook bij `light` wordt elke richting in een eigen
geïsoleerde subagent gemaakt: minder richtingen is geen reden om ze in één context te
schrijven. Verder in dit document staat gewoon "de richtingen".

## Kernregel

Elke richting is een andere weddenschap op dezelfde data, geen verkleedpartij van dezelfde
weddenschap.

## Waarom hier en niet later

De richting bepaalt welke DDR's je überhaupt nodig hebt. Richtingen die pas ná een
goedgekeurde DDR-batch worden gemaakt kunnen alleen nog cosmetisch verschillen,
want de inhoud ligt dan al vast en gegated.

## Scope

De richtingen gaan over de **kern-flow**: het traject van instap tot conversie.
Nooit op de hele site tegelijk. De gekozen richting wordt daarna doorvertaald
naar de overige templates via het Template Registry.

## Bestanden in deze map

| Bestand | Inhoud |
|---|---|
| `Direction-[letter]-[naam].md` | 1 per richting, doorletterend vanaf A, volgens `Direction-Case-Template.md` |
| `Direction-Case-Template.md` | Het vaste format; bij `light` het verkorte format met dezelfde verplichte velden |
| `Direction-Comparison.md` | De richtingen naast elkaar plus de anti-convergentie-poort; hierop kiest de lead |
| `Not-Selected.md` | De niet-gekozen richtingen, herbruikbaar bewaard |

## De drie bewijslagen

Eigen klantdata rechtvaardigt **of** we de weddenschap aangaan. Extern bewijs
informeert alleen **hoe** we hem uitvoeren en of het patroon op schaal
levensvatbaar is.

| Laag | Wat | Rol |
|---|---|---|
| 1 | Eigen data (gedragsdata, zoekdata, eigen experimenten, survey, reviews) | Draagt de weddenschap. Verplicht. |
| 2 | `E-CASE`, `E-PERS`, `E-COMP`, `E-TREND` | Versterkt de uitvoering. Minimaal 2, waarvan 1 E-CASE of E-PERS. |
| 3 | `E-REF`, `E-MOB` (Refero, Mobbin) | Patroon-adoptie en visuele taal. |

## Definition of Done

Alle Direction Cases in de set compleet inclusief het "ten koste van", het veld "welke
hypotheses dit bewust NIET bedient" en het falsificatie-veld; anti-convergentie-poort
groen; Red Team-oordeel binnen; keuze van de lead gelogd in `09_DECISION-LOG/Decision-Log.md`;
niet-gekozen richtingen bewaard in `Not-Selected.md`.
