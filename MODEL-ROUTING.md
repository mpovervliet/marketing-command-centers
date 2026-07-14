# MODEL-ROUTING.md — addendum bij CLAUDE.md

> Plak de sectie tussen de markers rechtstreeks onderaan je globale CLAUDE.md.
> Sluit aan op je bestaande regels: Gateway FIRST (regel 1) blijft de grootste token-besparing; dit voegt regel 4 toe.

---

## Analyse huidige setup (referentie, niet plakken)

**Wat al goed staat — niet wijzigen:**

| Bestaand element | Token-effect |
|---|---|
| Gateway-first, browser als laatste redmiddel | Grootste besparing: 1 API-call i.p.v. screenshot/DOM-loops |
| Profile-switching vóór UI-fallback | Voorkomt dure browser-sessies bij auth-issues |
| Eerst `search` dan `mutate` + idempotency-check | Voorkomt foute mutaties → geen herstel-runs |
| Command-center skills (90+ playbooks) | Expertise zit in de skill, niet in het model → Sonnet levert Opus-kwaliteit op routinewerk |
| Common pitfalls-sectie | Voorkomt herhaalde fout-iteraties |

**Eén aanvulling op de bestaande structuur:** rol het `CONTEXT_INDEX.md`-patroon van NICE2STAY uit naar alle klantmappen (SPRINGBOK/BADENMAN, IBS/MOLTON BROWN, LA FUGA, REDSWARE). Eén index-bestand per klant scheelt elke sessie leeswerk over de hele map.

---

<!-- ===== BEGIN PASTE → CLAUDE.md ===== -->

## Model-routing (Sonnet default → Opus → Fable)

**Regel 4: Sonnet is default. Escaleer bewust, nooit uit gewoonte.**
Prijzen per 1M tokens: Haiku $1/$5 · Sonnet $3/$15 · Opus $5/$25 · Fable $10/$50.

| Tier | Wanneer (gekoppeld aan mijn werk) |
|------|------|
| **Haiku** | Subagent fan-out: bulk-enrichment (OUTREACH/Master.v3), scraping/parsing via apify, classificatie, kale data-pulls (GSC/GA4/Ads exports) |
| **Sonnet** (default) | Alle skill-gedreven routinewerk: weekly optimize Ads/Meta, search terms, Channable rules, content briefs + Surfer, meta descriptions, gastcommunicatie & facturen La Fuga, meeting prep/debrief, rapport-drafts, alle single-tool Gateway-calls |
| **Opus** | Complexe analyse binnen één domein: volledige audits (80–100+ punten), strategie-docs, lastige mutate-reeksen, cross-check GA4×Ads, klant-facing eindversies, pipeline-debugging. Ook: Fable-vervanger bij NDA-gevoelige klantdata |
| **Fable** | Alleen bij minstens één van drie criteria hieronder |

**Fable-criteria (anders Opus/Sonnet):**
1. **Lange autonome run zonder check-ins** — complete klant-onboarding (setup-skill + audit + baseline + rapport in één opdracht), Master.v3 enrichment-pipeline end-to-end, La Fuga back-office bouwfases
2. **Cross-domein synthese over veel bronnen** — cross-market SEO (hreflang + feeds + Ads, type Molton Brown), QBR's die GSC+GA4+Ads+Meta+Ahrefs combineren, command-center gap-analyses
3. **High-stakes one-shot deliverable** — investor pitch, executive pitch, propositie-doc waar één iteratie de norm is

**Escalatie- en gebruiksregels:**
- Start Sonnet → na 2e mislukte iteratie één tier omhoog. Door-itereren op een lager model is vaak duurder per afgeronde taak dan één hogere one-shot.
- Fable nooit voor interactief heen-en-weer-werk: output kost $50/M, chat is output-zwaar.
- Fable = batch vooraf: alle context en instructies in één prompt (input is 5× goedkoper dan output), autonoom laten draaien.
- Duur model is dirigent: data-pulls naar Haiku/Sonnet-subagents, Opus/Fable doet alleen synthese.
- Skill verbeteren gaat vóór tier verhogen: een betere SKILL.md maakt Sonnet Opus-waardig.

**Fable-caveats:**
- Data-retentie tot 30 dagen (safety classifiers) — bij NDA-gevoelige klantdata: Opus gebruiken.
- <5% van requests valt automatisch terug op Opus 4.8 (classifier-trigger, met melding).
- API model-string: `claude-fable-5`.

<!-- ===== EINDE PASTE ===== -->
