# llms.txt — De Spec + Implementatie

## Wat is llms.txt?

Een voorgesteld bestand (door Jeremy Howard, Answer.AI, september 2024) dat staat op `/.well-known/llms.txt` of `/llms.txt` van een site, bedoeld om LLMs een gestructureerde, machine-leesbare versie van je site te geven.

Analoog aan:
- `robots.txt` → crawl-instructies
- `sitemap.xml` → URL-inventaris
- `llms.txt` → context + summaries voor AI

**Status 2026**: nog geen officiële standaard, maar breed geadopteerd door technical sites (Stripe, Anthropic, Vercel, Perplexity heeft er een, etc). Groot genoeg om in je stack te zetten.

## llms.txt vs llms-full.txt

- **llms.txt** → overzicht + pointers naar belangrijkste pagina's (kort)
- **llms-full.txt** → geaggregeerd alle belangrijke content in Markdown (kan groot zijn)

Beiden aanbieden is best practice.

## Structuur llms.txt

```markdown
# [Naam van site/product]

> [Korte beschrijving, 1-2 zinnen. Wat biedt deze site?]

[Optioneel: langere context, 50-150 woorden]

## [Sectie-naam — bijvoorbeeld "Producten"]

- [Product X](https://site.nl/product-x): [korte omschrijving]
- [Product Y](https://site.nl/product-y): [korte omschrijving]

## Documentatie

- [Getting started](https://site.nl/docs/start): quick-start gids
- [API reference](https://site.nl/docs/api): complete API documentatie
- [Authenticatie](https://site.nl/docs/auth): OAuth en API-key flows

## Kennisbank

- [Veelgestelde vragen](https://site.nl/faq): FAQs over gebruik
- [Troubleshooting](https://site.nl/support): probleemoplossing

## Over ons

- [Over [naam]](https://site.nl/over-ons): bedrijfsgeschiedenis, missie
- [Team](https://site.nl/team): oprichters + kerndeskundigen
- [Contact](https://site.nl/contact): contactinformatie

## Optional

- [Blog](https://site.nl/blog): laatste artikelen en thought leadership
```

### Belangrijke regels
- Eerste `# heading` = naam/merk
- `>` block onder heading = samenvatting
- `##` secties = categorieën
- Bullets met `- [Title](URL): description`
- `## Optional` = minder belangrijke links (LLMs kunnen skippen)

## llms-full.txt

Geaggregeerd Markdown-document met alle kritieke content gerenderd als platte tekst (niet HTML). Doel: LLM kan snel complete sitecontext parsen.

```markdown
# [Naam van site] — Volledige kennisbank

[intro-sectie zoals homepage]

---

# Product X
[alle inhoud van /product-x als markdown]

---

# Getting Started
[alle inhoud van /docs/start als markdown]

...
```

Generatie: via sitemap → markdown-converter → concatenate. Voor WordPress: Yoast of een custom script. Voor headless sites: build-step die markdown genereert.

## Wanneer wel, wanneer niet?

### Zeker doen
- SaaS / B2B met uitgebreide documentatie
- E-commerce met grote catalogus
- Kennisbank-sites
- Content-platforms / publishers
- Technische platformen

### Overwegen
- Local business met weinig content
- E-commerce zonder documentatie (minder waarde)
- Single-page marketing sites

### Niet doen
- Strikte privacy / gated content (dan juist NIET publiek exposen)
- Content die je niet wil dat LLMs trainen

## Implementatie

### Statisch
Plaats `llms.txt` en `llms-full.txt` in de site-root. HTTP headers:
```
Content-Type: text/markdown; charset=utf-8
Cache-Control: public, max-age=86400
```

### Dynamisch (aanbevolen voor grote sites)
Genereer on-the-fly uit CMS-content. Next.js voorbeeld:

```tsx
// app/llms.txt/route.ts
export async function GET() {
  const content = await buildLlmsContent()
  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    }
  })
}
```

### WordPress
Plugin of custom snippet die alle published pages/posts met meta-data in markdown-formaat uitrolt.

### Magento
Custom module die via XML-sitemap + product-DB het bestand bouwt.

## Validatie

- Check output met `curl -i https://site.nl/llms.txt`
- Content-type moet `text/markdown` zijn
- Geen HTML-tags in body
- Encoding UTF-8
- Links absoluut, niet relatief

## Versies / updates

- Update bij elke site-wide content-wijziging
- Maandelijkse regeneratie voor e-commerce
- `Last-Modified` header juist instellen

## Tegen AI-crawlers aangevuld

llms.txt is **niet** een crawl-instructie. Je moet aparte maatregelen nemen voor AI-crawlers via robots.txt als je ze wil blokkeren. Zie de llms.txt als "hier is de makkelijke versie voor wie toch parseert".

```
# robots.txt
User-agent: GPTBot
Disallow: /

# Maar llms.txt beschikbaar laten via allow:
User-agent: *
Allow: /llms.txt
Allow: /llms-full.txt
```

## Voorbeelden in het wild

- stripe.com/llms.txt (vooruitstrevend)
- anthropic.com/llms.txt
- vercel.com/llms.txt
- docs.cloudflare.com

Gebruik die als template voor je eigen implementatie.

## Risico's / overwegingen

- Publieke verwachtingen: als je llms.txt aanbiedt, verwacht je dat LLMs dit gebruiken — check dat je niks lekt wat je niet wil tonen
- Concurrentie-risico: concurrenten scrapen ook
- Werk tegen-SEO: duplicate content-risico? Nee — markdown-versie is additief, niet concurrent met HTML

## Opvolgen

Als de spec evolueert (Jeremy Howard houdt deze actief in ontwikkeling), re-genereer je versie. Bookmark: llmstxt.org

## Referenties

- [llmstxt.org](https://llmstxt.org)
- Jeremy Howard — oorspronkelijke proposal (fast.ai / Answer.AI)
- [Anthropic — hoe wij crawl](https://www.anthropic.com/news/claude-s-web-browsing-capabilities)
