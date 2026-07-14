# Performance Max Playbook — 2026

## 3 principes

1. **Feed eats strategy.** Slechte feed = slechte Pmax, punt.
2. **Segmentatie via custom labels**, niet via campagnes alleen.
3. **Brand exclusion ON** op álle non-brand Pmax campagnes.

## Campagne-architectuur

Zie `account-structure.md` voor Power Pack. Pmax-specifiek:

```
Pmax — Brand              (brand exclusion OFF, Max Conv Value, 5-10% budget)
Pmax — Core High Margin   (exclusion ON, tROAS, 30-35%)
Pmax — Core Mid Margin    (exclusion ON, tROAS, 25-30%)
Pmax — Hero SKUs          (exclusion ON, aggressieve tROAS, 15%)
Pmax — Seasonal           (seizoen on/off, 10-20%)
Pmax — Clearance          (volume, lage tROAS, 5%)
```

## Asset Group regels

- **3-7 asset groups per campagne.** Genoeg voor thematische cohesie, weinig genoeg voor data per group.
- **Minimaal 30 conversies/30d per asset group** — anders samenvoegen.
- **Ad Strength**: streef Good/Excellent. Average = asset-gap.
- **Eén verhaal per asset group**: headlines ↔ images ↔ video ↔ landing page-context matchen.

## Asset-specs (per group)

| Type | Min | Ideaal |
|---|---|---|
| Headlines (30) | 5 | 15 |
| Long headlines (90) | 1 | 5 |
| Descriptions (90) | 2 | 5 |
| Images (1:1) | 1 | 6+ |
| Images (1.91:1) | 1 | 6+ |
| Images (4:5) | 0 | 4+ |
| Logos (1:1) | 1 | 3 |
| Logos (4:1) | 1 | 2 |
| Videos | 1 | 5-15 |
| Sitelinks (campagne-level) | 4 | 8-10 |
| Callouts | 4 | 8-10 |

**Januari 2026 update**: video max van 5 → 15 per asset group. Google zelf meldt 25-40% betere performance bij video-enabled groups.

## Audience signals

Signalen, niet harde targeting. Google gebruikt ze als sturing.

**Per asset group**:
- Customer Match (buyers-90d, 1000+ records)
- Website visitors (30d, 90d)
- Converters uit andere campagnes
- In-market segments (2-3 relevant)
- Custom segments (keywords + URLs competitors)

## Exclusions (verplicht)

- **Brand exclusion**: AAN op non-brand Pmax (sinds 2023 beschikbaar)
- **Account-level negatives**: via rep — Pmax respecteert die nu
- **Placement exclusion list** (shared): bekende slechte apps/sites
- **Geo-exclusion**: landen waar je niet verkoopt
- **Audience-exclusion**: bestaande klanten in acquisitie-campagnes

## Feed-only vs full-asset

| Modus | Wanneer | Voordeel |
|---|---|---|
| **Feed-only** | Starter e-com, budget <€10k/mnd, data-gathering | 30-45% lagere CPA, dwingt Shopping-spend |
| **Full-asset** | Mature accounts, willen brand-awareness + sales | Multi-channel reach, maar meer budget aan Display/YouTube |

Start feed-only, upgrade na 60-90 dagen met bewezen ROAS.

## POAS integratie

Als klant marge-data heeft → supplemental feed met marge, custom labels per bucket. Verschillende Pmax per marge-bucket = 20-40% winst-verhoging mogelijk.

## Launch protocol

1. Nieuw Pmax: **budget minimaal 10× tCPA per dag** (of 50× product-CPA)
2. **Learning period**: 14-28 dagen, geen wijzigingen
3. **Eerste eval**: dag 21-28
4. **Bid target** zetten na 50+ conversies in 30d

## Audit-signalen (Pmax gaat slecht)

- Asset group strength "Average" of "Poor"
- Shopping-channel aandeel >95% → Google speelt geen Search/YouTube → creative issue
- Brand-keyword traffic opgepikt → exclusion check
- Custom segments niet gebruikt → signals te zwak
- Conv value / Cost dalend 3 weken op rij → creative fatigue of concurrent-shift

## Referenties
- [Google Ads Help — Pmax asset groups](https://support.google.com/google-ads/answer/14528220)
- [Store Growers — Pmax Ultimate Guide 2026](https://www.storegrowers.com/performance-max-campaigns/)
- [Stormy AI — Pmax/AI Max Audit 2026](https://stormy.ai/blog/)
- [Yellow Jack Media — Pmax Best Practices 2026](https://www.yellowjackmedia.com/performance-max-campaigns-2026-best-practices/)
