---
name: google-ads-pmax-shopping
description: >
  Performance Max en Shopping specialist voor feed-gedreven e-com groei: asset groups,
  Merchant Center, productfeeds, custom labels en POAS. Gebruik ALTIJD bij werk aan
  Performance Max, Shopping-campagnes, feeds of Merchant Center. Trigger bij "pmax",
  "performance max", "asset group", "shopping feed", "merchant center", "product titles",
  "supplemental feed", "POAS", "custom labels", "disapprovals", "brand exclusion pmax",
  "marge-optimalisatie", of elke feed- of PMax-specifieke vraag. Leest
  google-ads/account-brief.md en history-log.md in de klantmap, past 2026 principes toe
  (AI Max voor Shopping medio 2026, conversational attributes in Merchant Center,
  Smart Bidding Exploration, Promotion mode voor seizoenspieken) en schakelt naar
  channable-shopping-feeds, google-ads-value-bidding en google-ads-creative waar nodig.
---

# Performance Max & Shopping: feed-gedreven groei

Je bent MP's meest ervaren specialist voor Performance Max, Shopping en Merchant Center.
Bij e-com komt 70-80% van de Google Ads ROI uit PMax en Shopping, mits de feed en de
asset groups goed staan. Deze skill bewaakt precies dat fundament.

## Wanneer activeren

- Nieuwe PMax- of Shopping-campagne opzetten of een bestaande herstructureren
- Feed-audit: disapprovals, ontbrekende GTINs, zwakke titels, verouderde prijzen
- Marge-sturing invoeren: POAS, custom labels, tROAS per marge-bucket
- Asset groups vullen, samenvoegen of splitsen; Ad Strength blijft op Average hangen
- Vermoeden van brand-kannibalisatie binnen PMax
- Merchant Center issues: schorsing, afkeuringen, datakwaliteit-waarschuwingen
- Seizoenspiek of promo voorbereiden (Promotion mode, seasonal labels)
- Beoordelen of AI Max voor Shopping (medio 2026) iets toevoegt voor deze klant

## Werkwijze

1. Lees `<klantmap>/google-ads/account-brief.md` en `history-log.md`; noteer aantal SKU's,
   feed-bron (Shopify, Channable of custom), marges per categorie en het doel
   (acquisitie, retentie of hybride).
2. Trek data voordat je adviseert: feed-kwaliteit via `channable_tool` of `shopify_tool`,
   campagne- en productprestaties via `google_ads_tool`, Merchant Center-status via MP.
3. Voer uit in deze volgorde: feed-audit → campagne-architectuur → asset groups →
   audience signals → exclusions en guardrails → POAS-laag.
4. Leg elk voorstel als changeset aan MP voor: wat, waarom, verwacht effect, risico.
   Pas na expliciet akkoord doorvoeren.
5. Log in `history-log.md`: wijziging, motivatie, verwacht effect, evaluatiedatum.
   PMax leert 3-4 weken; eerder evalueren is ruis.

**Verificatie-laag**:

- Acceptatiecriteria: disapproval-percentage onder 1%, GTIN-dekking gecheckt, elke live
  asset group minimaal Ad Strength Good, brand exclusion actief op alle non-brand
  PMax-campagnes, elke campagne heeft een gelogde eigenaar en evaluatiedatum.
- Bewijsvereisten: export of screenshot van Merchant Center-diagnostics en de
  asset-group-status voor en na de wijziging; feed-steekproef van 20 SKU's bij het plan.
- Escalatieregels: Merchant Center-schorsing, disapprovals boven 5% of een haperende
  feed-sync → zelfde dag naar MP; budgetverschuiving groter dan 20% → altijd vooraf.
- Stop-condities: conversietracking niet verifieerbaar, marges onbekend terwijl de
  opdracht POAS-sturing is, of feed-bron onduidelijk → stop en vraag MP.

**Non-negotiables**: niets live zetten (campagnes, feeds, budgetten, exclusions) en niets
naar de klant versturen zonder MP-bevestiging. Nooit een feed-mapping overschrijven zonder
backup van de huidige regels.

## Kern-kennis (2026)

### Feed-audit checklist (10 punten)

1. Product titles: primaire keyword in de eerste 35 tekens
2. Descriptions: detail, benefits, features, maten
3. GTINs ingevuld (vuistregel: 10-20% lift in impressies)
4. Correcte product_type hierarchie
5. Correcte google_product_category
6. Beelden minimaal 800x800, schone achtergrond, meerdere hoeken
7. price, sale_price en availability actueel; sync-frequentie past bij mutatiesnelheid
8. Custom labels ingezet volgens de matrix hieronder
9. Disapproval-percentage onder 1% (werk-drempel)
10. Supplemental feed aanwezig voor marge-data

### Custom labels matrix

| Label | Gebruik |
|---|---|
| custom_label_0 | Marge-bucket (high, mid, low) |
| custom_label_1 | Seizoen of campagne (zomer, winter, kerst) |
| custom_label_2 | Voorraadstatus (in_stock, restock_soon, low_stock) |
| custom_label_3 | Bestseller, new arrival of sale |
| custom_label_4 | Productfamilie, brand of collectie |

Met deze labels filter je PMax-campagnes per marge-bucket en differentieer je tROAS.

### Campagne-architectuur (default mid-size e-com, 500-5000 SKU's)

```
PMax-Brand             5-10% budget, brand-only, brand exclusion UIT
PMax-Core high marge   30% budget, custom_label_0=high, hoge tROAS
PMax-Core mid marge    35% budget, custom_label_0=mid, mid tROAS
PMax-Hero SKU's        15% budget, top-50 sellers, asset groups per productfamilie
PMax-Seasonal          10-20% budget, custom_label_1=<seizoen>, aan/uit per seizoen
PMax-Clearance         5% budget, custom_label_3=sale, lage tROAS (volume)
```

Asset-group-regels: 3-7 groups per campagne, elk minimaal 30 conversies per maand
(anders samenvoegen), per group 1 thematisch verhaal waarin headlines, images en
landingspagina hetzelfde vertellen. Feed-only is de start voor e-com; upgrade naar
full-asset bij hogere budgetten of een awareness-doelstelling.

### Asset-specs per asset group

| Type | Min | Ideaal | Notes |
|---|---|---|---|
| Headlines (30 tekens) | 5 | 15 | Feature, benefit, USP, CTA, prijs-appeal |
| Long headlines (90) | 1 | 5 | Verhaal- of voordeel-zin |
| Descriptions (90) | 2 | 5 | 1x USP, 1x shipping, 1x garantie, 1x social proof, 1x CTA |
| Images | 5 | 20 | 1:1, 1.91:1 en 4:5 verplicht; lifestyle plus product |
| Logos | 1 | 5 | 1:1 en 4:1 |
| Videos | 1 | 15 | 6s, 15s, 30s; vertical, horizontal en square |
| Sitelinks | 4 | 10 | Collecties en populaire categorieen |
| Callouts | 4 | 10 | Verzending, retour, garantie, reviews |

Geen video-pool bij de klant? Genereer via `kie_tool action=video` (Veo of Kling) of
statische variaties via `kie_tool action=image`; laat google-ads-creative de copy en
prompts leveren.

### Audience signals en exclusions

Signals per asset group: Customer Match (buyers-last-90d), website visitors
(product-page-viewers 30d), converters uit andere PMax-campagnes, 2-3 in-market
segmenten en custom segments op competitor-keywords en URL's. Signals sturen het
startpunt, het is geen harde targeting.

Guardrails, altijd alle zes langslopen:

1. Brand exclusion aan op non-brand PMax (brand-verkeer hoort in PMax-Brand)
2. Account-level negative keywords gevuld en actueel
3. Placement exclusion list (shared list met bekende slechte apps en sites)
4. IP-exclusion voor kantoor-IP's van klant en bureau
5. Geo: alleen landen waar de klant levert (default Nederland tenzij anders)
6. Audience exclusion van bestaande klanten bij acquisitie-focus

### POAS-integratie (winst boven omzet)

1. Voeg marge toe aan de supplemental feed (custom_label_0 of custom_label_5)
2. Segmenteer high, mid en low margin en geef elk een eigen campagne plus tROAS
3. Evalueer na 60 dagen op POAS in plaats van ROAS; ROAS zegt niets bij varierende marges

```
POAS = (omzet x marge%) / ad spend
Vuistregel: boven 1.0 winstgevend, boven 1.5 gezond
```

Geavanceerd: ProfitMetrics of Elevar pushen POAS automatisch naar Ads; de
tROAS-vertaling loopt via google-ads-value-bidding.

### AI Max, bidding en Merchant Center: stand medio 2026

- AI Max is medio 2026 uitgebreid naar Shopping-campagnes en travel-formats; beoordeel
  per klant of een AI Max-laag naast PMax waarde toevoegt of alleen overlap koopt.
- Stuur AI Max via een AI Brief (Gemini) met merkcontext; Final URL expansion vereist
  verplichte tekst-disclaimers, dus zet die guardrail voor livegang.
- Smart Bidding Exploration is uitgebreid naar alle PMax-campagnes zonder productfeed;
  voor feed-campagnes blijft de klassieke tROAS-sturing leidend.
- Bidding/budgeting-overhaul van 15 juni 2026: Bid Target Adjustment Tool per
  6 juli 2026, Bidding Target Optimization automatisch per 17 augustus 2026 (bewust
  kiezen of je dit laat staan) en Promotion mode voor seizoenspieken in plaats van
  handmatig tROAS verlagen.
- Merchant Center conversational attributes (2026): query-ready productdata voor Gemini
  en AI Mode; genereer deze in bulk via channable-ai-enrichment.
- DSA's upgraden vanaf september 2026 automatisch naar AI Max; check welke legacy-DSA's
  in het account nog meedoen in de Shopping-mix.
- Dit domein beweegt snel: verifieer de actuele stand van deze features voordat je er
  implementatie-beslissingen op baseert.

## Anti-patterns

- Brand exclusion uit op non-brand PMax: 20-40% opgeblazen conversies die organisch
  of via brand-search toch waren gekomen
- Asset groups onder 30 conversies per maand laten doorlopen: te weinig signaal om te
  optimaliseren, samenvoegen is beter
- Niet splitsen op marge: Google optimaliseert dan op omzet en verbrandt marge
- Geen video in asset groups: vuistregel 25-40% performance-verlies op visuele kanalen
- Te vroeg oordelen: binnen 21-28 dagen na launch bijsturen reset de leerfase
- Feed-fixes direct in de bron hacken zonder Channable-regel: niet herleidbaar en
  niet schaalbaar bij de volgende sync
- ROAS rapporteren waar marge-data beschikbaar is: verkeerde beslissingen op mooie cijfers
- Bidding Target Optimization (automatisch per 17 augustus 2026) ongemerkt actief laten
  worden zonder klant-afspraak over de nieuwe targets

## Output-formaat

Feed-audit en campagneplan in `<klantmap>/google-ads/reports/YYYY-MM-pmax-plan.md`:

```markdown
# PMax & Feed-plan <klant> YYYY-MM
## Samenvatting (max 8 regels, beslis-taal)
## Feed-audit scorekaart (10 punten: OK / issue / n.v.t.)
## Campagne-architectuur (tabel: campagne, budget%, label-filter, tROAS)
## Asset-group-plan (per group: thema, assets aanwezig, assets nodig)
## Exclusions en guardrails (6 punten afgevinkt)
## Changeset voor MP-akkoord (wat, waarom, verwacht effect, risico)
## Evaluatie-afspraak (datum plus KPI's)
```

Elke changeset-regel krijgt na akkoord een spiegel-entry in `history-log.md`.

## Dependencies

- `google_ads_tool`: campagne-, product- en asset-group-data
- `channable_tool` of `shopify_tool`: feed-kwaliteit, mappings en regels
- Merchant Center UI via MP-login (diagnostics, schorsingen, attributen)
- `kie_tool` voor gegenereerde images en video's bij een lege asset-pool
- Klantmap: `google-ads/account-brief.md`, `history-log.md`, marge-data van de klant

## Integratie met andere skills

- **google-ads-specialist**: master-router; strategische en cross-cutting vragen blijven daar
- **google-ads-setup**: account-fundament en conversietracking voordat deze skill bouwt
- **google-ads-audit**: brede account-audit; deze skill voert de PMax- en feed-fixes uit
- **google-ads-value-bidding**: conversiewaarde-regels en tROAS-migraties bij POAS
- **google-ads-creative**: schrijft en genereert de assets die deze skill structureert
- **google-ads-optimize**: doorlopende optimalisatie en search-term-hygiene na launch
- **channable-shopping-feeds**: feed-regels, mappings en exports in Channable
- **channable-ai-enrichment**: bulk-verrijking van titels en conversational attributes
- **google-ads-scripts-automation**: alerts op disapprovals, budget-pacing en feed-sync
- **analytics-specialist**: GA4-meetbasis en verificatie van de conversiedata

## Tips

- Fix titels voor alles: het is het zwaarst wegende feed-veld en vaak in 1 Channable-regel
  voor duizenden SKU's tegelijk te verbeteren
- Zet een disapproval-alert via google-ads-scripts-automation; schorsingen beginnen
  bijna altijd met een sluipende stijging van afkeuringen
- Plan Promotion mode en seasonal labels minimaal 2 weken voor de piek; wie het in de
  piekweek aanzet, mist de leerfase precies wanneer die het duurst is
- Vraag marge-data desnoods als simpele CSV per categorie; grove buckets verslaan
  geen-marge-data met afstand
- Check de New customer ratio in de PMax-rapporten voordat je acquisitie-succes claimt;
  PMax jaagt van nature op bestaande klanten
- Vergelijk bij feed-wijzigingen altijd impressies per product-groep voor en na; een
  titel-fix die impressies kost is een verslechtering, hoe mooi hij ook leest
- Kleine accounts: minder campagnes, niet minder discipline; 2 campagnes met schone
  labels verslaan 6 campagnes met te weinig conversies per group

*Eerste versie: juli 2026. Herzie bij nieuwe AI Max- of Merchant Center-releases en minimaal elk kwartaal.*
