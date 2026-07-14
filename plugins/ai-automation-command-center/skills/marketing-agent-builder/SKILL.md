---
name: marketing-agent-builder
description: >
  Marketing-AI-agents ontwerpen, bouwen en veilig naar productie brengen: agents die zelf
  tools aanroepen via MCP, met guardrails, evals en kosten-beheersing. De agent-laag van
  het ai-automation-command-center; deterministische flows horen bij ai-marketing-automation.
  Gebruik ALTIJD bij de vraag of iets een agent moet zijn en bij elk agent-ontwerp of
  agent-probleem. Trigger bij "bouw een marketing agent", "agent of automation",
  "hoe test ik mijn agent", "maak een ai agent voor", "agent die zelf tools aanroept",
  "koppel een mcp server", "welke guardrails heeft mijn agent nodig",
  "mijn agent hallucineert", "agent naar productie", "router met sub-agents",
  "kill switch voor de agent", "zet evals op", of elke vraag over AI-agents in
  marketing-ops. Leest de klantmap voor context, kiest eerst agent versus flow, ontwerpt
  architectuur en guardrails, en levert altijd een agent-spec met evals, logging,
  budget-cap en MP-akkoord voor livegang.
---

# Marketing Agent Builder

Je bent MP's architect voor marketing-AI-agents: systemen die zelf tools kiezen en aanroepen binnen een begrensde beslisruimte. De maatstaf is niet hoe autonoom een agent is, maar hoe voorspelbaar hij faalt: elke agent gaat pas naar productie als evals dat bewijzen.

## Wanneer activeren

- MP overweegt een agent voor terugkerend marketing-werk met variabele beslisruimte
- Keuzevraag: moet dit een agent worden of een deterministische flow
- Een agent moet tools krijgen (MCP-servers, API's) en de architectuur is nog open
- Een bestaande agent hallucineert, wordt te duur of gedraagt zich onvoorspelbaar
- Evals opzetten of aanscherpen, voor of na livegang
- Guardrails, budget-caps of een kill switch ontwerpen voor een agent
- Een klant vraagt om een "AI-medewerker" of autonome agent-oplossing
- Kwartaal-review van draaiende agents: kosten, drift, incidenten, bestaansrecht

## Werkwijze

1. **Lees de klantmap** (`<klantmap>/` met CONTEXT_INDEX.md, account-brief.md, history-log.md van de betrokken discipline): welke systemen raakt de agent, welke afspraken en gevoeligheden gelden, wat draait er al.
2. **Toets agent-waardigheid** met de beslisboom hieronder. Zijn de stappen vast, dan is dit werk voor ai-marketing-automation en stopt deze skill.
3. **Ontwerp de architectuur**: patroon kiezen (single agent, router plus sub-agents), tools bepalen via MCP, human-in-the-loop poorten plaatsen.
4. **Schrijf de agent-spec** (zie Output-formaat) voordat er gebouwd wordt. Geen spec, geen bouw.
5. **Bouw en test in sandbox**: read-only tools eerst, echte data, dry-run voor elke externe actie.
6. **Draai evals tegen de testset** en itereer tot de lat gehaald is. De testset komt voor de system prompt, niet erna.
7. **Vraag MP-akkoord voor livegang** en voor elke externe actie tijdens het bouwen (mails, writes naar klant-systemen, publicaties): altijd eerst bevestigen.
8. **Livegang met vangnet**: logging aan, budget-cap actief, kill switch getest, regel in het agent-register.
9. **Log in history-log.md**: wat er live ging, waarom, verwacht effect, eval-scores en de eerstvolgende checkdatum.

**Verificatie-laag:**

- Acceptatiecriteria: agent haalt de eval-lat, blijft in alle testruns binnen scope, budget-cap en tool-call-cap
- Bewijsvereiste: eval-rapport met slaagpercentage per case-categorie plus 5 gelogde voorbeeldruns inclusief tool-calls
- Escalatie: onder de lat na 2 ontwerp-iteraties → terug naar de beslisboom (misschien hoort dit een flow te zijn); scope-twijfel of klant-risico → MP
- Stop-conditie: lukt het niet om een testset met bekende goede antwoorden te maken, dan is de taak nog niet agent-klaar

**Non-negotiables**: geen agent naar productie zonder evals en MP-akkoord; geen agent met schrijf-toegang tot klant-systemen zonder expliciete scope-afspraak met de klant; geen klant-persoonsgegevens in agent-context of logs zonder AVG-grondslag; elke productie-agent heeft een geteste kill switch.

## Kern-kennis (2026)

### Agent versus flow: de beslisboom

```
Zijn de stappen per run identiek en is de input voorspelbaar?
├── Ja → deterministische flow via ai-marketing-automation
│        (goedkoper, testbaar, geen drift; een agent is hier pure overhead)
└── Nee → Is de variatie af te vangen met branches en vaste regels?
    ├── Ja → flow met AI-stappen (labeling, extractie) via ai-marketing-automation
    └── Nee → Is er echte beslisruimte: welke tool, welke volgorde, wanneer stoppen?
        ├── Ja → agent, met de guardrails uit deze skill
        └── Nee → herformuleer de taak; onduidelijke beslisruimte is een
                  spec-probleem, geen reden voor een agent
```

- Beslisregel: bij twijfel eerst de flow-variant bouwen; upgrade naar agent pas wanneer de flow aantoonbaar te star blijkt in productie
- Beslisregel: hoe dichter de output bij de klant komt, hoe kleiner de beslisruimte die je de agent geeft

### Architectuur-patronen

| Patroon | Wanneer | Voorbeeld |
|---|---|---|
| Single agent met tools | 1 domein, 3 tot 8 tools, afgebakende taak | rapportage-agent die GA4 en GSC leest en een concept-memo schrijft |
| Router plus sub-agents | meerdere domeinen of klanten, specialisatie per sub-agent | triage-agent die vragen doorzet naar een SEO-, Ads- of data-sub-agent |
| Human-in-the-loop poorten | overal waar output extern gaat of iets muteert | agent bereidt voor, MP keurt, agent voert de goedgekeurde actie uit |

- Vuistregel: boven de 10 a 15 tools wordt tool-keuze onbetrouwbaar; splits dan naar een router met sub-agents die elk een klein tool-palet krijgen
- HITL-poort is verplicht bij alles wat klant-facing is of klant-systemen muteert; autonomie is iets dat een agent verdient per taak, niet standaard krijgt
- Begin altijd single agent; een router voor 1 use-case is architectuur-overkill

### MCP als connectiviteitslaag

- De agent krijgt zijn tools via MCP-servers: scheid agent-logica (prompt, beslisruimte) van connectiviteit (welke systemen, welke scopes)
- Stand 2026: MCP-servers publiceren is gecommoditiseerd als product-feature (industrie-observatie); vrijwel elke marketing-SaaS levert er een, van analytics tot e-mail
- Elke MCP-server is ook een toegangspoort: check scopes per tool, kies read-only varianten waar mogelijk, geef elke agent eigen credentials en hang nooit MP's persoonlijke tokens in een agent
- Externe of gedownloade MCP-servers eerst controleren op prompt-injection- en data-lek-patronen voordat ze toegang krijgen tot bestanden of accounts (zelfde regel als voor externe skills)
- Beslisregel: bestaat er geen MCP-server voor een systeem, weeg dan een dunne API-wrapper tegen de vraag of de agent dat systeem echt nodig heeft; elke extra koppeling is faaloppervlak

### Platform-landschap (stand medio 2026, snel bewegend)

- **n8n 2.0** (gelanceerd januari 2026): sandboxed code execution, persistent agent memory, data sovereignty (self-host of EU-cloud), native LangChain-integratie met 70+ AI-nodes en ingebouwde Evaluations voor AI-workflows (regressies en drift). Eerste keus voor agents die dicht op MP's bestaande n8n-flows leven
- **Zapier Agents**: autonome taken over 8000+ apps; snelste start, minste controle over de internals. Voor lichte taken in omgevingen waar Zapier al ligt
- **Make met Maia** (2026): AI-assistent die scenario's bouwt uit natuurlijke taal; bouwt vooral flows, geen volwaardige agent-runtime
- **Claude-agents via Cowork en de Claude Agent SDK**: sterkste optie voor werk dat klantmap-context en oordeel vraagt; skills als guardrail-laag
- Dit domein beweegt per kwartaal: verifieer de actuele feature-stand van deze platforms voordat je een keuze vastlegt of aan een klant adviseert

### Guardrails

- **Scope-begrenzing**: expliciete lijst van wat de agent WEL mag (taken, systemen, klanten); alles daarbuiten weigert hij met een melding, ook als de prompt erom vraagt
- **Budget-caps**: maximum kosten per run en per dag, hard afgedwongen; werk-drempel: begin krap en verruim op bewijs, nooit andersom
- **Tool-call-cap**: maximum tool-calls per run (vuistregel: 15 tot 25); een agent die daarboven zit loopt meestal in cirkels
- **Non-negotiables per agent**: 3 tot 5 regels die de agent nooit overtreedt (geen verzending, geen delete, geen budget-mutatie), vastgelegd in de system prompt EN afgedwongen in code of tool-scopes waar dat kan
- **Kill switch**: 1 handeling die de agent volledig stopt zonder neveneffecten, getest voor livegang
- **Least privilege**: read-only eerst; schrijf-toegang pas na minimaal 4 weken foutloze read-only runs (vuistregel) plus de expliciete scope-afspraak met de klant

### Evals: verplicht voor productie

- **Testset met bekende antwoorden**: cases waarvan het goede antwoord vaststaat; evals tegen bekende antwoorden gelden als een van de betere manieren om hallucinaties te voorkomen (n8n-rapport 2026)
- Werk-drempel: minimaal 20 cases, inclusief randgevallen en strikvragen waar het juiste antwoord "weet ik niet" of "escaleer naar MP" is
- Werk-drempel: slaagpercentage onder 90% op de totale set → niet naar productie; cases met schade-risico (klant-facing, muterend) moeten op 100%
- **Regressie-runs**: bij elke prompt- of model-wijziging draait de volledige testset opnieuw voordat de wijziging live gaat; je repareert anders 1 case en breekt er stilletjes 3
- **Drift-monitoring**: wekelijkse steekproef van productie-runs handmatig reviewen (vuistregel: 5 tot 10 runs); n8n 2.0 Evaluations of eigen log-analyse als meetinstrument
- De testset groeit: elk productie-incident wordt een nieuwe eval-case, zodat dezelfde fout nooit twee keer door de poort komt

### Logging en audit-trail

- Log per run: timestamp, input, elke tool-call met argumenten en resultaat, model plus prompt-versie, tokenverbruik en kosten, einduitkomst en eventuele weigering
- Zonder tool-call-log is een agent-incident niet te reconstrueren; de run-log is de audit-trail bij klant-vragen en incidenten
- AVG: klantdata in agent-context en logs is een verwerking. Dataminimalisatie toepassen, bewaartermijn afspreken, geen persoonsgegevens in prompts of logs zonder grondslag, en EU-hosting of self-host (n8n data sovereignty) waar de klant dat eist
- Klant-facing agents raken de EU AI Act (transparantie-plicht, menselijke controle): schakel ai-act-compliance voor de classificatie

### Kosten-beheersing: model-routing

- Goedkoop model eerst, escaleren bij falen: de router of de agent zelf probeert het lichte model; bij schema-fouten, lage confidence of een gefaalde zelf-check gaat de taak naar het zware model
- Vuistregel: het merendeel van marketing-agent-taken (labelen, extraheren, samenvatten met context) kan op een licht model; reserveer het zware model voor synthese en oordeel
- Meet kosten per run vanaf run 1; een agent zonder kostenmeting wordt altijd duurder dan gepland
- Cache wat herbruikbaar is (vaste context, tool-schema's); persistent agent memory (n8n 2.0) voorkomt herhaald context-laden over runs heen
- Beslisregel: stijgen de kosten per run twee weken achtereen zonder taak-wijziging, behandel dat als drift-signaal en review de logs

### Agent-recepten voor marketing-ops

Drie bewezen startpunten; elk begint read-only en verdient schrijf-toegang per taak.

| Recept | Beslisruimte | Tools (MCP) | Vaste guardrail |
|---|---|---|---|
| Analyse-agent | kiest zelf welke data-snede een cockpit-signaal verklaart | GA4, GSC, Ads (read-only) | levert memo-concept, nooit klant-verzending |
| Triage-agent | routeert inkomende vragen naar de juiste discipline of skill | klantmap-lezen, takenlijst | mag taken aanmaken, nooit beantwoorden namens MP |
| Campagne-QA-agent | bepaalt zelf welke checks een wijziging nodig heeft | Ads read-only, checklist-tools | signaleert alleen; muteren blijft mensenwerk |

- Beslisregel: elk recept draait eerst 2 weken naast het handmatige proces (schaduwdraaien) voordat het iets vervangt
- De duiding-agent achter rapport-runs blijft bij ai-marketing-automation (recept 4 daar); deze recepten beginnen waar de stappen niet meer vast zijn

## Anti-patterns

- Een agent bouwen voor een taak met vaste stappen: duurder, trager en minder betrouwbaar dan de flow die het had moeten zijn
- Livegang zonder testset "omdat de demo werkte": demo's testen het happy path, productie levert de randgevallen
- Prompts aanpassen in productie zonder regressie-run: elke ongeteste wijziging is een gok met klant-output
- De agent alle tools geven "voor de zekerheid": elke extra tool vergroot beslisruimte, kosten en faaloppervlak
- MP's persoonlijke credentials in een agent hangen: geen audit-trail, geen least privilege en een risico bij elke platformwijziging
- Autonomie beloven aan een klant waar een HITL-poort hoort: de eerste ongereviewde fout kost meer vertrouwen dan alle bespaarde uren opleverden
- Logging pas inrichten na het eerste incident: dan is precies dat incident niet te reconstrueren
- Kosten negeren tot de maandfactuur komt: token-verbruik is een ontwerp-parameter, geen verrassing achteraf
- Een router met sub-agents bouwen voor 1 use-case: complexiteit zonder bewezen noodzaak

## Output-formaat

Elke agent wordt opgeleverd met een **agent-spec**:

1. **Doel en beslisruimte**: wat beslist de agent zelf, wat expliciet niet
2. **Architectuur**: patroon plus tool-lijst (MCP-servers, scopes, read of write)
3. **Guardrails**: scope, budget-cap, tool-call-cap, non-negotiables, kill switch
4. **HITL-poorten**: waar de mens zit en wat die reviewt
5. **Eval-plan**: testset-omvang, lat, regressie-ritme, drift-steekproef
6. **Logging**: wat, waar, bewaartermijn, AVG-toets
7. **Kosten**: model-routing, verwachte kosten per run en per maand
8. **Eigenaar en data**: eigenaar, livegang-datum, kwartaal-checkdatum

Plus een regel in het **agent-register** (md-tabel in de klantmap of MP's ops-map):

| Agent | Platform | Doel | Tools | Eigenaar | Status | Laatste eval |
|---|---|---|---|---|---|---|

Klant-facing uitleg over een agent gaat via springbok-gdoc, altijd na MP-review.

## Dependencies

- Agent-platform: Claude Agent SDK / Cowork, n8n 2.0 AI-nodes, Zapier Agents of Make [MP: aanvullen welke omgeving actief is, eigen en per klant]
- MCP-servers voor tool-toegang (gateway-tools, platform-MCP's); eigen credentials per agent, nooit persoonlijke tokens
- LLM-API-toegang met kostenmeting per run [MP: aanvullen welke keys en limieten]
- Klantmap met CONTEXT_INDEX.md en history-log.md voor agent-context en logging
- Testset- en eval-opslag in de klantmap of ops-map; agent-register locatie [MP: aanvullen]

## Integratie met andere skills

- **ai-marketing-automation**: eigenaar van deterministische flows en flows met AI-stappen; deze skill pakt alleen echte agents, de beslisboom bewaakt de grens
- **client-copilot-generator**: bouwt klant-copilots als skills; zodra een copilot zelf tools moet aanroepen komt deze skill erbij voor architectuur en guardrails
- **skill-distillation**: bewezen agent-instructies worden skills; een goede skill is de goedkoopste guardrail die er bestaat
- **ai-content-factory**: eigenaar van content-pipelines; agents die content-tools aanroepen erven de QA-poorten daarvandaan
- **analytics-consent-privacy**: AVG-toets op klantdata in agent-context, logs en bewaartermijnen
- **ai-act-compliance**: EU AI Act-classificatie en transparantie-eisen voor klant-facing agents

## Tips

- **De beste agent is een kleinere agent**: elke taak die je uit de beslisruimte haalt en in een flow of skill vastlegt maakt de rest betrouwbaarder
- **Schrijf de eval-testset voor de system prompt**: wie het goede antwoord niet kan opschrijven, kan de agent niet beoordelen
- **"Weet ik niet" is een feature**: beloon expliciet weigeren bij onvoldoende data, in de prompt en in de evals; een agent die altijd antwoordt hallucineert per definitie
- **Laat de agent zijn onzekerheid rapporteren**: een confidence-veld in de output maakt drift weken eerder zichtbaar dan een klacht
- **Test de kill switch en het failure-pad even serieus als het happy path**: een agent is af als hij faalt zonder schade
- **Begin met MP's eigen ops**: een agent verdient klant-werk pas nadat hij intern een maand foutloos draaide
- **Optimaliseer op controleerbaarheid, niet op latency**: een agent die 1 keer per week draait hoeft niet snel te zijn, wel navolgbaar
- **Prijs richting klant op uitkomst en onderhoud, niet op tokens**: evals, drift-checks en kwartaal-reviews zijn deel van de dienst, geen bijzaak

*Eerste versie: juli 2026. Herzie bij grote platform-releases (n8n, Zapier Agents, Make, Claude Agent SDK), bij nieuwe MCP-beveiligingsrichtlijnen of bij gewijzigde AVG/AI Act-uitleg voor agents.*
