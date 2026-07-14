# Skills Roadmap - Marketing Command Centers - juli 2026

Geprioriteerde roadmap van nieuwe skills die MP's werk aantoonbaar sneller en beter maken. Opgesteld op basis van volledige inventarisatie van skills-source/, plugin-map.json, WORKFLOW.md, skill-template.md, README's, MODEL-ROUTING.md en een actualiteitscheck per vakgebied (juli 2026).

Scoring: Impact = hoe vaak gebruikt x hoeveel tijd of kwaliteit het oplevert. Inspanning = complexiteit om de skill goed te bouwen. Prioriteit: P1 = nu bouwen, P2 = bouwen zodra P1 staat, P3 = backlog.

---

## 1. Inventarisatie (stand 9 juli 2026)

61 skills in skills-source/, waarvan 61 met SKILL.md. Verdeling:

| Command center | Plugin | Versie | Skills |
|---|---|---|---|
| SEO/GEO | seo-geo-command-center | 0.4.0 | 14: specialist, setup, audit, technical, content, ecommerce, authority, reporting, international, visibility, programmatic, digital-pr, outreach, link-audit |
| Google Ads | google-ads-command-center | 0.2.0 | 9: specialist, setup, audit, optimize, pmax-shopping, reporting, creative, channable-shopping-feeds, channable-ai-enrichment |
| Meta Ads | meta-ads-command-center | 0.1.0 | 7: specialist, setup, audit, optimize, advantage-plus, reporting, creative |
| CRO | cro-command-center | 0.2.0 | 9: specialist, setup, audit, experimentation, user-research, landing-page, checkout, implementation, reporting |
| UX Design | ux-design-command-center | 0.2.0 | 13: specialist, setup, audit, research, ia-wireframing, design-system, accessibility, content-design, visual-design, implementation, shopify-dev, webflow-dev, framer-dev |
| Retention/Lifecycle | retention-lifecycle-command-center | 0.1.0 | 9: specialist, setup, audit, flows, campaigns, deliverability, loyalty, reviews, cohort |
| Badenman/DMG | GEEN PLUGIN | - | 7: growth-lead-badenman, competitor-intelligence, content-onpage-seo, reporting-dashboard, techseo-implementation, meeting-prep-debrief, seo-offpage-authority |
| Springbok | GEEN PLUGIN | - | 2: springbok-gdoc, springbok-slideshow |
| Persoonlijk | GEEN PLUGIN | - | 4: cv-tailorer, cover-letter-writer, vacancy-analyzer, scenario-writer |

Bevindingen naast de skill-gaten:

1. De Badenman-, Springbok- en persoonlijke skills zitten in geen enkele plugin en zijn dus niet installeerbaar in Cowork (de oude junction-route is dood volgens WORKFLOW.md). Bundelen is een quick win zonder schrijfwerk.
2. In `_NEW-PLUGIN-SKILLS/` wachten `luxury-villa-rental-ux` (221 rgl) en `brand-identity-system` (259 rgl) sinds 22 april op integratie. De derde beloofde skill, `multilingual-content-architecture`, ontbreekt fysiek en moet opnieuw gebouwd worden.
3. MODEL-ROUTING.md adviseert het CONTEXT_INDEX.md-patroon uit te rollen naar alle klantmappen; daar bestaat nog geen skill voor.
4. Er is geen enkele analytics/measurement-skill, terwijl elk command center op GA4/GTM-data leunt.

---

## 2. Gap-analyse per categorie

### A. SEO/GEO Command Center (bestaand)

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| seo-geo-local | Local SEO als AI-marketing-hub: GBP-optimalisatie, local pack, Ask Maps/Gemini-zichtbaarheid, reviews en locatiepagina's | "local SEO voor klant met vestigingen"; "GBP optimaliseren"; "waarom staan we niet in de local pack" | seo-geo-command-center | Hoog | Middel | P1 |
| seo-geo-content-refresh | Content-decay detecteren en systematisch refreshen, samenvoegen of prunen om AI-Overview-klikverlies te compenseren | "traffic daalt op oude posts"; "content refresh programma"; "welke pagina's updaten of weg" | seo-geo-command-center | Hoog | Laag | P1 |
| seo-geo-migration | Site-migraties en replatforming end-to-end begeleiden: redirect-mapping, pre/post-launch checks, dip-monitoring | "we gaan replatformen"; "migratie naar Shopify"; "traffic ingestort na relaunch" | seo-geo-command-center | Hoog | Middel | P1 |
| seo-geo-update-triage | War-room bij algorithm updates: triage, diagnose, herstelplan en klantcommunicatie binnen 48 uur | "core update raakte ons"; "traffic -30% sinds gisteren"; "wat doet deze update" | seo-geo-command-center | Middel | Laag | P2 |
| seo-geo-topical-entity | Topical maps en entity/E-E-A-T-hardening bouwen: hub-spoke-architectuur, knowledge graph, auteur-entiteiten | "topical authority opbouwen"; "entity SEO"; "hoe word ik een entiteit voor LLMs" | seo-geo-command-center | Middel | Middel | P2 |
| seo-geo-forecasting | Verdedigbare SEO/GEO-forecasts en business cases voor pitches, budgetten en QBR's | "wat levert SEO op in 12 maanden"; "business case voor budget"; "forecast voor proposal" | seo-geo-command-center | Middel | Middel | P2 |
| seo-geo-multilingual-content | Herbouw van de verloren skill: TMS-keuze, content-parity, LLM-plus-native-review vertaalworkflow, i18n CMS-architectuur | "vertaalworkflow opzetten"; "TMS kiezen"; "content parity per markt" | seo-geo-command-center | Middel | Middel | P2 |
| community-seo-reddit | Reddit- en community-zichtbaarheid opbouwen voor SERP-posities en LLM-citaties zonder ban-risico | "Reddit domineert onze SERP"; "community-strategie"; "brand mentions in fora" | seo-geo-command-center | Middel | Middel | P2 |
| video-seo-youtube | YouTube- en video-SEO als apart search- en GEO-oppervlak (kanaalstrategie, metadata, klipbaarheid) | "YouTube-kanaal laten groeien"; "video-SEO"; "video's in AI-antwoorden" | seo-geo-command-center | Middel | Middel | P3 |

### B. Google Ads Command Center (bestaand)

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| google-ads-scripts-automation | Kant-en-klare Google Ads Scripts en geautomatiseerde checks: n-grams, budget-pacing, anomalie-alerts, disapproval-monitoring | "automatiseer mijn account-checks"; "n-gram analyse"; "budget pacing script" | google-ads-command-center | Hoog | Middel | P2 |
| google-ads-value-bidding | POAS- en marge-gedreven bidding: conversiewaarde-regels, winst-feeds, new-customer-goals | "bied op winst ipv omzet"; "POAS setup"; "value based bidding" | google-ads-command-center | Hoog | Middel | P2 |
| google-ads-demand-gen | Demand Gen en video-campagnes (YouTube/Discover/Gmail) opzetten met creative-specs en juiste meting | "demand gen starten"; "YouTube ads"; "awareness-laag bouwen" | google-ads-command-center | Middel | Middel | P3 |
| google-ads-leadgen-b2b | Leadgen-accounts: lead quality loops, offline conversies, CRM-koppeling, lead form assets | "leads zijn waardeloos"; "offline conversies importeren" | google-ads-command-center | Middel | Middel | P3 |
| microsoft-ads-import | Microsoft Advertising als goedkoop tweede kanaal via import plus Copilot-ads-basics | "Bing ads proberen"; "Google-campagnes importeren" | google-ads-command-center | Laag | Laag | P3 |

### C. Meta Ads Command Center (bestaand)

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| meta-ads-measurement | Signaalkwaliteit en meting: CAPI plus EMQ-optimalisatie, Andromeda-signaalvereisten, holdouts, GA4-vs-Meta-attributieverschillen duiden | "EMQ te laag"; "CAPI checken"; "Meta zegt 40 conversies, GA4 zegt 12" | meta-ads-command-center | Hoog | Middel | P2 |
| meta-ads-ugc-creator-ops | Creator-sourcing, briefing-pipeline, usage rights en partnership ads operationeel maken | "UGC-pipeline opzetten"; "creators vinden en briefen" | meta-ads-command-center | Middel | Middel | P3 |
| tiktok-ads-essentials | TikTok Ads voor e-com: Smart+ campagnes, spark ads, creative-loop | "TikTok ads starten"; "werkt TikTok voor deze klant" | nieuw: paid-social-plus | Middel | Hoog | P3 |

### D. CRO Command Center (bestaand)

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| cro-offer-pricing | Offer-, pricing- en promo-architectuur ontwerpen en testen: bundels, drempels, kortingspsychologie, prijspresentatie | "korting werkt niet meer"; "pricing page testen"; "bundelstrategie" | cro-command-center | Middel | Middel | P2 |
| synthetic-user-panel | Synthetische persona-panels voor pre-tests van copy, LP's en creatives, inclusief bias-kaders en validatieprotocol | "pre-test deze varianten"; "synthetisch panel"; "welke hook wint waarschijnlijk" | cro-command-center | Middel | Laag | P2 |
| voc-review-mining | Voice-of-customer mining over reviews, support-tickets en surveys heen naar een messaging-matrix voor alle kanalen | "wat zeggen klanten echt"; "review-analyse voor copy" | cro-command-center | Middel | Middel | P3 |

### E. UX Design Command Center (bestaand)

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| (integratie-actie) luxury-villa-rental-ux + brand-identity-system | Twee kant-en-klare skills uit _NEW-PLUGIN-SKILLS naar skills-source verplaatsen en bundelen | n.v.t. | ux-design-command-center | Hoog | Laag | P1-actie |
| ux-ai-interface-patterns | UX-patterns voor AI-features in websites: chat-widgets, AI-search, streaming-states, feedback-loops | "AI-zoek toevoegen"; "chatbot UX" | ux-design-command-center | Laag | Middel | P3 |

### F. Retention/Lifecycle Command Center (bestaand)

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| retention-whatsapp-rcs | WhatsApp Business en RCS als lifecycle-kanaal naast email/SMS: opt-in-regels EU, templates, Klaviyo-integraties | "WhatsApp marketing starten"; "RCS proberen"; "kanaal naast email" | retention-lifecycle-command-center | Middel | Middel | P2 |
| retention-cdp-predictive | Klaviyo CDP en predictive analytics dieper benutten: churn-risk, predicted CLV, feed naar ads | "predictive segmenten"; "churn voorspellen" | retention-lifecycle-command-center | Middel | Middel | P3 |

### G. NIEUW center: Analytics & Measurement

Het grootste structurele gat: elk center leunt op GA4/GTM-data, maar er is geen enkele measurement-skill. Sinds 15 juni 2026 is bovendien Consent Mode de enige schakel tussen GA4 en Google Ads (Google Signals is teruggeschroefd), en client-side-only meting verliest 20-40% van conversies.

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| analytics-specialist | Master-copilot voor het meetfundament: GA4, GTM, sGTM, consent, BigQuery en dashboards, router naar sub-skills | "klopt mijn meting"; "analytics opzetten"; "waarom wijken cijfers af" | nieuw: analytics-command-center | Hoog | Middel | P1 |
| analytics-ga4-audit | 60+ punt GA4/GTM-audit: events, key events, attributie, consent-status, datakwaliteit, juni-2026 wijzigingen | "audit mijn GA4"; "data klopt niet"; "dubbele transacties" | analytics-command-center | Hoog | Middel | P1 |
| analytics-tagging-plan | Meetplan- en datalayer-spec-generator: e-com events, naming conventions, dev-ready tickets, QA-checklist | "meetplan voor nieuwe site"; "datalayer spec"; "welke events tracken" | analytics-command-center | Hoog | Laag | P1 |
| analytics-server-side | Server-side tagging end-to-end: sGTM-architectuur, first-party domein, Consent Mode v2, CAPI-gateway, kosten-baten | "server-side tagging opzetten"; "conversies terugwinnen"; "consent mode v2" | analytics-command-center | Hoog | Middel | P1 |
| incrementality-testing | Bewijzen wat marketing echt toevoegt: geo-holdouts, conversion lift, MMM-light triangulatie | "werkt branded search echt"; "incrementality test"; "Meta lift meten" | analytics-command-center | Middel | Middel | P2 |
| analytics-consent-privacy | Consent- en privacy-compliance audit: bannerconfig, TCF, consent-rate-optimalisatie, AVG/DMA-risico's | "consent rate te laag"; "zijn we compliant" | analytics-command-center | Middel | Middel | P2 |
| analytics-bigquery-sql | GA4 BigQuery-export querybibliotheek: sessionization, funnels, cohorten, kanaal-dedupe | "GA4 data in BigQuery"; "query voor funnel" | analytics-command-center | Middel | Middel | P3 |
| analytics-looker-dashboards | Looker Studio cross-channel dashboards met blended sources en template-bibliotheek | "dashboard voor klant"; "GSC en Ads in 1 view" | analytics-command-center | Middel | Middel | P3 |

### H. NIEUW center: Marketplaces (Amazon + bol)

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| marketplace-specialist | Master-copilot marketplace-strategie NL/DE: kanaalkeuze, assortiment, fulfilment (FBA/LVB), kanaal-conflict met eigen shop | "moeten we op bol"; "Amazon starten"; "marketplace vs eigen shop" | nieuw: marketplaces-command-center | Middel | Middel | P1 |
| bol-retail-media | Groeien op bol: listings, BuyBox-logica, Sponsored Products (bid x eCTR x conversie), LVB en prijsregels | "bol omzet groeien"; "sponsored products bol"; "BuyBox kwijt" | marketplaces-command-center | Middel | Middel | P2 |
| amazon-seo-listings | Amazon listing-optimalisatie in het COSMO/Alexa-for-Shopping tijdperk: intent-based titels, backend-attributen, A+ content | "Amazon listings optimaliseren"; "Rufus/Alexa zichtbaarheid" | marketplaces-command-center | Middel | Middel | P2 |
| amazon-ppc | Amazon Advertising: Sponsored Products/Brands/Display, campagnestructuur, AMC-basics | "Amazon ads opzetten"; "ACoS te hoog" | marketplaces-command-center | Middel | Hoog | P3 |
| marketplace-pricing-margin | Prijs- en margebeheer op marketplaces: commissies, repricing, contributiemarge per kanaal | "verdienen we hier iets"; "repricer instellen" | marketplaces-command-center | Middel | Middel | P3 |

### I. NIEUW center: AI-Automation & Agents

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| client-copilot-generator | Genereert een volwaardige growth-lead-[klant] copilot-skill uit intake en klantmap, volgens huisconventies en het Badenman-patroon | "maak een copilot voor klant X"; "nieuwe klant-skill zoals Badenman" | nieuw: ai-automation-command-center | Hoog | Middel | P1 |
| agentic-commerce-readiness | Webshops klaar maken voor AI-agents: ACP, feeds, schema, merchant-controlled checkout, agent-traffic meten | "klaar voor ChatGPT-shopping"; "agentic commerce audit"; "AI-agents kopen bij ons" | ai-automation-command-center | Hoog | Middel | P1 |
| ai-marketing-automation | Marketing-ops automatiseren met n8n/Make plus agent-workflows: alerts, pipelines, rapport-runs, en wat je juist niet automatiseert | "automatiseer dit proces"; "n8n workflow"; "wekelijkse data-pull" | ai-automation-command-center | Middel | Middel | P2 |
| ai-content-factory | Schaalbare contentproductie met kwaliteitspoorten: brief, draft, factcheck, E-E-A-T-check, publicatie | "content op schaal"; "50 pagina's produceren" | ai-automation-command-center | Middel | Middel | P2 |
| synapse-mcp-operator | Werkinstructies voor MP's eigen Synapse/gateway-toolbelt: welke tool wanneer, batching, kostenbeheersing | "welke tool voor deze klus"; gateway-workflows | ai-automation-command-center | Middel | Laag | P3 (vergt MP's gateway-docs) |

### J. Workflow- en freelance-skills

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| context-index-builder | Bouwt en onderhoudt CONTEXT_INDEX.md per klantmap (het NICE2STAY-patroon) zodat elke sessie zonder leeswerk start | "indexeer deze klantmap"; "context-index updaten"; start in rommelige klantmap | nieuw: freelance-ops-command-center | Hoog | Laag | P1 |
| client-intake-onboarding | Uniforme intake voor elke nieuwe klant: vragenlijst, toegangen-checklist, klantmap-scaffold, kickoff-agenda | "nieuwe klant onboarden"; "intake voorbereiden"; "welke toegangen vragen" | freelance-ops-command-center | Hoog | Laag | P1 |
| proposal-writer | Winnende offertes en voorstellen: scope, pricing-modellen (uur/retainer/value), win-thema's, NL-conventies | "schrijf een offerte"; "proposal voor SEO-traject"; "wat vraag ik hiervoor" | freelance-ops-command-center | Hoog | Middel | P1 |
| weekly-client-update | Wekelijkse klant-updates in 10 minuten: aggregeert history-logs en reports tot een puntige update-mail per klant | "weekupdate voor klant"; "wat stuur ik vrijdag"; "update alle klanten" | freelance-ops-command-center | Hoog | Laag | P1 |
| qbr-builder | Cross-channel QBR's: verzamelt SEO/Ads/Meta/CRO-data uit de klantmap tot een kwartaalverhaal met roadmap | "QBR voorbereiden"; "kwartaalreview"; "jaaroverzicht klant" | freelance-ops-command-center | Hoog | Middel | P1 |
| freelance-admin-invoicing | Uren, facturen en btw-basics: urenlog naar factuurregels, betalingsherinneringen, offerte-naar-factuur-flow | "maak de factuur van juni"; "herinnering sturen"; "uren verantwoorden" | freelance-ops-command-center | Middel | Laag | P2 |
| knowledge-capture | Zet sessie-inzichten om in knowledge-base-entries en skill-verbetervoorstellen zodat het systeem elke week slimmer wordt | "sla dit inzicht op"; "wat leerden we deze maand"; einde van groot project | freelance-ops-command-center | Middel | Laag | P2 |
| personal-brand-linkedin | MP's LinkedIn-contentmachine: 2026-algoritme (betekenisvolle comments, video, 5+ posts/mnd), AI-search-citaties, freelance-pipeline | "LinkedIn post over dit project"; "contentkalender voor mijzelf" | freelance-ops-command-center | Middel | Laag | P2 |
| competitor-teardown | Cross-channel concurrent-teardown voor pitches en QBR's: ads-libraries, SEO, socials, tech-stack, reviews in 1 document | "teardown van concurrent X"; "pitch-voorbereiding"; "wat doet de markt" | freelance-ops-command-center | Middel | Middel | P2 |
| case-study-builder | Zet klantresultaten om in portfolio-cases, pitch-slides en LinkedIn-posts | "maak een case van dit project" | freelance-ops-command-center | Middel | Laag | P3 |
| new-business-radar | Scant opdrachten en aanvragen, matcht met MP's profiel en genereert outreach-concepten | "past deze opdracht"; "pipeline vullen" | freelance-ops-command-center | Middel | Middel | P3 |
| contract-checker | Reviewt freelance-contracten op aansprakelijkheid, IP en betaling, met jurist-disclaimer | "check dit contract" | freelance-ops-command-center | Laag | Laag | P3 |

### K. Klant-copilots (verdieping)

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| growth-lead-la-fuga | Master-copilot voor La Fuga (luxury estate Salento): direct-booking groei, gastcommunicatie en facturen, seizoenspricing, Airbnb-vs-direct kanaalmix | "La Fuga weekplan"; "reactie op gast-aanvraag"; "seizoen 2027 pricing" | nieuw: la-fuga-copilot | Hoog | Middel | P1 |
| badenman-data-analyst | Diepe data-analyselaag voor Badenman: GA4 x GSC x Ads kruisanalyses, sanitair-seizoenspatronen, NL/BE/DE-vergelijk, SW-vs-SD kannibalisatie-monitor | "duik in de Saniweb-cijfers"; "waarom daalt BE"; "kannibalisatie-check" | nieuw: badenman-copilot | Middel | Middel | P2 |
| (bundel-actie) badenman-copilot plugin | 7 bestaande Badenman-skills eindelijk installeerbaar maken als plugin | n.v.t. | badenman-copilot | Hoog | Laag | P1-actie |
| (bundel-actie) freelance- en Springbok-skills | cv-tailorer, cover-letter-writer, vacancy-analyzer bundelen in freelance-ops; springbok-gdoc/slideshow in springbok-toolkit | n.v.t. | freelance-ops + springbok-toolkit | Middel | Laag | P1-actie |

### L. Waar je nu niet aan denkt (ambitieus, concreet)

De flagships uit deze categorie staan hierboven al gescoord: agentic-commerce-readiness (I), client-copilot-generator (I), context-index-builder (J), knowledge-capture (J), synthetic-user-panel (D), community-seo-reddit (A), synapse-mcp-operator (I). Aanvullend:

| Skill | Doel in 1 zin | Trigger-scenario's | Plugin | Impact | Inspanning | Prio |
|---|---|---|---|---|---|---|
| seasonal-demand-planner | Cross-channel seizoenskalender en budget-pacing per klant (sanitair-seizoen, hospitality-seizoen, retail-pieken) | "plan Q4"; "wanneer opschalen"; "seizoensbudget" | freelance-ops-command-center | Middel | Middel | P3 |

---

## 3. Bouw deze eerst: top-15 shortlist

| # | Skill | Waarom eerst |
|---|---|---|
| 1 | analytics-specialist | Meetfundament ontbreekt volledig; elk ander center leunt erop |
| 2 | analytics-ga4-audit | Meest gevraagde analytics-klus; juni-2026 consent-wijziging maakt audits urgent |
| 3 | analytics-tagging-plan | Elke nieuwe site of campagne begint hier; laag effort, hoge herhaling |
| 4 | analytics-server-side | 20-40% conversieverlies bij client-side-only; verkoopbaar traject per klant |
| 5 | context-index-builder | Versnelt letterlijk elke toekomstige sessie; expliciet aanbevolen in MODEL-ROUTING |
| 6 | client-intake-onboarding | Elke nieuwe klant; standaardiseert het fundament van alle centers |
| 7 | weekly-client-update | Hoogste frequentie van alles: elke week, elke klant |
| 8 | proposal-writer | Directe omzet-hefboom; elke pitch |
| 9 | qbr-builder | Duurste terugkerende deliverable, nu handwerk over 4 centers heen |
| 10 | client-copilot-generator | Schaalt MP's businessmodel: Badenman-niveau copilot per klant in uren i.p.v. dagen |
| 11 | growth-lead-la-fuga | Actieve klant zonder copilot; gastcommunicatie en backoffice draaien al via Claude |
| 12 | seo-geo-local | Expliciet gat (WORKFLOW noemt het als voorbeeld); GBP is in 2026 een AI-hub geworden |
| 13 | seo-geo-content-refresh | Grootste recurring SEO-winst in het AI-Overview-tijdperk |
| 14 | seo-geo-migration | Hoge stakes, elke replatform; voorkomt de duurste fouten |
| 15 | agentic-commerce-readiness | ACP/agent-checkout is hét 2026-onderwerp; positioneert MP als AI-marketeer voorop |

## 4. Wave 2 (P2, direct daarna, zolang kwaliteit houdt)

marketplace-specialist, bol-retail-media, amazon-seo-listings, google-ads-scripts-automation, google-ads-value-bidding, meta-ads-measurement, incrementality-testing, seo-geo-update-triage, seo-geo-topical-entity, seo-geo-forecasting, competitor-teardown, knowledge-capture, personal-brand-linkedin, freelance-admin-invoicing, badenman-data-analyst, ai-marketing-automation.

Bewust doorgeschoven naar een volgende run (kwaliteitspoort of afhankelijkheid): seo-geo-multilingual-content (herbouw), cro-offer-pricing, synthetic-user-panel, community-seo-reddit, retention-whatsapp-rcs, ai-content-factory, analytics-consent-privacy, synapse-mcp-operator (vergt gateway-documentatie van MP).

## 5. Integratie- en bundel-acties (geen schrijfwerk, wel doen)

1. luxury-villa-rental-ux en brand-identity-system uit _NEW-PLUGIN-SKILLS naar skills-source/ verplaatsen en aan ux-design-command-center toevoegen (versie 0.3.0).
2. Nieuwe plugins aanmaken: analytics-command-center, marketplaces-command-center, ai-automation-command-center, freelance-ops-command-center, badenman-copilot, la-fuga-copilot, springbok-toolkit.
3. Bestaande losse skills bundelen: Badenman-7 in badenman-copilot; cv-tailorer, cover-letter-writer, vacancy-analyzer in freelance-ops-command-center; springbok-gdoc en springbok-slideshow in springbok-toolkit. scenario-writer blijft bewust ongebundeld (hobby).

## 6. Aannames

1. Top-15 wordt direct gebouwd, daarna wave 2, zonder tussentijdse goedkeuring (conform opdracht-placeholder).
2. Nieuwe vakgebieden krijgen eigen plugins volgens het bestaande naamschema.
3. Client-copilots (Badenman, La Fuga) krijgen eigen kleine plugins zodat ze per klant installeerbaar zijn.
4. Alle nieuwe skills volgen de klantmap-conventie (subfolder per discipline plus history-log) van de bestaande centers.

## 7. Actualiteits-bronnen gebruikt voor de 2026-toets

- Google: [AI features guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) en [SEJ-duiding](https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-still-seo/575026/) (llms.txt/chunking niet nodig voor Google AI-features; GSC generative-AI-rapporten sinds juni 2026)
- Google Ads: [DSA naar AI Max migratie](https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/) en [AI Max features](https://blog.google/products/ads-commerce/ai-max-new-features/)
- Meta: [Andromeda-uitleg](https://jetfuel.agency/metas-2026-algorithm-update-what-andromeda-changed-and-how-to-adapt-your-ads/) en [2026 paid social playbook](https://www.logicalposition.com/blog/the-2026-paid-social-playbook)
- Amazon: [Rufus naar Alexa for Shopping](https://canopymanagement.com/amazon-listing-optimization-rufus-ai-search/) en [COSMO-optimalisatie](https://www.ecomtent.ai/blog-page/optimizing-amazon-listings-for-cosmo-and-rufus)
- Agentic commerce: [OpenAI Instant Checkout/ACP](https://openai.com/index/buy-it-in-chatgpt/), [Stripe ACP](https://stripe.com/newsroom/news/stripe-openai-instant-checkout), [pivot naar merchant-controlled checkout](https://www.digitalcommerce360.com/2026/03/06/openai-shifts-checkout-plans-agentic-commerce-strategy/)
- Measurement: [GA4 consent-wijziging 15 juni 2026](https://www.digitalapplied.com/blog/ga4-consent-split-june-15-2026-ad-storage-tracking-audit) en [sGTM-stack](https://www.jellyfish.com/en-us/blog/consent-mode-ga4-server-side-tag-manager/)
- Local: [GBP 2026 AI-evolutie](https://www.digitalapplied.com/blog/local-seo-2026-google-business-profile-ai-guide)
- bol: [Sponsored Products gids 2026](https://boloo.co/blog/sponsored-products)
- LinkedIn: [algoritme 2026](https://dsmn8.com/blog/the-social-media-managers-guide-to-the-linkedin-algorithm-in-2026/)

---

Opgesteld door Claude (Fable 5) op 2026-07-09. Volgende stap: bulk-build volgens WORKFLOW.md en SKILL-WRITING-STANDARDS.md.
