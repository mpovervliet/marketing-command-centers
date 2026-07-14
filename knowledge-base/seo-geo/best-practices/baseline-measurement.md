# Baseline-meting — Het Onmisbare Startpunt

## Waarom baseline heilig is

Een baseline bevriest de staat van de site op dag 0 van een engagement. Zonder baseline:
- Kan je geen causaliteit aantonen (wat dreef welke verandering?)
- Weet je niet of de site "al lag te groeien" of dat jouw werk het verschil maakte
- Is een QBR niet meetbaar
- Kun je alleen anekdotisch rapporteren

Doel: iedere klant heeft binnen 14 dagen na kickoff een complete, door jou én klant geaccordeerde baseline.

## De 6 componenten

### 1. Organisch verkeer (GA4)
**Periode**: laatste 12 maanden (jaar-op-jaar vergelijk mogelijk)

Metrics per maand:
- Organic sessions
- Organic users
- Engaged sessions
- Avg. engagement time
- Conversies (primair + secundair)
- Conversieratio organic
- Omzet organic (e-com)

Dimensies:
- Per landingspagina (top 100)
- Per device (mobile/desktop)
- Per land/taal (voor internationale sites)
- Per source/medium (organic vs direct vs referral vs paid)

### 2. Organische zichtbaarheid (GSC)
**Periode**: laatste 16 maanden (max in GSC)

Metrics:
- Impressies (totaal + per pagina/query)
- Kliks
- CTR
- Gemiddelde positie
- Geïndexeerde pagina's
- Coverage errors + warnings
- CWV status per URL-group

Exports:
- Queries top-1000 (impressies-desc)
- Pagina's top-500 (kliks-desc)
- Performance over tijd per device
- Geografisch overzicht (top-20 landen)

### 3. Technische gezondheid (Screaming Frog / Sitebulb + GSC + PageSpeed)

Site-crawl op baseline-moment:
- Aantal indexeerbare URLs
- 4xx errors
- 5xx errors
- 301/302 redirects
- Redirect chains
- Canonical-distributie
- Missing titles / metas
- Missing H1's
- Schema-coverage per page-type
- Internal link structure (depth, orphans)

CWV (CrUX data):
- LCP / INP / CLS per URL-group, mobile + desktop
- Percentage "good" / "needs improvement" / "poor"

PageSpeed Insights benchmark voor 5 key URLs:
- Homepage
- Top-category
- Top-product/content page
- Blog-post
- Checkout/contact

### 4. Off-page / Autoriteit (Ahrefs / DFS)

- Domain Rating / Domain Authority
- Referring domains (totaal + DR-bracket-verdeling)
- Total backlinks
- Top 10 referring domains per authority
- Lost backlinks laatste 12 maanden
- Anchor-cloud (top-20 anchors)
- Broken backlinks (404/410 targets)

### 5. Brand + GEO Visibility (baseline voor AI)

**Voor LLM-visibility**:
- Run 20-40 test-prompts over ChatGPT, Perplexity, Gemini, Claude, AI Overviews
- Log: noemt het antwoord jouw merk? Ja/Nee
- Log: noemt het merk positief, neutraal, negatief?
- Log: linkt het naar jouw site? Welke pagina?
- Log: welke concurrenten worden genoemd?

Tools voor gestructureerde tracking:
- Profound / Otterly / Peec AI — als klant-budget toestaat
- Manual via Apify-scrapers / Claude-in-Chrome — als DIY

**Brand mentions**:
- Google Alerts voor 5-10 brand-queries
- Ahrefs Content Explorer: "brand" mentions last 90 days
- BrandMentions / Brand24 (als tool ingericht)

### 6. Cross-channel context

- Google Ads: CPC benchmarks, kosten, conversies (overlap met organic?)
- Meta Ads: remarketing-pool, creative-thema's
- Email: lijst-grootte, open-rates (voor hoofdcontent-pagina's)
- Social: follower-counts, engagement
- Directe + branded search trends

## Baseline-rapport format

Document van 3-5 pagina's:

1. **Executive summary** (1 pagina): sterke / zwakke punten, grootste kansen
2. **KPI-baseline-tabel**: alle metrics in 1 tabel met "baseline-waarde" en "doel-waarde na 6/12 maanden"
3. **Top-3 kansen + top-3 risico's**
4. **Bijlagen**: exports GSC, GA4, Ahrefs, CWV-screenshots

Levering: formeel, geaccordeerd door klant. Hun bevestiging ankert de baseline.

## Hoe vaak re-baseline?

- **Jaarlijks** bij lopende retainer (YoY benchmarks verschuiven)
- **Na migraties** (altijd opnieuw meten, pre + post)
- **Na Google-algo-updates met zichtbare impact** (re-anker context)

## Baseline-tracker

Maak een centrale spreadsheet (of Notion-dashboard) met:
- Dag 0 waarde
- Maandelijkse waarde
- YoY-deltas
- Mijlpalen / grote wijzigingen (link naar history-log)

Dit is je rapportage-backbone voor maand/kwartaal/jaar.

## Anti-patterns

- Geen baseline nemen: "we starten gewoon met de werkzaamheden" → geen causaliteit meetbaar
- Alleen GA4 meenemen: geen GSC/Ahrefs/CWV context
- Baseline niet delen met klant: hij claimt later dat cijfers "al zo waren" of "slechter zijn geworden"
- Baseline te ruw: zonder pagina-level data kun je geen oorzaak-analyse doen
- Vergeten GEO-baseline: LLM-visibility wordt belangrijker — meet NU, anders kun je later geen progressie tonen

## Ankertijden

Eerste baseline binnen 14 dagen. Herhaling in kalenderagenda:
- Maandelijks: GA4 + GSC key-metrics update
- Kwartaal: volledige baseline-review (incl. Ahrefs, CWV, schema-coverage)
- Jaarlijks: re-baseline (nieuwe start-state)

## Referenties

- Zie ook: `../best-practices/reporting-principles.md` voor rapportage-frameworks
- SEOTesting.com — rapportage-methodologie
- Patrick Stox — Ahrefs benchmark-methodologieën
