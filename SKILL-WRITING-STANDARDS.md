# SKILL-WRITING-STANDARDS.md

Kwaliteitsstandaard voor elke SKILL.md in dit repo. Doel: een model zonder MP in de kamer (Sonnet of Opus) schrijft hiermee een skill op near-Fable niveau. Gedistilleerd uit de vijf sterkste skills: seo-geo-specialist, cro-specialist, google-ads-specialist, ux-specialist en retention-lifecycle-specialist.

Gebruik: lees dit bestand plus skill-template.md plus 1 relevante exemplaar-skill VOORDAT je schrijft. Schrijf daarna in 1 keer het hele bestand en draai de zelfvalidatie onderaan. Lever pas op als de Definition of Done volledig groen is.

---

## 1. Wat de beste skills goed doen (de 10 principes)

1. **Rol-framing direct en zelfverzekerd.** De body opent met "Je bent MP's [meest ervaren rol]". De skill IS de specialist, geen assistent die over een specialist praat.
2. **Description is een triggering-machine.** Vaste anatomie (zie sectie 2), letterlijke triggerzinnen tussen dubbele aanhalingstekens, want daar matcht de skill-loader op.
3. **Data voor mening.** Elke werkwijze begint met context lezen (klantmap, account-brief.md, history-log.md) en data trekken; pas daarna advies.
4. **Playbook-dichtheid is het verschil.** Tabellen, beslisbomen, genummerde volgordes, drempelwaarden en checklists met echte aantallen. Proza legt uit, playbooks maken uitvoerbaar.
5. **Elke sectie eindigt in een beslissing.** Niet "interessant om te monitoren" maar "boven X: doe Y, eigenaar Z, hercheck-datum".
6. **Afbakening expliciet.** Wat deze skill NIET doet en welke skill dat wel doet. Overlap zonder eigenaarschap veroorzaakt dubbele of tegenstrijdige adviezen.
7. **Klant-impact taal.** Nooit alleen "positie steeg" of "coverage verbeterde"; altijd de vertaling naar euro's, leads of uren.
8. **Non-negotiables benoemd.** Wat er nooit gebeurt zonder MP-bevestiging (publiceren, live zetten, klant-communicatie versturen, destructieve wijzigingen).
9. **Actualiteit gedateerd.** 2026-feiten krijgen een datum of bron-anker in de tekst, zodat veroudering zichtbaar is. Een skill zonder datums veroudert onzichtbaar.
10. **Logging als reflex.** Elke wijziging of run wordt gelogd in history-log.md van de klantmap: wat, waarom, verwacht effect, evaluatiedatum.

## 2. Description-anatomie (frontmatter)

Vast formaat, in deze volgorde, als folded scalar:

```yaml
---
name: skill-naam-in-kebab-case
description: >
  [1] Rol/domein in 1 zin. [2] "Gebruik ALTIJD wanneer/bij ..." met de kern-situaties.
  [3] "Trigger bij" gevolgd door 8-15 letterlijke triggerzinnen tussen dubbele
  aanhalingstekens, gescheiden door komma's, afgesloten met "of elke vraag over [domein]".
  [4] Slotzin: wat de skill leest (klantmap-bestanden), welke 2026-principes hij toepast
  en naar welke sub-skills hij schakelt.
---
```

Telbare eisen:

- Lengte 700-950 tekens (harde max 950; de Cowork-validator kapt boven 1024)
- Minimaal 8, maximaal 15 triggerzinnen tussen dubbele aanhalingstekens
- Triggerzinnen zijn spreektaal zoals MP typt ("waarom daalt BE", "audit mijn GA4"), geen kebab-case-jargon
- `name:` is byte-identiek aan de foldernaam
- Geen andere frontmatter-velden dan name en description

## 3. Body-structuur (verplicht)

`# Titel` plus 1-3 intro-zinnen, daarna exact deze H2's in deze volgorde:

| Sectie | Moet bevatten | Test |
|---|---|---|
| ## Wanneer activeren | 6-10 concrete situaties als bullets | Elke bullet is een herkenbaar werkmoment, geen categorie |
| ## Werkwijze | Genummerde stappen: context lezen → data → uitvoeren → bevestigen → loggen | Stap 1 verwijst naar de klantmap; MP-bevestiging voor externe acties zit erin |
| ## Kern-kennis (2026) | Meerdere ### subsecties met playbooks | Zie kwaliteitspoort (sectie 4) |
| ## Anti-patterns | 6-10 echte fouten uit de praktijk | Elke regel benoemt de fout EN waarom die schaadt |
| ## Output-formaat | Concreet skelet (markdown-blok of tabel) per deliverable | Een ander model kan de output exact reproduceren |
| ## Dependencies | Tools, klantmap-bestanden, toegangen | Elke dependency is een bestaand tool of bestand, niet verzonnen |
| ## Integratie met andere skills | Bestaande skill-namen met de taakverdeling | Elke genoemde skill bestaat in skills-source/ (check dit) |
| ## Tips | 6-9 ervaringsregels | Elke tip zou een junior verrassen; open deuren schrappen |

Uitzondering: master-skills (-specialist, growth-lead-*) mogen extra secties toevoegen tussen Werkwijze en Kern-kennis (Beslismodel met routing-tabel, maturiteitsmodel, KPI-framework, sub-skills-tabel), zoals ux-specialist en retention-lifecycle-specialist. De 8 kernsecties blijven verplicht.

Afsluiten met footer op de laatste regel:

```
*Eerste versie: [maand jaar]. [Concrete onderhouds-trigger: wanneer moet dit bestand herzien].*
```

## 4. Kwaliteitspoort: playbook-dichtheid (testbaar)

Een skill haalt de poort alleen als Kern-kennis dit bevat:

- Minimaal 3 van deze vormen: tabel, beslisboom (code-blok of geneste bullets), genummerd stappenplan, gescoorde checklist
- Minimaal 8 concrete beslisregels of drempelwaarden ("boven 15% afwijking zonder verklaring → verdiepen", "minimaal 4-6 weken runtijd")
- Minimaal 5 concrete tool-, platform- of productnamen die kloppen
- Minimaal 2 NL/EU-specifieke elementen waar het domein dat toelaat (iDEAL, AVG, KvK, bol, Bancontact, bouwvak)
- Nul open deuren: elke ### moet iets bevatten dat een generieke assistent NIET uit zichzelf zou schrijven. Twijfeltest: zou dit antwoord ook uit een kaal model komen zonder deze skill? Dan schrappen of verdiepen.

## 5. Actualiteits-regels

- 2026-feiten expliciet benoemen en dateren ("per 15 juni 2026", "sinds de maart-pivot")
- GEEN verzonnen cijfers, percentages of productclaims. Alleen: (a) cijfers uit een aangeleverde bron of bestaande skill, (b) eigen vuistregels, expliciet gelabeld als "vuistregel" of "werk-drempel"
- Bij snel bewegende domeinen (AI-platforms, ads-features): een zin opnemen die opdraagt de actuele stand te verifieren voor implementatie-beslissingen
- Legacy-waarschuwing: de april-2026 skills pushen llms.txt zwaarder dan nu verdedigbaar (Google's 2026 AI-guide noemt llms.txt onnodig voor Google-features). Kopieer dat standpunt niet; breng de nuance: optioneel experiment voor niet-Google engines

## 6. Vorm en taal

- Nederlands, strategisch-operationeel register; Engelse vaktermen blijven Engels
- 200-290 regels (hard); mik op 230-280. Master-copilots met veel klantcontext mogen richting 290
- GEEN em-dash en GEEN en-dash, nergens; gebruik een dubbele punt, komma of herformuleer. Pijl → is toegestaan
- GEEN emoji (de emoji-headers in enkele oude masters zijn legacy; niet kopieren)
- Directe aanspreekvorm ("je"), actieve zinnen, geen corporate-speak
- Klantmap-conventie respecteren: <klantmap>/<discipline>/ met account-brief.md en history-log.md; nooit bestanden buiten de eigen discipline-map wijzigen

## 7. Do's en Don'ts

Do:

- Lees eerst 1 sterke verwante skill volledig als kalibratie
- Schrijf de description als laatste, wanneer je weet wat de skill echt kan
- Gebruik [MP: aanvullen] voor klant-specifieke waarden die je niet zeker weet
- Verwijs naar bestaande skills en tools bij hun exacte naam (verifieer in skills-source/)
- Maak drempels en cadansen expliciet (wekelijks/maandelijks/per kwartaal)

Don't:

- Een skill schrijven als samenvatting van een vakgebied (het is een werkinstructie, geen Wikipedia)
- Secties vullen om de regelteller te halen; schrap liever een dunne ### dan hem op te blazen
- Beloftes of garanties formuleren richting klanten
- Wachtwoorden, tokens of persoonsgegevens in een skill zetten
- De structuur van oude skills klonen inclusief hun afwijkingen (emoji, ontbrekende secties)

## 8. Definition of Done (afvinken voor oplevering)

1. Foldernaam == name: in frontmatter (byte-identiek, kebab-case)
2. Frontmatter bevat alleen name en description, folded scalar met 2-spaties inspringing
3. Description 700-950 tekens met 8-15 triggerzinnen in spreektaal
4. Regelaantal 200-290
5. Alle 8 kernsecties aanwezig in de juiste volgorde
6. Kwaliteitspoort gehaald: 3+ playbook-vormen, 8+ beslisregels, 5+ echte toolnamen
7. Minimaal 1 gedateerd 2026-feit; nul verzonnen cijfers; vuistregels gelabeld
8. Geen em-dash, geen en-dash, geen emoji
9. Elke genoemde skill en tool bestaat echt (gecheckt tegen skills-source/ en de tool-lijst)
10. Anti-patterns benoemen fout plus schade; Tips verrassen een junior
11. Output-formaat bevat een reproduceerbaar skelet
12. Non-negotiables aanwezig waar de skill iets kan publiceren, versturen of muteren
13. Footer met versie-datum en onderhouds-trigger op de laatste regel
14. Zelfvalidatie (sectie 9) draait groen
15. Skill toegevoegd aan plugin-map.json en build-plugins.py slaagt

## 9. Zelfvalidatie (verplicht draaien)

```bash
cd <repo-root> && python3 - <<'EOF'
import re
n = "SKILL-NAAM-HIER"
p = f"skills-source/{n}/SKILL.md"; t = open(p, encoding='utf-8').read(); L = len(t.splitlines())
m = re.search(r'^---\s*\n(.*?)\n---', t, re.S); fm = m.group(1) if m else ''
d = re.search(r'description:\s*>\s*\n((?:  .*\n?)+)', fm)
dl = len(d.group(1).replace('\n  ', ' ').strip()) if d else -1
triggers = len(re.findall(r'"[^"]{3,60}"', d.group(1))) if d else 0
bad = [c for c in [chr(8212), chr(8211)] if c in t]  # em-dash (8212) en en-dash (8211)
emo = re.findall(r'[\U0001F000-\U0001FAFF☀-➿]', t)
req = ["## Wanneer activeren", "## Werkwijze", "## Kern-kennis", "## Anti-patterns",
       "## Output-formaat", "## Dependencies", "## Integratie", "## Tips"]
mist = [h for h in req if h not in t]
print(f"regels={L} (200-290)", f"desc={dl} (700-950)", f"triggers={triggers} (8-15)",
      f"name_ok={bool(re.search(r'name:'+chr(92)+'s*'+re.escape(n), fm))}",
      f"dash={bad}", f"emoji={emo[:3]}", f"mist={mist}")
EOF
```

Daarna: `python build-plugins.py <plugin-naam>` en controleren dat de validator slaagt.

## 10. Exemplaar-skills (kalibratie-leeslijst)

| Schrijf je een... | Lees eerst |
|---|---|
| Master/router-skill | ux-specialist (schoonste structuur) plus retention-lifecycle-specialist (principes-diepte) |
| Operationele diepte-skill | retention-lifecycle-deliverability of analytics-ga4-audit (checklist-dichtheid) |
| Klant-copilot | growth-lead-badenman (ecosysteem-patroon) plus badenman-data-analyst (analyse-laag) |
| Proces/ops-skill | weekly-client-update of context-index-builder (ritme en templates) |

## 11. Aanvulling medio juli 2026: verificatie, distillatie en context-zuinigheid

1. **Verificatie boven prompting.** Uitvoerende skills bevatten naast instructies ook: acceptatiecriteria, bewijsvereisten (waarmee toon je aan dat het klopt), escalatieregels (wanneer terug naar een zwaarder model of naar MP) en stop-condities. Een skill zonder verificatie-laag is een veredelde prompt.
2. **Model-routing regel.** Schrijf elke skill zo dat Sonnet hem kan uitvoeren (MODEL-ROUTING.md: skill verbeteren gaat voor tier verhogen). Blijkt een taak model-zwaar, leg dan in Tips vast waarom en wanneer opgeschaald wordt.
3. **Progressive disclosure (Anthropic-richtlijn).** SKILL.md is de beslislaag: huisnorm 200-290 regels, harde bovengrens 500. Diepe naslag (playbooks, bibliotheken, lange referentielijsten) gaat naar references/ in de skill-map met een verwijzing in SKILL.md; scripts naar scripts/. De description is een trigger-signaal, geen samenvatting.
4. **Skill-ops ritme.** De tweede-keer-regel: typ je een instructie voor de tweede keer, maak er dan een skill van (via skill-distillation). Kwartaal-doorlichting van de hele bibliotheek via skill-library-audit; losse inzichten doorlopend via knowledge-capture; vakkennis-corpora via research-corpus-builder.
5. **Externe skills zijn onderzoeksbron, geen uitvoerbare code.** Gedownloade skills en repos eerst inhoudelijk en technisch controleren (scripts, dependencies, prompt-injection- en data-lek-patronen) voordat ze toegang krijgen tot bestanden, connectors of accounts.

---

*Eerste versie: juli 2026. Aanvulling sectie 11: medio juli 2026. Herzie wanneer de Cowork skill-loader of plugin-validator wijzigt, of wanneer een nieuwe exemplaar-skill de standaard verhoogt.*
