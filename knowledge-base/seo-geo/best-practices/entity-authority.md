# Entity Authority — Het Fundament van 2026 SEO/GEO

## Wat is een "entity"?

Een entiteit is een ding, persoon, concept, plek, organisatie, product, evenement of abstract idee dat uniek identificeerbaar is. Google (Knowledge Graph) en LLMs bouwen hun begrip van de wereld rond entities, niet rond losse keywords.

Jouw merk, jouw experts, jouw producten — elk een entity. De vraag is niet "op welke keywords rank ik", maar "hoe herkennen Google + LLMs jouw entity en waar associëren ze hem mee?"

## Waarom entity-authority zwaarder telt dan vroeger

1. **Ranking door associatie**: Google rankt pagina's op basis van entity-relaties, niet alleen word-matching
2. **LLM training/retrieval**: AI's ophalen en weergeven info op entity-niveau
3. **Knowledge Panels**: eigen entity-panel = sterkste brand-signaal in SERP
4. **AI Overviews**: entities met sterke authority komen in AIO-antwoorden

## 5 pijlers voor entity-authority

### 1. Entity-definitie (officiële bron)
- **Wikipedia-pagina** (bij voldoende notability)
- **Wikidata-ID** (Q-nummer) — technische anker voor Knowledge Graph
- **About-page** op eigen site met duidelijke 1-zin definitie
- **Consistent gebruik** van officiële naam over alle properties

### 2. Schema-signalering
Op homepage + about-page:
```json
{
  "@type": "Organization",
  "@id": "https://site.nl/#organization",
  "name": "Officiële naam",
  "alternateName": ["Alternatieve spellings", "Afkortingen"],
  "description": "150-word entity-beschrijving",
  "url": "https://site.nl",
  "logo": "...",
  "foundingDate": "YYYY-MM-DD",
  "founder": { "@type": "Person", "name": "..." },
  "sameAs": [
    "https://www.linkedin.com/company/...",
    "https://twitter.com/...",
    "https://nl.wikipedia.org/wiki/...",
    "https://www.wikidata.org/wiki/Q...",
    "https://www.crunchbase.com/organization/..."
  ]
}
```

Elke `sameAs`-link is een entity-bevestiging uit een externe, gezaghebbende bron.

### 3. Citations en brand mentions
Unlinked brand mentions tellen ook. Monitor via:
- Google Alerts voor merk + variants
- BrandMentions / Brand24
- Ahrefs Content Explorer
- GSC "queries" met brand in term

Doel: groei in mentions op kwaliteits-sites, ook zonder link.

### 4. Branche-identiteit en verticale depth
Een merk met 10 pagina's over 10 verschillende onderwerpen is zwakker dan een merk met 100 pagina's over 3 onderwerpen. Verticale depth > brede spreiding.

Voor badkamer-retailer:
- ✅ 300+ artikelen/pages over badkamer, sanitair, tegels, badmeubels — vertical authority
- ❌ 300 pages over alles van tuin tot gordijnen — thin across verticals

### 5. Persoon-entities (author-authority)
Individuele experts in het team bouwen mee aan brand-authority:
- Eigen Wikipedia/Wikidata (bij notability)
- LinkedIn-profiel gekoppeld via sameAs
- Bijdragen op authority-platforms (Medium, branche-blogs)
- Spreker-rol op events, podcasts
- Author-schema op alle eigen content

## Wikipedia/Wikidata — hoe doe je dit?

### Wikipedia-notability criteria
- Coverage in onafhankelijke betrouwbare bronnen (NIET eigen persberichten)
- "Significant" coverage (niet alleen passerend vermeld)
- Meerdere onafhankelijke bronnen

**Wat je zelf niet moet doen**: eigen Wikipedia-page schrijven of editen (COI). Een third-party Wikipedia editor of gespecialiseerd bureau kan helpen.

### Wikidata
Minder streng dan Wikipedia. Elke notable entity kan een Q-nummer krijgen. Handmatig:
1. wikidata.org → log in
2. Create new item
3. Label, description, aliases
4. Statements: instance of, occupation, website, sameAs-links
5. Link naar Wikipedia + andere bronnen

## Knowledge Panel beïnvloeden

Voor merken met Knowledge Panel:
- Google zoekresultaten > jouw merk > rechter paneel > "Claim this knowledge panel"
- Suggest edits via account dat geverifieerd is
- Zorg dat officiële website, logo, beschrijving correct zijn

Voor merken ZONDER panel (doel: er een krijgen):
- Wikipedia entry
- Wikidata Q-nummer
- Consistent schema-mark-up
- Veel authoritative backlinks naar brand-mentions
- Media coverage

Typisch 6-18 maanden om een panel te "verdienen".

## Entity-lineage: waarom klopt jouw data?

LLMs vertrouwen consistente data over bronnen. Als je op verschillende plekken verschillende informatie hebt, verliest je entity scherpte.

Check-lijst consistency:
- [ ] Naam identiek op alle platforms
- [ ] Founding date consistent (site, LinkedIn, Crunchbase, Wikipedia)
- [ ] Founder-namen consistent
- [ ] HQ-adres consistent (Google Business, LinkedIn, site)
- [ ] Logo (laatste versie) overal gebruikt
- [ ] Beschrijving binnen 20% variatie

## Anti-patterns

- **Meerdere brand-variants** zonder duidelijke canonical-naam
- **Oude handelsnamen** die nog in SERP zichtbaar zijn
- **Verschillende logo's** op verschillende properties
- **Inconsistente founding-dates** op Wikipedia vs Crunchbase
- **Geen sameAs** in schema (gemiste entity-linking kans)
- **Geen author-entity** voor publicerende team-members

## Meten van entity-authority

| Metric | Bron |
|---|---|
| Knowledge Panel aanwezig? | Google SERP voor brand |
| Wikipedia/Wikidata aanwezig? | direct check |
| Branded search volume (trend) | GSC + DFS |
| Direct/Branded traffic (GA4) | GA4 |
| Unlinked brand mentions | BrandMentions / Google Alerts |
| LLM-visibility (% prompts waar merk genoemd wordt) | Profound / Otterly / eigen tracking |
| sameAs-count | schema-audit |
| Quality referring domains to brand | Ahrefs |

## Roadmap (eerste 12 mnd voor een groeiende entity)

| Maand | Focus |
|---|---|
| 1-2 | About-page + schema + sameAs + author-schema |
| 2-3 | Wikidata-entry + baseline entity-data-inventory |
| 3-6 | Digital PR voor unlinked + linked brand mentions |
| 6-9 | Wikipedia-notability opbouwen (media coverage) |
| 9-12 | Wikipedia entry (via third-party editor), Knowledge Panel-ready |

## Referenties

- Andrea Volpini — semantic SEO + entity frameworks (WordLift)
- Jason Barnard — the Brand SERP Guy (kalicube.com)
- Bill Slawski (✝) — Google patents on entities
- Martha van Berkel — Schema App / entity-based SEO
- Krystian Szastok — Wikipedia + entity authority studies
