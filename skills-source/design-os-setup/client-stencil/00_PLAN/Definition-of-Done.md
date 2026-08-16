# Definition of Done
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Een fase of document is pas "gereed" als aan alle onderstaande criteria is voldaan.

## Algemeen (elk document)

- Zelfstandig leesbaar, met datum, koppen en duidelijke structuur.
- Elke kwantitatieve claim verwijst naar een bron (meetbron-property, de zoekbron, Ads-account, bestand) of staat expliciet als aanname in `09_DECISION-LOG/Assumptions.md`.
- Werktaal en leesteken-conventies conform P6 in `01_CONTEXT/Client-Profile.md`. Terminologie conform `01_CONTEXT/Brand-Context.md`.
- Relevante keuzes vastgelegd in `09_DECISION-LOG/Decision-Log.md`.

## Per fase

Fasenamen en -nummers volgen de fasetabel in `00_PLAN/Plan-van-Aanpak.md`; die tabel is leidend.
Het traject begint bij fase 0, niet bij fase 1.

Elke fase sluit af met een Red Team-review plus geldig Gate-Record. Bij traject-omvang (P8)
`vol` is dat een review per fase; bij `light` zijn het drie samengevoegde reviews: na fase 3
(dekt 0 t/m 3), na fase 6 (dekt 4 t/m 6) en na fase 8 (dekt 7 en 8). Fase 9 handoff heeft ook
bij `vol` geen eigen review en hangt aan die van fase 8. Geen fase blijft ongetoetst.

**Fase 0, Plan & governance**
- `00_PLAN/` compleet: methodiek, scope, deze Definition of Done, governance met rollen en gates.
- `09_DECISION-LOG/` en `10_PROMPTS-AND-AGENTS/` aangemaakt en klaar voor gebruik; Decision-Log, Open-Questions en Assumptions bestaan als levend document.
- Alle placeholders in de uitgerolde stencil staan op de swap-lijst en zijn toegewezen aan de stap waarin ze worden ingevuld.

**Fase 1, Context**
- `01_CONTEXT/Client-Profile.md` volledig: alle acht parameters (P1 t/m P8) gezet of expliciet als openstaande vraag gemarkeerd. Fase 1 is niet af zolang er een parameter leeg is; dat geldt ook voor P8 traject-omvang, omdat fase 5b, de template-scope en het review-ritme daarop draaien.
- Context-Index gevuld; elk gekopieerd bronbestand heeft een reden-regel.

**Fase 2, Data-baseline**
- Data-toegangen compleet gedocumenteerd (bron, identifier, beperking).
- Measurement-QA uitgevoerd voor conclusies; bekende meetfouten geflagd.
- Funnel gesegmenteerd op minimaal device, kanaal, nieuw/terugkerend, landingspagina, en bij meerdere markten ook markt.
- Waarde-baseline met meer dan alleen de conversieratio: volume en waarde van de primaire conversie, waarde per conversie volgens het conversie-model (P1), rendement per kanaal waar een advertentiebron bestaat, en de kwaliteits-guardrail.

**Fase 3, Diagnose**
- Per kern-flow een audit met bewijs (data plus heuristiek), niet alleen meningen.
- Elk gevonden probleem koppelt aan een KPI en een segment.

**Fase 4, Strategie**
- Conversion Architecture ingevuld, beslismomenten (BM-X) benoemd, 5 tot 9 stuks.
- Elk BM heeft gebruikersvraag, frictie met E-ID, gewenste beslissing en design-ingreep.
- Elk lek uit de Diagnose-Samenvatting is toegewezen aan een BM of expliciet buiten scope.
- De kern-flow is in 1 zin benoemd met template-IDs (scope voor fase 5b).
- Beslismomenten met OPEN oorzaak zijn gemarkeerd (de forks voor fase 5b).
- Page-Inventory en Template-Registry gevuld; per template een primaire intentie en KPI. Bij traject-omvang (P8) `light` heeft elke template buiten scope de status OUT-OF-SCOPE met een reden.
- Overgeslagen strategie-modules gemotiveerd in het Decision-Log.
- Propositie-hierarchie en page-type-strategie onderbouwd met intentie- en performancedata.

**Fase 5, Hypotheses**
- Elke hypothese heeft: probleem, bewijs, hypothese, pagina/flow, KPI, segment, ontwerpimpact, testvorm, risico.
- Geprioriteerd via impact-effort (ICE of vergelijkbaar).

**Fase 5b, Richtingen**
- Het aantal Direction Cases uit traject-omvang (P8) op de kern-flow, vijf bij `vol` en drie bij `light`, elk met een expliciet "ten koste van". Bij `light` mag het format verkort, met dezelfde verplichte velden.
- Elke richting draagt minimaal 1 eigen kwantitatief Evidence Item plus 2 laag-2 items, waarvan minimaal 1 E-CASE of E-PERS.
- Velden "welke hypotheses dit bewust NIET bedient" en "wat zou bewijzen dat deze richting fout is" gevuld.
- Anti-convergentie-poort groen op eerste scherm, beslismechaniek, structuur en dichtheid, visuele taal.
- Geldig Gate-Record (GATE-DIR-[nr]) dat alle richtingen in de set dekt; richting gekozen door de lead en gelogd in `09_DECISION-LOG/Decision-Log.md` met verwijzing naar dat recordnummer.

**Fase 6, Besluit**
- DDR's geschreven binnen het mandaat van de gekozen richting.
- Kritieke DDR's APPROVED met een geldig Gate-Record (GATE-DDR-[nr]) dat hun ID's letterlijk dekt en jonger is dan hun laatste wijziging; Coverage Matrix actueel.

**Fase 7, Design**
- Figma-frames binnen het bestaande design system en binnen het visuele mandaat van de gekozen richting; componenten en tokens hergebruikt.
- Elke frame gekoppeld aan een APPROVED of PERMANENT DDR; prototype gekoppeld aan de hypotheses die het test.

**Fase 8, Validatie**
- Meetbaar testplan met guardrails, sample-size-logica en trackingspecificatie.
- QA-checklist voor live.

**Fase 9, Handoff**
- Dev-ready specs, tracking-plan en een gefaseerd rollout-plan met rollback-criteria dat big-bang-risico vermijdt, passend bij de infrastructuur die er is (met of zonder staging en feature flags).
