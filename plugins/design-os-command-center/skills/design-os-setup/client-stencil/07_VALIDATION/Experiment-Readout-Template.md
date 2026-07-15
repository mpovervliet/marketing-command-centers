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

- [ ] WINNER: uitrollen, DDR-status naar Permanent, liftpercentage noteren
- [ ] LOSER: niet uitrollen, DDR-status naar BLOCKED, E-AB-item toevoegen aan Evidence-Registry
- [ ] INCONCLUSIVE: status blijft APPROVED, noteer "meer traffic nodig" of herontwerp

### Learning

**Learning ID:** L-EXP-[XX]-[NNN]
- Wat hebben we geleerd over het gedrag/de gebruiker (los van winst/verlies)?
- Welke aanname is bevestigd of weerlegd?
- Welke vervolg-hypothese volgt hieruit?

### Acties

- [ ] Uitrol/rollback uitgevoerd
- [ ] Evidence-Registry bijgewerkt (E-AB-XXX toegevoegd)
- [ ] DDR bijgewerkt
- [ ] Decision-Coverage-Matrix bijgewerkt
- [ ] Decision-Log bijgewerkt
- [ ] Client-facing samenvatting gemaakt (indien relevant)
