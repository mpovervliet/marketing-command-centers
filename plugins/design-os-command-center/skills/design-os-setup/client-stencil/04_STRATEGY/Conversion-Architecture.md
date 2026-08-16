# Conversion-Architecture [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen in fase 4
Eigenaar: design-os-strategy

Doel: de site behandelen als een set beslismomenten, niet als pagina's. Het redesign wordt
daarmee een set conversie-ingrepen per beslismoment, geen nieuwe website in een keer.

Elke claim hieronder draagt een Evidence ID of staat als aanname in
`09_DECISION-LOG/Assumptions.md`.

## 1. Waar ontstaat de meeste waarde

Per flow, niet per pagina. Begin hier: een flow met lage conversieratio en de helft van de
waarde verdient meer aandacht dan een flow met hoge ratio en marginaal volume.

De waarde-eenheid volgt uit het conversie-model (P1) in `01_CONTEXT/Client-Profile.md`:
orderwaarde, waarde per gekwalificeerde lead, maandwaarde maal levensduur, of
offertewaarde maal winkans.

| Flow | Sessies | Primaire conversies | Waarde | Marge of kwalificatie-indicatie | E-ID |
|------|--------:|--------------------:|-------:|--------------------------------|------|
| | | | | | |

## 2. Welke intenties brengen beslisbereid verkeer

Uit de zoekdata en de advertentie-angles. Onderscheid oriënterend van beslisbereid.

| Intentie-cluster | Volume | Positie of kosten | Beslisbereidheid | E-ID |
|------------------|-------:|-------------------|------------------|------|
| | | | | |

## 3. Waar lekt de funnel

Per device, kanaal en pagina. Verwijs naar de Diagnose-Samenvatting; herhaal de analyse niet.

| Lek | Omvang (met segment) | E-ID | Wordt BM |
|-----|----------------------|------|----------|
| | | | |

## 4. Waarom [KLANT] in plaats van het alternatief

De propositie zoals hij aankomt bij de gebruiker, niet zoals hij bedoeld is. Bronnen:
reviewtaal, concurrent-messaging, zoekintentie.

## 5. Waar ontstaat twijfel

Bezwaren uit reviews, survey en support, elk met de plek in de funnel waar ze spelen.

| Bezwaar | Bron plus E-ID | Waar in de funnel | Weerlegd door |
|---------|----------------|-------------------|---------------|
| | | | |

## 6. Welke informatie mist voor de beslissing

## 7. Wat kunnen we veilig testen

Per kandidaat: volume op die stap, risico, en de guardrail die niet mag verslechteren.

| Kandidaat | Volume per week | Risico | Guardrail |
|-----------|----------------:|--------|-----------|
| | | | |

## Beslismoment-tabel

De uitkomst van bovenstaande. Werk hem uit in `Decision-Moment-Map.md`.

| BM | Gebruikersvraag | Frictie | Bewijs | Gewenste beslissing | Design-ingreep | Hypothese |
|----|-----------------|---------|--------|--------------------|----------------|-----------|
| BM-1 | | | | | | |

## De kern-flow

> Verplicht. De aaneengesloten keten van templates waarlangs de meeste waarde ontstaat,
> gemeten in de primaire conversie uit het Data-Contract, van instap tot conversie.
> Dit is de scope waarop de ontwerprichtingen worden gemaakt.
> Zonder deze zin bakent design-os-directions de scope op gevoel af.

Kern-flow: [1 zin met template-IDs]

Bij traject-omvang (P8) `light` bestaat de scope uit deze kern-flow plus maximaal 2 aanpalende
templates; bij `vol` uit alle kern-templates uit het Template-Registry. Harde regel: de kern-flow
zelf wordt nooit ingekort om binnen `light` te passen. Een halve keten meet geen keten. Wat niet
past, valt buiten de kern-flow en wordt als OUT-OF-SCOPE met reden vastgelegd in
`03b_SITE-STRUCTURE/Template-Registry.md`.

## Overgeslagen modules

| Module | Overgeslagen omdat |
|--------|--------------------|
| Market-Positioning-Matrix | |
| Mobile-First-Conversion-Blueprint | |
| Offer-Architecture | |
| Trust-Reassurance-Architecture | |
| Retention-And-Expansion-Architecture | |

Een module overslaan is een besluit: noteer het hier en in `09_DECISION-LOG/Decision-Log.md`.
Half invullen kost meer tijd dan motiveren waarom hij niet speelt.

## Voorbeeld (fictief, generiek — toepasbaar op B2C en B2B)

Ter illustratie van hoe de secties hierboven ingevuld worden, voor een fictief bedrijf
"Voorbeeldbedrijf" met een hybride conversie-model (P1: `hybride`, direct afsluiten voor
kleine klanten, offerteaanvraag voor grote klanten). Vervang elk veld door de eigen data van
de klant; dit voorbeeld toont het format, niet een uitkomst om te kopiëren.

**1. Waar ontstaat de meeste waarde**

| Flow | Sessies | Primaire conversies | Waarde | Marge of kwalificatie-indicatie | E-ID |
|------|--------:|--------------------:|-------:|--------------------------------|------|
| Direct afsluiten (kleinzakelijk) | 8.400/mnd | 210/mnd | €180 gemiddelde orderwaarde | n.v.t. | E-BEHAV-FUNNEL-002 |
| Offerteaanvraag (grootzakelijk) | 1.100/mnd | 34/mnd | €2.400 gemiddelde dealwaarde × 35% winkans | leadkwaliteit laag op 1 kanaal | E-CRM-DEALS-001 |

**3. Waar lekt de funnel**

| Lek | Omvang (met segment) | E-ID | Wordt BM |
|-----|----------------------|------|----------|
| Afhaken op prijspagina vóór CTA, mobiel | 61% van mobiele bezoekers verlaat binnen 10s na prijspagina | E-BEHAV-SCROLL-002 | BM-1 |
| Offerteformulier gestart maar niet verzonden | 44% van formulier-starts, vooral bij het veld "bedrijfsgrootte" | E-BEHAV-FORM-001 | BM-2 |

**5. Waar ontstaat twijfel**

| Bezwaar | Bron plus E-ID | Waar in de funnel | Weerlegd door |
|---------|----------------|-------------------|---------------|
| "Onduidelijk of dit ook voor een klein bedrijf werkt" | Survey, E-SURVEY-FIT-002 | Landingspagina, vóór prijs | Nog niet: open research-item |
| "Weet niet hoelang het traject duurt" | Supportlog, E-REVIEW-PROCES-002 | Offertepagina | Nog niet: open research-item |

**Beslismoment-tabel**

| BM | Gebruikersvraag | Frictie | Bewijs | Gewenste beslissing | Design-ingreep | Hypothese |
|----|-----------------|---------|--------|--------------------|----------------|-----------|
| BM-1 | "Wat kost dit voor mij?" | Prijs pas zichtbaar na scrollen, mobiel | E-BEHAV-SCROLL-002 | Prijsindicatie direct zien | Prijsindicatie above-the-fold op mobiel | H1 (zie Hypothesis-Backlog) |
| BM-2 | "Past dit bij een bedrijf zoals het mijne?" | Offerteformulier vraagt bedrijfsgrootte vóór enige context | E-BEHAV-FORM-001 | Formulier durven starten en afmaken | Segment-gerichte voorbeelden vóór het formulier tonen | H2 (zie Hypothesis-Backlog) |

**De kern-flow**

Kern-flow: `HP → T1 (Oplossingspagina) → T2 (Prijs-/pakketpagina) → E1 (Offerteformulier of directe checkout)`.

**Overgeslagen modules**

| Module | Overgeslagen omdat |
|--------|--------------------|
| Market-Positioning-Matrix | Geen concurrentie-data beschikbaar binnen deze sprint; opgenomen in research backlog |
| Retention-And-Expansion-Architecture | Traject-modus is `kern-flow`, retentie valt buiten scope van deze ronde |
