# Template Registry [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen in fase 4
Eigenaar: design-os-strategy

Scope: alle templates van het redesign (site plus e-mail), afgeleid uit `Page-Inventory.md`.
Status legenda per template: SPECCED (volledig uitgewerkt) / STUBBED (format klaar, invullen bij sprint) / OUT-OF-SCOPE.

Hoeveel templates in scope zijn volgt uit traject-omvang (P8) in `01_CONTEXT/Client-Profile.md`:
bij `vol` alle kern-templates, bij `light` de kern-flow plus maximaal 2 aanpalende templates.

Regel bij `light`: elke template die daarbuiten valt krijgt hier expliciet de status OUT-OF-SCOPE
plus een reden in het statusveld, bijvoorbeeld `Status: OUT-OF-SCOPE (light: buiten kern-flow, geen
ruimte binnen doorlooptijd)`. Zowel het blok per template als de statuskolom in het Eindoverzicht
draagt die status. Zonder reden is een template stil verdwenen in plaats van bewust overgeslagen, en
kan later niemand nagaan wat er niet is aangeraakt. Een OUT-OF-SCOPE-template blijft in dit registry
staan, hij wordt niet verwijderd.

## Format per template

```
Template ID: [HP / T1-Tn / E1-En]
Naam: [beschrijvende naam]
URL-patroon: [URL(s)]
Sprint: [1 / 2 / 3 / ... / email]
Status: [SPECCED / STUBBED / OUT-OF-SCOPE]

Primaire gebruikersintentie:
  [Wat wil de gebruiker op het moment dat ze hier landen? In hun eigen taal.]

Gebruikersbezwaren op deze pagina:
  [Wat houdt hen tegen? Lijstje van bekende blockers, elk met Evidence ID]

Vereiste modules (in volgorde):
  1. [module naam]: [waarom verplicht]: [DDR-koppeling als bekend, DDR-H[X]-[NN]]
  2. ...

Figma-componenten:
  - C-XX NaamComponent (DDR-H[X]-[NN]): [status: APPROVED / PERMANENT / NEEDS VALIDATION / BLOCKED / RESEARCH NEEDED]

Primaire KPI voor deze template:
  [Meetbare doelstelling, bijv. sessie → [primaire conversie of de laatste funnel-anker uit het Data-Contract] van X% naar >= Y%]

Evidence basis:
  [Relevante E-IDs, max 5 kernpunten]

Path to visual design:
  [Wat moet er nog gebeuren voor hi-fi design kan starten]
```

## Voorbeeld (fictief, generieke e-commerce)

```
Template ID: T1
Naam: Product Hub
URL-patroon: /[PRODUCT]
Sprint: 1
Status: STUBBED

Primaire gebruikersintentie:
  "Ik wil [PRODUCT] kopen. Welke variant past bij mij en wat kost het echt?"

Gebruikersbezwaren op deze pagina:
  - Wat betaal ik echt (prijs-onzekerheid)? (E-SURVEY-PRIJS-001)
  - Is [KLANT] betrouwbaar? (E-REVIEW-TRUST-001)
  - Op mobiel: CTA niet zichtbaar zonder scrollen (E-BEHAV-FUNNEL-001)

Vereiste modules (in volgorde):
  1. Hero met prijs en CTA above fold: mobiele instap (DDR-H1-01)
  2. Plankaarten met volledige prijsopbouw: prijstransparantie (DDR-H2-01)
  3. Trust-sectie met reviews: bezwaar-reductie (DDR-H3-01)
  4. Footer

Figma-componenten:
  - C-01 PricingCard (DDR-H2-01): NEEDS VALIDATION

Primaire KPI voor deze template:
  sessie → begin_checkout rate

Evidence basis:
  [in te vullen]

Path to visual design:
  [in te vullen]
```

## Voorbeeld (fictief, generieke B2B/leadgen)

```
Template ID: T2
Naam: Oplossingspagina
URL-patroon: /oplossingen/[SEGMENT]
Sprint: 1
Status: STUBBED

Primaire gebruikersintentie:
  "Ik wil weten of [KLANT] mijn probleem oplost en wat het traject inhoudt voordat ik een
  offerte aanvraag of een demo boek."

Gebruikersbezwaren op deze pagina:
  - Past dit bij een bedrijf van onze omvang/sector (relevantie-onzekerheid)? (E-SURVEY-FIT-001)
  - Hoeveel tijd/mensen kost implementatie (inspanningsonzekerheid)? (E-BEHAV-SCROLL-001)
  - Wie beslist hier verder over mee (meerdere stakeholders, geen directe CTA-actie)? (E-REVIEW-PROCES-001)

Vereiste modules (in volgorde):
  1. Hero met probleem-oplossing-fit en primaire CTA (demo/offerte-aanvraag): relevantie-bevestiging (DDR-H1-01)
  2. Proces-/tijdlijnsectie: verwachtingsmanagement voor het traject (DDR-H2-01)
  3. Social proof met vergelijkbare klant-cases (sector/omvang-match): bezwaar-reductie (DDR-H3-01)
  4. Secundaire CTA voor wie nog niet klaar is (bijv. whitepaper/nieuwsbrief i.p.v. direct offerte): lange sales-cyclus opvangen
  5. Footer

Figma-componenten:
  - C-01 SolutionHero (DDR-H1-01): NEEDS VALIDATION
  - C-02 ProcessTimeline (DDR-H2-01): NEEDS VALIDATION

Primaire KPI voor deze template:
  sessie → offerte-aanvraag of demo-aanvraag rate (gekwalificeerde lead, niet per se dezelfde sessie: zie P1 conversie-model)

Evidence basis:
  [in te vullen]

Path to visual design:
  [in te vullen]
```

## Templates

[per template een blok volgens het format hierboven]

## Eindoverzicht

| Template ID | Naam | Sprint | Status | Primaire KPI | Componenten |
|-------------|------|--------|--------|--------------|-------------|
| HP | | | | | |
| T1 | | | | | |
| T2 | | | | | |
| E1 | | | | | |
