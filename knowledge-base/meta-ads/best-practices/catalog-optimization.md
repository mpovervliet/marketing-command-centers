# Meta Catalog & Commerce Optimization — 2026

## Waarom catalog kritiek is

Catalog is de motor voor:
- **ASC** (Advantage+ Shopping Campaigns)
- **DPA** (Dynamic Product Ads, retargeting)
- **Instagram Shop** (organic discoverability + checkout)
- **Commerce Manager** (volledige funnel binnen Meta)

Slechte feed = slechte performance, ongeacht targeting of creative.

## Catalog-bron kiezen

| Bron | Voor wie | Sync | Comments |
|---|---|---|---|
| **Shopify native** | Shopify-klanten | Real-time | Default; "Maximum data sharing" aan |
| **Channable feed** | Multi-platform feed-management | Hourly/daily | Beste voor cross-channel governance + rules |
| **WooCommerce / Magento plugins** | Custom carts | Varieert | Plugin-kwaliteit varieert sterk |
| **Google Merchant Center → Meta** | Cross-platform feeds | Periodiek | Nuttig om feed-rules 1× te onderhouden |
| **CSV upload** | Tiny inventories <100 SKU | Handmatig | Last resort |
| **API direct** | Custom apps / enterprise | Real-time | Volledige controle, hoogste effort |

## Veld-by-veld feed-hygiene

| Veld | Eis | Veelgemaakte fout |
|---|---|---|
| `id` | Uniek, stabiel | Wijzigt bij elke import → resets historie |
| `title` | 60-100 chars, merk + model + USP | Te kort ("Schoen zwart") of stuffed |
| `description` | 150-500 chars | Lege of duplicate met title |
| `availability` | `in stock` / `out of stock` real-time | Cache lag → verkeerde status |
| `condition` | `new` / `refurbished` / `used` | Mist → disapproval |
| `price` | Met currency, incl. BTW | BTW vergeten → mismatch website |
| `image_link` | 1200×1200 minimum, witte/lifestyle | Te klein (resolutie penalisatie) |
| `additional_image_link` | Tot 10 alternates | Niet gebruikt → minder visuele variatie |
| `link` | Direct naar PDP, https | Tracking-params teveel → naam te lang |
| `brand` | Merknaam | Mist of inconsistent (case-sensitive) |
| `gtin` / `mpn` | EAN/UPC/MPN | Mist → verminderde matching |
| `google_product_category` | Officiële taxonomy | Te generiek of mist |
| `custom_label_0-4` | Vrije labels voor sets/POAS | Niet gebruikt |

## Custom labels — strategisch goud

Custom labels zijn vrije strings die je kunt gebruiken voor product sets in ASC, DPA en retargeting. Voorbeeld-toewijzing:

| Label | Waarde |
|---|---|
| `custom_label_0` | Marge-bucket: `high` / `mid` / `low` |
| `custom_label_1` | Seizoen: `spring` / `summer` / `fall` / `winter` / `evergreen` |
| `custom_label_2` | Hero-status: `bestseller` / `new` / `clearance` |
| `custom_label_3` | Stock-velocity: `fast` / `medium` / `slow` |
| `custom_label_4` | Klantsegment-fit: `acquisition` / `retention` |

Met deze labels bouw je product sets:
- "High-margin bestsellers" → eigen ASC met hogere ROAS-target
- "Seasonal acquisition" → seizoens-Pmax-equivalent
- "Slow-moving clearance" → aparte campagne met lagere ROAS-floor

## Product Sets — bouwregels

Maak voor élke catalog minstens deze sets:
- **Bestsellers** (top 10-20 op AOV × volume)
- **High margin** (custom_label_0=high)
- **New arrivals** (last 30d)
- **Seasonal** (custom_label_1)
- **Clearance** (custom_label_2=clearance)
- **Per hoofdcategorie** (collectie-niveau)
- **Per merk** (multi-brand catalogs)

## Disapprovals fixen

Check Commerce Manager → Diagnostics. Top oorzaken:

| Issue | Fix |
|---|---|
| Image unreachable (404) | Image-server issue / hotlink-bescherming |
| Image too small | <500×500 → upload >1200×1200 |
| Title violates policy | Te veel CAPS / promotional ("BUY NOW!!") |
| Description policy | Misleidende claims / "guaranteed" zonder onderbouwing |
| Price mismatch met landing page | Catalog-price ≠ PDP-price → cron-issue |
| Out of stock op site, in stock in feed | Sync vertraging |
| Restricted product (alcohol/health) | Special category-targeting nodig |
| Unsupported language | Locale missing in feed |

**Doel**: <2% disapprovals. Boven 5% = ASC kan minder leveren.

## Channable-specifieke tips (voor MP's klanten)

- Gebruik Channable rules om:
  - Title te concatten: `[brand] [type] [color] - [model]`
  - Custom labels te assigneren obv categorie/marge-data
  - Prijs-rules: BTW automatisch toevoegen
  - Excluden van slecht-converterende SKU's
- Channable export naar Meta = "Facebook" type — verzeker dat alle verplichte velden gemapt zijn
- Schedule update minstens 4× per dag voor real-time pricing

## Instagram Shop

- Vereist Catalog gekoppeld
- Producten getagd op organic posts/Reels = gratis discoverability
- "Shop from Creators" — koppel met creators die jouw producten taggen
- Reviews importeren waar mogelijk (verhoogt conversion)

## Commerce Manager checks (maandelijks)

- Diagnostics: alle indicatoren groen?
- Catalog Quality: hoeveel "Excellent" / "Good" / "Poor"?
- Top performing products: leveren bestsellers nog? Of komen er nieuwe winners op?
- Out of stock %: <5% gewenst (Meta down-rankt frequent OOS items)

## Optimisation cycle (kwartaal)

1. **Top 20 producten review** — krijgen ze de aandacht in catalog-sets?
2. **Bottom 20 review** — moeten ze uit de feed (verlagen overall feed-quality)?
3. **Custom labels herzien** — nog steeds correct?
4. **Marge-data update** (POAS) — als prijzen/inkoop wijzigden
5. **Image-rotatie** — nieuwe seizoens-fotografie waar nodig

## DPA creative-templates

Catalog ads hebben templates met variabelen. Best practices:

- **Keep it simple** — 1-2 templates max
- **Brand-frame** rond product (consistent voor recognition)
- **Prijs altijd zichtbaar** (`{{product.price}}`)
- **Discount-overlay** als product in sale (`{{product.sale_price}}`)
- **CTA in template** ("Shop Now" of branded variant)
- **Reels-formaat** (9:16 templates) sinds 2024 native ondersteund
- **Advantage+ Creative AAN** — Meta past template aan placement aan

## Veelgemaakte fouten

- Catalog updaten <1× per dag → out-of-stock sales kapot
- Title-stuffing met keywords → policy-risk + slechte UX
- 1 image per product → minder visuele test-mogelijkheid
- Custom labels niet gebruiken → geen segmentatie mogelijk
- Catalog niet linken aan Instagram → discoverability mis
- Disapprovals laten oplopen → Catalog Quality score daalt → ASC bereikt minder

## Referenties
- [Meta — Catalog overview](https://www.facebook.com/business/help/1275400645914358)
- [Meta — Commerce Manager](https://www.facebook.com/business/tools/commerce-manager)
- Channable docs (in MP's Channable-tooling)
- [DTC Podcast — Catalog optimization episodes](https://commonthreadco.com/blogs/coachs-corner)
