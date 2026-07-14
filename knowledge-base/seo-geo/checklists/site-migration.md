# Site Migratie — Checklist

Volg `best-practices/site-migration.md` voor context. Deze lijst is operationeel.

## T-minus 28 dagen: Voorbereiding

- [ ] Type migratie vastgesteld (domain / protocol / platform / URL-structuur / rebuild)
- [ ] Migration-lead aangewezen
- [ ] Dev-team + SEO-team + content-team gecoördineerd
- [ ] Kalender vastgesteld met go-live datum
- [ ] Risico-analyse gemaakt + gecommuniceerd naar stakeholders
- [ ] Rollback-plan vastgelegd

## T-minus 21 dagen: Baseline

- [ ] Complete site-crawl (Screaming Frog / Sitebulb)
- [ ] URL-inventaris geëxporteerd (CSV)
- [ ] GSC 16-maanden performance export
- [ ] Ahrefs backlink-export + top organische pagina's
- [ ] GA4 12-maanden traffic export (per landingspagina)
- [ ] Logbestanden: welke URLs crawlt Google actief?
- [ ] Schema-data backup
- [ ] Screenshots belangrijke pagina's

## T-minus 14 dagen: Redirect-mapping

- [ ] Elke oude URL → nauwkeurigste nieuwe URL (niet bulk-naar-home)
- [ ] Mapping in CSV: oude URL, nieuwe URL, HTTP-status verwacht, prioriteit
- [ ] Top-100 verkeer-URLs dubbel gecheckt door 2 personen
- [ ] Queryparameter-strategie vastgelegd
- [ ] Pagination/filter-URLs: mapping of canonicaliseren
- [ ] Redirect-chains vermijden: A → B direct

## T-minus 14 dagen: Staging-audit

- [ ] Staging-site met IP-whitelist (NIET robots-blocked)
- [ ] Technische audit op staging
- [ ] Canonicals self-referencing
- [ ] Schema-markup aanwezig + correct
- [ ] Meta-titles + descriptions per URL
- [ ] Internal links geen 404's
- [ ] Hreflang correct (indien multilingual)
- [ ] Sitemap.xml gegenereerd
- [ ] robots.txt voor productie klaar (maar nog op staging niet publiek)
- [ ] CWV baseline op staging (target-niveau)

## T-minus 7 dagen: Dry-run

- [ ] Redirects in staging getest (simulate production)
- [ ] 20 willekeurige oude URLs: correct doorgestuurd?
- [ ] Top-100 URLs allemaal accounted for
- [ ] Geen loops / chains langer dan 1 hop
- [ ] Analytics events testen (GA4, GTM, FP-pixel)

## T-minus 2 dagen: Comms

- [ ] Stakeholders geïnformeerd over go-live window
- [ ] Support-team voorbereid op mogelijke klant-meldingen
- [ ] SEO-team stand-by voor monitoring
- [ ] Google Alert aangezet voor brand-queries

## Go-live dag

### Voor deployment
- [ ] Final snapshot oude site (complete crawl)
- [ ] Baseline GSC + GA4 cijfers genoteerd
- [ ] Team in 1 kanaal (Slack/Teams)

### Deployment-volgorde
- [ ] DNS of hosting-switch
- [ ] 301 redirects live (check via curl)
- [ ] Robots.txt productie (niet staging-versie)
- [ ] Sitemap.xml submit in GSC + Bing
- [ ] Schema-validatie top-5 pagina's (Rich Results Test)
- [ ] Analytics validation: events komen binnen?

### First-hour sanity check
- [ ] 20 steekproef-URLs: 301 correct + target laadt 200
- [ ] Homepage + checkout + contact werken
- [ ] GSC geen massa 500/404 in real-time URL Inspection
- [ ] GA4 ontvangt pageviews
- [ ] CWV op key pagina's niet geregresseerd

## Dag 1-7 Post-migratie

### Dagelijks
- [ ] GSC Coverage report (index-fouten)
- [ ] GSC Performance (ranking-shifts > 20%)
- [ ] GA4 organic sessions trend
- [ ] Ahrefs: backlink-drops
- [ ] Log files: welke URLs krijgen 404?
- [ ] Bevraag support-team over klantmeldingen

### Binnen week 1
- [ ] Index-coverage > 90% van oude indexeerbare URLs nu geïndexeerd
- [ ] Redirect-chains geïdentificeerd + gefixed
- [ ] Screaming Frog re-crawl productie
- [ ] Top-50 URLs handmatig gere-indexeerd via GSC URL Inspection

## Week 2-4 Post-migratie

- [ ] Index-coverage dichtbij 100%
- [ ] 404's audit: bewust of redirect nodig
- [ ] Interne links audit: geen links naar oude URLs
- [ ] Schema-types intact
- [ ] CWV niet verslechterd
- [ ] Ranking-herstel in 50-70% range

## Maand 2-3 Post-migratie

- [ ] Ranking-herstel 80-95%
- [ ] Backlink-outreach: top-20 referring domains vragen om link-update
- [ ] Volledige performance-vergelijk pre vs post (GSC / GA4 / Ahrefs)
- [ ] Documenteren in history-log + consolidate leerpunten
- [ ] Ad-hoc rapport naar klant: status migratie + volgende stappen

## Red flags (directe escalatie)

- 🚨 > 30% ranking-drop voor top-100 keywords 4+ weken post → diepe technische audit
- 🚨 Index-coverage massaal "Excluded" → robots.txt of noindex verkeerd
- 🚨 Verkeer-drop > 40% eerste week → 301-chain, DNS-probleem, of verkeerde config
- 🚨 Schema-errors massaal in GSC → rollback of hotfix

## Verantwoordelijkheden-matrix

| Rol | Verantwoordelijkheid |
|---|---|
| Migration Lead | Coördinatie + go/no-go |
| Dev Team | Implementatie + DNS + redirects |
| SEO Consultant | Redirect-mapping + post-monitoring |
| Content Team | URL-structuur input + content-continuïteit |
| Analytics | GA4/GTM/pixel-validatie |
| Support | Klant-meldingen first-line |

## Leverbare documenten

- Redirect-map CSV (oud → nieuw)
- Pre-migratie baseline-rapport
- Post-migratie monitoring-rapport (week 1, week 4, maand 3)
- Hand-over document
