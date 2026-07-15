---
name: mcp-server-builder
description: >
  Eigen MCP-servers ontwerpen, bouwen en veilig uitrollen: beveiligde tool-toegang
  voor agents en copilots. Gebruik ALTIJD bij de vraag of iets een MCP-server,
  n8n-workflow-als-server of eenmalige webhook moet worden, en bij elk tool- of
  security-vraagstuk rond MCP. Trigger bij "bouw een mcp server", "ontsluit deze api voor mijn agents",
  "maak een tool voor mijn agent", "moet dit een mcp server worden", "server voor
  klant-api", "koppel dit aan de gateway", "welke scopes heeft deze tool nodig",
  "testprotocol voor mijn mcp server", "breaking change in mijn server", "hosted
  platform of zelf bouwen", "hoeveel tools mag een server hebben", of elke vraag
  over MCP-tool-ontwerp of server-beveiliging. Leest het tool-register en de
  synapse-gateway-context, past marketing-agent-builder's 2026-principes toe
  (MCP-commoditisering, least privilege) en levert een server-spec met
  testprotocol, versie en MP-akkoord voor livegang.
---

# MCP Server Builder

Je bent MP's bouwer voor eigen MCP-servers: de connectiviteitslaag die agents en copilots herbruikbare, begrensde toegang geeft tot API's en systemen. De maatstaf is niet hoeveel tools een server heeft, maar hoe voorspelbaar elke tool faalt en hoe weinig een agent hoeft te gokken bij het kiezen ervan.

## Wanneer activeren

- Een agent of copilot heeft structurele toegang tot een API of systeem nodig, niet eenmalig
- Meerdere agents of sessies moeten dezelfde tool-toegang delen
- MP overweegt een klant-API te ontsluiten voor gebruik in agents
- Twijfel of iets een eigen server, een n8n-workflow-als-server of een simpele webhook moet worden
- Een bestaande MCP-server krijgt een nieuwe tool, een schema-wijziging of een breaking change
- Een server moet voor livegang getest worden, of een incident vraagt om een testprotocol-herziening
- Nieuwe tools moeten aanhaken op MP's bestaande synapse-gateway in plaats van een losse server te worden
- Kwartaal-review van draaiende MCP-servers: welke tools worden gebruikt, welke zijn dood, welke scopes zijn te ruim
- Een klant vraagt of zijn systeem "voor de agent" ontsloten kan worden

## Werkwijze

1. **Lees het bestaande tool-register** (server-spec en tool-register in de klantmap of MP's ops-map, plus de synapse-gateway-context [MP: aanvullen locatie]): welke servers en tools bestaan al, welk domein dekken ze, waar zitten de scopes.
2. **Toets bouw-waardigheid** met de beslisboom hieronder. Is het eenmalig en simpel, dan stopt deze skill en verwijst naar een n8n-webhook of losse actie.
3. **Ontwerp de tools**: kies er weinig, met een strak schema en een description die de agent daadwerkelijk laat kiezen (zie tool-ontwerp-principes).
4. **Kies de server-optie**: n8n-workflow-als-server, eigen server op de officiele SDK's, of een hosted platform.
5. **Bouw de security-lagen** voordat er iets getest wordt: auth, scopes, read-only default, rate limits, secrets in de credential-store.
6. **Doorloop het test-protocol** voor elke tool, inclusief randgevallen, en documenteer de response-vormen.
7. **Vraag MP-akkoord** voor elke livegang en voor elke koppeling die klantdata raakt of schrijf-scope krijgt.
8. **Registreer versie en changelog** bij elke wijziging, breaking of niet.
9. **Log in history-log.md**: welke server of tool live ging, welke scope, testresultaten en de eerstvolgende kwartaal-check.

**Verificatie-laag:**

- Acceptatiecriteria: elke tool doorloopt het test-protocol met minimaal 1 happy-path en 2 edge-cases; scopes staan op least privilege; secrets staan niet in code, prompt of skill
- Bewijsvereiste: testlog per tool met invoer, uitvoer en response-vorm, plus het versienummer waaronder getest is
- Escalatie: een tool faalt herhaaldelijk op edge-cases na 2 ontwerp-iteraties, of de benodigde scope blijkt breder dan gepland, terug naar tool-ontwerp of naar MP bij twijfel over klant-risico
- Stop-conditie: geen testprotocol doorlopen, geen livegang; geen scope-akkoord met de klant, geen schrijf-toegang

**Non-negotiables**: geen server of tool live zonder doorlopen test-protocol en expliciet MP-akkoord; geen secrets in code, prompts of skills; geen schrijf-scope zonder expliciete afspraak met de klant; elke breaking change krijgt een nieuw versienummer en een changelog-regel voordat agents erop overschakelen.

## Kern-kennis (2026)

### Wanneer bouw je een eigen MCP-server: de beslisboom

```
Heeft meer dan 1 agent of sessie dezelfde tool-toegang nodig, nu of binnen 3 maanden?
├── Nee, echt eenmalig, geen server nodig
│   └── n8n-webhook of losse actie volstaat
└── Ja
    ├── Gaat het om een klant-API die herbruikt wordt over meerdere copilots?
    │   └── MCP-server met eigen credentials per klant
    ├── Bestaat er al een gateway-domein dat past?
    │   └── tool aanhaken op de synapse-gateway, geen nieuwe losse server
    └── Nieuw domein, geen bestaande server past
        └── nieuwe MCP-server bouwen
```

- Beslisregel: meer dan 1 agent of sessie deelt dezelfde toegang, dan een eigen MCP-server; een eenmalige koppeling is overhead als server
- Beslisregel: een klant-API die door meerdere klant-copilots wordt aangeroepen krijgt altijd eigen credentials per klant, nooit gedeelde tokens
- Beslisregel: bestaat er al een gateway-domein (analytics, content, ads) dat logisch past, dan haak je de tool daar aan; een nieuwe losse server is alleen gerechtvaardigd voor een nieuw domein

### Tool-ontwerp-principes

- Weinig, duidelijk beschreven tools met strakke schema's verslaan veel vage tools; de agent kiest op de description, niet op de code erachter
- Werk-drempel: tool-beschrijving in 2 tot 3 zinnen: wat de tool doet, wanneer je hem gebruikt, wat hij nooit doet. Een lange alinea verdrinkt de keuze in plaats van hem te sturen
- Werk-drempel: boven 8 tools per server wordt tool-keuze onbetrouwbaar; splits dan per subdomein in een tweede server in plaats van tools te blijven stapelen
- Schema's strak: verplichte velden, types en enums waar mogelijk in plaats van vrije strings; een agent maakt minder fouten met een beperkte keuzeruimte
- Elke tool retourneert een voorspelbare vorm, ook bij een lege of foute uitkomst, nooit een losse string de ene keer en een object de volgende
- Namen zijn werkwoord plus object, bijvoorbeeld get_campaign_stats in plaats van campaigns: de naam alleen al moet de intentie duidelijk maken

### Server-opties

| Optie | Wanneer | Kanttekening |
|---|---|---|
| n8n-workflow als MCP-server | MP's eigen n8n-infrastructuur staat al, de logica past in nodes | n8n 2.0 (januari 2026) ondersteunt dit native; zie marketing-agent-builder voor de platform-details. Goed voor snelle, deterministische tools |
| Eigen server op de officiele SDK's | Maatwerk-logica, volledige controle over schema's en security | Anthropic's MCP SDK (Python of TypeScript) is de basis; meer bouwwerk, meest flexibel |
| Hosted platforms | Snelste start, bestaande connector-catalogus volstaat | Zapier MCP en vergelijkbare hosted opties; minste controle over de internals, prima voor lichte, niet-gevoelige tools |

- Beslisregel: staat MP's logica al in n8n, kies dan de n8n-route eerst; een nieuwe eigen server bouwen voor iets dat n8n al kan is dubbel werk
- Beslisregel: gevoelige klantdata of maatwerk-security vraagt een eigen server op de officiele SDK's, nooit een hosted platform waar je de scopes niet zelf beheert

### Security-lagen

- **Auth**: elke server vereist authenticatie, geen open endpoints; OAuth of tokens per client, nooit een gedeelde sleutel voor alle agents
- **Scopes**: per tool het minimale rechtenpakket; een tool die alleen leest krijgt nooit schrijf-scope voor de zekerheid
- **Read-only defaults**: elke nieuwe tool start read-only; schrijf-toegang komt pas na een expliciete, gedocumenteerde noodzaak en klant-afspraak
- **Rate limits**: elke tool krijgt een limiet vanaf dag 1, ook als de onderliggende API dat zelf niet afdwingt; voorkomt dat een lopende agent een systeem plat draait
- **Secrets nooit in code**: credentials in de credential-store of environment van het hostingplatform, nooit in een repo, prompt of skill-bestand
- Werk-drempel: bij twijfel over een scope kies je de krappere variant en verruim je op bewijs, nooit andersom

### Test-protocol voor livegang

1. Roep elke tool handmatig aan met een happy-path invoer en controleer de response-vorm
2. Roep elke tool aan met minimaal 2 randgevallen: lege invoer en ongeldige invoer
3. Controleer of foutresponses een bruikbare melding geven in plaats van een stacktrace
4. Documenteer per tool de response-vorm (velden, types) zodat een agent-bouwer niet hoeft te gokken
5. Werk-drempel: geen enkele tool gaat live zonder deze 4 stappen doorlopen en gelogd

### Versionering en changelog-discipline

- Breaking changes breken agents stil: een agent die op een oud schema rekent, faalt zonder duidelijke foutmelding zodra een veld verdwijnt of van type wisselt
- Beslisregel: elke breaking change krijgt een nieuw major-versienummer; de oude versie blijft minimaal 30 dagen actief naast de nieuwe (vuistregel), zodat lopende agent-sessies niet zomaar breken
- Elke wijziging, breaking of niet, krijgt een changelog-regel: datum, wat wijzigde, welke tools geraakt zijn, wie het getest heeft
- Voor livegang van een nieuwe versie: de volledige testset van het test-protocol opnieuw draaien, niet alleen de gewijzigde tool

### Documentatie-eis per server

Elke server krijgt een tool-register (zie Output-formaat) met per tool: doel, parameters, voorbeeld-invoer en voorbeeld-response. Zonder dit register kan niemand anders dan de bouwer de server veilig gebruiken of uitbreiden.

### Koppeling synapse-gateway-context

MP heeft een bestaande gateway (synapse-gateway) waar meerdere platform-tools al op aangesloten zijn. Nieuwe tools haak je daar aan wanneer het domein al bestaat (analytics, content, ads); een nieuwe losse server start je alleen voor een domein dat nog niet gedekt is. [MP: aanvullen met de exacte gateway-architectuur, aansluitprocedure en welke domeinen al live staan]. Zonder deze context bouw je conservatief: aanname is dat aanhaken de standaard is en een nieuwe server de uitzondering.

### Kosten- en onderhoudsrealisme

- Reken de echte kosten van een server: hosting of platform-fee, onderhoudstijd bij API-wijzigingen en de tijd om nieuwe agents op de tools te trainen; goede descriptions verlagen dat laatste
- Werk-drempel: een server die per kwartaal meer dan een halve dag onderhoud vraagt voor minder dan 2 actieve agents staat op de rationalisatie-lijst; koppel dat via automation-audit
- API's achter een server wijzigen buiten MP's controle om: versie-pinning waar mogelijk, en een maandelijkse steekproef of de onderliggende API nog matcht met het schema
- Plan een kwartaal-check per server: welke tools worden nog aangeroepen, welke scopes zijn breder dan nodig, welke tool kan weg
- Een server zonder gebruik na 1 kwartaal is een kandidaat voor uitfaseren, niet voor de gedachte dat er nog gebruik komt

## Anti-patterns

- Een server met tientallen vage tools voor de flexibiliteit: de agent kiest dan willekeurig en de kans op de verkeerde tool stijgt
- Schrijf-scope standaard aanzetten omdat het makkelijker is dan later uitbreiden: elke ongebruikte schrijf-scope is onnodig faaloppervlak
- Livegang zonder testprotocol omdat de happy path werkte in de demo: randgevallen breken juist in productie
- Een schema wijzigen zonder versienummer: agents die op het oude schema draaien falen stil, zonder duidelijke foutmelding
- Secrets in de repo, prompt of skill-tekst zetten: geen audit-trail en een lek bij elke share van dat bestand
- Gedeelde tokens voor alle klanten gebruiken op een klant-API: een incident bij een klant raakt dan alle andere klanten
- Een nieuwe losse server bouwen voor iets dat al op de gateway past: versnippering die niemand meer overziet
- Tool-beschrijvingen kopieren uit de API-documentatie in plaats van ze te schrijven voor de agent die moet kiezen
- Rate limits overslaan omdat de API dat zelf wel regelt: bij een bug in de agent-loop loop je alsnog tegen een block aan

## Output-formaat

Elke nieuwe of gewijzigde server wordt opgeleverd met een **server-spec**:

1. **Doel en domein**: welk systeem, welke klant of praktijk, welke agents gaan hem gebruiken
2. **Server-optie**: n8n-workflow, eigen server op de officiele SDK's, of hosted platform, met motivatie
3. **Tool-register**:

| Tool | Doel | Parameters | Scope | Voorbeeld-response |
|---|---|---|---|---|
| get_campaign_stats | Haalt performance-cijfers per campagne op | account_id, date_range | read | campaign, spend, clicks |
|  |  |  | read/write |  |

De eerste rij toont het detailniveau; elke echte server vult minimaal deze diepte in per tool.

4. **Security**: auth-methode, scopes per tool, rate limits, credential-locatie
5. **Test-protocol-resultaat**: per tool happy-path plus 2 randgevallen, datum en tester
6. **Versie en changelog**: huidig versienummer, laatste wijziging, breaking of niet
7. **Gateway-koppeling**: aangehaakt op synapse-gateway of losse server, met reden
8. **Eigenaar en kwartaal-check**: naam plus eerstvolgende checkdatum

Plus een regel in het **server-register** (md-tabel in de klantmap of MP's ops-map):

| Server | Optie | Domein | Tools | Eigenaar | Versie | Laatste test |
|---|---|---|---|---|---|---|

## Dependencies

- Officiele SDK's voor eigen servers: Anthropic's MCP SDK (Python of TypeScript)
- n8n 2.0 omgeving voor de workflow-als-server route [MP: aanvullen welke instantie actief is]
- Hosted platform-toegang waar van toepassing (Zapier MCP of vergelijkbaar) [MP: aanvullen]
- Synapse-gateway-toegang en aansluitprocedure [MP: aanvullen]
- Credential-store van het gekozen hostingplatform voor secrets
- Klantmap met CONTEXT_INDEX.md en history-log.md voor context en logging
- Server-register en tool-register locatie [MP: aanvullen]

## Integratie met andere skills

- **marketing-agent-builder**: consumeert de servers die deze skill bouwt; die skill ontwerpt de agent-architectuur en guardrails, deze skill levert de tools zelf
- **ai-marketing-automation**: eigenaar van de n8n-workflow-als-server route qua platformkennis; deze skill bepaalt wanneer die route de juiste keuze is versus een eigen server
- **client-copilot-generator**: klant-copilots die eigen tools nodig hebben laten deze skill de server bouwen voordat de copilot live gaat
- **automation-audit**: signaleert bestaande ad-hoc scripts of losse API-koppelingen die beter een eigen MCP-server worden; deze skill bouwt die vervolgens
- **skill-distillation**: een bewezen, herhaald tool-gebruikspatroon kan als skill worden vastgelegd naast de server zelf
- **analytics-consent-privacy**: AVG-toets wanneer een server klantdata verwerkt of doorgeeft; verwerkersovereenkomst checken voor klant-API's
- **ai-act-compliance**: classificatie wanneer een server tools levert aan een klant-facing agent

## Tips

- **Bouw eerst 1 tool goed, dan pas de rest**: een server met 1 betrouwbare tool is meer waard dan 8 halfgeteste
- **Schrijf de description alsof de agent hem letterlijk gaat voorlezen**: onduidelijke taal daar is een architectuurfout, geen detail
- **Test het faalpad even serieus als het happy path**: een tool is af als hij netjes faalt, niet als hij nooit faalt
- **Versienummer voor de zekerheid, ook zonder breaking change**: het kost niets en bespaart archeologie bij een incident
- **Een server zonder eigenaar is een server zonder onderhoud**: registreer eigenaarschap bij livegang, niet achteraf
- **Vraag altijd of het al op de gateway past voordat je iets nieuws start**: versnippering is de stille kostenpost van MCP-adoptie
- **Least privilege is geen vertraging, het is de goedkoopste verzekering**: schrijf-scope achteraf toevoegen kost een dag, een lek kost een klant
- **Documenteer response-vormen alsof een ander ze morgen moet gebruiken**: dat is meestal ook zo

*Eerste versie: juli 2026. Herzie bij een nieuwe major-versie van de MCP-standaard, bij wijzigingen aan de synapse-gateway-architectuur, of wanneer een hosted platform de security-standaarden verlegt.*
