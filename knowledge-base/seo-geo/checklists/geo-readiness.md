# GEO Readiness — Checklist (Generative Engine Optimization)

Gebruik deze lijst om een site klaar te maken voor zichtbaarheid in ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude en Microsoft Copilot.

## Infrastructuur

- [ ] `llms.txt` live op site-root, correct geformatteerd
- [ ] `llms-full.txt` live, geaggregeerde content in markdown
- [ ] `robots.txt` explicit over AI-crawlers (toegestaan of bewust geblokkeerd)
- [ ] Schema-markup volledig op alle key page-types
- [ ] Author-schema met knowsAbout/expertise op alle content
- [ ] `sameAs` in Organization-schema (LinkedIn, Wikipedia, Wikidata, social)
- [ ] `dateModified` correct bijgehouden + zichtbaar op pagina

## Entity-foundation

- [ ] About-page met duidelijke 1-zin definitie
- [ ] Knowledge Panel-check: aanwezig of werkzaamheden gestart
- [ ] Wikidata Q-nummer aangemaakt (indien notable)
- [ ] Wikipedia entry (indien notability)
- [ ] Founders/key-people hebben eigen entity-linking
- [ ] Consistent brand-naam over alle properties

## Content: citation-worthy

Per belangrijke content-pagina:
- [ ] Statement-first opening (hoofdvraag beantwoord in eerste 100 woorden)
- [ ] Minimaal 1 datapoint per sectie met bron-link
- [ ] Quote / verwijzing naar authority-bron
- [ ] Machine-parsable structuur (H2/H3, lijsten, tabellen)
- [ ] Korte alinea's (max 4 zinnen)
- [ ] TL;DR-blok indien informational content
- [ ] Last-updated zichtbaar + schema-dateModified synchroon

## Content: depth & E-E-A-T

- [ ] Eigen ervaring / data / case-studies
- [ ] Auteur met expertise-credentials
- [ ] Outbound links naar primaire bronnen (niet concurrenten)
- [ ] Unieke invalshoek vs top-10 SERP

## Brand-mentions

- [ ] Digital PR-pijplijn opgezet (minimaal 1 campagne per kwartaal)
- [ ] Monitoring: Google Alerts, BrandMentions, Ahrefs
- [ ] Reactive PR: Connectively / HARO / PressPlugs account
- [ ] Branche-directories NAP-consistent

## Test-prompts (baseline + monitoring)

Bouw een set van 20-40 prompts die representatief zijn voor intent van je doelgroep:

Voorbeelden:
- "Wat zijn de beste [product-categorie] merken in Nederland?"
- "Hoe kies ik een [product]?"
- "Wat is [klant-brand]?"
- "Vergelijk [klant-brand] met [concurrent]"
- "Welk bedrijf kan ik het beste inhuren voor [dienst] in [stad]?"

Voor elk, test in:
- [ ] ChatGPT (GPT-4/5)
- [ ] Perplexity
- [ ] Gemini / Google AI Overviews
- [ ] Claude
- [ ] Microsoft Copilot
- [ ] Grok (indien relevante markt)

Log per prompt × engine:
- [ ] Wordt merk genoemd?
- [ ] Sentiment (pos/neutraal/neg)?
- [ ] Wordt er gelinkt naar jullie site?
- [ ] Welke concurrenten worden genoemd?

## Tooling (optioneel)

- [ ] Profound (enterprise)
- [ ] Otterly (mid-market)
- [ ] Peec AI
- [ ] Evertune (competitor-tracking)
- [ ] Ziptie / eigen scraper

## Monitoring-cadans

- [ ] Wekelijks: spot-check 5 hoofdprompts
- [ ] Maandelijks: volledige prompt-set 20-40 prompts
- [ ] Kwartaal: competitor-share-of-voice update

## KPIs

- [ ] % test-prompts met brand-vermelding per engine
- [ ] Share-of-voice vs concurrenten
- [ ] AI-referrer traffic in GA4 (filter op chatgpt.com, perplexity.ai, etc.)
- [ ] Branded search volume (indirect GEO-effect)

## Anti-patterns

- AI-crawlers blokkeren terwijl je WEL geciteerd wil worden
- llms.txt beloven maar niet onderhouden
- Schema overdrijven (stuffing → LLM-wantrouwen)
- Author-schema zonder echte persoon/expertise → credibility-risk
- Over-optimized formats → LLMs vermijden te-perfect-uitziende content

## Quick-wins (binnen 30 dagen)

1. llms.txt + llms-full.txt live
2. Homepage schema incl. uitgebreide `description` + `sameAs`
3. Author-schema met `knowsAbout` op alle content
4. Top-10 organische pagina's: TL;DR + datapoints toevoegen
5. Baseline prompt-test 20 prompts over 5 engines
6. Monthly monitoring-dashboard

Verwacht: 15-40% citation-share uplift in 90 dagen.

## Referenties

- `best-practices/geo-citation-worthy.md`
- `best-practices/entity-authority.md`
- `best-practices/llms-txt-spec.md`
