# Research — Eigen Tests & Benchmarks (Meta)

Deze map bewaart **MP's eigen onderzoek**: A/B-tests, lift-tests, geo-holdouts, creative-experimenten over klanten heen die geleerd zijn en gedeeld kunnen worden.

## Wat in deze map hoort

- Lift-test resultaten (geo-holdout, conversion lift)
- Cross-klant A/B benchmarks (bv. "ASC vs Conv-campagne over 6 klanten")
- Creative-test winners + losers met data
- Hooks-bibliotheek per industrie / segment
- Audience-strategie tests
- Catalog-feed experimenten

## Wat er NIET in hoort

- Klant-specifieke data (blijft in `<klantmap>/meta-ads/`)
- Tijdelijke aantekeningen
- Gevoelige klantinformatie

## Format per onderzoek-entry

Schrijf elk onderzoek als `YYYY-MM-DD_<topic>.md`:

```markdown
# [Topic]
*Onderzoek datum: YYYY-MM-DD | Klanten in scope: [aantal/anonimised]*

## Hypothese
[wat dachten we?]

## Setup
[hoe getest, periode, sample-size]

## Resultaat
[data + statistical significance]

## Conclusie
[wat hieruit concluderen — over klanten heen]

## Implicaties voor playbooks
[welke best practice in `knowledge-base/meta-ads/best-practices/` aanpassen?]
```

## Status

Nog leeg — vul aan over tijd vanuit klant-projecten.

## Eerste onderzoekssuggesties (nice-to-have)

- ASC met Cap 20% vs 30% — welke geeft meer net-new customers per €?
- Reels-only ad-set vs Mixed-placement — bij welke product-categorieën?
- UGC-style vs polished brand-static — performance per industrie
- Frequency-cap test (3 vs 5 op retargeting) — fatigue-impact
- CAPI-only vs Pixel+CAPI dedup — verschil in attribution accuracy
