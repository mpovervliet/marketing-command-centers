# Technische SEO — Snellere Checklist (dagelijks/wekelijks)

Focus: infrastructuur. Geen content-audit.

## Dagelijks (geautomatiseerd waar mogelijk)

- [ ] GSC > Coverage: geen nieuwe errors
- [ ] GSC > Sitemaps: recent submit OK?
- [ ] GSC > Manual actions: status
- [ ] GSC > Security issues: status
- [ ] Uptime monitoring: 99.9%+
- [ ] SSL-certificaat geldig (> 30 dagen over)

## Wekelijks

- [ ] GSC > Pages: index-coverage trend
- [ ] GSC > Performance: plotselinge drops > 10%?
- [ ] Crawl-errors in log files
- [ ] Nieuwe 4xx / 5xx URLs
- [ ] Core Web Vitals report: trend

## Maandelijks

- [ ] Screaming Frog / Sitebulb site-crawl
- [ ] Lighthouse Lab-check 5 key pagina's
- [ ] Redirect-chains audit
- [ ] Orphan-pages audit
- [ ] Schema-coverage audit (nieuwe page-types toegevoegd?)
- [ ] Hreflang-validatie (indien multilingual)
- [ ] robots.txt + sitemap.xml dubbel checken

## Bij elke release (dev-team)

- [ ] No breaking URL-changes zonder redirect-map
- [ ] New pages: canonical + schema + meta
- [ ] Removed pages: 301 of 410
- [ ] Robots.txt niet per ongeluk strenger geworden
- [ ] Noindex niet toegevoegd waar het niet moet
- [ ] CWV geen regressie op key templates
- [ ] Internal links: geen nieuwe 404's
- [ ] Sitemap regenereerd + gesubmit

## Bij large-scale events

### Migratie
→ volg `best-practices/site-migration.md`

### Re-design
- [ ] Preserveer URL-structuur tenzij bewust gewijzigd
- [ ] Preserveer H1 / title-pattern
- [ ] CWV benchmark pre vs post
- [ ] Schema niet verloren gegaan
- [ ] CMS-template: canonicals self-referencing

### Domain-change
→ volg migratie-draaiboek + geo-targeting GSC reset

## Tooling voor technische monitoring

- Screaming Frog (maandelijks crawl)
- Sitebulb (deep technical analysis)
- Ahrefs Site Audit (continue crawl + alerts)
- Oncrawl / Botify (enterprise, log-analysis)
- Google Search Console (absolute pijler)
- Bing Webmaster
- Cloudflare logs / server logs
- UptimeRobot / Pingdom
- PageSpeed Insights API (scheduled)
- CrUX Dashboard Looker Studio

## Quick-wins top-10 (default bij nieuwe klant)

1. robots.txt + sitemap.xml check en submit
2. Self-referencing canonicals toevoegen waar ontbreken
3. HTTPS + HSTS verificatie
4. Schema Organization + WebSite op homepage
5. BreadcrumbList op alle non-home pagina's
6. `width` + `height` attributen op images
7. Hero-image preload directive
8. Cookie-banner naar overlay-style
9. 301-chains oplossen (1-hop finale versie)
10. Internal links naar redirect-chains updaten
