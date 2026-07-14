# Nieuwe Klant — Setup Checklist (eerste 14 dagen)

Doel: binnen 2 weken volledige zichtbaarheid op de klant-situatie + werkende tooling + geaccordeerde baseline + 90-day plan.

## Dag 1: Intake-kickoff

- [ ] Kickoff-meeting gepland (60-90 min)
- [ ] Stakeholders geïdentificeerd: primair contact, goedkeurder, dev-owner, content-owner
- [ ] Klant-map aangemaakt in OneDrive + mirror-directory in skill-source
- [ ] `client-stencil` gekopieerd naar klant-folder
- [ ] `account-brief.md` klaar voor invul

## Dag 2-3: Brief & Documentatie

- [ ] `account-brief.md` ingevuld na kickoff (business, USPs, doelstellingen, tech stack)
- [ ] Brand-guidelines (SEO/GEO-view) opgesteld + entity-definitie
- [ ] Site-architectuur mapping (URL-structuur, page-types, facet-beleid)
- [ ] Bestaande content-inventaris (crawl / CMS-export)

## Dag 3-5: Toegang & Tooling

- [ ] GSC-toegang: Owner of Full User access
- [ ] GA4-toegang: Editor minimum
- [ ] Google Tag Manager-toegang (indien beheerd)
- [ ] CMS-toegang (WP admin, Magento backend, Shopify Partner)
- [ ] Ahrefs klant-project opgezet (of add to workspace)
- [ ] DFS tokens toegewezen aan klant-project
- [ ] Surfer toegang (voor content-audits)
- [ ] PageSpeed API (indien custom monitoring)
- [ ] Apify / scraping-stack indien nodig
- [ ] Sheets / Looker dashboards klaar voor klant

## Dag 5-10: Baseline-meting

Volg `best-practices/baseline-measurement.md`:
- [ ] Organisch verkeer baseline (GA4 12 mnd)
- [ ] GSC performance export (16 mnd)
- [ ] Technical site-crawl (Screaming Frog / Sitebulb)
- [ ] CWV-baseline (GSC + PSI)
- [ ] Ahrefs backlink-snapshot
- [ ] Brand + GEO-visibility baseline (ChatGPT/Perplexity/Gemini prompt-test)
- [ ] Schema-coverage inventarisatie
- [ ] Cross-channel context (Google Ads, Meta, email)

## Dag 7-12: Audit

Volg `checklists/full-audit.md`:
- [ ] 100+ punten doorgelopen
- [ ] Findings geprioriteerd P0-P3
- [ ] Audit-rapport geschreven (template in `templates/`)
- [ ] Audit-rapport besproken met klant

## Dag 10-14: 90-day plan

- [ ] Thema's gekozen (technische fixes / content / authority / GEO)
- [ ] Sprint-plan 90 dagen: wekelijkse deliverables
- [ ] Kalender met klant-milestones
- [ ] Rapportage-cadans afgesproken
- [ ] Rolverdeling vastgelegd
- [ ] Escalatie-pad bij kritieke issues

## Dag 14: Accordering

- [ ] Klant akkoord op baseline-rapport
- [ ] Klant akkoord op 90-day plan
- [ ] Contract/retainer getekend (indien nog niet)
- [ ] Kickoff van eerste sprint

## Technische setup (parallel)

- [ ] Weekly sync gepland (standaard dag/tijd)
- [ ] Slack / Teams / email-kanaal voor communicatie
- [ ] Monday / Asana / Notion project aangemaakt
- [ ] Shared drive / Google Workspace-folder

## Administratief

- [ ] Facturatie-info vastgelegd (PO-nummer, facturatie-mail)
- [ ] NDA's / privacy-agreements ondertekend
- [ ] Data-access compliant met GDPR (DPA indien nodig)

## Eerste-week quick wins (on-delivery voor vertrouwen)

Binnen eerste 10 dagen al delivering:
- [ ] llms.txt + llms-full.txt live op klantsite
- [ ] Homepage schema (Organization + WebSite) getset
- [ ] BreadcrumbList schema op alle non-home pagina's
- [ ] Top-5 broken-links gefixed
- [ ] 3 quick technical CWV-wins

Dit positioneert jou als "iemand die dingen dóet" — niet alleen audit-er.

## Hand-off checklist (als skill wisselt binnen je team)

Als een volgende consultant de klant overneemt:
- [ ] `history-log.md` compleet
- [ ] `account-brief.md` accuraat
- [ ] Baseline-rapport gedeeld
- [ ] Lopende actie-punten overgedragen
- [ ] Klant geïnformeerd + introductie nieuwe consultant

## Common mistakes

- Geen baseline vastleggen → later geen causaliteit aantoonbaar
- Access te laat aanvragen → werk staat stil week 2
- Te veel tegelijk beloven → mislukken binnen 30 dagen
- Dev-team niet betrekken in week 1 → technische fixes stranden
- GEO overslaan bij onboarding → missing baseline voor belangrijke trend

## Template-documenten om te gebruiken

- `templates/client-onboarding-questionnaire.md`
- `templates/audit-report-template.md`
- `templates/kickoff-plan-template.md`
- `templates/monthly-report-template.md`
