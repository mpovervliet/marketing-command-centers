# GEO/LLM Autoriteit Playbook

## Wat is GEO?
Generative Engine Optimization (GEO) is het optimaliseren van jouw merk en content voor zichtbaarheid in AI-gegenereerde antwoorden: ChatGPT, Perplexity, Gemini, Claude, Copilot, en AI Overviews in Google Search.

Traditionele SEO optimaliseert voor rankings. GEO optimaliseert voor **citaties en vermelding in AI-antwoorden**.

---

## Hoe werken LLMs als zoekmachine?

LLMs genereren antwoorden op basis van:
1. **Trainingsdata** (wat het model heeft geleerd — historisch)
2. **Retrieval-Augmented Generation (RAG)** — live web search (Perplexity, ChatGPT met browsing, Gemini)
3. **Entity recognition** — hoe goed kent het model jouw merk/bedrijf als "entity"?

**Implicaties voor strategie:**
- Hoe meer jouw merk wordt vermeld in kwalitatieve, gecrawlde bronnen, hoe groter de kans op citatie
- Perplexity en ChatGPT met browsing zijn nú optimaliseerbaar via content
- Trainingsdata: je kunt de volgende trainingsronde beïnvloeden door nu zichtbaar te worden

---

## De GEO Autoriteits Piramide

```
                    ┌─────────────────┐
                    │  Wikipedia /    │  ← Hoogste citaatwaarde
                    │   Wikidata      │
                ┌───┴─────────────────┴───┐
                │  Tier-1 Media           │  ← NRC, FD, Volkskrant, RTL
            ┌───┴─────────────────────────┴───┐
            │  Branche publicaties            │  ← Emerce, Marketingfacts, FD
        ┌───┴─────────────────────────────────┴───┐
        │  Expert content (blogs, LinkedIn, pods)  │
    ┌───┴─────────────────────────────────────────┴───┐
    │  Owned media (website, kennisbank, FAQ)          │
└───┴──────────────────────────────────────────────────┘
```

**Vuistregel:** Focus op de top van de piramide voor GEO-autoriteit. Owned media alleen is niet genoeg.

---

## Stap-voor-stap GEO Stappenplan

### Fase 1: Entity Establishment (maand 1–2)

**Doel:** Zorg dat AI-systemen jouw merk kennen als een "echte" entiteit.

1. **Wikidata entity aanmaken**
   - Ga naar wikidata.org → nieuw item aanmaken
   - Voeg properties toe: instance of (Q4830453 voor bedrijf), official website, country, industry
   - Koppel aan Google Knowledge Panel via Search Console → "Claim Knowledge Panel"

2. **Schema.org Organization markup**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Organization",
     "name": "[Merknaam]",
     "url": "[URL]",
     "sameAs": [
       "[Wikipedia URL]",
       "[Wikidata URL]",
       "[LinkedIn URL]",
       "[Facebook URL]"
     ],
     "description": "[Heldere, feitelijke beschrijving]"
   }
   ```

3. **Consistente NAP + beschrijving** op alle platformen:
   - Google Business Profile
   - LinkedIn Company Page
   - Crunchbase (voor B2B)
   - Trustpilot / Kiyoh (voor reviews + entity signalen)

### Fase 2: Citation Building (maand 2–4)

**Doel:** Zorg dat onafhankelijke bronnen jouw merk citeren in de juiste context.

**Prioriteitslijst voor citatiebronnen:**

| Bron | GEO-waarde | Prioriteit |
|---|---|---|
| Wikipedia | ⭐⭐⭐⭐⭐ | #1 |
| Nationale nieuwsmedia | ⭐⭐⭐⭐⭐ | #2 |
| Brancherapporten | ⭐⭐⭐⭐ | #3 |
| Institutionele bronnen (.edu, .gov, .org) | ⭐⭐⭐⭐ | #4 |
| Podcast transcripts | ⭐⭐⭐ | #5 |
| LinkedIn Artikelen (thought leadership) | ⭐⭐⭐ | #6 |
| Reddit / Quora (niche community) | ⭐⭐ | #7 |

**Tactieken:**
- Digital PR campagnes gericht op Tier-1 media (zie link-tactics-library.md)
- HARO/Qwoted: wekelijks reageren als expert
- Brancheverenigingen: word lid, publiceer, presenteer
- Podcast appearances (transcripts = crawlbare content voor AI)

### Fase 3: Topical Authority voor AI (doorlopend)

**Doel:** AI-systemen associëren jouw merk consequent met specifieke topics.

**Aanpak:**
1. **Definieer 3–5 core topics** waar je voor geciteerd wilt worden
   - Voorbeeld: [Merk] = expert in "autoverzekering vergelijken", "elektrische auto verzekering", "all-risk vs WA"
   
2. **Content clusters** (owned media als basis):
   - Pillar page per core topic
   - 10+ supporting pages per pillar
   - Intern linken + consistent gebruik van kernterm

3. **Cross-platform herhaling:**
   - Elk core topic behandelen op: website, LinkedIn, YouTube (indien van toepassing), podcast

4. **FAQ-content** specifiek voor AI-query patterns:
   - Queries beginnen vaak met "wat is", "hoe werkt", "wat zijn de beste", "vergelijk X vs Y"
   - Schrijf content die deze vragen direct en volledig beantwoordt
   - Gebruik FAQPage schema markup

### Fase 4: Meten & Optimaliseren

**GEO KPI's:**

| KPI | Meetmethode | Frequentie |
|---|---|---|
| Brand mentions in AI-antwoorden | Handmatige checks Perplexity/ChatGPT | Maandelijks |
| Branded search volume | GSC + Google Trends | Maandelijks |
| Knowledge Panel aanwezigheid | Google zoek op merknaam | Maandelijks |
| Media citaties (PR coverage) | Google Alerts + Muck Rack | Wekelijks |
| Wikipedia/Wikidata updates | Watchlist Wikidata | Kwartaal |

**Test queries voor GEO-zichtbaarheid:**
```
"Wat is [merknaam]?"
"[merknaam] review / ervaringen"
"Beste [productsegment] in Nederland"
"[hoofdtopic] vergelijken" (zit jij erin?)
"[hoofdtopic] expert Nederland"
```

---

## Perplexity-specifieke optimalisatie

Perplexity heeft live browsing en gebruikt vaak:
- Pagina's met duidelijke H-structuur
- Content met expliciete bronverwijzingen
- FAQ-secties
- Recente content (datum in URL of schema)

**Tactiek:** Schrijf content in "antwoord-first" format. Begin elke sectie met de directe beantwoording, dan de onderbouwing.

---

## ChatGPT (met browsing / SearchGPT)

ChatGPT met browsing gedraagt zich vergelijkbaar met Perplexity. Extra aandachtspunten:
- Robots.txt: zorg dat OpenAI's crawler (GPTBot) niet geblokkeerd wordt
- Sitemap actueel houden
- Content zonder JavaScript-afhankelijkheid (server-side rendering)

**Check:**
```
Voeg toe aan robots.txt als je wil toestaan:
User-agent: GPTBot
Allow: /

Of blokkeer bewust:
User-agent: GPTBot
Disallow: /
```

---

## Common GEO Mistakes

1. **Alleen owned media** — AI citeert liever onafhankelijke bronnen
2. **Geen Wikidata entity** — AI kent je merk niet als officiële entiteit
3. **Blokkeren van AI-crawlers** in robots.txt (onbewust)
4. **Content zonder expliciete antwoorden** — AI wil direct antwoord, niet alleen context
5. **Inconsistente merknaam** over platformen (Molton Brown vs. MoltonBrown vs. molton-brown)
6. **Geen structured data** — Schema helpt AI begrijpen wat jouw pagina is
