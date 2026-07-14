# Shopping & Feed Optimization — 2026

## De ijzeren wet van Shopping
**Feed eats strategy.** Je kunt geen briljante campagne bouwen op een slechte feed. Begin daar.

## Feed health checklist

### Product titles (belangrijkste veld)
- **Primaire keyword in eerste 35 tekens** (mobiel cut-off)
- Volgorde: Brand + Type + Key Attribute + Extra
- Voorbeeld goed: `Hansgrohe Raindance Select E 300 Showerpipe Chroom`
- Voorbeeld slecht: `Nieuw! Prachtige moderne douche — Hansgrohe`

### Product descriptions
- 500-1000 tekens, natuurlijke taal, keyword-rijk maar niet gestuffed
- Benefits vóór features
- Maten, materialen, kleur, use-cases

### Images
- **Min 800×800px**, liefst 1500+ voor Pmax
- Wit / schone achtergrond (Shopping-eis)
- Meerdere hoeken (tot 10 per product)
- Lifestyle-shots voor Pmax asset library

### GTIN / MPN / Brand
- **GTIN** verhoogt impressies 10-20% (Google prioriteert)
- MPN bij producten zonder GTIN
- Brand correct ingevuld (altijd)

### Categorisatie
- **Google Product Category** op laagst mogelijke level (bv. 2902 > 6022 > 5394)
- **Product Type** (eigen hiërarchie) voor interne segmentatie
- Custom labels 0-4 voor Pmax filtering

## Custom labels matrix (cruciaal voor Pmax)

| Label | Waarden | Gebruik |
|---|---|---|
| custom_label_0 | high / mid / low | Marge-bucket → tROAS differentiëren |
| custom_label_1 | summer / winter / bf / xmas | Seizoen, campagne-filter |
| custom_label_2 | instock / restock / low | Inventory status |
| custom_label_3 | bestseller / new / clearance | Positionering |
| custom_label_4 | brandA / brandB | Merk-familie |

## Supplemental feed voor marge (POAS)

Voeg naast de primaire feed een supplemental feed toe met marge-data:
```csv
id, custom_label_0
SKU12345, high_margin
SKU12346, mid_margin
...
```
Updated dagelijks via Shopify/Channable → custom labels → Pmax-filtering.

## Merchant Center gezondheid

- Disapproval % <1% target (klik "Fix all" snel)
- Account suspensie-preventie: GMC-beleid (Retail Suite beleid, misrepresentation, unavailable landing page)
- **Price micro-data** op productpagina's → Merchant Center kan prijzen valideren
- **Structured data** (schema.org/Product) correct (via `techseo-implementation` skill als nodig)
- Free Listings: gratis Shopping-verkeer mee

## Shopping campagne types (niet-Pmax)

Standaard Shopping (buiten Pmax) is nog steeds zinvol voor:
- Brand-only Shopping (scheiding van Pmax-Brand)
- Experiments vs Pmax
- Dead-drop: alleen als Pmax onvoldoende presteert

Maar default is **alles naar Pmax**, mits goed gesegmenteerd.

## Feed tools per platform

| Platform | Tool |
|---|---|
| Shopify | Native Google sales channel of **Channable** / Feedonomics |
| Magento | Native extension of **Channable** |
| WooCommerce | Google Listings & Ads plugin of Feed Manager |
| Shopware | **Channable** |
| Custom | Direct XML/CSV feed + Channable voor rules |

**Channable is de go-to** voor meerdere kanalen + rules. Kan via MCP (zie `channable_tool`) gemanaged worden in Cowork.

## Regional feeds (multi-country)

- Aparte feed per land (niet "default" delen)
- Lokale prijzen, BTW, shipping
- Taal-specifieke titels/descriptions
- hreflang op landing pages

## Anti-patronen

- **Gestuffed titles** ("Regendouche Chroom Koper Modern Goedkoop") → lagere relevance
- **Out-of-stock producten laten lopen** → wasted spend
- **Zelfde titel voor variants** → Google dedupliceert, 1 vertoont
- **Geen price drop tracking** → mis sale opportunities
- **Oude images** met prijzen of sales → misrepresentation risico

## Referenties
- [Google Merchant Center Help](https://support.google.com/merchants)
- [Channable documentation](https://www.channable.com/docs)
- [Feedonomics & Store Growers feed guides](https://www.storegrowers.com/)
