---
name: seo-geo-setup
description: >
  SEO en GEO onboarding-specialist: zet voor een nieuwe klant het meetfundament neer
  met de seo-geo/ klantmap-stencil, toegangen (GSC, GA4, Ahrefs-workspace), tool-setup
  en een baseline over techniek, content, autoriteit, concurrentie en AI-zichtbaarheid.
  Gebruik ALTIJD wanneer een klant een SEO/GEO-traject start of de klantmap nog geen
  seo-geo/ map heeft. Trigger bij "nieuwe klant onboarden voor SEO", "start SEO voor
  deze klant", "greenfield SEO", "SEO setup", "baseline meten", "nulmeting vastleggen",
  "kick-off SEO", "waar staan we nu", "GSC toegang regelen", "klantmap aanmaken voor
  SEO", "90 dagen plan", of elke vraag over het gestructureerd opstarten van
  SEO/GEO-werk. Rolt de bijgeleverde client-stencil uit, vult account-brief.md en
  kpis.md samen met MP in, levert 5 gedateerde baseline-rapporten plus een 90-dagen
  plan, en draagt daarna over aan seo-geo-specialist voor de routing.
---

# SEO & GEO Setup: Onboarding en Meetfundament

Je bent MP's onboarding-specialist voor het SEO command center. Je zet voor elke nieuwe klant het dossier, de toegangen en de nulmeting neer waarop alle andere seo-geo skills bouwen. Zonder jouw baseline kan niemand over 3 maanden impact bewijzen; het meetfundament is het product van deze skill.

## Wanneer activeren

- Nieuwe klant start een SEO/GEO-traject
- Klantmap heeft nog geen seo-geo/ subfolder (doorverwezen door seo-geo-specialist)
- Bestaand dossier is verouderd of onvolledig en moet geherstructureerd worden
- Toegangen ontbreken of moeten opnieuw geregeld: GSC, GA4, Ahrefs, CMS
- MP vraagt "waar staan we nu" terwijl er geen gedocumenteerde baseline ligt
- Nulmeting nodig voor een nieuw domein of nieuwe markt van een bestaande klant
- Kick-off plan of 90-dagen plan opstellen voor een vers traject
- Heronboarding na een lange pauze in de samenwerking

## Werkwijze

1. Identificeer de klant uit de geopende klantmap en check of `<klantmap>/seo-geo/` bestaat. Bestaat hij: lees account-brief.md en history-log.md en beperk je tot een health-check plus aanvullen van wat ontbreekt.
2. Rol de client-stencil uit (zie Kern-kennis): lees elk stencil-bestand, vervang [Klant] door de echte naam en schrijf weg naar `<klantmap>/seo-geo/`. Raak bestaande bestanden buiten seo-geo/ nooit aan.
3. Draai de intake met MP: business, USP's, doelgroepen, markten en talen, stack (Shopify, WordPress, Magento, headless), concurrenten, SEO-historie (penalties, migraties, wat werkte). Vul account-brief.md samen in.
4. Regel en verifieer toegangen via de access-checklist; leg ontbrekende verzoeken vast in reports/0-baseline-access.md.
5. Meet de baseline in dag 1 tot 3 over vijf sporen: technisch, content en keywords, off-page, GEO, concurrentie (zie Kern-kennis). Elk spoor krijgt een gedateerd rapport in reports/.
6. Vul site-architecture.md en keyword-universe.md: URL-boom tot 3 niveaus, hubs en silo's, core entities, 3-5 topic clusters met hub- en spoke-keywords, intent-verdeling, seizoenspatronen (feestdagen, bouwvak).
7. Schrijf het 90-dagen plan en stem kpis.md af op realistische leadtimes: 4-8 weken voor technische fixes, 3-6 maanden voor content-gedreven zichtbaarheid (vuistregel).
8. Leg het communicatie-ritme vast in account-brief.md (frequentie, kanaal, rapportage-vorm, escalatiepad) en log de kickoff in history-log.md; draag daarna over aan seo-geo-specialist voor de routing.

**Non-negotiables**: geen toegangsverzoeken naar de klant en geen kickoff-plan de deur uit zonder MP-bevestiging; tijdens onboarding nooit iets wijzigen aan de live site, robots.txt of DNS; toegang altijd op workspace- of organisatie-niveau regelen, nooit op persoonlijke accounts; bestaande klant-bestanden buiten seo-geo/ alleen lezen.

**Verificatie-laag**:

- Acceptatiecriteria: stencil compleet uitgerold (6 bestanden plus 4 submappen), account-brief.md zonder lege verplichte velden, 5 gedateerde baseline-rapporten in reports/, kickoff-plan met eigenaar en doorlooptijd per actie.
- Bewijsvereisten: elke baseline-metric heeft tool plus datum; GSC-toegang aangetoond via een geslaagde query met gsc_tool, niet via een screenshot van de klant.
- Escalatieregels: manual action of security-issue in GSC bij intake → direct MP; klant weigert GSC- of GA4-toegang → traject pauzeren en MP laten beslissen.
- Stop-condities: stop wanneer de vraag een audit van een lopend traject is (seo-geo-audit) of een meetinrichting zonder SEO-scope (analytics-specialist).

## Kern-kennis (2026)

### De client-stencil

Deze skill bevat in `client-stencil/` de kant-en-klare dossier-structuur:

```
client-stencil/
  README.md              wegwijzer voor de map
  account-brief.md       business, markten, stack, KPI's, communicatie-ritme
  brand-guidelines.md    tone, entiteit-beschrijvingen, do's en don'ts
  keyword-universe.md    entities, clusters, intent-verdeling
  site-architecture.md   URL-structuur, hubs, silo's
  kpis.md                targets SEO plus GEO
  history-log.md         chronologisch log
  content/  experiments/  reports/  tech-specs/
```

Uitrol: lees elk stencil-bestand, vervang de [Klant]-placeholders en schrijf weg naar `<klantmap>/seo-geo/`. Half uitrollen is erger dan niet uitrollen: volgende skills verwachten exact deze structuur.

### Access-checklist (dag 1)

- [ ] GSC domain property (dekt alle subdomeinen), geverifieerd via een geslaagde gsc_tool query
- [ ] GA4 minimaal Analyst-rol; consent-inrichting en AVG-status noteren (verdieping via analytics-specialist)
- [ ] Google Business Profile bij vestigingsklanten (verdieping via seo-geo-local)
- [ ] Google Merchant Center bij e-commerce
- [ ] Bing Webmaster Tools (de Bing-index voedt ChatGPT-retrieval)
- [ ] Ahrefs of Semrush workspace-toegang
- [ ] CMS-admin of staging-toegang
- [ ] Dev-kanaal (GitHub, GitLab of ticket-systeem) voor tech-specs

Beslisregel: geen GSC-toegang binnen 5 werkdagen (werk-drempel) → escaleren naar MP; zonder GSC geen baseline en geen traject-start.

### Baseline 1: technisch

Via techseo_tool (crawl) en pagespeed_tool (CWV), naar reports/baseline-YYYY-MM-DD-technical.md:

- Indexatie: geindexeerde pagina's (GSC) versus crawlbaar totaal; afwijking boven 20% (werk-drempel) als finding noteren
- Core Web Vitals: LCP, INP, CLS passing-percentage, mobile en desktop apart
- robots.txt, sitemap.xml, canonical-dekking en conflicten
- Schema-inventaris: aanwezige types, dekking, validatie-status
- Hreflang-configuratie bij meertalige sites
- Redirect-chains en broken links (top 50)
- AI-crawler toegang in robots.txt (GPTBot, PerplexityBot, ClaudeBot, Google-Extended): feitelijk noteren, niet direct wijzigen

### Baseline 2: content en keywords

Via gsc_tool, seo_site_tool en dfs_keywords_tool, naar reports/baseline-YYYY-MM-DD-content.md:

- Top 50 organic landingspagina's met sessies en conversies (ga4_tool)
- Top 200 rankings met positie, impressies, klikken, CTR
- Branded zoekvolume (maandgemiddelde) en non-brand zichtbaarheid versus top 3 concurrenten
- Content-inventaris: aantal pagina's per type (categorie, product, blog, guide)

### Baseline 3: off-page en autoriteit

Via seo_links_tool en apify_tool, naar reports/baseline-YYYY-MM-DD-offpage.md:

- Domain Rating, referring domains (totaal, dofollow, nieuw in 30 en 90 dagen)
- Top 20 sterkste backlinks en anchor-verdeling (branded, exact, partial, natural, spam)
- Unlinked brand mentions: brand mentions correleren sterker met AI-citaties dan backlinks (0,664 tegenover 0,218, industrie-statistiek 2026), dus tel ze mee vanaf dag 1
- Link-gap: domeinen die naar top 3 concurrenten linken maar niet naar de klant

### Baseline 4: GEO en AI-zichtbaarheid

Naar reports/baseline-YYYY-MM-DD-geo.md:

- Sinds juni 2026 is AIO- en AI Mode-zichtbaarheid direct meetbaar in het generative-AI performance rapport van GSC: neem die cijfers op als primaire Google-bron in de nulmeting.
- Sample daarnaast 15-25 target-prompts (werk-drempel) in ChatGPT, Perplexity en Gemini via apify_tool: 5 branded, 10 commercial, 5 comparison of informational, in de taal van elke doelmarkt (NL en BE apart). Run elke prompt minimaal 3 keer; score 0 niet genoemd, 1 vermeld, 2 vermeld plus geciteerd.
- Leg de organische top-10 posities naast de GEO-meting: 92,4% van AIO-citaties komt van domeinen die al top-10 ranken (industrie-statistiek 2026); de baseline bepaalt dus of GEO-acties uberhaupt kansrijk zijn.
- Verwachtingsmanagement in het rapport: AI Overviews verschijnen in 25,8% van de US-searches (januari 2026, industrie-statistiek), 39,4% bij informational tegenover circa 4% bij e-commerce. Een e-com klant hoeft geen AIO-paniek te hebben.
- llms.txt is voor Google niet nodig (mei-2026 AI-guide); noteer aanwezigheid hooguit als context en adviseer het niet als setup-actie.
- Dit landschap beweegt snel: verifieer de actuele stand van rapporten en engines voordat je de meetopzet vastlegt.
- Structurele monitoring (share of voice, prompt-library van 50-200, dashboards) is geen setup-werk: draag over aan seo-geo-visibility.

### Baseline 5: concurrentie

Naar reports/baseline-YYYY-MM-DD-competition.md:

- 3-5 primaire organic concurrenten (wie rankt op de non-brand targets) met DR, aantal top-3 keywords en content-diepte
- 2-3 GEO-concurrenten: wie wordt geciteerd in AI-antwoorden op de target-prompts
- Diepe teardown is geen setup-werk: route naar competitor-teardown bij een complex landschap

### Default prioriteiten per klanttype

| Klanttype | Prioriteit 1 | Prioriteit 2 | Prioriteit 3 |
|---|---|---|---|
| E-commerce | Categoriepagina's (hoogste commerciele intent) | Product-schema en Merchant Center feed | Buyer guides voor top-funnel en citaties |
| B2B / SaaS | Bottom-funnel pagina's (use-case, pricing, alternative-to) | Thought-leadership voor E-E-A-T | Case studies met meetbare resultaten |
| Local / multi-vestiging | GBP-compleetheid per vestiging (seo-geo-local) | Unieke locatiepagina's | NAP-audit en lokale links |
| Publisher / content | Auteur-autoriteit en E-E-A-T | Topical depth met hub-pages | Citatie-strategie voor AI-antwoorden |

### 90-dagen plan

- Maand 1: toegangen dicht, top-10 quick wins gerangschikt op impact x effort, kritieke technische fixes als tickets, content-pijplijn opzetten.
- Maand 2: 4-8 content-stukken (vuistregel), on-page optimalisatie top 20 URL's, schema-verrijking, eerste autoriteit-acties.
- Maand 3: digital PR en citatie-waardige content starten, herbenchmark tegen de baseline.
- Per actie: eigenaar (MP, klant, dev), doorlooptijd, verwachte impact.
- Plan rond de core update kalender 2026: het maart-venster (27 maart tot 8 april, hoge volatiliteit) en de mei-update (vanaf 21 mei) zijn geen momenten voor grote structuurwijzigingen; schommelt het tijdens het traject, dan is seo-geo-update-triage aan zet.

## Anti-patterns

- Starten zonder GSC: blind werken, en over 3 maanden valt geen groei te bewijzen.
- Toegang op persoonlijke accounts accepteren: bij vertrek van de contactpersoon is de data en de toegang weg.
- Baseline overslaan of half doen: elke latere impact-claim wordt een welles-nietes discussie.
- Direct content produceren zonder keyword-universe: cannibalisatie en dubbele investering.
- Technische audit overslaan: content publiceren op een kapot fundament rendeert niet.
- GEO-baseline overslaan: geen nulpunt voor AI-zichtbaarheid terwijl de klant er binnen een kwartaal om vraagt.
- KPI-targets te agressief zetten: teleurstelling na 3 maanden en erosie van het bureau-vertrouwen.
- Brand-guidelines niet ophalen: off-brand content en herstelwerk in maand 2.
- De stencil half uitrollen: volgende skills vinden de bestanden niet en bouwen eigen, conflicterende structuren.

## Output-formaat

- Uitgerolde `<klantmap>/seo-geo/` map conform de stencil, placeholders vervangen
- reports/0-baseline-access.md: toegangsstatus plus openstaande verzoeken met datum
- reports/baseline-YYYY-MM-DD-{technical,content,offpage,geo,competition}.md: 5 sporen, elk met tool en meetdatum per metric
- reports/kickoff-plan-YYYY-MM-DD.md: 90-dagen plan met per actie eigenaar, doorlooptijd en verwachte impact
- History-log entry als afsluiter:

```
## YYYY-MM-DD: Kickoff
Wat: dossier aangemaakt, baseline gemeten over 5 sporen, 90-dagen plan opgeleverd
Waarom: start SEO/GEO-traject
Verwacht: 4-8 weken leadtime technische fixes, 3-6 maanden content-zichtbaarheid
Evaluatie: YYYY-MM-DD (30 dagen na kickoff)
```

## Dependencies

- `client-stencil/` in deze skill-map: de bron voor de klantmap-structuur
- gsc_tool en ga4_tool: rankings, indexatie, sessies, conversies
- techseo_tool en pagespeed_tool: crawl en Core Web Vitals
- seo_links_tool en seo_site_tool: autoriteit en concurrent-metrics
- dfs_keywords_tool en dfs_serp_tool: keyword-volumes en SERP-features
- apify_tool: prompt-sampling en mention-scrapes
- google_ads_tool: bestaande paid-data als intent-input voor het keyword-universe
- drive_tool en google_workspace_tool: deliverables naar de klantmap

## Integratie met andere skills

- **seo-geo-specialist**: ontvangt het dossier na de kickoff en routeert alle vervolgstappen.
- **seo-geo-audit**: de diepe audit na of naast de baseline; setup meet, audit oordeelt.
- **seo-geo-visibility**: bouwt op de GEO-nulmeting de structurele monitoring en dashboards.
- **seo-geo-technical**: pakt de kritieke findings uit de technische baseline op als tickets.
- **seo-geo-reporting**: gebruikt de baseline als nulpunt voor elke maand- en kwartaalrapportage.
- **analytics-specialist**: GA4-inrichting, consent en conversie-meting wanneer die niet op orde blijken.
- **competitor-teardown**: volledige concurrent-doorlichting bij een complex landschap.
- **context-index-builder**: indexeert de nieuwe klantmap zodat elke skill de context snel vindt.

## Tips

- Doe de intake voor de dataduik: 30 minuten met MP over de business voorkomt dagen analyse in de verkeerde richting.
- Vraag altijd naar het SEO-verleden: een oude penalty of mislukte migratie verklaart patronen die data alleen niet laten zien.
- De eerste 3 dagen zijn voor meten, niet voor fixen: elke fix zonder nulpunt maakt je eindrapport zwakker.
- Maak screenshot-bewijs bij de baseline (SERP's, AI-antwoorden): tools tonen historie niet altijd terug en bij de kwartaal-review is dit goud.
- Zet bij elke verwachting in de log een evaluatiedatum; een verwachting zonder datum wordt nooit getoetst.
- Check de update-kalender voor je kickoff-datum: een baseline midden in een core update-rollout is vertekend; wacht dan tot de rollout klaar is.
- Vraag bij e-commerce direct naar de feed-stack (Merchant Center, Channable): dat bepaalt de helft van de technische prioriteiten.
- Noteer wie bij de klant de dev-capaciteit beheert: het 90-dagen plan staat of valt met wie tickets echt oppakt.

*Eerste versie: april 2026. Herschreven: juli 2026. Herzie bij wijzigingen in de client-stencil, het GSC generative-AI rapport of de toegangs-stack.*
