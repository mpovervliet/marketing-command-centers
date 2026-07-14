---
name: cro-reporting
description: >
  CRO reporting & klant-communicatie specialist. Gebruik ALTIJD wanneer een experiment-rapport, maand/kwartaal/jaar CRO-overzicht, roadmap-update, winner-rollout-rapport, loser-learnings-rapport, of executive-level CRO-verhaal nodig is. Trigger bij "maak CRO rapport", "experiment samenvatting", "winner rapport", "monthly CRO update", "kwartaal CRO review", "hoe presenteren aan klant", "CRO ROI laten zien", "lift in euros", "experiment-log update", "kwartaal learnings", "executive summary CRO", "board-deck CRO", "dashboard voor klant", "present test result", "CRO case study", of elke vraag over naar buiten brengen van CRO-resultaten. Focust op revenue-per-visitor impact (niet alleen CVR%), concrete € cijfers, leer-extractie uit losers, en roadmap-narratief. Bouwt rapporten in Springbok-stijl (docx/pptx/sheets) en vertaalt statistische output naar business-taal.
---

# CRO Reporting Specialist

Zonder goede rapportage blijft elk CRO-programma onzichtbaar voor de klant. Deze skill vertaalt statistische output naar business-impact, maakt losers leerwaardig, en bouwt de continuïteits-narratief die klant-retention voedt.

---

## Wanneer activeren

- Individuele experiment-resultaten rapporteren
- Maandelijkse / kwartaal- / jaar-overzichten voor klant
- Winner-rollout status-rapporten
- Losers leerzaam maken (wat leerden we, wat komt hierna?)
- Executive summary / board-deck van CRO-programma
- CRO-ROI communicatie (welke investering → welk rendement?)
- Roadmap-update (wat staat op de planning, waarom?)
- Case-study schrijven (portfolio / klant-testimonial)
- Dashboard-onderhoud (live cijfers voor klant-zelfbediening)

## Werkwijze

1. **Publiek & doel eerst definiëren**:
   - Individueel experiment → test-eigenaar + marketing-manager
   - Maand-update → marketing-manager + hoofd-marketing
   - Kwartaal → directie / founders
   - Jaar → board / investors
   - Case-study → extern publiek (portfolio / conferenties)

2. **Data ophalen**:
   - Experiment-resultaten uit tool (VWO/Optimizely/Statsig)
   - GA4: traffic, revenue, cohort-data
   - Klantmap `cro/experiment-log.md` voor totalen + historie
   - Research-repository voor "waarom"-context
   - Budget- en uren-data voor ROI-berekening

3. **Framing kiezen**:
   - **Revenue-per-visitor (RPV)** verslaat bijna altijd CVR% in communicatie
   - Vertaal lift naar € jaar-impact (lift × sessies/jaar × AOV)
   - Vermeld guardrail-status (CVR won, AOV intact of beter)
   - Segment-highlights (mobile deed X, desktop deed Y)

4. **Learnings-extractie** (ook bij losers):
   - Welk principe bevestigd / weerlegd?
   - Overdraagbaar naar welke andere test?
   - Moet backlog bijgewerkt?

5. **Narratief bouwen** (niet metric-dump):
   - Samenvatting → context → bevindingen → impact → volgende stap
   - Visuals: bar/forest-plots, funnel-vergelijking, € breakdown
   - Quotes uit user-research als humaan anker

6. **Executive layer**:
   - 3 cijfers: totaal-lift, cumulatieve €-impact, next-kwartaal-belofte
   - 3 learnings: wat werkt, wat niet, wat veranderen we
   - 3 risicos/issues
   - Gevraagde beslissing (meer budget / extra tool / nieuw segment?)

## Kern-kennisgebieden (2026 best practices)

### Metric-hiërarchie voor klant-communicatie

1. **Revenue per visitor (RPV)**: hoofdverhaal
2. **Jaar-€-impact**: vertaling naar business
3. **CVR-lift %**: voor context, niet als hoofdpunt
4. **AOV-impact**: guardrail
5. **Mobile vs desktop**: segment-nuance
6. **Runtime / confidence**: methodologische check, voetnoot

### Lift-naar-€ vertaling (verplicht in elk rapport)

```
Lift €-impact/jaar = (CVR-lift × baseline-sessies/jaar × AOV)
                   OF
                   = (RPV-lift × baseline-sessies/jaar)
```

Voeg toe: "gebaseerd op huidige traffic-niveau; bij groei/daling verschaalt impact proportioneel".

### Losers rapporteren (niet verstoppen)

- Framing: "we weten nu dat X niet werkt voor dit publiek" (niet "mislukt")
- Learnings: waarom niet? Hypothese-update voor toekomstige tests
- Next: welke verbeterde test volgt? (meestal een variant-van-variant)
- Klant-vertrouwen: transparantie over losers = vertrouwen op winners

### Inconclusive tests (runtime te kort of MDE te groot)

- Duidelijk label "inconclusive", niet "loser"
- Keuze: extend of kill?
- Methodologische leerwaarde: hoger volume nodig / smaller effect-verwachting / verkeerde metric?

### Rapport-types

**Individueel experiment rapport** (na elke test):
- Hypothese (wat testten we waarom)
- Methode (tool, runtime, segment)
- Resultaat (primary, guardrails, segments)
- Conclusie (winner/loser/inconclusive + rationale)
- Aanbevolen vervolg
- Business-impact in €

**Maandoverzicht**:
- Tests gestart / afgerond deze maand
- Cumulatieve CVR- en €-lift
- Top-2 leerpunten
- Backlog top-5 komende maand

**Kwartaal-review**:
- Volledig experiment-log samengevat
- Totaal €-impact + run-rate implicaties
- Thematische insights (bv "mobile-trust is ons patroon")
- Roadmap next kwartaal (met ICE-scores)
- Resource-vraag (dev/design capacity)

**Jaaroverzicht**:
- Totaal: x tests, y winners, z€ jaarrendement
- ROI: budget in vs omzet-lift uit
- Thema's van het jaar
- Volgend-jaar strategische keuzes

**Case-study** (portfolio / externe communicatie):
- Klant-anonimisering optioneel
- Context (sector, volume, uitdaging)
- Aanpak (methodologie, tools, team)
- Resultaten (specifieke cijfers)
- Learnings (transfereerbaar)

### Springbok-huisstijl toepassen

- Dark-themed pptx voor executive-decks (via `springbok-slideshow`)
- Besparingsplan-stijl docx voor maand/kwartaal (via `springbok-gdoc`)
- Consistent iconografie voor winner/loser/inconclusive
- Kleur-palette: positief-groen, waarschuwing-amber, negatief-rood, neutraal-blauw

### Dashboard-opzet (live voor klant)

- Looker Studio / GA4 custom dashboards
- Widgets: running tests, cumulatieve lift, RPV-trend, kwartaal-target-progress
- Update-ritme: real-time experiment-data + dagelijkse GA4 refresh
- Access: klant read-only, team edit

### Statistische communicatie in klantentaal

| Statistics-term | Klant-vertaling |
|---|---|
| p < 0.05 | "95% zeker dat dit verschil echt is" |
| Bayesian 95% posterior | "95% kans dat de nieuwe versie wint" |
| MDE | "Kleinste lift die we betrouwbaar kunnen detecteren" |
| SRM | "Technische check: varianten netjes verdeeld" |
| Inconclusive | "We hebben nog niet genoeg data om zeker te zijn" |
| Guardrail | "Secundaire check dat we niets anders breken" |

Geen klant wil "p-value" lezen. Wel "95% zeker".

### Anti-patterns bij rapportage

- Alleen CVR% noemen (zonder €-vertaling)
- Losers weglaten of minimaliseren
- Statistische jargon zonder vertaling
- Gemiddelden zonder segmenten (verborgen verhalen)
- "Next steps" ontbreken
- Geen versie-controle (welke cijfer is finale?)
- Rapport zonder visual (tekst-walls scoren niet)
- Aannames als feiten presenteren

## Output-formaten

### Individueel experiment-rapport (md of docx)
1. Header: test-ID, naam, periode, status
2. Hypothese + methodologie
3. Primary metric resultaat + visualisatie
4. Guardrails-status
5. Segment-analyse
6. Conclusie + roll-out aanbeveling
7. Business-impact in €/jaar
8. Learnings + volgende-stap

### Maand/kwartaal-rapport (docx via `springbok-gdoc`)
- Executive summary (3 cijfers + 3 highlights)
- Test-log tabel (alle tests periode)
- Themes & learnings
- Roadmap next-periode
- Resource-requests

### Executive deck (pptx via `springbok-slideshow`)
- Slide 1: titel + kwartaal
- Slide 2: 3 hoofdcijfers
- Slide 3-7: top-winners met €-impact
- Slide 8: losers + learnings
- Slide 9-10: roadmap + vragen aan klant

### Dashboard-spec (voor Looker/GA4)
- Widget-lijst
- Data-sources
- Refresh-ritme
- Access-matrix

### Case-study (md → pptx)
- Anonimisatie-regels
- Context → aanpak → resultaten → learnings
- Geschikt voor portfolio / blog / conference

## Dependencies

- `ga4_tool`: traffic/revenue-data voor €-vertaling
- Experiment-tool (VWO/Optimizely/Statsig): test-resultaten
- `drive_tool` / `google_workspace_tool`: deliverables
- `springbok-gdoc` skill: docx-opmaak
- `springbok-slideshow` skill: pptx-opmaak
- `gmail_tool`: klant-communicatie rondom delivery

## Integratie met andere skills

- **`cro-experimentation`**: test-resultaten komen hier vandaan
- **`cro-specialist`**: roadmap-input voor executive-layer
- **`cro-audit`**: initial benchmark vs huidige staat → jaar-narratief
- **`google-ads-reporting`** / **`meta-ads-reporting`** / **`seo-geo-reporting`**: cross-channel klant-rapport integratie
- **`springbok-gdoc`** / **`springbok-slideshow`**: opmaak-laag

## Tips

- **€ verslaat %**. Klant begrijpt €140k/jaar beter dan "+6.8% CVR".
- **Losers niet verstoppen**. Transparantie bouwt vertrouwen. "We hebben X geleerd" is waardevol.
- **Elke maand ritme**. Klant-communicatie = hygiëne. Mis je 2 maanden → klant twijfelt.
- **Visual first**. Cijfers in grafiek > tabel. Grafiek > cijfer. Visual > tekst.
- **Execs willen 3 cijfers, geen 30**. Zorg dat top-3 metric dominant aan de top staan.
- **Next steps verplicht**. Rapport zonder "wat nu?" = statisch document. Roadmap = zichtbare energie.
- **Cumulatief rapporteren**. Kwartaal-lift ≠ som van maanden (interaction). Gebruik tool-data, niet optellen.
- **Case-study voor portfolio**. Elke succesvolle klant = 1 case-study-draft. Duurt 30 min, gebruikt 5 jaar.
- **Dashboard als klant-retention-tool**. Read-only toegang voor klant = transparantie = contract-verlenging.
