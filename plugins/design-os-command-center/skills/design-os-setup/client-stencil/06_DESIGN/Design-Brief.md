# [KLANT] Redesign: Design Brief
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Intern document, niet client-facing.
Bronnen: [opsommen: de gedragsbron baseline-periode, zoekdata-analyse, crawl, survey plus n, A/B-historie, Hypothesis-Backlog, ICE-prioritering uit de Hypothesis-Backlog]

## 1. Doel van dit document

Dit is de data-to-design vertaaltabel. Alle Figma-beslissingen zijn hierop terug te voeren. Niets in Figma staat er zonder dat dit document een databron aanwijst.

Scope-omvang volgt `traject-omvang` (P8) uit `01_CONTEXT/Client-Profile.md`: bij `vol` alle kern-templates uit het Template-Registry, bij `light` de kern-flow plus maximaal 2 aanpalende templates. Elke template in scope krijgt een wireframe-brief, ook de aanpalende; bij `light` schaalt niet het aantal briefs maar het aantal uitgewerkte schermen per template: binnen de kern-flow allemaal, daarbuiten alleen het scherm waar de beslissing landt. De omvang schaalt, de lat niet: de minimumscore 3 voor Figma-productie en elk verplicht veld blijven gelijk.

## 2. Vastgestelde feiten (de harde data)

> Vul per sub-sectie een compacte tabel met de kerncijfers plus E-IDs.

### 2a. Funnel per device
| Device | Sessies | Sessie → beslisstap | Beslisstap → conversie | Conversieratio |
|--------|--------:|------------------:|-------------------:|----:|
| Mobiel | | | | |
| Desktop | | | | |

### 2b. Microfunnel van de conversiestap
| Stap | Events | Drop |
|------|-------:|-----:|
| | | |

### 2c. Beste en slechtste converters (per LP)
### 2d. Organische kansen (de zoekbron)
### 2e. A/B-testbewijs (wat intern al getest is, met winners en losers)
### 2f. Klantbewijs (survey/reviews: top-blokkades)
### 2g. Technische bevindingen (crawl, rendering, browsers)

## 3. Hypothese-prioritering

| Prioriteit | Hypothese | ICE | Sprint | Datafundament |
|-----------|-----------|:---:|--------|---------------|
| P1 | | | | |
| P2 | | | | |

## 4. Design-implicaties per hypothese

> Per hypothese: probleem (1-2 zinnen met cijfers), design-actie (concreet), wireframe-verwijzing (WF-XX).

### H[X]: [titel] (ICE [score])
**Probleem:** [invullen]
**Design-actie:** [invullen]
**Wireframe:** WF-[XX]

## 5. Figma-opbouwplan

Volgorde en inhoud per Figma-pagina; elke pagina heeft een helder doel.

| Pagina | Inhoud | Datalink |
|--------|--------|----------|
| 00 Cover & Method | titel, datum, eigenaar, leeswijzer | geen |
| 01 Current Site Audit | annotated screenshots huidige kernpagina's, annotaties verwijzen naar H-nummers | technische audit, crawl |
| 02 Data & Conversion Architecture | 5-7 data-kaartjes plus funnel-diagram en beslismoment-kaart | de gedragsbron, de zoekbron, survey, Decision-Moment-Map |
| 03 Wireframes | lo-fi per hypothese, grijs palet, blauwe annotaties | Wireframe-briefs (WF-XX), 1 per template in scope bij `vol` en bij `light`; binnen de kern-flow worden alle schermen uitgewerkt, daarbuiten alleen het scherm waar de beslissing landt |
| 04 Selected Direction | de in fase 5b gekozen richting, hi-fi | Direction Case plus APPROVED of PERMANENT DDRs (elk met Evidence Score plus anker, minimaal 3) |
| 05 Design System | token-referentie plus component-library en spec-kaarten | `07_DESIGN-SYSTEM/Design-Tokens.md` |
| 06 Prototype | klikbaar prototype van de geteste flows | hypotheses die het prototype test |
| 07 Assets | SVG-logo's, iconen, beeldmateriaal buiten de templates | brand assets |
| z_Archief [datum] | eerdere staten, nooit verwijderen | historie |

Er is geen pagina met concurrerende visuele richtingen meer: die keuze is in fase 5b gemaakt en onderbouwd in `05b_DIRECTIONS/`. Deze tabel is de enige bron voor de pagina-indeling; `design-os-figma-build` volgt hem.

## 6. Kleurgebruik per Figma-pagina

| Pagina | Palet |
|--------|-------|
| 01 Audit | screenshots plus rode annotatiekleur |
| 02 Data & Architecture | merkkleur plus wit, cijfers bold, grijs met merkkleur voor knelpunten |
| 03 Wireframes | grijs palet only, geen brandkleuren |
| 04 Selected Direction | volledige brandkleuren uit Design-Tokens, binnen het visuele mandaat van de gekozen richting |
| 05 Design System | kleurstalen plus typography scale |
| 06 Prototype | volledige brand, pixel-perfect |

## 7. Wat er NIET in Figma hoeft (buiten scope)

- [invullen: productlijnen, paginatypes en flows buiten scope]
- [bij `light`: wat er door de beperkte omvang buiten scope blijft, en wat dat mogelijk kost]

## 8. Openstaande vragen voor [KLANT] (voor klant-presentatie)

1. [invullen: welke content-, prijs- of asset-beslissingen liggen bij de klant]
2. [invullen]
3. [invullen]
