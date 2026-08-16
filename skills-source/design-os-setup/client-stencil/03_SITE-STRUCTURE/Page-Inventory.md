# [KLANT]: Pagina-inventaris en template-kaart
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen in fase 4
Eigenaar: design-os-strategy

Doel: welke pagina's bestaan er nu, welke templates zijn er nodig, wat is de scope van het redesign?

> Invul-instructie: crawl [SITE] (techseo/crawltool) en groepeer alle URLs per functie. Elke URL krijgt een template-ID (HP, T1-Tn voor site-templates, E1-En voor e-mail-templates). Long-tail varianten van dezelfde structuur delen een template.

## Hoe de site is opgebouwd (huidige structuur)

| Productlijn/functie | Hoofd-URL | Conversie-URL |
|---------------------|-----------|---------------|
| [PRODUCT] | /[pad] | [conversie-URL: bestellen, aanvragen, offerte, reserveren, aanmelden] |
| [tweede lijn, indien aanwezig] | | |

## Alle pagina's, gegroepeerd per functie

### 1. [PRODUCT]: producten en funnel

| URL | Functie | Template |
|-----|---------|----------|
| /[pad] | Hoofdpagina aanbod plus keuze-kaarten | T1: Aanbod-hub |
| /[pad]/[conversiestap] | De conversiestap zelf | T2: [naam] |
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

| Template ID | Naam | Aantal URLs | Sessies (90d) | Conversiebijdrage | Sprint | In scope |
|-------------|------|------------:|--------------:|------------------:|--------|----------|
| HP | Homepage | 1 | | | | |
| T1 | | | | | | |
| T2 | | | | | | |
| E1 | | | | | | |

Volume en conversiebijdrage komen uit de baseline (`02_DATA-BASELINE/`). Doel van deze
tabel is niet volledigheid maar prioritering: welke 20 procent van de templates draagt
80 procent van de waarde. Die templates zijn de kandidaten voor de kern-flow.

De kolom "In scope" volgt traject-omvang (P8) in `01_CONTEXT/Client-Profile.md`: bij `vol`
alle kern-templates, bij `light` de kern-flow plus maximaal 2 aanpalende templates. Wat hier
buiten scope valt, krijgt in `Template-Registry.md` de status OUT-OF-SCOPE met reden.
