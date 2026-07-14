---
name: retention-lifecycle-cohort
description: >
  Cohort analysis, CLV & retention analytics specialist. Gebruik ALTIJD bij vragen over customer lifetime value (CLV), cohort-analyses, repeat-rate, churn-rate, RFM-modellen, retention-dashboards, predictive churn, cohort-retention-matrix, payback-period, of het meten van retentie-effectiviteit over tijd. Trigger bij "CLV berekenen", "cohort analysis", "retention matrix", "repeat rate 90 dagen", "churn rate", "RFM model", "predictive CLV", "customer lifetime value", "cohort dashboard", "payback period", "LTV/CAC ratio", "retention curve", "monthly cohort analysis", "acquisition-maand retentie", "revenue per cohort", "churn voorspellen", of elke vraag over langetermijn retention-metrics. Past 2026 best practices toe (Klaviyo Predictive Analytics als bron, Shopify order-data als waarheid, RFM 5x5 quartielen, cohort-retention in matrix-format, LTV/CAC target >3, payback <9mnd).
---

# Cohort Analysis, CLV & Retention Analytics

Deliverability zorgt dat de email landt. Flows en campagnes zorgen voor revenue. Maar dit, cohort-analyse en CLV, vertelt of je retention-werk **echt** effect heeft over tijd. Dit is de meet-laag.

## Wanneer activeer je deze skill

- Kwartaal- of jaar-review van retention-programma
- Baseline-meting bij klant-intake
- LTV/CAC-berekening voor ad-budget beslissingen
- Churn-analyse (waarom verlaten klanten)
- Cohort-vergelijking (is retention beter geworden?)
- MP zegt: "CLV voor [klant]", "cohort analyse", "hoe doen we t/o/v vorig jaar", "repeat rate trend", "churn te hoog"

## Kern-concepten (must-understand)

### CLV: Customer Lifetime Value

**Historische CLV** = som van alle historische revenue per klant (zeker, retrospectief).

**Predictive CLV** = verwachte toekomstige revenue, gebaseerd op patroon. Klaviyo's **Predictive CLV** geeft dit voor elke profile met voldoende history.

**12-maands CLV** = typische standaard: voorspeld revenue in eerstvolgende 12 mnd. Vergelijkbaarder over tijd dan "lifetime" (die groeit met age).

**Formule simpel**:
```
CLV = Gem. orderwaarde (AOV) × Gem. orders per jaar (frequency) × Gem. klant-leeftijd (jaren)
```

**Gedetailleerd** (recurring discount, marge, retention-curve):
```
CLV = (AOV × marge%) × (orders/jaar) × (retention% per jaar) − CAC
```

### Cohort retention

Klanten gegroepeerd naar **acquisitie-maand** (of -week), en hun retentie over tijd in kaart gebracht.

Maand 0 = acquisitie-maand (100%).  
Maand 1 = hoeveel van die cohort heeft nog een order in maand 1?  
Etc.

Een **cohort-retention-matrix**:

| Cohort | M0 | M1 | M2 | M3 | M6 | M12 |
|---|---|---|---|---|---|---|
| 2025-01 | 100% | 24% | 18% | 15% | 12% | 10% |
| 2025-02 | 100% | 27% | 22% | 18% | 14% | 11% |
| 2025-03 | 100% | 30% | 24% | 20% | 16% |: |

**Interpretatie**: cohort 2025-03 heeft betere M1-retentie: vraag: wat veranderde in acquisitie (kanaal, campagne, welcome-flow)?

### Repeat rate

- **Repeat rate 90d** = % van klanten die in de 90 dagen na hun 1e purchase een 2e plaatsen
- **Repeat rate 180d** = idem 180d
- **Repeat rate 365d** = idem 365d

Klassieke benchmarks e-com:
- 90d: >20% gezond, >30% sterk
- 180d: >30%
- 365d: >45%

Bij **subscription**-klanten: bovenstaande werkt anders (subs zijn auto-repeats); meet liever subscriber-churn.

### Churn rate

- **Monthly churn** = (cancelled + unpaid subs of inactieve profielen die criterium overschrijden) / (total active aan begin maand)
- **Klaviyo Predicted Churn Risk** = AI-score per profile

**Churn-definitie** voor non-subscription:
> Klant heeft geen order geplaatst binnen **1.5× zijn/haar gem. tijd-tussen-orders**.

Dat betekent: als gemiddelde gap 60d is, en een klant heeft 90d+ geen order → "churned".

### RFM Model (Recency, Frequency, Monetary)

Voor elke klant scoren op 3 dimensies (quartielen of quintielen), dan groeperen:

- **Recency** = dagen sinds laatste order (1=meest recent, 5=langst geleden)
- **Frequency** = aantal orders
- **Monetary** = totaal spend

5×5×5 = 125 segmenten: te veel voor praktisch gebruik. Condenseer naar action-groups:

| RFM-bucket | Definitie | Action |
|---|---|---|
| Champions | R5 F5 M5 | VIP-treatment, early access |
| Loyal | R3-5 F3-5 M2-4 | Mainstream + incentive A/B |
| Potential loyal | R4-5 F1-2 M1-3 | Onboarding doorzetten |
| At-risk | R1-2 F3-5 M3-5 | Urgent winback |
| Can't lose | R1 F4-5 M4-5 | High-touch winback (hoge CLV) |
| Hibernating | R1-2 F1-2 M1-3 | Sunset-kandidaat |
| Lost | R1 F1 M1 | Sunset direct |

Klaviyo's **Segments AI** genereert vergelijkbare RFM-action-groups automatisch.

### LTV / CAC ratio

**CAC** (Customer Acquisition Cost) = totaal marketing-spend / aantal nieuwe klanten. Meet per kanaal (Meta CAC, Google CAC, Blended CAC).

**LTV / CAC ratio**:
- <1 = verlies per klant (kritiek)
- 1-3 = marginale winst, kwetsbaar
- 3-5 = gezond voor e-com
- >5 = ruimte om harder op acquisitie te zetten
- >10 = mogelijk onder-invested in acquisitie

**Payback period** = CAC / (CLV / periode). Target: <9 mnd voor DTC, <6 mnd voor high-velocity.

---

## Hoe bouw je een cohort-dashboard (Google Sheets of Klaviyo + Shopify-export)

### Stap 1: Export data

**Shopify** via `shopify_tool`:
- Orders met customer_id, created_at, total, line_items
- Customers met created_at (first_order_date)

**Klaviyo** via export:
- Profiles met predicted_clv, predicted_churn, predicted_next_order
- Flow/campaign revenue attribution

### Stap 2: Bouw cohort-matrix (Sheets)

1. Voor elke klant: bepaal `cohort_month = first_order_month`
2. Voor elke klant + elke maand vanaf cohort: did they order? (ja/nee)
3. Pivot: rows = cohorts, columns = month-since-cohort, values = % van cohort die orderde

**Template voor MP** (via `google_workspace_tool`):

```
Sheet 1: Raw order data (customer_id, order_date, value, cohort_month)
Sheet 2: Cohort matrix (pivot)
Sheet 3: Retention curves (line chart per cohort)
Sheet 4: CLV per cohort (cumulatief)
Sheet 5: RFM-buckets verdeling
Sheet 6: Summary dashboard (benchmarks + trends)
```

### Stap 3: Visualisaties

- **Retention matrix** met heatmap (donker = hoog)
- **Retention curves** (per cohort een lijn: convergeren of divergeren?)
- **CLV-by-cohort bar chart** (is CLV voor nieuwe cohorts hoger of lager?)
- **Revenue per klant per maand sinds acquisitie**: zie je een knik na welcome-flow-einde?

### Stap 4: Insights

Typische vragen die een goed dashboard beantwoordt:

1. **Is onze M3-retentie verbeterd jaar-op-jaar?** → Welcome-flow-effect meten
2. **Welke acquisitie-kanaal levert de hoogste M12-CLV?** → Meta vs. Google vs. Organic
3. **Wanneer churnen klanten het vaakst?** → M1 na welcome-flow, M4 na eerste-repeat-trigger
4. **Heeft onze loyalty-programma de cohort-retention gelift?** → Vergelijk pre/post launch
5. **Welke SKU-first-purchase heeft hoogste CLV?** → First-purchase-product-optimalisatie

---

## Predictive Analytics via Klaviyo

Klaviyo biedt out-of-the-box (vanaf 500+ orders):

- **Predicted CLV** (12m forward)
- **Predicted Churn Risk** (Low / Medium / High)
- **Predicted Next Order Date**
- **Predicted Gender** (demografisch)
- **Predicted AOV**
- **Average Time Between Orders**

**Gebruiken als**:
- Segmentatie-basis (Predicted Churn High → urgent winback)
- Flow-splits (Predicted AOV hoog → premium-copy, geen discount)
- Audience-creation voor Meta/Google (seed Lookalikes met top-CLV)
- ROI-oordeel over sunset-timing (at-risk-high versus OK-retention)

**Validate**: check Klaviyo's predictions maandelijks tegen werkelijke data. Predictive accuracy moet >70% zijn op churn-risk (klassieke confusion-matrix).

---

## Maandelijks retention-dashboard template

Per klant, in `<klantmap>/retention-lifecycle/reports/retention-YYYY-MM.md`:

```markdown
## Retention Dashboard, <klant>, YYYY-MM

### Executive Summary (3-5 bullets)
- 
- 

### Cohort performance
- Nieuwste cohort (maand X): acquisitie-kosten €, M1-retention __%, M3-__, M6-__
- Vergelijk met vorig jaar samen-maand: __% delta
- Trend M3-retention laatste 6 cohorts: [stijgend/vlak/dalend]

### CLV
- Gem. 12m CLV (laatste 12 cohorts): €___ (vs. jaar terug €___)
- Top 10% CLV segment: €___
- Predictive CLV top decile (Klaviyo): €___

### Repeat rate
- 90d: __%
- 180d: __%
- 365d: __%

### Churn
- Monthly churn rate: __%
- At-risk segment (Klaviyo High churn): ___ profielen
- Sunset in laatste 30d: ___ profielen

### LTV/CAC
- Blended CAC: €___
- Blended 12m CLV: €___
- Ratio: ___ (target >3)
- Payback period: ___ mnd

### Retention acties genomen this month
- 

### Learnings & priorities next month
- 
```

---

## Verbindingen met andere sub-skills

- **Retention-lifecycle-audit**: gebruikt cohort-data in diagnose
- **Retention-lifecycle-flows**: CLV-split voor AOV/incentive-keuzes
- **Retention-lifecycle-campaigns**: RFM-segmenten als send-target
- **Retention-lifecycle-loyalty**: meet subscriber-CLV vs. one-time
- **Retention-lifecycle-reviews**: review-submitters hebben vaak hogere CLV

---

## Non-negotiables

- **Cohort-analyse minimum 1× per maand** voor actieve klanten
- **Nooit CLV kwoteren zonder horizon** (12m vs. lifetime is wezenlijk verschil)
- **Altijd benchmarks + trend**: getallen in vacuüm zeggen niks
- **LTV/CAC-ratio** rapporteren voor elke klant die >€2k/mnd ad-spend heeft
- **Churn-definitie documenteren** in `kpis.md` (per-klant, want varieert)
- **Predictive validation**: Klaviyo-voorspellingen kwartaallijk valideren tegen werkelijkheid
- **Sheets-dashboard** is authoritative, niet losse screenshots in mails
