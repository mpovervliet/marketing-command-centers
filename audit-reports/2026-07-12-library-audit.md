# Skill-library audit, 12 juli 2026 (eerste volledige run)

Scope: alle 129 skills in skills-source/, gescand op standards-compliance (SKILL-WRITING-STANDARDS.md), kruisverwijzingen, description-anatomie, vorm (dash/emoji) en regelaantallen. Build-status vooraf: groen, 16 plugins, map en folders 100% in sync (alleen scenario-writer bewust ongebundeld).

## Samenvatting

| Categorie | Aantal | Actie deze sessie |
|---|---|---|
| Skills onder 200 regels (legacy-generatie april) | 30 | Direct verdiept naar standards (golf 1-4) |
| Skills boven 290 regels | 11 | Gerapporteerd; references/-refactor is backlog P1.4 |
| Skills met em/en-dash | 64 | Verdiepte skills: gefixt in rewrite; rest: scripted cleanup |
| Skills met emoji (ondanks cleanup 11 juli) | 20 | Zelfde aanpak als dash |
| Afwijkende sectiestructuur (niet de 8 kernsecties) | ~70 | Verdiepte skills: gefixt; rest: gerapporteerd per generatie |
| Descriptions buiten 700-950 (maar onder validator-max 1024) | 24 | Verdiepte skills: gefixt; rest: gerapporteerd |
| Kapotte kruisverwijzingen in Integratie-secties | ~10 echte | Gefixt waar geraakt; rest genoteerd |

## Detailbevindingen

### 1. Regelaantallen boven norm (references/-refactor kandidaten, P1.4)

seo-geo-technical (554), growth-lead-badenman (502), techseo-implementation (350), retention-lifecycle-flows (338), retention-lifecycle-deliverability (335), seo-geo-authority (339), retention-lifecycle-loyalty (321), cro-implementation (318), retention-lifecycle-reviews (298), seo-geo-reporting (297), retention-lifecycle-specialist (296). De laatste drie zitten binnen tolerantie van de 290-huisnorm; prioriteit ligt bij de eerste twee plus de 318-350-zone.

### 2. Sectiestructuur per generatie

- April-generatie (google-ads-*, meta-ads-*, seo-geo-* masters, retention-*): eigen structuur met emoji-koppen (Workflow, Denkmodellen, Referenties). Geen van de 8 kernsecties letterlijk aanwezig.
- Mei/juni-generatie (cro-*, ux-*): grotendeels conform, maar Output-formaat ontbreekt vrijwel overal (13x ux, 9x cro).
- Juli-generatie: volledig conform.

### 3. Emoji-reststand (cleanup 11 juli was onvolledig)

google-ads: audit 3, creative 4, pmax-shopping 4, reporting 8, setup 6. meta-ads: audit 2, creative 10, optimize 5, reporting 8, setup 6. seo-geo: audit 3, authority 9, content 13, reporting 12, setup 5. retention: audit 7 (statusbollen), flows 2. Overig: seo-offpage-authority 3, springbok-slideshow 1, ux-visual-design 7.

### 4. Kruisverwijzingen (echte gebreken, na filtering vals-positieven)

- amazon-seo-listings verwijst naar "bol-listings": bestaat niet, moet bol-retail-media zijn
- google-ads-value-bidding en meta-ads-measurement verwijzen naar "analytics-command-center" als skill: is een plugin, moet analytics-specialist of incrementality-testing zijn
- marketplace-specialist verwijst naar "bol-uitvoering": moet bol-retail-media zijn
- short-video-content verwijst naar "video-ads": bestaat niet (dichtstbijzijnde: meta-ads-creative)
- skill-distillation en research-corpus-builder verwijzen naar "skill-backlog": geen skill, bedoeld als SKILLS-ROADMAP-2026-07.md
- Vals-positief (samenstellingen, geen skill-referenties): cross-channel, cross-account, knowledge-base, research-map e.d.

### 5. Descriptions

Boven 950 (werkt, maar buiten huisnorm): brand-identity-system 1006, ux-design-system 1012, meta-ads-setup 1010, ux-audit 1010, retention-lifecycle-audit 1008, cro-experimentation 999, e.a. Onder 700 of te weinig triggers: cv-tailorer 571/7, techseo-implementation 603/7, springbok-gdoc 641/0 (geen triggerzinnen), vacancy-analyzer 654/6, cover-letter-writer 657/8, competitor-intelligence 672/6, springbok-slideshow 672/6, scenario-writer (quoted string, geen folded scalar). Triggering-overlap-risico: geen harde botsingen gevonden; grootste nabijheid tussen seo-geo-outreach en seo-geo-digital-pr (bewust gescheiden: linkacquisitie vs PR-campagnes) en tussen cro-user-research en ux-research (afbakening staat in beide beschreven).

### 6. Verdiept in deze sessie (golf 1-4, 30 skills)

google-ads: setup, optimize, pmax-shopping, creative, reporting. channable: shopping-feeds, ai-enrichment. meta-ads: setup, audit, optimize, advantage-plus, reporting. cro: specialist, audit, setup, user-research. seo-geo: digital-pr, outreach, link-audit, ecommerce, international, programmatic, visibility. badenman: seo-offpage-authority. ux: setup, specialist. freelance: cv-tailorer, cover-letter-writer, vacancy-analyzer. los: scenario-writer.

### 7. Restpunten voor volgende sessies

- References/-refactor P1.4 (zie punt 1)
- Retention-generatie (audit, campaigns, cohort, setup, flows, deliverability, loyalty, reviews, specialist): structuur wijkt af maar inhoud is sterk en 2026-actueel (Klaviyo-pass 11 juli); herstructurering is vorm-werk, prioriteit laag
- google-ads-audit, google-ads-specialist, meta-ads-specialist, meta-ads-creative, seo-geo-setup/audit/content/authority/reporting/technical, springbok-gdoc/slideshow, badenman-copilot skills (competitor-intelligence, content-onpage-seo, meeting-prep-debrief, reporting-dashboard, techseo-implementation): zelfde generatie-afwijking, verdiepen in vervolgronde
- Descriptions boven 950 terugbrengen bij eerstvolgende inhoudelijke wijziging per skill

*Auditrun: 12 juli 2026, scripted scan plus handmatige kalibratie op 6 exemplaren. Volgende run: oktober 2026 (kwartaalritme) of eerder bij standards-wijziging.*
