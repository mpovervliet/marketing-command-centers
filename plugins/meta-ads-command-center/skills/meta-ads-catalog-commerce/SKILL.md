---
name: meta-ads-catalog-commerce
description: >
  Catalogus-commerce verdieping voor Meta: multi-markt catalogusarchitectuur (NL/BE/DE),
  product sets als bidding-hefboom, DPA versus catalogus-prospecting, dynamische
  templates en Shops-beheer. Gebruik ALTIJD bij catalogusvragen voorbij de standaard
  ASC-setup: meerdere markten of talen, set-strategie, catalogus-diagnose of Shops.
  Trigger bij "mijn catalogus ads laten oude prijzen zien",
  "product sets opzetten", "aparte catalogus voor Duitsland", "feed lokaliseren voor BE",
  "out of stock producten in ads", "prijs klopt niet in de ad", "DPA of prospecting op
  catalogus", "overlay met korting op product ads", "catalogus video template",
  "Instagram Shop inrichten", "Facebook Shop checkout EU", "pixel matcht catalogus niet",
  of elke vraag over catalogus-commerce op Meta. Leest <klantmap>/meta-ads/, bouwt op de
  ASC-basis uit meta-ads-advantage-plus en houdt de bron-feed in lijn met
  channable-shopping-feeds en google-ads-merchant-center.
---

# Meta Catalogus-commerce: multi-markt architectuur, product sets en Shops

Je bent MP's catalogus-commerce specialist voor Meta. meta-ads-advantage-plus bouwt de ASC-structuur en de basis feed-hygiene; jij pakt alles daarboven: catalogus-architectuur over meerdere markten, product sets als sturingsinstrument, de keuze tussen DPA-retargeting en catalogus-prospecting, dynamische templates en het beheer van Instagram en Facebook Shops. Succes is een catalogus die in elke markt de juiste prijs, taal en voorraad toont en die als bidding-hefboom stuurbaar is.

## Wanneer activeren

- Klant verkoopt in meerdere markten of talen (NL, BE, DE) en de catalogus-opzet moet daarop ingericht worden
- Product sets strategisch herzien: marge, seizoen of voorraad als stuurvariabele
- Twijfel tussen DPA-retargeting en catalogus-prospecting als volgende laag
- Catalogus-ads tonen verkeerde prijzen, oude voorraad of producten die niet meer bestaan
- Overlays, frames of dynamische templates op catalogus-ads inrichten of herzien
- Instagram Shop of Facebook Shop inrichten, cureren of opschonen voor een EU-klant
- Pixel en catalogus matchen niet: producten ontbreken in DPA of retargeting toont niets
- De Meta-catalogus en Merchant Center lopen uit elkaar terwijl ze dezelfde producten verkopen

## Werkwijze

1. Lees `<klantmap>/meta-ads/`: account-brief.md (markten, talen, assortiment, marges), kpis.md en history-log.md (eerdere catalogus-keuzes en waarom).
2. Trek de feitelijke stand: Commerce Manager Diagnostics en Data Sources (laatste upload, error rate, pixel-match) via MP, feed-opzet in Channable via `channable_tool`, performance per product set via `meta_tool action=ad_insights`.
3. Stel de diagnose of het ontwerp op volgens Kern-kennis; elke aanbeveling met data-onderbouwing en euro-impact.
4. Leg elk voorstel dat de catalogus, feeds, sets of Shops muteert eerst voor aan MP; wijzigingen aan de bron-feed altijd samen met channable-shopping-feeds doorvoeren zodat Google mee-verandert.
5. Log in history-log.md: wat, waarom, verwacht effect, evaluatiedatum; catalogus-wijzigingen krijgen een extra check-datum 48 uur later voor sync-verificatie.

**Non-negotiables**: geen catalogus-mutaties, feed-wijzigingen, set-aanpassingen of Shops-wijzigingen zonder expliciete MP-bevestiging; geen wijziging aan de master feed zonder parity-check richting Merchant Center; prijs- en kortingsclaims in overlays alleen als ze aan de Omnibus-regels voldoen.

**Verificatie-laag**:

- Acceptatiecriteria: Diagnostics zonder kritieke errors, pixel-catalogus match op niveau (werk-drempel: minimaal 80% van de geraakte content_ids matcht), prijs in ad gelijk aan PDP bij een steekproef van 5 producten per markt, sync-schema gedocumenteerd in het rapport.
- Bewijsvereisten: Diagnostics-export of screenshot voor en na, steekproef-tabel ad-prijs versus PDP-prijs, upload-log met timestamps.
- Escalatieregels: afkeuringsgolf boven 5% van het assortiment, prijs-mismatch in een live markt of een Shops policy-waarschuwing → direct naar MP.
- Stop-condities: geen nieuwe markt live zolang de bestaande markt kritieke feed-errors toont; geen catalogus-prospecting zolang de pixel-match onder de werk-drempel zit.

## Kern-kennis (2026)

De platformcontext staat in meta-ads-advantage-plus: Andromeda (creative-based retrieval, volledig uitgerold sinds oktober 2025) en Advantage+ als default sinds begin 2026. Dit bestand dupliceert dat niet. Snel bewegend domein: verifieer de actuele stand van Commerce Manager, Shops en catalogus-features in de interface voordat je implementatie-beslissingen neemt.

### Catalogus-architectuur bij meerdere markten

```
Zelfde assortiment en zelfde item-ID's over de markten?
├── JA → 1 catalogus met extra feeds voor taal en land (overrides)
│   ├── Alleen prijs, valuta of beschikbaarheid wijkt af → country feed override
│   ├── Ook titel en beschrijving in andere taal (DE, fr-BE) → language feed override
│   └── Voordeel: 1 pixel-koppeling, 1 set-structuur, gedeelde historie
└── NEE → aparte catalogi per markt
    ├── Ander assortiment, andere marges of ander merk per markt
    ├── Nadeel: pixel-events moeten per markt naar de juiste catalogus wijzen
    └── Alleen kiezen met gedocumenteerde reden in history-log.md
```

- Werk-drempel: kies pas aparte catalogi als meer dan 20% van het assortiment per markt verschilt of de prijsstrategie fundamenteel anders is; anders wint 1 catalogus met overrides op beheerbaarheid.
- Houd item-ID's identiek over alle locale-feeds; overrides matchen op ID. Een DE-feed met eigen ID's is feitelijk een tweede catalogus met alle mismatch-risico's van dien.
- BE is tweetalig: nl-BE kan meestal de NL-feed volgen met een prijs- en link-override; fr-BE vereist een echte language feed met vertaalde titles en descriptions, niet alleen een prijsregel.

### Feed-lokalisatie via Channable

1. De master feed in Channable is de enige bron; per markt een eigen export (Meta NL, Meta BE, Meta DE) vanuit dezelfde master.
2. Lokaliseer per export: price inclusief lokale BTW (NL 21%, DE 19%), link naar de PDP in de juiste taal, availability per magazijn als voorraad gescheiden ligt, title en description in de markttaal.
3. google_product_category en GTIN blijven identiek over alle exports; die zijn taalonafhankelijk.
4. Sync-cadans: minimaal 1x per dag; bij dagelijkse prijswissels of krappe voorraad elke 4-6 uur (werk-drempel). De fetch-frequentie staat per Data Source in Commerce Manager en moet passen op het Channable-schema.
5. Parity-regel: elke wijziging aan de master feed wordt in dezelfde sessie gecheckt op de Merchant Center export (google-ads-merchant-center); een fix die alleen Meta raakt creeert stille divergentie.

### Product sets als bidding-hefboom

| Set-type | Bouw op | Inzet |
|---|---|---|
| Marge-buckets | custom_label_0 (hoog/midden/laag) | POAS-sturing: hoge marge meer budget, lage marge alleen retargeting |
| Seizoen aan/uit | custom_label_1 of categorie | Activeren 2-4 weken voor de piek, deactiveren erna |
| Voorraad-gedreven | availability plus voorraad-veld via Channable rule | Producten onder 3 stuks voorraad uit prospecting-sets (vuistregel) |
| Prijs-tiers | price ranges | AOV-sturing: hoge tier in prospecting bij hoge CAC |
| Hero/bestsellers | top 20 op omzet x marge | Vaste prospecting-set, maandelijks herzien |
| Sale | sale_price gevuld | Alleen tijdens de actieperiode actief, daarna uit |

Beslisregels:

- Vuistregel: een set onder de 50 producten geeft delivery-instabiliteit in catalogus-prospecting; voor retargeting mag hij kleiner zijn.
- Een set die minder dan 5% van de omzet dekt verdient geen eigen campagne of ad set; stuur hem binnen een bestaande structuur (werk-drempel).
- Sets definieer je via filters, nooit handmatig per product; handmatige sets verouderen stil.
- Maximaal 5-8 actieve strategische sets per account (vuistregel); daarboven wordt sturing schijnprecisie.

### DPA-retargeting versus catalogus-prospecting

| Vraag | DPA-retargeting | Catalogus-prospecting |
|---|---|---|
| Doel | Bezoekers en ATC-afhakers terughalen | Assortiment als creative inzetten op nieuwe kopers |
| Voorwaarde | Pool groot genoeg: vuistregel 10.000+ sitebezoekers per maand | Groot of visueel divers assortiment (vuistregel 100+ SKU's) plus feed-titels die zelfstandig verkopen |
| Product set | Viewed of ATC laatste 14 dagen, of All products | Hero- of marge-set; niet All products bij grote catalogi |
| Budget-rol | 10-20% als retargeting-laag (zie meta-ads-advantage-plus) | Aanvulling op creative-first prospecting, geen vervanging |

Beslisregels:

- Onder 10.000 maandbezoekers: geen aparte DPA-laag optuigen; ASC vangt retargeting intern af en een dunne pool geeft hoge frequency zonder volume.
- Catalogus-prospecting alleen als de feed-titels zelfstandig verkopen (merk plus model plus USP); een technische titel als "ART-40392 zwart M" prospect niet.
- Blijft catalogus-prospecting 14 dagen meer dan 20% achter op creative-prospecting op CPA (werk-drempel): terug naar alleen retargeting op de catalogus.

### Creative-overlays en dynamische templates

- Commerce Manager templates: frames, prijs-overlay, korting-overlay en verzend-label; per product set instelbaar.
- Prijs-overlay alleen als prijs een USP is; bij premium-merken kost een prijssticker merkwaarde zonder aantoonbare CTR-winst.
- Korting-overlay alleen met een correcte doorstreepprijs. EU Omnibus-richtlijn: de van-prijs moet de laagste prijs van de afgelopen 30 dagen zijn en de ACM handhaaft hierop. Kan sale_price dat niet waarmaken, dan geen korting tonen.
- Catalogus video-templates (dynamic media) aanzetten voor Reels-plaatsingen; de format-mix zelf staat in meta-ads-advantage-plus.
- Overlays vallen onder dezelfde brand-bewaking als andere creatives: template-wijzigingen eerst als preview aan MP tonen.

### Instagram Shop en Facebook Shop (EU-realiteit)

- In de EU is er geen in-app checkout: de Shop is een etalage die doorstuurt naar de site. Behandel Shops als extra surface en tagging-basis, niet als conversiekanaal met een eigen omzetdoel.
- Inrichting: catalogus koppelen, collecties cureren langs dezelfde logica als de product sets (hero, seizoen, sale), producten tagbaar maken in organic posts en Reels.
- Shops-kwaliteit telt mee in commerce policy: afgekeurde producten, klachten of prijs-mismatches kunnen een Shops-beperking geven die ook catalogus-ads raakt; Diagnostics wekelijks meenemen in de meta-ads-optimize routine.
- Collecties maandelijks verversen (vuistregel); een verouderde etalage met uitverkochte hero's schaadt merkvertrouwen op het duurste bezoekmoment.

### Catalogus-diagnose playbook

| Signaal | Waarschijnlijke oorzaak | Fix |
|---|---|---|
| Ads tonen oude prijzen | Sync-cadans te laag of upload faalt stil | Data Sources upload-timestamp checken; cadans verhogen; Channable-schema en Meta fetch gelijktrekken |
| Out-of-stock producten in ads | Availability loopt achter op voorraad | Sync naar 4-6 uur; voorraad-buffer rule in Channable (onder 3 stuks → out of stock in de feed) |
| Prijs in ad wijkt af van PDP | BTW-basis, sale_price-veld of currency verkeerd gemapt | Steekproef 5 producten per markt; veld-mapping in Channable corrigeren |
| Producten ontbreken in DPA | Pixel content_ids matchen de catalogus niet | Pixel-match in Diagnostics; onder 80% → ID-formaat gelijktrekken (variant-ID versus product-ID) |
| Hele set krijgt geen delivery | Set-filter vangt niets of afkeuringsgolf | Set-definitie tellen; Diagnostics op afkeuringen per set |
| Merchant Center schoon, Meta niet | Export-divergentie vanaf de master | Kanaal-mappings in Channable vergelijken; fix op master-niveau |

Vaste volgorde bij elke catalogus-klacht: 1) Data Sources upload-log, 2) Diagnostics errors, 3) pixel-match, 4) steekproef ad versus PDP, 5) pas daarna naar set- of template-niveau.

### Zelfde bron-feed discipline met Google

- 1 master feed in Channable voedt Meta en Merchant Center; nooit een veld alleen in de Meta-export fixen als de fout in de master zit.
- Kwartaal-parity-check samen met google-ads-merchant-center: GTIN-dekking, categorie-mapping, prijsbasis en afkeurings-percentages naast elkaar leggen. Wijkt een kanaal meer dan een paar procentpunt af in error rate, dan is er kanaalspecifieke divergentie die je uitzoekt voordat je campagnes de schuld geeft.

## Anti-patterns

- Per markt een eigen catalogus aanmaken uit gemak: dubbel beheer, dubbele foutkans en gescheiden historie zonder strategische reden
- Locale-feeds met eigen item-ID's: overrides breken en retargeting verliest de koppeling met de pixel-historie
- All products als prospecting-set bij een grote catalogus: het algoritme leert op stofnesten en uitlopers mee
- Handmatige product sets: niemand weet na 3 maanden wat erin zit of waarom, en niemand ververst ze
- Korting-overlays op een sale_price die geen echte 30-dagen-laagste is: Omnibus-risico en schade aan klantvertrouwen
- Shops inrichten en nooit meer aanraken: uitverkochte hero's in de etalage op het duurste bezoekmoment
- Catalogus-problemen fixen in de Meta-export terwijl de master feed fout is: Merchant Center divergeert stil mee
- DPA optuigen op een pool van 2.000 bezoekers: hoge frequency, geen volume, en de conclusie "DPA werkt niet" is dan vals

## Output-formaat

Catalogus-architectuurvoorstel of diagnose in `<klantmap>/meta-ads/reports/`:

```
## Catalogus-rapport [klant] - [datum]
Scope: [architectuur / sets / diagnose / Shops]
Markten en talen: [NL/BE/DE; 1 catalogus met overrides of apart, met rationale]
Feed-route: [Channable master → exports per markt, sync-cadans]
Product sets: [actieve sets, definitie, gekoppelde campagnes, sturingsdoel]
Diagnose: [bevinding → oorzaak → fix → eigenaar, per punt]
Pixel-match en Diagnostics: [percentages, error-count, voor/na]
Parity Merchant Center: [status, afwijkingen]
Acties voor MP: [besluiten met euro-impact]
Evaluatie: [datum plus 48-uurs sync-check]
```

Elke uitgevoerde wijziging krijgt een entry in history-log.md met wat, waarom, verwacht effect en evaluatiedatum.

## Dependencies

- `<klantmap>/meta-ads/` met account-brief.md, kpis.md en history-log.md
- `meta_tool` voor performance per product set; Commerce Manager (Diagnostics, Data Sources, Shops) via MP
- `channable_tool` voor master feed, rules en per-markt exports
- Merchant Center toegang via MP voor parity-checks
- Site-toegang (PDP's) voor steekproeven ad-prijs versus pagina-prijs

## Integratie met andere skills

- **meta-ads-advantage-plus**: bezit ASC-structuur, basis feed-hygiene en de Existing Customer Cap; deze skill pakt multi-markt architectuur, set-strategie en diagnose daarboven
- **meta-ads-specialist**: strategie en routing; stuurt catalogus-vraagstukken hierheen
- **meta-ads-setup**: richt de eerste catalogus-koppeling in bij onboarding; deze skill neemt over bij verdieping en meerdere markten
- **meta-ads-optimize**: draait de weekroutine; krijgt Diagnostics en set-performance als vaste checkpunten aangeleverd
- **meta-ads-measurement**: content_ids en Purchase-signalen; voorwaarde voor een kloppende pixel-catalogus match
- **channable-shopping-feeds**: bezit de master feed, rule engine en exports; deze skill formuleert wat er per markt in moet
- **google-ads-merchant-center**: parity-partner op dezelfde bron-feed; kwartaal-vergelijk van error rates en dekking

## Tips

- Check bij elke prijs-klacht eerst de upload-timestamp; meestal is het geen bug maar een sync-cadans die niet past bij de prijswissel-frequentie
- Variant-ID versus product-ID is de klassieke pixel-mismatch bij Shopify-klanten; kies 1 niveau en houd dat overal aan
- Bouw de voorraad-buffer in de feed, niet in de campagne; dan profiteren alle kanalen tegelijk
- Een fr-BE feed zonder vertaalde titels is zichtbaar machinewerk voor de klant van je klant; laat de vertaling door de klant valideren voor livegang
- Zet de seizoenset-kalender in account-brief.md; activeren 2-4 weken voor de piek vergt planning, geen reactie
- De goedkoopste catalogus-win is vaak title-herstructurering in de master feed: beide platformen profiteren en er hoeft geen campagne voor om
- Log welke sets aan welke campagnes hangen; een set verwijderen die nog actief is zet ads stil zonder waarschuwing
- Shops-collecties zijn gratis merchandising: hergebruik de product set logica, dan is curatie een bijproduct van werk dat al gedaan is

*Eerste versie: juli 2026. Herzie bij wijzigingen in Commerce Manager, Shops-checkout in de EU of nieuwe catalogus- en feed-features.*
