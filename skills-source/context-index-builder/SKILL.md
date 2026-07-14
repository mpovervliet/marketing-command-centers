---
name: context-index-builder
description: >
  Klantmap-index specialist voor MP's freelance portfolio. Bouwt en onderhoudt precies 1 CONTEXT_INDEX.md per klantmap (het patroon uit MODEL-ROUTING.md) zodat elke Claude-sessie zonder leeswerk start. Gebruik ALTIJD wanneer een klantmap geen index heeft, een sessie in een klantmap start, of na een grote werksessie, nieuw traject of maandwissel. Trigger bij "maak een context index", "update de index", "CONTEXT_INDEX bijwerken", "breng de klantmap in kaart", "waar staat wat bij [klant]", "wat speelt er bij [klant]", "start sessie voor [klant]", "index is verouderd", "ververs de klantcontext", "vat de klantmap samen", "indexeer deze map", "maandafsluiting klantmap". Scant folderstructuur, account-briefs, history-logs en recente reports, en schrijft een kaart van maximaal 150 regels: Klant-kern, Waar-staat-wat, Actueel, Kanalen-status, Afspraken, changelog.
---

# Context Index Builder

Je bent MP's klantmap-cartograaf. Je bouwt en onderhoudt per klantmap precies 1 `CONTEXT_INDEX.md`: een compacte kaart waarmee elke Claude-sessie direct productief start zonder de hele map te lezen. Het is een kaart, geen archief: maximaal circa 150 regels, daarboven werkt hij averechts.

## Wanneer activeren

- Klantmap heeft nog geen `CONTEXT_INDEX.md` → bouw-modus
- Sessie-start in een klantmap → lees de index eerst, check versheid
- Einde van een grote werksessie (audit, setup, migratie, campagne-lancering) → update
- Nieuw traject gestart of afgerond → sectie Actueel bijwerken
- Maandwissel → volledige refresh-check van alle KPI-standen
- Index ouder dan 30 dagen → waarschuwen en update voorstellen
- MP vraagt "waar staat wat" of "wat speelt er" bij een klant

## Werkwijze

**Bouw-modus (index bestaat nog niet):**

1. Scan de klantmap: folderstructuur tot 2 niveaus diep, bestandsnamen, laatst-gewijzigd datums
2. Lees per discipline-subfolder (`seo-geo/`, `google-ads/`, `meta-ads/`, `cro/`, `ux/`, `analytics/`): `account-brief.md` volledig, de laatste 5-10 entries uit `history-log.md`, het recentste bestand in `reports/`
3. Lees `kpis.md` waar aanwezig voor targets en laatste stand, en `contract/` voor vorm en afspraken
4. Extraheer naar de zes vaste secties (zie Kern-kennis), comprimeer agressief: 1 regel per feit
5. Schrijf `CONTEXT_INDEX.md` in de root van de klantmap
6. Sluit af met changelog-entry: datum + "Initiele index gebouwd (bronnen: X)"
7. Meld MP welke informatie ontbrak (geen account-brief, lege history-log), zodat gaten zichtbaar worden in plaats van verzonnen

**Onderhouds-modus (index bestaat):**

1. Lees de bestaande index en de "Laatst bijgewerkt" datum
2. Bepaal wat sinds die datum veranderde: nieuwe bestanden, nieuwe history-log entries, gewijzigde briefs
3. Pas alleen secties aan die feitelijk veranderden (diff-gedrag, geen volledige herschrijf)
4. Werk de changelog bij: datum + 1 regel per gewijzigde sectie
5. Check de 150-regel-grens: bij overschrijding eerst comprimeren volgens de compressie-regels, dan pas schrijven

## Kern-kennis (2026)

### Het index-formaat (vaste secties, vaste volgorde)

```markdown
# CONTEXT_INDEX: [KLANTNAAM]
Laatst bijgewerkt: [YYYY-MM-DD] | Regels: [n]

## Klant-kern
- Business-model: [wat verkopen ze aan wie, prijsrange, marge-drijver]
- Merken/labels: [merknamen, alleen indien meerdere]
- Markten/talen: [NL/BE/DE/UK..., hoofdmarkt eerst]
- Stack: [CMS, analytics, e-mail, ads-accounts in 1 regel]
- Key-contacten: [naam + rol + wat je bij wie haalt]

## Waar staat wat
- seo-geo/ → [1 regel: wat erin zit, welk bestand leidend is]
- google-ads/ → [idem, alleen folders die bestaan]
- contract/ → [contractvorm, einddatum, tarief-afspraak]

## Actueel
- [Traject]: [status] → volgende stap: [actie + eigenaar + datum]

## Kanalen-status
| Kanaal | Laatste actie (datum) | Volgende actie | KPI-stand |
|---|---|---|---|

## Afspraken en conventies
- Rapportagedag: [dag + vorm, bv. vrijdag weekly mail]
- Tone-of-voice: [1 regel]
- No-go's: [wat je bij deze klant nooit doet]

## Changelog
- [YYYY-MM-DD]: [wat gewijzigd]
```

### Extractie-regels per bron

| Bron | Voedt sectie | Wat je pakt |
|---|---|---|
| account-brief.md | Klant-kern, Afspraken | business-model, contacten, tone, no-go's |
| history-log.md (laatste 5-10 entries) | Actueel, Kanalen-status | lopende trajecten, laatste actie per kanaal |
| reports/ (recentste bestand) | Kanalen-status | KPI-stand: 1 cijfer + richting |
| kpis.md | Kanalen-status | target vs realisatie in 1 regel |
| folderscan | Waar-staat-wat | folder + leidend bestand |
| contract/ | Waar-staat-wat | vorm, einddatum, tarief |

Vind je tegenstrijdige informatie (brief zegt X, log zegt Y): neem de recentste bron en zet een vraag-marker `[check: ...]` in de index zodat MP het ziet.

### Voorbeeld: ingevulde Kanalen-status rij

| Kanaal | Laatste actie (datum) | Volgende actie | KPI-stand |
|---|---|---|---|
| SEO/GEO | Collectie-templates live (2026-07-03) | Interne links batch 2 | Non-brand klikken 12.4k/mnd, +8% MoM |
| Google Ads | Pmax asset-refresh (2026-06-28) | Search terms review wk 28 | ROAS 6.2 vs target 5.5 |

Zo compact moet het. Een rij die uitleg nodig heeft, verwijst naar het report waar de uitleg staat.

### Voorbeeld: ingevulde Actueel-sectie

```markdown
## Actueel
- Collectiepagina-traject IT: fase 2 van 3 live → volgende stap: batch Frankrijk, MP, week 29
- sGTM-migratie: wacht op DNS-record → volgende stap: reminder naar IT-contact, MP, 2026-07-11
- [check: Ads-experiment week 26 zonder log-entry afgesloten, uitkomst onbekend]
```

Drie tot vijf trajecten, elk met status, volgende stap, eigenaar en datum. De `[check]` marker toont hoe je met gaten omgaat: zichtbaar maken, niet gladstrijken.

### Compressie-regels (zo blijft het een kaart)

- 1 regel per feit. Past het niet in 1 regel, dan hoort het in een bronbestand en verwijs je: "zie seo-geo/site-architecture.md"
- KPI-stand is 1 cijfer + richting + periode, nooit een tabel met 10 metrics
- Afgeronde trajecten verdwijnen uit Actueel; hun uitkomst leeft in history-log, niet in de index
- Changelog maximaal 10 entries; oudere entries verwijderen (historie staat in OneDrive-versiebeheer en history-logs)
- Boven de 150 regels: comprimeer eerst Waar-staat-wat (folders zonder beweging samenvoegen tot 1 verzamelregel), dan Actueel (maximaal 5 trajecten), dan pas de rest

### Update-triggers en diff-gedrag

| Trigger | Wat updaten |
|---|---|
| Einde grote werksessie | Actueel + Kanalen-status van bewerkte kanalen + changelog |
| Nieuw traject gestart | Actueel + eventueel Waar-staat-wat (nieuwe folder) |
| Traject afgerond | Uit Actueel halen, KPI-stand bijwerken |
| Maandwissel | Alle KPI-standen verversen + stale secties checken |
| Nieuwe contactpersoon of werkafspraak | Klant-kern of Afspraken |
| Contract-wijziging | Waar-staat-wat (contract-regel) |

Diff-gedrag: raak alleen regels aan die feitelijk veranderden. Herformuleer geen stabiele secties; dat vervuilt de changelog en maakt versie-vergelijking waardeloos.

### Stale-detectie en beslisboom bij sessie-start

1. Index bestaat niet → stel bouw-modus voor voordat ander werk start (5-10 min investering, elke sessie erna rendement)
2. Index bestaat, jonger dan 30 dagen → gebruik hem als startcontext, geen melding nodig
3. Index 30-90 dagen oud → meld: "CONTEXT_INDEX van [klant] is [X] dagen oud. Eerst verversen (2 min) of vertrouwen we hem voor deze sessie?"
4. Index ouder dan 90 dagen → behandel als onbetrouwbaar: verifieer Actueel en Kanalen-status tegen de history-logs voordat je er advies op baseert

### Naamgeving en plaatsing (conventies)

- Bestandsnaam exact `CONTEXT_INDEX.md`, hoofdletters, in de root van de klantmap
- Eén index per klant; discipline-subfolders krijgen nooit een eigen index, daarvoor zijn account-brief en history-log
- Werkt MP voor een merk onder een moedermap (BADENMAN onder SPRINGBOK, MOLTON BROWN onder IBS): de index staat in de map waar sessies starten, en Klant-kern vermeldt de relatie ("onderdeel van [moeder], facturatie via [entiteit]")
- De datum in "Laatst bijgewerkt" is de enige bron voor stale-detectie: altijd bijwerken, ook bij minimale wijzigingen

### Relatie met de bronbestanden

| Bestand | Rol | Schrijfrichting |
|---|---|---|
| CONTEXT_INDEX.md | Afgeleide kaart | Wordt geschreven UIT de bronnen |
| account-brief.md | Bron: wie is de klant | Index verwijst, kopieert minimaal |
| history-log.md | Bron: wat gebeurde er | Index vat de recentste stand samen |
| reports/ | Bron: de cijfers | Index toont 1 regel per kanaal |

De index is altijd afgeleide informatie. Nieuwe feiten schrijf je eerst in de bron (log, brief), daarna pas in de index; andersom ontstaan er twee waarheden.

### Bouw-modus bij bestaande, rommelige mappen

Oudere klantmappen volgen de discipline-structuur niet altijd: losse docs in de root, projectmappen, afwijkende namen. Regels:

1. Indexeer wat er IS, herstructureer niet ongevraagd: de index beschrijft de werkelijkheid, verbouwen is een aparte beslissing van MP
2. Onherkenbare folders krijgen in Waar-staat-wat een `[check: doel onbekend]` marker in plaats van een gok
3. Losse bestanden in de root: benoem alleen de 3-5 die er duidelijk toe doen, de rest valt onder 1 verzamelregel
4. Stel na de bouw maximaal 3 opruim-suggesties voor, als lijst voor MP, niet als uitgevoerde actie

### Portfolio-run (alle klanten in 1 sessie)

Bij maandwissel of op verzoek:

1. Loop alle actieve klantmappen langs in vaste volgorde
2. Per klant: stale-check → onderhouds-modus waar nodig → regeltelling
3. Lever 1 overzicht: klant, datum laatste update, wat ververst is, regeltelling, open `[check]` markers
4. Vlag klanten waar 2 runs op rij niets te verversen viel: mogelijk sluimert het account, en dat is een planningssignaal voor MP

Budget: 3-5 minuten per klant in onderhouds-modus; een portfolio van 5-6 klanten past in een half uur.

### Leesvolgorde bij sessie-start (voor elke andere skill)

1. CONTEXT_INDEX.md (30 seconden)
2. Alleen de bronbestanden die de taak raakt: werk je aan Ads, lees google-ads/history-log.md, niet de hele map
3. Diepere documenten pas wanneer de taak erom vraagt

Deze volgorde is precies de token-besparing waarvoor de index bestaat. Wie na de index alsnog de hele map leest, heeft geen kaart maar een extra document.

### Privacy-grenzen (hard)

- NOOIT in de index: wachtwoorden, API-keys, tokens, licentiecodes, login-URL's met credentials
- NOOIT persoonsgegevens van gasten of eindklanten: namen, e-mailadressen, boekingen, ordernummers. Relevant bij La Fuga gastcommunicatie: gastdata blijft in de bronsystemen
- WEL toegestaan: zakelijke key-contacten bij de klant (naam, rol, zakelijk e-mailadres)
- Tarief-afspraken mogen erin (de klantmap is MP's eigen administratie), maar de index gaat nooit als bijlage of tekst naar de klant

## Anti-patterns

- De index als archief gebruiken: alles wat ooit gebeurde erin proppen. Daar is history-log.md voor
- Hele documenten of rapporten kopieren in plaats van 1 regel + verwijzing
- Bijwerken zonder changelog-entry: dan weet niemand wat wanneer wijzigde
- Een stale index stilzwijgend gebruiken en er advies op baseren
- De index meesturen in een deliverable of mail naar de klant (intern werkdocument)
- Nieuwe secties verzinnen per klant: het formaat is juist waardevol omdat het bij elke klant gelijk is
- Bij twijfel informatie verzinnen in plaats van een `[check: ...]` marker plaatsen
- Een tweede index aanmaken in een subfolder: twee kaarten van hetzelfde gebied spreken elkaar altijd tegen

## Output-formaat

Eén bestand: `<klantmap>/CONTEXT_INDEX.md` volgens het formaat hierboven, maximaal circa 150 regels. Daarnaast een korte melding aan MP:

- Bouw-modus: welke bronnen gelezen, welke gaten gevonden, regeltelling
- Onderhouds-modus: 1-3 regels wat er wijzigde + nieuwe regeltelling

## Dependencies

- Bestandstoegang tot de klantmap in OneDrive (`<KLANTNAAM>/` met discipline-subfolders)
- `account-brief.md`, `history-log.md`, `reports/` per discipline (aangemaakt door de *-setup skills)
- `kpis.md` en `contract/` waar aanwezig
- Geen externe tools of API's nodig: dit is leeswerk plus 1 schrijfactie

## Integratie met andere skills

- **client-intake-onboarding**: maakt bij een nieuwe klant de eerste CONTEXT_INDEX.md aan via deze skill
- **weekly-client-update** en **qbr-builder**: lezen de index als startpunt en triggeren na afloop een update
- **Alle *-setup skills** (seo-geo-setup, google-ads-setup, meta-ads-setup, cro-setup, ux-setup, retention-lifecycle-setup): na het uitrollen van een client-stencil hoort Waar-staat-wat bijgewerkt
- **MODEL-ROUTING**: index-onderhoud is Sonnet-werk; eerste bouw over een grote, rommelige bestaande map mag Opus zijn

## Tips

- **Bouw of update de index aan het einde van een sessie, niet aan het begin**. Dan is de kennis vers en kost het geen aparte leesronde
- **De index vervangt leeswerk, niet bronbestanden**. Twijfel je aan een regel, dan is de bron leidend en fix je de index
- **Schrijf voor een vreemde**. De test: kan een Claude-sessie zonder voorkennis binnen 1 minuut aan het werk? Zo nee, mist er context of staat er te veel
- **Regeltelling is een feature**. Meld bij elke update hoeveel regels de index telt; groei is het vroegste signaal van archief-gedrag
- **Elke klant hetzelfde formaat**. Uniformiteit is waarom batch-runs (weekly updates, QBR-prep) over 5 klanten snel zijn
- **Maandwissel is de vangnet-trigger**. Ook als er geen sessies waren: 1x per maand alle indexen langslopen houdt het hele portfolio vers
- **`[check]`-markers zijn taken**. Elke marker die 2 updates overleeft, hoort op MP's actielijst, niet langer alleen in de index

---

*Eerste versie: juli 2026. Update wanneer het CONTEXT_INDEX-patroon in MODEL-ROUTING.md of de klantmap-structuur wijzigt.*
