# Meta Conversion Tracking — 2026

## De stack die anno 2026 verplicht is

```
Browser  → Meta Pixel
Server   → Conversions API (CAPI)
Bridge   → Dataset (consolideert beide met event_id dedup)
Match    → Advanced Matching (hashed email, phone, fbp, fbc, IP, UA)
AEM      → Aggregated Event Measurement (8 events geprioriteerd, iOS-cap)
Verified → Domain verification in BM
```

**Zonder CAPI verlies je 30-50% van je conversies in iOS-traffic.** Dat is geen meningsverschil, dat is in 2026 een vaststaand feit.

## Implementatie-paden (gerangschikt op kwaliteit)

| Pad | Voor wie | Effort | Kwaliteit |
|---|---|---|---|
| **Conversions API Gateway** (managed) | Mid-market e-com | Laag | Goed |
| **Server-side GTM** | Mid → Enterprise | Hoog | **Beste** (volledige controle, parameter-rich) |
| **Shopify native CAPI** | Shopify-klant | Laag | Goed (wel: Shopify-version-afhankelijk) |
| **WooCommerce / Magento plugin** | Carts | Middel | OK (kwaliteit varieert) |
| **Zapier / Make** | Quick & dirty | Laag | Beperkt — alleen post-checkout events |
| **Eigen API-implementatie** | Custom apps | Hoog | Beste mits goed gedaan |

**Aanbeveling MP**: voor accounts <€20k/mnd → Shopify CAPI of CAPI Gateway. Voor accounts >€20k/mnd → server-side GTM.

## Event-mapping (e-com standaard)

| User-actie | Meta event | AEM prioriteit | Value? |
|---|---|---|---|
| Page load | PageView | n.v.t. | nee |
| Product view | ViewContent | 7 | nee |
| Add to cart | AddToCart | 3 | optioneel |
| Initiate checkout | InitiateCheckout | 4 | optioneel |
| Add payment | AddPaymentInfo | 5 | optioneel |
| Purchase | Purchase | **1 (top)** | **JA, met currency** |
| Subscription start | StartTrial / Subscribe | 2 | JA |
| Lead form | Lead | varieert | optioneel |

**Voor B2B/lead-gen** prioriteit omdraaien: Qualified Lead op 1, Lead op 2, etc.

## AEM (Aggregated Event Measurement)

iOS 14.5+ users die opt-out kiezen leveren alleen events die binnen je top-8 AEM-prioriteit vallen. Regels:

1. **Domain verified** in BM (anders kun je AEM niet eens configureren)
2. **Top-8 events kiezen** in Events Manager → Aggregated Event Measurement
3. **Purchase op 1** (e-com) — anders sla je purchase-attributie deels mis bij iOS opt-outs
4. **Value optimisation aan** voor Purchase (events met value worden anders behandeld)
5. **Wijzigingen kosten 72u** voordat ze actief zijn — plan wijzigingen vooraf

## Event Match Quality (EMQ)

EMQ = score 1-10 van hoe goed Meta jouw events kan matchen aan FB-users.

| Score | Wat |
|---|---|
| <5 | Slecht — veel events worden niet aan users gematcht |
| 5-7 | Mediocre — waarschijnlijk Advanced Matching incompleet |
| **7-8** | **Doel**: hier moet je zitten |
| 8+ | Excellent (zeldzaam, vaak server-side GTM met alle params) |

**Hoe verhoog je EMQ?**
- Stuur **email** (hashed)
- Stuur **phone** (hashed, met landcode)
- Stuur **fn, ln, ct, st, zp, country** waar bekend
- Stuur **fbp** (Facebook Browser Pixel ID, uit cookie)
- Stuur **fbc** (Facebook Click ID, uit fbclid url-parameter)
- Stuur **client_ip_address** + **client_user_agent**
- Stuur **external_id** (intern user-ID, hashed)

**Tooling**: Conversions API Gateway en sGTM doen dit automatisch correct als je input-streams bevat. Shopify CAPI-native: zorg dat "Maximum data sharing" aan staat in Customer Privacy.

## Dedup tussen Pixel + CAPI

Beide kanalen verzenden hetzelfde event → Meta moet dedupliceren.

**Vereiste**: zelfde `event_id` op beide kanalen voor zelfde user-actie. Plus zelfde `event_name` en zelfde tijdstip (binnen 1 uur).

Check in Events Manager → Diagnostics → "Duplicate events without Event ID" — moet ≤2% zijn.

## Dataset consolidation (sinds 2024)

Vroeger: 1 Pixel = 1 ad-account. Nu: 1 **Dataset** kan over meerdere accounts gebruikt worden.

**Voordeel**: 1 plek voor tracking-config, herbruikbaar voor multi-account klanten.
**Aanbeveling**: nieuwe accounts → Dataset (niet legacy Pixel-flow).

## Veelgemaakte fouten

- **CAPI installeren maar `event_id` vergeten** → events worden dubbel geteld → ROAS lijkt 1.5-2× → klant verliest vertrouwen als dat herkend wordt
- **Advanced Matching niet aan** → EMQ blijft <5 → 25-40% match-loss
- **AEM Purchase op prioriteit 5** in plaats van 1 → iOS opt-outs missen Purchase-attributie
- **Domain niet verified** → AEM kun je niet configureren → defaults zijn random
- **Cookie banner blokkeert Pixel volledig** zonder CAPI-fallback → aliquot user-loss
- **Test events met live event-id** → live data vervuild met test-noise

## Maandelijkse health-check

In `meta-ads-optimize` weekly routine zit een tracking-check. Maandelijks doe je een diepere:

1. EMQ per kritiek event — alles ≥7?
2. CAPI coverage % per event — alles ≥95% voor Purchase/Lead?
3. Dedup rate ≤2%?
4. AEM prioriteit nog logisch (niet sinds vorige maand wijziging in funnel)?
5. Domain verified, no expired SSL?
6. Special Ad Categories: ja/nee correct ingesteld?
7. iOS share van conversions vs Android — gat groter dan markt-baseline (~50/50)?

## Referenties
- [Meta — Conversions API guide](https://developers.facebook.com/docs/marketing-api/conversions-api/)
- [Jon Loomer — Meta tracking deep-dives](https://www.jonloomer.com/)
- [Foxwell Digital — CAPI implementation walkthrough](https://foxwelldigital.com/)
- [Stape — sGTM tooling](https://stape.io/)
