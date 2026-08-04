# mycarly.com — Monthly Organic Traffic Diagnostic
**Date:** 2026-08-03 | **Source:** Ahrefs GSC connector (project 1592389) | **Windows:** Period A = 2026-05-11→06-22, Period B = 2026-06-22→08-03

*Automated monthly run. Previous cycle: [carly-report_2026-07-01_organic-traffic-diagnostic.md](./carly-report_2026-07-01_organic-traffic-diagnostic.md).*

---

## 3.1 Position & Clicks Weekly Trend (site-wide)

GSC's reporting lag means only 9 full weeks were returned for the requested 10-week window (05-25→07-20; the most recent 1-2 weeks aren't final yet and are excluded).

| Week (start) | Clicks | Impressions | CTR | Avg Position | Flag |
|---|---|---|---|---|---|
| 05-25 | 94,001 | 3,277,225 | 2.87% | 8.34 | — |
| 06-01 | 82,705 | 3,015,168 | 2.74% | 8.36 | impr -8.0% |
| 06-08 | 78,055 | 2,815,719 | 2.77% | 8.59 | pos Δ+0.23 |
| 06-15 | 74,790 | 2,806,521 | 2.66% | 8.89 | pos Δ+0.31, cumulative drift continues |
| 06-22 | 76,301 | 2,791,445 | 2.73% | 8.44 | pos improves -0.45 |
| 06-29 | 75,155 | 2,677,333 | 2.81% | 8.32 | — |
| 07-06 | 74,738 | 2,754,671 | 2.71% | 8.71 | pos Δ+0.38 |
| 07-13 | 73,513 | 2,570,170 | 2.86% | 8.20 | pos improves -0.50 |
| 07-20 | 62,103 | 2,231,524 | 2.78% | 8.25 | 🚩 impr **-13.2%** w/w, clicks -15.5%, position flat |

**Read:** Position bounced in a 8.2–8.9 band all cycle with no sustained trend (ends roughly flat vs. where it started). CTR is stable throughout (2.66–2.87%). The one real flag is the final week (07-13→07-20): impressions fell 13.2% and clicks fell 15.5% while position and CTR barely moved — a clean signature of demand/visibility loss unrelated to ranking or snippet quality. Worth confirming with next cycle's pull once GSC finalizes the following weeks.

---

## 3.2 Community Section (`/community/`)

Sampled from top-100 GSC pages, both periods.

| Metric | Period A | Period B | Δ |
|---|---|---|---|
| Pages in top 100 | 19 | 9 | **-53%** |
| Total clicks | 1,454 | 814 | **-44%** |
| Clicks/week | 242 | 136 | **-44.0%** |

Still a severe decline, though less steep than last cycle's -81.8% (different comparison windows — not a like-for-like month-over-month, but directionally the section remains the single worst-performing area of the site).

**Pages that dropped out of top 100** (all "brand/model" aggregator pages except one thread):
VW Taigo (138 clicks), Dacia Sandero (114), VW Tiguan/DE (68), T-Roc AC-failure thread/DE (66), Renault Twingo (65), VW Taos (62), Peugeot 408/FR (57), Toyota Proace (50), Opel Astra (48), Opel Karl code-89 thread/FR (46), Hyundai Creta/ES (45), Peugeot 308 EPB thread/FR (45).

**New pages in Period B:** Mitsubishi Pajero aggregator (92 clicks — a genuine new win, discussed below), P190D00 coolant-pump thread/FR (43).

**Classification:**
- **"Car model problems" aggregators** (`/community/brands/{brand}/{model}/`, `/markak/...`) = 10 of 12 dropped pages. Exactly the AIO-vulnerable page type flagged last cycle.
- **Discussion threads** (UUID/specific-code slugs) = the minority of drops (2) and both new arrivals — consistent with the pattern that individual threads are more durable than aggregators, but at far lower volume per page.

**Matched pages, both periods:**

| Page | A clicks | B clicks | Δ% | Pos A→B |
|---|---|---|---|---|
| Territory transmission thread | 280 | 345 | **+23.2%** | 11.24→9.98 (improved) |
| Ford Puma AC thread/FR | 53 | 57 | +7.5% | 5.00→4.14 (improved) |
| Ford Kuga/HU | 48 | 37 | -22.9% | 4.56→4.03 (improved, less traffic anyway) |
| Mitsubishi Triton | 112 | 81 | -27.7% | 11.60→10.88 (improved) |
| Suzuki Baleno/HU | 50 | 38 | -24.0% | 1.38→1.68 (slightly worse) |
| Transmission-emergency-mode thread | 46 | 43 | -6.5% | 4.34→4.94 (worse) |
| Jeep Compass/HU | 61 | 78 | **+27.9%** | 1.81→3.03 (worse, but clicks up) |

**Notable shift vs. last cycle:** position for surviving community pages is *mixed*, not uniformly worse — several improved. The damage this cycle is concentrated almost entirely in **breadth** (pages falling out of the top 100 / query volume drying up), not per-page ranking decay. That's a meaningfully different mechanism than last month and points more squarely at demand/impression loss (AIO or otherwise) than a technical or ranking problem.

**AIO-susceptible queries still at risk:** "volkswagen taigo", "dacia sandero", "renault twingo", "hyundai creta", "mitsubishi triton common problems", "mitsubishi pajero known issues" — the `[brand] [model] common/known problems` pattern.

---

## 3.3 Blog Section (`/blog/`)

| Metric | Period A | Period B | Δ |
|---|---|---|---|
| Pages in top 100 | 31 | 35 | +4 |
| Total clicks | 4,196 | 5,083 | **+21.1%** |
| Clicks/week | 699 | 847 | **+21.1%** |

**This is a reversal from last cycle's -29.6% decline.** Blog is now growing.

**WINNERS** (9 of 28 matched pages grew):

| Page | A clicks | B clicks | Δ% | Type |
|---|---|---|---|---|
| how-much-is-carly (US) | 598 | 1,797 | **+200.5%** | Pricing/brand |
| service-zurücksetzen guide/DE | 43 | 59 | +37.2% | Informational |
| how-much-is-a-carly-subscription-uk | 78 | 97 | +24.4% | Pricing/brand |
| muss-man-fuer-carly-jaehrlich-bezahlen/DE | 260 | 313 | +20.4% | Pricing/brand |
| coding-list tag page | 79 | 91 | +15.2% | Informational |
| obd-poort guide/NL | 56 | 61 | +8.9% | Informational |
| geschenkideen-auto/DE | 45 | 48 | +6.7% | Generic |
| motorkontrollleuchte-mercedes/DE | 61 | 65 | +6.6% | Informational |

**LOSERS** (19 of 28 matched pages declined):

| Content type | Pages (matched) | Total clicks Δ% | Avg per-page Δ% |
|---|---|---|---|
| Pricing/brand (kostet, gutschein) | 5 | **+51.9%** overall | +43.3% (2 of 5 still individually down: `wie-viel-kostet-carly` -14.2%, `gutschein-rabattcodes` -14.7%) |
| Informational/generic (warning lights, OBD codes, ELM327, lifestyle) | 22 | **-23.1%** | -20.5% |

**Pricing content is the clear growth engine this cycle** (+51.9% combined, led by the US "how-much-is-carly" page nearly tripling). Informational content is still net-negative, and the steepest losers are the least on-topic pieces: `autoreifen-bemalen` (tire painting, -51.6%), `aral-waschen` (car wash, -45.9%), `wie-nenne-ich-mein-auto` (car nicknames, -45.3%), `geburtstagswuensche` (car-lover birthday wishes, -24.5%). Core diagnostic/warning-light content (bimmercode-vs-bimmerlink, seat-ibiza lights, DPF codes) is also declining but less severely (-13% to -36%).

Dropped from top 100: BMW coding guide (52 clicks), DPF regeneration app guide (50), fault-memory-clearing guide/DE (50).

---

## 3.4 Key Metrics Summary

| Metric | Period A (clicks/wk) | Period B (clicks/wk) | Δ |
|---|---|---|---|
| **Total organic clicks (site-wide)¹** | 82,388 | 72,362 | **-12.2%** |
| **/community/** (top-100 sample) | 242 | 136 | **-44.0%** |
| **/blog/** (top-100 sample) | 699 | 847 | **+21.1%** |
| **Avg position (site-wide, impr-weighted)¹** | 8.55 | 8.39 | **-0.16 (slightly better)** |
| **Impressions/week (site-wide)¹** | 2,978,658 | 2,605,029 | **-12.5%** |

¹ The GSC performance-history tool only returned data from 05-25 onward (not the full 05-11 start requested), so Period A here is a 4-week average (05-25→06-15) and Period B a 5-week average (06-22→07-20), not the full 6-week windows used for the page-level sections above. Directionally consistent, but not an exact match to 3.2/3.3.

---

## 3.5 AIO Signal Assessment

**Position stable-to-improving (-0.16) + CTR flat (2.76%→2.78%) + impressions down -12.5% = classic AI Overview / demand-absorption signature, not a ranking or snippet problem.** If this were a ranking issue, position would be visibly worse; if it were a CTR/UX issue, CTR would have dropped. Neither happened — visibility (impressions) is what's eroding.

The sectional split reinforces this:
- `/community/` — the page type built to be AIO-citable (`[brand] [model] common problems`) — lost 44% of clicks/week and 53% of top-100 page breadth.
- `/blog/` — much of it pricing/subscription content that's harder for an AI Overview to fully answer (current prices, plans, regional variation change) — actually **grew 21.1%**.
- Site-wide, the aggregate effect is a moderate -12.2% clicks / -12.5% impressions decline, meaning the community collapse is being partly masked by blog's recovery in the topline number. Anyone looking only at site-wide clicks would miss how concentrated the damage is.

The single-week 07-20 impressions drop (-13.2%, flat position/CTR) is worth flagging as a leading indicator — if it repeats next cycle, the AIO effect may be broadening beyond community into other query types.

---

## 3.6 Positive Trends

- **Blog has flipped from -29.6% (last cycle) to +21.1% this cycle** — the biggest positive change in the account.
- `how-much-is-carly` (US pricing page) nearly tripled (+200.5%), and pricing/brand content overall is up 51.9% combined — the resilience pattern flagged in project context isn't just holding, it's now actively growing.
- Mitsubishi Pajero is a brand-new community aggregator page already earning 92 clicks/6wk in Period B — evidence that new/refreshed aggregator pages can still gain traction despite the section's overall decline.
- Several surviving community pages (territory-transmission thread, Ford Puma AC thread, Mitsubishi Triton, Ford Kuga) show *improved* position this cycle — the community problem is increasingly about query/page breadth, not per-page ranking decay.

---

## 3.7 Recommendations

**Community team:**
1. Prioritize rebuilding the 12 dropped brand/model aggregator pages (VW Taigo, Dacia Sandero, VW Tiguan/DE, Renault Twingo, VW Taos, Peugeot 408, Toyota Proace, Opel Astra, Hyundai Creta, plus 3 more) — these account for nearly all of the section's page-count loss. Structure as tight, directly-quotable Q&A (symptom → cause → fix) with FAQPage/HowTo schema to compete for AIO citation rather than just classic ranking.
2. Study the Mitsubishi Pajero page as a template — it's the one aggregator gaining ground this cycle; replicate whatever changed (content structure, schema, internal linking) across the rebuild list.
3. Don't over-invest in individual discussion threads as a substitute — they're more durable but carry a fraction of an aggregator's volume.

**Blog team:**
- Scale the pricing/subscription format aggressively — it's now the strongest-performing content type in the account (+51.9%, one page +200%). Prioritize more region- and model-specific pricing pages following the `how-much-is-carly` / UK pricing guide pattern.
- Continue pivoting away from generic/off-topic lifestyle content (tire painting, car wash, car nicknames, birthday wishes) — these are the fastest decliners (-24% to -52%) and are the least relevant to Carly's core diagnostic/coding topic authority. Consider retiring or consolidating rather than maintaining.
- Core diagnostic/warning-light informational content is mixed-to-declining; consolidate near-duplicate per-brand warning-light pages into fewer, more comprehensive, schema-marked hub pages.

**Technical:**
- Monitor the 07-20 week's -13.2% impressions drop (flat CTR/position) — confirm with next cycle's pull whether it's a one-off or the start of a broader pattern extending past community.
- Position is currently stable-to-improving site-wide; no indexing/crawl escalation needed this cycle, but keep the Cloudflare/robots.txt check on standby if the community page-count losses continue next cycle.

---

## Most Critical Issue
**`/community/` brand/model aggregator pages continue to be wiped out of the top 100 — 12 more dropped this cycle (-53% of tracked pages), concentrated in exactly the AIO-vulnerable `[brand] [model] problems` page type — while impressions keep declining (-12.5%) with stable position and CTR, the clearest possible signature of AI Overviews absorbing this query intent.**

## Best Opportunity
**Blog has reversed from -29.6% to +21.1% clicks/week, driven almost entirely by pricing/subscription content (+51.9% combined, one page nearly tripling). This is now the single clearest lever in the account: scale the pricing-page format to more markets and models while the community rebuild is underway.**
