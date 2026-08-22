---
name: dual-intelligence
description: >
  Roept een onafhankelijke tweede analyse door GPT aan via dual_intelligence_tool
  op de MCP Gateway, volgens het Cross-Model Intelligence Layer protocol v0.7.
  Gebruik bij strategisch werk waar het oordeel telt en het antwoord niet uit data
  volgt — positioneringen, meerjarenplannen, aanbevelingen, causale conclusies,
  keuzes om iets níét te doen. Trigger bij "laat GPT hier eens naar kijken",
  "challenge deze strategie", "wat mis ik hier", "doe een pre-mortem", "second
  opinion op dit plan", "klopt deze redenering", "haal dit door de dual
  intelligence laag", of vóór een deliverable met inzet de deur uit gaat. NIET
  gebruiken bij tool-output, feed-configuratie, exports, code of mechanisch werk —
  daar is toetsing tegen de bron sterker en voegt een tweede model aantoonbaar
  niets toe.
---

# Dual Intelligence

Een tweede brein naast jou dat waarde levert door het oneens te zijn. Jij blijft
auteur en eindbeslisser. GPT levert nooit vervangende tekst.

**Diverge → Critique → Resolve → Preserve.**

Verwachting, eerlijk: enkele procentpunten kwaliteitswinst plus een veel betere
onzekerheidskaart. Geen transformatie. De waarde zit in het zichtbaar maken van
wat je niet zag, niet in het corrigeren van wat je fout had.

## 1. De gate — draait dit protocol überhaupt?

Standaard draai je solo. Drie takken bepalen escalatie:

**Mandatory.** Altijd het protocol, ongeacht wat jij ervan vindt:
- een positionering of herpositionering
- een meerjaren- of marketingplan
- een aanbeveling die niet uit data volgt maar uit oordeel
- een causale conclusie over waarom iets gebeurt
- een advies om iets níét te doen, of om ergens mee te stoppen
- alles wat rechtstreeks naar een klant gaat met budget eraan vast

**Expansion.** Escaleer óók zonder risico-signaal wanneer een grotere
oplossingsruimte waarde heeft: een open strategische vraag, een nieuw concept,
een propositie, een campagne- of kanaalrichting. Dit is niet defensief maar
offensief gebruik, en waarschijnlijk waar de meeste waarde zit.

**Uncertainty.** Jouw eigen twijfel kan escalatie veroorzaken, nooit voorkomen.
Merk je dat je hedge-taal gebruikt, of dat je een keuze maakt waar je een
tegenargument bij kunt bedenken — escaleer.

**Audit sample.** Deze beslis je niet zelf. Roep
`dual_intelligence_tool(action="sample_check", task_id=..., task_type=...)` aan
en volg de uitkomst. De steekproef bestaat juist om de selectiebias van deze gate
te meten — als jij bepaalt wanneer de "willekeurige" controle valt, komt diezelfde
circulariteit terug. De sampler is deterministisch en gestratificeerd, dus
dezelfde taak levert altijd hetzelfde antwoord.

Valt de steekproef op een taak die je solo zou doen: schrijf je solo-output eerst
helemaal af, en bekijk GPT's uitkomst pas daarna. Anders meet je niet wat er
gemist zou zijn.

**Niet escaleren bij:** GAQL-queries, feed-mappings, GSC/GA4-exports,
Channable-regels, code, rapportagecijfers. Toetsing tegen de bron is daar
sterker, en gemeten presteert een tweede model op dit soort werk niet beter.

Vertel de gebruiker in één zin dat je het protocol aanzet en waarom.

## 2. Preset kiezen

| Preset | Wanneer |
|---|---|
| `explore` | Je legt je eerste denkrichting privé vast maar werkt hem nog niet uit; GPT verkent dezelfde opdracht blind; daarna leg je beide oplossingsruimtes naast elkaar vóór je het eindwerk maakt. |
| `challenge` | Je hebt een uitgewerkte conclusie. GPT zoekt waar de redenering tekortschiet. |
| `verify` | Er staan feitelijke geschilpunten open. Routeert per issue naar data of naar de mens. |
| `pre_mortem` | Hoge inzet, onomkeerbaar. GPT probeert het plan te breken. |
| `sharpen` | Inhoud klopt, formulering kan scherper. Levert suggesties per passage, geen herschreven tekst. |

Kies `explore` vaker dan je neiging is. Bij open en creatieve opdrachten waar een
grotere oplossingsruimte waarde heeft: strategie, conceptontwikkeling, nieuwe
proposities, campagnerichtingen, kanaalkeuzes, marktbenadering, positionering,
en elke vraag van de vorm "wat zouden we nog méér kunnen doen".

`challenge` is de veiligere keuze en daarom de verleidelijke default — maar als
je hem altijd kiest, gebruik je een tweede motor uitsluitend als remcontrole. De
grootste winst zit waarschijnlijk niet in wat GPT afkeurt, maar in de richtingen
die het aandraagt waar jij niet aan dacht.

Let op wat `explore` technisch betekent: ook hier leg je eerst je positie vast,
want anders vervalt de anchoring-borging. Het verschil met `challenge` is dat je
hem provisorisch vastlegt en nog niet uitwerkt. Je verliest dus niets door vroeg
te beginnen — je legt alleen vast waar je stond voordat je GPT zag.

## 3. De volgorde is dwingend

```
start → record_position → independent → map_divergence
      → audit → adjudicate → [confirm_merge] → [cycle2] → record_value → finalize
```

De gateway weigert elke andere volgorde. `independent` is technisch onbereikbaar
voordat je eigen standpunt vastligt — dat is de anchoring-borging, en hij zit in
de state machine juist omdat een instructie te negeren valt.

### start

Geef `user_intent` letterlijk door: de opdracht zoals de gebruiker hem stelde,
ongeparafraseerd. Herformuleer je hem, dan heb je je eigen framing al
geïnjecteerd voordat GPT iets zag — óók zonder je antwoord mee te sturen.

`public_intent` is verplicht zodra de preset de webtoegang gebruikt (`explore`,
`verify`, `pre_mortem`): dezelfde vraag, maar zonder klantnaam, zonder
vertrouwelijk detail, zonder iets waaraan de klant te herleiden is. De gateway
weigert te starten zonder. Reden: de letterlijke brief zelf is een lek zodra hij
een web-enabled call in gaat.

`source_manifest` beschrijft de bronnen — per ref `tool`, `lineage`,
`source_type` (`primary`/`secondary`), `query`, `timestamp`, `hash` en
`data_classification` (`public` / `internal` / `restricted`). Die classificatie
bepaalt welke lane de bron mag zien; ontbreekt hij, dan wordt hij `restricted`
behandeld. `evidence_snapshot` is iets anders: de daadwerkelijke broninhoud van
díé run. Het manifest bewijst welke vraag je stelde, de snapshot welke feiten GPT
zag.

Selecteer bronnen waar mogelijk volgens regel — de hele klantmap, het hele
datumbereik — in plaats van met de hand. Elke handmatige selectie noem je
expliciet: je maakt de besmetting niet nul, je maakt hem zichtbaar.

`artifact_classification` staat standaard op `restricted`. Verlaag hem alleen
als het artefact echt geen vertrouwelijk materiaal bevat — deze waarde bepaalt
mede welke classificatie de bevindingen erven, en daarmee waar ze later heen
mogen.

`allowed_read_tools` is een expliciete allowlist van read-tool-namen, per
deliberatie (zie §6 voor de namen). Niet de hele gateway; alleen wat déze vraag
nodig heeft. De gateway toetst elke naam tegen een handmatig onderhouden
trusted-read-only lijst én tegen wat de read-only spiegel daadwerkelijk serveert,
en weigert de rest — een write-tool kan de INTERNAL lane niet bereiken, ook niet
per ongeluk. Presets met `mcp_readonly` (`explore`, `verify`, `pre_mortem`)
weigeren te starten zonder deze lijst.

### record_position

Twee dingen, vóór GPT iets ziet:

- `position` — je kernstandpunt.
- `annex` — genummerd, en dit is de haak waar alle toetsing aan hangt:
  - `A1…` aannames
  - `C1…` feitelijke claims, met bron of expliciet "onverifieerd"
  - `K1…` strategische keuzes, mét de verworpen alternatieven
  - `V1…` meetbare voorspellingen

Zonder die nummering kan GPT niet per item toetsen en kun je later niet meten
welk item door welk bezwaar veranderde.

### independent

Eén call, geen parameters behalve `deliberation_id`. GPT werkt blind: het ziet
`user_intent` (INTERNAL/NONE lane) of `public_intent` (PUBLIC lane), de
gefilterde bronnen, en níét jouw positie. Resultaat: `gpt_items` met id's
`GPT-K1…` (keuzes), `GPT-A1…` (aannames), `GPT-R1…` (risico's), `GPT-V1…`
(metingen), elk met `origin_lane`. Reken op 1–3 minuten; `compute: deep`
(`explore`, `pre_mortem`) kan langer duren.

### map_divergence

Je zet GPT's kern naast die van jou en classificeert per item: `overlap`,
`unique_gpt`, `conflict`, `uncertain`. Elk GPT-item precies één keer.

Dit is geen mechanische stap en die pretentie is gevaarlijk. Je vergelijkt twee
vrije analyses, dat is een oordeel. Classificeer je een uniek inzicht van GPT
abusievelijk als `overlap`, dan verdwijnt het stilzwijgend uit de review.

Daarom: bij twijfel `uncertain`, niet `overlap`. Een valse "uniek" kost tokens;
een valse "overlap" kost het inzicht. `overlap` vereist een reden en de gateway
weigert hem zonder. Alles blijft hoe dan ook in het dossier — mapping bepaalt
alleen waar aandacht heen gaat.

### audit

Bij `visibility: full_artifact` (`challenge`, `pre_mortem`, `sharpen`) stuur je
het deliverable mee als `artifact`; bij `delta_only`/`brief_only` niet. Levert
het issue-ledger: `ISS-…` met `issue_type`, `materiality`, `evidence_strength`
(door de gateway afgewaardeerd naar wat het manifest kan dragen),
`resolvability`, en eventueel `possible_duplicate_of`.

### adjudicate

Per bevinding: `accepted`, `partially_accepted`, `rejected` of `needs_evidence`.
Alles behalve `accepted` vereist een reden en de gateway gooit een fout zonder.
Elk issue moet een beslissing krijgen; de batch wordt pas toegepast als alles
valide is.

Je bent hier geen rechter die bepaalt wie gelijk heeft. Je bent de auteur die
elke materiële afwijking van de review moet kunnen verantwoorden. Verwerpen is
een geldige uitkomst; stil verwerpen niet.

Drie dingen om scherp te houden:

- **Herhaling is geen bewijs.** Vindt zowel de fragment- als de omissie-pass
  hetzelfde punt, dan krijgt het `cross_pass`. Twee prompts van hetzelfde model
  zijn geen twee stemmen. Het verandert je default niet.
- **Bij een feitelijk geschil is `needs_evidence` het juiste antwoord**, niet een
  oordeel. Dan beslist de data, niet een model.
- **Bij een normatieve keuze bestaat geen feitelijke reden.** "Premium
  positionering weegt zwaarder dan volume" is geen datavraag. Daar mag je gewoon
  `rejected` met je afweging als reden — en dat blijft staan.

Geef `changed_refs` mee bij elke bevinding die daadwerkelijk tot een wijziging
leidde (annex-refs zoals `K2`, `A1`). Dat is het enige signaal waarmee je later
kunt zien wát GPT veranderde in plaats van dát jij van gedachten veranderde.

### confirm_merge

Vindt de gateway twee bevindingen met dezelfde vingerafdruk, dan meldt hij ze als
`possible_duplicates` — en verandert verder niets. Beide blijven bestaan. Alleen
jij kunt ze samenvoegen, met een reden, via `confirm_merge`. Het overblijvende
issue erft altijd de hoogste materialiteit, zodat samenvoegen nooit de nette
manier wordt om een zwaar bezwaar te laten verdwijnen.

### cycle2

Alleen voor open punten met materialiteit `high`/`critical`, en gerouteerd op
`resolvability`: `empirical` naar de interne data (INTERNAL lane, vereist
`allowed_read_tools` én de spiegel), `externally_researchable` naar het web,
`judgment_tradeoff` naar de gebruiker, `unknowable` rechtstreeks naar bewaarde
dissent. Geen automatische herkansing voor GPT. Harde cap: nooit een derde.

### record_value

Dit is de stap die je gaat willen overslaan en die je juist niet moet overslaan.

Het issue-ledger registreert wat er mis was. Dat is de helft. Een tweede model
verbreedt ook de oplossingsruimte, en die winst is onzichtbaar in een
defect-administratie. Leg daarom vast wat de laag opleverde, met het type:

`correction` · `expansion` · `reframing` · `new_option` · `synthesis` ·
`tail_risk_catch` · `decision_change`

En de bron (`source`): `gpt`, `claude_after_gpt` of `human`.

`synthesis` is de belangrijkste en de meest verdachte. Die betekent: er staat
iets in het eindwerk dat in géén van beide blinde standpunten voorkwam. Dat is
het bewijs voor Claude × GPT in plaats van Claude + GPT — en het is precies de
claim waar jij belang bij hebt. De gateway berekent daarom een woordoverlap met
beide blinde standpunten en bewaart die standpunten integraal, zodat een derde
partij je claim kan natrekken. Claim hem dus alleen als je hem hard kunt maken.

`would_exist_without_cmil` (`yes` / `probably` / `probably_not` / `no`) is een
contrafeitelijke inschatting en wordt standaard opgeslagen als jóuw schatting,
expliciet gemarkeerd. Vraag de gebruiker om bevestiging bij alles wat je als
`high` of `transformative` registreert en zet dan `human_confirmed: true` —
anders beoordeelt de partij die gemeten wordt haar eigen bijdrage.

### finalize

Levert het eindverslag plus metrieken (`synthesis_gain`, dispositie-telling,
waardebijdragen). Een `high`/`critical` bezwaar dat je verwierp blijft staan als
`materially_dissenting` — in het dossier, altijd. Haal daarna `dossier` op en
bewaar hem in de klantmap: de gateway houdt hem maar vier uur in geheugen.

## 4. Wat er in je eindproduct komt

Bij een materieel geschil dat de uitkomst bepaalt: één sectie met beide
argumenten en wat waar zou moeten zijn om GPT gelijk te geven. Niet
gladstrijken. In ongeveer een kwart van de gevallen heeft de afwijkende positie
gelijk, en daar voegt de gebruiker waarde toe.

Wat in de klanttekst komt is een redactionele keuze — een klant hoeft geen
interne discussie te lezen. Wat in het dossier staat is dat niet.

Nooit een "geverifieerd"-label of een groen vinkje omdat beide modellen het eens
waren. Overeenstemming correleert zwak met correctheid; dat stempel fabriceert
vertrouwen dat er niet is.

## 5. Rapporteren aan de gebruiker

Kort. Wat GPT vond dat je miste, wat je hebt overgenomen, wat je hebt verworpen
en waarom, en welk geschil open bleef. Geen samenvatting van het hele protocol —
de gebruiker heeft het proces niet gevraagd, hij heeft het resultaat gevraagd.

Toon de issues **ongefilterd** in dit vaste format, met jouw dispositie ernaast
— de gebruiker arbitreert, niet jij. Jij bent degene die geauditeerd wordt; de
auditee bepaalt niet wat er in het auditverslag komt.

```
ISS-003 · high · assumption · K2
GPT: <kritiek in één zin>
Ik: rejected — <reden>
```

Meld ook wat het kostte als het significant was, en wanneer het protocol niets
opleverde. Een ronde waarin GPT alleen bevestigde is een datapunt, geen falen —
maar als dat structureel wordt, verdient de laag zijn plek niet en moet je dat
zeggen.

## 6. Referentie — de tool zoals hij werkelijk is

`dual_intelligence_tool` staat op de MCP Gateway (`mcp-gateway.direqtor.com`)
en retourneert een JSON-string. Elke vervolgstap vereist `deliberation_id` uit
`start`. Fouten komen terug als `{"error": ...}` en veranderen niets: een batch
wordt pas toegepast als alles valide is.

**Call-vormen**

```
start             preset, user_intent, [public_intent], [source_manifest],
                  [evidence_snapshot], [allowed_read_tools],
                  [artifact_classification], [restricted_lanes_ok], [task_id, task_type]
record_position   position: {...}, annex: {"A1": "...", "C1": "...", "K1": "...", "V1": "..."}
independent       —
map_divergence    mapping: [{"id": "GPT-K1", "bucket": "overlap|unique_gpt|conflict|uncertain", "reason": "..."}]
audit             [artifact], [artifact_classification]
adjudicate        decisions: [{"issue_id": "ISS-001", "disposition": "...", "reason": "...", "changed_refs": ["K2"]}]
confirm_merge     merges: [{"keep": "ISS-001", "merge": "ISS-004", "reason": "..."}]
cycle2            —
record_value      contributions: [{"value_type": "...", "source": "gpt|claude_after_gpt|human",
                    "materiality": "low|medium|high|transformative", "description": "...",
                    "affected_refs": ["K2"], "caused_by_issues": ["ISS-003"],
                    "would_exist_without_cmil": "yes|probably|probably_not|no",
                    "human_confirmed": false}]
finalize          —
status / dossier  —
sample_check      task_id, task_type
```

**Read-tools voor `allowed_read_tools`** (de read-only spiegel serveert exact
deze veertien; alles daarbuiten wordt geweigerd):

`ga4_run_report` · `ga4_list_properties` · `gsc_query` · `gsc_inspect_url` ·
`google_ads_search` · `seo_site_overview` · `seo_keywords_overview` ·
`seo_links_refdomains` · `dfs_keywords_volume` · `dfs_serp_live` ·
`pagespeed_run` · `techseo_crawl_read` · `shopify_graphql_read` · `channable_read`

Google-tools in de spiegel nemen `profile` als parameter; noem in `user_intent`
welk profiel (`default`/`springbok`/`searchresult`/`personal`) van toepassing is,
anders kiest GPT `default`.

**Lanes.** PUBLIC = websearch, ziet alleen `public_intent` en `public`-bronnen.
INTERNAL = read-only spiegel, ziet `user_intent` en bronnen t/m `internal`
(`restricted` alleen met `restricted_lanes_ok`). NONE = geen tools. Een call
mengt nooit twee lanes; `lanes_used` in elk antwoord zegt wat er gebeurd is.

**Kosten en tijd.** Reviewer is `gpt-5.6-sol`, `store: false` afgedwongen.
Een `verify`-ronde met twee lanes: ~80 s en ~30 items; `cycle2` verdubbelt dat.
De gateway-proxy kapt calls boven 240 s af — zie je een timeout bij `explore`
of `pre_mortem`, meld dat en probeer niet stilletjes een lichtere preset.
