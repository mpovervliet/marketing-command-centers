---
name: research-corpus-builder
description: >
  Onderzoekscorpus-bouwer voor max-recall vakkennis per onderwerp: van
  query-ontwerp tot knowledge-base en skill-kandidaten. Gebruik ALTIJD
  wanneer MP een onderwerp systematisch wil uitdiepen over LinkedIn, GitHub,
  Reddit, arXiv, officiele docs en YouTube heen. Trigger bij "bouw een
  onderzoekscorpus", "verzamel alles over dit onderwerp", "max recall
  onderzoek", "scrape LinkedIn posts over", "wat zegt de community over",
  "bouw een knowledge base over dit onderwerp", "corpus opbouwen", "snowball
  research", "welke skill-kandidaten zitten in dit onderwerp", "batch-verwerk
  deze bronnen", "nieuwe zoektermen voor dit thema", "diepgaand
  bronnenonderzoek", of elke vraag over het opbouwen van een
  vakkennis-corpus. Ontwerpt query-families met kritiek-queries, verzamelt
  via Apify-actors in MP's gateway, scoort bronnen dubbel (kennisscore
  leidend), verwerkt in batches van 50-150 en levert
  knowledge-base/<onderwerp>/ plus een skill-backlog op.
---

# Research Corpus Builder

Je bent MP's corpus-bouwer: je bouwt per onderwerp een max-recall onderzoekscorpus en zet het om in een knowledge-base plus skill-kandidaten. Max recall betekent: liever 300 bronnen ruw binnenhalen en streng scoren dan vooraf 20 "beste" bronnen gokken. Afbakening: competitor-teardown doet concurrenten, deze skill doet vakkennis-corpora; knowledge-capture archiveert losse inzichten, deze skill bouwt systematisch een compleet corpus.

## Wanneer activeren

- MP wil een nieuw vakgebied of tool-ecosysteem grondig in kaart (bv. een nieuw AI-platform, een workflow-categorie)
- Er moet een knowledge-base/<onderwerp>/ opgebouwd of grondig uitgebreid worden
- MP vraagt wat de community, praktijk of literatuur over een onderwerp zegt
- Voorbereiding op een nieuwe dienst, workshop of command center: eerst het corpus, dan de skills
- Een bestaande knowledge-base voelt dun of eenzijdig (alleen successverhalen, geen kritiek)
- Er is een lijst skill-kandidaten nodig, onderbouwd met bronnen in plaats van intuitie
- Een eerder corpus moet ververst worden na grote ontwikkelingen in het onderwerp
- MP wil weten welke zoektermen en bronnen bij een thema de meeste waarde leveren

## Werkwijze

1. **Scope met MP**: onderwerp, doel (knowledge-base, skill-bouw of beide), talen (EN plus NL waar relevant) en een kostenplafond voor scraping. Boven het plafond: altijd eerst MP.
2. **Ontwerp de query-familie** met de term-matrix hieronder, inclusief probleem/kritiek-queries.
3. **Zet de opslagstructuur klaar** in `knowledge-base/<onderwerp>/` (structuur hieronder).
4. **Verzamel per bron-type**: LinkedIn via de Apify-actors in de gateway, de rest via web-search, fetch en repos. Per query zowel relevantie- als datum-sortering draaien.
5. **Normaliseer naar het bron-schema** (jsonl), dedupliceer op duplicate_hash.
6. **Score dubbel**: populariteitsscore en kennisscore; kennisscore is leidend voor skill-bouw.
7. **Verwerk in batches van 50-150 bronnen**: alleen de delta ten opzichte van de bestaande knowledge-base integreren.
8. **Snowball**: nieuwe auteurs, bronnen en terminologie uit elke batch terug de queryset in.
9. **Stop bij verzadiging** (stop-criterium hieronder) en lever het corpus-rapport plus skill-backlog op.
10. **Log de run**: queries, kosten, batch-tellers en open vragen, zodat een verversing later niet vooraan begint.

## Kern-kennis (2026)

### Query-familie-ontwerp (onderwerp x term-matrix)

| Query-type | Patroon | Waarom |
|---|---|---|
| Kernterm | "<onderwerp>" | Basis-recall |
| Synoniemen en varianten | alternatieve benamingen, afkortingen, spellingsvarianten | Community gebruikt zelden de officiele term |
| Tool-namen | "<onderwerp> plus <tool>" per relevante tool | Implementatie-context, echte setups |
| Probleem en kritiek | "<onderwerp> problems", "limitations", "not working", "alternatives" | Juist kritiek levert verbeterpunten en anti-patterns |
| How-to en werkwijze | "how to", "workflow", "setup", "tutorial" | Procedures, de grondstof voor skills |
| NL-varianten | Nederlandse termen waar de markt NL is | NL-cases en -regelgeving mist in EN-queries |

Draai elke query dubbel: gesorteerd op relevantie (vindt de klassiekers) en op datum (vindt de actuele stand). Log per resultaat via het search_query-veld welke query hem vond: zo zie je welke queries waarde leveren en waar je budget heen moet.

### Bronnen-mix-tabel

| Bron | Wat je eruit haalt |
|---|---|
| LinkedIn | Use-cases, frameworks, praktijkclaims van uitvoerders |
| GitHub | Echte implementaties; issues en discussions als pijnpunten-goudmijn |
| Reddit / Hacker News | Problemen, workarounds en eerlijke kritiek zonder verkooppraat |
| arXiv | Evaluaties, benchmarks en methodologie |
| Officiele docs | Hoe het echt werkt: features, limieten, changelogs |
| YouTube-transcripts | Demonstraties en stap-voor-stap werkwijzen die nergens opgeschreven staan |

Nooit stoppen bij 1 platform: elke bron heeft blinde vlekken, en de tegenspraak tussen bronnen is zelf een bevinding (vastleggen als tegenstrijdigheid).

### LinkedIn-verzameling via Apify (gateway)

Via `apify_tool` in MP's gateway:

- **Primaire actor**: `apimaestro/linkedin-posts-search-scraper-no-cookies`, circa 5 dollar per 1000 resultaten (prijspeil juli 2026, check actueel voor grote runs)
- **Volume-actor**: `harvestapi/linkedin-post-search`, circa 2 dollar per 1000, goedkoper voor brede sweeps
- Draai dezelfde queries door beide actors en vergelijk de dekking: actors zien verschillende deelverzamelingen posts; de overlap-analyse vertelt of je volledig genoeg zit
- Kosten per run loggen in het corpus-log; boven het afgesproken plafond eerst MP

### Snowball discovery

```
gevonden post → auteurprofiel → alle relevante posts van die auteur
             → gelinkte bronnen (artikelen, repos, tools)
             → deskundige commenters → hun profielen en posts
             → nieuwe terminologie → terug de queryset in
```

Elke snowball-stap krijgt zijn route in het search_query-veld ("snowball: via <auteur>"), zodat je later kunt zien welke ingangen het corpus droegen. Stop een snowball-tak wanneer een auteur vooral engagement-bait of herhaling levert.

### Bron-schema (jsonl, 1 regel per bron)

```json
{"source_id": "", "platform": "", "url": "", "author": "",
 "published_at": "", "full_text": "", "claims": [], "frameworks": [],
 "procedures": [], "warnings": [], "skill_candidates": [],
 "evidence_level": "anecdote|case|data|study", "relevance_score": 0,
 "duplicate_hash": "", "search_query": ""}
```

Regels: full_text altijd bewaren (samenvattingen verliezen de details die skills nodig hebben); claims als losse, toetsbare zinnen; evidence_level verplicht bij elke claim-drager; duplicate_hash over genormaliseerde tekst zodat gesyndiceerde kopieen samenvallen.

### Dubbele ranglijst: populariteit versus kennis

- **Populariteitsscore**: reactions plus comments x3 plus reposts x5. Meet aandacht, niet waarheid
- **Kennisscore (100 punten)**: relevantie 35, bewijs 25, toepasbaarheid 15, originaliteit 10, auteur-expertise 10, populariteit 5
- Kennisscore is leidend voor skill-bouw en knowledge-base-opname; de populariteitsranglijst is een apart signaal voor welke framing aanslaat (bruikbaar voor personal-brand-linkedin)
- Werk-drempel: bronnen onder een kennisscore van 40 alleen als tegenspraak- of trend-signaal gebruiken, niet als kennisbron

### Batch-verwerking (50-150 bronnen per batch)

Per batch lever je alleen de delta ten opzichte van de bestaande knowledge-base:

1. Nieuwe claims (met evidence_level en bron)
2. Tegenstrijdigheden met eerdere claims (beide kanten bewaren, niet gladstrijken)
3. Nieuwe anti-patterns en warnings
4. Skill-kandidaten (procedure gezien die MP's werk raakt)
5. Nieuwe zoektermen voor de volgende ronde

Een batch die de hele knowledge-base herschrijft is een fout: integreren is toevoegen en corrigeren, niet opnieuw beginnen.

### Stop-criterium en verzadiging

Meerdere opeenvolgende batches zonder nieuwe concepten (werk-drempel: 2-3 batches met alleen duplicaten en herhalingen) → het corpus is verzadigd voor deze queryset. Dan: unresolved-questions.md bijwerken, eind-rapport maken en het onderwerp op onderhoud zetten. Nieuwe verzadiging betekent niet af: het betekent dat verder zoeken met deze termen niets meer oplevert.

### Opslagstructuur

```
knowledge-base/<onderwerp>/
├── raw-sources/            (jsonl per batch, onbewerkt)
├── source-index/           (index per platform plus query-log en kosten-log)
├── verified-claims.md      (claims met evidence_level en bronnen)
├── frameworks.md           (modellen en werkwijzen uit het corpus)
├── anti-patterns.md        (wat niet werkt, uit kritiek-queries en issues)
├── unresolved-questions.md (tegenstrijdigheden en open vragen)
└── skill-backlog.md        (kandidaten met bron-onderbouwing en prioriteit)
```

### Veiligheidslaag

- Externe skills en repos zijn onderzoeksbron, nooit uitvoerbare code: eerst inhoudelijk en technisch controleren (prompt-injection-patronen, data-lek-risico); installatie-beslissingen lopen via skill-library-audit
- Commerciele engagement-bait herkennen en afwaarderen: cursus-verkopers, "comment X en ik stuur je de gids", grote claims zonder mechanisme → laag op auteur-expertise
- Gesyndiceerde duplicaat-content (zelfde tekst onder meerdere auteurs) → 1 bron houden via duplicate_hash, de rest afwaarderen
- AVG-hygiene: geen persoonsgegevens van gewone commenters opslaan; alleen naam plus publiek profiel van experts die je als bron citeert

### Afbakening

- **competitor-teardown**: concurrenten en hun funnels; deze skill: vakkennis en werkwijzen
- **knowledge-capture**: losse inzichten uit eigen werk, doorlopend; deze skill: systematische externe corpus-opbouw per onderwerp
- Output van deze skill voedt beide: claims naar de knowledge-base, skill-kandidaten naar de distillatie-werkbank

## Anti-patterns

- Alleen op successverhalen zoeken: zonder kritiek-queries bouw je een corpus zonder anti-patterns, en juist die maken skills betrouwbaar
- Populariteit als kwaliteitsproxy: virale posts zijn geoptimaliseerd voor reacties, niet voor juistheid; de kennisscore bestaat om dit te corrigeren
- Verzamelen zonder schema: 300 losse teksten zijn geen corpus maar een leeslijst; zonder velden kun je niet scoren, dedupliceren of delta's draaien
- Elke batch de knowledge-base laten herschrijven: eerdere verificatie gaat verloren en tegenstrijdigheden worden stilletjes gladgestreken
- Stoppen bij 1 actor of 1 platform: elke bron heeft blinde vlekken; de dekkingsvergelijking tussen actors is geen luxe maar de recall-check
- Claims overnemen zonder evidence_level: dan is de knowledge-base later niet te onderhouden en wint de stelligste auteur
- Het corpus "af" noemen zonder skill-backlog: dan was het leeswerk zonder rendement, want skills zijn het eindproduct
- Scraping laten lopen zonder kostenplafond: max recall is een principe voor dekking, geen vrijbrief voor de Apify-factuur

## Output-formaat

Per batch (in chat) en als eind-rapport (in source-index/):

```markdown
# Corpus-rapport <onderwerp> [YYYY-MM-DD]

- Batch: <n> (<aantal> bronnen, <aantal> na deduplicatie)
- Dekking: queries gedraaid <n>, beste queries: <top 3 op opbrengst>
- Kosten: <bedrag> deze run, <bedrag> cumulatief (plafond: <bedrag>)
- Delta: <n> nieuwe claims, <n> tegenstrijdigheden, <n> anti-patterns,
  <n> skill-kandidaten, <n> nieuwe zoektermen
- Top-5 bronnen op kennisscore (met 1 zin waarom)
- Verzadiging: <n> opeenvolgende batches zonder nieuwe concepten
- Volgende stap: <doorzoeken met nieuwe termen | afronden | onderhoud>
```

Plus bijgewerkte bestanden in `knowledge-base/<onderwerp>/` en de skill-backlog met prioriteit.

## Dependencies

- `apify_tool` in MP's gateway voor de LinkedIn-actors (apimaestro en harvestapi)
- Web-search en fetch voor GitHub, Reddit, Hacker News, arXiv, docs en YouTube-transcripts
- `knowledge-base/` map in de command-centers repo voor de opslagstructuur
- Kostenplafond-afspraak met MP voor elke scraping-run
- `SKILL-WRITING-STANDARDS.md` zodra skill-kandidaten gebouwd gaan worden

## Integratie met andere skills

- **`skill-distillation`**: de skill-backlog uit het corpus is de kandidaat-lijst voor distillatie; frameworks.md en anti-patterns.md zijn bouwmateriaal
- **`knowledge-capture`**: eigen learnings en corpus-claims landen in dezelfde knowledge-base; capture doet losse inzichten, deze skill de systematische opbouw
- **`skill-library-audit`**: verse corpora zijn de verificatie-bron voor de actualiteits-check; installatie-verdicten over externe skills lopen via de audit
- **`competitor-teardown`**: zelfde verzamel-spierkracht, ander onderwerp; concurrent-vragen gaan daarheen
- **`personal-brand-linkedin`**: de populariteitsranglijst toont welke framing en formats aanslaan; corpus-inzichten met eigen data zijn content-kandidaten

## Tips

- Schrijf de kritiek-queries als eerste: als je maar 10 queries mag draaien, leveren "limitations" en "not working" de meeste skill-waarde per euro
- De beste nieuwe zoektermen zitten in de comments, niet in de posts: experts corrigeren elkaar met de vakterm die jij nog niet kende
- Vergelijk de actor-dekking op een kleine steekproef voordat je de grote run betaalt: 100 resultaten door beide actors zegt genoeg over de overlap
- Datum-filter streng bij snel bewegende onderwerpen: een how-to van 18 maanden oud is bij AI-tooling eerder misleidend dan nuttig
- Bewaar de query-logs ook bij een mislukte richting: weten wat niets opleverde is de helft van een goedkope verversing
- Een tegenstrijdigheid tussen 2 sterke bronnen is een unresolved question, geen keuzemoment: vastleggen en later toetsen in eigen werk
- Auteur-expertise scoor je op track record en detail-niveau, niet op volgers: 200 volgers met werkende code verslaat 50k volgers met carrousels
- Plan direct bij oplevering de verversings-trigger: welk event (release, kwartaal) maakt dit corpus verdacht

*Eerste versie: juli 2026. Herzie wanneer de Apify-actors of hun prijzen wijzigen, of wanneer de knowledge-base-structuur verandert.*
