---
name: analytics-utm-governance
description: >
  UTM- en campagne-taxonomie als governance: naamgevingsconventie, kanaal-
  mapping naar GA4 default channel groups en handhaving tegen rogue UTM's.
  Gebruik ALTIJD wanneer campagne-tracking rommelig is, kanalen verkeerd
  landen in GA4 of een team een gedeelde UTM-structuur nodig heeft. Trigger
  bij "utm structuur opzetten", "utm naamgeving", "welke utm's gebruiken we",
  "rogue utm's opsporen", "ga4 default channel group klopt niet", "utm bouwer
  maken voor het team", "utm's op onze eigen site", "campagne taxonomie
  vastleggen", "utm audit doen", "source medium mismatch", "utm sheet voor
  het team", "waarom staat dit onder unassigned", of elke vraag over
  UTM-governance. Leest <klantmap>/analytics/, legt de conventie vast in
  meetplan.md en schakelt analytics-tagging-plan voor de datalayer-kant en
  ads-cost-datapipeline en looker-studio-builder voor de join- en
  dashboard-kant.
---

# UTM- en Campagne-Taxonomie: Governance in plaats van Chaos

Je bent MP's specialist voor UTM-governance. Een UTM-parameter is geen vrij tekstveld maar een sleutel die kanaalrapportage, kostenkoppeling en dashboards bij elkaar houdt; deze skill legt de conventie vast, bewaakt de handhaving en repareert de schade van rogue UTM's.

## Wanneer activeren

- Een klant start met campagnes en heeft nog geen UTM-conventie
- GA4 default channel groups tonen onverwacht veel verkeer onder Unassigned of Direct
- Verschillende teamleden gebruiken eigen UTM-varianten voor dezelfde campagne
- Een kanaal landt structureel in de verkeerde default channel group
- Maandelijkse audit moet uitgevoerd worden op rogue of foutieve UTM's
- Interne links op de eigen site blijken UTM-parameters mee te dragen
- Een dashboard of kosten-pipeline heeft UTM als join-sleutel nodig en die klopt niet
- Een nieuw kanaal of platform moet in de bestaande taxonomie ingepast worden
- De klant wisselt van bureau of tool en de oude UTM-historie moet opnieuw begrepen worden
- Een campagne-rapportage toont dubbele rijen voor wat evident dezelfde campagne is

## Werkwijze

1. Lees `<klantmap>/analytics/` (account-brief.md, history-log.md, meetplan.md). Geen bestaande conventie → begin bij stap 2 als greenfield-opzet.
2. Inventariseer de huidige praktijk: trek een steekproef van live campagne-links en GA4 source/medium-combinaties, leg de mismatches naast de gewenste kanaalindeling.
3. Ontwerp of herzie de naamgevingsconventie en de kanaal-mappingtabel (Kern-kennis); leg beide vast in meetplan.md.
4. Richt de UTM-bouwer-workflow in als centrale, verplichte stap voor elke nieuwe campagnelink.
5. Plan het handhavingsritme (maandelijkse audit) en de terugkoppel-loop naar het team.
6. Wijzigingen aan de conventie of aan bestaande, lopende campagnes altijd eerst voorleggen aan MP voordat ze actief worden.
7. Log in history-log.md: wat is gewijzigd aan de conventie, waarom, en de eerstvolgende audit-datum.

**Verificatie-laag**:

- Acceptatiecriteria: de conventie staat vastgelegd in meetplan.md, de kanaal-mappingtabel dekt alle actieve bronnen, de UTM-bouwer is het enige gebruikte pad voor nieuwe links, en de eerste maandelijkse audit is uitgevoerd.
- Bewijsvereisten: een steekproef van 20 tot 30 live links die aan de conventie voldoen, en een audit-log met gevonden afwijkingen en opvolging.
- Escalatieregels: meer dan een werk-drempel van 10% rogue UTM's in een audit-steekproef → terugkoppel-sessie met het team dezelfde week, geen stilzwijgende correctie.
- Stop-condities: geen gedragen kanaal-mappingtabel, of een team dat de UTM-bouwer niet gebruikt ondanks afspraak → escaleer naar MP voor een proces-interventie in plaats van opnieuw te documenteren.

**Non-negotiables**: nooit een nieuwe conventie of kanaal-mapping doorvoeren op lopende campagnes zonder MP-bevestiging; nooit UTM's toevoegen aan interne links op de eigen site; nooit een audit-bevinding stilhouden als die de kostenkoppeling of dashboards raakt.

## Kern-kennis (2026)

### Naamgevingsconventie: het woordenboek per parameter

Bouw de conventie als een vast woordenboek per UTM-parameter, niet als vrije tekst:

```
utm_source   = platformnaam, altijd hetzelfde: google, meta, linkedin, newsletter
utm_medium   = vaste lijst: cpc, paid-social, email, organic-social, referral, affiliate
utm_campaign = kleine letters, koppeltekens, geen spaties: [jaar]-[maand]-[campagnenaam]
utm_content  = variant/creative-identificatie: [advertentievariant]-[format]
utm_term     = alleen bij zoekwoord-niveau relevant (Search), anders leeg laten
```

Beslisregels:

1. Alleen kleine letters, altijd: GA4 behandelt hoofdlettervarianten als aparte waarden, dus Summer-Sale en summer-sale splitsen stilzwijgend het verkeer.
2. Koppeltekens tussen woorden, nooit spaties of underscores door elkaar: kies er een en documenteer die keuze, mixen is de meest voorkomende bron van dubbele campagnenamen.
3. Geen emoji, leestekens of vrije tekst in utm_campaign: dit veld wordt een dashboard-dimensie, geen briefing-titel.
4. utm_source en utm_medium komen altijd uit de vaste lijst in het woordenboek; nieuwe waarden vragen een woordenboek-update, niet een ad-hoc keuze in het veld.
5. Documenteer het woordenboek in meetplan.md met een versiedatum, zodat een wijziging traceerbaar is.

### Kanaal-mapping naar GA4 default channel groups

GA4 leidt de default channel group af uit de combinatie van source, medium en soms campaign-naam. Een mismatch-tabel voorkomt verrassingen:

| Source/medium in de praktijk | Landt in GA4 als | Meestal de bedoeling | Fix |
|---|---|---|---|
| google / cpc | Paid Search | Correct voor Search-campagnes | Geen actie |
| google / (niet ingevuld) | Organic Search of Unassigned | Vaak bedoeld als paid | utm_medium verplicht stellen in de bouwer |
| newsletter / email | Email | Correct | Geen actie |
| newsletter / (leeg utm_medium) | Referral of Direct | Bijna nooit de bedoeling | utm_medium verplicht maken |
| meta / social of cpc | Paid Social bij cpc, Organic Social bij social zonder cpc | Verwarrend als medium niet consistent is | medium vastzetten op "paid-social" voor betaald Meta-verkeer |
| linkedin / paid-social vs organic-social | Paid Social vs Organic Social | Correct als medium consistent is | Zelfde discipline als bij Meta |
| eigen mailings zonder UTM | Direct of Unassigned | Bijna nooit de bedoeling | UTM-bouwer verplicht voor elke mailing-link |

Beslisregel: een hoog en groeiend Unassigned-percentage is vrijwel altijd een UTM-disciplineprobleem, geen GA4-bug; begin het onderzoek bij de bron van de links, niet bij de GA4-configuratie.

### UTM-bouwer-workflow

1. Een centrale plek (gedeeld sheet met validatie-formules, of een UTM-bouwer-tool) is het enige toegestane pad voor het genereren van campagnelinks.
2. De bouwer dwingt het woordenboek af: dropdowns voor source en medium, een vaste sjabloonstructuur voor campaign en content, geen vrij invoerveld zonder validatie.
3. Beslisregel: geen enkele campagnelink gaat live zonder dat hij via de bouwer is gegenereerd, ook niet "even snel" door een teamlid dat de conventie kent.
4. Koppel de bouwer-sheet aan meetplan.md zodat de conventie en het bouwproces bij elkaar blijven staan.

### Handhaving: maandelijkse audit

Beslisboom voor de opvolging na een audit:

```
Percentage afwijkingen in de steekproef
├─ Onder 10%       -> individuele correctie, geen teambrede sessie nodig
├─ 10% tot 25%     -> terugkoppel-sessie met het team dezelfde week
└─ Boven 25%       -> conventie of bouwer-workflow zelf is het probleem,
                       escaleer naar MP voor een proces-herziening
```

1. Trek maandelijks een steekproef van live campagnelinks (20 tot 30 stuks, werk-drempel) uit de actieve kanalen.
2. Vergelijk tegen het woordenboek: source, medium en campaign-structuur correct.
3. Beslisregel: meer dan 10% afwijkingen in de steekproef (werk-drempel) is een teamprobleem, geen incident; plan een terugkoppel-sessie in plaats van losse correcties.
4. Terugkoppel-loop: bevindingen altijd terug naar het team dat de links maakt, met concrete voorbeelden, niet alleen naar de klant-rapportage.
5. Archiveer elke audit met datum en bevindingen in history-log.md, zodat een trend over meerdere maanden zichtbaar wordt.

### Audit-scorekaart (per campagnelink, alle punten moeten akkoord zijn)

1. utm_source uit de vaste lijst: akkoord/niet akkoord
2. utm_medium uit de vaste lijst: akkoord/niet akkoord
3. utm_campaign in kleine letters met koppeltekens, geen spaties of leestekens: akkoord/niet akkoord
4. Link gegenereerd via de centrale bouwer, niet handmatig samengesteld: akkoord/niet akkoord
5. Geen UTM-parameters op een interne link: akkoord/niet akkoord

Een link met een niet-akkoord op punt 5 telt altijd als een showstopper, ongeacht de rest van de score: interne UTM's breken sessies direct.

### Interne-links-verbod

UTM-parameters op links binnen de eigen site herschrijven de sessie-bron bij elke klik: een bezoeker die via een interne link met UTM doorklikt, start technisch een nieuwe sessie met een nieuw kanaal. Dit breekt attributie en dupliceert sessies in GA4. Beslisregel: UTM's horen uitsluitend op links die van buiten de site naar de site verwijzen (advertenties, e-mails, social posts, partnersites); nooit op interne navigatie, interne banners of interne cross-sell-links.

### Koppeling met de kosten-datapipeline en dashboarding

- UTM (met name utm_campaign en utm_source/medium) is de join-sleutel waarmee ads-cost-datapipeline kosten per platform koppelt aan omzet en conversies per kanaal; een inconsistente UTM-structuur breekt die join stilzwijgend.
- looker-studio-builder en dashboard-specialist gebruiken de kanaal-mappingtabel als basis voor kanaal-dimensies in elk dashboard; wijzig je de mapping, dan wijzig je ook bestaande dashboards.
- Beslisregel: een UTM-conventiewijziging gaat altijd samen met een update van de kanaal-mappingtabel in elk dashboard dat erop leunt, anders ontstaat een knip in de historische reeks.

### Multi-market en meertalige campagnes

Bij klanten met meerdere landen of talen: houd het source/medium-woordenboek taalneutraal (google, cpc blijven universeel), maar geef land of taal een vaste, aparte positie in de utm_campaign-sjabloonstructuur in plaats van het los toe te voegen. Beslisregel: nooit land of taal als vrij woord ergens in utm_campaign verstoppen zonder vaste positie; dat maakt filteren in Looker Studio onnodig lastig. Een NL-klant met een aparte BE-uiting (Bancontact-checkout, andere btw-regels) is in dit portfolio de meest voorkomende praktijkcase van dit vraagstuk.

## Anti-patterns

- utm_campaign vullen met vrije tekst inclusief spaties, hoofdletters of emoji: elk dashboard dat hierop groepeert versplintert
- Losse teamleden die eigen UTM-varianten verzinnen buiten de bouwer om: de meest voorkomende oorzaak van dubbele campagnenamen in rapportages
- UTM's toevoegen aan interne links: breekt sessies en attributie, en is vrijwel nooit met opzet gedaan
- Unassigned-verkeer toeschrijven aan "een GA4-bug" zonder eerst de UTM-bron te checken
- Een conventie documenteren maar nooit auditen: zonder handhaving verwatert elke conventie binnen een paar maanden
- Kanaal-mapping wijzigen zonder de dashboards en kosten-pipeline mee te nemen: cijfers lopen dan stilzwijgend uit de pas
- Audit-bevindingen alleen intern bij MP houden zonder terugkoppeling naar het team dat de links maakt: het probleem herhaalt zich dan de volgende maand
- Verschillende schrijfwijzen van hetzelfde medium (cpc, CPC, paid, ppc) door elkaar laten bestaan: dit is precies wat het woordenboek moet voorkomen

## Output-formaat

UTM-conventie en auditrapport (md in `<klantmap>/analytics/reports/`, conventie zelf in meetplan.md):

```
# UTM-conventie: [klant] (versie, datum)
## Woordenboek per parameter (source, medium, campaign, content, term)
## Kanaal-mappingtabel (source/medium naar GA4 default channel group, mismatches)
## Bouwer-workflow (locatie, verplichtstelling)
## Auditresultaat [maand] (steekproefgrootte, afwijkingspercentage, voorbeelden)
## Terugkoppeling naar het team (datum, actiepunten)
## Volgende audit-datum
```

Plus: bijgewerkte meetplan.md met versiedatum en history-log.md-entry per audit.

## Dependencies

- `ga4_tool` voor source/medium- en channel-group-analyse
- Gedeeld sheet of UTM-bouwer-tool met validatie (dropdowns, sjabloonvelden)
- `google_workspace_tool` voor het conventiedocument en auditrapport
- `<klantmap>/analytics/` met account-brief.md, meetplan.md en history-log.md
- Toegang tot de kanalen die UTM's genereren (advertentieplatforms, e-mailtool, social scheduler)

## Integratie met andere skills

- **analytics-specialist**: routeert hierheen bij herhaalde kanaal- of attributieverwarring
- **analytics-tagging-plan**: UTM-parameters landen als onderdeel van de bredere datalayer- en meetplan-spec
- **analytics-ga4-audit**: signaleert Unassigned- en kanaal-mismatches die naar deze skill leiden
- **analytics-server-side**: server-side verwerking van campaign-parameters bij sGTM-opzet
- **ads-cost-datapipeline**: gebruikt UTM als join-sleutel tussen kosten en omzet/conversies
- **looker-studio-builder** en **dashboard-specialist**: kanaal-mappingtabel is de basis voor dashboard-dimensies
- **data-quality-monitoring**: neemt de maandelijkse UTM-audit op in de structurele bewakingscyclus
- **analytics-offline-conversions**: click-id en UTM werken samen als herkenningssleutels bij offline terugkoppeling
- **analytics-eu-alternatives**: kanaal-mapping moet opnieuw gevalideerd worden bij een tool-migratie
- **analytics-consent-privacy**: campagneparameters bevatten geen persoonsgegevens, maar consent-status kan de kanaaltoewijzing beinvloeden
- **google-ads-leadgen-b2b** en **meta-ads-leadgen**: campagne-UTM's moeten aansluiten op de conventie bij nieuwe leadgen-campagnes

## Tips

- Begin elk nieuw klantaccount met het UTM-woordenboek, voordat de eerste campagne live gaat; achteraf opruimen kost altijd meer tijd
- Een hoog Unassigned-percentage is negen van de tien keer een UTM-discipline-signaal, geen GA4-configuratieprobleem
- Zet de kanaal-mappingtabel naast elk nieuw platform dat de klant toevoegt, voor het eerste campagnelink de deur uit gaat
- Maak de UTM-bouwer makkelijker dan het zelf typen van een link; anders wint het gemak van de rogue UTM altijd
- Bewaar oude conventieversies in meetplan.md met datum; dat verklaart later waarom oudere campagnes een andere structuur hebben
- Een audit zonder terugkoppeling naar het team is een rapport dat niemand leest en niets verandert
- Behandel utm_content niet als bijzaak: bij creative-testen is dit vaak het enige veld dat het verschil tussen varianten laat zien
- Vraag bij overname van een klant altijd naar de oude UTM-historie voordat je een nieuwe conventie oplegt: een botsing tussen oud en nieuw breekt de vergelijkbaarheid van rapportages

*Eerste versie: juli 2026. Herzie bij wijzigingen in de GA4 default channel group-logica of bij een nieuwe kanaal-integratie die de conventie raakt.*
