# Decision-Moment-Map [KLANT]
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen in fase 4
Eigenaar: design-os-strategy

De inhoudsopgave van het hele redesign. Geen ingreep zonder beslismoment.
Dit document past op 1 pagina; het wordt tientallen keren geraadpleegd.

## Kern-flow

> Verplicht, in 1 zin met template-IDs erin. Dit is de scope waarop design-os-directions
> de ontwerprichtingen maakt. Het aantal richtingen volgt uit traject-omvang (P8) in
> `01_CONTEXT/Client-Profile.md`, niet uit dit document.

Kern-flow: [BM-X t/m BM-Y, via templates HP, T[n], T[n]] (de keten waarlangs de meeste waarde ontstaat, gemeten in de primaire conversie uit het Data-Contract)

## Beslismomenten

| BM | Gebruikersvraag | Frictie (met E-ID) | Gewenste beslissing | Design-ingreep | Oorzaak | Hypothese-kandidaat |
|----|-----------------|--------------------|--------------------|----------------|---------|---------------------|
| BM-1 | | | | | vastgesteld / OPEN | |
| BM-2 | | | | | vastgesteld / OPEN | |
| BM-3 | | | | | vastgesteld / OPEN | |
| BM-4 | | | | | vastgesteld / OPEN | |
| BM-5 | | | | | vastgesteld / OPEN | |

Vuistregel: 5 tot 9 beslismomenten. Onder de 5 heb je waarschijnlijk pagina's hernoemd;
boven de 9 heb je micro-interacties meegeteld.

Een beslismoment is niet 1-op-1 een pagina. Eén BM mag over drie pagina's lopen en één
pagina mag twee BM's bedienen. Ziet deze tabel er uit als de navigatie, dan is er in
pagina's gedacht en levert fase 4 niets op wat fase 3 niet al wist.

## Beslismomenten met OPEN oorzaak

> Dit zijn de forks. design-os-directions bouwt hier de weddenschappen op.
> Markeer royaal: onzekerheid over het waarom is grondstof, geen zwakte.

| BM | Wat we weten | Wat we niet weten | Plausibele oorzaken (elk een kandidaat-fork) |
|----|--------------|-------------------|----------------------------------------------|
| | | | |

## BM per template

| Template ID | Naam | Welke BM's spelen hier |
|-------------|------|------------------------|
| HP | | |
| T1 | | |

## Lekken buiten scope

| Lek (uit Diagnose-Samenvatting) | Reden buiten scope | Besloten door | Datum |
|---------------------------------|--------------------|---------------|-------|
| | | | |

Elk lek uit de Diagnose-Samenvatting staat óf bij een BM óf hier. Niets verdwijnt stil.

## Definition of Done

Elk BM heeft gebruikersvraag, frictie met E-ID, gewenste beslissing en design-ingreep;
elk lek is toegewezen of expliciet buiten scope; de kern-flow is benoemd; de open
oorzaken zijn gemarkeerd. Zie `00_PLAN/Definition-of-Done.md`.

## Voorbeeld (fictief, generiek)

Aansluitend op het voorbeeld in `Conversion-Architecture.md` (Voorbeeldbedrijf, hybride
conversie-model):

Kern-flow: `BM-1 t/m BM-2, via templates HP, T1 (Oplossingspagina), T2 (Prijs-/pakketpagina), E1 (Offerteformulier/checkout)`

| BM | Gebruikersvraag | Frictie (met E-ID) | Gewenste beslissing | Design-ingreep | Oorzaak | Hypothese-kandidaat |
|----|-----------------|--------------------|--------------------|----------------|---------|---------------------|
| BM-1 | "Wat kost dit voor mij?" | Prijs pas zichtbaar na scrollen, mobiel (E-BEHAV-SCROLL-002) | Prijsindicatie direct zien | Prijsindicatie above-the-fold op mobiel | vastgesteld | H1 |
| BM-2 | "Past dit bij een bedrijf zoals het mijne?" | Offerteformulier vraagt bedrijfsgrootte vóór context (E-BEHAV-FORM-001) | Formulier durven starten en afmaken | Segment-gerichte voorbeelden vóór het formulier | OPEN: onduidelijk of het de vraag zelf is of het ontbreken van vertrouwen | H2 |

**Beslismomenten met OPEN oorzaak**

| BM | Wat we weten | Wat we niet weten | Plausibele oorzaken (elk een kandidaat-fork) |
|----|--------------|-------------------|----------------------------------------------|
| BM-2 | 44% verlaat het formulier bij het veld "bedrijfsgrootte" | Of dit door de vraag zelf komt of door twijfel die daarvóór al bestond | (a) de vraag voelt te persoonlijk/vroeg, (b) er ontbreekt vertrouwen dat het antwoord past bij een goed aanbod, (c) technische frictie in het formulierveld zelf |

**BM per template**

| Template ID | Naam | Welke BM's spelen hier |
|-------------|------|------------------------|
| T1 | Oplossingspagina | BM-2 (voorbereidend: vertrouwen opbouwen vóór het formulier) |
| T2 | Prijs-/pakketpagina | BM-1 |
| E1 | Offerteformulier/checkout | BM-2 |
