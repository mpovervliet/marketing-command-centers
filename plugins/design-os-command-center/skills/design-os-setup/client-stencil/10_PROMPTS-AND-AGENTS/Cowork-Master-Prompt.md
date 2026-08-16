# Cowork-Master-Prompt
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Herbruikbare prompts voor Cowork als regisseur/strateeg/analist. Vervang [KLANTMAP], [KLANT], [SITE], [MEETBRON_ID], [ZOEKBRON_ID], [ADVERTENTIEBRON_ID], [PROFILE], [PRODUCT].

Eén placeholder wordt later ingevuld dan de rest: [AANTAL-RICHTINGEN]. Hij staat wél op de
swap-lijst en in de placeholder-scan, maar hij hoort niet thuis in de zoek-en-vervang-stap aan
het begin van de uitrol, want zijn waarde bestaat dan nog niet. De volgorde is hard:

1. Zoek-en-vervang-stap: alle intake-placeholders ([KLANTMAP], [KLANT], [SITE], [MEETBRON_ID],
   [ZOEKBRON_ID], [ADVERTENTIEBRON_ID], [PROFILE], [PRODUCT]). [AANTAL-RICHTINGEN] blijft hier
   bewust staan.
2. Stap waarin het klantprofiel wordt ingevuld: P8 traject-omvang wordt vastgesteld in
   `01_CONTEXT/Client-Profile.md`.
3. Pas dan [AANTAL-RICHTINGEN] invullen: **5** bij `vol`, **3** bij `light`, nooit minder dan 3.

Doe stap 3 vóór je een prompt plakt; deze prompts worden letterlijk gebruikt. De fase 1-gate
toetst op nul openstaande placeholders, dus ook op deze.

## Master-instructie (start van een redesigntraject)

```
Werk in de map [KLANTMAP]/design-os/ (de map die design-os-setup uitrolt).
Doel: bouw een data-gedreven UX/CRO-redesigntraject waarbij elke ontwerpbeslissing
herleidbaar is naar data, klantintentie, commerciele impact of UX-frictie.

De scope van dat traject is niet vast maar volgt uit het klantprofiel
(`01_CONTEXT/Client-Profile.md`). Lees die twee parameters voor je begint:

- P7 traject-modus bepaalt welke fases draaien en waar het traject eindigt: `diagnose-only`
  (0 t/m 3, geen richtingen en geen DDRs), `kern-flow` (0 t/m 9 op 1 flow), `vol-redesign`
  (0 t/m 9 op alle kern-templates) of `audit-bestaand-design` (0 t/m 3 plus een toets van
  bestaande componenten op de score).
- P8 traject-omvang bepaalt het volume: bij `vol` alle kern-templates uit het
  Template-Registry, bij `light` de kern-flow plus maximaal 2 aanpalende templates.

Alleen bij P7 `vol-redesign` met P8 `vol` gaat het over de volledige site. Draai nooit meer
scope dan deze twee parameters toestaan.

Werkwijze:
1. Verzamel en indexeer bestaande context in 01_CONTEXT.
2. Verifieer live databronnen via de MCP Gateway en documenteer beschikbaarheid,
   beperkingen en datakwaliteit in 02_DATA-BASELINE.
3. Maak eerst een Measurement-QA voordat je conclusies trekt uit events in de gedragsbron.
4. Segmenteer alle funnel- en performancedata minimaal op device, kanaal,
   landingspagina, producttype, brand/non-brand en new/returning waar beschikbaar.
5. Maak een CRO/UX-diagnose per belangrijkste flow.
6. Maak een conversion architecture met beslismomenten (BM-X) in 04_STRATEGY.
7. Vertaal inzichten naar een hypothese-backlog (bewijs, impact, KPI, risico, testvorm).
8. Genereer in fase 5b [AANTAL-RICHTINGEN] ontwerprichtingen op de kern-flow, elk in een eigen
   geisoleerde subagent, elk met een user case en een business case. Leg ze aan de lead voor;
   de lead kiest de weddenschap. Het systeem doet geen aanbeveling.
9. Schrijf pas daarna DDRs, en alleen binnen de gekozen richting.
10. Gebruik Figma MCP voor design system en redesign-frames, pas na een geldig Gate-Record met oordeel GO dat de betreffende DDR-IDs dekt.
11. Leg elke belangrijke keuze vast in 09_DECISION-LOG.

Output: per fase concrete markdown-documenten in de juiste map.
Geen losse conclusies in chat. Elke claim gekoppeld aan brondata, observatie of aanname.
```

## Fase-prompts

- **Data-baseline:** "Trek voor meetbron-property [MEETBRON_ID] (profile [PROFILE]) de baseline (90d): device-split, kanaal, new/returning, top landingspagina's met conversie, en de funnel met betrouwbare events. Doe eerst Measurement-QA en flag onbetrouwbare events in het Data-Contract."
- **Diagnose:** "Maak per kern-flow uit `03_SITE-STRUCTURE/Template-Registry.md` een audit met bewijs (data plus heuristiek). Koppel elk probleem aan een KPI en segment en registreer bevindingen als Evidence Items."
- **Hypotheses:** "Zet de diagnose om in een hypothese-backlog met het vaste format en prioriteer via ICE."
- **Strategie:** "Bouw de Conversion Architecture en Decision-Moment-Map: benoem de beslismomenten (BM-X) en koppel elk aan bewijs en een hypothese."
- **Richtingen (fase 5b):** "Leid de forks af uit de evidence en genereer [AANTAL-RICHTINGEN] ontwerprichtingen op de kern-flow, elk in een eigen subagent met een verbodslijst van de mechaniek en visuele taal van de andere richtingen. Elk een Direction Case met user case, business case, drie bewijslagen, functioneel en visueel mandaat en een falsificatie-veld. Draai daarna de anti-convergentie-poort en de Red Team-toets."
- **Design:** "Start per template een Agent 1-sessie (Design Decision Compiler) binnen de gekozen richting, laat de DDRs door Agent 2 (Red Team, altijd als aparte subagent) keuren tot er een geldig Gate-Record ligt, en bouw daarna via Agent 3 in Figma."
- **Validatie:** "Maak per experiment een testplan met primary KPI, guardrails, MDE, sample-size en trackingspecificatie; QA voor livegang."

## Vaste parameters ([KLANT])

Vul hier de identifiers van de meetbronnen uit P2 in; de veldnamen verschillen per platform.


- de gedragsbron: `profile=[PROFILE]`, `property_id=[MEETBRON_ID]`.
- de zoekbron: `profile=[PROFILE]`, `site_url=[ZOEKBRON_ID]`.
- Ads: `profile=[PROFILE]`, `customer_id=[ADVERTENTIEBRON_ID]`.
