# The Opus Meta Ads System — Prompt Library

*Bron: "The Opus Meta Ads System" — gevalideerd op $30M+ Meta-spend*
*Companion tracker: zie `knowledge-base/meta-ads/templates/opus_meta_ads_tracker.xlsx`*

## Wanneer gebruiken

Dit zijn copy-paste-klare Claude-prompts voor wekelijkse Meta Ads-analyse. De systematiek werkt als volgt:

1. Laad de **Master Context Prompt** met je account-data
2. Draai de 5 **Sub-Prompts** in volgorde (of die je nu nodig hebt)
3. Log output in de **tracker-xlsx**
4. Herhaal elke maandag (20 minuten)

Geschikt voor accounts €15k-€500k/mnd. Onder €15k: data te dun voor betrouwbare patronen.

---

## Stap 1: Data klaarzetten

Gebruik dit formaat voor je account-data (zet in de tracker-xlsx op tabblad "Monthly Performance" + "Creative Tracker"):

```
ACCOUNT OVERVIEW:
- Brand: [Klantnaam]
- Monthly Spend: [Bedrag]
- Objective: Purchase / Lead / etc.
- AOV: [Bedrag]
- Target CPA: [Bedrag]
- Target ROAS: [Bedrag]

6-MAANDEN PERFORMANCE (Maand | Spend | Revenue | ROAS | CPA | CPM):
[Plak je data in dit format — één rij per maand]

TOP CREATIVES (Naam | Format | ROAS | CPA | Spend | Hook Type):
[Plak je top 10-50 creatives]

BEKENDE ISSUES / FATIGUE-SIGNALEN:
[Lijst van ads met dalende performance, hoge frequency, audience overlap, etc.]

AUDIENCE STRUCTUUR:
[Lijst je ad sets: prospecting, retargeting, LAL, broad, etc.
Inclusief spend-allocatie en CPA per set.]
```

---

## De Master Context Prompt

Plak dit EERST in elke nieuwe conversatie, gevolgd door je account-data.

```
You are a senior Meta Ads strategist with 10+ years of experience
managing DTC accounts spending $100K–$500K/month. You have deep
expertise in creative strategy, audience architecture, and
performance analysis.

I am going to share my complete Meta Ads account data with you.
This includes: monthly performance trends, active ad sets, top
creatives with performance metrics, hook types, fatigue signals,
and audience structure.

YOUR OPERATING RULES:

1. MEMORY: Treat everything I share as persistent context. Reference
specific creative names, CPAs, ROAS figures, and trends across
our entire conversation. Never ask me to re-share data.

2. ANALYSIS: Always reason from the data first. Cite specific
numbers when making claims. If CPA rose from $28 to $39, say
exactly that — not "CPA increased."

3. DECISIONS: Frame every insight as a decision. Not "this ad is
fatiguing" but "pause this ad and replace it with [specific
concept] because [specific data point]."

4. CREATIVE THINKING: When generating new concepts, always tie them
back to patterns in MY winning ads. Never generate generic ideas.
Every concept should reference a proven element from my data.

5. FORMAT: Use tables for comparisons. Use clear headers. Number
your recommendations. Bold the action items.

6. PERSONA: Speak like a buyer who manages my account day-to-day.
No fluff. No disclaimers. Specific, opinionated, data-backed.

Confirm you understand these rules, then I will share my account data.
```

Na bevestiging van Claude: plak je account-data in het formaat hierboven + sluit af met:

```
Analyseer deze data. Geef me je top 5 observaties — gerangschikt op impact
op winstgevendheid — en de eerste actie die ik vandaag moet nemen.
```

---

## Sub-Prompt 1: Creative Analyzer

Scoort élke actieve ad en vertelt waarom winners werken en losers niet.

```
Analyze every creative in my account. For each one, provide:

1. PERFORMANCE SCORE (1–10) based on ROAS, CPA, and spend efficiency
2. WHY IT WORKS or WHY IT DOESN'T — be specific about the hook,
   format, messaging angle, and visual approach
3. FATIGUE STATUS: Fresh / Cooling / Fatigued / Dead
4. VERDICT: Scale / Maintain / Iterate / Pause / Kill

Present this as a table. Sort by performance score descending.
After the table, give me your top 3 actionable takeaways.
```

---

## Sub-Prompt 2: Hook Pattern Extractor

Reverse-engineert de hook-patronen achter je best performers. Hier zitten verborgen inzichten.

```
Look at my top-performing creatives and extract the underlying
hook patterns. I don't want surface-level labels. I want the
psychological mechanism.

For each pattern you find:
1. NAME the pattern (e.g., "Transformation Proof", "Authority Transfer", "Identity Challenge")
2. EXPLAIN the psychological trigger it activates
3. LIST which of my creatives use this pattern
4. SHOW the performance data for creatives using this pattern vs. creatives that don't
5. GIVE ME 3 new hook angles using this same pattern that I haven't tested yet

I want to see the patterns I'm NOT using that my data suggests I should try.
```

---

## Sub-Prompt 3: Hook Decay Detector

Vangt creative fatigue VOORDAT je ROAS inzakt. Wekelijks draaien.

```
Run a fatigue analysis on every active creative. For each one, evaluate:

1. FREQUENCY: Current frequency vs. 30-day average. Flag anything above 3.5.
2. CTR TREND: Compare last 7 days vs. prior 30 days. Flag any decline over 15%.
3. CPA DRIFT: Compare last 7 days vs. lifetime CPA. Flag any increase over 20%.
4. ROAS VELOCITY: Is ROAS accelerating, stable, or decelerating?
5. ESTIMATED DAYS REMAINING: Based on the decay curve, how many more profitable days does this creative have?

Categorize each creative:
- GREEN: No action needed (7+ days remaining)
- YELLOW: Prepare replacement (3–7 days remaining)
- RED: Replace immediately (0–3 days remaining)

Output as a table. For every RED and YELLOW creative, suggest a
specific replacement concept based on my winning patterns.
```

---

## Sub-Prompt 4: Loser Campaign Flag

Vindt campagnes en ad-sets die stilletjes je budget verbranden.

```
Audit every ad set and campaign in my account for waste.
Flag anything that meets ANY of these criteria:

1. CPA more than 30% above target for 7+ consecutive days
2. Spend over €500 with zero conversions
3. ROAS below 1.5x with more than €2K in spend
4. Audience overlap above 25% with a better-performing ad set
5. Learning phase stuck (under 50 conversions in 7 days with significant spend)

For each flagged item, provide:
- The SPECIFIC data that triggered the flag
- RECOMMENDED ACTION: Pause / Reduce budget / Restructure / Kill
- ESTIMATED MONTHLY SAVINGS if the action is taken
- REALLOCATION SUGGESTION: where should this budget go instead?

Total up the estimated monthly waste at the bottom.
```

---

## Sub-Prompt 5: 30-Day Test Planner

Genereert een volledig creative testing-kalender op basis van wat je data zegt dat werkt.

```
Build me a 30-day creative testing calendar. Rules:

1. Every new concept MUST be rooted in a winning pattern from my
   account data. No generic ideas. Cite the source creative.

2. Test 2–3 new concepts per week. Each concept needs:
   - Hook angle (based on my proven patterns)
   - Format (video/image/carousel)
   - Primary message
   - CTA approach
   - The winning creative it's derived from

3. Include iteration tests: take my top 3 performers and create
   2 variations of each (new hook, same body / same hook, new body)

4. Budget allocation per test: suggest spend per concept and
   the kill threshold (CPA at which to pause)

5. SUCCESS METRICS: What does "winning" look like for each test?

Format as a weekly calendar table:
Week | Concept Name | Source Creative | Hook | Format | Budget | Kill CPA

Include a section at the bottom: "If Week 1 winners emerge,
here's how to scale them in Weeks 3–4."
```

---

## De 20-Minuten Wekelijkse Loop (elke maandag)

| Stap | Tijd | Actie | Prompt |
|---|---|---|---|
| 1 | 2 min | Export laatste 7 dagen uit Meta Ads Manager → plak in bestaande conversatie | (data paste) |
| 2 | 5 min | Run Hook Decay Detector → identificeer RED en YELLOW creatives | Sub-Prompt 3 |
| 3 | 3 min | Run Loser Campaign Flag → identificeer verspild spend | Sub-Prompt 4 |
| 4 | 5 min | Voor RED creatives: run Hook Pattern Extractor → genereer vervangende concepten | Sub-Prompt 2 |
| 5 | 5 min | Update test-kalender. Log bevindingen in tracker-xlsx tab "Opus Outputs" | Sub-Prompt 5 |

**Wekelijkse data-paste format:**

```
Hier is mijn bijgewerkte weekdata (week van [DATUM]):

LAATSTE 7 DAGEN PERFORMANCE:
[Plak: Spend | Revenue | ROAS | CPA | CPM | Purchases]

CREATIVE PERFORMANCE (laatste 7 dagen):
[Plak: Creative Name | Spend | ROAS | CPA | CTR | Frequency]

NIEUWE TESTS GELANCEERD VORIGE WEEK:
[Lijst nieuwe creatives + vroege resultaten]

Run de fatigue-analyse en flag campagnes die ik deze week moet pauzeren of aanpassen.
```

**Na elke sessie:**

1. **Pauseer** alle creatives met RED-status
2. **Verplaats** budget van geflagde losers naar best-presterende ad-sets
3. **Brief** je creative team op de vervangingsconcepten
4. **Log** alles in de tracker-xlsx (tabblad "Opus Outputs")
5. **Herhaal** volgende maandag — het systeem compoundt

---

## Hoe dit past in de meta-ads-specialist skill

- **Meta-ads-optimize wekelijkse routine** → gebruik Sub-Prompt 3 + 4 als framework
- **Meta-ads-creative brief-generatie** → gebruik Sub-Prompt 2 + 5 als input
- **Meta-ads-reporting** → gebruik Creative Analyzer (Sub-Prompt 1) als basis voor creative-sectie maandrapport
- **Tracker-xlsx** → companion voor `<klantmap>/meta-ads/reports/` (kopieer per klant naar hun map)
