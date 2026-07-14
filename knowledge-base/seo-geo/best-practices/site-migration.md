# Site Migration — Draaiboek

## Wanneer is iets een "migratie"?

Alles wat het URL-pad, de host, het platform of de site-structuur verandert. Bij twijfel: behandel als migratie.

- **Domain migration** (site.nl → nieuwe-site.nl)
- **Protocol** (HTTP → HTTPS)
- **Subdomain consolidation** (shop.site.nl → site.nl/shop)
- **Platform migratie** (Magento → Shopify, WordPress → headless)
- **URL-structuur wijziging** (bv. `/product/[id]` → `/product/[slug]`)
- **Taxonomie-wijziging** (categorieën samenvoegen / splitsen)
- **IA-rebuild** (alle paden wijzigen)

## Pre-migratie (2-4 weken ervoor)

### Baseline vastleggen
- [ ] Crawl volledige site (Screaming Frog) → URL-inventaris, statuscodes, depth
- [ ] GSC performance-export: 16 maanden per pagina, per zoekwoord
- [ ] Ahrefs/DFS: backlinks + top pagina's per organisch verkeer
- [ ] GA4 baseline: top-landingspagina's, conversies per pagina (12 mnd)
- [ ] Logbestanden: welke URLs crawlt Google actief?
- [ ] Schema-data: backup van huidige JSON-LD

### Redirect-mapping opstellen
- [ ] Elke oude URL → exact 1 nieuwe URL (geen one-to-many zonder reden)
- [ ] Gebruik nauwkeurigste match (niet alles naar homepage)
- [ ] Handhaaf hierarchie waar mogelijk
- [ ] Valideer mapping voor top-100 verkeer-URLs met 2 paar ogen
- [ ] Redirect-chains vermijden: A → B direct, niet A → X → B

### Staging-audit
- [ ] Technische audit op staging (robots.txt, canonical, titel/meta, schema, CWV)
- [ ] `noindex` op staging via IP-whitelist (NIET robots-disallow — dan kunnen ze later nog indexeren met lekken)
- [ ] Testen: alle internal links correct, geen 404's of redirect-loops
- [ ] Hreflang (indien multilingual) opnieuw geconfigureerd
- [ ] Sitemap.xml gegenereerd voor nieuwe URLs

## Migratie-dag

### Tijdvenster
- Low-traffic window (nacht / weekend voor B2C, werkuren voor B2B)
- Freeze op andere wijzigingen die dag
- Rollback-plan klaar (snapshot pre-migratie)

### Executie-volgorde
1. DNS of hosting-switch
2. 301 redirects aan — GEEN 302 (tijdelijk) bij permanente migratie
3. Robots.txt live (productie-versie, niet staging)
4. Sitemap.xml submit in GSC
5. Schema-markup verify
6. Analytics validation (GA4, GTM, FP-pixel) — verkeer meetbaar?

### First-hour sanity checks
- [ ] Steekproef 20 URLs: 301 correct? target laadt?
- [ ] Homepage rendert normaal
- [ ] Checkout / conversie-flow werkt
- [ ] GSC: geen massale 500/404 in real-time
- [ ] GA4: verkeer meetbaar, geen drop naar 0

## Post-migratie week 1-4

### Monitoring dagelijks week 1
- GSC > Coverage: indexering-errors
- GSC > Performance: ranking-drops > 20%
- GA4: organic sessions trend
- Ahrefs: plotselinge backlink-drops
- Log files: welke URLs krijgen 404's of loops?

### Week 2-4
- Google herindexeert grote delen (kan 4-8 weken duren)
- Verwacht tijdelijke ranking-drop 10-30% — terug binnen 4-8 weken
- Redirect-chains fixen (minder hops = sneller herstel)
- Handmatig herindexering-request in GSC voor top-50 URLs

## Post-migratie 1-3 maanden

- Ranking-herstel vergelijken met baseline
- 404's: ofwel alsnog redirecten, ofwel bewust laten
- Internal linking audit: geen links naar oude URLs
- Schema-validatie: alle types nog aanwezig
- Backlink-outreach: top-20 verwijzende domeinen vragen om link-update

## Red flags tijdens / na migratie

- > 30% ranking-drop voor top-100 keywords 4+ weken na migratie → diepe technische audit
- Index-coverage massaal "Excluded" → robots.txt of noindex probleem
- Verkeer-drop > 40% eerste week → 301's checken, GSC-fouten resolven

## Dev-team handover

Levereen bij overdracht altijd:
1. Redirect-map (CSV: oud → nieuw)
2. Pre-migratie baseline-rapport
3. Post-migratie monitoring-plan (eerste 90 dagen)
4. Verantwoordelijkhedenmatrix (wie watcht wat)

## Typische tijdslijn impact

| Periode | Verwacht effect |
|---|---|
| Dag 0-7 | 10-30% ranking-dip |
| Week 2-4 | Herstel begint, 50-70% terug |
| Maand 2 | 80-95% terug |
| Maand 3+ | Volledig hersteld + potentiële groei door schone architectuur |

## Tools

- Screaming Frog (redirect-chains, URL-inventory)
- Sitebulb (redirect-mapping visualisatie)
- httpstatus.io (bulk 301-check)
- GSC / Bing Webmaster (monitoring)
- Redirect Trace / Chrome DevTools

## Referenties

- [Google — How to do a site migration](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- Aleyda Solis — migratie-checklists (learningseo.io)
- Lidia Infante — cross-border migratie case studies
