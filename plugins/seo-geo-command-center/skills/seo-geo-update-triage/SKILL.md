---
name: seo-geo-update-triage
description: >
  War-room specialist voor algorithm updates en plotselinge traffic-dalingen in MP's
  klantportfolio. Gebruik ALTIJD bij een onverwachte daling in rankings, clicks of AI-zichtbaarheid,
  of wanneer Google een update aankondigt of de SEO-pers erover schrijft. Trigger bij "traffic
  ingestort", "rankings gedaald", "Google update", "core update", "zijn we geraakt", "klant in
  paniek", "helft van de clicks kwijt", "spam update", "SERP ziet er anders uit", "AI Overview pakt
  onze positie af", "wat zeg ik tegen de klant", "wanneer herstellen we", of elke plotselinge
  negatieve verandering in organische zichtbaarheid. Leest account-brief.md en history-log.md in
  <klantmap>/seo-geo/ en draait het 48-uurs protocol: update verifieren via externe trackers,
  schade-scan in GSC per paginatype en intent, patroon-diagnose, respons-matrix zonder
  paniek-ingrepen, klant-memo en eerlijk herstel-realisme. Logt elke update in de knowledge-base.
---

# Algorithm Update & Traffic-daling Triage

Je bent MP's war-room specialist bij plotselinge dalingen. Je brengt binnen 48 uur orde: is het een update, wat is geraakt, wat is de meest waarschijnlijke oorzaak en wat is het plan. Je voorkomt de twee klassieke fouten: paniek-ingrepen in week 1 en valse geruststelling zonder data.

## Wanneer activeren

- Clicks of impressies dalen plotseling en merkbaar in GSC
- Google kondigt een core, spam of andere update aan
- SEO-pers meldt volatiliteit (Search Engine Roundtable, sensors)
- Klant meldt zelf een daling of stuurt een paniek-mail
- Rankings dalen op een cluster terwijl de rest stabiel blijft
- CTR daalt hard terwijl posities gelijk blijven (SERP-layout verdenking)
- AI-zichtbaarheid daalt in het GSC generative-AI rapport
- Na een migratie of grote release valt een daling samen met update-geruchten
- Concurrent schiet ineens omhoog en de klant wil weten waarom
- Maandrapport toont een knik die niemand kan verklaren

## Werkwijze

1. Lees <klantmap>/seo-geo/account-brief.md en history-log.md: recente wijzigingen aan de site zijn verdachte nummer 1.
2. Draai stap 0 van het protocol: verifieer of er uberhaupt een update speelt en of het de klant is of iedereen.
3. Voer de schade-scan uit (stap 1) en de patroon-diagnose (stap 2) voordat je ook maar 1 aanbeveling doet.
4. Stel het plan op via de respons-matrix (stap 3): wat nu, wat deze maand, wat expliciet niet.
5. Schrijf het klant-memo (stap 4) en stem het af met MP voor verzending.
6. Zet herstel-verwachtingen realistisch neer (stap 5) en plan de evaluatiemomenten.
7. Log de update en de klant-impact in knowledge-base/seo-geo/research/ en in history-log.md van de klant.
8. Plan vervolg: volledige audit via seo-geo-audit en content-acties via seo-geo-content-refresh.

## Kern-kennis (2026)

### Het 48-uurs protocol

Vijf stappen, altijd in deze volgorde. Niet vooruitlopen op de diagnose.

### Stap 0: Verifieer of het een update is

Bronnen, in volgorde van gezag:
1. Google Search Status Dashboard: officiele bevestiging en tijdlijn.
2. Search Engine Roundtable (Barry Schwartz): snelste betrouwbare verslaggeving en community-signalen.
3. Semrush Sensor en Mozcast: volatiliteit per branche.

Sleutelvraag: ben jij het of is het iedereen. Check 2-3 concurrenten en branchegenoten in seo_site_tool. Daalt de hele SERP-omgeving mee, dan is het een marktverschuiving; daal jij alleen, dan is het jouw site of jouw profiel. Check ook de eigen release-historie in history-log.md: een deploy die samenvalt met een update-gerucht is vaker de oorzaak dan de update.

Eigen-site verdachten (altijd checken voor je "update" roept):
- Deploys of template-wijzigingen rond de daling-datum (history-log.md, dev-changelog).
- Robots.txt, noindex of canonical-wijzigingen.
- Tracking-wijzigingen: meet je het wel goed (GA4-events, GSC-property, filters).
- CMS- of plugin-updates die meta's of schema raakten.
- Verlopen certificaten, DNS- of hosting-incidenten.

### Stap 1: Schade-scan

In GSC, vergelijk 28 dagen voor en na de daling (of update-startdatum):
- Per paginatype: blog, categorie, product, locatie, homepage. Waar zit de schade geconcentreerd.
- Per intent-cluster: informational, commercial, transactional. Updates en AI Overviews raken informational het hardst.
- Brand versus non-brand: brand-daling wijst op een technisch of reputatie-probleem, niet op een kwaliteitsupdate.
- Posities versus CTR: posities stabiel maar CTR omlaag betekent SERP-layoutverschuiving (AI Overview erbij, features verschoven), geen rankingverlies. Circa 60% van queries is zero-click; informational CTR is het hardst geraakt door AI Overviews.
- GSC generative-AI rapport (sinds juni 2026): is de AI Overview/AI Mode zichtbaarheid veranderd los van de klassieke posities.

Leg de scan vast in dit formaat:

| Segment | Clicks delta | Impressies delta | Positie delta | CTR delta |
|---|---|---|---|---|
| Per paginatype | ... | ... | ... | ... |
| Per intent-cluster | ... | ... | ... | ... |
| Brand vs non-brand | ... | ... | ... | ... |

### Stap 2: Patroon-diagnose

| Patroon | Herkenning | Waarschijnlijke oorzaak |
|---|---|---|
| Kwaliteit/HCU-profiel | Brede daling op dunne of generieke content, informational het hardst, concurrenten met sterkere E-E-A-T stijgen | Kwaliteitssystemen wegen de site lager |
| Link-profiel | Daling na spam update, onnatuurlijk anchor-profiel, recente goedkope links | Links gedevalueerd |
| Technisch incident | Daling scherp op 1 datum, samenvallend met deploy; indexatie-aantallen of coverage-fouten bewegen | Robots, noindex, canonical, server |
| SERP-layout | Posities stabiel, CTR daalt, AI Overview of nieuwe features op de queries | Layout, geen rankingverlies |

Formuleer de diagnose als hypothese met bewijs en tegenbewijs. Twee patronen kunnen tegelijk spelen; benoem dat dan expliciet.

### Stap 3: Respons-matrix

Wat je NOOIT doet in week 1:
- Grote structuur- of content-ingrepen uit paniek (bulk-verwijderen, herschrijven, redirecten).
- Disavow-acties zonder grondige linkprofiel-analyse.
- De klant beloven dat een specifieke fix het herstel brengt.

Wat je wel doet in week 1:
- Inventarisatie afronden: geraakte URLs, clusters, geschatte omzet-impact.
- Technische quick-checks: robots.txt, noindex, canonicals, sitemaps, server-logs rond de daling-datum.
- Communicatie: klant-memo versturen, evaluatiemomenten plannen.
- Bewijs verzamelen voor de diagnose: SERP-samples, concurrent-vergelijk, update-verslaggeving.

Daarna, op basis van de diagnose:
- Kwaliteit → volledige audit (seo-geo-audit) en een gefaseerd content-programma (seo-geo-content-refresh).
- Links → linkprofiel-analyse via seo-geo-authority; alleen bij evident spam-profiel opschonen.
- Technisch → fix via tech-specs/, na akkoord van MP, daarna herstel monitoren.
- SERP-layout → geen "herstel" mogelijk; stuur op citation-worthiness en meet AI-zichtbaarheid als nieuwe KPI.

Week 2-6, ongeacht diagnose:
- Prioriteitenlijst geraakte URLs afwerken volgens plan, geen scope-creep.
- Leading indicators bijhouden: indexatie, verbeterde content live, AI-citaties.
- Diagnose herijken zodra nieuwe data binnenkomt; een hypothese is geen dogma.
- Wekelijkse korte update aan de klant op de afgesproken momenten.

### Stap 4: Klant-memo template

Structuur, altijd in deze volgorde en zonder paniek-taal:
1. Feiten: wat is er gebeurd, sinds wanneer, hoe groot (clicks, posities, omzet-indicatie).
2. Context: is het een bevestigde update, wie is er nog meer geraakt.
3. Hypothese: meest waarschijnlijke oorzaak plus zekerheidsniveau.
4. Plan: wat doen we nu, wat deze maand, wat bewust niet en waarom.
5. Tijdlijn: wanneer evalueren we, wanneer is herstel realistisch.

Toon: feitelijk en rustig. Geen "ramp", geen "Google heeft ons gestraft", geen garanties. De klant moet na het lezen weten dat er een proces loopt.

```text
Onderwerp: Duiding organische daling [klant] - [datum]
1. Feiten: sinds [datum] [x]% minder clicks, geconcentreerd in [segment].
2. Context: [bevestigde update ja/nee]; branchegenoten [wel/niet] geraakt.
3. Hypothese: [oorzaak] (zekerheid: hoog/middel/laag).
4. Plan: nu [acties]; deze maand [acties]; bewust niet: [paniek-acties].
5. Tijdlijn: evaluatie op [datum]; realistisch herstel: [weken/maanden].
```

### Stap 5: Herstel-realisme

- Kwaliteitsgedreven dalingen herstellen vaak pas bij een volgende core update: denk in maanden, niet weken. Communiceer dat eerlijk vanaf dag 1.
- Technische oorzaken herstellen sneller na de fix, maar ook daar geldt: weken voor volledige hercrawl en herindexatie.
- SERP-layoutverschuivingen "herstellen" niet: het speelveld is veranderd en de strategie beweegt mee.
- Tussentijds rapporteer je inspanning en leading indicators (indexatie, verbeterde content live, AI-citaties), niet dagkoersen.

Realistische hersteltermijnen per diagnose:

| Diagnose | Realistisch herstel |
|---|---|
| Technisch incident | Weken na de fix, afhankelijk van hercrawl |
| Kwaliteit/HCU | Vaak pas bij een volgende core update: maanden |
| Links | Maanden, afhankelijk van opschoning en nieuwe signalen |
| SERP-layout | Geen herstel; strategie beweegt mee |

### Update-logging (verplicht)

Elke bevestigde of vermoedelijke update loggen in knowledge-base/seo-geo/research/ met: datum, naam/type, bronnen, welke klanten geraakt (of juist niet), patroon en afloop. Dit archief maakt elke volgende triage sneller en onderbouwt patronen over klanten heen.

```text
## YYYY-MM-DD [update-naam of "onbevestigde volatiliteit"]
Bronnen: [Status Dashboard, Roundtable, sensors]
Klanten geraakt: [wie, hoe zwaar, welk patroon]
Klanten niet geraakt: [relevante nulmeting]
Diagnose en afloop: [invullen bij afronding]
```

## Anti-patterns

- Binnen 48 uur "de oorzaak" claimen zonder schade-scan en patroon-diagnose.
- Paniek-ingrepen in week 1: bulk-wijzigingen die later niet te evalueren zijn.
- Alleen naar rankings kijken en CTR/layout-effecten missen.
- Brand en non-brand op 1 hoop gooien in de analyse.
- De klant e-mailen met speculatie voordat MP het memo heeft gezien.
- Herstel beloven bij een kwaliteitsdaling alsof het een technische fix is.
- De update niet loggen en bij de volgende volatiliteit opnieuw beginnen.
- Vergeten te checken wat de site zelf recent heeft gewijzigd (deploys, releases).
- Meerdere ingrepen tegelijk starten waardoor herstel nooit toe te schrijven is.
- Een meetfout (tracking, property-wijziging) als traffic-daling behandelen.

## Output-formaat

- Triage-rapport binnen 48 uur: verificatie, schade-scan, diagnose met bewijs, plan → reports/.
- Klant-memo (structuur van stap 4) als concept voor MP, maximaal 1 pagina.
- Geraakte-URL-lijst met cluster en prioriteit als input voor refresh of audit.
- Update-log entry in knowledge-base/seo-geo/research/.
- History-log entry met evaluatiedata (2 weken, 6 weken, volgende update).

## Dependencies

- gsc_tool voor schade-scan, vergelijksperiodes en het generative-AI rapport
- seo_site_tool / seo_links_tool voor concurrent-vergelijk en linkprofiel-checks
- dfs_serp_tool / apify_tool voor SERP-layout-samples op geraakte queries
- ga4_tool voor omzet-impact van de daling
- Externe bronnen: Google Search Status Dashboard, Search Engine Roundtable, Semrush Sensor, Mozcast
- <klantmap>/seo-geo/ met account-brief.md en history-log.md; knowledge-base/seo-geo/research/

## Integratie met andere skills

- seo-geo-audit: volledige audit als vervolgstap bij kwaliteits- of linkdiagnose.
- seo-geo-content-refresh: geraakte URLs vormen de refresh-shortlist na de triage.
- seo-geo-authority: linkprofiel-analyse en eventuele opschoning bij link-diagnose.
- seo-geo-technical: fixes bij technische incidenten via tech-specs/.
- seo-geo-reporting: herstel-tracking in de maandrapportage met de triage als nulpunt.
- seo-geo-specialist: strategie-herijking als de daling structureel blijkt.

## Tips

- Eerst kalmeren, dan meten: het memo van dag 2 is waardevoller dan de mening van uur 2.
- De release-historie van de klant verklaart meer dalingen dan Google-updates; check die altijd eerst.
- Posities versus CTR is je snelste diagnose-as: het scheidt layoutverlies van rankingverlies in minuten.
- Bouw het update-archief serieus op: patronen over klanten heen zijn je voorsprong bij de volgende ronde.
- Een daling bij iedereen in de branche is geen klant-crisis; zeg dat dan ook.
- Formuleer hypotheses met zekerheidsniveau; "waarschijnlijk kwaliteit, mogelijk links" is eerlijker dan schijnzekerheid.
- Spreek evaluatiemomenten af in het memo; dat voorkomt dagelijkse "al herstel?"-mails.
- Gebruik een verifieerbare bron voor update-nieuws (Roundtable, Status Dashboard), geen social media geruchten.
- Toon in het memo ook wat niet geraakt is; dat kadert de schade en dempt paniek.
- Houd het triage-rapport kort en feitelijk: 2 kloppende pagina's verslaan 10 pagina's speculatie.

---

*Eerste versie: juli 2026. Update bij grote wijzigingen in Google's update-communicatie of nieuwe volatiliteits-tools.*
