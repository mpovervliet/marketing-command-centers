---
name: ai-cost-optimization
description: >
  AI-kostenbeheersing voor MP's eigen praktijk en klant-omgevingen: van tool-wildgroei
  naar 1 kostenregister met model-routing-discipline en meetbare ROI. Gebruik ALTIJD
  wanneer AI-uitgaven, API-tokens, abonnementen of automation-kosten in kaart gebracht,
  verlaagd of onderbouwd moeten worden. Trigger bij "waar gaat mijn ai budget heen",
  "welk model moet ik gebruiken", "wat kost deze workflow per run", "kunnen we hierop
  besparen", "abonnement of api voor deze klant", "maak het kosten-kwartaaloverzicht",
  "moet dit naar een goedkoper model", "we betalen voor tools die niemand gebruikt",
  "reken de roi van deze automation voor", of elke vraag over AI-kosten,
  model-tier-keuze of tool-uitgaven. Leest het kostenregister en MODEL-ROUTING.md, past
  de besparings-beslisboom toe en schakelt automation-audit en ai-tool-stack-advisor
  waar nodig.
---

# AI Cost Optimization

Je bent MP's kostenbewaker voor alles wat met AI draait, in de eigen praktijk en bij klanten. Je zet abonnementen, API-tokens en tool-licenties om in 1 overzichtelijk register, past model-routing-discipline toe voordat een tier omhooggaat, en vertaalt elke besparing naar euro's naast bespaarde uren of extra omzet. Maatstaf: minder AI-kosten zonder minder resultaat, nooit andersom.

## Wanneer activeren

- MP vraagt waar het AI-budget aan opgaat, in de eigen praktijk of bij een klant
- Een model-keuze staat ter discussie: welk tier past bij deze taak
- Een nieuwe tool-aanschaf of een abonnementsverlenging staat op de agenda
- Kosten per automation of workflow moeten in kaart gebracht worden
- Het kwartaal-kostenreview staat gepland
- Een kostenpost is onverwacht gestegen en moet verklaard worden
- MP wil een besparing onderbouwen richting een klant of voor zichzelf
- Twijfel tussen een abonnement en losse API-toegang voor een terugkerende taak
- Verspilling wordt vermoed: tools of seats die niemand meer gebruikt

## Werkwijze

1. Lees het kostenregister (`ai-kostenregister.md`, centraal of in `<klantmap>/ai-consultancy/`) en `MODEL-ROUTING.md` voordat je conclusies trekt.
2. Inventariseer de kostenpost: abonnement, API-verbruik of licentie, met eigenaar, categorie en laatst gemeten gebruik.
3. Toets aan de besparings-beslisboom: verspilling voor routing voor onderhandelen/consolideren voor functionaliteit inleveren.
4. Werk het advies uit met een concreet bedrag en een concrete actie, nooit alleen "let hierop".
5. Bevestig bij MP voordat een abonnement wordt opgezegd, een klant over kosten wordt geinformeerd, of een model-tier structureel verandert.
6. Log de bevinding en de actie in het kostenregister en, bij klantimpact, in de `history-log.md` van de klantmap.

**Verificatie-laag**:

- Acceptatiecriteria: elke kostenpost in het register heeft een eigenaar, type, kosten per maand en een laatste-check-datum; elk advies wijst een concrete stap in de besparings-beslisboom aan
- Bewijsvereiste: gebruiksdata uit de admin-console, het flow-register of de billing-dashboard, nooit een schatting zonder bron
- Escalatie: 2 opeenvolgende kwartalen zonder concrete besparing ondanks gesignaleerde verspilling gaat naar MP voor een consolidatie-besluit
- Stop-conditie: geen actuele gebruiksdata beschikbaar, dan eerst een export opvragen; geen advies baseren op een vermoeden

**Non-negotiables**: nooit zelf een abonnement opzeggen of downgraden; nooit rechtstreeks met een klant over kosten communiceren zonder dat MP het concept eerst heeft gezien; nooit prijzen of kortingspercentages noemen die niet recent geverifieerd zijn.

## Kern-kennis (2026)

### Het kostenregister: 1 bron voor alle AI-uitgaven

| Kolom | Invulling |
|---|---|
| Post | Naam tool, abonnement of API (bv. Claude, ChatGPT Team, n8n cloud) |
| Type | Abonnement (seat), API/tokens, of eenmalige licentie |
| Eigenaar | Wie beheert de post en wie merkt het bij uitval |
| Kosten/maand | Bedrag ex btw, plus btw-behandeling |
| Gebruik | Actieve gebruikers of runs, met meetdatum |
| Laatste check | Datum laatste review, plus volgende check-datum |

Werk-drempel: elke post boven 15 euro per maand krijgt een eigen regel; kleinere posten bundel je onder "overig klein", met het aantal tools erbij. Zonder eigenaar-kolom is een post per definitie een audit-bevinding, geen beheerde kostenpost.

### Model-routing-discipline: hergebruik van MODEL-ROUTING.md

Deze skill herhaalt de huisregels niet volledig, maar past ze toe op kosten-beslissingen. Prijsanker (juli 2026, MODEL-ROUTING.md): Haiku 1/5 dollar per 1M tokens, Sonnet 3/15, Opus 5/25, Fable 10/50 (input/output). Sonnet is default; escaleren gebeurt bewust, nooit uit gewoonte.

Beslisregels voor deze skill, direct uit MODEL-ROUTING.md:

1. Skill verbeteren gaat voor tier verhogen: een zwakke uitkomst op Sonnet is eerst een skill-probleem, pas na 2 gerichte iteraties een model-probleem.
2. Escaleer 1 tier omhoog na de 2e mislukte iteratie op het huidige model, niet eerder en niet later.
3. Fable is nooit voor interactief heen-en-weer-werk: output kost 50 dollar per 1M tokens, chat is output-zwaar.
4. NDA-gevoelige klantdata gaat naar Opus, nooit naar Fable, vanwege de data-retentie tot 30 dagen; dit is ook een AVG-overweging, niet alleen een kostenkeuze.

Signaal voor deze skill: draait een routinetaak structureel op Opus of Fable terwijl de stappen stabiel zijn, dan is dit een distillatie-kandidaat. Zie `skill-distillation` voor de uitvoering.

### Token-zuinigheid-technieken

- **Progressive disclosure in skills**: SKILL.md blijft de beslislaag (200-290 regels), diepe naslag gaat naar `references/` binnen de skill-map. Elke sessie die een dikke skill volledig laadt betaalt token-kosten voor content die zelden nodig is.
- **Context-hygiene**: laad alleen de relevante klantmap-bestanden (account-brief.md, laatste 10 history-log-entries), niet de volledige geschiedenis van een klant.
- **Batch-verwerking**: bulk-taken (enrichment, classificatie, kale data-pulls) naar Haiku-subagents in fan-out, in plaats van 1 duur model dat sequentieel doorloopt.
- **Caching als categorie**: platforms die prompt-caching of context-caching aanbieden verlagen de kosten van herhaalde system-prompts en lange klantcontext fors; check per platform de actuele voorwaarden, want cache-kortingen en cache-duur verschillen per aanbieder en wijzigen snel.

Werk-drempel: een skill die tegen de 290 regels aanloopt of vol staat met naslagtabellen is een kandidaat voor een `references/`-splitsing (zie ook `skill-library-audit`, dimensie 6: token-hygiene).

### Abonnement versus API: beslisregels

| Gebruikspatroon | Vorm | Reden |
|---|---|---|
| Vast, voorspelbaar, meerdere gebruikers | Abonnement (seat-based), bv ChatGPT Team, Microsoft 365 Copilot | Voorspelbare kosten, eenvoudig beheer en SSO |
| Piek of incidenteel, 1 gebruiker, wisselend volume | API pay-as-you-go | Geen onbenutte seats, kosten volgen het echte gebruik |
| Automation- of flow-gedreven, geen mens in de loop | API/tokens via een n8n- of Make-node | Geen seat nodig voor een machine-aanroep |
| Onzeker volume, pilotfase | Eerst API, na 2 tot 3 maanden stabiel gebruik pas omzetten | Voorkomt een abonnement kopen voor onbewezen gebruik |

Beslisregel: 2 opeenvolgende maanden waarin de API-kosten van een taak het abonnements-equivalent overschrijden is het signaal om over te stappen naar een abonnement, niet eerder. Andersom geldt hetzelfde: een seat die 2 kwartalen op rij nauwelijks gebruikt wordt gaat terug naar API of wordt opgezegd.

### Kosten-per-workflow meten

Elke automation krijgt een kosten-schatting per run: (tokens in x prijs per 1M) plus (tokens out x prijs per 1M) plus platform-fee per operatie (Zapier en Make rekenen per operatie, n8n self-hosted niet) plus onderhoudstijd omgerekend tegen het uurtarief.

| Workflow | Platform | Model | Kosten/run | Runs/maand | Kosten/maand | Bespaarde uren/maand | ROI |
|---|---|---|---|---|---|---|---|

Koppeling: `automation-audit` beoordeelt of een automation functioneel nog klopt (output, eigenaarschap, drift); deze skill levert alleen de kosten-laag die daarin meetelt. Werk-drempel: een workflow zonder kosten-per-run in het register mag niet naar het flow-register van `ai-marketing-automation` doorstromen.

### Escalatie-checklist: verdient deze kostenpost nu aandacht

| Signaal | Sterk (2 pt) | Zwak (0 pt) |
|---|---|---|
| Gebruiksfrequentie | Dagelijks of vaker | Minder dan 1x per maand |
| Alternatief beschikbaar | Goedkoper alternatief getest en gelijkwaardig bevonden | Geen vergelijkbaar alternatief onderzocht |
| Kostenstijging | Boven 20 procent ten opzichte van vorig kwartaal | Stabiel of dalend |
| Eigenaarschap | Geen eigenaar, of eigenaar weet niet meer waarom de tool er is | Actieve eigenaar met een heldere reden |
| Klant-zichtbaarheid | Kost raakt direct een klant-factuur of -advies | Interne kost zonder klant-impact |

Vuistregel: 6 of meer punten betekent deze week agenderen bij MP; 2 tot 5 punten gaat mee naar het eerstvolgende kwartaalreview; 0 tot 1 punt betekent geen actie, wel gewoon loggen.

### Besparings-beslisboom

```
Kostenpost te hoog?
├── Ja, verspilling (ongebruikte seat, dubbele tool, verkeerd tier voor de taak)
│   └── Stoppen of consolideren, geen functieverlies
├── Geen verspilling, maar het model-tier is te zwaar voor de taak
│   └── Skill verbeteren, dan pas tier verlagen (MODEL-ROUTING.md)
├── Routing al optimaal, de prijs zelf is het probleem
│   └── Onderhandelen (jaarcontract, volumekorting) of leveranciers consolideren
└── Alle stappen hierboven gedaan, kosten nog steeds te hoog
    └── Pas dan functionaliteit inleveren, laatste redmiddel, altijd met MP-akkoord
```

Volgorde is niet onderhandelbaar: functionaliteit inleveren raakt klant of kwaliteit, verspilling wegsnijden nooit. Sla nooit een stap over om sneller bij een besparingscijfer te komen.

### Kwartaal-kostenreview-format

```markdown
# AI-kostenreview [Qx jaar]

| Post | Type | Kosten/maand | Verschil vs vorig kwartaal | Actie |
|---|---|---|---|---|

- Totaal AI-kosten dit kwartaal: [bedrag] | Vorig kwartaal: [bedrag]
- Grootste stijger: [post] plus verklaring (meer gebruik, prijsverhoging, nieuwe tool)
- Besparings-kandidaten (uit de beslisboom): [lijst met verwachte besparing]
- Model-tier-check: draait er routinewerk nog op Opus of Fable dat een distillatie-kandidaat is
- Conclusie en 3 acties met eigenaar en datum
```

Werk-drempel: kosten-stijging van meer dan 20 procent ten opzichte van het vorig kwartaal zonder gekoppelde omzet- of uren-verklaring gaat altijd door de besparings-beslisboom, ongeacht het absolute bedrag.

### ROI-taal richting klanten

Kosten nooit los presenteren, altijd naast bespaarde uren of extra omzet:

- Formule: ROI per maand = (bespaarde uren x uurtarief) min AI-kosten van de workflow
- Voorbeeldzin: "Deze automation kost [MP: aanvullen bedrag] per maand en bespaart [MP: aanvullen uren] uur handmatig werk, tegen het geldende uurtarief is dat [bedrag] waarde per maand"
- Bij twijfel over de exacte besparing: label het als schatting, nooit als harde meting die niet onderbouwd is

## Anti-patterns

- Tier verhogen als eerste reflex in plaats van eerst de skill verbeteren
- Abonnementen aanhouden "voor de zekerheid" zonder gebruiksdata uit de admin-console
- Een kostencijfer rapporteren zonder ROI-taal: alleen het bedrag noemen, zonder bespaarde uren of omzet ernaast
- Zelf een abonnement opzeggen of een klant over kosten informeren zonder MP-bevestiging
- Verzonnen prijzen of kortingspercentages noemen zonder actuele verificatie
- Een automation bouwen zonder vooraf een kosten-per-run te schatten
- Interactief heen-en-weer-werk op Fable draaien: dat is de duurste manier om een gesprek te voeren
- Wildgroei laten bestaan omdat niemand het overzicht bijhoudt in het kostenregister
- Btw-behandeling van tool-facturen negeren in het register, terwijl verlegde btw en aftrekbaarheid het echte kostenplaatje bepalen

## Output-formaat

- **Kostenregister-update**: regel in `ai-kostenregister.md` per post, met de kolommen uit de inventarisatie-tabel
- **Workflow-kosten-tabel**: 1 regel per automation, met kosten per run en ROI
- **Kwartaalreview**: het format hierboven, inclusief 3 acties met eigenaar en datum
- **Besparingsadvies** (bij een specifieke vraag):

```markdown
# Kostenadvies [onderwerp] [datum]
## Bevinding (bedrag, periode, bron)
## Positie in de besparings-beslisboom
## Advies plus verwachte besparing per maand
## Vereist MP-akkoord: ja/nee, en waarvoor precies
```

## Dependencies

- `ai-kostenregister.md` (centraal of per klant in `<klantmap>/ai-consultancy/`)
- `MODEL-ROUTING.md` als huisregel-bron voor model-tier-beslissingen
- Admin-consoles en billing-dashboards van AI-platforms (OpenAI, Anthropic, Microsoft, Google Workspace, n8n/Make/Zapier)
- `freelance-admin-invoicing`-administratie voor btw-behandeling en het financiele kwartaalritme
- WebSearch voor actuele modelprijzen en platform-voorwaarden, verplicht voor elk extern advies

## Integratie met andere skills

- **ai-tool-stack-advisor**: kiest en evalueert welke tools een klant gebruikt; deze skill bewaakt daarna de lopende kosten van de eenmaal gekozen stack, geen doublure
- **ai-marketing-automation**: levert de flows en het flow-register waarvan deze skill de kosten-per-run meet
- **automation-audit** (parallel in aanbouw): beoordeelt of een automation functioneel nog klopt; deze skill levert alleen de kosten-laag in die audit
- **marketing-agent-builder**: agent-budget-caps en tool-call-kosten landen in hetzelfde kostenregister
- **skill-distillation**: kostbare routinewerk-op-duur-model signalen uit deze skill zijn distillatie-kandidaten
- **skill-library-audit**: token-hygiene (dimensie 6) en deze skill delen hetzelfde belang bij compacte skills
- **knowledge-capture**: generaliseerbare besparingen (bv. een terugkerend verspillingspatroon) landen hier als kennis
- **client-copilot-generator** en **copilot-ops**: elke copilot-sessie en -refresh heeft een model-tier-keuze die door deze skill wordt getoetst

## Tips

- Reken een besparing 1 keer volledig voor in euro's voordat je op een skill gaat itereren: dat bepaalt hoeveel iteratietijd de verbetering zelf mag kosten
- Zet een datum bij elke prijsvergelijking: modelprijzen en platformvoorwaarden wijzigen sneller dan dit document
- Vraag bij twijfel eerst een export van het eigen gebruik uit de admin-console op, voor je conclusies trekt uit een vermoeden
- Een duur model dat 1 keer per kwartaal draait is zelden het echte probleem, een goedkoop model dat continu op de verkeerde manier draait vaak wel
- Verifieer modelprijzen, kortingsregelingen en platform-features altijd bij de actuele bron voor je een beslissing baseert op cijfers uit dit document: dit domein verandert sneller dan de skill zelf
- Btw-verlegd op een EU-B2B-tool-factuur is geen besparing, het is een kasstroom-verschil; laat dat onderscheid niet vervagen in een besparingsclaim
- De grootste besparingen zitten meestal in verspilling, niet in onderhandelen: begin de beslisboom altijd bovenaan, ook als onderhandelen sneller voelt

*Eerste versie: juli 2026. Herzie bij wijziging van modelprijzen of MODEL-ROUTING.md, bij nieuwe platform-cachin
