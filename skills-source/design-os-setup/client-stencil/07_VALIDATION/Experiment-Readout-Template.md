# Experiment-Readout-Template
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: vast format om een afgerond experiment te lezen en de learning te borgen. Kopieer per experiment. De Learning Extractor (Agent 4) verwerkt dit terug in Evidence-Registry, DDR en Coverage Matrix.

---

## Experiment EXP-[XX]: [korte titel]

**Hypothese:** H[X], [omschrijving]
**DDR:** DDR-H[X]-[NN]
**Variant(en):** [controle vs variant-omschrijving]
**Beslismoment:** BM-[X]
**Periode:** [start] tot [eind] ([aantal volle weken, minimaal 2])
**Doelgroep/segment:** [device, kanaal, new/returning]
**n:** [bezoekers/sessies per variant]

### Resultaat

| KPI | Controle | Variant | Verschil | Significantie |
|-----|---------:|--------:|---------:|---------------|
| Primair: [KPI] | | | | |
| Secundair: [KPI] | | | | |
| Guardrail 1: [KPI] | | | | |
| Guardrail 2: [KPI] | | | | |

**Statistisch oordeel:** [Bayesian kans / frequentist p, SRM-check uitkomst, peeking vermeden ja/nee]

### Conclusie

- [ ] WINNER: uitrollen, DDR-status naar PERMANENT, liftpercentage plus Experiment-ID noteren
- [ ] LOSER: niet uitrollen, DDR-status naar BLOCKED, E-AB-item toevoegen aan Evidence-Registry
- [ ] INCONCLUSIVE: status blijft APPROVED, noteer "meer traffic nodig" of herontwerp

### Gevolg voor de Evidence Score

Een readout leidt tot **herscoren**, niet tot een punt erbij tellen. Werk in deze volgorde:

1. Stap 1, bepaal het anker opnieuw. Een WINNER is een eigen meting van deze ingreep met een
   gemeten, significant effect: het anker gaat naar T1 en daarmee de bodem naar 3.
2. Stap 2, tel de eigen breedte opnieuw: plus 1 per gedekte eigen categorie (B1, B2, B3) náást
   het nieuwe anker. Dat is samen het eigen subtotaal. Let op dat één Evidence Item precies één
   categorie dekt: het experiment-item is B3, ook als je het effect in funneldata hebt gemeten.
3. Stap 3, tel de externe breedte: is het eigen subtotaal 3 of hoger, dan plus 1 als B4 of B5
   gedekt is, samen nooit meer dan plus 1. Is het 2 of lager, dan is dat de score. Referentie-
   schermen (`E-REF`, `E-MOB`) tellen als B5, maar alleen als ze in de Evidence Chain-tabel van
   de DDR staan.
4. Toets de vier harde regels: extern bewijs telt pas mee vanaf een eigen subtotaal van 3 en
   levert samen maximaal plus 1, een 5 bestaat alleen met een T1-anker (zonder T1-anker is 4 het
   maximum), verlopen items tellen nergens mee, en de score draagt altijd zijn anker.
5. Noteer de uitkomst met anker in de DDR en in de kolom Score (anker) van de
   Decision-Coverage-Matrix, in de vaste vorm `X/5 (anker T[n])`.

Het model staat in `00_PLAN/Data-Governed-Design-Protocol.md`, sectie "Evidence Score".

**Nieuwe Evidence Score:** [X]/5 (anker T[n]), was [X]/5 (anker T[n])

Verschuift de DDR door de herscore van NEEDS VALIDATION naar APPROVED, dan is dat een nieuwe
vrijgave en gaat het item opnieuw door de Red Team-poort. Verschuift hij omlaag, van APPROVED
naar NEEDS VALIDATION, dan vervalt de go: al gebouwde componenten blijven staan maar worden als
concept gemarkeerd en gaan niet mee in een klantstuk of release zonder gelogd risico-akkoord
van de lead. Meld dat actief.

### Gevolg voor het Gate-Record

De vervalregel in `11_RED-TEAM/Gate-Records.md` zegt dat een record vervalt zodra een getoetst
item wijzigt. Voor een experiment-readout geldt één afgebakende uitzondering; de volledige tabel
staat in `00_PLAN/Data-Governed-Design-Protocol.md` onder "Wat een experiment-readout met het
Gate-Record doet".

| Uitkomst | Wat er met de go gebeurt |
|---|---|
| WINNER, status naar PERMANENT | De go blijft staan. Log een regel in het Decision-Log met een verwijzing naar het Learning Record |
| INCONCLUSIVE, status blijft APPROVED | De go blijft staan |
| LOSER, status naar BLOCKED | De go vervalt onmiddellijk en het component gaat uit de build |
| De readout verandert de ontwerpbeslissing zelf, niet alleen haar status | De go vervalt: dit is een nieuwe beslissing en gaat opnieuw door de poort |

De Learning Extractor schrijft zelf geen Gate-Record. Zijn output is een Learning Record; de
poort is pas aan de orde als er een nieuwe of gewijzigde beslissing uit deze readout voortkomt.

### Learning

**Learning ID:** L-EXP-[XX]-[NNN]
- Wat hebben we geleerd over het gedrag/de gebruiker (los van winst/verlies)?
- Welke aanname is bevestigd of weerlegd?
- Welke vervolg-hypothese volgt hieruit?

### Acties

- [ ] Uitrol/rollback uitgevoerd
- [ ] Evidence-Registry bijgewerkt (E-AB-XXX toegevoegd)
- [ ] DDR bijgewerkt, inclusief herscoorde Evidence Score met anker
- [ ] Decision-Coverage-Matrix bijgewerkt
- [ ] Decision-Log bijgewerkt
- [ ] Client-facing samenvatting gemaakt (indien relevant)
