---
name: retention-lifecycle-reviews
description: >
  Reviews, ratings & UGC specialist. Gebruik ALTIJD bij vragen over review-strategie, review-request flows, UGC-campagnes, reputation management, Trustpilot/Google Reviews/Yotpo/Stamped/Junip/Klaviyo Reviews, review-SEO (AggregateRating schema), review-moderation, respons-strategie op negatieve reviews, of het opzetten/kiezen van een reviews-stack. Trigger bij "reviews aanzetten", "review request flow", "Trustpilot setup", "Yotpo Reviews", "Stamped", "Junip", "Klaviyo native reviews", "Google Reviews optimaliseren", "UGC campagne", "review moderatie", "negatieve review", "review-schema", "AggregateRating markup", "star snippet Google", "local pack reviews", "review-rate verhogen", of elke vraag over reputation en social proof. Past 2026 best practices toe (reviews in post-purchase flow 7-14d na fulfillment, Klaviyo native voor eenvoud, Yotpo/Stamped voor diepte, UGC als retention-asset, respons binnen 24u op 1-2 sterren, AggregateRating schema op PDP verplicht).
---

# Reviews, Ratings & UGC Strategy

Reviews zijn het kruispunt van retentie én acquisitie: ze komen uit retention-flows (post-purchase) en voeden acquisitie (SEO, ads, PDP-conversie). Deze skill dekt de complete reviews-discipline.

## Wanneer activeer je deze skill

- Reviews-tool selectie of implementatie
- Review-request flow bouwen of iteren
- Negatieve review handling / response-strategie
- UGC-campagne opzetten
- Review-schema (AggregateRating) SEO-check
- MP zegt: "reviews voor [klant]", "welke reviews-app", "review-rate te laag", "Trustpilot integratie", "Yotpo vs Stamped", "Google Reviews optimaliseren"

## Waarom reviews cruciaal zijn (2026)

- **PDP-CVR-lift**: 10-30% bij 4+ reviews zichtbaar boven fold
- **SEO**: AggregateRating schema triggert ster-snippets in SERP (+20-35% CTR)
- **Ad-performance**: reviews in Meta/Google assets → -15-25% CPC, +10-20% CVR
- **AI Overviews / GEO**: gestructureerde review-data helpt LLM-citations
- **Trust in sales-calls** (B2B) en cart-abandonment-recovery (B2C)
- **Retention-loop**: klanten die reviewen zijn 2-3× meer repeat-loyal

## Welke reviews-app kiezen?

### Klaviyo Reviews (native, sinds 2023)
- **Past bij**: Klaviyo-heavy Shopify-klanten, eenvoud, geen extra tool-stack
- **Kosten**: Inbegrepen in Klaviyo hogere tiers
- **Voordeel**: Native integratie, review-data in Klaviyo profile, trigger-based flows direct
- **Nadeel**: Minder mature features dan Yotpo/Stamped, geen onafhankelijkheid van Klaviyo

### Yotpo Reviews
- **Past bij**: Mid/enterprise, al Yotpo-SMS of Loyalty in stack
- **Kosten**: Free tier → €19/mnd → enterprise €599+
- **Voordeel**: UGC, video-reviews, Q&A, visual reviews, rijke UI, suite-discount
- **Nadeel**: Suite-lock-in, UI soms log

### Stamped.io
- **Past bij**: Shopify DTC, SEO-focus
- **Kosten**: Gratis → $23/mnd → $149/mnd
- **Voordeel**: Diepe AggregateRating schema, Google integration (Seller Ratings), Loyalty-add-on
- **Nadeel**: UI minder modern dan Yotpo

### Junip
- **Past bij**: Shopify DTC, modern UX, Shopify-native
- **Kosten**: $39+/mnd
- **Voordeel**: Native Shopify-checkout-integration, mooie UI, video-reviews, diepe segmentatie
- **Nadeel**: Duurder dan Stamped, minder enterprise

### Trustpilot
- **Past bij**: Brede retail, Europese markten, offline/hybrid (eu B2C-trust signaal)
- **Kosten**: Free tier → €199/mnd → €599+
- **Voordeel**: Externe geloofwaardigheid (niet alleen on-site), TrustBox widgets, Google Seller Ratings
- **Nadeel**: Aggressive sales, review-moderatie beleid soms streng
- **Bijrol**: naast on-site app (vaak beide nodig)

### Google Reviews (Business Profile)
- **Always on** voor local-relevante merken + services
- Belangrijk voor: local pack rankings, Google Shopping Seller Ratings, merchant reviews
- **Niet vervanging** van on-site reviews: complementair

### Beslisboom

```
Klaviyo-heavy + eenvoud gewenst + <100k klanten?
  YES → Klaviyo Reviews + Trustpilot (als EU B2C)
  NO  → verder

UGC + video + suite (loyalty/SMS) gewenst?
  YES → Yotpo Reviews (+ Yotpo Loyalty als bundle)
  NO  → verder

SEO-focus + Google Seller Ratings belangrijk?
  YES → Stamped.io
  NO  → verder

Modern UX + Shopify-native + budget middensegment?
  YES → Junip
```

Plus altijd **Google Reviews** actief beheren.

---

## Review-request flow ontwerp (Klaviyo)

### Wanneer vragen?

**Sweet spot**: 7-14 dagen na **fulfilled** order (niet order-placed). Product is aangekomen, gebruikt, mening gevormd.

Voor consumables met latere ervaring (skincare, supplements): 21-28 dagen.

Voor services/experiences: 1-3 dagen na levering.

### Flow-structuur

| Stap | Timing | Subject | Doel |
|---|---|---|---|
| Email 1 | +7d na Fulfilled | "Wat vind je van je {{product}}?" | 1-klik ster-rating (low friction) |
| Conditional | If 5 sterren | "Wil je het met anderen delen?" | UGC-CTA (upload foto / social tag) |
| Conditional | If 4- sterren | "Wat kan beter?" | Feedback-form (niet publiek, intern verbetering) |
| Email 2 | +14d (if no response) | "Bijna vergeten, één vraag?" | Herhalen maar zachter |

### Copy-frameworks

**Email 1: Hoofdvraag**
```
Subject: Hoe beviel {{product}}, {{first_name}}?
Preview: 30 seconden van je tijd voor andere klanten

Hi {{first_name|default:''}},

Je bestelde {{product}} op {{order_date}}. Na een paar weken zou je een
mening moeten hebben.

Wil je andere klanten helpen door kort je ervaring te delen?

⭐⭐⭐⭐⭐ : Geweldig
⭐⭐⭐⭐ : Goed
⭐⭐⭐ : Oké
⭐⭐ : Niet tevreden
⭐ : Slecht

[Geef je rating →]

Het duurt 30 seconden. En het helpt echt.

{{afzender}}
```

**Incentive-vraag**: "Krijg ik korting voor review?"-2026 best practice: **geef klein blijk (punten, 5% volgende order, freebie) MAAR vraag review niet specifiek-positief**. Trustpilot/Google verbieden paid-for-positive; incentive voor review-submission (ongeacht sterren) is OK.

### Negative-path flow

Bij 1-3 sterren rating (als tool dit ondersteunt) → intern flow:
- Geen auto-publicatie (of wel publiceren én reageren binnen 24u)
- Intern: support-alert (Gorgias/Zendesk ticket) voor outreach
- Email naar klant: "Sorry dat je ervaring niet goed was. Kan ik helpen?"
- Recovery-offer (refund / exchange / freebie)

**Conversie**: een teruggewonnen negatieve klant wordt vaak meest-loyaal (de "service-recovery paradox").

---

## UGC-strategie

### Wat tel je als UGC

- Productfoto's door klanten (Instagram, TikTok, reviews-uploads)
- Review-content met foto/video
- Testimonials geschreven door klanten
- Case-studies / transformaties
- Gebruik-in-context (product in leven van klant)

### Hoe verzamelen

- **Post-purchase flow email 3**: "Deel je {{product}}, tag @{{merk}}"
- **Loyalty-reward**: UGC-upload = 50 punten (zie retention-lifecycle-loyalty)
- **Reviews-apps** (Yotpo/Junip) hebben native photo/video-upload in review-form
- **Hashtag-campagnes** op Instagram/TikTok
- **Review-incentive**: 5% volgende order bij foto-review

### Waar gebruiken

- **PDP hero-section**: UGC-carousel onder product-foto's (+15-25% CVR)
- **Email**: klant-reviews in product-focused emails
- **Ads**: Meta/TikTok UGC-ads outperformen brand-produced content (+20-40%)
- **Landing pages**: sociaal-bewijs boven fold
- **Out-of-stock pages**: "wacht lijst, hier is waarom anderen wachten"

### Moderation

- Klaviyo Reviews / Yotpo / Junip hebben ingebouwde moderatie-queues
- Approval-criteria expliciet documenteren (geen profanity, geen klacht-zonder-context, echte foto)
- Response-SLA: 24u voor 1-3 sterren publiek, 48u voor alles anders
- Publiceer 4-5 sterren auto (na moderatie); 1-3 sterren publiceren na response

---

## Review-SEO: AggregateRating & Product-schema

Voor elke PDP met reviews actief, de page-source moet bevatten:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "{{product_name}}",
  "image": ["{{product_image}}"],
  "description": "{{product_description}}",
  "sku": "{{sku}}",
  "brand": {"@type": "Brand", "name": "{{brand}}"},
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "248",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "price": "{{price}}",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```

**Verify** via:
- Google Rich Results Test (search.google.com/test/rich-results)
- GSC → Enhancements → Products
- SERP-preview: moet ster-snippet tonen

**Non-compliance risico's** (Google bestraft):
- Fake reviews
- Paid positive reviews zonder disclosure
- Reviews op irrelevante pagina's (homepage aggregate zonder individual reviews)
- Self-reviews (eigen medewerkers)

### Google Seller Ratings (merchant-niveau, niet PDP)

- Vereist: 150+ review in 12 mnd, gem. rating >3.5
- Bronnen: Google Customer Reviews (gratis), Trustpilot, Yotpo, Stamped (alle feed naar Google)
- Verschijnt in Google Shopping ads + checkout flow
- ROI: +10-17% CTR op Shopping ads

---

## Response-strategie (negatieve reviews)

### Timing
- 1-2 sterren: binnen 24u publiek reageren
- 3 sterren: binnen 48u reageren (verbeterpunten oppakken)
- 4-5 sterren: bedanken binnen 7d, patroon-uitzonderingen (iconic review) binnen 24u

### Template-structuur

```
Dag {{first_name}},

Sorry dat je ervaring met {{product_of_aspect}} niet voldeed aan verwachting. 
{{1 regel die aantoont dat je het specifieke probleem begrepen hebt}}.

{{Concrete oplossing of uitnodiging}}: ik kom graag persoonlijk tot een goede 
oplossing: kun je {{support-email of DM}} een berichtje sturen?

{{Eerste naam + functie afzender}}
{{Merk}}
```

**Do's**:
- Persoonlijk, naam afzender
- Erken + begrijp het probleem
- Concrete oplossing (refund / exchange / contact)
- Move-offline voor specifics

**Don'ts**:
- Defensief ("dat klopt niet")
- Template-antwoord herkenbaar
- Publieke escalatie
- Negeren (vooral op Google Business / Trustpilot)

---

## KPI's

| KPI | Doel |
|---|---|
| Review rate post-purchase | >4% (benchmark) |
| Gem. rating | >4.3 (waarschuwing <4.0) |
| Review volume (per SKU) | >15 voor AggregateRating-schema trigger |
| Response rate op 1-3 sterren | 100% binnen 48u |
| UGC-submission rate | >1% van purchasers |
| PDP-CVR lift (met vs. zonder reviews) | +10-30% |
| Ads-CTR met review-asset | +10-20% |
| Google Seller Rating | >4.3 |
| Trustpilot score (EU B2C) | >4.3 = "Excellent" |

Rapport maandelijks in `<klantmap>/retention-lifecycle/reports/reviews-YYYY-MM.md`.

---

## Non-negotiables

- **Nooit** paid-for-positive reviews vragen (schending Google/Trustpilot TOS + ethisch)
- **Altijd** expliciet disclosuren als incentive-for-review (punten/korting OK mits niet sterren-gebonden)
- **Altijd** reageren op 1-3 sterren binnen 48u
- **Nooit** negatieve reviews verbergen (moderatie-valse-pos = trust-killer als ontdekt)
- **Altijd** AggregateRating schema op PDP als reviews aanwezig
- **Altijd** review-data sync naar Klaviyo profile voor segmentatie
- **Nooit** review-flow triggeren vóór fulfilled (klant heeft product nog niet)
