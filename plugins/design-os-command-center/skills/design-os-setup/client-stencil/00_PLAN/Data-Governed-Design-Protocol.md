# Data-Governed Design Protocol
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake
Geldt voor: alle [KLANT] redesign-beslissingen

## Principe

Elke ontwerpkeuze op [SITE] moet herleidbaar zijn naar alle relevante beschikbare data. Smaak, gewoonte en aannames gelden niet als bewijs.

De keten is ondeelbaar:

```
Ruwe data
  → Evidence Item (E-[BRON]-[CATEGORIE]-[NR])
    → Insight (I-XXX)
      → Hypothesis (H-XX)
        → Design Decision Record (DDR-H[X]-[NN])
          → Figma component (C-XX)
            → Experiment (EXP-XX)
              → Learning (L-EXP-XX-NNN)
                → Update systeem
```

Geen stap mag worden overgeslagen. Een DDR zonder gekoppeld Evidence Item is ongeldig.

## No Evidence, No Design: 10 verplichte vragen

Voor elke ontwerpkeuze die naar Figma gaat, moeten onderstaande vragen beantwoord zijn. Niet alle vragen hoeven "ja" als antwoord te hebben, maar ze moeten allemaal expliciet zijn beantwoord, inclusief "onbekend" of "ontbreekt".

1. Welke gebruikersintentie bedient deze keuze?
2. Welke frictie of kans wordt opgelost?
3. Welke eigen [KLANT]-data (GA4, GSC, A/B, survey) ondersteunt dit?
4. Welke kwalitatieve data (reviews, exit-survey, support) ondersteunt dit?
5. Welke concurrentie- of marktdata ondersteunt dit?
6. Welke UX/CRO best-practice ondersteunt dit?
7. Welke primary KPI wordt geraakt?
8. Welke guardrail mag niet verslechteren?
9. Welke onzekerheden of ontbrekende data zijn er? (verplicht veld, mag niet leeg)
10. Hoe wordt de keuze gemeten na livegang?

## Evidence Completeness Score

Elke Design Decision Record krijgt een score van 0 tot 5:

| Score | Betekenis |
|-------|-----------|
| 0 | Geen bewijs: aanname of smaak |
| 1 | Alleen logische redenering, geen data |
| 2 | Een databron (bijv. alleen GA4) |
| 3 | Meerdere kwantitatieve bronnen, maar geen klant- of kwalitatief bewijs |
| 4 | Eigen data + kwalitatief (survey/reviews) + concurrentie |
| 5 | Eigen data + kwalitatief + concurrentie + best-practice + intern A/B bewijs |

Minimum voor Figma: score 3. Score 1-2 = concept only, niet voor productie.

## Conflict resolution protocol

Als databronnen tegenstrijdige signalen geven:

1. Benoem het conflict expliciet in het DDR onder "Conflicten".
2. Geef elke bron een betrouwbaarheidslabel: Hoog / Middel / Laag.
3. Ga uit van de bron met de hoogste betrouwbaarheid, tenzij meerdere lagere bronnen consistent zijn.
4. Leg de beslissing voor aan de lead voor validatie als het conflict niet oplosbaar is.
5. Noteer in het DDR welke bron is gevolgd en waarom.

Betrouwbaarheidshierarchie:
```
A/B-test (intern, significante n)
  > GA4 kwantitatief (harde funneldata)
    > Exit-survey / direct klantonderzoek (noteer n)
      > Review-mining (reviewplatforms, indirect)
        > Competitor-benchmark (extern, context)
          > Best-practice, bijv. Baymard (principe, niet klantspecifiek)
            > Redenering / aanname
```

## Data decay policy

Evidence Items hebben een maximale houdbaarheid:

| Brontype | Maximale ouderdom voor gebruik in DDR |
|----------|---------------------------------------|
| GA4 funneldata | 6 maanden |
| GSC positiedata | 3 maanden |
| A/B-testresultaten | 18 maanden (patroon relevant) |
| Exit-survey | 12 maanden |
| Review-mining | 6 maanden |
| Competitor-benchmark | 6 maanden |
| Best-practice / Baymard | 24 maanden |

Data die de grens overschrijdt mag nog worden aangehaald als historisch bewijs, maar niet als primair bewijs in een DDR.

## Absent evidence trap

"We hebben dit niet gemeten" is niet hetzelfde als "dit werkt niet". In een DDR wordt onderscheid gemaakt:

- Geen data = onbekend: mag als "Research Needed" worden genoteerd.
- Gemeten, geen effect: bewijs dat het niet werkt.
- Gemeten, negatief effect: bewijs dat het schadelijk is.

Alleen "gemeten, negatief effect" is een harde blokkade. "Onbekend" resulteert in confidence-downgrade, niet in blokkade.

## Gating systeem

| Status | Betekenis | Actie |
|--------|-----------|-------|
| APPROVED | Score >= 3, geen onopgeloste conflicten | Mag naar Figma |
| NEEDS VALIDATION | Score 1-2, of conflict onopgelost | Alleen als concept in Figma, niet voor productie |
| BLOCKED | Intern A/B-test toont negatief effect | Niet in Figma zonder expliciete go van de lead |
| RESEARCH NEEDED | Kritieke data ontbreekt | Eerst meten, dan beslissen |

## Figma component naming convention

Elk component in Figma krijgt een naam die de beslischain zichtbaar maakt:

```
C-[nummer]_[ComponentNaam]_DDR-H[X]-[NN]
```

Voorbeeld (fictief): `C-01_PricingCard_DDR-H1-01`. Figma-annotatie bij elk component bevat minimaal: Decision ID, Hypothese, Primary KPI, Evidence score, Guardrail, Experiment ID (als bekend).

## De twee-agent workflow

Agent 1, Design Decision Compiler (Cowork): verzamelt evidence, schrijft inzichten, maakt DDRs, produceert Figma-instructies.
Agent 2, Red Team (Cowork, aparte sessie of prompt): controleert of elke DDR voldoet aan dit protocol. Geeft per DDR: APPROVED / NEEDS STRONGER EVIDENCE / BLOCKED plus reden.

Cowork mag pas Figma MCP aanroepen na Red Team APPROVED op de betreffende DDRs. Prompts: `10_PROMPTS-AND-AGENTS/`.

## Wat dit protocol NIET doet

- Het blokkeert niet alle beslissingen met ontbrekende data: het maakt onzekerheden zichtbaar.
- Het vervangt het Hypothesis-Backlog niet: het vertaalt hypothesen naar uitvoerbare besluiten.
- Het vervangt de Design Brief niet: de Brief is de samenvatting; het Evidence-Register is de bron.
- Het vervangt de Red Team Reviews niet: die toetsen outputkwaliteit, dit protocol toetst besliskwaliteit.

## Bronbestanden die dit protocol voedt

| Bestand | Rol in protocol |
|---------|----------------|
| `02_DATA-BASELINE/Data-Contract.md` | Definitie welke metrics betrouwbaar zijn |
| `02_DATA-BASELINE/Evidence-Registry.md` | Alle Evidence Items |
| `05_HYPOTHESES/Hypothesis-Backlog.md` | Alle hypothesen (H-XX) |
| `05_HYPOTHESES/Screen-To-Hypothesis-Matrix.md` | Koppeling scherm-hypothese-KPI |
| `06_DESIGN/Design-Brief.md` | Data-to-design vertaaltabel |
| `09_DECISION-LOG/` (DDRs) | Alle DDRs per component |
| `09_DECISION-LOG/Decision-Coverage-Matrix.md` | Status-overzicht alle beslissingen |
| `11_RED-TEAM/` | Red Team audit output |
