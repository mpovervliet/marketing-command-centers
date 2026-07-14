# Bidding Strategies — 2026

## Beslisboom

```
Nieuwe campagne?
├── Ja → Maximize Conversions (geen target) — 2-4 weken
│        └── 30+ conv/maand bereikt? → tCPA of tROAS
│
└── Bestaande campagne
    ├── <30 conv/maand → MaxConversions zonder target, óf samenvoegen
    ├── 30-100 conv → tCPA (lead) of tROAS (e-com)
    └── 100+ conv → Max Conversion Value met tROAS floor
```

## Cheat sheet per strategie

| Strategie | Gebruik voor | Voorzichtig bij |
|---|---|---|
| **Manual CPC** | Brand-bescherming, strak beheer, nieuwe accounts met géén tracking | Alles met volume — laat ligt |
| **Maximize Clicks** | Traffic-generatie (top-funnel), nieuwe campagne data-gathering | Conversie-georiënteerde campagnes |
| **Maximize Conversions (no target)** | Nieuwe campagne, leerfase, budget-constrained groei | Als je strak CPA-doel hebt |
| **Target CPA** | Lead-gen waar elke lead vergelijkbare waarde heeft | Variabele waarde per conversie |
| **Maximize Conv Value** | E-com met variabele cart value | Onvoldoende value-tracking |
| **Target ROAS** | E-com 100+ conv/maand met stabiele waarde | <30 conv of instabiele margedata |
| **Target Impression Share** | Brand defense, must-have visibility | Kosten-efficiëntie |

## Smart Bidding golden rules

1. **Geef het algoritme ruimte**. tCPA/tROAS niet agressiever dan historische performance × 0.8
2. **Geen wijzigingen in learning period** (14 dagen na target/strategy change)
3. **Seasonality adjustments** vóór Black Friday / Cyber Monday / verkiezingen / jouw piekweek
4. **Data exclusions** voor tracking-gaten of tijdelijke outages
5. **Portfolio strategies**: alleen als 3+ campagnes hetzelfde doel hebben; anders meer kwaad dan goed

## Bid caps

Smart Bidding zonder caps kan piek-CPCs van €30+ produceren bij auction-volatiliteit. **Altijd een ceiling** voor campagnes die niet absolute brand-defense zijn:
- tCPA met max bid = 3× tCPA
- tROAS met max bid = niet mogelijk; wel budget-cap per dag gebruiken

## Bidding voor Pmax specifiek

- **Pmax Brand**: Max Conv Value zonder tROAS (laat het draaien, brand converteert vanzelf)
- **Pmax Core**: Max Conv Value met tROAS na 50+ conv/30d
- **Pmax Hero SKUs**: agressievere tROAS (hogere winst-per-product)
- **Pmax Clearance**: Max Conv Value, lage tROAS (volume > margin)

## Frederick Vallaeys principe: test altijd met experimenten

- **Nooit bid strategy switchen zonder experiment** als campagne >€50k/mnd besteedt
- Gebruik de ingebouwde **Campaign Experiments** (50/50 split)
- Minimaal 4 weken, liefst 6 weken

## Anti-patronen
- **tCPA onder realisatie**: "ik wil €20 CPA" terwijl hist. €35 → 80% minder volume, geen leer-data
- **Portfolio bidding met té veel campagnes** onder één strategie → gemiddelden-val
- **Constante bid wijzigingen** → algoritme blijft in learning

## Referenties
- [Google Ads — About Smart Bidding](https://support.google.com/google-ads/answer/7065882)
- Frederick Vallaeys (Optmyzr) — AI & Bidding
