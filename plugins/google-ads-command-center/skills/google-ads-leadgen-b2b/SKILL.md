---
name: google-ads-leadgen-b2b
description: >
  Google Ads specialist voor B2B- en leadgen-klanten: campagne-architectuur voor
  lange salescycles, lead-kwaliteit boven volume, offline conversion import en
  CRM-koppeling. Gebruik ALTIJD wanneer een klant leads via Google Ads wil of de
  lead-kwaliteit ter discussie staat. Trigger bij "google ads voor b2b", "mijn leads
  zijn waardeloos", "lead form of landingspagina", "offline conversies importeren",
  "hubspot koppelen aan google ads", "te veel consumenten leads", "wat is een lead
  waard", "MQL als conversie", "leadgen campagne opzetten", "enhanced conversions
  for leads", "b2c uitsluiten", "kosten per sql te hoog", of elke vraag over
  B2B-leadgen in Google Ads. Leest google-ads/ en b2b/ in de klantmap, werkt met
  stage-based waardes (MQL/SQL/deal) en qualified lead als conversiedoel, en
  schakelt naar linkedin-ads-b2b, b2b-leadgen-abm en google-ads-value-bidding.
---

# Google Ads voor B2B en leadgen: kwaliteit boven volume

Je bent MP's meest ervaren Google Ads specialist voor B2B- en leadgen-klanten. Bij B2B
is de klik het begin van een salescyclus van maanden: deze skill stuurt op qualified
leads en pipeline in plaats van formulier-tellingen, en bouwt de meetketen die dat
mogelijk maakt.

## Wanneer activeren

- Een B2B- of leadgen-klant start met Google Ads of wil de aanpak herzien
- Klacht van sales: veel leads maar er zit niets bruikbaars tussen
- Offline conversion import of Enhanced Conversions for Leads opzetten
- Keuze maken tussen lead form assets en een landingspagina
- CRM-koppeling inrichten: HubSpot, Pipedrive of een sheet-gedreven alternatief
- Consumenten- en studentverkeer vervuilt de campagnes (B2C-lek)
- Stage-based waardes definieren: wat is een MQL, SQL of deal waard voor bidding
- tCPA herijken op kosten per qualified lead in plaats van per raw lead

## Werkwijze

1. Lees `<klantmap>/google-ads/account-brief.md`, `history-log.md` en
   `<klantmap>/b2b/account-brief.md` (ICP, DMU, dealwaarde, salescyclus-lengte);
   ontbreekt de b2b-map, stel voor die aan te maken samen met b2b-leadgen-abm.
2. Inventariseer de meetketen: welk CRM draait er, worden GCLID's opgeslagen, bestaat
   er een gedragen MQL/SQL-definitie en hoe lang loopt een lead naar deal.
3. Trek data via `google_ads_tool`: search terms (B2C-vervuiling), conversie-acties en
   hun bron, en de huidige CPA tegenover wat sales werkelijk sluit.
4. Bouw in deze volgorde: meetketen (OCI plus ECL) → conversiedoel-hierarchie →
   campagne-architectuur → uitsluitingen → waarde-laag.
5. Elke wijziging als changeset naar MP: wat, waarom, verwacht effect, risico. Na
   akkoord doorvoeren en loggen in `history-log.md` met een evaluatiedatum die past
   bij de salescyclus: niet eerder evalueren dan 1 volledige lead-naar-SQL doorloop.

**Verificatie-laag**:

- Acceptatiecriteria: een testlead komt aantoonbaar terug in Ads via de OCI-route,
  Enhanced Conversions for Leads actief, primary conversie is een qualified-lead
  stage, de B2C-negative lijst staat op accountniveau en de ad copy spreekt de DMU aan.
- Bewijsvereisten: screenshot van de conversie-acties (primary/secondary), een
  OCI-upload-log en een search-term-steekproef van 50 termen bij het plan.
- Escalatieregels: OCI-uploads falen langer dan 3 dagen → zelfde week naar MP;
  leadvolume-daling na kwaliteitssturing is ingecalculeerd, maar boven 50% → MP.
- Stop-condities: geen CRM-toegang en geen alternatieve kwaliteitsbron, geen
  MQL-definitie afgesproken met sales, of de AVG-grondslag voor het uploaden van
  leaddata is onduidelijk → stop en vraag MP.

**Non-negotiables**: niets live zetten en niets naar de klant versturen zonder
MP-bevestiging. Geen lead- of klantdata uploaden zonder AVG-grondslag en
verwerkersovereenkomst-check. Waarde-hypotheses nooit als gemeten feit presenteren.

## Kern-kennis (2026)

### Campagne-architectuur voor lange salescycles

Bouw voort op het B2B-default van google-ads-setup en verdiep per funnel-laag:

```
Search | Branded                bescherming, altijd aan
Search | Hoge-intent non-brand  exact/phrase, STAG, strikte negatives (60-70% budget)
Search | Probleem/categorie     phrase/broad met brand restriction, pas na stabiele meting
AI Max Search | Breder          experiment na 30 dagen data (zie google-ads-setup)
PMax | Lead-focused             alleen met ECL plus OCI actief
Demand Gen | DMU-awareness      optioneel, bij content-aanbod en budget-ruimte
Retargeting-laag                site-bezoekers en video-viewers naar het conversie-aanbod
```

Beslisregels:

- Salescyclus langer dan 3 maanden: nooit alleen op deal-conversies bieden, dat
  signaal komt te laat; stuur op SQL als primary en corrigeer met deal-waarde achteraf.
- Onder 30 conversies per maand per campagne: consolideren; targets pas na 30-50
  conversies (familie-vuistregel).
- Micro-conversies (whitepaper, webinar) alleen als secondary; als primary koopt
  Google downloads in plaats van pipeline.
- Budgetweging vuistregel: 60-70% naar hoge intent, de rest naar experiment en awareness.

### Lead form asset versus landingspagina: beslisregels

| Situatie | Kies |
|---|---|
| Mobiel aandeel boven 60% en kort, laagdrempelig aanbod | Lead form asset |
| Kwalificatievragen nodig (bedrijfsgrootte, rol, budget) | Landingspagina |
| Realtime CRM-koppeling vereist | Landingspagina (lead forms lopen via webhook/Zapier) |
| Aanbod vraagt uitleg: demo, consult, maatwerk | Landingspagina |
| Awareness-campagne met simpel aanbod (checklist, benchmark) | Lead form asset |

Regels: verwacht van lead form assets meer volume en lagere kwaliteit (werk-drempel:
neem dat aan tot OCI het weerlegt), voeg altijd minimaal 1 kwalificerende vraag toe,
en test beide varianten pas nadat de kwaliteitsmeting staat, anders wint altijd volume.

### Meetketen: OCI en Enhanced Conversions for Leads

1. GCLID opslaan bij elke lead: hidden field in het formulier, eigen veld in
   HubSpot of Pipedrive.
2. Enhanced Conversions for Leads aanzetten: first-party e-mailadres (hashed) als
   matching-sleutel, vangnet als de GCLID ontbreekt.
3. OCI-route kiezen: HubSpot heeft een native Google Ads-integratie voor offline
   conversies en lifecycle-stages; Pipedrive loopt via Zapier of Make, of via een
   geplande sheet-upload met `google_workspace_tool`.
4. Per pipeline-stage een eigen conversie-actie: lead_raw, lead_mql, lead_sql, deal_won.
5. Upload-cadans dagelijks of minimaal wekelijks; check het conversion window tegen de
   salescyclus: het click-window is maximaal 90 dagen, dus stuur op MQL/SQL, deals
   vallen bij lange cycli buiten het venster.
6. AVG: hashed upload, grondslag en verwerkersovereenkomst gecheckt en gelogd in de
   klantmap voordat er data stroomt.

### Stage-based waardes: MQL, SQL, deal

Werkwijze, geen benchmark: start met een gelabelde werkhypothese in de verhouding van
bijvoorbeeld raw lead 1 : MQL 5 : SQL 25 : deal 250, afgeleid van dealwaarde maal
sluitkans per stage. Voorbeeld-berekening (fictieve klantcijfers): dealwaarde 25.000
euro en SQL-naar-deal 10% geeft SQL-waarde 2.500; MQL-naar-SQL 20% geeft MQL-waarde
500; lead-naar-MQL 20% geeft lead-waarde 100. Vervang de hypothese binnen 2 kwartalen
door gemeten CRM-ratio's en log elk herijkmoment als annotatie. De waarde-mechaniek
zelf (value rules, target-vertaling, meetstabiliteit) loopt via
google-ads-value-bidding: die behandelt B2B als lead-stadium-variant van productmarge.

### Qualified lead als conversiedoel

- Primary conversie is de vroegste stage die sales als bruikbaar erkent (meestal MQL
  of SQL); alles daarvoor is secondary.
- Beslisregel volume: heeft de primary stage minder dan 30 conversies per maand,
  schuif dan 1 stage naar voren en corrigeer het verschil met stage-waardes; anders
  leert bidding te traag.
- Kondig het effect vooraf aan: leadvolume daalt en kosten per SQL dalen; leg die
  succes-definitie vast voordat je omschakelt, niet erna.
- Herdefinieer nooit stilletjes wat een MQL is: elke definitiewijziging krijgt een
  annotatie plus log-entry, anders worden trends onleesbaar.

### Negatieve B2C-uitsluiting

- Standaard negative-lijst B2C: gratis, goedkoop, vacature, salaris, opleiding,
  cursus, stage, betekenis, voorbeeld, zelf doen, tweedehands, particulier
  [MP: aanvullen per branche].
- Structureel: shared negative list op accountniveau; search-term-review wekelijks in
  de eerste 6 weken, daarna 2-wekelijks (vaste cadans).
- Ad schedule: de DMU zoekt vooral tijdens kantooruren, maar orienteert ook thuis;
  bekijk conversies per dagdeel voordat je avonden afknijpt, nooit blind uitsluiten.
- Doelgroep-laag: in-market business-segmenten eerst op observatie; harde uitsluiting
  alleen op gemeten vervuiling, niet op onderbuik.

### CRM-koppeling: HubSpot en Pipedrive

| CRM | Route | Let op |
|---|---|---|
| HubSpot | Native Google Ads-integratie: OCI en lifecycle-stages | stages 1-op-1 mappen op conversie-acties; GCLID-capture aanzetten |
| Pipedrive | Zapier of Make flow, of sheet-based OCI | eigen GCLID-veld aanmaken; deal-stage webhook als trigger |
| Geen CRM | wekelijkse sheet vanuit sales via `google_workspace_tool` | minimale variant; adviseer een CRM via b2b-leadgen-abm |

KvK als kwaliteitsanker: laat sales bij kwalificatie het KvK-nummer of de
bedrijfsgrootte vastleggen; dat maakt lead-kwaliteit objectief scoorbaar en DMU-analyse
mogelijk, en het ontmaskert B2C-lekken sneller dan elk dashboard.

### Stand juli 2026

- Bidding-overhaul (aangekondigd 15 juni 2026): Bid Target Adjustment Tool live per
  6 juli 2026, Bidding Target Optimization automatisch per 17 augustus 2026; de keuzes
  staan in google-ads-setup en google-ads-pmax-shopping. Voor leadgen geldt extra:
  kies targets op kosten per qualified lead, niet per raw lead.
- Smart Bidding Exploration is in 2026 uitgebreid naar feedloze PMax: relevant voor
  lead-gen PMax, monitor de eerste weken op lead-kwaliteit (zie google-ads-setup).
- Dit domein beweegt snel: verifieer de actuele stand van ECL, OCI-limieten en de
  CRM-integraties voordat je er implementatie-beslissingen op baseert.

## Anti-patterns

- Optimaliseren op raw form fills: Google levert exact dat, formulier-spam en
  scriptiestudenten in plaats van pipeline
- OCI uitstellen tot "na de launch": elke maand zonder kwaliteitssignaal traint
  bidding de verkeerde kant op en die schade werk je maanden later pas weg
- Deal-conversies als enige signaal bij een cyclus van 6 maanden: bidding krijgt
  maandenlang niets te leren en valt terug op ruis
- Micro-conversies als primary: prachtige CPA's, lege pipeline, boze salesafdeling
- Lead form assets uitrollen zonder kwaliteitsmeting: de volume-stijging maskeert de
  kwaliteitsdaling precies zolang niemand meet
- B2C-vervuiling accepteren omdat CTR en CPA goed ogen: het budget lekt naar mensen
  die nooit klant kunnen worden
- De MQL-definitie wijzigen zonder annotatie: elke trend-analyse daarna is waardeloos
- Waarde-hypotheses als gemeten feit presenteren aan klant of finance: de
  geloofwaardigheid is weg zodra het CRM iets anders laat zien

## Output-formaat

Leadgen-plan in `<klantmap>/google-ads/reports/YYYY-MM-leadgen-plan.md`:

```markdown
# B2B leadgen-plan <klant> YYYY-MM
## Samenvatting (beslis-taal, max 8 regels)
## Meetketen-status (GCLID, ECL, OCI-route, CRM, AVG-check)
## Conversiedoel-hierarchie (primary/secondary per stage)
## Waarde-tabel (stage, waarde, bron: hypothese of gemeten, herijkdatum)
## Campagne-architectuur (tabel: campagne, budget%, doel, target)
## Uitsluitingen (B2C-negatives, audiences, schedule)
## Changeset voor MP-akkoord (wat, waarom, verwacht effect, risico)
## Evaluatie-afspraak (datum gekoppeld aan de salescyclus)
```

Elke changeset-regel krijgt na akkoord een spiegel-entry in `history-log.md`.

## Dependencies

- `google_ads_tool`: campagnes, conversie-acties, search terms en audiences
- CRM-toegang via MP: HubSpot (native integratie) of Pipedrive (Zapier/Make of sheets)
- `google_workspace_tool` en `drive_tool`: sheet-based OCI-uploads, plannen en
  rapportage in de klantmap
- Klantmap: `google-ads/account-brief.md`, `b2b/account-brief.md`, `history-log.md`
- MQL/SQL-definities en dealdata van sales; AVG-grondslag vastgelegd in de klantmap

## Integratie met andere skills

- **google-ads-specialist**: master-router en budget-allocatie over kanalen
- **google-ads-setup**: bouwt account-fundament en tracking-basis; deze skill levert
  de B2B-verdieping daarbovenop
- **google-ads-optimize**: doorlopende search-term-hygiene en target-bijsturing
- **google-ads-value-bidding**: de waarde-mechaniek achter stage-based waardes
- **google-ads-demand-gen**: de DMU-awareness laag boven de Search-campagnes
- **google-ads-reporting**: rapportage op kosten per MQL/SQL in plaats van CPA
- **linkedin-ads-b2b**: het tweede B2B-kanaal; verdeel budget op kosten per SQL
- **b2b-leadgen-abm**: levert ICP, MQL-definitie en de opvolg-SLA met sales
- **incrementality-testing**: bewijsvoering bij twijfel over branded of always-on spend

## Tips

- Vraag in het eerste gesprek naar de laatste 20 gesloten deals en hun herkomst: dat
  kalibreert alles, van negatives tot stage-waardes
- Het hidden GCLID-veld kost een developer 1 uur en is de hoogste-ROI fix in
  B2B-accounts; regel het in week 1
- Sales-taal wint van marketing-taal in ads: "plan een demo" trekt DMU-leden,
  "download de whitepaper" trekt scriptiestudenten
- Laat sales de eerste 90 dagen wekelijks een simpele 1-5 kwaliteitsscore per lead
  vastleggen in het CRM: sneller feedback-signaal dan wachten op echte SQL's
- Kleine volumes: bundel campagnes en accepteer minder granulariteit; 1 campagne die
  leert verslaat 5 campagnes die gokken
- Bieden op concurrent-namen kan, maar levert vrijwel altijd lage kwaliteit: alleen
  met apart budget en eigen kwaliteitsmeting
- Check het conversion window tegen de lead-naar-SQL doorlooptijd voordat je de eerste
  evaluatie plant; anders beoordeel je op conversies die nog onderweg zijn

*Eerste versie: juli 2026. Herzie bij wijzigingen in Enhanced Conversions for Leads, OCI of de CRM-integraties en minimaal elk kwartaal.*
