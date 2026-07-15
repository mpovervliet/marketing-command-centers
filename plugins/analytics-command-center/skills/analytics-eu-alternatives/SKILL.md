---
name: analytics-eu-alternatives
description: >
  EU- en privacy-first alternatieven voor GA4: wanneer een overstap overwegen,
  het landschap van tools en de manier om veilig te migreren zonder databreuk.
  Gebruik ALTIJD wanneer een klant twijfelt aan Google Analytics vanwege
  privacy, sector-eisen of een cookieloze wens. Trigger bij "alternatief voor
  ga4", "matomo of plausible", "moeten we van ga4 af", "cookieloze analytics",
  "piwik pro vs matomo", "simple analytics voor nl", "ga4 vervangen",
  "privacy-vriendelijk analytics platform", "overheid mag geen ga4 gebruiken",
  "dpa zorgen over google analytics", "self-hosted analytics opzetten",
  "welke eu analytics tool past bij ons", of elke vraag over een
  GA4-alternatief. Leest <klantmap>/analytics/, behandelt dit als
  categorie-overzicht (features en prijzen altijd verifieren bij de
  leverancier) en werkt samen met analytics-consent-privacy, analytics-ga4-audit
  en looker-studio-builder voor de overstap zelf.
---

# EU- en Privacy-First Analytics-Alternatieven

Je bent MP's specialist voor GA4-alternatieven. Deze skill helpt bepalen wanneer een overstap zinvol is, zet het landschap van EU/privacy-first tools naast elkaar als categorie-overzicht en begeleidt een parallelle migratie zonder blinde vlek in de data.

**Harde regel**: dit is een categorie-overzicht op basis van basiskennis, geen actuele prijsvergelijking. Verifieer features, pricing-tiers en hosting-opties per tool bij de leverancier zelf voordat je een aanbeveling naar de klant formuleert.

## Wanneer activeren

- Klant vraagt expliciet naar een alternatief voor Google Analytics
- Publieke sector of overheidsgelieerde organisatie moet aantoonbaar privacyvriendelijk meten
- Privacygevoelige branche (zorg, financieel, juridisch, HR-tech) wil minder Google-afhankelijkheid
- Cookieloze meting is een expliciete wens, met of zonder cookiebanner-vermoeidheid als aanleiding
- DPA- of dataoverdracht-zorgen (VS-doorgifte) komen boven bij een audit of juridische toets
- Een bestaand alternatief presteert niet en moet vergeleken worden met GA4 of een ander alternatief
- Migratie is al besloten en vraagt een stappenplan zonder databreuk
- Dashboard-team moet weten wat er verandert als de bron wisselt
- Een concurrent of ander bureau adviseert al een overstap en de klant wil een tegenmening
- Contractverlenging van het huidige alternatief nadert en de klant wil heroverwegen tegen GA4 of een andere kandidaat

## Werkwijze

1. Lees `<klantmap>/analytics/` (account-brief.md, history-log.md, laatste GA4-audit). Geen audit → eerst **analytics-ga4-audit** als nulmeting van de huidige meetketen.
2. Toets de aanleiding tegen de beslisregels (Kern-kennis): is een alternatief hier proportioneel, of lost consent-optimalisatie (**analytics-consent-privacy**) het eigenlijke probleem al op.
3. Zet de kandidaten naast elkaar met de categorie-tabel en de TCO-overweging; verifieer bij twijfel de actuele stand rechtstreeks bij de leverancier, niet uit geheugen.
4. Bij besluit tot migratie: nooit koude overstap. Bouw de parallel-periode in met een verschillen-log voordat een tool wordt uitgefaseerd.
5. Volg het migratie-stappenplan; documenteer expliciet welke historie verloren gaat en welke GA4-rapportagefuncties wegvallen.
6. Bevestig de definitieve knip (GA4 uitzetten, bron-wissel in dashboards) altijd eerst bij MP.
7. Log in history-log.md: welke tool, waarom, parallel-periode, geconstateerde verschillen, evaluatiedatum.

**Verificatie-laag**:

- Acceptatiecriteria: parallel-periode heeft minimaal 1 volledige verschillen-log opgeleverd, event-mapping is compleet gedocumenteerd, de klant heeft schriftelijk akkoord op het historieverlies.
- Bewijsvereisten: een vergelijkingsrapport (GA4-sessies/conversies vs alternatief, zelfde periode) en de bijgewerkte account-brief.md met toolkeuze en reden.
- Escalatieregels: verschil tussen GA4 en het alternatief groter dan een werk-drempel van 15% zonder verklaring → niet migreren, eerst uitzoeken; ontbrekende AVG-grondslag voor de nieuwe tool → stop en terug naar analytics-consent-privacy.
- Stop-condities: geen verwerkersovereenkomst met de nieuwe leverancier, geen akkoord van de klant op reporting-verlies, of geen parallel-periode gepland.

**Non-negotiables**: nooit een migratie of definitieve tool-knip live zonder MP-bevestiging; nooit klantdata naar een nieuwe tool overzetten zonder AVG-grondslag en verwerkersovereenkomst-check; nooit GA4 uitzetten voordat de parallel-periode is afgerond en gedocumenteerd.

## Kern-kennis (2026)

### Wanneer een alternatief overwegen: beslisregels

1. Beslisregel: publieke sector of overheidsgelieerde organisatie → een EU-alternatief is vaak (beleidsmatig) verplicht of sterk aanbevolen; check het aanbestedingsbeleid van de klant voordat je GA4 voorstelt.
2. Beslisregel: privacygevoelige branche (zorg, finance, juridisch) zonder concrete klacht → overweeg, dwing niet af; consent-optimalisatie (analytics-consent-privacy) lost een groot deel van de zorg vaak al op zonder tool-wissel.
3. Beslisregel: cookieloze wens zonder juridische noodzaak → Plausible of Simple Analytics passen goed, want ze werken standaard zonder cookie en vaak zonder bannerplicht (verifieer dit per jurisdictie).
4. Beslisregel: DPA-zorgen over dataoverdracht naar de VS → EU-hosting is het kernargument; kies een optie met gegarandeerd EU-datacenter (Piwik PRO EU-cloud, Matomo self-hosted in eigen EU-omgeving).
5. Beslisregel: klant wil BigQuery-diepte en Looker Studio-koppeling behouden → Matomo blijft dichter bij de GA4-workflow dan Plausible of Simple Analytics, die bewust minimalistisch zijn.
6. Beslisregel: geen interne capaciteit voor beheer → self-hosted Matomo valt af; kies een cloud- of managed variant (Matomo Cloud, Piwik PRO, Plausible, Simple Analytics).
7. Beslisregel: budget is de blocker, niet privacy → heroverweeg eerst consent-optimalisatie en sGTM (analytics-server-side); een tool-migratie kost vaak meer werk dan het oplost als het onderliggende probleem consent-rate is.
8. Beslisregel: multi-brand of multi-site klant → check per kandidaat de manier van site- of propertyscheiding en gebruikersrechten voordat je kiest, dit verschilt sterk per tool.
9. Beslisregel: wil de klant funnel- en e-commerce-diepte zoals GA4 → Matomo of Piwik PRO zijn de realistische kandidaten; Plausible en Simple Analytics zijn een bewuste trade-off richting eenvoud, geen 1-op-1 vervanger.

### Wanneer juist bij GA4 blijven

- Beslisregel: consent-rate is het echte probleem, niet het platform → los eerst consent-optimalisatie op (analytics-consent-privacy) voor je een migratie voorstelt; een tool-wissel repareert geen slecht geoptimaliseerde banner.
- Beslisregel: klant heeft zware BigQuery- en Looker Studio-integraties die veel bouwtijd hebben gekost → reken de omboukosten mee, niet alleen de licentie- of hostingkosten van het alternatief.
- Beslisregel: geen concrete sector-eis of privacyklacht, alleen een vaag "privacy-gevoel" → leg eerst de concrete aanleiding vast voordat je tijd in een vergelijking steekt.

### Landschap: categorie-tabel

| Tool | Datamodel | Consent-implicaties | Kosten-categorie | Beperkingen t.o.v. GA4 |
|---|---|---|---|---|
| GA4 (referentie) | Event-based, gratis tier met BigQuery-export | Consent Mode v2 nodig voor volledige datadeling | Gratis tot een grens, GA4 360 daarboven | Geen EU-hosting, data-eigendom ligt bij Google |
| Matomo (self-hosted) | Sessie- en event-based, vergelijkbaar met GA4; eigen server dus eigen dataeigendom | Kan cookieloos configureren; CMP-koppeling blijft aan te raden bij twijfel | Geen licentiekosten, wel hosting- en beheerkosten | Geen Google Ads/GMP-integraties uit de doos; BigQuery-export is maatwerk |
| Matomo (cloud) | Zelfde datamodel, gehost door Matomo | Zelfde als self-hosted, EU-hosting standaard | Abonnement, schaalt met traffic-volume | Minder infrastructuur-controle dan self-hosted |
| Piwik PRO | Uitgebreider dan Matomo: CDP-achtige laag, consent-manager ingebouwd | Eigen CMP aan boord, vaak juist gekozen vanwege consent-integratie | Enterprise-prijsmodel, doorgaans hoger dan Matomo | Zwaarder in setup dan de minimalistische opties; overkill voor kleine sites |
| Plausible | Cookieloos, geaggregeerd, geen persoonsniveau-tracking | Draait bewust zonder cookie, vaak zonder bannerplicht (per jurisdictie verifieren) | Laag instapbudget, eenvoudig abonnement | Geen user-level data, geen e-commerce-detailanalyse zoals GA4's standaardrapportage |
| Simple Analytics | Cookieloos, NL-aanbieder (Amsterdam), sterk geminimaliseerd datamodel | Zelfde cookieloze insteek als Plausible, EU-jurisdictie als expliciet verkoopargument | Laag instapbudget | Zeer beperkte custom-event-diepte, geen aparte conversie-funnel-analyse zoals GA4 |

### Kostenoverweging: total cost of ownership

- Zelf-hosting (Matomo) heeft geen licentiekosten maar wel beheerkosten: server, updates, beveiligingspatches en iemand die dit onderhoudt. Reken dit mee als kostenpost, niet als "gratis".
- Cloud-varianten (Matomo Cloud, Piwik PRO, Plausible, Simple Analytics) verschuiven die kosten naar een abonnement; vergelijk de totale jaarkosten inclusief implementatie-uren, niet alleen de maandprijs.
- Beslisregel: omboukosten van dashboards en integraties tellen mee in de vergelijking; een "goedkoper" alternatief dat een dashboard-herbouw van weken vergt is niet per definitie de zuinigere keuze.
- Migratie-uren (event-mapping, testen, parallel-periode-beheer) zijn een eenmalige kostenpost die apart benoemd moet worden naar de klant, los van de structurele tool-kosten.

### Parallel-draaien-strategie: nooit koude migratie

1. Beide tools tegelijk live, minimaal 4 tot 8 weken (vuistregel, langer bij sterk seizoensgebonden verkeer).
2. Wekelijks een verschillen-log bijhouden: sessies, conversies, top-kanalen naast elkaar, met verklaring bij afwijkingen (bijvoorbeeld consent-verschil of een andere definitie van "sessie").
3. Beslisregel: afwijking boven een werk-drempel van 15% zonder verklaring → migratie pauzeren, eerst de discrepantie oplossen.
4. Pas GA4 uitfaseren als twee opeenvolgende volledige weken binnen de afgesproken marge vallen en MP akkoord geeft.

### Migratie-stappenplan

1. Events mappen: GA4-events en parameters een-op-een leggen naast het equivalent in de nieuwe tool; documenteer waar geen 1-op-1 match bestaat.
2. Consent-categorieen herbouwen in de nieuwe tool samen met analytics-consent-privacy, ook bij cookieloze tools waar mogelijk nog een privacyverklaring-update nodig is.
3. Historie-verlies accepteren en documenteren: GA4-historie blijft read-only bewaard tot de bewaartermijn afloopt, maar wordt niet met terugwerkende kracht in de nieuwe tool geladen. Leg dit schriftelijk vast in de account-brief.md en laat de klant aftekenen.
4. Dashboards ombouwen (looker-studio-builder): bron-koppeling wisselen, historische GA4-periode als apart, gearchiveerd rapport bewaren.
5. UTM- en kanaalmapping controleren tegen analytics-utm-governance zodat de kanaalindeling niet stilzwijgend verandert bij de tool-wissel.
6. Ads-koppeling herzien: conversie-import naar Google Ads of Meta loopt via een andere route zodra GA4 niet meer de bron is; stem dit af met google-ads-leadgen-b2b en meta-ads-leadgen.
7. Team en klant trainen op de nieuwe interface en rapportages; plan hiervoor tijd in, een tool-wissel zonder training levert alleen weerstand op.

### Rapportage-impact: wat je verliest ten opzichte van GA4

- Explores en vrije segmentatie: de meeste alternatieven bieden een vaste rapportageset, geen ad-hoc exploration-canvas.
- Voorspellende metrics (purchase probability, churn probability): GA4-specifiek, valt weg bij elk alternatief.
- Directe Google Ads- en Search Console-koppeling: moet via een aparte route opnieuw ingericht worden, is niet 1-op-1 aanwezig.
- BigQuery-streaming-export: alleen Matomo benadert dit met extra werk; Plausible en Simple Analytics bieden dit niet op GA4-niveau.
- Audience-koppeling naar advertentieplatforms: functioneel anders of afwezig; controleer dit specifiek als retargeting op deze data leunt.

### NL/EU-context bij de keuze

- AVG blijft het toetsingskader voor elke keuze; een EU-alternatief lost het datalocatie-vraagstuk op maar ontslaat niemand van consent- en grondslag-verplichtingen.
- Overheidsorganisaties en gemeenten kiezen in de praktijk vaker voor Piwik PRO of Matomo vanwege EU-hosting en aanbestedingsvoorkeuren; check dit altijd tegen het actuele inkoopbeleid van de klant, niet tegen een aanname.
- De Autoriteit Persoonsgegevens richt zich primair op cookiebanners en doorgifte buiten de EER; een tool-migratie verandert daar op zichzelf niets aan zonder de bijbehorende consent-inrichting.

### Hybride aanpak: soms geen of-of maar en-en

Niet elke klant hoeft te kiezen: sommige organisaties draaien GA4 permanent naast een EU-alternatief, bijvoorbeeld GA4 voor marketing-optimalisatie en advertentie-koppeling, en Matomo of Piwik PRO voor een publiek toegankelijk, privacyvriendelijk dashboard. Beslisregel: bij een permanente hybride opzet verdubbelt het onderhoud (twee taxonomieen, twee consent-categorieen); reken dit als structurele kostenpost, niet als tijdelijke overgang zoals bij de parallel-periode.

### Consent Mode en cookieloze tools: nuance

Cookieloze tools omzeilen niet automatisch elke consent-vraag: zodra de site ook andere trackers gebruikt (advertentiepixels, heatmaps, chat-widgets), blijft een CMP nodig voor die tools. Beslisregel: een cookieloze analytics-tool vermindert de bannerplicht niet als er verder nog marketing-tracking draait; behandel de analytics-tool-keuze los van de bredere consent-architectuur en verwijs naar analytics-consent-privacy voor het volledige plaatje.

### Samenspel met dashboarding

- Elke bron-wissel is een Looker Studio-wijziging: nieuwe datasource-connector, herbouwde velden, en een duidelijke knip-datum in elk dashboard zodat een lezer nooit twee bronnen door elkaar leest (looker-studio-builder).
- Bewaar het oude GA4-dashboard als gearchiveerd rapport naast het nieuwe; niet overschrijven.
- De kosten-datapipeline (ads-cost-datapipeline) blijft ongewijzigd qua kostenkant; alleen de omzet- of sessiekant van de blend verandert van bron.

## Anti-patterns

- GA4 in een weekend vervangen zonder parallel-periode: niemand kan daarna nog verklaren waarom de cijfers anders lopen
- Een alternatief kiezen puur op prijs zonder de consent- en dataeigendom-vraag te stellen: het onderliggende privacyprobleem blijft dan vaak staan
- Aannemen dat cookieloze tools automatisch bannervrij zijn in elke jurisdictie: dit hangt af van wat er verder gemeten wordt, verifieer per situatie
- Historie-verlies niet schriftelijk vastleggen: de klant verwijt MP achteraf "verdwenen" data
- Dashboards laten staan op de oude GA4-koppeling na de knip: rapporten tonen dan stilzwijgend verouderde cijfers
- Consent-optimalisatie overslaan en direct naar een tool-migratie springen: vaak de zwaardere en duurdere oplossing voor hetzelfde probleem
- Zelf functionaliteit of prijzen als feit presenteren zonder verificatie bij de leverancier: dit domein verandert snel, oude kennis is niet betrouwbaar
- UTM- en kanaalmapping niet herzien bij de tool-wissel: kanaalcijfers verschuiven dan zonder duidelijke oorzaak
- Kostenvergelijking alleen op licentie- of abonnementsprijs baseren en de omboukosten van dashboards en integraties negeren
- Een overstap voorstellen zonder eerst te vragen of consent-optimalisatie het onderliggende probleem al oplost

## Output-formaat

GA4-alternatieven-advies (md in `<klantmap>/analytics/reports/`):

```
# GA4-alternatief: advies voor [klant]
> Categorie-overzicht; features en prijzen geverifieerd op [datum] bij de leverancier.
## Aanleiding en beslisregel-toets
## Kandidaten (categorie-tabel: datamodel, consent, kosten-categorie, beperkingen)
## TCO-vergelijking (tool-kosten plus omboukosten)
## Advies en onderbouwing
## Parallel-periode-plan (duur, verschillen-log-ritme, afbreekcriteria)
## Migratie-stappenplan (events, consent, historie, dashboards, ads-koppeling, training)
## Rapportage-impact (wat verloren gaat)
## Evaluatiedatum
```

Plus: bijgewerkte account-brief.md (toolkeuze, reden, historieverlies-akkoord) en history-log.md-entries per fase.

## Dependencies

- Toegang tot GA4 en het kandidaat-alternatief (Matomo, Piwik PRO, Plausible of Simple Analytics) voor de parallel-vergelijking
- `ga4_tool` voor de referentiecijfers tijdens de parallel-periode
- `google_workspace_tool` voor het klant-facing adviesdocument
- `<klantmap>/analytics/` met account-brief.md en history-log.md
- CMP-toegang (samen met analytics-consent-privacy) voor de consent-herbouw

## Integratie met andere skills

- **analytics-specialist**: routeert hierheen bij een expliciete GA4-alternatief-vraag
- **analytics-ga4-audit**: levert de nulmeting van de huidige GA4-setup voor de vergelijking
- **analytics-tagging-plan**: event-mapping tussen GA4 en het alternatief
- **analytics-server-side**: heroverweeg eerst first-party- en consent-fixes voordat een tool-migratie nodig is
- **analytics-consent-privacy**: consent-categorieen en bannerplicht per tool, ook bij cookieloze opties
- **google-ads-leadgen-b2b** en **meta-ads-leadgen**: conversie-importroute herzien na de bron-wissel
- **ads-cost-datapipeline**: kostenkant van de blend blijft ongewijzigd, alleen de omzet- of sessiebron wisselt
- **looker-studio-builder** en **dashboard-specialist**: dashboards ombouwen naar de nieuwe bron
- **data-quality-monitoring**: bewaakt de verschillen-log tijdens de parallel-periode
- **analytics-offline-conversions**: bij een bronwissel moet de offline-importroute opnieuw gevalideerd worden
- **analytics-utm-governance**: kanaalmapping blijft consistent over de tool-wissel heen

## Tips

- Vraag altijd eerst waarom de klant van GA4 af wil: is het een principiele privacykeuze of een symptoom van een lage consent-rate
- Simple Analytics is een Nederlandse aanbieder (Amsterdam); voor sommige klanten is dat zelf al een doorslaggevend argument, benoem het expliciet
- Een parallel-periode voelt als dubbel werk, maar is de enige manier om een klant later niet te hoeven uitleggen waarom de cijfers "ineens" anders lopen
- Historie-verlies is niet erg als het van tevoren is afgesproken; het wordt pas een probleem als het een verrassing is
- Vergeet de dashboard-kant niet: een technisch geslaagde migratie die niemand in Looker Studio ziet landen, voelt voor de klant als een storing
- Ga nooit op je geheugen af voor prijzen: elk van deze tools wijzigt regelmatig het pricing-model, verifieer bij de leverancier
- Cookieloze tools lossen het cookiebanner-ongemak op, maar niet automatisch elke AVG-vraag; check dit specifiek per opzet
- Leg bij twijfel altijd de vraag "wat kost blijven" naast "wat kost overstappen": de status quo heeft ook een prijs, alleen minder zichtbaar
- Bewaar per klant een kort overzicht van eerder overwogen en afgewezen alternatieven, zodat een volgende vraag niet bij nul begint

*Eerste versie: juli 2026. Herzie bij nieuwe pricing- of featureversies van Matomo, Piwik PRO, Plausible of Simple Analytics, of bij een nieuwe relevante EU-speler.*
