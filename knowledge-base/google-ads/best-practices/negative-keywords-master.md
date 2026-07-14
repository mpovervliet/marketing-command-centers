# Negative Keywords Master Guide

## Waarom negatives kritiek zijn in 2026
Close-variant expansion en AI Max maken je match types breder dan ooit. Zonder goede negatives verbrand je budget aan irrelevante queries. **Negatives zijn je belangrijkste dagelijkse optimalisatie-tool.**

## 4 lagen van negatives

### 1. Account-level negatives (via rep of sinds 2024 via UI beschikbaar)
Brede filters die in élke campagne zouden moeten gelden:
- Concurrent-merknamen (tenzij je ze expliciet target)
- Werkzoekenden-termen ("vacature", "sollicitatie", "jobs")
- Gratis/illegaal-termen ("gratis", "free download", "cracked")
- Locaties waar je niet levert

### 2. Shared lists (per campagne-type)
Organiseer per thema:
- **Shared list — Algemeen Wasted** (account-breed non-converterende termen)
- **Shared list — Jobs/Career** (werkzoekenden)
- **Shared list — DIY/Hobby** (informational, geen koopintentie)
- **Shared list — Brand (non-Brand campagnes)** — zie onder
- **Shared list — Low margin products** (als je ze uit Pmax wil houden)

Koppel shared lists aan meerdere campagnes voor onderhoudsgemak.

### 3. Campagne-level negatives
Specifiek per campagne, bv. productcategorie-uitsluiting in een andere categorie.

### 4. Ad group-level negatives
**Cross-contamination voorkomen tussen ad groups van dezelfde campagne.**
Voorbeeld: Ad group "Regendouche" moet "handdouche" uitsluiten om query-overlap met de Ad group "Handdouche" te voorkomen.

## Brand vs non-brand scheiden

**Verplicht** in account met aparte Brand-campagne:
- Shared list "Brand Terms" met alle brand-variaties (inclusief typos)
- Koppel aan **alle niet-Brand campagnes** (Search, Pmax non-brand)
- Pmax brand-exclusion AAN op non-brand Pmax
- Resultaat: brand-traffic gaat naar Brand-campagne (lagere CPC), non-brand krijgt alleen generic

## Workflow: wekelijkse negative mining

Zie ook `google-ads-optimize` skill. Korte samenvatting:

```sql
SELECT search_term_view.search_term, metrics.clicks, metrics.cost_micros,
       metrics.conversions, ad_group.name, campaign.name
FROM search_term_view
WHERE segments.date DURING LAST_14_DAYS
  AND metrics.clicks >= 3
  AND metrics.conversions = 0
ORDER BY metrics.cost_micros DESC LIMIT 200
```

Classificeer:
- ❌ Irrelevant → negative toevoegen
- 🔄 Relevant maar verkeerde ad group → move query
- ⚠️ Borderline → wacht 14 dagen
- ✅ Relevant + geen conversie (nog) → check intent, mogelijk opwarmende funnel

## Match types bij negatives

- **Exact** `[product]` → blokkeert alleen exacte vorm
- **Phrase** `"product name"` → blokkeert bij bevatten
- **Broad** `product name` → blokkeert bij alle woorden in query

**Gebruik Phrase als default** voor negatives. Exact voor hele specifieke termen die niet per ongeluk mogen blokkeren. Broad negatives zijn gevaarlijk (blokkeren te breed).

## Pmax negatives (sinds 2023)

- **Brand exclusion** toggle per Pmax campagne
- **Account-level negative keywords** werken nu in Pmax (via rep of self-serve)
- Placement-exclusion list op shared list

## Negatives lists om niet te vergeten

| List | Voor |
|---|---|
| Concurrent-merken | Houdt brand-campagnes puur |
| Jobs/Career | "vacature", "banen", "sollicitatie" |
| DIY informational | "hoe maak ik", "zelf installeren", "uitleg" |
| Vergelijking-termen (deels) | "review", "vs" — alleen uitsluiten als niet gewenst |
| Gratis/cracked | "free", "kraak", "illegaal" |
| Low-intent (onderzoek) | "wat is", "betekenis", "definitie" |
| Verkeerde regio / BTW-land | locatienamen waar je niet levert |
| Off-product variants | verkeerde kleuren, maten die je niet hebt |

## Anti-patronen

- **Negatives op exact toevoegen voor iedere vorm** → onmogelijk te onderhouden
- **Concurrent-merken op exact ipv phrase** → mist typos en combinaties
- **Broad negatives met zeldzame kernwoorden** → blokkeert te veel
- **Geen review van negatives** → lists groeien maar worden nooit opgeschoond

## Onderhoud

Elke 3 maanden: audit negative lists op relevantie. Termen die 6 maanden oud zijn en nooit verkeer zien: verwijderen (houdt lists compact).

## Referenties
- Wordstream / Search Engine Land — negative keyword strategies
- AdAlysis (Brad Geddes) — query-mining frameworks
