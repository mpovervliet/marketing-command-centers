# Claude-Design-Prompts
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Claude Design = conceptgenerator voor divergentie. Vraag altijd meerdere richtingen, kies daarna op hypothese-fit (Cowork), niet op smaak.

## Vijf richtingen (de divergentie-methode)

Gebruik per richting een aparte prompt zodat ze echt verschillen. Vul de richtingen in op basis van de hypotheses en de propositie van [KLANT]; onderstaande vijf assen zijn het vaste stramien:

- **A, Maximale prijsduidelijkheid:** "Ontwerp een mobiele [PRODUCT]-instap waarbij de prijs en wat je krijgt binnen 1 seconde glashelder zijn. Prijsanker, geen verborgen kosten, directe keuze."
- **B, Snelste route naar waarde:** "Ontwerp de instap waarbij de snelste of makkelijkste variant van [PRODUCT] de hoofdoptie is, met de belofte '[direct-resultaat-claim invullen]'. De standaardvariant als secundaire keuze."
- **C, Keuzeflow als quiz:** "Ontwerp de productkeuze als 2 tot 3 simpele vragen die naar een aanbevolen optie leiden, in plaats van een overzicht met veel opties."
- **D, Vergelijker-achtige productkaart:** "Ontwerp de [PRODUCT]-opties als vergelijkbare kaarten (zoals een vergelijker) met een uitgelichte 'meest gekozen'-optie."
- **E, Trust/support-first:** "Ontwerp een instap die rust en betrouwbaarheid uitstraalt: garanties, service, opzegbaarheid/retour, reviews, zonder de kernpropositie van [KLANT] te verliezen."

## Beoordelingsprompt (terug in Cowork)

```
Beoordeel deze [N] richtingen op fit met:
- de data-baseline (device-prioriteit, grootste funnel-lek, best converterende LP),
- de paid angles en GSC-intentie,
- de hypothese-backlog (H1 t/m H[n]).
Geef per richting: welke hypothese(s) het bedient, risico's, en een fit-score.
Kies niet op smaak.
```

## Regels

- Output van Claude Design is exploratie, niet definitief. Definitieve componenten in Figma.
- Elke richting wordt getoetst aan hypothese, brand, componenten, toegankelijkheid en haalbaarheid voor hij verder mag.
- Bewaar gekozen richting plus reden in `09_DECISION-LOG/Decision-Log.md`, afgewezen richtingen in `Rejected-Ideas.md`.
