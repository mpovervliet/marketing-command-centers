# Volledige SEO/GEO Audit — Checklist (100+ punten)

Print/kopieer deze lijst. Werk per sectie en noteer per punt: ✅ / ⚠️ / ❌ + notitie.

## A. Crawlability & Indexering

- [ ] robots.txt bereikbaar + juist
- [ ] robots.txt blokkeert geen essentiële URLs
- [ ] robots.txt bevat Sitemap-directive
- [ ] XML-sitemap bereikbaar via /sitemap.xml
- [ ] Sitemap bevat alleen indexeerbare URLs (200 + canonical self)
- [ ] Sitemap gesegmenteerd bij > 50k URLs
- [ ] Sitemap gesubmit in GSC + Bing
- [ ] Geen massa noindex-tags op belangrijke pagina's
- [ ] Geen soft-404s (thin pages met 200 status)
- [ ] Crawl-budget efficient: geen onzinige parameter-URLs
- [ ] Geen spider-traps (oneindige pagination / facet-combinaties)
- [ ] Pagination correct geïmplementeerd (self-canonical op p2+)

## B. URL-structuur & Canonicals

- [ ] URLs klein, semantisch (geen cryptische IDs)
- [ ] HTTPS overal + HSTS
- [ ] Consistent trailing-slash-beleid
- [ ] Self-referencing canonical op elke unieke pagina
- [ ] Canonical is absoluut, niet relatief
- [ ] Geen canonical naar 404 of 301
- [ ] Geen meerdere canonical-tags per page
- [ ] www-vs-non-www geforceerd naar één variant
- [ ] HTTP → HTTPS redirect 301
- [ ] Tracking-parameters gecanonicaliseerd

## C. Redirect-hygiëne

- [ ] Geen 302's waar 301 moet (permanente redirects)
- [ ] Redirect-chains < 2 hops
- [ ] Geen redirect-loops
- [ ] Interne links updaten naar finale bestemming (niet via redirect)
- [ ] Oude URLs (na migratie) nog 301-redirected?
- [ ] 404's: beoogd of overbodig?

## D. Core Web Vitals

- [ ] LCP < 2.5s op 75% van page-loads (field data GSC / CrUX)
- [ ] INP < 200ms op 75%
- [ ] CLS < 0.1 op 75%
- [ ] Mobile en desktop apart checken
- [ ] Hero-image preloaded
- [ ] Image `width` + `height` op alle `<img>`
- [ ] Font-display: swap met metric-matched fallback
- [ ] Cookie-banner: geen push-layout
- [ ] GTM + third-party scripts audit

## E. Rendering & Crawlability JS

- [ ] Kritische content in initial HTML (SSR / ISR / pre-render)
- [ ] Google kan gerenderde versie lezen (URL Inspection)
- [ ] Links zijn `<a href>` niet JS-onclick
- [ ] Hydration delays niet kritiek
- [ ] Geen cloaking (different render voor Googlebot vs gebruiker)

## F. Schema Markup

- [ ] Homepage: Organization + WebSite + SearchAction
- [ ] BreadcrumbList op elke non-home page
- [ ] Article/BlogPosting op blog-content
- [ ] Product op productpagina's (e-com)
- [ ] Offer + Price + Availability binnen Product
- [ ] LocalBusiness per vestiging (indien local)
- [ ] FAQPage alleen bij echte FAQ-content
- [ ] `@id` consistent voor entity-linking
- [ ] Rich Results Test: geen errors
- [ ] GSC > Enhancements: geen errors

## G. On-page SEO

- [ ] Unieke title per URL, ≤ 60 tekens, primary keyword + brand
- [ ] Unieke meta description per URL, ≤ 160 tekens, CTA
- [ ] Unieke H1 per URL, inclusief primary keyword
- [ ] H-hiërarchie logisch (H1 → H2 → H3)
- [ ] Primary keyword in eerste 100 woorden
- [ ] Semantische variaties + synoniemen gebruikt (geen keyword-stuffing)
- [ ] Image-alt-texts beschrijvend (geen stuffing)
- [ ] Internal links descriptief (niet "klik hier")
- [ ] Open Graph-tags aanwezig (og:title, og:description, og:image)
- [ ] Twitter Card-tags

## H. Content-kwaliteit & E-E-A-T

- [ ] Diepgang past bij zoekintentie
- [ ] Originele content (niet fabrikant-copy bij producten)
- [ ] Auteur zichtbaar + linkbaar + schema
- [ ] Author knowsAbout / expertise-velden ingevuld
- [ ] Last-updated datum zichtbaar + schema dateModified
- [ ] Outbound links naar authority
- [ ] Geen AI-content zonder human edit
- [ ] Consistency: geen tegenstrijdige claims tussen pagina's

## I. Keyword-coverage & Intent

- [ ] Branded keywords: alle top-10 varianten #1?
- [ ] Core non-branded: welke ranking-range?
- [ ] Long-tail opportunities geïdentificeerd
- [ ] Content-gap vs top-3 concurrenten in kaart
- [ ] Elke core topic heeft een "best page"
- [ ] Zoekintent per URL correct (info → blog, commercial → category, transactional → product)

## J. Interne Linking

- [ ] Homepage linkt naar core categories
- [ ] Hub/pillar pagina's correct opgebouwd
- [ ] Orphans geïdentificeerd (minimum via crawl vs sitemap-vergelijk)
- [ ] Click-depth belangrijke pagina's ≤ 3
- [ ] Anchor-text variatie (niet 100% exact match)
- [ ] Priority pages: 5+ interne links laatste kwartaal?

## K. Off-page / Autoriteit

- [ ] Domain Rating t.o.v. top-3 concurrenten
- [ ] Referring domains laatste 12 mnd groei/krimp
- [ ] Anchor-cloud gezond (niet over-optimized)
- [ ] Disavow nodig? (toxic backlinks, geforceerde schemes)
- [ ] Broken backlinks: reclaim-mogelijkheden
- [ ] Brand mentions: unlinked opportunities
- [ ] Sameas-signalen (LinkedIn, Wikipedia, Wikidata) aanwezig

## L. GEO / AI Visibility

- [ ] llms.txt + llms-full.txt beschikbaar
- [ ] Brand wordt genoemd in ChatGPT voor key prompts?
- [ ] Brand wordt genoemd in Perplexity voor key prompts?
- [ ] Brand wordt genoemd in Gemini / AI Overviews?
- [ ] Positief sentiment in AI-vermeldingen
- [ ] Concurrenten: worden vaker genoemd? Waarom?
- [ ] Author-entities herkenbaar in LLMs?
- [ ] AI-crawlers toegestaan (of bewust geblokkeerd)?
- [ ] Content citation-worthy (statement-first, data, bronnen)

## M. Local SEO (indien van toepassing)

- [ ] Google Business Profile compleet + geverifieerd
- [ ] Categorieën primair + secundair correct
- [ ] NAP-consistentie site / GBP / directories
- [ ] GBP-berichten + foto's actueel
- [ ] Reviews: volume + recentheid + response-rate
- [ ] LocalBusiness-schema per vestiging
- [ ] Opening hours consistent + speciale dagen

## N. Internationale SEO (indien multilingual)

- [ ] Hreflang-implementatie correct (bidirectional)
- [ ] x-default fallback aanwezig
- [ ] Geen hreflang naar 404/redirect
- [ ] Geen canonical naar andere taal
- [ ] Per land correcte currency / shipping / compliance
- [ ] Geo-targeting in GSC correct (bij subfolder-structuur)

## O. Analytics & Tracking

- [ ] GA4 correct geïnstalleerd + key-events
- [ ] GSC property (domain + URL-prefix indien van toepassing)
- [ ] Bing Webmaster Tools
- [ ] First-party pixel / server-side tagging (cookieless)
- [ ] UTM-conventies gedocumenteerd
- [ ] GA4/GSC/Ads gekoppeld (zodat data tussen tools doorstroomt)

## P. Cross-channel

- [ ] Google Ads: budget-overlap met organic top-keywords?
- [ ] Meta Ads: retargeting-audience gekoppeld aan organic-landers
- [ ] Email: content-syndicatie naar nieuwsbrief?
- [ ] Social: brand-signaal consistent?

---

## Prioritering output

Na het doorlopen:
- **P0 (kritiek, binnen week 1 fixen)**: alles rood dat rankings/indexering direct schaadt
- **P1 (hoog, binnen maand 1)**: substantiële kansen of risico's
- **P2 (medium, binnen kwartaal 1)**: verbeteringen zonder acuut probleem
- **P3 (nice-to-have)**: kleinere optimalisaties

Elke finding krijgt: observatie + impact + aanbeveling + effort-schatting.
