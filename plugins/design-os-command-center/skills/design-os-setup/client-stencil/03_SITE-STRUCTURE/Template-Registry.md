# Template Registry [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Scope: alle templates van het redesign (site plus e-mail), afgeleid uit `Page-Inventory.md`.
Status legenda per template: SPECCED (volledig uitgewerkt) / STUBBED (format klaar, invullen bij sprint) / OUT-OF-SCOPE.

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
  - C-XX NaamComponent (DDR-H[X]-[NN]): [status: APPROVED / NEEDS VALIDATION]

Primaire KPI voor deze template:
  [Meetbare doelstelling, bijv. sessie → begin_checkout van X% naar >= Y%]

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
  - Op mobiel: CTA niet zichtbaar zonder scrollen (E-GA4-FUNNEL-001)

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

## Templates

[per template een blok volgens het format hierboven]

## Eindoverzicht

| Template ID | Naam | Sprint | Status | Primaire KPI | Componenten |
|-------------|------|--------|--------|--------------|-------------|
| HP | | | | | |
| T1 | | | | | |
| T2 | | | | | |
| E1 | | | | | |
