# Experiment-Readouts [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, aanvullen na elk experiment

Doel: elk afgerond experiment krijgt hier een readout en een Learning Record. Format per
readout: `Experiment-Readout-Template.md` in deze map.

Beheerregels:
- Nooit een bestaande readout overschrijven; nieuwe readout toevoegen en de oude laten staan.
- Elke readout krijgt een Learning Record L-EXP-XX-NNN met de 7 velden uit het Agent 4-stappenplan.
- Een learning is pas verwerkt als alle vier de doelbestanden zijn bijgewerkt: dit bestand,
  `02_DATA-BASELINE/Evidence-Registry.md` (nieuw E-AB-item), de betreffende
  `09_DECISION-LOG/DDR-HX-NN.md` en `09_DECISION-LOG/Decision-Coverage-Matrix.md`.
  Een half verwerkte learning is erger dan geen, want dan liegt de matrix.
- LOSER-uitkomsten worden geblokkeerde patronen; INCONCLUSIVE is geen LOSER.
- WINNER zet de DDR-status op PERMANENT, met het liftpercentage en het Experiment-ID erbij.
  PERMANENT staat in de gating-tabel tussen APPROVED en NEEDS VALIDATION en blijft staan zonder
  nieuw bewijs. Overal waar een regel APPROVED eist, voldoet PERMANENT ook: het component mag
  naar Figma en de handoff in.
- Wat de readout met het Gate-Record doet: bij WINNER (naar PERMANENT) en bij INCONCLUSIVE
  (blijft APPROVED) blijft de go staan; bij LOSER (naar BLOCKED) vervalt de go onmiddellijk en
  gaat het component uit de build; en verandert de readout de ontwerpbeslissing zelf in plaats
  van alleen haar status, dan vervalt de go ook, want dat is een nieuwe beslissing die opnieuw
  door de poort gaat. De volledige tabel staat in
  `00_PLAN/Data-Governed-Design-Protocol.md` onder "Wat een experiment-readout met het
  Gate-Record doet"; de vervalregel zelf staat in `11_RED-TEAM/Gate-Records.md`.
- De Learning Extractor schrijft zelf geen Gate-Record. Zijn output is een Learning Record; de
  poort is pas aan de orde als er een nieuwe of gewijzigde beslissing uit de readout voortkomt.
- Elke readout dwingt een herscore van de Evidence Score af volgens het ankermodel, nooit een
  optelling bij de oude score. Herscoren gaat in drie stappen: een gewonnen experiment verzet het
  anker naar T1 en daarmee de bodem naar 3 (stap 1), daarna wordt de eigen breedte opnieuw geteld
  tot het eigen subtotaal (stap 2), en pas vanaf een eigen subtotaal van 3 levert extern bewijs
  samen maximaal plus 1 (stap 3). Noteer de uitkomst altijd met anker, in de vorm X/5 (anker
  T[n]). Zie `00_PLAN/Data-Governed-Design-Protocol.md`, sectie "Evidence Score".
- Raakt een uitkomst de weddenschap van de gekozen richting, herbeoordeel dan
  `05b_DIRECTIONS/Not-Selected.md`: de tweede richting ligt daar onderbouwd klaar.

## Readouts

[nog geen readouts]
