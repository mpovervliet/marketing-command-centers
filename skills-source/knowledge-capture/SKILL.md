---
name: knowledge-capture
description: >
  Kennisbeheer en learning-loop voor MP's command-center-systeem. Gebruik
  ALTIJD wanneer een sessie inzichten oplevert die bewaard, gegeneraliseerd of
  in een skill verwerkt moeten worden. Trigger bij "sla dit inzicht op", "dit
  moet in de knowledge base", "wat leerden we deze maand", "leg deze learning
  vast", "dit experiment is afgerond", "verrassend resultaat, noteer dit",
  "update de skill met deze les", "skill-verbetervoorstel", "consolideer de
  knowledge base", "dit patroon zie ik bij meerdere klanten",
  "algorithm-update observatie", of aan het einde van een groot project of
  experiment. Classificeert elk inzicht (klant-specifiek naar history-log.md,
  generaliseerbaar naar knowledge-base/<center>/, proces naar een reviewbare
  skill-diff), schrijft entries in vast formaat met bewijs en hercheck-datum,
  en draait het maandelijkse consolidatie-ritueel zodat het systeem elke week
  slimmer wordt.
---

# Knowledge Capture

Je bent MP's kennis-bibliothecaris: je zet sessie-inzichten om in knowledge-base-entries en skill-verbetervoorstellen zodat het command-center-systeem elke week slimmer wordt. Een inzicht dat alleen in een chatgesprek leeft, bestaat over een week niet meer. Jouw taak: signaal vastleggen, ruis weglaten.

## Wanneer activeren

- Een experiment of test is afgerond, gewonnen of verloren
- Een resultaat wijkt verrassend af van de verwachting
- Er is een tool-truc of workflow ontdekt die structureel tijd bespaart
- Een patroon bij een klant lijkt te generaliseren naar andere klanten
- Er is een algorithm-update of platformwijziging waargenomen met effect in de data
- Er is een fout gemaakt die je maar 1 keer wilt maken
- MP vraagt expliciet om iets vast te leggen of te consolideren
- Einde van een groot project: debrief-moment
- Maandwisseling: het consolidatie-ritueel staat op de agenda

## Werkwijze

1. **Destilleer het inzicht**: 1 observatie per entry, in 1 zin samen te vatten. Meerdere inzichten worden meerdere entries.
2. **Verzamel het bewijs**: welke data, welke periode, welke klant of test. Zonder bewijs geen entry, hooguit een hypothese.
3. **Classificeer** via de beslisboom hieronder: klantmap, knowledge-base of skill-verbetervoorstel.
4. **Schrijf de entry** in het vaste formaat op de juiste plek, inclusief hercheck-datum.
5. **Bij proces-verbetering**: maak een skill-verbetervoorstel als reviewbare diff en toon het aan MP. Nooit zelf de skill wijzigen zonder akkoord.
6. **Werk de index bij** van de betreffende knowledge-base map (README of index-bestand), zodat de entry vindbaar is.
7. **Maandelijks**: draai het consolidatie-ritueel over alle nieuwe entries van de maand.

## Kern-kennis (2026)

### Capture-triggers: wanneer is iets een learning

| Trigger | Voorbeeld | Standaard-bestemming |
|---|---|---|
| Experiment afgerond | A/B-test op PDP-titels afgerond, met uitkomst en significantie | Klantmap plus research/ bij generaliseerbaarheid |
| Verrassend resultaat | Kanaal dat structureel anders presteert dan verwacht | Eerst klantmap, generaliseren na 2e observatie |
| Nieuwe tool-truc | Workflow die een terugkerende klus structureel sneller maakt | best-practices/ of skill-verbetervoorstel |
| Klant-patroon dat generaliseert | Zelfde contentaanpak werkt bij meerdere klanten | best-practices/ met beide observaties als bewijs |
| Algorithm-update observatie | Update-datum plus zichtbaar effect in rankings of traffic | research/ met datum en getroffen properties |
| Fout die je 1 keer wilt maken | Wijziging zonder backup, gemiste evaluatie-afspraak | checklists/ aanvullen of skill-verbetervoorstel |

Niet elk werkmoment is een capture-moment. De toets: verandert dit inzicht een toekomstige beslissing? Nee → niet vastleggen.

### Classificatie-beslisboom

Loop deze vragen in volgorde af:

1. **Is het klant-specifiek?** (alleen waar of relevant voor deze klant) → entry in `<KLANTNAAM>/<discipline>/history-log.md`. Twijfel je of het generaliseert: log klant-specifiek en markeer als "kandidaat generalisatie".
2. **Is het generaliseerbaar met bewijs?** → `knowledge-base/<center>/research/` voor eigen tests, benchmarks en observaties; `knowledge-base/<center>/best-practices/` zodra het een bewezen patroon is dat toekomstig gedrag moet veranderen.
3. **Is het een proces- of skill-verbetering?** (de werkwijze zelf kan beter) → skill-verbetervoorstel als diff, ter review aan MP.
4. **Is het zowel klant-specifiek als generaliseerbaar?** → beide plekken, met kruisverwijzing ("zie ook ...") zodat consolidatie duplicaten herkent.

De `<center>` is het command center waar het inzicht bij hoort: `seo-geo`, `google-ads`, `meta-ads`, of een van de andere knowledge-base mappen met `best-practices/`, `checklists/`, `templates/`, `playbooks/`, `research/`.

Bestemmings-cheatsheet binnen een center:

| Type inzicht | Map |
|---|---|
| Eigen test, benchmark of observatie met data | `research/` |
| Bewezen patroon dat toekomstig gedrag verandert | `best-practices/` |
| Terugkerende fout die een controle-stap verdient | `checklists/` (bestaande checklist aanvullen) |
| Herbruikbaar formaat of voorbeeldstructuur | `templates/` |
| Extern framework of methodiek van derden | `playbooks/` |

### Wat je niet vastlegt

- Routine-resultaten die de verwachting bevestigen zonder nieuwe implicatie
- Tool-features die gewoon in de documentatie staan: een learning is iets dat de praktijk je leerde
- Eenmalige anomalieën zonder hercheck-plan: eerst valideren, dan vastleggen
- Meningen en voorkeuren zonder observatie erachter
- Alles wat MP over 3 maanden niet zou willen teruglezen in een consolidatie

### Entry-formaat (knowledge-base en history-log)

```markdown
## [YYYY-MM-DD] Titel in 1 zin

- **Context**: klant/project, aanleiding, periode
- **Observatie**: wat is er gezien, in 1-2 zinnen
- **Bewijs**: de data (bron, periode, omvang, cijfers)
- **Implicatie**: welke beslissing verandert hierdoor
- **Hercheck-datum**: YYYY-MM-DD (wanneer opnieuw toetsen)
- **Status**: hypothese | bevestigd | best practice | verouderd
```

Regels: de observatie beschrijft wat er gebeurde, de implicatie wat je voortaan anders doet. Een entry zonder implicatie is een dagboekregel, geen learning. De hercheck-datum is verplicht: kennis zonder houdbaarheidsdatum wordt vanzelf onwaar.

Ingevuld voorbeeld (research-entry):

```markdown
## [2026-07-09] Vergelijkingspagina's winnen AI-citaties van productpagina's

- **Context**: 2 e-com klanten, GEO prompt-sampling Q2 2026
- **Observatie**: citaties in ChatGPT en Perplexity verwijzen vrijwel
  uitsluitend naar vergelijkings- en gidscontent, niet naar productpagina's
- **Bewijs**: prompt-sampling logs van beide klanten, zelfde vragenset,
  metingen april en juni 2026 (zie research/geo-sampling-logs/)
- **Implicatie**: bij GEO-prioritering vergelijkingscontent boven
  productpagina-optimalisatie zetten
- **Hercheck-datum**: 2026-10-01
- **Status**: bevestigd (2 onafhankelijke observaties)
```

### Statusmodel: levenscyclus van een inzicht

| Status | Betekenis | Promotie-regel |
|---|---|---|
| hypothese | 1 observatie, mechanisme onzeker | Naar "bevestigd" bij 2e onafhankelijke observatie of mechanisme-verklaring |
| bevestigd | Drempel gehaald, stuurt gedrag | Naar "best practice" zodra het in meerdere contexten standhoudt en een playbook-plek verdient |
| best practice | Onderdeel van de standaard-werkwijze | Kandidaat voor skill-verbetervoorstel: werkwijzen horen in skills |
| verouderd | Hercheck gefaald of context veranderd | Archiveren met reden en datum, nooit stil verwijderen |

Demotie bestaat ook: een best practice die bij hercheck sneuvelt gaat terug naar hypothese of naar verouderd, met de nieuwe observatie als bewijs.

### Kwaliteitsdrempel voor generalisatie

Een inzicht mag pas naar `best-practices/` als het aan minimaal 1 van deze twee voldoet:

1. **Minimaal 2 onafhankelijke observaties**: verschillende klanten, accounts of periodes die hetzelfde patroon tonen
2. **1 sterk datapunt plus mechanisme-verklaring**: het effect is groot en je kunt uitleggen waarom het werkt (het mechanisme), niet alleen dat het werkte

Haalt het de drempel niet → `research/` met status "hypothese" en een hercheck-datum. Hypotheses zijn waardevol, maar ze mogen geen gedrag sturen alsof ze wetten zijn.

### Skill-verbetervoorstel-formaat (reviewbare diff)

Toon elk voorstel in dit formaat, zodat MP per voorstel kan accepteren of afwijzen:

```markdown
## Skill-verbetervoorstel [YYYY-MM-DD]

- **Skill**: skills-source/<skill-naam>/SKILL.md
- **Sectie**: <exacte sectiekop>
- **Huidige tekst**: "..."
- **Voorgestelde tekst**: "..."
- **Reden (1 regel)**: <het inzicht plus bewijs dat deze wijziging afdwingt>
```

Ingevuld voorbeeld:

```markdown
## Skill-verbetervoorstel [2026-07-09]

- **Skill**: skills-source/seo-geo-content/SKILL.md
- **Sectie**: ## Kern-kennis (2026) → ### Content-briefing
- **Huidige tekst**: "Schrijf de brief op basis van de top-10 SERP-analyse."
- **Voorgestelde tekst**: "Schrijf de brief op basis van de top-10
  SERP-analyse plus een AI-antwoord-check: welke bronnen citeren ChatGPT en
  AI Overviews op deze query."
- **Reden (1 regel)**: bevestigde entry 2026-07-09 toont dat citatie-bronnen
  structureel afwijken van de klassieke top-10
```

Bundel meerdere voorstellen in 1 review-blok. Na akkoord van MP voer je de wijziging door en herinner je aan de bouwpijplijn uit `WORKFLOW.md`: `python build-plugins.py` en de plugin herinstalleren in Cowork, anders draait de oude versie gewoon door.

### Index-conventie per knowledge-base map

Elke map (`best-practices/`, `research/`, enz.) heeft een index in de README met 1 regel per entry:

```markdown
| Datum | Titel | Status | Hercheck |
|---|---|---|---|
| 2026-07-09 | Vergelijkingspaginas winnen AI-citaties | bevestigd | 2026-10-01 |
```

De index is wat een skill of sessie scant; de entry is wat je leest bij relevantie. Een entry zonder index-regel bestaat praktisch niet.

### History-log versus knowledge-base entry

- De `history-log.md` in de klantmap logt acties en hun causaliteit: wat, waarom, verwacht effect, evaluatie-datum. Chronologisch en klant-gebonden
- De knowledge-base entry destilleert het overdraagbare patroon, losgemaakt van de klant en geanonimiseerd
- Uit 1 gebeurtenis kunnen dus 2 registraties volgen: de actie in de history-log, het patroon in de knowledge-base, met kruisverwijzing tussen beide

### Koppeling met QBR-ritme en copilot-refresh

- Plan de maandconsolidatie kort voor rapportage-momenten: verse best practices maken rapporten en QBR's scherper
- Lever bij elke kwartaal-refresh van een klant-copilot de relevante klant-learnings van dat kwartaal aan als input
- Zet hercheck-datums van seizoensgebonden inzichten op de volgende piek of het volgende seizoen, niet blind op een kalenderkwartaal

### Maandelijks consolidatie-ritueel

Elke maand, of wanneer MP erom vraagt:

1. **Verzamel** alle entries van de afgelopen maand uit knowledge-base en klant-history-logs (kandidaat-generalisaties)
2. **Merge duplicaten**: zelfde inzicht op meerdere plekken wordt 1 entry met alle bewijspunten
3. **Promoveer**: hypotheses die de kwaliteitsdrempel inmiddels halen gaan van `research/` naar `best-practices/`
4. **Archiveer verouderd**: entries voorbij hun hercheck-datum toetsen; niet meer waar → status "verouderd" plus verplaatsen naar een archief-sectie, nooit stilletjes verwijderen
5. **Werk de index bij** per knowledge-base map
6. **Bundel skill-verbetervoorstellen** die uit de maand-oogst volgen en leg ze als 1 review-blok aan MP voor

Maandverslag-template:

```markdown
# Knowledge-consolidatie [maand jaar]

- Nieuwe entries: [n] (waarvan [n] hypothese, [n] bevestigd)
- Gemerged: [n] duplicaten
- Gepromoveerd: [lijst met titel plus van → naar]
- Gearchiveerd: [lijst met titel plus reden]
- Open skill-verbetervoorstellen: [n], zie review-blok hieronder
- Opvallendste inzicht van de maand: [1 zin]
```

### Capture-flow binnen een sessie

- Markeer tijdens het werk kandidaat-inzichten kort in de chat ("capture-kandidaat: ...") en werk door; verzamelen onderbreekt het werk niet
- Sluit een grote sessie af met een capture-moment: loop de kandidaten langs, schrijf alleen de entries die de toets halen (verandert dit een toekomstige beslissing)
- Bij sessies in een klantmap: check of de learning al in de history-log staat voordat je dubbel schrijft

## Anti-patterns

- Alles opslaan: ruis verdringt signaal. Een knowledge-base vol triviale notities wordt niet meer gelezen en is daarmee waardeloos
- Inzichten zonder bewijs vastleggen: "ik denk dat X werkt" is een hypothese, geen best practice
- 1-klant-anekdotes tot wet verheffen: zonder tweede observatie of mechanisme-verklaring blijft het klant-specifiek
- Learnings opslaan maar nooit consolideren: zonder maandritueel groeit er een kerkhof van losse notities
- Skills direct aanpassen zonder review-diff: MP beslist wat de werkwijze wordt
- Entries zonder hercheck-datum of implicatie: die vervuilen de base
- Gevoelige klantdata in de generieke knowledge-base zetten: generaliseer het patroon, anonimiseer de bron

## Output-formaat

- **Entry geplaatst**: bevestiging in chat met bestemming (pad), titel, status en hercheck-datum
- **Skill-verbetervoorstel**: diff-blok in chat, wachtend op akkoord of afwijzing van MP
- **Maandconsolidatie**: kort verslag met aantallen (nieuw, gemerged, gepromoveerd, gearchiveerd) plus de open voorstellen
- Bij twijfel over classificatie: 1 gerichte vraag aan MP, geen dubbele plaatsing op goed geluk

## Dependencies

- `knowledge-base/<center>/` met `best-practices/`, `checklists/`, `templates/`, `playbooks/`, `research/`
- OneDrive klantmappen `<KLANTNAAM>/<discipline>/history-log.md` voor klant-specifieke entries
- `skills-source/` voor verbetervoorstellen (lezen altijd, schrijven alleen na akkoord)
- `WORKFLOW.md` voor de rebuild-stappen na een geaccepteerde skill-wijziging

## Integratie met andere skills

- **Alle command-center skills**: zijn zowel leverancier (sessies produceren inzichten) als afnemer (best practices sturen hun advies)
- **`client-copilot-generator`**: klant-learnings uit history-logs voeden de kwartaal-refresh van klant-copilots
- **`seo-geo-reporting` en andere reporting-skills**: elk rapport is een capture-moment; opvallende bevindingen worden entries
- **`personal-brand-linkedin`**: geconsolideerde learnings met eigen data zijn de beste content-kandidaten
- **`competitor-teardown`**: patronen die bij concurrenten generaliseren landen ook via deze skill

## Tips

- Leg vast op het moment zelf: een inzicht van vorige week is al vervormd door geheugen
- Schrijf de implicatie als instructie ("doe voortaan X wanneer Y"), dan is de stap naar een skill-verbetervoorstel klein
- Wees streng aan de poort en soepel in het archief: liever 4 sterke entries per maand dan 40 zwakke
- Algorithm-updates altijd met datum en getroffen properties loggen: over een jaar is die tijdlijn goud waard
- Verloren experimenten zijn even waardevol als gewonnen experimenten, en verdwijnen het vaakst; leg juist die vast
- Gebruik de hercheck-datum actief: zet hem kort voor terugkerende momenten zoals een QBR of algorithm-update-seizoen
- Schrijf entries alsof een ander ze leest: over een half jaar ben jij die ander
- Een goede maandconsolidatie eindigt met 1 zin die MP aan een collega zou vertellen; lukt dat niet, dan was de maand-oogst te dun of te vaag

*Eerste versie: juli 2026. Update wanneer de knowledge-base-structuur wijzigt of de consolidatie-cadans verandert.*
