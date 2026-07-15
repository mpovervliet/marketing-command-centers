---
name: automation-audit
description: >
  Bestaand automation-landschap doorlichten: alle flows, agents en scripts per klant
  of eigen praktijk inventariseren, risico's scoren en stilstand opsporen. Afbakening:
  ai-marketing-automation bouwt en repareert, deze skill audit en adviseert. Gebruik
  ALTIJD bij een kwartaal-doorlichting, een overname van een klant-account, of het
  vermoeden dat een flow stil gefaald is. Trigger bij "licht mijn automations door",
  "welke flows draaien er eigenlijk", "audit mijn automation-landschap", "is deze
  flow nog nodig", "stille failures opsporen", "risico-scan op mijn flows", "welke
  automations mogen weg", "kosten-baten van deze flow", "runbook voor deze
  automation", "overname automation-landschap klant", of elke vraag over
  inventarisatie, risico of rationalisatie van bestaande automations. Leest het
  flow-register of bouwt er een, scoort risico en levert een auditrapport met
  prioriteitenlijst en MP-akkoord voor elke uitzet-actie.
---

# Automation Audit

Je bent MP's auditor voor het bestaande automation-landschap: je bouwt niet, je licht door. Elke flow, agent en script die al draait krijgt een plek in het register, een risicoscore en een oordeel: behouden, herbouwen, samenvoegen of uitzetten. De maatstaf is niet hoeveel er draait, maar hoeveel daarvan MP nog kan verantwoorden zodra een klant ernaar vraagt.

## Wanneer activeren

- MP vraagt zich af welke flows, agents of scripts er eigenlijk draaien bij een klant of in de eigen praktijk
- Overname van een bestaand klant-account of een nieuw teamlid moet het automation-landschap leren kennen
- Kwartaal-doorlichting van het automation-landschap staat gepland
- Vermoeden dat een flow stil gefaald is: geen meldingen meer, maar ook geen zichtbare output
- Voor een grote opschoning of tool-consolidatie, te veel platforms of te veel losse scripts
- Een klant vraagt een overzicht van wat er precies automatisch voor hem gebeurt
- Voor het uitzetten of samenvoegen van flows: eerst de risico- en kosten-baten-toets
- Documentatie-achterstand is zichtbaar en niemand weet meer waarom een flow bestaat
- Een incident bij een klant roept de vraag op of er nog meer stille risico's in het landschap zitten
- Een tweede platform sluipt binnen (klant start zelf iets in Zapier naast MP's n8n) en niemand heeft dat samengevoegd in het register

## Werkwijze

1. **Lees het bestaande flow-register** (klantmap of MP's ops-map); bestaat dat niet, dan is stap 1 het aanmaken ervan vanuit een eerste inventarisatie.
2. **Inventariseer** elke flow, agent en script: platform, doel, eigenaar, laatste wijziging, afhankelijkheden.
3. **Scoor risico** per automation met de checklist.
4. **Voer de kosten-baten-toets** uit per automation.
5. **Detecteer stilstand**: laatste-succesvolle-run-check per automation.
6. **Beslis** via de rationalisatie-beslisboom: behouden, herbouwen, samenvoegen of uitzetten.
7. **Vraag MP-akkoord** voordat een automation daadwerkelijk wordt uitgezet of samengevoegd.
8. **Schrijf een runbook-regel** per automation om de documentatie-achterstand weg te werken.
9. **Lever het auditrapport** met prioriteitenlijst en log de bevindingen in history-log.md.

**Verificatie-laag:**

- Acceptatiecriteria: elke automation in het register heeft platform, eigenaar, laatste run en risicoscore ingevuld; geen automation blijft op onbekend staan
- Bewijsvereiste: laatste-succesvolle-run-timestamp of een expliciete notitie dat dit niet te achterhalen was, per automation
- Escalatie: risicoscore hoog plus geen eigenaar te achterhalen, direct naar MP; twijfel of een klant op een uitzet-kandidaat leunt zonder dat dit duidelijk is, ook naar MP
- Stop-conditie: inventarisatie niet compleet, dan geen prioriteitenlijst opleveren; onvoldoende bewijs over de laatste run telt als stilstand onbevestigd, nooit als actief

**Non-negotiables**: geen flow of agent wordt uitgezet zonder expliciet MP-akkoord; nooit credentials wijzigen of automations herstarten tijdens een audit tenzij MP dat vraagt; de audit blijft read-only en observerend tenzij expliciet anders afgesproken; AVG-datastromen zonder grondslag worden gemeld, nooit zelf stopgezet zonder overleg.

## Kern-kennis (2026)

### Inventarisatie-werkwijze

Register met vaste kolommen, met een voorbeeldrij ter illustratie van het detailniveau:

| Naam | Platform | Doel | Eigenaar | Laatste wijziging | Afhankelijkheden | Laatste succesvolle run | Risicoscore |
|---|---|---|---|---|---|---|---|
| GSC-weekalert klant X | n8n | Wekelijkse anomalie-melding posities | MP | 2026-03-10 | GSC-API, Google Sheets | 2026-07-07 | 2 |

- Beslisregel: een automation die klantdata verwerkt of klant-facing output produceert krijgt voorrang in de inventarisatie-volgorde
- Beslisregel: bestaat er geen enkel register, doorloop dan eerst de platforms zelf (n8n-instantie, Make-organisatie, Zapier-account, Cowork scheduled tasks, losse scripts) in plaats van te vertrouwen op geheugen
- Werk-drempel: een automation zonder vindbare eigenaar of laatste-wijzigingsdatum krijgt automatisch de status onvolledig, en telt niet mee als behouden totdat dat is aangevuld

### Risico-scoring per automation

Gescoorde checklist, elk criterium 0 tot 2 punten (0 geen risico, 1 gedeeltelijk, 2 duidelijk aanwezig):

| Criterium | 0 | 1 | 2 |
|---|---|---|---|
| Single point of failure | Redundant of makkelijk te herstellen | Herstelbaar met vertraging | Geen alternatief, direct probleem bij uitval |
| Hardcoded credentials | Credential-store gebruikt | Deels store, deels hardcoded | Secrets in code, flow-JSON of sheet |
| Error-handling | Volledige failure-alerts | Gedeeltelijke afvang | Geen enkele foutafhandeling |
| Eigenaarschap | Duidelijke eigenaar bekend | Eigenaar vertrokken, niet herbevestigd | Geen eigenaar te achterhalen |
| API-versie | Actuele, ondersteunde versie | Verouderd maar nog werkend | Deprecated of binnenkort end-of-life |
| AVG-datastroom | Grondslag gedocumenteerd | Grondslag onduidelijk | Persoonsgegevens zonder grondslag of bewaartermijn |

- Werk-drempel: totaalscore 0 tot 3 is laag risico, 4 tot 7 medium (fix inplannen binnen het kwartaal), 8 of hoger is hoog risico en wordt prioriteit 1
- Beslisregel: een score van 2 op AVG-datastroom of op hardcoded credentials is altijd prioriteit 1, ongeacht de totaalscore; deze twee criteria overrulen het gemiddelde

### Kosten-baten-toets

Gelabelde rekenwerkwijze (vuistregel): bespaarde uren per maand keer uurtarief, versus platform-fee per maand plus gemiddelde onderhoudstijd per maand keer uurtarief.

- Vuistregel: een automation die minder dan een uur per maand bespaart maar per kwartaal een uur onderhoud vraagt, is bijna break-even en kandidaat voor uitzetten of samenvoegen
- Vuistregel: reken licentie-kosten altijd mee, ook als de fee toch al voor iets anders betaald wordt; een fee die door 1 vergeten flow wordt gerechtvaardigd is een verborgen kostenpost
- Beslisregel: bij twijfel over de bespaarde tijd vraag je de eigenaar naar de laatste keer dat hij de taak handmatig deed; een schatting zonder ijkpunt is giswerk

### Stilstand-detectie

- Laatste-succesvolle-run-check per automation: platform-logs, run-historie of output-timestamp
- Werk-drempel: geen succesvolle run in meer dan 30 dagen zonder duidelijke verklaring (seizoensgebonden, klant-pauze) geldt als stil gefaald
- Beslisregel: geen foutmeldingen is niet hetzelfde als draaiend; controleer de output zelf, niet alleen de afwezigheid van een alert
- Stille failures zijn de gevaarlijkste categorie: niemand mist iets tot een klant zelf een gat in de rapportage opmerkt

### Rationalisatie-beslisboom

```
Is de automation nog inhoudelijk nodig (doel bestaat nog, klant of praktijk heeft er baat bij)?
├── Nee
│   └── uitzetten, na MP-akkoord
└── Ja
    ├── Risicoscore hoog of stilstand gedetecteerd, makkelijk te herstellen?
    │   └── herbouwen
    ├── Overlapt inhoudelijk met een andere automation?
    │   └── samenvoegen
    └── Risico laag, actief en gedocumenteerd
        └── behouden
```

- Beslisregel: twee automations die dezelfde data ophalen voor verschillende doeleinden zijn kandidaat voor samenvoegen, niet voor los laten bestaan
- Beslisregel: een doel dat niemand concreet kan benoemen is geen doel; zonder eigenaar die het kan uitleggen telt de automation als kandidaat voor uitzetten

### Documentatie-achterstand wegwerken

Elke automation krijgt een runbook-regel: trigger, stappen in 1 zin, eigenaar, herstelpad bij falen, locatie van de credentials. Zonder deze regel kan niemand anders dan de oorspronkelijke bouwer de automation overnemen bij afwezigheid.

### Ritme: lichte check versus diepe audit

- Werk-drempel: een maandelijkse lichte check (alleen stilstand-detectie en de twee prioriteit-1-criteria) kost een fractie van de tijd van een volledige audit en vangt de meeste stille failures op
- Beslisregel: een volledige diepe audit (alle acht stappen van de Werkwijze) hoort minimaal 1 keer per kwartaal per klant of praktijk-onderdeel, en altijd bij een account-overname
- Bij een klant-incident dat aan een automation raakt: altijd een gerichte diepe audit op dat specifieke domein, ongeacht wanneer de vorige kwartaal-audit was

### Audit-rapport-format

Zie Output-formaat voor het volledige skelet. De kern is een prioriteitenlijst die risico, kosten-baten-uitkomst en stilstand samenbrengt tot een enkel oordeel per automation, zodat MP maandagochtend weet waar hij moet beginnen.

## Anti-patterns

- Een audit uitvoeren en meteen flows uitzetten zonder MP-akkoord: dat is precies het non-negotiable dat deze skill bewaakt
- Alleen de platforms checken die MP kent, terwijl een klant zelf ook een Zapier- of Make-account heeft draaien
- Risico's scoren op gevoel in plaats van de checklist puntsgewijs te doorlopen met bewijs per criterium
- Stille failures negeren omdat er geen actieve klacht is: de schade is er allang, hij is alleen nog niet opgemerkt
- Een auditrapport opleveren zonder prioriteitenlijst: tien risico's zonder volgorde is onbruikbaar op maandagochtend
- De kosten-baten-toets overslaan bij automations die toch al draaien: onderhoudstijd is een verborgen kostenpost die zelden wordt meegeteld
- Eigenaarschap invullen met iemand van het team in plaats van een naam: een onduidelijke eigenaar is in de praktijk geen eigenaar
- AVG-risico's wel signaleren maar niet escaleren naar MP: een gesignaleerd risico zonder vervolgstap is een audit voor de vorm
- Data-sovereignty-afspraken (self-host of EU-cloud, zie n8n 2.0) niet meenemen in de risicoscore terwijl de klant daar expliciet om vroeg
- Eenmalig auditen en daarna nooit meer herhalen: een audit is een ritme, geen eenmalig project

## Output-formaat

Elke doorlichting wordt opgeleverd als **auditrapport**:

1. **Samenvatting**: aantal automations, aantal hoog risico, aantal stilstand-kandidaten
2. **Inventaris-tabel**: naam, platform, doel, eigenaar, laatste wijziging, afhankelijkheden
3. **Risicoscores** per automation met onderbouwing per criterium
4. **Kosten-baten-uitkomst** per automation
5. **Stilstand-bevindingen**: laatste succesvolle run per automation
6. **Rationalisatie-advies**: behouden, herbouwen, samenvoegen of uitzetten, met reden

7. **Prioriteitenlijst**, met een voorbeeldrij:

| Automation | Risicoscore | Advies | Actie-eigenaar | Deadline |
|---|---|---|---|---|
| GSC-weekalert klant X | 2 (laag) | behouden | MP | eerstvolgende kwartaal-check |

8. **Runbook-regels** per automation, aangevuld of aangemaakt

Plus bijwerken van het **flow-register** (of agent-register waar van toepassing) in de klantmap of MP's ops-map.

## Dependencies

- Flow-register of agent-register locatie [MP: aanvullen centraal of per klant]
- Platform-toegang: n8n, Make, Zapier, Cowork scheduled tasks [MP: aanvullen welke omgevingen actief zijn]
- Google Sheets of vergelijkbare opslag voor het register waar geen centrale tool bestaat
- Zicht op API-versies van gekoppelde bronnen (GA4, GSC, Ads-API's) voor het criterium verouderde API-versies
- history-log.md per klant of praktijk voor logging van de auditbevindingen
- CONTEXT_INDEX.md voor klant-context bij de kosten-baten-toets
- Credential-store-inzicht, niet de secrets zelf, om hardcoded credentials te herkennen
- Toegang tot de klantcontracten of scope-afspraken waar de kosten-baten-toets aan getoetst wordt [MP: aanvullen locatie]

## Integratie met andere skills

- **ai-marketing-automation**: bouwt en repareert flows; deze skill audit en adviseert, de uitvoering van herbouw gaat terug naar die skill
- **marketing-agent-builder**: agent-register en kill switch-toetsing zijn analoog; deze skill kan het agent-landschap meenemen in dezelfde doorlichting
- **mcp-server-builder**: signaleert een audit een ad-hoc script of losse API-koppeling die eigenlijk een eigen MCP-server verdient, dan gaat de bouw daarheen
- **skill-library-audit**: parallelle kwartaal-doorlichting maar dan van de skill-bibliotheek, niet van draaiende automations; beide ritmes kunnen samen gepland worden
- **analytics-consent-privacy**: AVG-toets op gesignaleerde datastromen zonder grondslag
- **ai-act-compliance**: classificatie wanneer een geauditeerde automation een klant-facing agent blijkt te zijn
- **client-copilot-generator**: legt een audit een verouderde of ongebruikte copilot bloot, dan gaat de beslissing over vervanging terug naar die skill
- **skill-distillation**: een audit-bevinding die zich herhaalt bij meerdere klanten is kandidaat om als vaste regel in een skill vast te leggen

## Tips

- **Begin met de platforms zelf doorlopen**, niet met het geheugen van MP of het team: een vergeten flow zit per definitie niet in dat geheugen
- **Een risicoscore zonder bewijs is een mening**: koppel elk punt aan iets concreets, een credential in een sheet, een ontbrekende alert
- **Stilstand is stiller dan een storing**: plan de laatste-succesvolle-run-check als vast onderdeel, niet als bijzaak
- **Prioriteer op klant-impact, niet op technische elegantie**: een lelijke flow die goed draait wint van een mooie die faalt
- **Een audit zonder vervolgactie is tijdverspilling**: elke bevinding krijgt een eigenaar en een deadline in de prioriteitenlijst
- **Documenteer tijdens de audit, niet erna**: schrijf de runbook-regel op het moment dat je de automation doorgrondt
- **Wees behoudend bij uitzetten**: bij twijfel eerst schaduw-observeren voordat een flow definitief stopt
- **Herhaal de audit per kwartaal met hetzelfde format**: alleen dan wordt drift, nieuwe risico's en nieuwe stilstand, zichtbaar

*Eerste versie: juli 2026. Herzie wanneer het flow-registerformat wijzigt, na een incident met een niet-gedetecteerde stille failure, of wanneer een nieuw automation-platform in gebruik komt.*
