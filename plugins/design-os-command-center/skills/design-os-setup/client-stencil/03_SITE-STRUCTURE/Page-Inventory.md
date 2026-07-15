# [KLANT]: Pagina-inventaris en template-kaart
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: welke pagina's bestaan er nu, welke templates zijn er nodig, wat is de scope van het redesign?

> Invul-instructie: crawl [SITE] (techseo/crawltool) en groepeer alle URLs per functie. Elke URL krijgt een template-ID (HP, T1-Tn voor site-templates, E1-En voor e-mail-templates). Long-tail varianten van dezelfde structuur delen een template.

## Hoe de site is opgebouwd (huidige structuur)

| Productlijn/functie | Hoofd-URL | Conversie-URL |
|---------------------|-----------|---------------|
| [PRODUCT] | /[pad] | /[pad]/bestellen of /checkout |
| [tweede lijn, indien aanwezig] | | |

## Alle pagina's, gegroepeerd per functie

### 1. [PRODUCT]: producten en funnel

| URL | Functie | Template |
|-----|---------|----------|
| /[pad] | Hoofdpagina producten plus plankaarten | T1: Product Hub |
| /[pad]/bestellen | Checkout/configurator | T2: Checkout |
| /[pad]/[infopagina] | Uitlegpagina | T3: Info/Uitleg |

### 2. Long-tail SEO landingspagina's

Varianten op dezelfde template; alleen kop en filter wijzigen. Voorbeeldclusters: doelgroep, prijsklasse, functie, vergelijk.

| Cluster | Voorbeelden | Template |
|---------|-------------|----------|
| | | T4: Long-tail Landing Page |

### 3. Tools en checks

| URL | Functie | Template |
|-----|---------|----------|
| | | T5: Tool/Check |

### 4. Service en blog

| URL | Functie | Template |
|-----|---------|----------|
| | Service hub | T6: Service Hub |
| | Blog-artikel | T7: Blog |

### 5. E-mail-templates (transactioneel/lifecycle, voor zover in scope)

| E-mail | Trigger | Template |
|--------|---------|----------|
| | | E1 |

## Eindoverzicht

| Template ID | Naam | Aantal URLs | Sprint | In scope |
|-------------|------|------------:|--------|----------|
| HP | Homepage | 1 | | |
| T1 | | | | |
| T2 | | | | |
| E1 | | | | |
