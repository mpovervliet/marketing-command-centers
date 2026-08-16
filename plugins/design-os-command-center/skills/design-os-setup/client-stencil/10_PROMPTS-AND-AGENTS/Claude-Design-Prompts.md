# Claude-Design-Prompts
Versie: 0.2 (stencil)
Status: TEMPLATE, invullen bij intake

Conceptgeneratie is divergentie. De richtingen zelf worden bepaald door
`design-os-directions` (fase 5b), niet door een vast stramien en niet door smaak.

## Later invullen dan de rest: [AANTAL-RICHTINGEN]

De prompts hieronder worden letterlijk geplakt en bevatten de placeholder
[AANTAL-RICHTINGEN]. Hij staat op de swap-lijst en in de placeholder-scan, maar hij wordt in
een andere stap ingevuld dan de overige placeholders, omdat zijn waarde uit P8 volgt en die bij
de zoek-en-vervang-stap nog niet vaststaat. De volgorde is hard:

1. Zoek-en-vervang-stap bij de uitrol: alle intake-placeholders. [AANTAL-RICHTINGEN] blijft
   hier bewust staan.
2. Stap waarin het klantprofiel wordt ingevuld: P8 traject-omvang vaststellen in
   `01_CONTEXT/Client-Profile.md`.
3. Pas daarna [AANTAL-RICHTINGEN] overal vervangen door **5** bij `vol` of **3** bij `light`.
   Nooit minder dan 3.

Vul stap 3 in vóór het plakken; een prompt met een openstaande placeholder is niet bruikbaar,
en de fase 1-gate toetst op nul openstaande placeholders.

## Kernregel

Elke richting is een andere weddenschap op dezelfde data, geen verkleedpartij van dezelfde
weddenschap.

Een vaste lijst assen (prijsduidelijkheid, snelste route, quiz, kaarten, trust)
levert bij elke klant hetzelfde op en klapt in elkaar zodra de klant geen
prijsvergelijking verkoopt. De assen worden daarom per klant afgeleid uit de
forks in de eigen evidence.

## Waar de assen vandaan komen

Zoek splitsingen: punten waar de data niet 1 kant op wijst.

| Bron van een fork | Wat je zoekt |
|---|---|
| Segment-tegenstelling | Twee segmenten met tegengesteld gedrag op hetzelfde beslismoment |
| Conflicterende hypotheses | Twee H-nummers die elkaar uitsluiten of om dezelfde ruimte vechten |
| Open beslismoment | Een BM-X met aangetoond lek zonder vastgestelde oorzaak |
| Concurrerende intenties | de zoekbron- en review-signalen die op twee verschillende taken wijzen |
| De twee vaste polen | 1 richting dicht bij huidig, 1 die de flow fundamenteel herdenkt |

Elke as is 1 zin:

```
Wij zetten in op [segment of intentie] op [BM-X],
ten koste van [wat we bewust niet optimaliseren].
```

Zonder het "ten koste van" is het een wens en geen weddenschap, en dan kruipen de
richtingen alsnog naar elkaar toe.

## Generatie: 1 geïsoleerde context per richting

Genereer nooit meerdere richtingen achter elkaar in dezelfde sessie. De eerste richting
wordt de aantrekker en de rest worden bewerkingen ervan. Zelfde principe als de
Red Team-regel: zelf-divergentie in 1 context vindt niets. Er draaien dus altijd evenveel
geïsoleerde subagents als er richtingen zijn, ook bij `light`.

Prompt-stramien per richting (1 per subagent):

```
Je ontwerpt 1 van de [AANTAL-RICHTINGEN] ontwerprichtingen voor [KLANT] op de flow
[kern-flow]. Je ziet alleen jouw eigen weddenschap; de andere richtingen worden parallel
in andere sessies gemaakt.

Jouw weddenschap, en de enige die je mag bedienen:
[as, inclusief het ten koste van]

Volledige evidence-set: [diagnose, registry, backlog, beslismomenten]
Brand-status (P4, drie waarden): [brand-vast binnen tokens / brand-open met motivering /
brand-afwezig: er is nog geen design system, de tokens zijn een deliverable en de spreiding
over de richtingen is tegelijk de merkverkenning]

VERBODEN, want die zijn van de andere richtingen:
- Primaire beslismechaniek: [die van de andere richtingen, allemaal opsommen]
- Visuele taal: [die van de andere richtingen, allemaal opsommen]

Lever het Direction Case-format uit 05b_DIRECTIONS/Direction-Case-Template.md,
inclusief eigen laag-2 onderbouwing (minimaal 2 items, waarvan 1 E-CASE of E-PERS),
een functioneel én een visueel mandaat, en het falsificatie-veld.
Is de traject-omvang light, gebruik dan het verkorte format: dezelfde verplichte
velden, kortere toelichting per veld. Geen enkel veld overslaan.
```

## Anti-convergentie-poort

Voordat de lead de set ziet: meet verschil op eerste scherm, beslismechaniek, structuur
en dichtheid, en visuele taal. Botsing op 2 of meer dimensies is hergeneratie op een
andere fork. Maximaal 2 rondes.

## Beoordeling

Vraag NIET welke richting het best bij de data past; na constructie passen ze
allemaal. Lever in plaats daarvan per richting: welke weddenschap, wat je opgeeft, de
bandbreedte met zichtbare rekenwijze, de implementatielast en wat de richting
onderuit zou halen. Benoem expliciet welke de hoogste verwachte waarde heeft en
welke het laagste risico, want dat zijn zelden dezelfde.

Geen aanbeveling vanuit het systeem. De lead kiest de weddenschap.

## Regels

- Conceptoutput is exploratie, niet definitief. Definitieve componenten in Figma.
- Elke richting wordt getoetst aan hypothese, brand, componenten, toegankelijkheid en haalbaarheid.
- Gekozen richting plus reden naar `09_DECISION-LOG/Decision-Log.md`.
- Niet-gekozen richtingen naar `05b_DIRECTIONS/Not-Selected.md`, NIET naar `Rejected-Ideas.md`: dat is de lijst met bewezen losers, en deze richtingen zijn afgewezen keuzes, geen weerlegde keuzes.
