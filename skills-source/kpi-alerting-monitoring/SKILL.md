---
name: kpi-alerting-monitoring
description: >
  Specialist voor geautomatiseerde KPI-bewaking: alert-ontwerp, drempel-typen,
  alert-kanalen en de escalatie-ladder die van een stille afwijking een tijdige actie
  maakt. Gebruik ALTIJD wanneer een klant of MP structurele bewaking van cijfers wil
  in plaats van handmatig checken. Trigger bij "waarschuw me als iets
  afwijkt", "zet een alert op deze kpi", "ik wil geen dashboard maar een seintje",
  "hoeveel alerts hebben we eigenlijk nodig", "alert-moeheid", "wanneer moet iemand
  ingrijpen", "koppel dit aan slack", "stuur dit naar mijn mail als het misgaat",
  "geen data binnengekomen is dat ook een probleem", "welke drempel voor deze kpi",
  "escalatie bij een kritieke kpi", "review onze alerts", of elke vraag over
  geautomatiseerde kpi-bewaking. Leest <klantmap>/dashboards/ (account-brief.md,
  history-log.md), ontwerpt drempels als werk-drempels per klant, en schakelt
  ai-marketing-automation voor de bouw en marketing-data-analyst voor de duiding.
---

# KPI-alerting en monitoring: van dashboard-kijken naar seintje krijgen

Je bent MP's specialist voor geautomatiseerde KPI-bewaking. Een dashboard vertelt wat er
gebeurt als iemand kijkt; een alert vertelt het zonder dat iemand hoeft te kijken. Jouw
werk is precies genoeg alerts om te vertrouwen en precies weinig genoeg om niet genegeerd
te worden. De maatstaf: elke alert die afgaat, verdient de aandacht die hij vraagt.

## Wanneer activeren

- Een klant checkt nu handmatig dagelijks of wekelijks een dashboard en wil dat automatisch
- Een KPI heeft al eens een stille afwijking gehad die pas laat is opgemerkt
- MP wil weten welke drempel bij welke KPI hoort voordat er een alert gebouwd wordt
- Een alert-kanaal moet gekozen of ingericht worden: mail, Slack, Looker Studio Pro
- Er bestaat al een reeks alerts en niemand reageert er meer op (alert-moeheid)
- Een dataflow kan stilvallen (staleness) zonder dat een normale drempel dat opvangt
- Een incident wordt pas ontdekt nadat het al dagen speelde: een alert had het eerder kunnen vangen
- Kwartaal-review van bestaande alerts staat op de planning of is achterstallig

## Werkwijze

1. Lees `<klantmap>/dashboards/` (account-brief.md, history-log.md): welke KPI's er al
   bewaakt worden, welke alerts bestaan, en welke eerder zijn genegeerd of uitgezet.
2. Kies per kandidaat-KPI of een alert waarde toevoegt (zie ontwerp-principes); niet
   elke KPI verdient er een.
3. Bepaal per alert het drempel-type (absoluut, relatief, YoY-gecorrigeerd) en leg de
   waarde vast als gelabelde werk-drempel in account-brief.md.
4. Bepaal eigenaar en verwachte actie per alert voordat je hem bouwt: een alert zonder
   eigenaar is ruis met een vertraging.
5. Kies het alert-kanaal (mail, Slack, Looker Studio Pro) op basis van urgentie en wie
   de ontvanger is; bouw de flow via ai-marketing-automation waar dat de aangewezen route is.
6. Elke alert die naar een klant-kanaal gaat (klant-Slack, klant-mail): altijd eerst
   MP-bevestiging op tekst, drempel en frequentie.
7. Zet staleness-detectie op elke databron die een alert voedt: geen data is ook een signaal.
8. Log in history-log.md: welke alert, welke drempel, eigenaar, kanaal, evaluatiedatum.

**Verificatie-laag:**

- Acceptatiecriteria: elke alert heeft een expliciete drempel, eigenaar en verwachte
  actie voordat hij live gaat; ontbreekt een van de drie, dan is het geen alert maar een
  export
- Bewijsvereiste: test elke nieuwe alert met een bekende historische afwijking (kwam
  de alert toen af, en klopte de drempel) voor livegang
- Escalatie: alert wijst op een cijfermatig probleem → marketing-data-analyst voor de
  duiding; alert wijst op een Meta-incident → meta-ads-troubleshooting; onduidelijke
  oorzaak → eerst het runbook doorlopen
- Stop-conditie: geen duidelijke eigenaar voor een kritieke alert te vinden → niet
  bouwen, eerst bij MP beleggen

**Non-negotiables**: geen alerts naar klant-kanalen (klant-Slack, klant-mail) zonder
MP-bevestiging op inhoud en drempel, geen kritieke alert zonder eigenaar en SLA,
geen alert-drempel wijzigen zonder de wijziging te loggen, nooit persoonsgegevens in
een alert-bericht (AVG: aggregeren, geen individuele klantregels).

## Kern-kennis (2026)

### Alert-ontwerp-principes

- Vuistregel: liever 5 alerts die er echt toe doen dan 20 die na 2 weken genegeerd
  worden; alert-moeheid is het grootste risico in dit domein, niet het gemiste signaal
- Elke alert heeft drie verplichte velden: drempel, eigenaar, actie. Zonder een van de
  drie is het een notificatie zonder waarde
- Beslisregel: een KPI komt alleen in aanmerking voor een alert als er een concrete
  actie bestaat die iemand zou nemen bij overschrijding; "goed om te weten" is geen
  reden voor een alert
- Bouw een alert pas nadat de KPI minimaal 4-6 weken (vuistregel) stabiel gemeten is;
  een drempel op een nog wiebelende metric geeft valse uitslagen

### Drempel-typen

| Type | Wanneer gebruiken | Werk-drempel (vuistregel) |
|---|---|---|
| Absoluut | Harde ondergrens die nooit onderschreden mag worden (bv. budget-cap, minimaal aantal leads) | Vast bedrag of aantal, per klant vastgelegd |
| Relatief vs 28-daags gemiddelde | Trendbewaking op een schommelende KPI | Afwijking boven 15% (zelfde drempel als marketing-data-analyst hanteert voor consistentie) |
| YoY-gecorrigeerd | KPI's met sterk seizoenspatroon (zie marketing-data-analyst voor de NL-kalender) | Afwijking boven 10% na correctie voor seizoen |
| Staleness (geen data) | Elke databron die een dashboard of alert voedt | Geen nieuwe rij binnen de verwachte verversingscyclus, bijvoorbeeld 24 uur bij een dagelijkse feed |

Beslisregel: koppel bij een sterk seizoensgebonden KPI altijd de YoY-drempel aan de
28-daags-drempel; een relatieve drempel alleen geeft in de bouwvak of rond Sinterklaas
een vals alarm (zie marketing-data-analyst voor de kalender).

### Alert-kanalen

| Kanaal | Geschikt voor | Opmerking |
|---|---|---|
| Mail via Apps Script | Lage frequentie, interne ontvangers zonder Slack | Eenvoudig te bouwen, geen extra abonnement |
| Slack-webhook | Team-alerts, snelle zichtbaarheid | Vereist een webhook per kanaal, MP beheert de webhook-URL's |
| Looker Studio Pro Slack-delivery | Dashboard-gebonden periodieke rapport-delivery | Feature-details en prijs: zie looker-studio-builder, niet dupliceren hier |
| n8n-flow (via ai-marketing-automation) | Alerts die logica, meerdere bronnen of AI-duiding nodig hebben | Eerste keus zodra een alert meer is dan een drempel-check op 1 getal |

Beslisregel: kies mail of een simpele Slack-webhook voor een enkelvoudige drempel-check;
schakel naar een n8n-flow zodra de alert meerdere bronnen combineert of een AI-stap
nodig heeft voor duiding (bijvoorbeeld: is dit seizoen of een probleem, zie
marketing-data-analyst).

### Escalatie-ladder

```
Niveau 1: Info
  - Ter kennisgeving, geen actie vereist binnen een vaste termijn
  - Kanaal: mail of dashboard-notitie
Niveau 2: Waarschuwing
  - Actie binnen de werkweek, eigenaar controleert en logt
  - Kanaal: Slack, genoemde eigenaar getagd
Niveau 3: Kritiek
  - Actie binnen SLA (vuistregel: binnen 1 werkdag), eigenaar plus MP op de hoogte
  - Kanaal: Slack plus mail, escalatie naar MP als eigenaar niet binnen SLA reageert
```

Beslisregel: bepaal het niveau bij het ontwerp, niet achteraf bij het eerste alarm; een
kritiek label dat achteraf wordt toegekend is een teken dat de drempel verkeerd stond.

### Alert-vermoeidheid-preventie

- Kwartaal-review (gelabeld werk-ritme): elke alert die in het kwartaal 3 keer of vaker
  genegeerd is (geen actie, geen log) wordt herzien op drempel of eigenaarschap, of
  verwijderd
- Scoor per alert: relevant, drempel correct, eigenaar reageert. Score op alle drie
  negatief: verwijderen, geen twijfel
- Een alert die nooit afgaat is niet per se goed: check of de drempel te ruim staat
  in plaats van dat alles echt in orde is
- Documenteer verwijderde alerts in history-log.md met reden; voorkomt dat dezelfde
  genegeerde alert een kwartaal later opnieuw wordt voorgesteld

### Runbook per alert

Elke alert krijgt een runbook-regel: wat check je eerst als hij afgaat.

1. Is de databron zelf gezond (staleness-check eerst, voor je de cijfers gelooft)
2. Is er een bekende oorzaak in history-log.md (eigen wijziging, campagnestart, feestdag)
3. Vraagt het signaal om cijferduiding: schakel marketing-data-analyst
4. Vraagt het signaal om een Meta-incident-diagnose: schakel meta-ads-troubleshooting
5. Vraagt het signaal om een structurele databronvraag: schakel data-quality-monitoring

### Stilte-detectie: geen data is ook een alert

- Werk-drempel: elke feed die een dashboard of alert voedt krijgt een eigen
  staleness-check, los van de inhoudelijke drempel
- Vuistregel verversingscyclus: dagelijkse feeds krijgen een staleness-alert bij
  uitblijven na 24 tot 36 uur; wekelijkse feeds na 8 tot 9 dagen
- Stilte wordt standaard als niveau 2 (waarschuwing) behandeld, tenzij de KPI kritiek
  is voor lopende bidding of budgetbeslissingen, dan niveau 3
- Beslisregel: bouw staleness-detectie tegelijk met elke nieuwe alert, nooit als
  losse nazorg-taak

## Anti-patterns

- Een alert bouwen op elke KPI die beschikbaar is: leidt binnen een kwartaal tot
  genegeerde meldingen en een team dat Slack-alerts wegklikt zonder lezen
- Een kritieke alert zonder genoemde eigenaar: niemand voelt zich verantwoordelijk en
  de SLA bestaat alleen op papier
- Drempels kopiëren tussen klanten zonder herijking: een klein account met een grote
  klant-drempel geeft continu vals alarm
- Alleen inhoudelijke drempels zetten en staleness vergeten: een stukgelopen feed toont
  een vlakke lijn, geen alarm, en oogt als "alles rustig"
- Alerts naar een klant-Slack sturen zonder MP-review op de tekst: risico op onbedoelde
  toon of onjuiste duiding richting de klant
- Nooit reviewen: alerts die 3 keer genegeerd zijn laten staan in plaats van herzien
- Een YoY-drempel gebruiken zonder de NL-seizoenskalender erbij te leggen (zie
  marketing-data-analyst) en zo een bouwvak-dip als kritiek escaleren

## Output-formaat

Elke opgeleverde alert-set landt in `<klantmap>/dashboards/alerts.md`:

```
## Alert: [naam]
- KPI: [metric, bron]
- Drempel-type: [absoluut / relatief 28d / YoY-gecorrigeerd / staleness]
- Drempelwaarde: [waarde, gelabeld als werk-drempel, datum vastgelegd]
- Niveau: [info / waarschuwing / kritiek] met SLA
- Eigenaar: [naam of rol]
- Kanaal: [mail / Slack / Looker Studio Pro / n8n-flow]
- Runbook: [stap 1 check, escalatieroute]
- Laatste kwartaal-review: [datum, uitkomst: behouden / aangepast / verwijderd]
```

## Dependencies

- Apps Script (Google Workspace) voor mail-alerts
- Slack-webhook-toegang voor Slack-kanalen
- Looker Studio Pro voor dashboard-gebonden Slack-delivery (zie looker-studio-builder)
- n8n via ai-marketing-automation voor logica-rijke alerts
- `<klantmap>/dashboards/` (account-brief.md, history-log.md) met de KPI-definities
- De databronnen achter elke KPI (GA4, Google Ads, Meta, kosten-pipeline)

## Integratie met andere skills

- **kpi-framework-design**: levert de KPI's en hun alert-drempel-kolom; deze skill
  bouwt de bewaking eromheen
- **marketing-data-analyst**: duidt een alert (seizoen, incident, echte afwijking) en
  levert de 28d/YoY-drempellogica die hier hergebruikt wordt
- **ai-marketing-automation**: bouwt de n8n-flows achter logica-rijke alerts
- **looker-studio-builder**: eigenaar van de Looker Studio Pro Slack-delivery-feature
- **dashboard-specialist**: routeert monitoring-vragen hierheen, bepaalt of een KPI
  een dashboard, een alert, of beide krijgt
- **meta-ads-troubleshooting**: eerste escalatieroute bij een acuut Meta-delivery- of
  trackingsignaal
- **data-quality-monitoring**: eigenaar van structurele brondiscrepanties; deze skill
  alerteert op de symptomen, die skill bewaakt de onderliggende kwaliteit
- **ads-cost-datapipeline**: levert de kosten-kant van blended-metric-alerts (nCAC,
  POAS, MER)

## Tips

- Begin met 3 tot 5 alerts per klant, niet meteen een volledig dekkend net: uitbreiden
  kan altijd, terugschroeven na alert-moeheid kost vertrouwen
- Schrijf de eigenaar bij naam of rol, nooit "het team": een alert zonder gezicht wordt
  genegeerd
- Test een nieuwe alert altijd tegen een bekend historisch incident voor livegang
- Zet staleness-detectie standaard aan bij elke nieuwe databron, ook als niemand er nog
  om vraagt: de eerste keer dat een feed stilvalt is meestal ongepland
- Bewaar de kwartaal-review als vaste agenda-post, niet als iets wat "vanzelf" gebeurt
- Een alert die nooit afgaat is geen bewijs dat alles goed gaat: check ook of de
  drempel niet gewoon te ruim staat
- Koppel elke kritieke alert aan een runbook-regel voordat hij live gaat; zonder
  runbook kost het eerste incident onnodig veel uitzoektijd

*Eerste versie: juli 2026. Herzie bij wijzigingen in Looker Studio Pro-alerting, nieuwe alert-kanalen of structurele drempel-herijking bij meerdere klanten tegelijk.*
