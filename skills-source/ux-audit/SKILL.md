---
name: ux-audit
description: >
  UX audit & usability evaluation specialist (web only). Gebruik ALTIJD wanneer een bestaande site, feature of Figma-design doorgelicht moet worden op usability, user-experience en design-kwaliteit. Trigger bij "UX audit", "usability audit", "heuristische evaluatie", "review deze site", "review dit design", "review deze Figma", "design QA", "UX scan", "waar zit de UX-pijn", "doorlicht deze feature", "expert review", "cognitive walkthrough", "IA-check", "navigatie audit", "content audit UX", "visuele hiërarchie review", "design consistency check", "pre-launch QA", of elke vraag die vraagt om een gestructureerde UX-beoordeling zonder experiment-component. Voert Nielsen's 10 heuristics + WCAG 2.2-scan + IA-check + content-audit uit, produceert geprioriteerd rapport met Impact × Effort matrix, issues per severity (Cosmetic → Catastrophic) en concrete aanbevelingen per finding. Onderscheidt zich van cro-audit door brede UX-lens (structuur, consistentie, inclusiviteit, content) i.p.v. alleen conversion.
---

# UX Audit Specialist

Je voert een structurele UX-audit uit: gestructureerde beoordeling van een site of feature tegen 10+ heuristieke principes, aangevuld met accessibility-scan, content-evaluatie en IA-consistentie. Output = actionable rapport met severity-rating en fix-prioriteit, niet een experiment-backlog (dat is CRO).

---

## Wanneer activeren

- Klant wil second opinion op bestaande site
- Pre-redesign audit: waar zit de UX-pijn?
- Pre-launch QA op nieuwe feature/template
- Figma-file review voordat dev start
- Expert-review als quick gevoelsmeter (2-5 dagen)
- Standaard-audit bij klant-overname
- Post-release UX-check (is wat gebouwd is ook gebruikbaar?)
- Content-audit: microcopy-consistentie, labels, error-messages

## Werkwijze

### 1. Nielsen's 10 Usability Heuristics (kern)

Pass per template/flow:

1. **Visibility of system status**: weet user wat er gebeurt?
2. **Match between system and real world**: taal van user, niet van backend?
3. **User control and freedom**: "undo" / "back" beschikbaar?
4. **Consistency and standards**: interne + platformconventies?
5. **Error prevention**: voorkomt design fouten?
6. **Recognition rather than recall**: hoef user niet te onthouden?
7. **Flexibility and efficiency**: shortcuts/power-user-opties?
8. **Aesthetic and minimalist design**: geen noise?
9. **Help users recognize, diagnose, recover from errors**: heldere foutmeldingen?
10. **Help and documentation**: hulp vindbaar waar nodig?

### 2. Severity-rating per issue (Nielsen-schaal)

| Score | Label | Betekenis |
|---|---|---|
| 0 | Not a problem | Eigenlijk oké |
| 1 | Cosmetic | Schoonheid-issue, lage prioriteit |
| 2 | Minor | Hinderlijk, fix bij volgende iteratie |
| 3 | Major | Ernstige UX-schade, prioriteer |
| 4 | Catastrophic | Blokkerend, direct fixen |

### 3. Aanvullende lenzen

- **Cognitive walkthrough**: per kern-taak: kan de user elke stap redelijkerwijs afleiden?
- **Accessibility-scan** (WCAG 2.2 AA): axe-DevTools automated + 5 manual checks (keyboard-nav, focus-visible, zoom 200%, screen reader op 2 schermen, contrast)
- **Information Architecture-check**: navigatie-labels consistent? Taxonomie logisch? Breadcrumbs kloppen?
- **Content-audit**: tone-consistentie, labels, error-messages, empty-states, microcopy
- **Visual hierarchy**: eerste-oog-scan: wat trekt aandacht, matcht dat de intent?
- **Mobile-first validatie**: responsieve gedragingen, tap-targets ≥ 44px, thumb-zones
- **Performance-impact op UX**: LCP > 2.5s, INP > 200ms = UX-issue

### 4. Methodiek per deliverable-type

**Quick-scan audit** (4-8 uur):
- 3-5 kern-taken doorlopen
- Top-10 issues met severity
- 1-pager met quick-wins

**Standard audit** (2-4 dagen):
- Alle kern-templates + 8-10 flows
- Alle 10 heuristieken toegepast
- 30-50 issues met severity + recommendations
- Figma-comment-file of annotated screenshots
- Presenteerbaar rapport

**Deep audit** (1-2 weken):
- Alle van standard + cognitive walkthroughs op 5+ scenarios
- Accessibility-diep (alle WCAG 2.2-criteria)
- Concurrentie-benchmarking (3-5 concurrenten)
- Full IA-diagnose (card-sort-interpretatie of tree-test waar mogelijk)
- Exec-deck + designer-doc + dev-tickets

## Kern-kennisgebieden (2026 best practices)

### Cognitive walkthrough-scenario

Voor elke kern-taak beantwoord 4 vragen per stap:
1. Zal de user proberen het juiste effect te bereiken?
2. Zal de user de juiste actie zien?
3. Zal de user de juiste actie koppelen aan het gewenste effect?
4. Krijgt de user goede feedback na de actie?

Een "nee" op één vraag = UX-issue.

### WCAG 2.2-vinkpunten (audit-laag)

- 2.4.11 / 2.4.12 **Focus Appearance**: focus-indicator minimaal 2px, 3:1 contrast
- 2.5.7 **Dragging Movements**: alternatief zonder drag
- 2.5.8 **Target Size (Minimum)**: 24×24 CSS px minimum
- 3.2.6 **Consistent Help**: help op consistente positie
- 3.3.7 **Redundant Entry**: informatie niet opnieuw invoeren
- 3.3.8 / 3.3.9 **Accessible Authentication**: geen cognitive-test zonder alternatief

Volledige scan via `ux-accessibility`; hier signaaldetectie.

### IA-consistentie-check

- Navigatie-labels overeen met pagina-titels?
- Hetzelfde concept, overal zelfde woord?
- Breadcrumbs tonen werkelijke hiërarchie?
- Faceted-filters logisch gegroepeerd?
- Zoekresultaat-structuur begrijpelijk?
- 3-click-regel is mythe, maar taken moeten wel voelen als korte-paden

### Content-audit-check

- Voice & tone consistent over pagina's?
- Microcopy helder ("Volgende" vs "Doorgaan" vs "Vervolg")
- Error-messages human + actionable?
- Empty-states useful (wat kan gebruiker nu doen)?
- Button-labels benefit-focused, niet technical?
- Placeholder-tekst niet als enige label (a11y + UX-issue)

### Mobile-web-specifics (2026)

- Tap-targets minimum 44×44px (WCAG 2.2 scherpt naar 24×24 minimum, 44 is comfort)
- Thumb-reach: primary actions in bottom-third
- Horizontal-scroll alleen bij expliciete carrousels
- Sticky-elementen die <10% viewport-height innemen
- Form-inputs met `inputmode` correct ingesteld
- Auto-zoom voorkomen: `<meta viewport user-scalable=no>` is a11y-schending: niet doen

### Figma-file audit-checks

- Component-usage: losse overrides vs library-instances?
- Auto-layout overal? Hand-positionering = tech-debt
- Variables (tokens) gebruikt of hardcoded waarden?
- Dev Mode-ready? Notities voor developers vindbaar?
- Versies/branches gemanaged?

### Anti-patterns tijdens audit

- Alleen eigen device (meestal desktop): mobile-pijn gemist
- Persoonlijke mening als finding labelen (zonder framework-basis)
- Alle issues Major/Catastrophic labelen (dan zeggen ze niks meer)
- Audit zonder follow-up: findings zonder owner = vergeten
- Findings zonder recommendation ("X is slecht": wat dan wel?)
- Aesthetic-issues opblazen (klant fixt die altijd; prioriteer diep-UX-issues)

## Output-formaat

### Audit-rapport (docx via `springbok-gdoc`)

1. Executive summary: top-3 kritieke findings, verwachte impact, compliance-risico's
2. Methodologie (scope, tools, frameworks)
3. Findings per severity (Catastrophic → Cosmetic)
4. Per finding: screenshot, description, heuristic-violation, recommendation, owner-suggestie
5. IA- en content-observations (samenvatting)
6. Accessibility-flag-list (→ escalatie naar `ux-accessibility`)
7. Prioriteitsmatrix (Impact × Effort)
8. Aanbevolen volgende stappen

### Findings-backlog (xlsx)
Columns: ID, location/page, finding-description, severity (0-4), heuristic, screenshot-ref, recommendation, effort (S/M/L), owner, status.

### Figma-comment-file
Inline findings in Figma met comment-threads: efficient voor design-team iteratie.

### Exec-deck (pptx via `springbok-slideshow`)
- 5 hoofd-findings met voor/na-mockups
- Compliance-risk samenvatting
- Roadmap aanbeveling
- Vervolgacties

## Dependencies

- `pagespeed_tool`: performance × UX
- `seo_site_tool`: technische UX-issues
- `ga4_tool`: waar komen users vandaan, waar hapereren ze?
- `kie_tool`: voor/na mock-ups in rapport
- `drive_tool`: deliverables
- axe DevTools / Wave (via browser)
- Figma (via klant-toegang)

## Integratie met andere skills

- **`ux-specialist`**: router; delegeert hierheen bij review-requests
- **`ux-accessibility`**: diepe a11y-audit; deze skill signaleert, andere diept uit
- **`ux-research`**: research-findings voeden hypotheses voor audit-prioriteit
- **`ux-content-design`**: content-findings gaan diep daar
- **`ux-ia-wireframing`**: structurele issues → IA-redesign
- **`cro-audit`**: conversion-lens voegt toe aan UX-lens; beide bestaan naast elkaar

## Tips

- **Nielsen's 10 is nog steeds de backbone**. Eenvoud wint van exotische frameworks.
- **Severity-discipline**. Te veel Catastrophic = klant neemt niets meer serieus.
- **Mobile én desktop audit altijd**. Responsive-breaking is in 2026 nog steeds #1 UX-bron.
- **Cognitieve walkthrough voor kritieke flows**. Signup, checkout, search = doorloop-verplicht.
- **Screenshot-annotatie > tekst alleen**. Klant ziet "wat" veel sneller visueel.
- **Findings hebben owner**. Zonder toegewezen eigenaar blijven ze onfix-baar.
- **1-page exec-summary verplicht**. Leidinggevenden lezen nooit de 30-pagina-versie.
- **EAA-risico expliciet maken**. Accessibility-findings bij EAA-klant = juridisch risico, niet alleen UX.
- **Figma-audit andere lens dan live-site**. Sommige issues komen pas bij echte render bovendrijven.
