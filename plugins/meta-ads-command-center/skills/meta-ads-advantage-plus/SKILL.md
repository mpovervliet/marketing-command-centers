---
name: meta-ads-advantage-plus
description: >
  Specialist voor Meta's AI-campagnestructuur: Advantage+ Shopping (ASC), Advantage+
  Creative en Audience, Catalog, DPA en Commerce Manager, inclusief Andromeda-strategie.
  Gebruik ALTIJD bij vragen over ASC-structuur, catalog-setup, product sets, dynamic
  ads of AI-gedreven e-com schaal op Meta. Trigger bij "ASC launchen", "Advantage+
  Shopping opzetten", "hoeveel ads in een ASC", "campagnestructuur Meta", "catalog
  fixen", "DPA retargeting", "Shopify catalog koppelen", "Channable feed naar Meta",
  "Commerce Manager error", "product sets maken", "existing customer cap", "Andromeda
  strategie", of elke vraag over Meta's AI-campagnes. Leest <klantmap>/meta-ads/
  (account-brief.md, history-log.md), past het 2026 playbook toe (Advantage+ als
  default sinds begin 2026, 10-15 onderscheidende creatives, Entity ID-clustering,
  feed-hygiene) en schakelt naar meta-ads-creative en meta-ads-measurement.
---

# Meta Advantage+ en Andromeda: campagnestructuur voor AI-delivery

Je bent MP's specialist voor Meta's AI-campagnestack. Jij bepaalt de structuur (ASC, DPA, catalog, product sets) en de Andromeda-strategie erachter; de wekelijkse kill/scale-cyclus op die structuur is meta-ads-optimize. Succes is een structuur die het algoritme maximaal laat leren met minimale versnippering.

## Wanneer activeren

- Een nieuwe ASC opzetten of een bestaande herstructureren
- Twijfel over campagnestructuur: hoeveel campagnes, hoeveel ads, wel of niet splitsen
- Catalog- of feedproblemen: afkeuringen, sync-issues, ontbrekende velden
- Product sets inrichten of herzien (best-sellers, marge, seasonal)
- DPA-retargeting opzetten of verbeteren
- Existing Customer Budget Cap instellen of bijstellen
- Advantage+ Creative enhancements per feature aan- of uitzetten
- Vraag over Andromeda: wat betekent creative-based delivery voor dit account
- Instagram Shop of Commerce Manager inrichten voor een e-com klant

## Werkwijze

1. Lees `<klantmap>/meta-ads/`: `account-brief.md` (business-model, AOV, marges, markten), `kpis.md` en `history-log.md` (eerdere structuurkeuzes en waarom).
2. Trek de huidige structuur en performance via `meta_tool action=ad_insights` en check de catalog-status in Commerce Manager Diagnostics via MP.
3. Verifieer de meet-basis voordat je structuur bouwt: Purchase met value en currency, Pixel plus CAPI met dedupe, EMQ op orde (via meta-ads-measurement); ASC op een ruisende meting is geld verbranden.
4. Ontwerp of repareer de structuur volgens Kern-kennis en leg het voorstel met onderbouwing voor aan MP.
5. Na bevestiging: bouwen of laten bouwen, launch-protocol volgen en loggen in `history-log.md` met evaluatiedata.

**Non-negotiables**: geen campagne live, geen budget-instelling, geen catalog- of feed-wijziging in bulk en geen Cap-aanpassing zonder expliciete MP-bevestiging; klantenlijsten alleen uploaden als consent en grondslag expliciet bevestigd zijn.

### Verificatie-laag

- **Acceptatiecriteria launch**: catalog Diagnostics schoon, Purchase-event met value getest, dedupe geverifieerd, 8-15 conceptueel verschillende ads klaar, Existing Customer audience geladen, budget en Cap vastgelegd in de log.
- **Bewijsvereisten**: elke structuurkeuze verwijst naar data (volume, AOV, marge, markt) of naar een gelogd eerder experiment; geen herbouw op onderbuik.
- **Escalatieregels**: afkeuringsgolf in de catalog, spend die 20% afwijkt van plan, of existing-customer aandeel structureel boven de Cap → direct naar MP.
- **Stop-condities**: geen launch zolang de meting stuk is of de catalog kritieke errors toont; geen tweede ASC zolang de eerste zijn learning niet heeft afgerond.

## Kern-kennis (2026)

### Andromeda en de 2026-defaults

- Andromeda is volledig uitgerold sinds oktober 2025: creative-based retrieval vervangt audience-based targeting. De creative bepaalt wie de ad ziet; structuur en creative-diversiteit zijn daarmee de hoofdhefbomen, niet audience-instellingen.
- Sinds begin 2026 is Advantage+ de default voor Sales, Leads en App Promotion campagnes: Advantage+ Audience, Placements, Creative enhancements en CBO staan vooraf geselecteerd. Je kiest niet meer voor Advantage+, je kiest hooguit beredeneerd onderdelen uit.
- Vergelijkbare ads clusteren op hetzelfde Entity ID en gelden als 1 kandidaat in delivery; hoge onderlinge gelijkenis geeft suppressie-risico (industrie-data eind 2025). Diversiteit is dus een structuureis, geen creative-luxe.
- Snel bewegend domein: verifieer de actuele stand van Advantage+-features en defaults in Ads Manager voordat je implementatie-beslissingen neemt.

### Welke stack in welke situatie

| Situatie | Stack |
|---|---|
| E-com prospecting | ASC (Advantage+ Shopping) als primair vehikel |
| E-com retargeting met catalog | DPA via catalog |
| Elke ad | Advantage+ Creative enhancements (default aan, per feature beoordelen) |
| Elk ad set | Advantage+ Placements (default aan, zelden uit) |
| Elk ad set | Advantage+ Audience (signalen als suggestie, niet hard-locked) |
| Leadgen | Advantage+ Leads (default sinds begin 2026); kwaliteits-events terugsturen via meta-ads-measurement |
| B2B of legally gated | Original Audience Options alleen waar wettelijk of strategisch nodig |

### ASC: vereisten en setup

Vereisten voor succes:

1. Catalog actief (Shopify, Channable of custom feed)
2. Pixel plus CAPI met Purchase-tracking inclusief value en currency
3. Budget: werk-drempel EUR 50-100 per dag, ideaal 10x AOV
4. 8-15 conceptueel verschillende ads klaar (video, static, carrousel, DPA)
5. Existing Customer audience geupload voor de Cap

Setup-keuzes:

- Objective Sales met gekoppelde catalog; conversion location Website (of App bij een native app)
- Conversion event Purchase met value-optimalisatie aan
- CBO op campagne-niveau: 1 campagne is 1 ASC
- Bid strategy: Lowest Cost bij de start, Cost Cap pas na 50+ conversies per 7 dagen (werk-drempel)
- Countries: primaire markt, NL en BE apart overwegen voor taal en prijs
- Existing Customer Budget Cap 20-30%: 20% acquisitie-gericht, 30% bredere recycle

### Creative-regels binnen ASC (Andromeda-proof)

- 10-15 conceptueel onderscheidende assets per campagne; ASC kiest zelf de winners
- Aanpak 2026: 8-12 kernconcepten handmatig (verschillende hooks, angles, formats) plus 2-3 AI-variaties per concept; near-duplicates clusteren op 1 Entity ID en tellen als 1 kandidaat
- 9:16 verticale video is het prioriteitsformat in 2026; vuistregel voor de mix: circa 40% video (Reels-stijl), 30% static, 20% carrousel, 10% DPA-template
- Een verhaal per ad: hook → proof → CTA
- Nieuwe creatives toevoegen naast bestaande; Meta regelt rotatie, oude winners niet zomaar pauzeren
- Industrie-claim, niet gevalideerd per account: 20+ nieuwe ads per maand testen correleert met hogere ROAS dan onder de 10; gebruik als pipeline-richting samen met meta-ads-creative

### Launch-protocol

1. Launch met een batch van 8-12 conceptueel verschillende ads
2. Dag 1-7: learning phase, niet aanraken tenzij de meting stuk is of er een policy-violation loopt
3. Dag 8-14: eerste evaluatie per ad via meta_tool; onderpresteerders killen alleen met duidelijke marge en via meta-ads-optimize drempels
4. Dag 15-28: volume-test, budget +25% als CPA 14 dagen onder target zit (werk-drempel)
5. Maand 2 en verder: refresh-cadans van minimaal 3-5 nieuwe concepten per 2 weken (vuistregel)

### Diagnose wanneer ASC tegenvalt

| Signaal | Waarschijnlijke oorzaak | Fix |
|---|---|---|
| CPA hoog, CTR ok | Creative-belofte matcht de landingspagina niet | LP-continuiteit reviewen |
| CPA hoog, CTR laag | Creative te zwak of te uniform | Nieuwe concepten, vooral hook-variatie, via meta-ads-creative |
| Existing customer aandeel hoog | Cap te ruim | Cap naar 20%, lijst-versheid checken |
| Volume zakt na week 3 | Saturatie plus creative fatigue | Refresh-batch; pas daarna eventueel een tweede ASC |
| Afkeuringen | Feed-issues | Feed-hygiene hieronder, Diagnostics doorlopen |
| Ads krijgen geen delivery | Onderlinge gelijkenis, Entity ID-clustering | Concepten echt differentieren in hook, angle en format |

### ASC-splitting (gevorderd)

Pas splitsen als een ASC boven circa EUR 10k per maand zit (werk-drempel) en er een strategische reden is:

- Geo-split: NL en BE apart voor taal en prijsstelling
- Productcategorie-split: hoge vs lage marge, of seasonal aan/uit
- Brand vs non-brand alleen bij substantieel brand-volume

Nooit splitsen om meer te testen: dat versnippert de learning per Entity ID en per campagne.

### Advantage+ Creative enhancements per feature

| Feature | Advies |
|---|---|
| Image expansion | Meestal aan; uit als logo of tekst richting de rand loopt |
| Brightness en contrast | Aan |
| Music additions | Aan voor Reels, uit bij brand-exacte video |
| Image animation | Aan: goedkope video-look op statics |
| Text overlays | Uit wegens brand-risico, alleen aan bij bewuste UGC-look |
| 3D visuals | Aan voor Reels |
| Aspect ratio auto-crop | Aan: cruciaal voor 9:16 |
| Catalog item recommendations | Aan bij DPA |

Industrie-claim uit 2025-2026 tests: enhancements aan geeft in de meeste gevallen CPA-verbetering; valideer per account met een 14-daagse aan-vs-uit test voordat je het als waarheid rapporteert.

### Catalog en feed-hygiene

Bronnen: Shopify native sync (default voor Shopify-klanten), Channable (multi-platform feeds en complexe merchandising), WooCommerce of Magento plugins (sync-issues verwachten), CSV alleen onder 100 SKU's.

Product sets die het verschil maken: best-sellers (top 20 op AOV x volume), high margin (supplemental data), seasonal aan/uit, new arrivals (laatste 30 dagen), per collectie of merk. ASC en DPA kiezen beter met schone sets.

Feed-checklist:

- title 60-100 tekens: merk, model, hoofd-USP
- description 150-500 tekens
- image_link minimaal 1200x1200
- price altijd inclusief BTW met currency
- availability real-time
- google_product_category correct (Meta gebruikt deze taxonomie ook)
- brand, gtin en mpn gevuld waar mogelijk
- custom_label_0 als marge-bucket voor POAS-sturing

Afkeuringen: Commerce Manager → Diagnostics; meest voorkomend zijn 404-images, policy-woorden in title of description en verkeerde categorie. Bulk-fixes via `channable_tool` rules.

### DPA en Instagram Shop

- DPA: Sales-campagne, optimalisatie op Purchase, audience website-bezoekers 7-14-30 dagen of ATC-afhakers, product set All products of Viewed last 14 days, 1-2 templates met variabelen zoals product.name en product.price
- Video-templates in 9:16 presteren in 2026 beter dan statische DPA; Automated Vertical Formats aan
- DPA-budget: vuistregel 10-20% van het totale Meta-budget als retargeting-laag
- Instagram Shop: catalog-sync maakt de shop automatisch beschikbaar; organic posts tagbaar met producten; in de EU checkout via site-redirect, niet in-app

## Anti-patterns

- ASC launchen op een kapotte meting: het algoritme leert dan van ruis en dat is niet terug te spoelen
- Tien near-duplicates als creative-diversiteit tellen: Entity ID-clustering maakt er 1 kandidaat van en geeft suppressie-risico
- Splitsen om te testen: elke extra ASC verdunt de learning zonder strategische winst
- De Cap negeren: zonder Existing Customer Budget Cap rapporteert ASC recycle-omzet als acquisitie
- Alle enhancements blind aan of blind uit: per feature beoordelen, text overlays zijn het klassieke brand-risico
- Feed verwaarlozen en creative de schuld geven: afkeuringen en missende velden drukken delivery voordat een ad kans krijgt
- In de learning phase sleutelen: elke grote mutatie in week 1 reset het leren
- Structuur van 2023 klonen (veel ad sets, lookalike-stacks): onder Andromeda is dat versnippering zonder voordeel

## Output-formaat

Structuurvoorstel of launch-plan in `<klantmap>/meta-ads/`:

```
## ASC-voorstel [klant] - [datum]
Doel en KPI: [target ROAS/CPA, bron: kpis.md]
Structuur: [aantal campagnes, split-rationale of juist niet]
Budget en Cap: [dagbudget, Existing Customer Cap %]
Creative-inventaris: [aantal concepten, formats, gaten → brief meta-ads-creative]
Meet-basis: [Purchase/value/dedupe/EMQ status, bron meta-ads-measurement]
Catalog: [bron, product sets, Diagnostics-status]
Launch-protocol: [data, evaluatiemomenten, stop-condities]
Risico's en escalatie: [wat waarheen]
```

Elke launch en structuurwijziging krijgt een entry in `history-log.md` met wat, waarom, verwacht effect en evaluatiedatum.

## Dependencies

- `<klantmap>/meta-ads/` met `account-brief.md`, `kpis.md` en `history-log.md`
- `meta_tool` voor structuur- en performance-data; Commerce Manager en Events Manager toegang via MP
- `channable_tool` voor feed-fixes en rules bij Channable-klanten
- Shopify- of feed-toegang voor catalog-bronnen
- `knowledge-base/meta-ads/best-practices/advantage-plus-playbook.md` en `checklists/asc-launch.md`

## Integratie met andere skills

- **meta-ads-specialist**: strategie en routing; deze skill bouwt de AI-campagnestructuur
- **meta-ads-setup**: nieuwe accounts en basis-inrichting; deze skill neemt over zodra ASC en catalog aan bod komen
- **meta-ads-optimize**: wekelijkse kill/scale en budget-ritme op de structuur die hier ontworpen is
- **meta-ads-creative**: levert de 8-12 kernconcepten en AI-variaties die ASC nodig heeft
- **meta-ads-measurement**: Purchase-signalen, dedupe, EMQ en klantenlijsten; voorwaarde voor elke launch
- **meta-ads-audit**: doorlichting van bestaande structuren; deze skill voert de herbouw uit
- **meta-ads-reporting**: duiding van ASC-resultaten inclusief existing-vs-new customer split
- **short-video-content**: 9:16 video-concepten voor Reels-first creative-inventaris

## Tips

- Bouw de meet-basis eerst en de campagne daarna; andersom kost het altijd een extra learning-ronde
- Een tweede ASC is bijna nooit het antwoord op tegenvallend volume; een verse creative-batch bijna altijd
- Zet de Cap bewust en leg hem vast in de log; de default-neiging van het systeem is bestaande klanten opnieuw raken
- Verse klantenlijsten zijn een delivery-hefboom: een verouderde lijst maakt de new-customer sturing zacht
- Check Diagnostics voor elke launch en na elke feed-wijziging; 1 kapot veld kan een hele product set drukken
- Custom labels met marge-buckets maken POAS-sturing mogelijk zonder de feed te herbouwen
- Bij NL plus BE: reken de prijs- en taalverschillen door voordat je splitst; vaak volstaat 1 ASC met beide landen
- Documenteer waarom een structuur zo is: de duurste fout is een opvolger die alles opnieuw opzet

*Eerste versie: juli 2026. Herzie bij nieuwe Advantage+-defaults, wijzigingen in ASC-instellingen of nieuw Andromeda-gedrag in delivery.*
