# Hypothesis-Backlog
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Elke hypothese volgt het vaste format hieronder. Hypothesen komen voort uit de data-baseline (fase 2) en de diagnose (fase 3). Prioritering via het ICE-veld per hypothese en de samenvattende ICE-kolom onderaan dit bestand.

## Format per hypothese

```
## H[X]: [korte titel]

- **Probleem:** [wat is er mis, in een zin]
- **Bewijs:** [concrete cijfers of observaties met Evidence IDs]
- **Hypothese:** [als we X doen, dan stijgt/daalt Y, omdat Z]
- **Pagina/flow:** [waar grijpt dit in]
- **KPI:** [primaire meetbare KPI, conform Data-Contract]
- **Segment:** [device, kanaal, new/returning]
- **Ontwerpimpact:** [wat verandert er zichtbaar]
- **Testvorm:** [A/B, gefaseerde release, voor/na-meting]
- **Risico:** [wat kan er misgaan, incl. merk- en LTV-risico]
- **ICE:** [Impact x Confidence x Ease, schaal 1-5, gemiddelde]
```

## Voorbeeld (fictief, generieke e-commerce)

## H1: Prijstransparantie op de productkaart

- **Probleem:** bezoekers haken af in de eerste checkoutstap; prijsonzekerheid is het meest genoemde bezwaar.
- **Bewijs:** E-BEHAV-FUNNEL-001 (grote drop stap 1), E-SURVEY-PRIJS-001 (prijs = blokkade #1), E-REVIEW-PRIJS-001 (klacht "prijs hoger dan verwacht").
- **Hypothese:** als elke productkaart de volledige prijsopbouw toont (eenmalig plus terugkerend), stijgt de doorstroom van checkout-start naar gegevens, omdat prijsverrassing verdwijnt.
- **Pagina/flow:** productoverzicht plus checkout.
- **KPI:** begin_checkout → gegevens-stap rate.
- **Segment:** alle devices, start mobiel.
- **Ontwerpimpact:** nieuwe prijsopbouw-component op de kaart.
- **Testvorm:** A/B 50/50.
- **Risico:** zichtbaarheid van de reguliere prijs kan kortetermijn-conversie drukken.
- **ICE:** [invullen]

---

## H1: [titel]

[invullen volgens format]

## H2: [titel]

[invullen volgens format]

## Prioriteitsoverzicht

| Hypothese | ICE | Sprint | Status |
|-----------|:---:|--------|--------|
| H1 | | | |
| H2 | | | |
