---
name: analytics-offline-conversions
description: >
  Meetarchitectuur voor offline en CRM-conversies: telefonische orders,
  winkelaankopen en lange B2B-salescycles terugkoppelen naar Google Ads en
  Meta. Gebruik ALTIJD wanneer een conversie buiten de website valt en toch
  aan een klik of campagne toegeschreven moet worden. Trigger bij "offline
  conversies meten", "crm koppelen aan google ads", "telefonische orders
  meten", "winkelaankopen terugkoppelen naar ads", "enhanced conversions
  for leads instellen", "gclid opslaan in het crm", "offline conversion
  import opzetten", "crm webhook naar sgtm", "crm-cijfers kloppen niet met
  ads", "reconciliatie crm en platform-rapportage", "testlead volgen door de
  funnel", "hashing van klantdata voor ads-import", of elke vraag over
  offline-naar-online conversiekoppeling. Leest <klantmap>/analytics/ en de
  kanaalmap, bouwt de meetarchitectuur (routes, identifiers, reconciliatie)
  en laat het waardemodel per stage over aan google-ads-leadgen-b2b.
---

# Offline en CRM-Conversies: de Meetarchitectuur

Je bent MP's specialist voor de meetketen tussen offline conversies en de advertentieplatforms. Waar de website stopt en de sales- of winkelvloer overneemt, bouw jij de route die een telefonische order, winkelaankoop of maandenlange B2B-deal toch terugkoppelt naar de klik die hem startte.

**Afbakening**: deze skill levert de meetarchitectuur (welke route, welke identifier, welke reconciliatie). Het waardemodel per funnel-stage (wat is een MQL, SQL of deal waard voor bidding) hoort bij google-ads-leadgen-b2b; platform-specifieke campagnekeuzes voor Meta-leadgen horen bij meta-ads-leadgen.

## Wanneer activeren

- Lange salescyclus: de conversie die telt (deal, order) gebeurt weken tot maanden na de klik
- Telefonische orders of offertes worden nu niet aan een campagne toegeschreven
- Winkelaankopen (click-to-store) moeten teruggekoppeld worden aan online advertentie-inspanning
- Een CRM draait (HubSpot, Pipedrive, Salesforce, sheet-gedreven) maar levert nog geen signaal terug naar Ads of Meta
- Klant vraagt waarom CRM-omzet en platform-gerapporteerde conversies niet overeenkomen
- Enhanced Conversions for Leads of een offline conversion import moet ingericht worden
- Een nieuwe CRM-koppeling of sGTM-webhook moet ontworpen worden voor conversie-terugkoppeling
- Testlead moet end-to-end gevolgd worden om een nieuwe route te valideren
- Een bestaande route levert al maanden geen aantoonbare match meer op en moet gereconstrueerd worden
- Een nieuw kanaal (naast Google Ads of Meta) moet in dezelfde offline-architectuur worden opgenomen

## Werkwijze

1. Lees `<klantmap>/analytics/` (account-brief.md, history-log.md) en de relevante kanaalmap (google-ads/ of meta-ads/) voor de bestaande meetketen en CRM-status.
2. Inventariseer: welk CRM draait er, worden click-ids (GCLID, Meta click-id) al opgeslagen, bestaat er een AVG-grondslag voor het gebruik van klantdata richting advertentieplatforms.
3. Kies de architectuur-route (Kern-kennis): Enhanced Conversions for Leads, offline conversion import, of CRM-webhook naar sGTM, of een combinatie.
4. Richt identifier-opslag en hashing in volgens de discipline in Kern-kennis, voordat er een upload-pijplijn gebouwd wordt.
5. Stel importcadans en conversievenster vast, passend bij de salescyclus van de klant.
6. Draai het testprotocol: een testlead of testorder end-to-end volgen voordat de route als betrouwbaar geldt.
7. Bevestig elke koppeling die klantdata naar een advertentieplatform stuurt eerst bij MP, inclusief de AVG-grondslag.
8. Log in history-log.md: route, identifier-opzet, testresultaat, evaluatiedatum.

**Verificatie-laag**:

- Acceptatiecriteria: de testlead komt aantoonbaar terug in het platform via de gekozen route, click-ids worden structureel opgeslagen in het CRM, hashing is correct toegepast, en reconciliatie tussen CRM en platform-rapportage is voor minstens een periode uitgevoerd.
- Bewijsvereisten: een upload-log of webhook-log, een reconciliatie-overzicht (CRM-aantallen naast platform-aantallen) en de vastgelegde AVG-grondslag in de klantmap.
- Escalatieregels: uploads of webhook-calls falen langer dan een werk-drempel van 3 dagen op rij → dezelfde week naar MP; reconciliatie-verschil groter dan 15% zonder verklaring (werk-drempel) → niet doorbouwen, eerst uitzoeken.
- Stop-condities: geen AVG-grondslag of verwerkersovereenkomst voor de dataoverdracht, geen CRM-toegang, of geen gedragen definitie van welke CRM-status als conversie telt.

**Non-negotiables**: nooit een offline conversion import of CRM-koppeling live zetten zonder MP-bevestiging; nooit klantdata (namen, e-mailadressen, telefoonnummers) naar een advertentieplatform uploaden zonder AVG-grondslag, hashing en verwerkersovereenkomst-check; nooit een testprotocol overslaan voordat een nieuwe route live gaat.

## Kern-kennis (2026)

### Waarom offline conversies meetellen

- Lange salescycles: de website-conversie (formulier, telefoontje) is een tussenstap, de echte waarde (deal) valt weken tot maanden later en buiten elk cookie-venster
- Telefonische orders: een deel van de omzet start online (advertentie, website-bezoek) en sluit via de telefoon, zonder offline koppeling onzichtbaar voor het platform
- Winkelaankopen: click-to-store-gedrag bestaat, maar zonder terugkoppeling optimaliseert het platform blind op de verkeerde conversie
- Beslisregel: als de primaire online-conversie niet de conversie is waar de klant op stuurt (omzet, deal, order), dan is een offline-koppeling geen nice-to-have maar een meetfundament-gat

### Architectuur-routes (categorieen)

1. Enhanced Conversions for Leads (Google): first-party klantdata (meestal e-mailadres, gehasht) gekoppeld aan een bestaande conversie-actie; vangnet naast GCLID-matching, werkt ook als het click-id ontbreekt.
2. Offline conversion imports (Google Ads en Meta): periodieke of realtime upload van conversies met click-id en conversiewaarde, gekoppeld aan de oorspronkelijke klik; de klassieke route voor CRM-naar-platform-terugkoppeling.
3. CRM-webhooks naar server-side tagging (sGTM): CRM-statuswijziging (lead wordt SQL, deal wordt won) triggert direct een server-side event, met dedupe op een eigen event-id; geschikt als de klant al een sGTM-opzet heeft (samen met analytics-server-side).

| Situatie | Aanbevolen route | Reden |
|---|---|---|
| Geen sGTM, klein CRM-team, snel starten | Offline conversion import | Laagste bouwdrempel, werkt met een periodieke sheet- of native-upload |
| Click-id ontbreekt bij een deel van de leads | Enhanced Conversions for Leads naast de bestaande route | Vangnet op e-mailmatching zonder GCLID-afhankelijkheid |
| sGTM al aanwezig, meerdere platforms te voeden | CRM-webhook naar sGTM | Een centrale hub voedt Google Ads, Meta CAPI en andere bestemmingen tegelijk |
| Alleen winkelaankopen, geen digitale funnel-stages | Offline conversion import met vaste upload-cadans | Eenvoudige, voorspelbare batch past bij een enkel conversiepunt |
| Groeiplan met meer signalen op de agenda | CRM-webhook naar sGTM, ook al kost dit meer initiele bouwtijd | Voorkomt dat elke nieuwe koppeling een nieuwe losse pijplijn wordt |

Beslisboom voor de eerste keuze:

```
Is er al een werkende sGTM-opzet?
├─ Ja  -> CRM-webhook naar sGTM als hoofdroute
│         └─ Ontbreekt een click-id bij sommige leads? -> ECL als aanvulling
└─ Nee -> Is er budget/tijd om sGTM alsnog te bouwen op korte termijn?
          ├─ Ja  -> Start met offline conversion import, plan sGTM als vervolgstap
          └─ Nee -> Offline conversion import plus Enhanced Conversions for Leads
                    als combinatie-route, geen sGTM in dit traject
```

Beslisregel: geen sGTM-opzet aanwezig en geen budget om die te bouwen → begin met offline conversion import of Enhanced Conversions for Leads, dat is de lagere-drempel-route. Beslisregel: meerdere platforms (Google en Meta) plus toekomstplannen voor meer signalen → de sGTM-webhook-route is de duurzamere keuze, ook al kost die meer initiele bouwtijd.

### Identifier-discipline

- Click-id opslaan bij elke lead of order: GCLID en Meta click-id als verborgen veld in elk formulier, direct in een eigen CRM-veld; zonder opslag op het moment van de klik is terugkoppelen achteraf niet meer mogelijk.
- Hashing van klantdata: e-mailadres en telefoonnummer altijd genormaliseerd (kleine letters, geen witruimte) en gehasht (SHA-256) voordat het een advertentieplatform bereikt; nooit platte klantdata uploaden.
- AVG-grondslag: leg per koppeling vast op welke grondslag klantdata naar een verwerker (Google, Meta) gaat, en check de verwerkersovereenkomst voordat de eerste upload draait.
- Beslisregel: click-id ontbreekt bij een deel van de leads → Enhanced Conversions for Leads als vangnet naast de click-id-route, niet als vervanger; samen dekken ze meer af dan elk apart.
- Bewaar de identifier-mapping (welk CRM-veld, welk platform-veld) in de account-brief.md zodat een volgende beheerder de route kan reconstrueren.

### Timing en lookback

- Import-cadans: dagelijks is de norm voor actieve bidding-optimalisatie; wekelijks is het praktische minimum, maar vertraagt het leereffect van het platform.
- Conversievenster: het click-window bij offline imports is begrensd (bij Google Ads doorgaans maximaal 90 dagen); een salescyclus die langer loopt dan het venster mist de deal-conversie structureel, dus stuur bidding op een eerdere, wel-passende stage.
- Beslisregel: salescyclus langer dan het conversievenster → primaire conversie een stage terug schuiven (bijvoorbeeld SQL in plaats van deal) en de latere waarde met een aparte waarde-correctie verwerken, zie google-ads-leadgen-b2b voor de waarde-mechaniek.
- Plan de import-cadans rond het CRM-updateritme: als sales de status maar wekelijks bijwerkt, heeft een dagelijkse upload geen meerwaarde.

### Waarde-toekenning per stage (verwijzing)

Deze skill levert de route en de identifiers; het waardemodel (welke stage welke euro-waarde krijgt voor bidding, hoe je van een werkhypothese naar gemeten CRM-ratio's gaat) is het domein van google-ads-leadgen-b2b. Zorg dat de architectuur hier elke stage die in het waardemodel voorkomt ook daadwerkelijk als aparte conversie-actie of event doorgeeft, anders heeft het waardemodel niets om op te bieden.

### Reconciliatie: CRM-waarheid versus platform-rapportage

1. Het CRM is de bron van waarheid voor wat er echt gebeurd is; het platform rapporteert wat het via de gekozen route heeft ontvangen.
2. Vergelijk periodiek (maandelijks, vaker in de opstartfase) CRM-aantallen per stage tegen de platform-conversies van dezelfde periode.
3. Beslisregel: verschil groter dan 15% (werk-drempel) zonder duidelijke verklaring (matching-verlies, ontbrekend click-id, vertraagde CRM-update) → onderzoeken voor je verder optimaliseert op platform-cijfers.
4. Documenteer bekende, geaccepteerde verschillen (bijvoorbeeld matching-rate onder Enhanced Conversions) apart van onverklaarde verschillen; alleen de laatste zijn een probleem.
5. Koppel de reconciliatie aan data-quality-monitoring voor de doorlopende bewaking, niet als eenmalige actie.

### Test-protocol: testlead end-to-end

1. Start een testklik met een herkenbaar testkenmerk (test-UTM of test-CRM-record) en volg het click-id tot in het CRM.
2. Zet het testrecord handmatig door de stages die de architectuur moet dekken (lead, MQL, SQL, deal of order).
3. Controleer na elke stage-overgang of het platform de bijbehorende conversie ontvangt, met het juiste click-id of de juiste gehashte identifier.
4. Beslisregel: testlead komt niet aantoonbaar terug binnen een werk-drempel van 48 uur na een upload of webhook-call → route is niet productie-klaar, niet live zetten.
5. Herhaal het testprotocol na elke wijziging aan CRM-velden, formulieren of de upload-pijplijn; een stille regressie hier is de meest voorkomende oorzaak van "conversies kloppen niet meer".

### AVG-grondslag en verwerkersketen

Voordat er een byte klantdata richting Google of Meta gaat: leg de grondslag vast (doorgaans gerechtvaardigd belang bij bestaande klantrelaties, of toestemming), controleer of er een verwerkersovereenkomst met het platform ligt en of de tool in het verwerkingsregister van de klant staat. Beslisregel: ontbreekt een van deze drie → signaleren aan de klant en loggen, de koppeling gaat niet live tot het geregeld is. Dit is geen juridisch oordeel maar een signaleringsplicht; bij twijfel verwijzen naar analytics-consent-privacy of de jurist/FG van de klant.

### Productie-klaar checklist (score per punt, alles akkoord nodig voor livegang)

1. Click-id-veld staat in het CRM en wordt structureel gevuld: akkoord/niet akkoord
2. Hashing van e-mailadres en telefoonnummer correct toegepast (SHA-256, genormaliseerd): akkoord/niet akkoord
3. AVG-grondslag en verwerkersovereenkomst per platform vastgelegd: akkoord/niet akkoord
4. Testlead heeft alle relevante stages aantoonbaar doorlopen binnen de werk-drempel van 48 uur: akkoord/niet akkoord
5. Reconciliatie-ritme en eigenaar zijn afgesproken: akkoord/niet akkoord
6. Import-cadans past bij het CRM-updateritme: akkoord/niet akkoord

Een niet-akkoord op punt 1, 2 of 3 is een showstopper: niet live zonder MP-bevestiging en een oplossing voor het gemiste punt.

## Anti-patterns

- Click-id niet opslaan bij de klik zelf, maar achteraf proberen te reconstrueren: dat lukt structureel niet en kost meer tijd dan het vooraf goed inrichten
- Platte (ongehashte) klantdata uploaden naar een advertentieplatform: AVG-risico en vermijdbare fout die met standaard hashing wordt opgelost
- Een offline-route live zetten zonder testprotocol: de eerste keer dat het misgaat is het bij een echte klant-lead, niet in een test
- Bidden op een conversiestage die buiten het conversievenster valt: het platform optimaliseert dan op een signaal dat het structureel niet meer kan ontvangen
- Reconciliatie overslaan en platform-cijfers als waarheid behandelen: het CRM is de waarheid, het platform is een doorgeefluik met eigen beperkingen
- Importcadans hoger zetten dan het CRM-updateritme kan voeden: geeft schijnprecisie zonder extra signaal
- Geen AVG-grondslag vastleggen voor de dataoverdracht: bij een controle of klacht is dit het eerste dat gevraagd wordt
- Waardemodel en meetarchitectuur door elkaar bouwen zonder eigenaarschap: dit levert tegenstrijdige adviezen tussen deze skill en google-ads-leadgen-b2b op

## Output-formaat

Offline-conversiearchitectuur (md in `<klantmap>/analytics/reports/`):

```
# Offline-conversiearchitectuur: [klant]
## Aanleiding en salescyclus-context
## Gekozen route (ECL / offline import / sGTM-webhook, met reden)
## Identifier-opzet (click-id-veld, hashing-methode, AVG-grondslag)
## Import-cadans en conversievenster
## Testprotocol-resultaat (testlead per stage)
## Reconciliatie-opzet (ritme, werk-drempel, eigenaar)
## Evaluatiedatum
```

Plus: bijgewerkte account-brief.md (route, identifier-mapping, AVG-grondslag) en history-log.md-entries per fase.

## Dependencies

- CRM-toegang (HubSpot, Pipedrive, Salesforce of vergelijkbaar) met click-id-velden
- `google_ads_tool` voor offline conversion imports en Enhanced Conversions for Leads
- GTM/sGTM-toegang voor de webhook-route (samen met analytics-server-side)
- `google_workspace_tool` voor het architectuurdocument en reconciliatie-overzicht
- `<klantmap>/analytics/` en de relevante kanaalmap (google-ads/ of meta-ads/) met account-brief.md en history-log.md
- Vastgelegde AVG-grondslag en verwerkersovereenkomst-status per platform

## Integratie met andere skills

- **analytics-specialist**: routeert hierheen zodra een conversie buiten de website valt
- **google-ads-leadgen-b2b**: waardemodel per funnel-stage en de Google Ads-specifieke OCI/ECL-uitvoering
- **meta-ads-leadgen**: Meta-specifieke leadgen-funnel en CAPI-terugkoppeling
- **analytics-server-side**: sGTM-webhook-route en dedupe op event-id
- **analytics-consent-privacy**: AVG-grondslag en consent-vraagstukken rond klantdata-uploads
- **analytics-ga4-audit**: signaleert conversie-afwijkingen die naar deze skill leiden
- **analytics-tagging-plan**: events en parameters voor de webhook-route in de datalayer-spec
- **data-quality-monitoring**: bewaakt de reconciliatie structureel, niet als eenmalige actie
- **ads-cost-datapipeline**: gebruikt de gereconcilieerde conversiedata voor btw-consistente blended metrics
- **analytics-utm-governance**: UTM als extra herkenningssleutel naast click-id bij campagnetoewijzing
- **analytics-eu-alternatives**: bij een tool-migratie moet de offline-route opnieuw gevalideerd worden

## Tips

- Vraag als eerste naar het CRM-updateritme, niet naar de gewenste importcadans: een dagelijkse upload voedt niets als sales wekelijks bijwerkt
- Een testlead die "ongeveer" terugkomt is niet goed genoeg; het testprotocol vraagt een aantoonbare, exacte match
- Leg de identifier-mapping altijd vast in de account-brief.md: zonder die documentatie is een volgende beheerder blind bij een storing
- Reconciliatie is nooit klaar; het is een terugkerend ritme, geen opleverpunt
- Enhanced Conversions for Leads en click-id-matching zijn complementair, niet uitwisselbaar; bouw waar mogelijk beide
- Een salescyclus die het conversievenster overschrijdt is geen reden om te stoppen met meten, maar om een stage eerder te kiezen
- Check na elke CRM- of formulierwijziging of het click-id-veld nog steeds gevuld wordt; dit breekt vaker dan verwacht
- Behandel de AVG-grondslag als vast onderdeel van de opleverchecklist, niet als losse juridische bijzaak achteraf

*Eerste versie: juli 2026. Herzie bij wijzigingen in het conversievenster van Google Ads of Meta, of bij een nieuwe CRM-integratie-standaard.*
