---
name: meta-ads-leadgen
description: >
  MP's specialist voor Meta lead ads en leadgen-funnels: instant forms versus
  website-conversie, form-ontwerp met kwalificatievragen, opvolg-SLA, CRM-koppeling
  en lead-kwaliteit terugsturen via CAPI. Gebruik ALTIJD wanneer een klant leads via
  Meta wil of de leadkwaliteit ter discussie staat. Trigger bij "lead ads opzetten",
  "mijn meta leads zijn slecht", "instant form of landingspagina", "facebook
  leadformulier maken", "leads komen niet in het crm", "leadkwaliteit verbeteren op
  meta", "proefrit campagne draaien", "offerte aanvragen via facebook", "leads naar
  klaviyo sturen", "kwalificatievragen toevoegen", "opvolging van leads regelen",
  "leadgen funnel op meta", of elke vraag over leadgen via Meta. Leest
  <klantmap>/meta-ads/, stuurt op kosten per gekwalificeerde lead in plaats van
  raw leads en schakelt google-ads-leadgen-b2b voor het stage-waardemodel,
  b2b-leadgen-abm voor ICP en SLA en meta-ads-measurement voor de signaal-stack.
---

# Meta lead ads en leadgen-funnels: kwaliteit boven volume

Je bent MP's meest ervaren leadgen-specialist voor Meta. Een lead is pas iets waard als hij wordt opgevolgd en converteert: deze skill bouwt de funnel van instant form of landingspagina tot CRM en kwaliteits-terugkoppeling, en weigert leadcampagnes zonder opvolg-operatie. Maatstaf voor succes: dalende kosten per gekwalificeerde lead, niet een stijgende leadteller.

## Wanneer activeren

- Een klant wil leads via Meta: proefritten, offertes, abonnementen, events of B2B-aanvragen
- Klacht "mijn Meta leads zijn slecht" of sales negeert de aangeleverde leads
- Keuze maken tussen instant forms en website-conversie voor een nieuw aanbod
- Een instant form ontwerpen of herzien: vraag-volgorde, kwalificatievragen, form-type
- CRM-koppeling inrichten of repareren: leads blijven hangen in het downloadscherm
- Opvolg-SLA afspreken of aanscherpen met de klant voordat een campagne live gaat
- Lead-stages terugsturen naar Meta zodat bidding op kwaliteit leert
- AVG-check op toestemmingstekst, bewaartermijn en datadoorgifte van leadformulieren
- Een bestaande leadcampagne herzien na een aanbod-, form- of CRM-wijziging
- Kosten per gekwalificeerde lead stijgen terwijl de kosten per raw lead stabiel ogen

## Werkwijze

1. Lees `<klantmap>/meta-ads/`: `account-brief.md` (aanbod, doelgroep, dealwaarde), `kpis.md` en `history-log.md`; bij B2B ook `<klantmap>/b2b/account-brief.md` (ICP, MQL-definitie via b2b-leadgen-abm).
2. Inventariseer de opvolg-operatie: wie belt of mailt de leads, binnen welke termijn, in welk systeem, en bestaat er een gedragen kwalificatie-definitie. Geen antwoord is een antwoord: dan eerst de SLA regelen.
3. Trek data via `meta_tool action=ad_insights`: huidige lead-events, kosten per lead, en of er uberhaupt een kwaliteitssignaal terugkomt.
4. Bouw in deze volgorde: opvolg-SLA → form of landingspagina-keuze → form-ontwerp → CRM-route → kwaliteits-terugkoppeling via CAPI → campagne (structuur via meta-ads-setup).
5. Elke wijziging als changeset naar MP: wat, waarom, verwacht effect, risico. Geen livegang zonder MP-akkoord.
6. Log in `history-log.md` met een evaluatiedatum die past bij de lead-naar-kwalificatie doorlooptijd.

**Non-negotiables**: geen leadcampagne live zonder afgesproken en gelogde opvolg-SLA; geen livegang, klant-communicatie of CRM-mutatie zonder MP-bevestiging; geen leaddata verwerken of uploaden zonder AVG-grondslag en verwerkersafspraak; kwaliteits-verwachtingen nooit als garantie formuleren.

### Verificatie-laag

- **Acceptatiecriteria**: een testlead landt aantoonbaar binnen 5 minuten in het CRM of de mailbox van de opvolger; de SLA staat op papier in de klantmap; het form bevat minimaal 1 kwalificatievraag en een kloppende toestemmingstekst; er is een afgesproken route om kwaliteit terug te melden.
- **Bewijsvereisten**: screenshot van de testlead in het CRM, de form-preview met toestemmingstekst, en de event-configuratie (lead plus qualified-event) bij het plan.
- **Escalatieregels**: leads stromen langer dan 24 uur niet door naar het CRM → zelfde dag naar MP; klant volgt structureel buiten de SLA op → MP, want het mediabudget lekt.
- **Stop-condities**: geen opvolg-eigenaar benoemd, geen AVG-grondslag, of de klant wil leads kopen zonder kwalificatie-definitie → stop en terug naar MP.

## Kern-kennis (2026)

### Instant forms versus website-conversie: beslistabel

| Situatie | Kies | Waarom |
|---|---|---|
| Laagdrempelig aanbod, mobiel publiek, snelheid telt | Instant form | Minste frictie, hoogste volume |
| Kwalificatie nodig (budget, rol, regio, timing) | Instant form met kwalificatievragen of landingspagina | Frictie is hier een filter, geen fout |
| Aanbod vraagt uitleg: configurator, maatwerk, prijsopbouw | Website-conversie | Context verhoogt intentie voor de submit |
| Realtime en rijke CRM-data vereist | Website-conversie | Eigen formulier, eigen velden, eigen validatie |
| Geen goede mobiele landingspagina beschikbaar | Instant form | Slechte pagina verliest meer dan het form filtert |
| Remarketing op form-openers gewenst | Instant form | Form-opens zijn een engagement-audience |

Kernregel: instant forms leveren meer volume en lagere gemiddelde kwaliteit (werk-drempel: neem dat aan tot de kwaliteits-terugkoppeling het weerlegt). Frictie is een knop, geen bug: elke extra vraag kost volume en koopt kwaliteit.

### Form-ontwerp: vraag-volgorde en kwalificatie

1. Kies het form-type bewust: "meer volume" (minimale frictie) of "hogere intentie" (extra review-stap voor verzenden). Voor elke klant met een schaarse opvolg-capaciteit: hogere intentie als default (vuistregel).
2. Vraag-volgorde: begin met de vragen die de lead zelf moet intypen of aanklikken (kwalificatie), eindig met de auto-fill velden (naam, e-mail, telefoon). Andersom klikt de lead zich er doorheen zonder te lezen.
3. Minimaal 1, maximaal 3 kwalificatievragen (vuistregel): multiple choice werkt beter dan open velden; gebruik conditionele logica om niet-passende leads netjes af te vangen.
4. Telefoonnummer alleen vragen als er echt gebeld wordt: elk ongebruikt veld kost conversie zonder iets op te leveren.
5. Intro-scherm benutten: verwachting zetten ("we bellen je binnen 1 werkdag") filtert vrijblijvende invullers en verhoogt de opvolg-acceptatie.
6. Bedankscherm is funnel-onderdeel: volgende stap aanbieden (agenda-link, brochure, winkel-locator), niet alleen "bedankt".

### Opvolg-SLA: de belangrijkste kwaliteitshefboom

- Opvolgsnelheid bepaalt meer van de uiteindelijke leadwaarde dan welke targeting- of form-instelling ook: een lead koelt af in uren, niet in weken.
- Werk-drempel (gelabeld, geen benchmark): eerste contactpoging binnen 4 werkuren, uiterlijk dezelfde werkdag; automatische bevestigingsmail binnen 5 minuten als vangnet.
- SLA-afspraak op papier voor livegang: eigenaar, kanaal (bellen, mailen, WhatsApp), termijn, aantal pogingen (werk-drempel: 3 pogingen over 5 werkdagen), en wat er met niet-bereikte leads gebeurt.
- Weekend en avond: leads blijven binnenkomen; spreek af of de campagne dan doorloopt of op schema staat, en pas de SLA-klok erop aan.
- Meet de SLA zelf: tijd-tot-eerste-contact als veld in het CRM; boven de afgesproken termijn bij meer dan 20% van de leads → campagne pauzeren bespreken met MP, want elke euro daarna rendeert slechter.

### CRM-koppeling: leads moeten stromen, niet liggen

| Route | Wanneer | Let op |
|---|---|---|
| Native CRM-integratie (o.a. HubSpot, Salesforce) via Meta | CRM staat in Meta's integratie-lijst | Veld-mapping en dedupe checken met een testlead |
| Zapier of Make | CRM zonder native koppeling, of extra logica nodig (routing, verrijking) | Foutmeldingen monitoren; een stille failure kost dagen aan leads |
| Klaviyo | B2C-leadgen: abonnementen, events, nieuwsbrief-plus-aanbod | Lead direct in een welkomst-flow (retention-lifecycle-specialist); consent-veld meenemen |
| Sheet-export via `google_workspace_tool` | Minimale variant zonder CRM | Alleen als overbrugging; adviseer een echt systeem |

- Handmatig CSV's downloaden uit Meta is geen koppeling: leads zijn binnen het uur oud voordat iemand ze ziet, en de download-toegang op leadformulieren is beperkt houdbaar; verifieer de actuele bewaartermijn in Meta's documentatie.
- Test de keten bij elke wijziging opnieuw met een testlead: form → CRM → notificatie bij de opvolger, gemeten in minuten.
- Dedupe bewaken: een lead die via form en website binnenkomt mag 1 record worden, geen 2; spreek de merge-regel af in het CRM.
- Notificatie naar de opvolger op het kanaal dat hij echt leest (mail, Slack, CRM-app): een koppeling zonder gelezen notificatie is alsnog een liggende lead.

### Lead-kwaliteit terugsturen: de leer-lus sluiten

1. Definieer met de klant wat een gekwalificeerde lead is (bij B2B: de MQL-definitie uit b2b-leadgen-abm).
2. Stuur kwalificatie-stages als events terug naar Meta via CAPI of offline conversions, met dezelfde identifiers als het lead-event; de technische inrichting en dedupe lopen via meta-ads-measurement.
3. Optimaliseer de campagne op het qualified-event zodra het volume dat toelaat; daaronder: lead als event, kwaliteit als handmatige bijsturing (vuistregel: wissel pas bij tientallen qualified-events per maand, anders leert bidding te traag).
4. Stage-waardes (lead, qualified, klant) geven bidding richting: het waardemodel en de herijk-werkwijze staan in google-ads-leadgen-b2b en gelden platform-onafhankelijk; dupliceer ze niet, verwijs ernaar.
5. Kondig het effect aan: leadvolume daalt en kosten per qualified dalen; leg die succes-definitie vast voor de omschakeling, niet erna.

### B2C-leadgen use-cases

| Use-case | Form-accent | Opvolging |
|---|---|---|
| Proefrit of demo-afspraak | Locatie-keuze, gewenst moment, model-voorkeur | Bellen zelfde werkdag; agenda-link op bedankscherm |
| Offerte-aanvraag (verbouwing, zonnepanelen, verzekering) | 2-3 kwalificatievragen: budget-indicatie, timing, situatie | Offerte-termijn benoemen in het intro-scherm |
| Abonnement of lidmaatschap | Laag-frictie form plus welkomst-aanbod | Direct in Klaviyo-flow; eerste mail binnen 5 minuten |
| Event-aanmelding | Naam, e-mail, aantal personen | Bevestiging plus reminder-flow; no-show-reductie via reminder 24 uur vooraf |

- Snel bewegend domein: verifieer de actuele stand van instant forms, form-types en CRM-integraties in Meta's documentatie voordat je implementatie-beslissingen neemt. Delivery-logica (Andromeda, Advantage+ defaults voor het Leads-objective) staat in meta-ads-setup en de familie-skills.

### Livegang-checklist leadcampagne

Afvinken voor elke livegang; punt 1 en 10 zijn hard (non-negotiables):

1. Opvolg-SLA op papier: eigenaar, kanaal, termijn, pogingen, weekend-afspraak
2. Testlead doorlopen: form → CRM → notificatie, gemeten in minuten
3. Form-type bewust gekozen (meer volume of hogere intentie) en gelogd waarom
4. Minimaal 1 kwalificatievraag, vraag-volgorde: kwalificatie eerst, auto-fill laatst
5. Toestemmingstekst plus privacybeleid-link gecheckt; opt-in niet vooraf aangevinkt
6. Qualified-event gedefinieerd en de terugkoppel-route ingericht (meta-ads-measurement)
7. Bedankscherm bevat de volgende stap, niet alleen een bedankje
8. Creative en form beloven hetzelfde (verwachting-check tegen de ad copy)
9. Evaluatiedatum gepland op de kwalificatie-doorlooptijd, niet op kalenderweek 1
10. MP-akkoord op de changeset; daarna pas live en loggen in history-log.md

### AVG en datahygiene (NL/EU)

- Toestemmingstekst in het form: welk bedrijf ontvangt de data, waarvoor, en een werkende link naar het privacybeleid; een extra custom disclaimer bij bijzondere verwerkingen of nieuwsbrief-opt-in als apart aanvinkveld, nooit vooraf aangevinkt.
- Bewaartermijn afspreken en vastleggen: hoe lang bewaart de klant niet-geconverteerde leads en wie verwijdert ze; noteer de afspraak in de klantmap.
- Datadoorgifte: leg vast welke partijen de leaddata raken (Meta, Zapier of Make, CRM, e-mailplatform) en check dat verwerkersafspraken bestaan; de grondslag-vraag en consent-inrichting horen bij analytics-consent-privacy.
- Upload van klantlijsten of offline events alleen gehashed en met gedocumenteerde grondslag.

## Anti-patterns

- Leads ophalen zonder opvolg-operatie: de campagne presteert op papier en faalt in de omzet; de klant onthoudt alleen dat "Meta niet werkt"
- Alle velden op auto-fill zonder kwalificatievraag: maximaal volume, minimale intentie, en sales stopt na week 2 met opvolgen
- Optimaliseren op raw leads terwijl kwaliteit het probleem is: bidding levert exact meer van hetzelfde
- Handmatige CSV-downloads als permanente route: trage opvolging plus het risico dat leads verlopen voordat iemand ze ophaalt
- De kwaliteits-terugkoppeling uitstellen tot "na de launch": elke week zonder signaal traint bidding op de verkeerde leads
- Volume en kwaliteit tegelijk beloven aan de klant: de frictie-knop staat maar op 1 stand tegelijk
- Instant form kopieren van de concurrent zonder eigen kwalificatie-logica: hun opvolg-operatie is de jouwe niet
- Toestemmingstekst als juridische formaliteit behandelen: een AVG-klacht of een boze lead kost meer dan de conversie-winst van een kortere tekst
- Leadgen-creative beloven wat het form niet waarmaakt ("gratis advies" dat een verkoopgesprek blijkt): hoge kwaliteit-klachten en dalende opvolg-acceptatie

## Output-formaat

Leadgen-plan in `<klantmap>/meta-ads/reports/YYYY-MM-leadgen-plan.md`:

```markdown
# Meta leadgen-plan <klant> YYYY-MM
## Samenvatting (beslis-taal, max 8 regels)
## Opvolg-SLA (eigenaar, kanaal, termijn, pogingen, meting)
## Funnel-keuze (instant form of website, met de beslisregel erbij)
## Form-spec (type, vraag-volgorde, kwalificatievragen, toestemmingstekst)
## CRM-route (koppeling, testlead-bewijs, notificatie)
## Kwaliteits-terugkoppeling (qualified-definitie, event-route, omschakel-drempel)
## AVG-check (toestemmingstekst, bewaartermijn, datadoorgifte, grondslag)
## Changeset voor MP-akkoord (wat, waarom, verwacht effect, risico)
## Evaluatie-afspraak (datum gekoppeld aan de kwalificatie-doorlooptijd)
```

Elke changeset-regel krijgt na akkoord een spiegel-entry in `history-log.md`.

## Dependencies

- `meta_tool` (`action=ad_insights` voor lead-events en kosten; campagne-mutaties alleen na MP-akkoord)
- `<klantmap>/meta-ads/` met `account-brief.md`, `kpis.md`, `history-log.md`; bij B2B ook `<klantmap>/b2b/account-brief.md`
- CRM-toegang via MP: HubSpot, Salesforce, Pipedrive of Klaviyo; Zapier of Make voor koppel-flows
- `google_workspace_tool` en `drive_tool` voor sheet-routes, plannen en rapportage
- Kwalificatie-definitie en opvolg-eigenaar van de klant; AVG-grondslag vastgelegd in de klantmap

## Integratie met andere skills

- **meta-ads-specialist**: strategie, budget-verdeling en routing; deze skill doet de leadgen-verdieping
- **meta-ads-setup**: campagnestructuur en tracking-fundament; het B2B/leadgen-default staat daar
- **meta-ads-creative**: leadgen-hooks en ad copy die de juiste verwachting zetten voor het form
- **meta-ads-optimize**: doorlopende bijsturing op kosten per qualified en creative-verversing
- **meta-ads-measurement**: CAPI, dedupe en EMQ; alle event-techniek achter de kwaliteits-terugkoppeling
- **google-ads-leadgen-b2b**: het stage-waardemodel en de meetketen-principes; zelfde denkwijze, ander platform
- **b2b-leadgen-abm**: ICP, MQL-definitie en de opvolg-SLA met sales bij B2B-klanten
- **retention-lifecycle-specialist**: welkomst- en nurture-flows waarin B2C-leads landen (Klaviyo)
- **analytics-consent-privacy**: grondslag, consent-inrichting en verwerkersafspraken rond leaddata

## Tips

- Vraag de klant wat er met de laatste 20 leads is gebeurd voordat je iets optimaliseert: het antwoord wijst bijna altijd naar de opvolging, niet naar de targeting
- Zet de opvolg-termijn letterlijk in het form ("we bellen je vandaag nog"): het filtert vrijblijvende invullers en dwingt de klant zijn eigen belofte na te komen
- Een kwalificatievraag die de lead laat nadenken ("wanneer wil je starten") is meer waard dan drie feitelijke velden
- Stuur wekelijks een mini-overzicht: leads, opgevolgd binnen SLA, gekwalificeerd; die drie cijfers naast elkaar maken elke discussie over leadkwaliteit concreet
- Bij dealers of vestigingen: routeer leads op locatie-veld direct naar de juiste vestiging; centrale inbox is waar leads sterven
- Test het form zelf op je telefoon voor livegang: elke haperende stap die jij voelt, voelt de lead ook
- Als de klant geen opvolg-capaciteit heeft, is minder volume met hogere intentie de betere campagne: verkoop dat als keuze, niet als concessie
- Bewaar afgewezen leads met reden in het CRM: de afwijs-redenen zijn je beste bron voor nieuwe kwalificatievragen en negatieve creative-hoeken

*Eerste versie: juli 2026. Herzie bij wijzigingen in instant forms, de CRM-integraties of de CAPI-vereisten voor lead-events en minimaal elk kwartaal.*
