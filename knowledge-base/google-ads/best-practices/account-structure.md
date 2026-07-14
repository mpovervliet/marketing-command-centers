# Account Structure — 2026 Best Practices

## De kernvraag: hoe veel campagnes, ad groups, asset groups?

### Regel 1: volg het conversion volume
- **30+ conversies per campagne per maand** → kan alleen draaien op Smart Bidding
- **Onder 30**: samenvoegen tot dit wel lukt, anders handmatig

### Regel 2: STAG, geen SKAG
Sinds Google's close-variant-expansion (2018) en de dood van ETA's (2022) werkt SKAG niet meer.
- **Single Theme Ad Group (STAG)**: 3-20 thematisch-gerelateerde keywords per ad group
- SKAG alleen voor absolute top-keywords met eigen LTV en rechtvaardiging

### Regel 3: segmentatie-assen in volgorde
1. **Kanaal** (Search / Shopping / Pmax / Demand Gen / Video) — altijd apart
2. **Doelstelling** (acquisitie vs retentie, high margin vs volume)
3. **Productcategorie** (bij >5 categorieën)
4. **Regio/taal** (bij multi-country)
5. **Seizoen/promo** (optioneel)

**Pas op**: elke extra as = meer campagnes = minder data per campagne. Stoppen waar volume ophoudt.

## Het Power Pack (2026)

Google's eigen aanbevolen stack, geverifieerd door praktijk:

```
50-70% budget  → Performance Max (Pmax)
20-40% budget  → AI Max for Search
5-15% budget   → Demand Gen (awareness/consideration)
Plus altijd    → Brand-only Search campagne (apart)
```

**Voor B2B/lead-gen schuift het naar:**
```
20-30%  → Pmax (met OCI upload!)
50-60%  → AI Max Search / Standaard Search
10-20%  → Demand Gen
```

## Hiërarchie in één klant

```
MCC
└── Customer (klant)
    ├── Brand Search (aparte campagne, aparte budget)
    │   └── Brand ad groups
    │
    ├── Pmax — Core (70% Pmax budget)
    │   ├── Asset Group: Category A
    │   ├── Asset Group: Category B
    │   └── Asset Group: Category C
    │
    ├── Pmax — Hero SKUs (20%)
    │   └── Asset Group: Top producten
    │
    ├── Pmax — Brand (10%, exclusion OFF)
    │   └── Asset Group: Brand
    │
    ├── AI Max Search — Generic
    │   ├── Ad Group: Thema 1
    │   └── Ad Group: Thema 2
    │
    ├── Demand Gen (optioneel)
    │
    └── Shared resources
        ├── Negative keyword lists
        ├── Audience lists (Customer Match, website)
        ├── Bidding portfolios
        ├── Asset libraries
        └── Labels (voor naming conventions)
```

## Naming conventions (belangrijk voor reporting)

```
[Kanaal] | [Doel] | [Segment] | [Optioneel]
```
Voorbeelden:
- `Pmax | Core | High Margin | NL`
- `Search | Acquisitie | Regendouches | Exact`
- `DGen | Awareness | Video | EU`

Gebruik `|` als scheidingsteken voor makkelijk filteren in Sheets/Looker.

## Shared resources setup

**Altijd aanmaken als eerste** bij een nieuw account:
- Shared negative keyword list (1 voor account-brede + 1 per campagne-type)
- Shared placement exclusion list
- Shared audiences (Customer Match buyers, website visitors, converters)
- Shared bidding strategies (alleen bij ≥3 campagnes met gelijk doel)

## Anti-patronen om te vermijden

- **1 Pmax voor alles** — werkt alleen bij <100 SKUs en klein budget
- **10+ campagnes met <30 conv/maand** — Smart Bidding kan niet leren
- **Brand + non-brand in 1 campagne** — kannibalisatie, onmogelijk te scheiden
- **Experimenten zonder einddatum** — eigen ruis
- **Dezelfde keywords in meerdere ad groups** — intern concurrentiemodel

## Referenties (extern)
- [Google Ads Help — Account structure](https://support.google.com/google-ads/)
- [Store Growers — Account structure 2026](https://www.storegrowers.com/)
- [ZATO / Kirk Williams — Pmax structurering](https://zatomarketing.com/)
