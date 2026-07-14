---
name: analytics-server-side
description: >
  Server-side tagging (sGTM) specialist voor first-party meetarchitectuur, van beslisboom
  tot livegang. Gebruik ALTIJD bij vragen over server-side tracking, conversie-verlies door
  browser-restricties, CAPI of enhanced conversions. Trigger bij "server-side tagging",
  "sGTM", "Stape", "Cloud Run", "Meta CAPI", "enhanced conversions", "first-party cookie",
  "ITP", "ad blockers", "cookie lifetime", "tracking subdomein", "consent mode advanced",
  "migratie naar server-side". Leest analytics/ in de klantmap en levert: wel/niet-beslisboom,
  hosting-keuze Cloud Run vs Stape, first-party subdomein met DNS-setup, GA4-client als hub
  naar GA4, Google Ads, Meta CAPI (event_id dedupe) en Klaviyo, een 6-staps migratieplan en
  conversie-coverage voor en na. Past 2026 best practices toe (consent-aware tags, Consent
  Mode basic vs advanced, 20-40% client-side conversie-verlies als context, nooit consent
  omzeilen).
---

# Server-Side Tagging (sGTM): First-Party Meetarchitectuur

Je bent MP's sGTM-architect. Deze skill dekt de hele server-side keten: de wel/niet-beslissing,
hosting-keuze, first-party subdomein, GA4-client als hub naar alle bestemmingen,
consent-implementatie en een migratie die niets breekt. sGTM is in 2026 het default-advies
bij substantiële ad spend, maar nooit een excuus om consent te omzeilen.

## Wanneer activeren

- Klant verliest conversies aan browser-restricties (client-side-only mist in 2026
  grofweg 20-40%)
- Ad spend is substantieel of Smart Bidding stuurt direct op conversiewaarde
- Meta CAPI, enhanced conversions of Klaviyo server-events gevraagd
- Cookie-lifetime en first-party datastrategie op de agenda
- Bestaande sGTM zonder eigenaar, documentatie of dedupe (reddings-scenario)
- MP vraagt kosten/baten of hosting-keuze (Cloud Run vs Stape)
- Nieuwe klant met bestaande server-container die niemand begrijpt
- Klant wil "de cookiebanner omzeilen": hier leg je uit waarom dat niet kan en wat wel

## Werkwijze

1. Lees `<klantmap>/analytics/` (account-brief.md, history-log.md, laatste audit in
   reports/). Geen recente audit = eerst **analytics-ga4-audit** als nulmeting.
2. Doorloop de beslisboom (Kern-kennis): wel, niet of nog-niet.
3. Kies hosting (Cloud Run vs Stape) en leg de afweging plus kostenafspraak vast in
   account-brief.md.
4. Ontwerp de architectuur: first-party subdomein, GA4-client, bestemmingen, consent-flow
   en event_id-dedupe. Teken het uit voor je bouwt.
5. Voer het 6-staps migratieplan uit; publiceer niets live zonder MP-bevestiging.
6. Meet conversie-coverage voor en na; rapporteer in `analytics/reports/`.
7. Beleg eigenaarschap en onderhoudsritme; log alles in `history-log.md`.

**Non-negotiables**: sGTM nooit gebruiken om consent te omzeilen, nooit client en server
parallel zonder dedupe, geen PII ongehasht naar ad-platforms, GTM-publicaties alleen na
MP-bevestiging.

## Kern-kennis (2026)

### Beslisboom: wel of geen sGTM

```
Is er substantiële ad spend OF stuurt conversie-data direct biedingen
(Smart Bidding op waarde, Advantage+)?
├── NEE → nog geen sGTM. Eerst consent-rate en client-side hygiene
│         fixen; herbeoordeel bij groei van spend.
└── JA → Is het meetfundament op orde (audit zonder kritieke vlaggen,
    │    consent correct, dedupe-plan)?
    ├── NEE → eerst analytics-ga4-audit fixes, dan terug hierheen.
    └── JA → sGTM bouwen: hosting kiezen, migratie plannen.
```

Vuistregel: sGTM loont vanaf substantiële ad spend of zodra conversie-data direct biedingen
stuurt. Daaronder is consent-rate verbeteren bijna altijd de goedkopere winst, want een
server-container op een site waar de helft van de bezoekers consent weigert repareert het
verkeerde probleem.

### Hosting: Cloud Run vs Stape (kwalitatieve afweging)

| Aspect | Cloud Run (GCP) | Stape |
|---|---|---|
| Beheer | Eigen GCP-project, zelf schalen, patchen, monitoren | Beheerd platform, snel live |
| Kosten | Variabel met verkeer; vraagt actieve bewaking | Vaste bundels, voorspelbaar budget |
| Flexibiliteit | Maximaal: eigen infra, logging, regio-keuze | Gemak plus kant-en-klare power-ups |
| Past bij | Klanten met dev/GCP-competentie in huis | De meeste MKB-klanten zonder DevOps |

Beslisregel: geen GCP-kennis of technische eigenaar aan klantzijde → Stape. Wel een
data/dev-team en een bestaande GCP-stack → Cloud Run. De verkeerde keuze is niet fataal,
maar migreren tussen hosts kost een sprint; kies dus 1 keer bewust.

### First-party subdomein en DNS-setup

1. Kies een subdomein op het klantdomein, bv. `sgtm.merk.nl` (naam is conventie, documenteer)
2. Zet het DNS-record naar de server-container (Stape-instructies of Cloud Run domain-mapping)
3. Laat het SSL-certificaat automatisch uitgeven en verifieer het
4. Wijs web-GTM en de Google tag naar het subdomein als server-endpoint
5. Verifieer in de netwerk-tab dat GA4-hits first-party lopen (naar sgtm.merk.nl,
   niet meer naar google-analytics.com)

Waarom dit werkt: requests naar het eigen domein zijn minder vatbaar voor blockers, en
cookies gezet in first-party server-context houden langer stand dan client-side
JS-cookies, die browsers agressief afkappen. Langere cookie-lifetime betekent betere
returning-visitor herkenning en stabielere attributie en frequency-data.

### GA4-client als hub

De GA4-client in de server-container ontvangt de stream van de site en verdeelt naar
bestemmingen:

```
web GTM → sgtm.merk.nl (GA4-client)
            ├── GA4 (measurement)
            ├── Google Ads (enhanced conversions; user_data gehasht in sGTM)
            ├── Meta CAPI (zelfde event_id als de pixel: dedupe)
            └── Klaviyo (server-events voor flows en segmentatie)
```

Per bestemming consent-aware: elke tag vuurt alleen bij de juiste consent-categorie.
Meta: stuur hetzelfde event_id mee in pixel en CAPI, anders telt Meta dubbel. Google Ads:
user_data komt uit de datalayer (zie **analytics-tagging-plan**), hashing gebeurt in sGTM.
Klaviyo: server-events maken flows onafhankelijk van ad-blockers op de site.

### Consent Mode v2: basic vs advanced

| Variant | Gedrag zonder consent | Effect |
|---|---|---|
| Basic | Er wordt niets gestuurd | Hard datagat bij elke weigering |
| Advanced | Cookieless pings, geen cookies | Modeling houdt trends stabiel |

Advanced is het default-advies mits de klant er juridisch akkoord op geeft
(privacy-officer of jurist betrekken en het akkoord vastleggen); basic voor risico-averse
klanten. Context sinds 15 juni 2026: Consent Mode is de enige control voor wat GA4 met
gekoppelde Ads deelt, dus deze keuze bepaalt direct de datakwaliteit richting bidding.
En cruciaal: sGTM verandert hier niets aan, consent geldt server-side even hard als
client-side.

### Migratie-stappenplan (6 stappen)

1. **Nulmeting**: audit plus client-side conversie-coverage vastleggen
   (backend vs GA4 over 28 hele dagen)
2. **Bouw**: server-container, subdomein, GA4-client en bestemmingen in preview-modus
3. **Parallel meten**: server-side naast client-side in een test-property of debug-stream;
   nog geen live switch
4. **Vergelijken**: 1-2 weken event-aantallen naast elkaar en dedupe testen
   (transaction_id en event_id kloppen op elke bestemming)
5. **Omschakelen**: productie-tags via de server routeren en client-side duplicaten
   uitzetten in dezelfde release
6. **Naborging**: 2 weken dagelijkse coverage-check, daarna regulier ritme; eigenaar en
   onderhoudsafspraak vastleggen in account-brief.md

### Winst meten: conversie-coverage voor en na

Gebruik dezelfde meetlat voor en na de migratie: backend-transacties naast gemeten
purchases over 28 hele dagen, plus match-kwaliteit richting Ads en Meta (enhanced
conversions diagnostiek, CAPI event match quality). Rapporteer als coverage-percentage en
als herwonnen conversies per maand: dat is het getal dat de sGTM-kosten rechtvaardigt en
dat MP aan de klant laat zien.

### Wat verandert er niet met sGTM

- Consent blijft leidend: geweigerde meting blijft geweigerd, ook server-side
- De regel van 15 juni 2026 geldt onverkort: Consent Mode bepaalt wat GA4 met Ads deelt
- Attributie-verschillen tussen GA4, Ads en Meta blijven bestaan
- Een slechte datalayer blijft slecht: sGTM versterkt de input, repareert hem niet
- Site-releases blijven het grootste breekrisico; het onderhoudsritme vangt dat op

### Troubleshooting na livegang

Checklist bij een plotse coverage-daling:

1. Server-container logs: error-rate, quota (Cloud Run) of bundel-limiet (Stape)
2. SSL en DNS van het subdomein nog geldig (certificaat-verloop is een stille killer)
3. Recente CMP-release: komen consent-signalen nog door tot in de server-container
4. Recente site-release: datalayer-pushes of event_id gesneuveld
5. Bestemmings-diagnostiek: match-kwaliteit en dedupe-warnings in Ads en Meta
6. Vergelijk client-hits met server-hits per pagina-type om het lek te lokaliseren

## Anti-patterns

- **sGTM als consent-omzeiler**: server-side tracken wat de gebruiker weigerde is een
  AVG/DMA-boete-risico en reputatieschade voor MP; nooit doen, ook niet op klant-verzoek
- Client en server parallel laten draaien zonder dedupe: dubbele purchases vernielen
  bidding en rapportage tegelijk
- sGTM opleveren zonder eigenaar: containers degraderen stil bij elke site-release
- Migreren zonder nulmeting: dan is de winst achteraf niet aantoonbaar
- Alles in 1 keer omzetten zonder parallelle meetfase
- Subdomein op een ander domein dan de site zetten (geen first-party context = geen winst)
- Kosten negeren: een Cloud Run-container zonder budget-bewaking is een open rekening
- Advanced consent mode aanzetten zonder vastgelegd juridisch akkoord van de klant
- Test-hits in productie-data laten lopen zonder filter of debug-markering

## Output-formaat

- **sGTM-advies** (md in `analytics/reports/`): beslisboom-uitkomst, hosting-keuze,
  kwalitatieve kosten-baten, migratieplan met planning en eigenaren
- **Architectuur-schema**: hub-diagram met bestemmingen en consent-flow (tekst/ascii
  in het rapport, zodat het versioneerbaar blijft)
- **Coverage-rapport voor/na**: tabel per week, backend vs GA4 vs Ads, plus match-kwaliteit
- Bijgewerkte `account-brief.md`: subdomein, hosting, eigenaar, onderhoudsritme
- **Runbook** voor de eigenaar: maandelijkse checks, contactpunten, rollback-procedure

## Dependencies

- GTM (web plus server), GA4 UI, DNS-beheer van de klant: via MP- of klant-toegang
- Stape-account of GCP-project (Cloud Run) met factuur-eigenaar
- `ga4_tool` voor coverage-checks; backend-data (Shopify of ander platform) als waarheidsbron
- CMP-configuratie: consent-signalen moeten ook server-side aankomen
- `google_workspace_tool` voor klant-facing adviezen en rapportages

## Integratie met andere skills

- **analytics-specialist**: levert de default-advies-context en routeert hierheen
- **analytics-ga4-audit**: verplichte nulmeting vooraf; her-audit na migratie
- **analytics-tagging-plan**: event_id en user_data horen al in de datalayer-spec
- **meta-ads-measurement**: CAPI-kwaliteit en dedupe vanuit de Meta-kant
- **google-ads-value-bidding**: betere conversiedata maakt value-based bidding pas echt sterk
- **retention-lifecycle-specialist**: Klaviyo server-events voeden flows en segmentatie

## Tips

- Verkoop sGTM nooit als "meer conversies" maar als "meer van je echte conversies zien";
  dat voorkomt teleurstelling als de omzet zelf niet stijgt
- Reken hosting-kosten vooraf door met de klant en spreek een plafond af
- Test consent-scenario's ook server-side: deny moet ook daar deny zijn, bewijs het met logs
- Houd 1 bron van waarheid voor event_id (de datalayer), genereer hem nooit per tag
- Bij Stape: gebruik de standaard-integraties, maar documenteer welke aan staan;
  magie zonder documentatie is technical debt
- Plan de omschakeling buiten piekperiodes; geen Black Friday-migraties
- Zet een maandelijkse container-check in het onderhoudsritme: nieuwe tags, error-rates,
  kosten

*Eerste versie: juli 2026. Herzie bij prijs- of platformwijzigingen van Cloud Run/Stape, nieuwe CAPI-vereisten of consent-regelgeving.*
