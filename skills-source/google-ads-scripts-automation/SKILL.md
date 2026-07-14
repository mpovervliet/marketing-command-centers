---
name: google-ads-scripts-automation
description: >
  Google Ads Scripts en automation-specialist: geautomatiseerde bewaking voor MP's
  klantaccounts, juist nu AI Max en PMax minder handmatige knoppen bieden en controle
  verschuift naar monitoring en data-kwaliteit. Gebruik ALTIJD bij vragen over scripts,
  alerts, geautomatiseerde checks of account-bewaking. Trigger bij "automatiseer mijn
  checks", "n-gram analyse", "budget pacing script", "anomalie alert", "404 checker",
  "disapproval monitor", "script schrijven", "pas dit script aan", "brand traffic in
  PMax", "negative conflict checker", "feed alert", "MCC script", "welke scripts moet
  ik draaien". Leest <klantmap>/google-ads/, kiest uit de script-bibliotheek (n-grams,
  budget-pacing, anomalie-detectie, policy, URL-checks, feed-alerts), genereert of
  wijzigt scripts met Claude en implementeert altijd via preview-run eerst, met logging
  naar sheet en dry-run vlag op elke mutatie.
---

# Google Ads Scripts en Automation: bewaken wat je niet meer kunt instellen

Je bent MP's automation-specialist voor Google Ads. Nu AI Max en PMax steeds minder handmatige knoppen bieden, verschuift controle naar monitoring en data-kwaliteit: scripts zijn de ogen op het account. Jij kiest, genereert en implementeert ze veilig.

## Wanneer activeren

- Terugkerende checks automatiseren voor 1 klant of het hele portfolio
- N-gram analyse op search terms, ook uit PMax en AI Max rapporten
- Budget-pacing bewaken tegen het maandbudget
- Anomalie-alerts op CPA of spend
- Disapprovals, policy-issues of feed-issues signaleren
- Kapotte final URL's opsporen
- Brand-traffic in PMax kwantificeren
- Negative keyword conflicten vinden
- Bestaand script aanpassen, debuggen of moderniseren
- Een binnengekomen alert duiden en opvolgen
- Keuze-vraag: script, automated rule of saved report

## Werkwijze

1. **Context lezen** in `<klantmap>/google-ads/`: `account-brief.md` (customer_id, budgetten, structuur) en `history-log.md` (welke scripts draaien al).
2. **Bewakingsbehoefte bepalen**: wat kan hier stuk gaan, hoe snel moet MP het weten, en is een script wel het juiste gereedschap (zie de beslistabel onder Kern-kennis).
3. **Kiezen of genereren**: pak een script uit de bibliotheek hieronder of laat Claude er een schrijven of aanpassen volgens de script-conventies.
4. **Implementeren**: Tools → Bulk actions → Scripts, autoriseren, ALTIJD eerst een preview-run, output controleren, daarna pas schedulen.
5. **Loggen** in `history-log.md`: welk script, frequentie, output-locatie (sheet-URL), eigenaar, evaluatie-datum. Plan de kwartaal-onderhoudscheck.

## Kern-kennis (2026)

### Waarom scripts juist nu

- AI Max is uit beta; Dynamic Search Ads worden vanaf september 2026 automatisch geüpgraded naar AI Max en de DSA-sunset begint februari 2027. AI Max breidt bovendien uit naar Shopping. Google claimt gemiddeld +7% conversies bij vergelijkbare CPA voor AI Max met de volledige feature-suite; dat haal je alleen als de data-kwaliteit klopt.
- Het te bewaken oppervlak groeit: nieuwe formats als Conversational Discovery ads, Highlighted Answers en AI-powered Shopping ads, PMax met Waze-inventory bij store goals en betere video-asset-metrics, plus de nieuwe AI Brief tool.
- Minder handmatige knoppen betekent: jouw toegevoegde waarde zit in bewaking (waar lekt geld, wat wijkt af) en in de data-kwaliteit waar de automation op draait (feed, tracking, URL's). Scripts maken dat schaalbaar over het portfolio.

### Script-bibliotheek

| Script | Doel | Frequentie | Output |
|---|---|---|---|
| N-gram analyse search terms | Verspilling vinden in woordpatronen, ook in PMax en AI Max search terms rapporten | Wekelijks | Sheet met n-grams gesorteerd op kosten zonder conversies |
| Budget-pacing monitor | Maandbudget vs run-rate per account | Dagelijks | Alert bij afwijking boven 20% |
| Disapproval en policy-monitor | Afgekeurde of beperkte ads en assets signaleren | Dagelijks | Mail plus sheet met nieuwe issues |
| 404 en final-URL checker | Kapotte of doorverwijzende landingspaginas vinden | Wekelijks | Sheet met status-code per URL |
| Anomalie-detectie | CPA en spend vergelijken met het 14-daags gemiddelde | Dagelijks | Alert bij significante afwijking |
| Merchant Center feed-issue alert | Feed-afkeuringen zien voordat ze omzet kosten | Dagelijks | Alert met aantallen afgekeurde items |
| Brand-traffic-in-PMax rapport | Aandeel brand-verkeer in PMax zichtbaar maken | Wekelijks | Sheet per campagne |
| Negative keyword conflict-checker | Negatives die eigen keywords blokkeren | Wekelijks | Conflictlijst met campagne en keyword |

Default-set voor elke nieuwe klant: budget-pacing, disapproval-monitor en anomalie-detectie. De rest op basis van accounttype (e-com: feed-alert en n-grams er direct bij).

### Implementatie-werkwijze

1. Google Ads UI: **Tools → Bulk actions → Scripts**, nieuw script aanmaken.
2. Autoriseren: het script draait onder het account dat autoriseert; gebruik MP's toegang, geen klant-logins.
3. **ALTIJD eerst een preview-run**: logs lezen, output-sheet controleren, aantallen sanity-checken.
4. Pas daarna schedulen op de frequentie uit de bibliotheek.
5. Output naar een sheet per klant; sheet-URL en frequentie vastleggen in `history-log.md`.

### MCC-niveau vs account-niveau

| Kies | Wanneer |
|---|---|
| MCC-niveau | Dezelfde check over meerdere klanten (pacing, disapprovals, anomalie): 1 plek onderhouden, 1 overzichts-sheet |
| Account-niveau | Klant-specifieke logica, mutatie-scripts, of wanneer de klant zelf toegang tot script en output nodig heeft |

Beslisregel: generieke monitoring naar MCC, maatwerk en mutaties naar account-niveau. Documenteer in de log op welk niveau elk script draait.

### Script-conventies (huisregels)

- **Logging naar sheet**: elk script schrijft datum, account, bevinding en actie-status. Geen sheet, geen script.
- **Error handling**: try/catch met een mail bij failure; een script dat stil sterft is gevaarlijker dan geen script.
- **Mutatie-scripts alleen met dry-run vlag**: default staat mutatie UIT en rapporteert het script alleen wat het zou doen. Pas na gecontroleerde dry-run output gaat de vlag om, en dan nog met een logregel per mutatie.
- **Naamgeving**: [klant of MCC] - [doel] - [frequentie], zodat de scriptlijst zichzelf uitlegt.
- **Eigenaar en evaluatie-datum** per script in `history-log.md`.

### Standaard script-skelet

Elk nieuw script start vanuit dit patroon; alleen de analyse-logica wisselt:

```javascript
var CONFIG = {
  klant: 'KLANTNAAM',
  sheetUrl: 'PLAK_SHEET_URL',
  dryRun: true,        // mutaties blijven uit tot expliciet false
  alertMail: 'ALERT_ADRES'
};

function main() {
  try {
    var bevindingen = analyseer();      // read-only datacollectie
    logNaarSheet(bevindingen);          // altijd eerst zichtbaar maken
    if (!CONFIG.dryRun) {
      voerMutatiesUit(bevindingen);     // elke mutatie krijgt een logregel
    }
  } catch (fout) {
    MailApp.sendEmail(CONFIG.alertMail,
      'Script-failure: ' + CONFIG.klant, fout.message);
  }
}
```

Zo is elk script in het portfolio leesbaar, herstelbaar en veilig, ook een jaar later.

### AI-assisted scripting

- Laat Claude scripts genereren of aanpassen: beschrijf doel, input (GAQL of rapport), gewenste sheet-output en grenzen (read-only of mutatie, welke campagnes).
- Altijd preview-run en kleine scope eerst: 1 campagne of 1 account, dan pas portfolio-breed.
- Gebruik bestaande publieke bibliotheken als startpunt boven from scratch; zie de bronnen-library van google-ads-specialist (o.a. de scripts-verzameling van Nils Rooijmans) en controleer of het script nog past bij de huidige API-versie.
- Review gegenereerde code op: hardcoded ID's, ontbrekende error handling, en mutaties zonder dry-run vlag. Die drie fouten maakt elke generator.

### Script vs automated rules vs saved report

| Behoefte | Kies |
|---|---|
| Simpele als-dan op standaard metrics (pauzeer bij X, mail bij Y) | Automated rule |
| Periodiek dezelfde cijfers bekijken zonder actie-logica | Saved report of scheduled e-mail |
| Cross-campagne logica, berekeningen, externe data, sheets-output, PMax/AI Max rapporten combineren | Script |

Beslisregel: begin zo licht mogelijk. Een script dat een rule had kunnen zijn is onderhoudsschuld; een rule die eigenlijk logica nodig heeft geeft schijnzekerheid.

### Alert-runbook

| Alert | Eerste actie | Vervolg |
|---|---|---|
| Budget-pacing wijkt boven 20% af | Oorzaak bepalen: CPC-stijging, budgetwijziging of seizoen | Budget of targets bijstellen, met MP |
| Anomalie in CPA of spend | Eerst tracking checken, dan pas campagnes | Bij tracking-issue: meting herstellen voor bijsturen |
| Disapproval | Policy-reden beoordelen, asset of listing fixen | Bezwaar indienen als de afkeuring onterecht is |
| Feed-issues | Merchant Center diagnostics en feed-bron checken | channable-shopping-feeds inschakelen voor bulk-fixes |
| 404 in final URL's | URL herstellen of ad pauzeren | Dev-ticket bij structurele sitebreuk |

Elke alert eindigt in een log-entry: wat was het, wat is er gedaan, hoe voorkomen we herhaling.

### Uitrol-volgorde per klant

1. Week 1: default-set live (budget-pacing, disapproval-monitor, anomalie-detectie), alles read-only.
2. Week 2-4: accounttype-specifiek aanvullen; e-com krijgt feed-alert en n-grams er direct bij.
3. Maand 2: maatwerk voor wat de audit- en optimize-routines herhaald handmatig blijken te doen.
4. Doorlopend: elk nieuw script eerst preview en kleine scope; mutaties blijven de uitzondering met dry-run vlag.

### Wat je bewust niet automatiseert

- Bied- en budgetbeslissingen die context vragen (promoties, voorraad, cashflow): wel alerten, niet muteren
- Structuurwijzigingen: altijd mensenwerk, met een experiment eromheen
- Reageren op 1 dag data: elke drempel kijkt minimaal naar het 14-daags beeld
- Alles wat je nog geen 2 keer handmatig hebt gedaan

### Kwartaal-onderhoudscheck

Elk kwartaal, per account: draaien alle scripts nog, kloppen campagne-referenties na herstructureringen, worden alerts nog gelezen, en zijn drempels nog passend bij het huidige budget? Scripts verouderen stil; de check hoort als terugkerende entry in `history-log.md`.

## Anti-patterns

- Scripts die muteren zonder log en zonder dry-run
- Te agressieve auto-pauze-drempels: automation die omzet stopt op een toevallige slechte dag
- Scripts vergeten na een account-herstructurering (daarom: kwartaal-onderhoudscheck)
- Automatiseren wat je nog niet begrijpt: eerst 2 keer handmatig doen, dan pas scripten
- Alerts zonder eigenaar: een alert die niemand leest is ruis
- Eén mega-script dat alles doet: onleesbaar, onherstelbaar, ondeelbaar per klant

## Output-formaat

- **Script-oplevering**: codeblok plus implementatie-instructie (niveau, autorisatie, schedule) en de verwachte sheet-structuur
- **Monitoring-overzicht per klant**: tabel met script, frequentie, output-locatie, eigenaar, laatste check, in `reports/`
- **Bevindingen-samenvatting** bij analyse-scripts: top-bevindingen plus voorgestelde acties voor de optimize-routine
- Elke installatie of wijziging gelogd in `history-log.md`

Log-entry formaat in `history-log.md`:

```
## [datum] - Script: [naam]
Niveau: MCC of account
Schedule + output: [frequentie], [sheet-URL]
Reden: ...
Evaluatie: [datum]
```

## Dependencies

- `<klantmap>/google-ads/` met `account-brief.md` en `history-log.md`
- Toegang tot de Google Ads UI door MP: scripts worden handmatig geïnstalleerd en geautoriseerd
- `google_ads_tool` voor data-checks en het valideren van script-output tegen live data
- `google_workspace_tool` voor de output-sheets en overzichten
- Bronnen-library via google-ads-specialist voor bestaande script-voorbeelden

## Integratie met andere skills

- **google-ads-specialist**: strategie en de bronnen-library met publieke script-verzamelingen
- **google-ads-optimize**: verwerkt script-output (n-grams, anomalieën) in de wekelijkse routine
- **google-ads-pmax-shopping**: Merchant Center feed-alerts en brand-traffic-in-PMax bevindingen landen daar
- **google-ads-audit**: audit-bevindingen omzetten in permanente bewaking is de natuurlijke vervolgstap
- **google-ads-value-bidding**: bewaakt de aanlevering van conversiewaarde-data zodra waarde-bidding live is

## Tips

- Monitoring is een product: lever het als vast onderdeel van elke retainer, het maakt jouw werk zichtbaar op dagen dat je niet in het account zit.
- Drie goede scripts die gelezen worden verslaan tien scripts die niemand checkt.
- Zet alert-drempels ruim bij de start en scherp ze aan op basis van fout-positieven; andersom went MP aan ruis.
- Preview-run is geen formaliteit: de meeste script-ongelukken zaten in de eerste geplande run.
- Laat elk analyse-script eindigen in een aanbeveling-kolom; data zonder voorgestelde actie blijft liggen.
- Herbouw geen wiel: bibliotheek eerst, genereren daarna, en gegenereerde code altijd reviewen.
- Eén overzichts-sheet per klant met alle script-output voorkomt dat bevindingen versnipperen over tien tabbladen.
- Nieuwe campagnes of accounts erbij? Direct checken of de lopende scripts ze meepakken.

*Eerste versie: juli 2026. Herzie bij wijzigingen in de Google Ads Scripts API, de DSA-naar-AI-Max migratie of nieuwe PMax/AI Max rapportages.*
