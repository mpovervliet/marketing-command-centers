# NEXT-SESSION.md: overdracht voor de volgende bouwsessie

Laatst bijgewerkt: 13 juli 2026, einde Fable-sessie 3 (audit, verdieping 1+2, drie nieuwe centers, start 15-per-center programma).

## Stand van zaken

- 19 command centers (plugins), 200 gebundelde skills, 201 folders in skills-source/ (scenario-writer bewust los). Alles gebouwd in dist/ en gevalideerd.
- 15-PER-CENTER PROGRAMMA (gestart 13 juli, MP-besluit): elk vak-center minimaal 15 skills; client-plugins (badenman, la-fuga, springbok) uitgezonderd. Klaar: seo-geo (23), ux-design (15), google-ads (15), meta-ads (15), cro (15), retention (15), freelance-ops (15), dashboarding (15), ai-automation (15), analytics (15), ai-consultancy (15). Nog te doen: affiliate (4, +11), ai-creative-studio (4, +11), marketplaces (3, +12), social-content (3, +12), b2b-marketing (2, +13): samen ~49 skills, 2 sessies. Research eerst per domein (affiliate/creative hebben deels al juli-feiten in bestaande skills; marketplaces/social/b2b vergen verse websearch). Werkwijze avond 13 juli beviel: Sonnet-subagents (model-parameter) onder Fable-regie spaart Fable-budget; briefs met afbakening plus toegestane integratie-lijst zijn de sleutel. LET OP: agents mogen NOOIT de Edit/Read file-tools op het Windows-pad gebruiken (3x stille bestandscorruptie gezien): uitsluitend bash heredoc naar .tmp plus mv, en na elke golf een parent-validatie draaien (footers wrappen soms, descriptions lopen soms over de 950). Kandidaat-rosters per center eerst langs de kwaliteitspoort; dunne kandidaten schrappen.
- Sessie 3 deel 1 (12 juli): eerste volledige library-audit (audit-reports/2026-07-12-library-audit.md), 30 legacy-skills verdiept, hele bibliotheek dash- en emoji-vrij gemaakt.
- Sessie 3 deel 2 (12-13 juli): verdiepingsronde 2 over de resterende 17 april-generatie skills (google-ads-audit/specialist, meta-ads-specialist/creative, seo-geo setup/audit/content/authority/reporting/specialist, springbok-gdoc/slideshow, badenman: competitor-intelligence, content-onpage-seo, meeting-prep-debrief, reporting-dashboard, techseo-implementation). References/-splitsingen: seo-geo-authority, techseo-implementation, springbok-gdoc, springbok-slideshow. Drie nieuwe centers gebouwd: dashboarding (7 skills), affiliate-marketing (4), ai-creative-studio (4), plus marketing-agent-builder in ai-automation. Kruisverwijzing meta-ads-measurement gefixt.
- Herinstalleren in Cowork (laatste stand): google-ads 0.7.0, meta-ads 0.6.0, seo-geo 0.8.0, cro 0.6.0 (Output-formaat-fix), ux-design 0.6.0 (idem), retention 0.3.0, freelance-ops 0.3.0, badenman 0.3.0, springbok 0.2.0, ai-automation 0.4.0, dashboarding 0.2.0, analytics 0.3.0, ai-consultancy 0.2.0. Nieuw installeren: (geen), affiliate-marketing 0.1.0, ai-creative-studio 0.1.0. Ongewijzigd: analytics, marketplaces, ai-consultancy, social-content, b2b-marketing, la-fuga.

## Bewezen werkwijze

1. Bulk-bouw via parallelle subagents in golven van maximaal 3. Sessielimieten zijn reeel: na elke golf bestanden op de mount checken; bij afgebroken agents verse agents starten voor restwerk (chirurgische fix-briefs voor bijna-af werk scheelt budget).
2. Bouwagents schrijven via bash-heredoc naar het MOUNT-pad (host-sync loopt achter; build leest de mount). FUSE-mount blokkeert soms overschrijven-in-place: schrijf naar .tmp en mv/os.replace.
3. Chirurgische wijzigingen: python string-replacements op de mount, elke replacement verifieren op exact 1 match.
4. Elke agent krijgt: standards-verwijzing, 1-2 exemplaar-skills, inhoudelijke brief met gedateerde feiten (geen verzonnen cijfers; industrie-statistieken labelen), validatiescript, en een expliciete afbakening plus toegestane integratie-lijst.
5. plugin-map.json centraal bijwerken (nooit door agents), dan python build-plugins.py en validator-output controleren.
6. Onderzoek eerst (WebSearch per domein), dan bouwen.

## Backlog (geprioriteerd)

P1 voor de volgende sessie:

0. 15-per-center programma vervolgen: volgende tranche affiliate (+11) en ai-creative-studio (+11), daarna marketplaces/social-content/b2b-marketing.
1. [MP: aanvullen]-blokken invullen met MP: growth-lead-la-fuga (17), badenman-data-analyst, ai-marketing-automation, plus nieuwe kleine blokken in reporting-dashboard, content-onpage-seo, meeting-prep-debrief, seo-geo-audit. Vragenlijst is al aan MP gestuurd (13 juli); antwoorden verwerken zodra ze komen.
2. AFGEROND 13 juli avond: Output-formaat-fix ux/cro-generatie (koppen bleken meervoud 'Output-formaten'; hernoemd/genest, brand-identity-system en luxury-villa-rental-ux kregen Kern-kennis-wrapper). Alleen seo-geo-technical, growth-lead-badenman en de retention-generatie wijken nog structureel af (zie punt 3). Footers ontbreken nog in de mei/juni-generatie: meenemen bij eerstvolgende inhoudelijke wijziging per skill.
3. References/-refactor restant: seo-geo-technical (554 rgl) en growth-lead-badenman (502 rgl); daarna retention-generatie herstructureren naar de 8 kernsecties (vorm-werk, inhoud is actueel).
4. knowledge-base uitbreiden via research-corpus-builder: analytics, ai-consultancy, cro; nu ook logisch: dashboarding, affiliate, ai-creative.
5. Nieuwe-center-toets: influencer/creator-center zodra MP klantvraag heeft (afgesproken 13 juli: haalt de poort pas bij aantoonbare behoefte). ai-chatbot-advisor (ai-consultancy) bewust geparkeerd.

P2 (roadmap-restanten): amazon-ppc, marketplace-pricing-margin, google-ads-demand-gen, google-ads-leadgen-b2b, meta-ads-ugc-creator-ops, tiktok-ads-essentials, retention-cdp-predictive, analytics-looker-dashboards (deels gedekt door looker-studio-builder: eerst toetsen op overlap), case-study-builder, new-business-radar, voc-review-mining, seasonal-demand-planner, ux-ai-interface-patterns, contract-checker, microsoft-ads-import, synapse-mcp-operator (vergt MP's gateway-documentatie).

## Vaste afspraken

- Kwaliteitspoort is heilig: elk idee dat de poort niet haalt wordt geschrapt, geen fluff.
- Client-copilots krijgen eigen kleine plugins; nieuwe vakgebieden een eigen center met master/router plus sub-skills.
- Concept-strategie voor ads blijft bij de ads-centers; ai-creative-studio is uitsluitend de productie- en QA-laag.
- Na elke bouwronde: build draaien, valideren, herinstallatie-lijst rapporteren, dit bestand bijwerken.
- Audit-ritme: volgende volledige library-audit oktober 2026, rapporten in audit-reports/.
