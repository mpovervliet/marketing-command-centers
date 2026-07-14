# Marketing Command Centers

Single source of truth voor alle skills, plugins en kennis van MP (Maarten Pieter Overvliet): freelance AI-consultant en online marketeer. Staat in OneDrive, gesynct over alle devices. Cowork laadt de skills via .plugin-bundels uit dist/.

## Kerncijfers (stand juli 2026)

- 19 command centers (plugins), 167 gebundelde skills, 168 skill-folders in skills-source/
- Kwaliteitsstandaard: SKILL-WRITING-STANDARDS.md (verplicht bij elke nieuwe of gewijzigde skill)
- Bouwpijplijn: WORKFLOW.md → plugin-map.json → build-plugins.py → dist/*.plugin → installeren in Cowork

## De 19 command centers

| Plugin | Skills | Domein |
|---|---|---|
| seo-geo-command-center | 23 | SEO, GEO/LLM-zichtbaarheid, local, migraties, forecasting, multilingual, Reddit, YouTube |
| google-ads-command-center | 15 | Setup t/m AI Max, POAS/value-bidding, scripts, Channable |
| meta-ads-command-center | 15 | Advantage+, Andromeda, creatives, measurement (CAPI/EMQ) |
| cro-command-center | 15 | Experimentation, research, checkout, offer/pricing, synthetic panels |
| ux-design-command-center | 15 | Audit t/m platform-dev (Shopify/Webflow/Framer), accessibility/EAA, brand identity, hospitality |
| retention-lifecycle-command-center | 15 | Klaviyo flows, deliverability, loyalty, reviews, cohort/CLV, WhatsApp/RCS |
| analytics-command-center | 6 | GA4/GTM-audit, meetplannen, server-side, incrementality, consent |
| marketplaces-command-center | 3 | Amazon (COSMO-tijdperk), bol, kanaalstrategie |
| ai-automation-command-center | 8 | Copilot-generator, agentic commerce, automation, agents (MCP/evals), content-factory, skill-ops |
| ai-consultancy-command-center | 6 | AI-adoptie, EU AI Act, trainingen, toolstack, promptbibliotheken |
| social-content-command-center | 3 | Organic social, short-video, community-management |
| b2b-marketing-command-center | 2 | LinkedIn Ads (TLA), ABM-light/leadgen |
| freelance-ops-command-center | 15 | Intake, proposals, weekupdates, QBR, facturen, LinkedIn, teardowns, context-index |
| badenman-copilot | 8 | Badenman/DMG klant-copilot plus data-analyse-laag |
| la-fuga-copilot | 1 | La Fuga (Salento) growth-lead copilot |
| springbok-toolkit | 2 | Springbok-huisstijl deliverables (docx, pptx) |
| dashboarding-command-center | 7 | Looker Studio, BigQuery/GA4-SQL, KPI-frameworks, live Cowork-dashboards, dashboard-audit, data-analyse |
| affiliate-marketing-command-center | 4 | Netwerk-keuze (Daisycon/TradeTracker/Awin), programma-setup, publishers, meting/incrementaliteit |
| ai-creative-studio-command-center | 4 | AI-video (Veo/Kling/Runway), AI-image, avatar-UGC, brand-QA-poort |

Los (bewust ongebundeld): scenario-writer.

## Structuur

```
_MARKETING COMMAND CENTERS/
├── README.md                      ← dit bestand
├── SKILL-WRITING-STANDARDS.md     ← kwaliteitsstandaard + Definition of Done
├── WORKFLOW.md                    ← bouwpijplijn (skill → plugin → Cowork)
├── skill-template.md              ← startpunt voor elke nieuwe skill
├── MODEL-ROUTING.md               ← Sonnet default, Fable-criteria
├── SKILLS-ROADMAP-2026-07.md      ← gap-analyse en prioritering
├── INSTALL-COWORK.md              ← installatie-instructie Cowork
├── plugin-map.json                ← mapping skills → plugins (bron voor build)
├── build-plugins.py               ← bouwt dist/*.plugin
├── skills-source/                 ← DE SKILLS: 1 folder per skill, alleen hier bewerken
├── knowledge-base/                ← playbooks/checklists/templates (google-ads, meta-ads, seo-geo; uitbreiden via research-corpus-builder)
├── dist/                          ← gegenereerde .plugin-bestanden (niet handmatig bewerken)
└── _ARCHIVE/                      ← gearchiveerde legacy (junctions, geintegreerde leveringen)
```

## Werkwijze in het kort

1. Nieuwe of gewijzigde skill: lees SKILL-WRITING-STANDARDS.md, werk in skills-source/<skill>/SKILL.md
2. Registreer in plugin-map.json (juiste plugin, version bumpen)
3. `python build-plugins.py` (valideert descriptions en bouwt dist/)
4. In Cowork: Customize → Personal plugins → oude versie deinstalleren → nieuwe .plugin installeren → nieuw gesprek starten

Onderhoudsritme: kwartaal-doorlichting via de skill skill-library-audit; losse inzichten via knowledge-capture; werkwijzen van dure modellen vastleggen via skill-distillation.

## Klantmap-conventie

Elke klant heeft een eigen OneDrive-map met per discipline een subfolder (seo-geo/, google-ads/, meta-ads/, cro/, ux/, analytics/, retention-lifecycle/, ai-consultancy/, social/, b2b/, marketplaces/) met account-brief.md en history-log.md, plus een CONTEXT_INDEX.md in de root (via context-index-builder). Skills lezen en schrijven alleen in hun eigen discipline-map.

## Versielog

- April 2026: eerste 6 command centers (Google Ads, Meta, SEO/GEO, CRO, UX, Retention), 61 skills
- 10 juli 2026: +31 skills, +7 plugins (analytics, marketplaces, ai-automation, freelance-ops, badenman, la-fuga, springbok), SKILL-WRITING-STANDARDS.md, roadmap
- 11 juli 2026: +22 skills, +3 plugins (ai-consultancy, social-content, b2b-marketing), verbeter-pass op 9 bestaande skills (llms.txt-nuance, AI Max, Andromeda, Klaviyo 2026, EAA-handhaving, emoji-cleanup), standards-aanvulling (verificatie, distillatie, progressive disclosure), legacy gearchiveerd
- 12 juli 2026: eerste volledige library-audit (audit-reports/), 30 legacy-skills verdiept naar de standaard (google-ads, channable, meta-ads, cro, seo-geo, badenman, ux, freelance-drieluik, scenario-writer), hele bibliotheek dash- en emoji-vrij, 9 plugins gebumpt
- 12-13 juli 2026 (vervolg): +3 command centers (dashboarding, affiliate-marketing, ai-creative-studio, samen 15 nieuwe skills), +marketing-agent-builder in ai-automation, verdiepingsronde 2 over 17 april-generatie skills (masters, springbok, badenman) incl. references/-splitsing van seo-geo-authority, techseo-implementation en springbok-toolkit
- 13 juli 2026: 15-per-center programma gestart (client-plugins uitgezonderd): +23 skills, 6 centers naar 15+ (google-ads, meta-ads, cro, retention, freelance-ops; seo-geo en ux stonden al op 15+). Totaal 167 gebundelde skills.
