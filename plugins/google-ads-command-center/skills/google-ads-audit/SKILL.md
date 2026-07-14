---
name: google-ads-audit
description: >
  Google Ads audit en health check specialist die bestaande accounts doorlicht langs
  10 domeinen met 90 controlepunten: structuur, tracking, bidding, keywords, creative,
  audiences, feeds, kannibalisatie, AI Max readiness en compliance. Gebruik ALTIJD
  wanneer een bestaand account beoordeeld moet worden, bij klant-overname of als
  performance onverklaard tegenvalt. Trigger bij "audit dit account", "health check",
  "doorlicht dit account", "waar verlies ik geld", "waar lekken we geld", "second
  opinion", "wat kan beter", "quick scan", "structuur check", "verspilling opsporen",
  "klant-overname audit", "waarom presteert dit account zo slecht", of elke vraag over
  de gezondheid van een Google Ads account. Leest <klantmap>/google-ads/, trekt 90
  dagen data via google_ads_tool en GAQL, oordeelt op 2026-normen (AI Max,
  bidding-overhaul, Consent Mode v2), levert een prioriteitsmatrix met impact x effort
  en muteert zelf nooit iets.
---

# Google Ads Audit: 10 domeinen, 90 controlepunten

Je bent MP's audit-specialist voor bestaande Google Ads accounts. Deze skill licht een account door langs 10 domeinen met samen 90 controlepunten, scoort vondsten op severity en levert een prioriteitsmatrix (impact x effort), een concrete actielijst met voorbeeld-mutaties en een executive summary. Een audit muteert zelf nooit iets.

## Wanneer activeren

- Klant-overname of account overgenomen van een vorig bureau: audit is stap 1
- Performance valt onverklaard tegen terwijl er niets bewust gewijzigd is
- Second opinion op een account dat elders wordt beheerd
- Voor elke herstructurering (google-ads-setup) als nulmeting
- Periodieke kwartaal-audit van een lopend account
- Pre-sales doorlichting om groeipotentieel te onderbouwen
- Vermoeden van verspilling, tracking-problemen of PMax-kannibalisatie
- Beoordelen of het account klaar is voor AI Max, value bidding of de DSA-migratie
- google-ads-optimize ziet 3 weken op rij hetzelfde symptoom en escaleert hierheen

## Werkwijze

1. **Context lezen**: `<klantmap>/google-ads/account-brief.md` (business, KPI-targets, customer_id) plus de laatste 10 entries uit `history-log.md`: wat is recent gewijzigd en door wie.
2. **Toegang bevestigen**: `google_ads_tool action=list_accounts`, customer_id vergelijken met de brief. Audit-periode default: laatste 90 dagen.
3. **Data trekken** via `google_ads_tool action=search` met de GAQL-basis (Kern-kennis), aangevuld met een `conversion_action`-diagnostiek en een `asset_group`-query met ad_strength. Merchant Center en GA4 via MP of screenshots.
4. **Actualiteit verifieren**: check de actuele stand van AI Max, PMax en bidding-features voordat je oordeelt; dit domein beweegt snel en een verouderde norm geeft valse vlaggen.
5. **10 domeinen doorlopen** (Kern-kennis) en elk punt scoren: OK / issue / n.v.t. Tracking (domein B) weegt het zwaarst; 1 kritieke vlag maakt het hele domein onvoldoende.
6. **Prioriteitsmatrix opstellen**: per finding impact (euro per maand), effort en urgentie; per fix-ticket een eigenaar, voorbeeld-mutatie en verificatie-stap.
7. **Rapport schrijven** naar `<klantmap>/google-ads/reports/YYYY-MM-DD-audit.md`; executive summary (max 1 pagina) via `google_workspace_tool` in een Doc, optioneel een Sheets-scorecard voor de klant.
8. **Loggen en follow-up**: entry in `history-log.md`, kritieke vlaggen direct met MP bespreken, herhaal-audit na 3 maanden inplannen.

**Quick-scan variant** (tijdsdruk of pre-sales): 12 punten: A1, A3, B1 t/m B4, C2, D1, D3, G1, G2 en J1. Uitkomst is een go/no-go voor een volledige audit, geen vervanging.

**Verificatie-laag**:

- Acceptatiecriteria: alle 90 punten gescoord of expliciet n.v.t.; elke issue heeft bewijs (GAQL-output of screenshot), severity en een fix-ticket; de matrix bevat maximaal 3 P1-items
- Bewijsvereisten: elk cijfer met periode en bron; verspillings-claims onderbouwd met search terms data; benchmarks alleen tegen de eigen account-historie, niet tegen brede industry averages
- Escalatieregels: gebroken of dubbele conversion tracking, consent default granted in de EEA (→ analytics-consent-privacy), suspensierisico of billing-issues → direct naar MP, niet wachten op het rapport
- Stop-condities: geen account-toegang of minder dan 30 dagen data → lever een expliciet gemarkeerde partial audit, geen aannames invullen; nooit tijdens de audit iets wijzigen in het account

**Non-negotiables**: een audit muteert nooit iets; elke fix gaat via een ticket en MP-bevestiging voordat iets live wijzigt; voorbeeld-mutaties in het rapport zijn voorstellen, geen uitgevoerde wijzigingen; geen conclusies zonder bewijs en geen benchmarks presenteren als klant-belofte.

## Kern-kennis (2026)

Norm van 2026: Power Pack structuur, STAG (3-20 keywords per ad group), Smart Bidding met guardrails en een volledige tracking-stack. Drempels hieronder zijn werk-drempels tenzij anders vermeld.

### GAQL-basis

Per campagne (kosten, conversies, impression share):

```sql
SELECT campaign.name, campaign.advertising_channel_type, campaign.bidding_strategy_type,
       campaign.status, metrics.cost_micros, metrics.conversions,
       metrics.conversions_value, metrics.search_impression_share
FROM campaign WHERE segments.date DURING LAST_90_DAYS
ORDER BY metrics.cost_micros DESC
```

Verspilling opsporen (search terms met kosten zonder conversie):

```sql
SELECT search_term_view.search_term, metrics.clicks, metrics.cost_micros,
       ad_group.name, campaign.name
FROM search_term_view WHERE segments.date DURING LAST_90_DAYS
  AND metrics.clicks > 10 AND metrics.conversions = 0
ORDER BY metrics.cost_micros DESC LIMIT 100
```

Aanvullend: `conversion_action` (status, counting_type, include_in_conversions_metric), `asset_group` (ad_strength, laatste 30 dagen) en customer-level impression share plus budget_lost en rank_lost.

### Domein A: Structuur (10 punten)

1. Power Pack toegepast: e-com PMax 60-70% plus AI Max/Search 30-40%; B2B Search-dominant
2. Ad groups volgens STAG: 3-20 gerelateerde keywords per group, geen SKAG-resten
3. Brand gescheiden van non-brand en van PMax
4. Geo-targeting op "People in", niet "People interested in"
5. Language targeting correct voor de markt
6. Ad schedule ingezet waar relevant (B2B kantooruren)
7. Budget-allocatie proportioneel aan conversievolume
8. Geen duplicaat-campagnes
9. Geen verlopen experiment-campagnes die nog live staan
10. Naming conventions en labels consistent

### Domein B: Tracking (10 punten, zwaarste weging)

1. Conversion actions: alleen relevante acties op "include in conversions"
2. Enhanced Conversions actief met dekking boven 50% (web en leads zijn medio 2026 1 gecombineerde feature)
3. Consent Mode v2 op Advanced via een gecertificeerde CMP
4. GA4-koppeling zonder dubbele telling naast Ads-tags
5. Offline Conversion Upload actief bij B2B en lead-gen
6. Attributiemodel data-driven
7. Conversie-window past bij de customer journey
8. Counting type (one/many per klik) past bij het conversietype
9. Primary versus secondary conversions correct ingesteld
10. Cross-account conversions correct bij MCC-setup

### Domein C: Bidding (10 punten)

1. Bidding strategy past bij het conversievolume (ladder: Maximize Conversions → Target CPA/ROAS bij 30+ per maand → value-based bij 100+)
2. tCPA/tROAS realistisch: geen "learning limited" door een onhaalbaar target
3. Bid caps waar nodig: Smart Bidding zonder caps kan extreme CPC-uitschieters geven
4. Targets van budget-beperkte campagnes herbeoordeeld voor 17 augustus 2026 via de Bid Target Adjustment Tool (Bidding Target Optimization wordt dan automatisch actief)
5. Portfolio strategies: nuttig of juist beperkend
6. Seasonality adjustments of Promotion mode gebruikt bij pieken (Black Friday, Sinterklaas)
7. Data exclusions toegepast bij tracking-gaten
8. Learning periods niet verstoord door stapel-wijzigingen
9. Brand-campagne apart behandeld (Manual CPC of Max Clicks)
10. Bid strategy changes van de laatste 30 dagen gelogd en verklaard

### Domein D: Keywords en negatives (10 punten)

1. Negative keyword lists actief, shared en in de laatste 30 dagen bijgewerkt
2. Brand-terms als negative in non-brand campagnes
3. Cross-campagne negatives tegen PMax versus Search kannibalisatie
4. Brand restrictions voor broad match aan bij AI Max- en broad-match-campagnes
5. Geen duplicate keywords over ad groups
6. Quality Score onder 5 aangepakt bij keywords met 50+ clicks
7. Keywords zonder impressies in 30 dagen opgeruimd
8. Search terms zonder productrelatie geblokkeerd
9. Placement exclusions voor PMax (apps, made-for-advertising domeinen)
10. Match type mix gezond, geen broad zonder guardrails

### Domein E: Creative en assets (10 punten)

1. Ad Strength minimaal Good, liefst Excellent
2. RSA's volledig gevuld: 15 headlines, 4 descriptions
3. PMax asset groups compleet: headlines, long headlines, descriptions, images multi-orientatie, videos
4. Video-assets aanwezig (playbook-claim: 25-40% performance-lift)
5. Sitelinks, callouts, structured snippets en location assets actief
6. Geen disapproved assets (Real-Time Policy Reviews vangt dit sinds juli 2026 al bij het bouwen)
7. Ad rotation op Optimize
8. Minimaal 1 actief A/B-experiment
9. Seizoensrelevante creative live
10. Brand-consistentie: logo, tagline, tone of voice

### Domein F: Audiences (8 punten)

1. Customer Match lists aanwezig met meer dan 1.000 records
2. Website visitor lists 30-90 dagen actief
3. Converter-seeds als signaal ingezet
4. In-market segments toegevoegd als signaal
5. Bestaande klanten uitgesloten in acquisitie-campagnes
6. Demografische exclusies gebaseerd op data, niet op aanname
7. Household income targeting waar relevant
8. First-party integraties (CRM, Klaviyo) gekoppeld

### Domein G: Feeds, Shopping en PMax (12 punten)

1. Merchant Center gekoppeld en zonder rode meldingen
2. Disapproved products onder 2%
3. Product titles keyword-front-loaded
4. Product types ingevuld
5. Custom labels voor segmentatie (marge, seizoen, bestseller)
6. Supplemental feed met marge voor POAS
7. Inventory filters en exclusions in PMax bewust gekozen
8. Asset group per productcategorie
9. Brand exclusions aan in PMax
10. Video-assets in PMax asset groups
11. Page feeds voor URL expansion, met tekst-disclaimers gecheckt
12. Local inventory ads bij fysieke winkels

### Domein H: Kannibalisatie en incrementaliteit (5 punten)

1. Branded Search versus PMax overlap gekwantificeerd
2. Organic versus paid kannibalisatie bekeken via `gsc_tool`
3. Geo-lift of conversion-lift test in de laatste 6 maanden
4. MMM of ander incrementaliteitsmodel beschikbaar
5. Holdout-groepen gebruikt of bewust geagendeerd

### Domein I: AI Max readiness (5 punten)

1. Account voldoet aan de opt-in eisen en de nieuwe ToS rond AI-automatisering (juli 2026) is beoordeeld
2. Text Guidelines geconfigureerd en de AI Brief (Gemini-gestuurd) gevuld met merk, boodschap en doelgroep
3. Final URL expansion gecheckt op verplichte tekst-disclaimers
4. Pilot-plan klaar: 50/50 experiment op een top-campagne, minimaal 6 weken, daily search terms review de eerste 2-4 weken
5. DSA-inventaris klaar voor de auto-upgrade vanaf september 2026 (ACA plus campagne-level broad match; bredere migratie vanaf februari 2027)

### Domein J: Compliance en account health (10 punten)

1. Geen policy violations in de laatste 30 dagen
2. Geen billing-issues of openstaande betalingen
3. User access audit: wie heeft welke rol, geen ghost-users
4. MCC-link correct en eigendom bij de klant
5. 2FA op het hoofdaccount
6. Geen suspensierisico (beleid, trademark)
7. Landing page experience score acceptabel
8. Mobile site speed geen structurele rem
9. Consent Mode v2 dekt de EU-realiteit van de klant
10. AVG-datahandling: geen PII in feeds, scripts of imports

### Prioriteitsmatrix (beslisregels)

| Impact x effort | Actie |
|---|---|
| Hoog impact, laag effort | Quick win: fix-ticket voor week 1 |
| Hoog impact, hoog effort | Project: maand 1, met eigenaar en mijlpalen |
| Laag impact, laag effort | Batchen in de reguliere optimize-ronde |
| Laag impact, hoog effort | Backlog, alleen bij kwartaal-capaciteit |

Kritieke tracking- of compliance-vlaggen overrulen de matrix: fix nu. Verspilling boven 5% van maandbudget in search terms zonder conversie is per definitie hoog impact (werk-drempel).

## Anti-patterns

- Audit als vinkjeslijst zonder bewijs: zonder GAQL-output of screenshot is elke vlag een mening
- Tijdens de audit "even snel" iets fixen: de nulmeting is weg en audit en mutatie horen gescheiden
- Alleen problemen rapporteren: benoem ook wat goed staat, anders krijgt de fixlijst geen mandaat
- Severity-inflatie: alles kritiek maken maakt de matrix onbruikbaar en escalatie bot
- Oordelen met verouderde normen zonder de actuele feature-stand te checken: valse vlaggen ondermijnen het rapport
- Findings zonder oorzaak, oplossing en verwachte impact: "CTR is laag" is geen bevinding
- Benchmarken tegen brede industry averages in plaats van de eigen account-historie
- Herhaal-audit draaien zonder eerst de vorige fix-tickets na te lopen

## Output-formaat

Audit-rapport in `<klantmap>/google-ads/reports/YYYY-MM-DD-audit.md`:

```markdown
# Google Ads Audit <klant> YYYY-MM-DD
## Executive summary (max 1 pagina: top-3 bevindingen plus euro-impact-schatting)
## Scorekaart per domein (A-J: OK / issues / n.v.t.)
## Kritieke vlaggen (met severity en bewijs)
## Prioriteitsmatrix (P1 week 1, P2 maand 1, P3 kwartaal 1, P4 backlog)
## Fix-tickets (per issue: vindplaats, bewijs, voorbeeld-mutatie, eigenaar, verificatie-stap)
## Wat goed staat (top-3)
## Hercheck-afspraak (datum plus scope)
## Methodologie (periode, bronnen, wat niet beoordeeld kon worden)
```

Log-entry in `history-log.md`:

```
## YYYY-MM-DD | Audit uitgevoerd
Scope: 90 dagen, 90 punten, [volledig / quick-scan / partial]
Top-3 bevindingen: 1) ... 2) ... 3) ...
Volgende stap: P1-items week van [datum], herhaal-audit [datum]
```

## Dependencies

- `google_ads_tool` (list_accounts, search): alle account-data via GAQL; mutate wordt in deze skill nooit gebruikt
- `ga4_tool` (conversie-cross-check en dubbeltelling) en `gsc_tool` (organic versus paid, domein H)
- `google_workspace_tool` (executive summary in Docs, scorecard in Sheets)
- Merchant Center-toegang via MP of screenshots voor domein G
- `<klantmap>/google-ads/` met account-brief.md, history-log.md en reports/
- `knowledge-base/google-ads/checklists/monthly-audit.md` en `templates/audit-report-template.md` (indien gemount)

## Integratie met andere skills

- **google-ads-specialist**: routeert hierheen bij overnames en health checks; de audit voedt het accountplan
- **google-ads-setup**: voert de herstructurering uit die uit de audit volgt; de audit is de nulmeting
- **google-ads-optimize**: pakt P1- en P2-tickets op in de weekroutine en escaleert structurele issues terug
- **google-ads-pmax-shopping**: verdieping en fixes voor domein G en PMax-structuurvondsten
- **google-ads-creative**: vertaalt creative-vondsten (domein E) naar een refresh-plan
- **google-ads-value-bidding**: pakt de POAS-potentie op die domein G blootlegt
- **google-ads-scripts-automation**: zet terugkerende audit-checks om in geautomatiseerde alerts
- **google-ads-reporting**: neemt bevindingen en euro-impact over in de klantrapportage
- **channable-shopping-feeds**: structurele feed-fixes bij disapprovals uit domein G
- **analytics-specialist**: tracking-diepte voor domein B; **analytics-consent-privacy**: escalatiepad voor consent-vlaggen
- **incrementality-testing**: testopzet wanneer domein H een lift-test agendeert
- **qbr-builder**: de kwartaal-audit is vaste input voor de QBR

## Tips

- Begin bij domein B, niet bij performance: zonder solide meting is elke conclusie voorbarig
- Vraag de history-log voordat je data trekt: de helft van de anomalieen is een gelogde wijziging die nog landt
- Sorteer verspilling altijd op kosten, niet op clicks: de duurste ruis eerst
- Schat euro-impact per vlag, hoe grof ook: een matrix zonder bedragen wordt door niemand geprioriteerd
- Schaal normen naar accountgrootte: wat bij 50k per maand een vlag is, is bij 2k vaak gezond pragmatisme
- Bewaar alle GAQL-exports bij het rapport; discussies met een vorig bureau zijn anders niet te beslechten
- Check bij budget-beperkte campagnes altijd punt C4: na 17 augustus 2026 past Google targets zelf aan en verdwijnt je onderhandelingsruimte
- Plan de herhaal-audit direct in bij oplevering; een audit zonder hercheck-datum wordt een eenmalig document

*Eerste versie: juli 2026. Herzie na 17 augustus 2026 (Bidding Target Optimization automatisch actief) en bij de DSA-auto-upgrade vanaf september 2026.*
