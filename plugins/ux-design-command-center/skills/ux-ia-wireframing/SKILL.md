---
name: ux-ia-wireframing
description: >
  Information Architecture & wireframing specialist (web-only, strategisch). Gebruik ALTIJD bij vragen over sitemap, navigatie-structuur, card sorting, tree testing, IA-redesign, wireframe-brief, user flows, task-flows, taxonomie, faceted navigation, of search-UX. Trigger bij "bouw een sitemap", "IA redesign", "navigatie structuur", "card sort", "tree test", "taxonomy", "faceted nav", "wireframe brief", "user flow", "task flow", "low-fi wireframes", "mid-fi wireframes", "menu structuur", "breadcrumbs", "filter UX", "content hierarchy", "IA validatie", of elke structuur-vraag die aan vormgeving vooraf gaat. Focus: IA-methodologie + wireframe-briefing voor externe designer (niet high-fi productie-design). Past 2026 best practices toe (tree-test vóór redesign, behavioral data + card-sort, mobile-first flow-denken, 3-click-regel is mythe → pad-begrijpelijkheid, breadcrumb-consistentie, search als default voor content-heavy sites).
---

# Information Architecture & Wireframing Specialist

IA is het skelet. Zonder goede IA mislukt elke visuele design: navigatie voelt verkeerd, content wordt niet gevonden, taken worden afgebroken. Deze skill werkt aan de structuur-laag: sitemap, navigatie, taxonomie, flows en wireframe-briefing. Productie-design ligt bij extern designer; jij levert de blauwdruk.

---

## Wanneer activeren

- Site-redesign-plan: hoe structureren we de informatie?
- Nieuwe menu/navigatie-structuur ontwerpen
- Card sorting / tree testing opzetten en interpreteren
- Taxonomy-vraagstuk (hoe noemen we categorieën?)
- Faceted navigation ontwerpen (e-com filters)
- Search-UX-verbetering (als primary-nav voor content-heavy sites)
- User-flows uittekenen voor nieuwe feature
- Low-fi of mid-fi wireframes voor alignment (geen productie-fidelity)
- Wireframe-brief voor extern designer
- Breadcrumb-strategie + URL-structuur
- Multi-niveau navigatie (mega-menu vs drawer)

## Werkwijze

1. **Research als basis** (niet onderhandelbaar):
   - Gedragsdata uit GA4: waar klikken users, waar haken ze af?
   - Search-queries (via `gsc_tool` of interne site-search)
   - Qualitative data uit `ux-research` of `cro-user-research`
   - Card-sort-resultaten als content-taxonomie te heroverwegen is

2. **Huidige IA evalueren** (pre-design):
   - Sitemap-extractie via `seo_site_tool` crawl
   - Navigatie-labels vs pagina-titels: consistent?
   - Breadcrumb-logica kloppend?
   - Faceted filters logisch gegroepeerd?
   - Dead-ends in content (pagina's zonder interne links)?

3. **Card sorting** (als content-taxonomie heroverwogen wordt):
   - Open: users groeperen + naamgeven (generatief)
   - Closed: users plaatsen in vooraf gegeven categorieën (evaluatief)
   - Hybrid: sommige categorieën vast, andere open
   - Tools: Optimal Workshop (goud-standaard), Maze
   - Sample: 20-30 deelnemers

4. **Tree testing** (IA-validatie pre-design):
   - Text-based sitemap zonder visuals
   - Taken: "waar zou je Y vinden?"
   - First-click success rate > 70% = gezond
   - Tools: Treejack (Optimal Workshop), Maze
   - Valideert je voorgestelde IA voordat je design investeert

5. **Sitemap-ontwerp**:
   - Primary nav: 5-7 items max (Miller's 7±2 voor scanability)
   - Secondary nav: context-afhankelijk
   - Utility nav (account, help, zoek): consistent rechtsboven
   - Footer: complete index, SEO-waardevol

6. **Wireframe-brief** (niet productie-design):
   - Doel: "wat moet dit scherm bereiken"
   - Content-blokken in volgorde (hero, value-props, content-body, CTA, trust)
   - Functionele specs (welke interacties, states)
   - Responsive-gedrag-notities
   - Aanbevolen content-density
   - Verwijzingen naar componenten uit design-system (`ux-design-system`)

7. **User-flows / task-flows**:
   - User flow: alle beslissingspunten inclusief edge-cases
   - Task flow: happy-path alleen (voor presentatie)
   - Tools: FigJam, Miro, Whimsical
   - Gebruik standaard-flowchart-conventies

## Kern-kennisgebieden (2026 best practices)

### 3-click-regel is mythe

- Users geven niet op na 3 klikken; ze geven op bij onduidelijkheid
- Focus: elke klik moet voelen als vooruitgang, pad moet begrijpelijk zijn
- Lange paden zijn OK mits voorspelbaar

### Navigation-patterns web 2026

- **Primary nav bar**: 5-7 items max; zichtbaar op alle pagina's
- **Mega-menu**: voor content-heavy / e-com sites met veel categorieën
- **Drawer-nav**: mobile-default; categorieën-groepen
- **Sticky header**: alleen logo + kern-CTA + zoek (niet full nav) voor lange pagina's
- **Breadcrumbs**: verplicht bij ≥3 niveaus diep; structured data voor SEO
- **Search-prominent**: content-heavy sites > categorieën

### Miller's Law & Hick's Law toepassing

- **Miller (7±2)**: primary-nav niet meer dan 7, mega-menu-subgroepen niet meer dan 7
- **Hick's Law**: keuze-tijd groeit logaritmisch met aantal opties; minder = sneller beslissen
- Pragmatisch: 5-7 voor hoogste niveau; diepere niveaus mogen meer

### Faceted navigation (e-com)

- Filter-groepen: max 5-7 zichtbaar; rest "toon meer"
- Filter-volgorde: belangrijkste intent eerst (vaak: categorie → prijs → merk → specs)
- Selected-state zichtbaar
- "Remove all filters"-escape altijd zichtbaar
- URL-param's bij elke filter (SEO + shareability)
- Mobile: full-screen filter-overlay i.p.v. sidebar

### Search-UX prioriteit

- Voor content-heavy sites (30%+ users zoekt direct), search > menu
- Autocomplete met recent + popular + suggested
- Zero-result-state met redirects / populaire alternatieven
- Search-within-results (kleinere sub-search)
- Filtering binnen search-results

### IA-validatie voor redesign

**Voor je tekent, test**:
1. Tree-test de voorgestelde IA met 20-30 deelnemers
2. First-click-rate >70% per kern-taak = green light
3. <70% → heroverweeg voor je design begint

Bespaart maanden redesign-risk.

### Wireframing-fidelity (3 niveaus)

- **Low-fi**: blokken + labels, no styling. Snel, voor alignment over structuur.
- **Mid-fi**: wireframes met real content + basic layout. Voor review met stakeholders.
- **High-fi**: productie-design (niet deze skill → externe designer).

Deze skill produceert tot mid-fi of gedetailleerde wireframe-brief.

### URL-structuur & IA-alignement

- URLs spiegelen IA: `/wonen/sanitair/douchekranen/`
- Niet meer dan 3-4 niveaus diep (SEO + user-comfort)
- Kebab-case voor readability + SEO
- Geen query-params in primary nav-structuur

### Mobile-first IA-denken

- Mobile toont geen mega-menu → categorieën in drawer
- Thumb-reach: primary nav onderin overwegen (app-like patronen)
- Touch-targets ≥ 44×44px
- Lange lijsten: alphabetical-jumper of in-page search

### Design-tool integratie

- **FigJam / Miro** voor flows & sitemaps (collaborative)
- **Figma** voor wireframes (die later opgehoogd worden door designer)
- **Whimsical** voor snelle low-fi
- **Overflow** voor gedetailleerde flow-documentatie

### Anti-patterns

- IA bepalen op eigen intuïtie (zonder card-sort / tree-test)
- "Wir-maken-het-maar-diep"-6+ niveaus diepe nav
- Labels die techie-taal gebruiken ("API's" waar users "Integraties" verwachten)
- Breadcrumbs die niet kloppen met werkelijke IA
- Filter-groepen zonder prioritering (alfabetisch op filter-naam = chaos)
- Mobile-navigatie als after-thought van desktop
- Wireframes dichttimmeren als productie-design (fidelity-conflict met designer)

## Output-formaat

### Sitemap-diagram (FigJam/Miro, export PDF)
- Alle niveaus, labels, URL-structuur
- Primary / secondary / utility nav onderscheiden
- Cross-links (waar leidt X naar Y?)

### IA-brief (docx via `springbok-gdoc`)
1. Research-basis (samenvatting)
2. Huidige IA-evaluatie
3. Voorgestelde IA
4. Card-sort / tree-test-resultaten
5. Rationale per beslissing
6. Implementatie-volgorde + afhankelijkheden

### User-flow (FigJam/Miro)
- Start-state → eind-state
- Beslissings-diamonds
- Edge-cases zichtbaar
- Happy-path + error-paths

### Wireframe-set (Figma, low/mid-fi)
- Key templates: home, category, product/detail, search-results, checkout, account
- Annotaties per scherm
- Responsive-variant (mobile + desktop minimum)

### Wireframe-brief (voor externe designer)
- Per template: doel, content-blokken, interactie-specs
- Referenties naar design-system
- Content-voorbeelden (of pointer naar copy-deck)
- Accessibility-requirements
- Niet-over-te-nemen-beslissingen (brand-guardrails)

## Dependencies

- `seo_site_tool`: huidige sitemap-crawl
- `ga4_tool`: gedragsdata als IA-evidentie
- `gsc_tool`: search-queries voor taxonomie-insight
- `drive_tool`: deliverables
- Externe tools: Optimal Workshop, Treejack, Maze, FigJam, Miro, Figma

## Integratie met andere skills

- **`ux-research`**: card-sort + tree-test zijn research-deliverables; synthese in die skill
- **`ux-audit`**: IA-issues identified → hierheen voor restructure
- **`ux-design-system`**: wireframe-brief referenceert componenten
- **`ux-content-design`**: labels + microcopy in wireframes komen daar vandaan
- **`seo-geo-technical`**: URL-structuur, canonicals, sitemap.xml
- **`seo-geo-ecommerce`**: PLP-filters IA deelt SEO- en UX-lens

## Tips

- **Tree-test vóór redesign**. Spaart maanden werk vs achteraf ontdekken dat IA fout zit.
- **Card-sort voor nieuwe taxonomie**. Users weten hoe users content groeperen. Jij niet.
- **3-click-regel vergeten**. Paden mogen lang zijn, mits voorspelbaar.
- **Search-prominent op content-heavy sites**. 30%+ users begint met zoeken.
- **Breadcrumbs verplicht ≥3 niveaus**. Zowel UX als SEO.
- **Mobile-IA eerst**. Desktop volgt, niet andersom.
- **Wireframe-fidelity-discipline**. Niet productie-design spelen; laat designer hun werk doen.
- **Flows tonen edge-cases**. Happy-path is mooi, edge-cases breken vaak de implementatie.
- **IA-beslissingen documenteren**. Waarom X niet Y? Over 1 jaar vraagt iemand dit.
