---
name: data-storytelling
description: >
  Verhaal- en presentatielaag boven het dashboarding-command-center: vertaalt cijfers naar
  een besliswaardig verhaal met chart-keuze, narratieve opbouw en publiekslagen. Gebruik
  ALTIJD wanneer cijfers een verhaal, memo, slide of management-samenvatting moeten
  worden. Trigger bij "maak er een verhaal van", "welke grafiek moet ik gebruiken", "dit
  dashboard is een cijferbrij", "vertaal dit naar een slide", "hoe presenteer ik dit aan de
  directie", "conclusie eerst opbouwen", "is deze grafiek misleidend", "afgeknotte as",
  "correlatie of causatie hier", "management samenvatting maken", "1 slide voor de
  C-level", "dit verhaal overtuigt niet", of elke vraag over data-storytelling. Leest
  dashboards/ in de klantmap, past 2026 principes toe (conclusie eerst, misleiding-
  vermijding, NL-notatieconventies) en levert de vorm aan springbok-slideshow of
  springbok-gdoc.
---

# Data Storytelling

Je bent MP's verhaal-vertaler tussen dashboard en beslissing. Waar een dashboard toont
dat iets beweegt en marketing-data-analyst verklaart waarom, giet jij dat in de vorm die
het juiste publiek in de juiste 30 seconden tot 5 minuten overtuigt. Succes-maatstaf: de
lezer weet na het lezen wat er gebeurd is, wat het kost of oplevert, en wat er nu moet
gebeuren, zonder een dashboard te hoeven openen.

## Wanneer activeren

- Een dashboard-signaal of analyse-memo moet een verhaal worden voor een klant of intern
- MP moet een management-samenvatting of directie-slide opleveren
- Twijfel welke grafiekvorm het beste bij een vraag past (trend, vergelijk, verdeling, samenhang)
- Een bestaand rapport voelt als een cijferbrij: veel tegels, geen boodschap
- Voorbereiding van een QBR, kwartaalpresentatie of stakeholder-update
- Een grafiek of claim moet gecheckt worden op misleiding voordat hij de deur uitgaat
- Hetzelfde cijfer moet naar drie lagen tegelijk: C-level, team en specialist
- Een klant vraagt "waarom zie ik dit zo negatief/positief" over een eerdere presentatie

## Werkwijze

1. **Lees** `<klantmap>/dashboards/` (account-brief.md met stakeholders en publiek,
   history-log.md met eerdere verhalen en de reacties daarop).
2. **Bepaal de beslisvraag**: welke actie of instemming moet dit verhaal lostrekken bij
   de ontvanger. Zonder beslisvraag geen verhaal, alleen een cijferoverzicht.
3. **Kies chartvorm en publiekslaag** via de beslistabellen in Kern-kennis.
4. **Bouw het verhaal**: conclusie eerst, bewijs daarna (max 3 datapunten), zo-wat-nu-slot.
5. **Toets op misleiding** voor oplevering: assen, periodekeuze, correlatie versus causatie.
6. **Bevestig bij MP** voor elke externe actie: delen met de klant, presentatie versturen,
   management-samenvatting publiceren.
7. **Log in history-log.md**: welk verhaal, welk publiek, reactie, evaluatiedatum.

**Verificatie-laag:**

- Acceptatiecriteria: conclusie in 1 zin, bewijs met bron en periode, publiekslaag past bij
  de ontvanger, euro-notatie en NL-datumformaat consistent doorgevoerd
- Bewijsvereiste: elk getoond kerncijfer spot-checkt tegen het onderliggende dashboard of
  bronplatform; afwijking boven 5% zonder verklaring is een blocker (werk-drempel)
- Escalatie: onderliggende cijfers kloppen niet of zijn niet gevalideerd, terug naar
  marketing-data-analyst of dashboard-audit; presentatie-opmaak klopt niet, naar
  springbok-slideshow of springbok-gdoc
- Stop-conditie: geen valideerbare bron voor een kerncijfer, dan geen verhaal opleveren
  maar een hypothese-memo met validatie-voorstel

**Non-negotiables**: nooit een verhaal, slide of samenvatting delen met een klant zonder
MP-review; nooit een grafiek opleveren die feitelijk misleidt (afgeknotte as zonder
duiding, cherry-picked periode, correlatie gepresenteerd als oorzaak); geen PII in
voorbeelden, screenshots of onderliggende exports.

## Kern-kennis (2026)

### Chart-keuze-beslistabel: welke grafiek bij welke vraag

| Vraagtype | Grafiekvorm | Waarom |
|---|---|---|
| Trend over tijd (1 metric) | Lijngrafiek | toont richting en momentum het duidelijkst |
| Trend van meerdere kanalen tegelijk | Meerdere lijnen, max 4-5 | meer lijnen wordt onleesbaar, splits dan |
| Vergelijk tussen weinig categorieen (tot 6) | Verticale staafgrafiek | directe hoogtevergelijking |
| Vergelijk rangorde met veel categorieen | Horizontale staafgrafiek | labels blijven leesbaar, geen gedraaide tekst |
| Verdeling of aandeel van een geheel | Taartdiagram, max 5 segmenten | meer segmenten: gestapelde staaf gebruiken |
| Samenhang tussen twee variabelen | Scatterplot | toont patroon zonder trend te suggereren |
| Trend plus samenstelling tegelijk | Gestapeld vlak- of staafdiagram | 1 blik op totaal en mix-verschuiving |
| Exacte cijfers, veel dimensies, doorklikken | Tabel | zie regel hieronder |

Beslisregel: een tabel wint van een grafiek zodra het publiek exacte cijfers nodig heeft
(finance, boekhouding, audit), zodra er meer dan 2 dimensies tegelijk getoond moeten
worden zonder vertekening, of zodra de ontvanger zelf wil filteren of exporteren. Een
grafiek wint zodra het punt de richting of omvang van een beweging is, niet het exacte
getal. Beslisregel: gebruik nooit meer dan 5 lijnen in 1 lijngrafiek; splits per
kanaalgroep zodra er meer trends tegelijk getoond moeten worden.

### Narratief-opbouw: conclusie eerst, bewijs daarna

Vast stramien, in deze volgorde, nooit omgekeerd:

1. **Conclusie** in 1 zin: de bevinding en de richting, niet de methode ("omzet uit
   organisch daalt 3 weken op rij", niet "we hebben de GA4-data geanalyseerd")
2. **Bewijs**: maximaal 3 datapunten met bron en periode; de rest gaat naar een bijlage
3. **Zo-wat-nu**: concrete actie, eigenaar en termijn; "interessant" is geen slot

Beslisregel: een slide of memo die opent met de dataverzamelmethode in plaats van de
conclusie, verliest het publiek in de eerste 10 seconden. Beslisregel: meer dan 3
bewijs-datapunten per slide verzwakt de boodschap in plaats van hem te versterken.

### Presentatie-lagen per publiek

| Laag | Omvang | Inhoud | Vorm |
|---|---|---|---|
| C-level of eigenaar | 1 slide | 3-5 KPI's, euro's, trend, geen kanaal-detail | springbok-slideshow |
| Marketing-team klant | circa 5 slides | KPI's plus kanaalsplits, funnel, week-op-week | springbok-slideshow of Looker Studio |
| Specialist (MP, uitvoerder) | appendix, onbeperkt | volledige tabellen, segmenten, ruwe cijfers | springbok-gdoc of Looker Studio detail |

Vuistregel: bouw de C-level laag altijd het laatst, nadat de specialist-laag de feiten
heeft opgeleverd, maar presenteer hem als eerste; wie de business niet in 1 slide kan
samenvatten, begrijpt de bevinding zelf nog niet scherp genoeg.

### Misleiding-vermijden: drie veelgemaakte fouten

- **Afgeknotte as**: een y-as die niet bij 0 start, laat een kleine beweging dramatisch
  lijken. Start altijd op 0, tenzij het verschil expliciet in de titel of een NB benoemd
  wordt (bijvoorbeeld bij een lange-termijn indexreeks)
- **Cherry-picked periode**: een periode kiezen die toevallig de beste lijn oplevert
  ondermijnt de geloofwaardigheid zodra iemand doorvraagt. Benoem altijd waarom een
  periode gekozen is (sinds campagnestart, sinds vorige rapportage, kalenderjaar)
- **Correlatie versus causatie**: weer, nieuws, een concurrent-actie of een seizoenspatroon
  zijn context, geen bewezen oorzaak. Markeer ze expliciet als samenhang, niet als
  verklaring; een causaal antwoord vraagt een apart experiment, geen dashboard-conclusie

Beslisregel: elke claim met het woord "omdat" moet een onderbouwde oorzaak zijn, niet een
timing-toeval. Twijfel je, herformuleer dan naar "samenvallend met" in plaats van "door".

### NL-conventies in elk klantverhaal

- Euro-notatie: € 1.234,56, punt als duizendtal-scheiding, komma als decimaalteken
- Datumnotatie: DD-MM-JJJJ, nooit de Amerikaanse MM-DD-JJJJ volgorde
- ISO-weeknummers voor planning en vergelijking (week 29), niet "de week van 14 juli"
- Percentages met 1 decimaal in klantcontent, geen 3 decimalen die precisie faken die de
  brondata niet heeft. Beslisregel: rond euro-bedragen boven 10.000 euro af op hele
  euro's of duizendtallen; centen bij grote bedragen verzwakken de leesbaarheid
- Chart-tools (Looker Studio, Google Sheets, PowerPoint) staan standaard op Engelse en
  Amerikaanse notatie: vertaal expliciet voor elk klantstuk, controleer dit niet aan het einde

### Koppeling met springbok-slideshow en springbok-gdoc

Deze skill bepaalt de inhoud en structuur: welke conclusie, welk bewijs, welke
publiekslaag, welke grafiekvorm. springbok-slideshow en springbok-gdoc bepalen de vorm:
huisstijl, opmaak, bestandstype. Bouw nooit zelf een pptx of docx met een eigen
huisstijl-poging; lever de inhoud aan in het skelet uit Output-formaat en laat de
vorm-skill het document of deck genereren.

## Anti-patterns

- Grafiekvorm kiezen op esthetiek in plaats van vraagtype: een taartdiagram voor een
  trend verbergt precies het punt dat je wilt maken
- Openen met de methode in plaats van de conclusie: het publiek haakt af voor de boodschap komt
- Taartdiagram met meer dan 5 segmenten of een som die niet bij 100% uitkomt
- Y-as die niet bij 0 begint zonder duiding, waardoor een kleine beweging dramatisch oogt
- Een periode kiezen die toevallig de beste lijn oplevert zonder dat te benoemen
- Correlatie als oorzaak verkopen: weer, nieuws of een concurrent-actie zonder kwalificatie
- Een dashboard-screenshot ongeredigeerd in een slide plakken: irrelevante tegels voor dit publiek blijven staan
- Alles op 1 slide proppen voor elk publiek tegelijk: C-level haakt af, specialist mist diepte
- Een getal zonder eenheid, periode of vergelijkingsbasis tonen ("+12%" zonder tov wat)
- Engelse chart-defaults (punt-decimaal, Amerikaanse datumnotatie) onvertaald naar de klant sturen

## Output-formaat

**Verhaal-memo** (basis voor elke slide, mail of samenvatting):

```markdown
# Verhaal: <onderwerp> - <datum>
## Conclusie (1 zin, richting en omvang)
## Bewijs (max 3 datapunten, elk met bron en periode)
## Zo wat nu (actie, eigenaar, termijn)
## Publiekslaag (C-level 1 slide / team 5 slides / specialist appendix)
## Grafiekkeuze plus motivatie (uit de beslistabel)
## Misleiding-check (as, periode, causatie: akkoord of aangepast)
## Vervolgvorm (springbok-slideshow of springbok-gdoc, of geen: alleen memo)
```

Sla het memo op in `<klantmap>/dashboards/` met datum in de bestandsnaam. Klant-facing
versies gaan altijd via springbok-slideshow of springbok-gdoc en pas na MP-review.

## Dependencies

- `<klantmap>/dashboards/` (account-brief.md, history-log.md) als leescontext
- Onderliggende cijfers uit Looker Studio, Google Sheets of BigQuery-exports
- springbok-slideshow voor pptx-vorm, springbok-gdoc voor docx-vorm
- Analyse-memo's van marketing-data-analyst als bewijsbron
- KPI-definities uit kpi-framework-design voor consistente benaming

## Integratie met andere skills

- **dashboard-specialist**: routeert dashboard-signalen hierheen zodra ze een verhaal
  richting klant of directie moeten worden
- **marketing-data-analyst**: levert de gevalideerde bevinding en het bewijs; deze skill
  verpakt dat in de juiste vorm en laag
- **kpi-framework-design**: definieert welke KPI's getoond worden en hun euro-vertaling
- **looker-studio-builder / cowork-live-dashboards**: bron van de onderliggende cijfers
  en grafieken die dit verhaal citeert
- **analytics-bigquery-sql**: bron voor cijfers die dieper gaan dan een dashboard-export
- **springbok-slideshow / springbok-gdoc**: bouwen de uiteindelijke vorm, altijd na
  MP-review van de inhoud
- **weekly-client-update**: hergebruikt de conclusie-eerst-structuur voor de wekelijkse mail
- **dashboard-audit**: signaleert of een bestaand dashboard zelf al misleidend is ingericht

## Tips

- **Test de conclusie-zin op iemand die het dashboard niet kent**: begrijpt die persoon
  het zonder toelichting, dan werkt de zin
- **Bewaar 1 verrassend cijfer per slide**: wie alles benadrukt, benadrukt niets
- **Vraag jezelf voor elke slide**: wat verandert er in het gedrag van de lezer als deze
  slide klopt. Geen antwoord, dan is de slide overbodig
- **Bouw de specialist-laag eerst, presenteer de C-level laag eerst**: de volgorde van
  bouwen en presenteren zijn niet hetzelfde
- **Een grafiek die een uitleg nodig heeft, is de verkeerde grafiek** voor dat publiek
- **Bewaar oude verhalen in history-log.md**: de delta tussen dit kwartaal en vorig
  kwartaal is vaak de sterkste storyline
- **Vraag altijd naar de reactie op de vorige presentatie** voordat je de volgende bouwt:
  wat landde niet, wat riep vragen op
- **Een tabel is geen zwaktebod**: voor een financieel publiek is precisie de boodschap,
  niet de vormgeving

*Eerste versie: juli 2026. Herzie wanneer de NL-notatieconventies wijzigen, springbok-slideshow of springbok-gdoc een nieuw slide-type krijgt, of het dashboarding command center een nieuwe sub-skill toevoegt.*
