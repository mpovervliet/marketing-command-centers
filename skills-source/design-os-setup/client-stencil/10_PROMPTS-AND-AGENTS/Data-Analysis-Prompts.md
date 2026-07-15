# Data-Analysis-Prompts
Versie: 0.1 (stencil)
Status: TEMPLATE, invullen bij intake

Herbruikbare gateway-queries voor de baseline en diagnose. Vul [GA4_PROPERTY_ID], [GSC_SITE], [ADS_CUSTOMER_ID], [PROFILE] in.

## GA4 (property [GA4_PROPERTY_ID], profile [PROFILE])

- **Device-split plus funnel:** dimensions `deviceCategory`, metrics `sessions,addToCarts,checkouts,ecommercePurchases,purchaseRevenue`, 90daysAgo t/m yesterday.
- **Kanaal:** dimensions `sessionDefaultChannelGroup`, zelfde metrics.
- **New vs returning:** dimensions `newVsReturning`, metrics `sessions,ecommercePurchases,purchaseRevenue`.
- **Top landingspagina's:** dimensions `landingPagePlusQueryString`, metrics `sessions,ecommercePurchases,purchaseRevenue`, order by sessions desc.
- **Event-taxonomie (QA):** dimensions `eventName`, metrics `eventCount,keyEvents` (bij grote output naar sheet exporteren).

Let op: verifieer per klant of `addToCarts` echte cart-intentie meet of interactie-ruis is (bijv. een configurator). Gebruik `checkouts` en `ecommercePurchases` als betrouwbare ankers tot het Data-Contract anders zegt.

## GSC ([GSC_SITE], profile [PROFILE])

- **Intentie:** action `search_analytics`, dimensions `query`, row_limit 30.
- **Device:** dimensions `device`.
- **Pagina's:** dimensions `page`.
- Stel `start_date`/`end_date` gelijk aan de GA4-periode (90d) om mismatch te vermijden.

## Google Ads (customer_id [ADS_CUSTOMER_ID], profile [PROFILE])

- **Campagne-performance:**
```
SELECT campaign.name, campaign.advertising_channel_type, metrics.clicks,
       metrics.cost_micros, metrics.conversions, metrics.conversions_value
FROM campaign
WHERE segments.date BETWEEN 'YYYY-MM-DD' AND 'YYYY-MM-DD'
  AND metrics.clicks > 0
ORDER BY metrics.cost_micros DESC
```
- Les: gebruik expliciete `BETWEEN`-datums; `LAST_90_DAYS` is geen geldig literal (`LAST_30_DAYS` wel).
- Kosten = `cost_micros` / 1.000.000 (EUR). ROAS = conversions_value / kosten.
- GA4- en Ads-conversies nooit optellen of vergelijken als gelijk (andere attributie, zie Data-Contract).

## PageSpeed (fase 3)

- `pagespeed_tool` op de kern-LP's (homepage, [PRODUCT]-instap, checkout) mobiel; LCP/INP/CLS noteren in `03_DIAGNOSIS/CWV-Status.md`.
- Bij 429 (quota): later opnieuw proberen en de blokkade in het decision-log noteren.
