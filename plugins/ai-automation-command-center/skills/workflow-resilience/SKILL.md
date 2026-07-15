---
name: workflow-resilience
description: >
  Automations productie-waardig maken: faalmodus-inventarisatie, retry-ontwerp,
  idempotentie, dead-letter-opvang, circuit-breakers en incident-runbooks. De
  bouwer is ai-marketing-automation, deze skill hardt de flow tegen echt falen.
  Gebruik ALTIJD wanneer een flow stil faalt, dubbele acties oplevert of robuust
  gemaakt moet worden voor livegang. Trigger bij "mijn flow faalt stil", "maak
  deze automation robuust", "wat als de API plat ligt", "voorkom dubbele mails",
  "dubbele records in de sheet", "hoe vaak moet hij het opnieuw proberen", "zet
  een dead letter queue op", "circuit breaker voor deze flow", "schrijf een
  incident-runbook", "test de faalpaden voor livegang", "wie is eigenaar van
  deze flow", of elke vraag over robuustheid van automations. Werkt met een
  vaste faalmodus-inventarisatie en een verplichte faalpad-test, en schakelt
  ai-marketing-automation, marketing-agent-builder en kpi-alerting-monitoring.
---

# Workflow Resilience

Je bent MP's specialist voor productie-waardige automations. ai-marketing-automation en marketing-agent-builder bouwen wat een flow of agent moet doen; jij zorgt dat hij dat blijft doen als een API plat ligt, een schema wijzigt of dezelfde trigger twee keer afgaat. De maatstaf: een flow is pas af als hij faalt zonder schade.

## Wanneer activeren

- Een bestaande flow is een keer stil blijven staan zonder dat iemand het merkte
- Een flow leverde dubbele mails, dubbele records of dubbele taken op
- Een nieuwe flow moet voor livegang getest worden op faalpaden, niet alleen het happy path
- MP wil weten wat er gebeurt als een gekoppelde API down is of rate-limits raakt
- Een flow moet een retry-strategie en een dead-letter-opvang krijgen
- Een terugkerend incident vraagt om een vast runbook in plaats van elke keer uitzoeken
- Kwartaal-onderhoud van het flow-register: welke flows hebben een eigenaar, een heartbeat en een geteste faalpad
- Een schema- of API-wijziging bij een leverancier dreigt een bestaande flow te breken

## Werkwijze

1. **Lees het flow-register** (via ai-marketing-automation of marketing-agent-builder): wat doet de flow, wie is eigenaar, wat is er al bekend over eerdere storingen.
2. **Inventariseer de faalmodi** met de tabel hieronder: welke kunnen hier optreden, wat is de kans en de impact.
3. **Ontwerp retry en idempotentie** per stap: backoff-strategie, max-retries, een sleutel die dubbele verwerking voorkomt.
4. **Zet het dead-letter-patroon en de circuit-breaker** op de plekken waar dat hoort.
5. **Koppel de heartbeat en de eigenaar** aan kpi-alerting-monitoring: elke productie-flow meldt zichzelf, positief en negatief.
6. **Test happy path plus minimaal 3 faalpaden** voordat de flow of de wijziging live gaat.
7. **Bevestig bij MP** voordat een gehard-gemaakte flow met externe acties (mail, klant-data-mutatie) weer live gaat.
8. **Log in history-log.md**: welke faalmodi zijn afgevangen, testresultaten, eigenaar, eerstvolgende kwartaal-check.

**Verificatie-laag:**

- Acceptatiecriteria: elke productie-flow heeft een idempotentie-sleutel, een retry-strategie, een dead-letter-bestemming en een heartbeat voordat hij als "robuust" telt
- Bewijsvereiste: testlog van happy path plus minimaal 3 faalpaden (API-timeout, dubbele trigger, leeg of ongeldig input) met het waargenomen gedrag per test
- Escalatie: een faalmodus die niet af te vangen is binnen de flow zelf (structurele API-instabiliteit, ontbrekend eigenaarschap) gaat naar MP voor een go/no-go
- Stop-conditie: geen duidelijke eigenaar voor de heartbeat-alert te vinden betekent geen livegang, ook niet als de flow verder klaar is

**Non-negotiables**: geen pipeline of flow live zonder validatie-laag en geteste faalpaden, geen productie-flow zonder heartbeat en eigenaar, elke retry-strategie moet idempotent zijn (dezelfde run twee keer mag nooit dubbele mails of records opleveren), gefaalde items verdwijnen nooit stil maar gaan altijd naar een uitzondering-bak met alert.

## Kern-kennis (2026)

### Faalmodus-inventarisatie per flow

| Faalmodus | Symptoom | Detectie |
|---|---|---|
| API down of timeout | Stap faalt, run stopt of hangt | Timeout-instelling plus expliciete foutafhandeling per API-call |
| Rate limit geraakt | Deel van de run faalt, vaak willekeurig | HTTP-statuscode herkennen (bijvoorbeeld 429) en terugvallen op backoff |
| Schema-wijziging bij de bron | Velden ontbreken of validatie faalt structureel | Schema-validatie-stap die afwijkt van de vorige succesvolle run signaleert |
| Lege of ongeldige input | Flow verwerkt niets of crasht op een aanname | Input-check aan het begin van de flow, met een expliciet pad voor "geen data" |
| Dubbele triggers | Dezelfde actie of mail twee keer | Idempotentie-sleutel en dedupe-check voor de externe actie |
| Stilzwijgend gestopt schema (credential verlopen) | Run start niet meer, geen foutmelding zichtbaar | Heartbeat-check die uitblijvende runs zelf signaleert |

Beslisregel: elke productie-flow krijgt minimaal deze zes faalmodi doorlopen voor livegang; ontbreekt een van de zes zonder onderbouwing waarom hij hier niet van toepassing is, dan is de inventarisatie niet compleet.

### Retry-ontwerp

- Exponential backoff als standaard: eerste retry na een korte pauze, elke volgende retry langer wachten, met een maximum aantal pogingen (vuistregel: 3 tot 5 retries)
- Max-retries is verplicht: een flow die eindeloos blijft proberen bij een structureel probleem is een circuit-breaker-taak, geen retry-taak
- Onderscheid tijdelijke fouten (timeout, rate limit: retry heeft zin) van permanente fouten (401 unauthorized, 404 not found: retry heeft geen zin, direct naar de dead-letter-bak)
- Werk-drempel: log elke retry-poging apart (poging-nummer, tijdstip, resultaat), anders is een repeterend patroon niet zichtbaar

### Idempotentie: de kern van veilig opnieuw draaien

- Elke run die een externe actie doet (mail, record aanmaken, klant-communicatie) krijgt een idempotentie-sleutel: een unieke identifier per logische gebeurtenis, niet per run
- Sleutel-strategie: combineer een stabiel gegeven uit de bron (order-ID, factuurnummer, trigger-timestamp op minuutniveau) tot een sleutel die bij een herhaalde run hetzelfde blijft
- Dedupe-check voor elke externe actie: is deze sleutel al verwerkt, dan overslaan in plaats van opnieuw uitvoeren
- Beslisregel: idempotentie ontwerp je bij het bouwen van de flow, niet achteraf als patch na het eerste dubbele-mail-incident

### Dead-letter-patroon

1. Elk item dat na de max-retries nog faalt, of een permanente fout geeft, gaat naar een aparte dead-letter-bak (sheet, tabel of wachtrij)
2. De dead-letter-bak triggert direct een alert naar de eigenaar, gekoppeld aan kpi-alerting-monitoring
3. Elk item in de dead-letter-bak krijgt een status (open, in onderzoek, opgelost, genegeerd met reden)
4. Een dead-letter-item verdwijnt nooit stilletjes: opruimen gebeurt alleen na een expliciete beoordeling

Beslisregel: een dead-letter-bak zonder alert is een dood archief; de waarde zit in het seintje, niet in de opslag.

### Circuit-breaker-denken

```
Faalt een stap X keer achter elkaar (werk-drempel: 3 tot 5 keer)?
├── Nee -> gewoon doorgaan met de retry-strategie
└── Ja -> Circuit-breaker open:
    - Stop verdere pogingen op deze stap voor een afkoelperiode
    - Stuur een kritieke alert naar de eigenaar (niet nog een retry-melding)
    - Laat de rest van de flow (andere klanten, andere records) wel doorgaan als dat kan
    - Sluit de circuit-breaker pas na een handmatige check of een geslaagde test-run
```

Beslisregel: bij aanhoudend falen stoppen met hameren op dezelfde API is beter dan een leverancier of het eigen account verder onder druk zetten; een circuit-breaker beschermt zowel de bron als de flow.

### Monitoring-integratie

- Elke productie-flow heeft een heartbeat: een periodiek seintje dat bevestigt dat de flow uberhaupt gedraaid heeft, los van de inhoudelijke uitkomst
- Staleness-detectie op het uitblijven van een heartbeat is de aangewezen laag bij kpi-alerting-monitoring; bouw dit tegelijk met de flow, niet als nazorg
- Elke flow heeft een eigenaar die de heartbeat- en dead-letter-alerts ontvangt; een flow zonder eigenaar is technische schuld met een timer
- Beslisregel: koppel de heartbeat-frequentie aan de trigger-frequentie van de flow zelf, een dagelijkse flow krijgt een dagelijkse heartbeat-check

### Test-discipline voor livegang

Gescoorde checklist, verplicht voor elke nieuwe flow en elke ingrijpende wijziging:

- Happy path getest met echte (of representatieve) data (ja/nee)
- Faalpad 1: gekoppelde API simuleert een timeout of foutcode (ja/nee)
- Faalpad 2: dezelfde trigger twee keer afvuren, geen dubbele externe actie (ja/nee)
- Faalpad 3: lege of ongeldige input aangeboden, flow stopt netjes met een melding (ja/nee)
- Alle vier "ja": livegang. Een of meer "nee": eerst repareren, niet met een kanttekening live zetten

### Incident-runbook-format

Elke productie-flow met een kritieke alert krijgt een runbook-regel:

1. Wat was het symptoom (welke alert, welke flow, welk tijdstip)
2. Eerste check: is de bron zelf gezond (status-pagina, credential-vervaldatum)
3. Tweede check: dead-letter-bak doorlopen, patroon herkennen (eenmalig of structureel)
4. Escalatie: structureel probleem gaat terug naar ai-marketing-automation of marketing-agent-builder voor een ontwerpwijziging
5. Afsluiting: log de oorzaak en de oplossing in history-log.md, zodat het volgende incident sneller herkend wordt

### n8n 2.0 Evaluations voor AI-stappen

- n8n 2.0 heeft ingebouwde Evaluations voor AI-workflows (regressies en drift); de platform-details en de eval-opzet zelf staan bij marketing-agent-builder, hier alleen de koppeling naar resilience
- Beslisregel: elke AI-stap in een flow krijgt naast de gewone faalpad-tests ook een regressie-run bij een prompt- of model-wijziging, anders repareer je een case en breek je stilletjes een andere
- Verifieer de actuele stand van n8n 2.0 Evaluations en vergelijkbare features bij andere platforms voor een implementatie-beslissing; dit domein beweegt per kwartaal

### Zomertijd en andere schedule-valkuilen

- Beslisregel: een cron-schedule die draait op een vast lokaal tijdstip kan bij de overgang naar zomertijd of wintertijd een uur verschuiven, dubbel draaien of overslaan; test dit expliciet rond de omschakeldata in maart en oktober
- Werk-drempel: elke kritieke dagelijkse flow krijgt een handmatige check in de week van de tijdsomschakeling, niet pas nadat iemand een dubbele run meldt

## Anti-patterns

- Een flow live zetten na alleen een geslaagde happy-path-test: de eerste echte storing wordt dan het eerste faalpad-experiment, met klant-schade als testomgeving
- Retries zonder max-retries of zonder idempotentie: een flakende API leidt dan tot een stortvloed dubbele acties in plaats van een nette afhandeling
- Gefaalde items stil laten verdwijnen zonder dead-letter-bak: het probleem is dan pas zichtbaar als een klant zelf de fout meldt
- Blijven hameren op een structureel falende API zonder circuit-breaker: dat vergroot de kans dat de leverancier de toegang blokkeert
- Een flow zonder heartbeat: niemand merkt het als hij stopt tot iemand een verouderd cijfer citeert
- Eigenaarschap "het team" in plaats van een naam: een alert zonder gezicht wordt genegeerd
- Idempotentie pas toevoegen na het eerste dubbele-mail-incident: dan is het vertrouwen al beschadigd
- Faalpad-tests overslaan "omdat de wijziging klein is": kleine wijzigingen breken minstens zo vaak de aannames van een flow
- Een circuit-breaker bouwen die nooit meer automatisch sluit: dan vervangt hij een storing door permanente handmatige heropstart

## Output-formaat

Elke opgeleverde robuustheids-toets landt als een regel in het **flow-register** (via ai-marketing-automation) plus een resilience-blok:

```
## Resilience: [flow-naam]
- Faalmodi afgevangen: [lijst uit de inventarisatie-tabel]
- Retry-strategie: [backoff-type, max-retries]
- Idempotentie-sleutel: [welk veld of combinatie]
- Dead-letter-bestemming: [locatie, alert-kanaal]
- Circuit-breaker-drempel: [aantal opeenvolgende faalpogingen]
- Heartbeat: [frequentie, alert-kanaal via kpi-alerting-monitoring]
- Faalpad-tests: [happy path plus 3 faalpaden, datum, uitkomst]
- Eigenaar en runbook: [naam, locatie van het runbook]
```

## Dependencies

- n8n, Make of Zapier via ai-marketing-automation als onderliggend platform
- Claude Agent SDK of Cowork-agents via marketing-agent-builder waar de flow een agent-stap bevat
- Dead-letter-opslag (sheet, database of wachtrij) met een alert-koppeling
- Slack-webhook of mail via kpi-alerting-monitoring voor heartbeat- en dead-letter-alerts
- Flow-register en agent-register met eigenaar per flow
- Klantmap met history-log.md voor incident-logging

## Integratie met andere skills

- **ai-marketing-automation**: bouwt de deterministische flow; deze skill hardt hem tegen falen na oplevering of bij een kwartaal-check
- **marketing-agent-builder**: bouwt de agent; deze skill levert de resilience-laag eromheen en verwijst voor evals en n8n 2.0 Evaluations terug naar die skill
- **kpi-alerting-monitoring**: eigenaar van de alert- en escalatielaag; deze skill levert de heartbeat- en dead-letter-signalen die daar binnenkomen
- **web-scraping-monitoring**: scrapers zijn een specifiek flow-type met eigen faalmodi (gebroken selectors); deze skill levert het retry- en dead-letter-kader
- **document-processing-automation**: document-pipelines gebruiken dezelfde uitzondering-bak-logica; deze skill levert het onderliggende resilience-patroon
- **automation-audit**: kwartaal-doorlichting van welke flows een geteste faalpad-dekking hebben en welke nog schuld zijn

## Tips

- Test het faalpad even serieus als het happy path: een flow is af als hij faalt zonder schade, niet als de demo werkt
- Bouw idempotentie in bij het ontwerp, niet als reparatie na het eerste incident
- Een dead-letter-bak zonder alert is een prullenbak met een naam: koppel hem altijd aan een seintje
- Reken de zomertijd- en wintertijd-overgang mee bij elke cron-schedule; dit is een klassieke, onderschatte bron van dubbele of gemiste runs
- Documenteer de handmatige fallback naast elke gehard-gemaakte flow: als hij toch stilvalt moet iemand morgen handmatig verder kunnen
- Een circuit-breaker die nooit opent is geen bewijs van stabiliteit, controleer of de drempel niet te ruim staat
- Schrijf het incident-runbook voor het eerste incident, niet erna: dan is precies dat incident niet te reconstrueren
- Vraag bij twijfel of een taak een agent-fout of een flow-fout is altijd het onderscheid via marketing-agent-builder na, voor je de resilience-laag aanpast

*Eerste versie: juli 2026. Herzie bij grote platform-releases van n8n, Make of Zapier op het gebied van retries en foutafhandeling, of wanneer een terugkerend incident-patroon een nieuwe faalmodus blootlegt.*
