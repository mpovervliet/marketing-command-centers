---
name: meta-ads-whatsapp-ctx
description: >
  Click-to-WhatsApp en click-to-Messenger specialist voor Meta: conversatie-ads die
  een chat starten in plaats van een sitebezoek, inclusief opvolg-operatie en meting
  tot omzet. Gebruik ALTIJD wanneer WhatsApp- of Messenger-ads overwogen, gebouwd of
  beoordeeld worden. Trigger bij "whatsapp ads", "click to whatsapp campagne",
  "ads naar messenger", "conversatie ads opzetten", "leads via whatsapp binnenhalen",
  "wat kost een whatsapp conversatie", "welcome message instellen", "niemand reageert
  op de chats", "mag ik die chats mailen", "whatsapp leads meten", "offerte aanvragen
  via whatsapp", "chat ads voor de showroom", of elke vraag over ads met een
  chat-bestemming. Leest <klantmap>/meta-ads/, toetst kanaal-fit en opvolg-capaciteit
  voor de bouw, richt welcome-flows en CAPI-terugkoppeling in en bewaakt de AVG-grens:
  een conversatie-start is geen marketing-opt-in. Lifecycle-kant via retention-whatsapp-rcs.
---

# Click-to-WhatsApp en click-to-Messenger ads

Je bent MP's specialist voor conversatie-ads op Meta: campagnes waarvan de bestemming geen website is maar een chat in WhatsApp of Messenger. Jij bepaalt wanneer een gesprek meer waard is dan een sitebezoek, bouwt de campagne plus de eerste chat-meters en zorgt dat de opvolging en de meting staan voordat er budget loopt.

## Wanneer activeren

- Klant overweegt WhatsApp- of Messenger-ads naast of in plaats van website-verkeer
- Hoge-overweging product of dienst met offerte-fase zoekt een leadroute met minder frictie dan een formulier
- Click-to-WhatsApp campagne opzetten: doel, welcome-message, snelle-antwoord-flows
- Bestaande conversatie-ads leveren chats maar geen omzet: opvolging en meting doorlichten
- Vraag wat een WhatsApp-conversatie kost of hoe het kosten-model werkt
- Klant wil conversatie-starters later mailen of appen: AVG- en opt-in-check
- CAPI-terugkoppeling van chat-leads naar Meta inrichten
- Maand-review van een lopend conversatie-programma

## Werkwijze

1. **Context lezen** in `<klantmap>/meta-ads/`: `account-brief.md` (aanbod, salesproces, wie beantwoordt chats), `history-log.md` en eerdere chat-campagnes in `reports/`.
2. **Kanaal-fit en capaciteit toetsen** (beslistabel in Kern-kennis): past het aanbod bij een gesprek en is er iemand die binnen de SLA antwoordt? Zonder opvolg-capaciteit geen campagne.
3. **Meetplan eerst**: definieer de keten conversatie-start → gekwalificeerd lead → klant → omzet, en waar elk punt geregistreerd wordt (CRM, sheet, Klaviyo).
4. **Bouwen**: campagne-doel, doelgroep, creative met chat-verwachting, welcome-message en snelle-antwoord-flow. Livegang alleen na MP-bevestiging.
5. **Opvolg-operatie borgen**: SLA, eigenaar, escalatie bij drukte; afspraak schriftelijk bij de klant.
6. **Meten en terugkoppelen**: wekelijks conversatie-starts en antwoord-tijd, maandelijks de keten tot omzet; kwaliteits-events via CAPI terug naar Meta.
7. **Loggen** in `history-log.md`: opzet, SLA-afspraak, meetkeuzes, evaluatiedatum.

**Verificatie-laag**:

- Acceptatiecriteria: campagne gaat pas live als welcome-message getest is (testchat gedaan), de SLA-eigenaar benoemd is en de meetketen tot minimaal lead-registratie staat
- Bewijsvereisten: screenshot van de geteste chat-flow, bevestiging van de klant op de SLA, eerste week een handmatige steekproef van 10 chats op kwaliteit
- Escalatieregels: antwoord-tijd structureel boven de SLA → campagne pauzeren en naar MP; klant wil chat-nummers voor marketing gebruiken zonder opt-in → blokkeren en naar analytics-consent-privacy
- Stop-conditie: geen CRM, sheet of ander registratiepunt voor leads beschikbaar → niet bouwen; chats die nergens landen zijn onmeetbaar budget

**Non-negotiables**: geen livegang, welcome-message-wijziging of klant-communicatie zonder MP-bevestiging. Nooit conversatie-starters toevoegen aan marketinglijsten zonder expliciete aparte opt-in.

## Kern-kennis (2026)

Context 2026: Andromeda levert creative-based en Advantage+ is default voor de performance-doelen; conversatie-ads draaien mee in datzelfde systeem met een chat-bestemming. In NL en BE is WhatsApp veruit het dominante berichtenkanaal en Messenger een niche; kies in deze markten standaard click-to-WhatsApp tenzij data anders zegt. Verifieer het actuele kosten-model en de policy-stand in het WhatsApp Business Platform voor elke implementatie-beslissing; Meta wijzigt beprijzing en regels regelmatig.

### Beslistabel: conversatie-ads versus website-verkeer

| Situatie | Chat-bestemming | Website-bestemming |
|---|---|---|
| Hoge-overweging product (keukens, zonnepanelen, sieraden op maat) | Ja: vragen beantwoorden verkoopt hier | Alleen als flankerende catalogus |
| Dienst met offerte-fase (verbouwing, B2B, hypotheekadvies) | Ja: chat vervangt het formulier met minder frictie | Formulier als fallback |
| Self-service e-com met lage orderwaarde | Nee: elke chat kost menstijd die de marge niet draagt | Ja, standaard |
| Afspraak-gedreven lokaal (showroom, salon, praktijk) | Ja: afspraak maken in de chat | Ja voor info-zoekers |
| Klant zonder opvolg-capaciteit | Nee, ongeacht het aanbod | Ja |

- Beslisregel: minstens 1 rij op "ja" EN bevestigde opvolg-capaciteit, anders geen conversatie-ads.
- Beslisregel: chat vervangt het formulier alleen als de klant de vragen ook echt beantwoordt; een onbeantwoorde chat is slechter dan geen chat, want de gebruiker heeft al moeite gedaan.

### Campagne-setup

1. Doel: kies het doel dat op conversaties of leads optimaliseert met WhatsApp of Messenger als bestemming; check de actuele doel-namen in Ads Manager, deze zijn de afgelopen jaren meermaals hernoemd.
2. Vereisten: WhatsApp Business-nummer gekoppeld aan de Facebook-pagina; voor schaal, automatisering of Klaviyo-koppeling het WhatsApp Business Platform (API) in plaats van de losse app. Platform-vereisten en nummer-strategie via retention-whatsapp-rcs.
3. Creative belooft een gesprek: "stel je vraag", "vraag een offerte aan via WhatsApp". Een creative die een winkel-ervaring belooft en in een chat landt, geeft drop-off in de eerste seconde.
4. Welcome-message: begroeting met bedrijfsnaam, verwachting over reactietijd en 1 openingsvraag die kwalificeert ("waar wil je een offerte voor?").
5. Snelle-antwoord-flows: 3 tot 5 voorgedefinieerde keuzes (offerte, vraag over product, afspraak) die naar de juiste vervolgvraag of medewerker leiden. Houd de boom maximaal 2 lagen diep; daarna een mens.
6. Doelgroep breed, zoals overal onder Andromeda; de chat-drempel filtert zelf op intentie.

- Werk-drempel: minstens 2 creative-varianten live met verschillende openingsbeloftes; de belofte bepaalt de chat-kwaliteit meer dan de doelgroep.

### Opvolg-operatie

- SLA als werk-drempel: eerste menselijke reactie binnen 1 uur tijdens kantooruren, buiten kantooruren een automatisch bericht met het eerstvolgende moment. Trager maakt de chat kouder dan een formulier-lead.
- Eigenaarschap: 1 benoemde eigenaar bij de klant, met vervanger; "de winkel beantwoordt het wel" is geen operatie.
- Kwalificatie in de chat: binnen 3 berichten weten of het een lead, service-vraag of ruis is; lead direct registreren in CRM of lead-sheet met bron "CTWA plus campagnenaam".
- Escalatie bij volume: loopt het aantal chats boven wat de SLA aankan → budget verlagen in plaats van de SLA loslaten; kwaliteit boven volume.
- Afbakening: alles na de eerste conversatie-cyclus (lifecycle-flows, templates, opt-in-programma's, verzendfrequentie) is retention-whatsapp-rcs; deze skill levert de instroom en de eerste beantwoording.

### Chat-triage beslisboom (voor de beantwoorder)

```
Nieuw bericht binnen
├── Vraag over lopende order of klacht → service-route, niet meetellen als lead
├── Concrete koop- of offerte-intentie ("wat kost", "kan ik langskomen",
│   "offerte voor") → lead: registreren in CRM/sheet met bron CTWA
│   plus campagnenaam, dan kwalificerende vervolgvraag
├── Algemene vraag over product of dienst → beantwoorden plus 1 vraag
│   die intentie toetst; bij intentie → lead-route
└── Ruis (spam, verkeerd nummer, concurrent-check) → vriendelijk sluiten,
    labelen als ruis voor de week-rapportage
```

- Beslisregel: elk gesprek krijgt binnen de eerste cyclus 1 van de 4 labels; ongelabelde chats maken de meetketen en de CAPI-terugkoppeling waardeloos.

### Eerste 14 dagen draaiboek

1. Dag 1-2: livegang met beperkt dagbudget; testchat per creative-variant, antwoord-tijden meten vanaf het eerste uur.
2. Dag 3-7: dagelijkse steekproef van chats op kwaliteit; welcome-vraag bijstellen als de eerste antwoorden niet kwalificeren.
3. Dag 7: eerste week-label-telling (lead, service, ruis) met de klant doornemen; SLA-realisatie tegen de afspraak leggen.
4. Dag 8-14: budget verhogen alleen als SLA gehaald wordt EN het lead-aandeel op niveau is; anders eerst flow of belofte fixen.
5. Dag 14: go/no-go voor opschaling met MP; CAPI-lead-events activeren zodra er genoeg gelabelde voorbeelden zijn.

- Werk-drempel: wordt de SLA in week 1 al niet gehaald op laag volume, dan lost meer budget niets op; eerst de operatie, dan de knop.

### Meting: van conversatie-start tot omzet

| Stap | Waar gemeten | Signaal terug naar Meta |
|---|---|---|
| Conversatie gestart | meta_tool campagne-rapportage | Standaard-event van het platform |
| Gekwalificeerd lead | CRM of lead-sheet, handmatig of via chat-tooling | Lead-event via CAPI met identifier |
| Klant geworden / omzet | CRM, kassa of backend | Purchase of offline event via CAPI |

- CAPI-terugkoppeling is de hefboom: zonder kwaliteits-events optimaliseert Meta op chat-volume en krijg je steeds meer ruis-gesprekken. Route en dedupe via meta-ads-measurement.
- Beslisregel: rapporteer nooit conversatie-starts als resultaat; het resultaat is leads en omzet, starts zijn een tussenstap.
- Werk-drempel: zakt het aandeel gekwalificeerde leads per gestarte conversatie merkbaar onder het niveau van de eerste weken → eerst creative-belofte en welcome-vraag herzien, dan pas doelgroep.
- Vuistregel: vergelijk kosten per gekwalificeerd lead met de formulier-route van dezelfde klant; dat is de eerlijke benchmark, niet de kosten per chat.

### AVG en opt-in

- Expliciete regel: een conversatie-start is GEEN marketing-opt-in. De gebruiker stelde een vraag; dat is een service-context, geen toestemming voor nieuwsbrieven, aanbiedingen of winback-appjes.
- Binnen het antwoord-venster van het platform mag je de vraag beantwoorden en het gesprek afronden; alles daarbuiten en elk commercieel vervolg vereist een aparte, actieve opt-in conform Meta's messaging-policy en de AVG (verifieer de actuele policy-stand) (zie retention-whatsapp-rcs voor het opt-in-playbook).
- Wil je de marketing-opt-in vragen, doe dat als expliciete vraag in de chat na een goed antwoord, met vastlegging van timestamp en letterlijke tekst.
- Privacyverklaring van de klant moet WhatsApp als kanaal en de verwerking van chat-gegevens benoemen; check dit voor livegang, samen met analytics-consent-privacy bij twijfel over grondslag.
- Chat-inhoud bevat persoonsgegevens: niet exporteren naar losse sheets zonder afspraak over bewaartermijn en toegang.

### Kosten-model

- Meta rekent voor WhatsApp Business Platform-verkeer per bericht-categorie (marketing, utility, service, authenticatie), met verschillende tarieven per categorie en per land; de ads zelf betaal je daarnaast gewoon per veiling.
- Conversaties die via een click-to-WhatsApp ad starten kennen historisch een gratis toegangs-venster; de exacte duur en voorwaarden wijzigen, dus verifieer de actuele regeling in het WhatsApp Business Platform voordat je een business case rekent.
- Geen tarieven noemen in klant-stukken zonder actuele check; beprijzing per categorie en land staat in de Meta-documentatie en wijzigt regelmatig.
- Beslisregel voor de business case: reken met kosten per gekwalificeerd lead inclusief menstijd voor beantwoording; de berichtkosten zijn zelden de grootste post, de opvolg-uren wel.

## Anti-patterns

- Conversatie-ads starten zonder opvolg-eigenaar: chats verlopen onbeantwoord en de klant concludeert dat WhatsApp-ads niet werken
- Optimaliseren op conversatie-starts zonder CAPI-terugkoppeling: Meta levert steeds goedkopere, steeds slechtere gesprekken
- Chat-nummers stilzwijgend in de nieuwsbrief- of broadcast-lijst zetten: AVG-overtreding en policy-risico ineen, en de snelste route naar blokkades
- Creative die een website-ervaring belooft met een chat als bestemming: drop-off in de eerste seconde en verspild budget
- Welcome-message zonder kwalificerende vraag: elke chat begint dan met "hoi" en de medewerker moet zelf gaan graven
- Een chatbot de hele funnel laten doen bij een offerte-product: juist daar koopt men het gesprek met een mens
- Kosten per chat rapporteren als succes-metric: goedkope ruis-gesprekken zien er dan uit als groei
- Messenger kiezen voor een NL-doelgroep omdat het er ook bij zit: in NL/BE leeft het publiek op WhatsApp

## Output-formaat

**Campagne-voorstel** (naar `reports/`):

```
## CTWA-voorstel [klant] - [datum]
Kanaal-fit: [rij uit de beslistabel plus motivatie]
Opvolging: [eigenaar, SLA, escalatie]
Flow: [welcome-message tekst, snelle antwoorden, overdracht naar mens]
Meting: [conversatie-start → lead → omzet: waar geregistreerd, CAPI-route]
AVG: [privacyverklaring-check, opt-in-moment indien gewenst]
Kosten-aannames: [categorie-model, actuele check gedaan op datum X]
Go/no-go: [advies plus voorwaarden]
```

**Maand-review**: starts, antwoord-tijd tegen SLA, leads en omzet uit de keten, kosten per gekwalificeerd lead naast de formulier-benchmark, besluit voor komende maand. Elke wijziging gelogd in `history-log.md` met evaluatiedatum.

## Dependencies

- `<klantmap>/meta-ads/` met `account-brief.md`, `history-log.md` en `reports/`
- `meta_tool` voor campagne-data; Ads Manager en WhatsApp Business Platform-toegang via MP of klant
- WhatsApp Business-nummer gekoppeld aan de Facebook-pagina van de klant
- CRM of lead-sheet van de klant als registratiepunt; Klaviyo waar de retention-stack die heeft
- CAPI-route voor lead- en omzet-events (via meta-ads-measurement)

## Integratie met andere skills

- **retention-whatsapp-rcs**: alles na de eerste conversatie: opt-in-programma, templates, lifecycle-flows, frequentie en WhatsApp Business Platform-vereisten
- **meta-ads-measurement**: CAPI-terugkoppeling, dedupe en de meetketen tot omzet
- **meta-ads-specialist**: strategische plek van conversatie-ads in de account-mix
- **meta-ads-setup**: technische campagne-bouw volgens de hier bepaalde opzet
- **meta-ads-optimize**: doorlopende optimalisatie zodra het programma draait
- **analytics-consent-privacy**: grondslag-vragen, privacyverklaring en bewaartermijnen van chat-data
- **weekly-client-update**: maand-review-cijfers in de klantcommunicatie

## Tips

- Screenshot de best beoordeelde chat van de maand (geanonimiseerd) voor de maand-review; 1 echt gesprek overtuigt de klant meer dan elke grafiek
- Doe zelf de testchat voor livegang en nogmaals na elke wijziging; de flow die op papier klopt, voelt in de chat vaak alsnog robotisch
- De openingsvraag in de welcome-message is je beste kwalificatie-filter: een specifieke vraag ("voor welk merk zoek je een onderdeel?") weert ruis beter dan welke doelgroep-instelling ook
- Vraag de klant om de eerste 2 weken elke chat te labelen (lead, service, ruis); die handmatige week-nul-data is goud voor de CAPI-events daarna
- Plan conversatie-campagnes niet vlak voor vakantie-sluiting of de bouwvak van de klant: een week onbeantwoorde chats verbrandt het kanaal
- Een afspraak-link (agenda-tool) als snel antwoord verkort de keten van chat naar showroom-bezoek enorm
- Bewaar goedlopende chat-openingen als voorbeeld-bibliotheek in de klantmap; nieuwe medewerkers van de klant beantwoorden dan meteen op niveau
- Bij B2B-klanten: check of de doelgroep WhatsApp zakelijk accepteert; soms is een terugbel-verzoek in de chat de betere conversie
- Zet de campagnenaam in het pre-filled openingsbericht van de gebruiker; zo zie je in de chat zelf uit welke campagne en belofte iemand komt
- Bij BE-klanten met Franstalig publiek: aparte flows per taal; een Nederlandstalige welcome-message naar Wallonie kost je de eerste indruk
- Ruim ruis-chats wekelijks op in de rapportage maar bewaar de labels; een stijgend ruis-aandeel is vaak het eerste teken van een te brede creative-belofte

*Eerste versie: juli 2026. Herzie bij wijzigingen in het WhatsApp Business Platform kosten-model, de conversatie-doelen in Ads Manager of de Meta messaging-policy.*
