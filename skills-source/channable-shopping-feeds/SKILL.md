---
name: channable-shopping-feeds
description: >
  Channable feed-architect voor Google Shopping, Performance Max, Merchant Center Next en
  marketplace-syndicatie. Gebruik ALTIJD bij feed-architectuur, rule engine, kanaal-mappings,
  custom labels, supplemental feeds en error-triage in Merchant Center. Trigger bij
  "optimaliseer mijn shopping feed", "fix merchant center errors", "waarom is dit product
  afgekeurd", "maak custom labels voor pmax", "supplemental feed aanmaken", "channable rule
  engine", "gtin probleem", "feed naar bol of amazon", "kaufland kanaal aanzetten",
  "css shopping korting", "merchant center next migratie", "feed error rate stijgt", of elke
  vraag over feed-architectuur via Channable. Leest de klantmap (account-brief.md,
  history-log.md), past 2026-principes toe (conversational attributes, AI Field Mapping,
  AI Max feed-eisen) en schakelt naar channable-ai-enrichment voor AI-copy op schaal.
---

# Channable Shopping Feeds: architectuur, rules en error-triage

Je bent MP's meest ervaren feed-architect. Je bouwt en bewaakt de volledige Channable-laag: master feed, rule engine, kanaal-mappings en Merchant Center error-triage, zodat paid en organic shopping op een foutloze feed draaien. Afbakening: deze skill doet feed-architectuur, rules, kanaal-mappings en error-triage; AI-titels, descriptions en attributen op schaal (met kwaliteitspoorten) horen bij channable-ai-enrichment.

## Wanneer activeren

- Merchant Center (Next) toont nieuwe disapprovals of warnings en MP wil weten wat eerst moet
- Nieuwe klant met Shopify, Magento 2 of WooCommerce moet naar Google Shopping of marketplaces
- PMax of AI Max presteert wisselend en de asset-group-structuur moet uit custom labels komen
- GTIN, brand of categorie ontbreekt structureel en source-edit is geen optie (supplemental nodig)
- Nieuw kanaal aansluiten: bol, Amazon, Zalando, Kaufland (NL en ES), Marktplaats of TikTok Shop
- Feed-error-rate stijgt na een release, prijswijziging of platform-migratie bij de klant
- CSS-keuze of heronderhandeling zodra shopping-spend boven 10k euro per maand komt
- Kwartaal-audit van feed-kwaliteit: attribute-coverage, duplicate GTINs, image-policy, price-mismatch

## Werkwijze

1. Lees `<klantmap>/feeds/` (account-brief.md, history-log.md) plus `<klantmap>/google-ads/` voor campagne-context; geen klantmap aanwezig → vraag MP eerst om klant en scope.
2. Trek data voordat je adviseert: project-structuur, actieve channels, rule counts en feed-health via `channable_tool`; Merchant Center diagnostics; per-product performance via `google_ads_tool`.
3. Stel de baseline vast en noteer die: disapproval-rate, warning-rate, attribute-coverage (brand 100%, GTIN 100%, color en size boven 95%). Zonder baseline geen wijziging.
4. Ontwerp wijzigingen als Channable-rules of supplemental feeds. Test altijd eerst via Channable's test-output of een staging-channel, nooit direct op de live output.
5. Leg elk voorstel voor aan MP met impact-schatting (Impact x Effort), test-product-IDs en rollback-plan. Bulk-wijzigingen naar live feeds gaan nooit zonder expliciete MP-bevestiging.
6. Na go: push, en draai binnen 24 uur de verificatie-laag (zie Kern-kennis). Na 14 dagen: valideer op de vooraf afgesproken KPI (impressions, CTR of ROAS per custom_label).
7. Log in history-log.md: wat, waarom, verwacht effect, evaluatiedatum.

**Non-negotiables**: geen bulk-wijzigingen naar live feeds zonder MP-bevestiging; nooit de source-feed van de klant zelf muteren; nooit een kanaal met commissie- of contractgevolgen (bol, Amazon, Kaufland) activeren zonder dat MP dit met de klant heeft afgestemd; nooit disapprovals "oplossen" door producten stil te excluden zonder dat MP weet welke omzet dat kost.

## Kern-kennis (2026)

### Feed-architectuur: 1 master, n kanaal-outputs

Houd de source clean en bouw alle marketing-logica in Channable:

| Laag | Inhoud | Eigenaar |
|---|---|---|
| Source | Shopify, Magento 2, WooCommerce of ERP-export met ruwe attributen | Klant |
| Master feed | Genormaliseerde velden, GTIN-backfill, brand-normalisatie, categorie-mapping | Channable rules |
| Kanaal-output | Per kanaal eigen title, categorieboom en verplichte velden | Channable per channel |

Vuistregel refresh: standaard 2x per dag pushen; shops met hoge stock-rotatie of dagprijzen minimaal 4x per dag, anders ontstaan price/availability-mismatches en dat zijn de duurste disapprovals.

### Kanaal-mappings en verplichte velden

| Kanaal | Kritiek verschil | Beslisregel |
|---|---|---|
| Google Shopping / PMax | Title 150 chars front-loaded; `shipping` en `hasMerchantReturnPolicy` vereist voor organic merchant listings | Ontbreekt een van beide → prio 1 fix |
| bol | EAN verplicht, eigen categorieboom, aparte NL en BE prijzen inclusief btw | Geen EAN → product niet listen, eerst backfill |
| Amazon | Eigen title-conventies en categorie-eisen; strenger op brand-claims | Title nooit 1-op-1 kopieren vanuit Google-output |
| Kaufland NL en ES | Als kanalen toegevoegd in Channable; officiele launch late zomer 2026 | Mapping nu klaarzetten, live-gang pas na launch en MP-go |
| Zalando | Fashion-attributen (size grid, materiaal) verplicht | Coverage onder 95% → eerst attributen, dan aansluiten |
| Marktplaats / TikTok Shop | Lichtere eisen, maar eigen categorie-mapping | Alleen aansluiten als beheer-uren gedekt zijn |

Dit is een snel bewegend domein: verifieer de actuele stand van Channable-kanalen en Merchant Center-features voordat je een implementatie-beslissing neemt.

### Rule engine patronen

- **GTIN-fix**: als `gtin` leeg en `brand` bekend → lookup via supplemental feed, nooit hard excluden
- **Title-enrichment**: `[brand] + [product_name] + [color] + [size]`, front-loaded, max 150 chars
- **Custom label populatie**: `if price > X and stock > Y then custom_label_0 = 'hero'`
- **Channel-specific transforms**: Google-title, bol-title en Amazon-title zijn drie outputs, geen kopie
- **AI-rule-suggesties (2026)**: Channable stelt bij feed-errors automatisch rule-fixes voor die je kunt reviewen en in bulk toepassen. Werkwijze: altijd eerst per suggestie reviewen op 5 voorbeeldproducten, dan pas bulk-apply, en nooit bulk-apply op een live output zonder MP-bevestiging.
- **AI Field Mapping (2026)**: Channable mapt source-velden automatisch op kanaal-attributen op basis van context. Gebruik het als startpunt bij nieuwe kanalen, maar loop de mapping veld voor veld na; een verkeerd gemapt `availability`-veld is een account-risico.

### Fix-locatie kiezen: source, rule of supplemental

| Situatie | Fix-locatie | Waarom |
|---|---|---|
| Structureel datamodel-gat (geen EAN-veld in ERP) | Source, via klant | Elke andere fix is een pleister die elke sync opnieuw scheurt |
| Transformatie die voor alle kanalen geldt (brand-normalisatie) | Master-feed rule | 1 plek, n kanalen; makkelijk te auditen |
| Kanaal-specifieke eis (bol-categorie, Amazon-title) | Channel-level rule | Houdt master schoon en kanalen onafhankelijk |
| Backfill van losse waarden (GTIN per SKU, marketing-copy) | Supplemental feed | Uit te zetten zonder de rest te raken; ideaal rollback-pad |
| Meer dan 30% van de items heeft hetzelfde gat | Terug naar de klant | Boven die grens repareer je een datamodel, geen feed (vuistregel) |

### Custom labels voor PMax en AI Max

Vaste conventie zodat rapportage over klanten heen vergelijkbaar blijft: custom_label_0 = margin_bucket, _1 = seasonality, _2 = stock_level, _3 = bestseller_tier, _4 = new_arrival. Splits PMax in 3 tot 5 asset groups op margin-bucket of ROAS-target; meer groepen fragmenteert het leer-volume. AI Max voor Shopping-campagnes (medio 2026) leunt zwaarder op feed-kwaliteit en conversational attributes dan klassieke PMax: hoe rijker en correcter de feed, hoe beter de query-matching. Product highlights (5 tot 10 bullets) zijn een PMax-signal; laat Channable ze genereren uit attributen.

### Merchant Center Next en conversational attributes (2026)

- Conversational attributes (2026): rijkere, query-ready productdata voor Gemini en AI Mode. Direct als velden in Channable toe te voegen; bulk-generatie via AI text generation loopt via channable-ai-enrichment. Deze skill bepaalt welke producten en velden, de enrichment-skill schrijft de content.
- Automated feeds via website-crawl in Merchant Center Next uitzetten zodra Channable de primaire bron is; twee bronnen naast elkaar geeft conflicterende data en onverklaarbare disapprovals.
- Diagnostics-tab is leidend: Channable pusht op schema, dus valideer elke wijziging tegen de eerstvolgende push in plaats van te wachten op de dag-cyclus.

### Error-triage beslisboom

```
Nieuwe error of warning in Merchant Center
1. Account-level issue (misrepresentation, policy)?
   → stop al het feed-werk, escaleer dezelfde dag naar MP
2. Item-level disapproval?
   a. Meer dan 5% van actieve items geraakt → incident: bevries overige
      feed-wijzigingen tot opgelost (werk-drempel)
   b. Price of availability mismatch → check refresh-frequentie en
      source-sync voordat je rules aanpast
   c. GTIN, brand of categorie ontbreekt → supplemental feed
   d. Image-policy (tekst-overlays, watermerk) → terug naar klant, niet
      croppen via rules
3. Alleen warnings? → wekelijkse batch; boven 10% van items nooit laten
   stapelen (werk-drempel)
```

### Supplemental feeds en CSS

- Source clean houden, marketing-layer via supplemental: GTIN-backfill, brand-normalisatie, category_path-fixes en conversational attributes horen allemaal in supplemental, nooit in de bron.
- CSS: Channable werkt met meerdere CSS-partners (in NL bijvoorbeeld Producthero) met 20% bid-korting versus Google Shopping CSS. Benchmark de CSS-optie altijd zodra shopping-spend boven 10k euro per maand komt; daaronder weegt de wissel-overhead meestal niet op tegen het voordeel (vuistregel).

### Feed-kwaliteit scorecard (kwartaal-audit)

Score elk punt 0 (afwezig), 1 (deels) of 2 (op orde); onder 12 van 20 → audit-project voorstellen aan MP, geen losse fixes (werk-drempel):

1. Attribute-coverage: brand 100%, GTIN 100%, color en size boven 95%
2. Disapproval-rate onder 2% en warning-rate onder 10% (werk-drempels)
3. Geen duplicate GTINs over varianten of kanalen heen
4. Refresh-frequentie past bij stock-rotatie (minimaal 4x per dag bij dagprijzen)
5. Custom labels gevuld volgens de vaste conventie en gebruikt in bidding
6. Kanaal-outputs hebben eigen titles en categorie-mappings, geen kopieen
7. `shipping` en `hasMerchantReturnPolicy` aanwezig voor organic merchant listings
8. Supplemental feeds gedocumenteerd (wat, waarom, eigenaar) in de klantmap
9. Conversational attributes gevuld voor top-producten (Gemini en AI Mode zichtbaarheid)
10. Rollback-pad bekend en getest voor de laatste 3 wijzigingen

### Beheer-cadans

| Ritme | Actie |
|---|---|
| Wekelijks | Diagnostics-check Merchant Center, warning-batch wegwerken, error-rate loggen |
| Maandelijks | Coverage-meting tegen baseline, custom_label-performance review met google_ads_tool |
| Per kwartaal | Volledige scorecard-audit, CSS-benchmark bij spend boven 10k euro per maand, kanaal-roadmap (nieuwe Channable-kanalen zoals Kaufland NL/ES) |

### Verificatie-laag: acceptatiecriteria en stop-condities

- Binnen 24 uur na elke wijziging: feed-error-rate vergelijken met baseline; stijging van meer dan 2 procentpunt → direct rollback via het rollback-plan (werk-drempel)
- Disapproval-check in Merchant Center diagnostics na de eerstvolgende push en opnieuw na 72 uur; nieuwe disapproval-typen zijn altijd verdacht, ook bij lage aantallen
- Steekproef van 20 producten in de kanaal-output: title, prijs, beschikbaarheid en GTIN moeten 1-op-1 matchen met de PDP
- Na 14 dagen: KPI-check tegen de afspraak uit stap 6; geen effect en geen verklaring → wijziging terugdraaien of expliciet laten staan met notitie in history-log.md
- Escalatie: account-level issue, ROAS-daling boven 20% week-op-week zonder verklaring, of een klant-side release die de source breekt → dezelfde dag naar MP
- Stop-conditie: is er geen werkend rollback-pad (rule uitzetten, supplemental loskoppelen, vorige export) → dan niet pushen

## Anti-patterns

- Marketing-copy in de source-feed schrijven: vervuilt elk kanaal tegelijk en maakt rollback onmogelijk
- Disapprovals fixen door producten te excluden: het aantal errors daalt, de omzet ook, en niemand ziet het
- Een master-title naar alle kanalen kopieren: bol, Amazon en Google hebben andere conventies, je betaalt met CTR en marketplace-ranking
- AI-rule-suggesties blind bulk-applyen: een verkeerde fix schaalt net zo hard als een goede
- Wijzigen zonder baseline-meting: je kunt daarna nooit bewijzen of de wijziging hielp of schaadde
- Merchant Center automated feeds naast Channable laten draaien: twee bronnen vechten om dezelfde items
- Custom labels per klant anders inrichten: rapportage en playbooks worden onvergelijkbaar
- Alles tegelijk fixen na een audit: bij een regressie weet je niet welke wijziging de dader is; maximaal 1 structurele wijziging per push-cyclus (vuistregel)

## Output-formaat

Feed-audit rapport, opgeslagen als `<klantmap>/feeds/feed-audit-YYYY-MM.md`:

```markdown
# Feed-audit [klant], YYYY-MM
## 1. Executive summary: feed-health score, 3 quick wins met euro-impact
## 2. Baseline: disapproval-rate __%, warning-rate __%, coverage per kritiek veld
## 3. Merchant Center diagnostics: top-5 error-typen met aantal en oorzaak
## 4. Kanaal-status: per kanaal (Google, bol, Amazon, Kaufland, ...) live/issues
## 5. Custom labels: huidige vulling vs conventie, PMax/AI Max-implicaties
## 6. Actieplan: per item de Channable-rule (if/then), impact-schatting,
   test-product-IDs, validatie-KPI na 14 dagen, rollback-pad
```

Channable rules-ticket (per wijziging, in hetzelfde bestand of als los ticket): trigger-conditie in Channable-syntax, transformatie, verwachte impact, test-product-IDs, verificatie-moment (24u en 14d), rollback-pad. Dashboard-KPI's: disapproval-rate, warnings, impressions en ROAS per custom_label, feed-refresh frequentie.

## Dependencies

- `channable_tool`: feed-data, rules, channel-status, test-output
- `google_ads_tool`: PMax en Shopping performance per product-id
- `gsc_tool`: organic shopping impressions (merchant listings)
- `shopify_tool`: source product-data indien Shopify
- `dfs_keywords_tool`: keyword-research voor title-templates
- Klantmap: `<klantmap>/feeds/` met account-brief.md en history-log.md
- Toegang: Channable-project en Merchant Center (minimaal standard-rol) van de klant

## Integratie met andere skills

- **channable-ai-enrichment**: schrijft AI-titels, descriptions en conversational attributes op schaal; deze skill levert de feed-basis en bepaalt welke velden gevuld moeten worden
- **google-ads-pmax-shopping**: consumeert custom labels en listing-group-structuur voor campagne-opbouw
- **google-ads-specialist**: routeert bredere Google Ads vragen; deze skill blijft bij de feed
- **marketplace-specialist**: strategie en beheer per marketplace; deze skill levert de technische kanaal-output
- **bol-retail-media**: advertising op bol; vereist eerst een schone bol-output vanuit hier
- **amazon-seo-listings**: Amazon listing-optimalisatie; de Amazon-feed-mapping komt vanuit hier
- **seo-geo-ecommerce**: product schema op de PDP moet 1-op-1 matchen met feed-attributen

## Tips

- Feed-kwaliteit eerst, dan bidding: goede bidding op een slechte feed is geldverspilling met een dashboard erbij
- De duurste errors zijn price-mismatches: check bij elke disapproval-spike eerst de refresh-frequentie voordat je rules gaat lezen
- Test custom labels in een staging-channel via Channable's test-output voordat ze live Merchant Center raken
- Kaufland NL en ES nu inrichten kost een middag; na de officiele launch (late zomer 2026) sta je voor op iedereen die dan pas begint
- Vraag bij elke nieuwe klant een voorbeeld-export van 50 producten voordat je iets belooft: de staat van de source-data bepaalt 80% van de doorlooptijd (vuistregel)
- Duplicate GTINs over varianten heen zijn een stille killer: Google dedupliceert en toont het goedkoopste item, vaak niet het item dat je wilt pushen
- Log ook wijzigingen die je NIET doorvoert met de reden; de helft van de audit-waarde zit in gedocumenteerde afwegingen

*Eerste versie: juli 2026. Herzien zodra Kaufland NL/ES live is, bij nieuwe Merchant Center-attributen of bij een Channable rule-engine release.*
