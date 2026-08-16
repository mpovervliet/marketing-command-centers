# Intake-Checklist nieuwe klant
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Doel: alles verzamelen wat nodig is om het Design OS voor een nieuwe klant te starten. Pas als deze checklist compleet is (of gaten expliciet als aanname zijn vastgelegd) begint fase 0.

## 0. Klantprofiel (blokkerend, vult `01_CONTEXT/Client-Profile.md`)

Acht parameters die de rest van het systeem aansturen. Fase 1 is niet af zolang er een leeg is.

- [ ] **P1 conversie-model**: transactie / lead / abonnement / offerte-configurator / hybride. Plus: primaire conversie-event, funnel-ankers, waarde-eenheid, waardebron, kwaliteits-guardrail.
- [ ] **P2 meet-stack**: google-volledig / google-deels / niet-google / platform-only. Plus: gedragsbron, zoekbron, advertentiebron, tegenboekingsbron voor de dedupe-check.
- [ ] **P3 evidence-regime**: vol / dun. Op basis van sessies en conversies per maand, haalbare testduur en beschikbare testtooling.
- [ ] **P4 merk-mandaat**: brand-vast / brand-open / brand-afwezig.
- [ ] **P5 markt-en-rechtsregime**: markt(en), valuta, betaal- of aanvraagmethoden, privacyregime, toegankelijkheidsnorm, consent-regime.
- [ ] **P6 werktaal**: interne taal, client-facing taal, schrijfconventies van de opdrachtgever.
- [ ] **P7 traject-modus**: diagnose-only / kern-flow / vol-redesign / audit-bestaand-design.
- [ ] **P8 traject-omvang**: vol / light. Uit te vragen: het budget of de opdrachtsom, de doorlooptijd tot oplevering, en welk deel van de site meedoet (alleen de kern-flow of het hele kern-template-pakket). Plus: aantal richtingen in fase 5b, welke templates in scope zijn en wat bewust buiten scope blijft.

### P8 uitvragen zonder de standaardverwarring

P8 gaat over de omvang van de opdracht, niet over de omvang van het verkeer. Dit is de vraag die
bij intake het vaakst misgaat, dus stel hem expliciet zo.

| Wat je hoort | Welke parameter dat stuurt | Waarom |
|--------------|---------------------------|--------|
| "We hebben weinig verkeer / te weinig conversies om te testen" | P3 evidence-regime (`dun`) | Dat gaat over de route naar bewijs, niet over de hoeveelheid werk |
| "Het budget is beperkt" of "het moet over zes weken staan" | P8 traject-omvang (`light`) | Dat gaat over hoeveel werk er past |
| "Alleen deze ene flow, de rest van de site laten we staan" | P8 traject-omvang (`light`) | Dat gaat over hoeveel van de site meedoet |
| "We doen alleen de diagnose, geen ontwerp" | P7 traject-modus | Dat gaat over welke fases draaien |

Een kleine klant met een ruime opdracht draait `vol`. Een grote klant met een korte opdracht draait
`light`. Verkeersvolume komt in deze afweging niet voor: dat is uitsluitend P3.

Vraag bij twijfel niet "is dit een groot of klein traject", maar deze drie:
1. Wat is het budget of de opdrachtsom voor dit traject?
2. Welke doorlooptijd staat er, en is er een harde datum?
3. Welk deel van de site doet mee: alleen de kern-flow, of alle kern-templates?

Blokkerend: zonder P8 is het aantal richtingen in fase 5b onbepaald en kan de template-scope niet
worden vastgelegd. `light` schaalt alleen volume: de minimumscore 3, de anker-regels, de toetsen en
de verplichte velden blijven ongewijzigd.

## 1. Toegangen

| Toegang | Identifier | Profile/route | Status |
|---------|-----------|---------------|--------|
| BEHAV | [MEETBRON_ID] | [PROFILE] | Open |
| zoekconsole | [ZOEKBRON_ID] | [PROFILE] | Open |
| het advertentieplatform | [ADVERTENTIEBRON_ID] | [PROFILE] | Open |
| Figma (design system + werkbestand) | file_key: [invullen] | | Open |
| A/B-testtooling | [tool + toegang] | | Open |
| Session recordings / heatmaps | [tool of "niet aanwezig"] | | Open |
| Overige bronnen (CRM, e-mail, feed) | [invullen] | | Open |

## 2. Aanleiding en klantbewijs

- [ ] Aanleiding van het traject (waarom nu, wie is opdrachtgever, wat is de doel-KPI)
- [ ] Exit-survey of ander direct klantonderzoek (inclusief n en periode)
- [ ] Review-bronnen: reviewplatforms, klachtenplatforms, app-store reviews
- [ ] Supportdata: top-tickets, veelgestelde vragen, retour-/annuleringsredenen

## 3. Historie

- [ ] A/B-testhistorie: alle eerdere tests met resultaat (winner/loser/inconclusive)
- [ ] Eerdere audits, onderzoeken, strategie-documenten → kopieren naar `01_CONTEXT/`
- [ ] Bekende gefaalde of afgewezen ideeen → `09_DECISION-LOG/Rejected-Ideas.md`

## 4. Brand en design

- [ ] Brand guidelines, tone of voice, verplichte terminologie
- [ ] Bestaand design system (Figma-bibliotheek, tokens, componenten)
- [ ] Beeldmateriaal en assets (logo's, productfoto's, klantfoto's)
- [ ] Scope-afspraak: rebrand ja/nee (default: nee, werken binnen bestaand systeem)
- [ ] Merk-mandaat (P4) staat in `01_CONTEXT/Client-Profile.md`. Blokkerend: zonder mandaat kan fase 5b niet starten.

## 5. Technische stack

- [ ] CMS / frontend-platform en conversie-verwerkend systeem
- [ ] Tag management (GTM), consent-setup (het consent-mechanisme van dit rechtsregime (P5))
- [ ] Bekende technische beperkingen (SPA-rendering, legacy, release-cadans)
- [ ] Wie is dev-contactpersoon en wat is de deploy-flow

## 6. Swap-lijst (placeholders die overal vervangen moeten worden)

| Placeholder | Betekenis | Waarde voor deze klant |
|-------------|-----------|------------------------|
| [KLANTMAP] | Volledig pad naar de klantmap (agent-prompts gebruiken [KLANTMAP]/design-os/) | |
| [KLANT] | Klantnaam | |
| [SITE] | Primair domein (bijv. voorbeeldklant.nl) | |
| [PRODUCT] | Kernproduct of productlijn | |
| [MEETBRON_ID] | de gedragsbron property-ID | |
| [ADVERTENTIEBRON_ID] | het advertentieplatform customer-ID | |
| [ZOEKBRON_ID] | property van de zoekbron (bijv. domein-property of URL-prefix) | |
| [PROFILE] | Profiel- of accountniveau voor de meetbron-toegangen | |
| [AANTAL-RICHTINGEN] | Aantal ontwerprichtingen in fase 5b: 5 bij P8 `vol`, 3 bij P8 `light`, nooit minder dan 3. **Niet invullen in de zoek-en-vervang-stap**, zie de volgorde hieronder | |

### Volgorde van invullen (hard)

[AANTAL-RICHTINGEN] staat op deze lijst en in de placeholder-scan, maar hij wordt in een andere
stap ingevuld dan de rest: zijn waarde volgt uit P8 en die staat tijdens de zoek-en-vervang nog
niet vast. Houd deze volgorde aan:

1. **Zoek-en-vervang** alle placeholders uit de tabel hierboven in de hele stencil-map, behalve
   [AANTAL-RICHTINGEN]. Die laat je bewust staan.
2. **Vul het klantprofiel in** (`01_CONTEXT/Client-Profile.md`): P1 t/m P8, waaronder P8
   traject-omvang.
3. **Vervang dan pas [AANTAL-RICHTINGEN]** overal door 5 (`vol`) of 3 (`light`). Dit raakt onder
   meer `10_PROMPTS-AND-AGENTS/Cowork-Master-Prompt.md` en
   `10_PROMPTS-AND-AGENTS/Claude-Design-Prompts.md`, die letterlijk geplakt worden.
4. **Vul de context-stubs in `01_CONTEXT/`** en start fase 0 met
   `10_PROMPTS-AND-AGENTS/Cowork-Master-Prompt.md`.

### Acceptatiecriterium en gate

- [ ] Placeholder-scan over de hele klantmap levert nul treffers op, inclusief
      [AANTAL-RICHTINGEN]. Een openstaande placeholder in een prompt die letterlijk wordt geplakt
      is geen schoonheidsfoutje maar een fout in de uitvoering.

| Gate | Criterium | Blokkeert |
|------|-----------|-----------|
| Fase 1 afronding | Nul openstaande placeholders in de klantmap, [AANTAL-RICHTINGEN] daarbij inbegrepen, en P1 t/m P8 gezet of expliciet als openstaande vraag gemarkeerd | Doorgang naar fase 2 |
