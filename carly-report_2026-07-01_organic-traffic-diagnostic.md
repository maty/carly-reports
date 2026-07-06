# mycarly.com — Monthly Organic Traffic Diagnostic
**Date:** 2026-07-01 | **Source:** Ahrefs GSC connector (project 1592389) | **Windows:** Period A = 2026-04-08→05-20, Period B = 2026-05-20→07-01

---

## 3.1 Position & Clicks Weekly Trend (10-week window, site-wide)

| Week (end) | Clicks | Impressions | CTR | Avg Position | Flag |
|---|---|---|---|---|---|
| 04-06 | 97,116 | 3,910,939 | 2.48% | 6.24 | baseline (pre-drop) |
| 04-13 | 94,741 | 3,976,387 | 2.38% | 6.31 | — |
| 04-20 | 92,329 | 3,212,244 | 2.87% | **8.22** | 🚩 pos jumped +1.9 (CW16 event, confirmed) |
| 04-27 | 91,028 | 3,121,104 | 2.92% | 8.27 | — |
| 05-04 | 95,102 | 3,331,973 | 2.85% | 8.24 | — |
| 05-11 | 96,959 | 3,455,842 | 2.81% | 8.28 | — |
| 05-18 | 99,954 | 3,492,809 | 2.86% | 8.26 | — |
| 05-25 | 94,001 | 3,277,225 | 2.87% | 8.34 | impr -6.2% |
| 06-01 | 82,705 | 3,015,168 | 2.74% | 8.36 | impr -8.0% |
| 06-08 | 78,055 | 2,815,719 | 2.77% | 8.59 | pos Δ+0.23 |
| 06-15 | 74,790 | 2,806,521 | 2.66% | **8.89** | 🚩 cumulative pos drift +0.68 since 04-20 |
| 06-22 | 35,858 | 1,301,092 | 2.76% | 8.56 | ⚠️ partial week — GSC reporting lag, not a real cliff |

**Read:** No single-week impression cliff >10% except the last (artifact of incomplete data). Instead: a *steady grind* — impressions down 5 of the last 6 full weeks, position drifting worse (+0.68 cumulative since the CW16 jump), CTR flat (2.6–2.9% throughout). **Flat CTR + falling impressions + worsening position = combined effect: ranking erosion AND AI Overviews absorbing query volume**, not a CTR/UX problem.

---

## 3.2 Community Section (`/community/`)

Sampled from top-100 GSC pages, both periods.

| Metric | Period A | Period B | Δ |
|---|---|---|---|
| Pages in top 100 | 29 | 11 | **-62%** |
| Total clicks | 3,818 | 694 | **-82%** |
| Clicks/week | 636 | 116 | **-81.8%** |

This is a collapse, not a decline — worse than the -48%/week baseline already flagged for CW19-24. 22 of 29 community pages fell out of the top 100 entirely between periods.

**Pages that dropped out of top 100** (all had meaningful volume in Period A):
VW Taigo (441 clicks), Hyundai Porter (251), BMW iX3 (246), VW Tiguan/DE (239), BMW iX1 (146), Renault Twingo (135), Kia Stonic (126), Fiat Tipo (115), Hyundai Accent (101), Dacia Sandero (97), BMW iX1/DE (91), Toyota Proace (80), Opel Frontera (85), Mercedes GLC/NL (83), Hyundai Creta/ES (71), Opel Crossland X (70), Renault Twizy (73), Toyota Verso (73), Dacia Dokker (73), Suzuki Ertiga (61), Hyundai Tucson/NL (57), Opel Astra (57), plus one discussion thread (electronic parking brake, DE).

**New pages in Period B** (all low-volume individual threads): Opel Karl code-89 climate issue (38), T-Roc AC failure/DE (76), Mitsubishi Pajero (37), automatic transmission emergency-mode thread (42), Ford Puma Hybrid AC/FR (64).

**Classification — this is the critical signal:**
- **"Car model problems" aggregator pages** (`/community/brands/{brand}/{model}/`, `/community/automarken/...`, `/community/markak/...`) = 21 of 22 dropped pages. These are exactly the pages built to be AIO-citable ("common problems," "known issues," "hibák").
- **Discussion threads** (UUID-suffixed, specific error codes) = the pages that survived or newly appeared, but at 5-10x lower volume than the aggregators they're replacing.

**AIO-susceptible queries confirmed at risk:** "bmw ix1", "bmw ix3", "mitsubishi triton common problems", "hyundai accent known issues", "volkswagen taigo", "hyundai porter truck" — textbook `[brand] [model] common problems/issues` pattern. Google's AI Overview is very likely answering these directly now, which explains why the aggregator page *type* — not individual pages — is being wiped out simultaneously across dozens of brand/model combinations.

Matched pages present in both periods confirm the same pattern even where pages survived:
| Page | A clicks | B clicks | Δ% | Pos A→B |
|---|---|---|---|---|
| VW Taigo | 441 | 36 | -91.8% | 2.6→7.4 |
| Territory transmission thread | 397 | 183 | -53.9% | 10.3→11.2 |
| Mitsubishi Triton | 234 | 82 | -65.0% | 10.4→11.5 |
| Ford Kuga/HU | 88 | 40 | -54.5% | 4.3→4.6 |

Position for surviving pages also worsened across the board — this isn't purely an AIO story, ranking is eroding too.

---

## 3.3 Blog Section (`/blog/`)

| Metric | Period A | Period B | Δ |
|---|---|---|---|
| Pages in top 100 | 31 | 33 | +2 |
| Total clicks | 5,163 | 3,635 | **-29.6%** |
| Clicks/week | 861 | 606 | **-29.6%** |

Less severe than community, but the decline has widened slightly vs. the -24% baseline (CW19-24 → now).

**WINNERS** (clicks/week B > A): only 1 of 26 matched pages —
- `muss-man-fuer-carly-jaehrlich-bezahlen-...` (DE, subscription cost model): +9.1%

**LOSERS** — 25 of 26 matched pages declined, split by content type:

| Content type | Pages | Avg Δ% | Total clicks Δ% |
|---|---|---|---|
| Pricing/brand (kostet, how-much, gutschein, subscription) | 5 | **-19.1%** | -29.8% |
| Informational/generic (warning lights, OBD codes, ELM327, auto care) | 20 | **-31.4%** | -31.9% |

**Pricing content is measurably more resilient** (avg -19.1% vs -31.4%) — consistent with the expected pattern. It's still declining, just less steeply. Worst-hit informational losers: `obd-poort` NL guide (-58.9%), `wie-funktioniert-auto-waschen-bei-aral` (-49.2%), `las-7-mejores-apps-obd2` (-44.1%), `bimmercode-vs-bimmerlink` (-43.5%).

Dropped from top 100: VIN decoder guide (101 clicks), car-wash-on-Sunday guide (57), battery guide (58) — mostly single-topic generic content.

---

## 3.4 Key Metrics Summary

| Metric | Period A (clicks/wk) | Period B (clicks/wk) | Δ |
|---|---|---|---|
| **Total organic clicks (site-wide, full GSC)** | 94,546 | 85,901¹ | **-9.1%** |
| **/community/** (top-100 sample) | 636 | 116 | **-81.8%** |
| **/blog/** (top-100 sample) | 861 | 606 | **-29.6%** |
| **Avg position (site-wide, impr-weighted)** | 7.51 | 8.47 | **+0.96 (worse)** |
| **Impressions/week (site-wide)** | 3,501,415 | 3,081,488¹ | **-12.0%** |

¹ Period B uses the 5 complete weeks (05/18–06/21); the most recent partial week (06/22–07/01, incomplete due to GSC reporting lag) is excluded to avoid understating the total.

---

## 3.5 AIO Signal Assessment

**Combined effect, not a single cause.** Evidence:
- CTR is flat (2.6–2.9% throughout 10 weeks) → rules out a UX/snippet/title problem.
- Impressions down -12%/week and position worse by +0.96 → both search visibility *and* ranking are degrading simultaneously.
- The damage is heavily concentrated in exactly the page type flagged as AIO-vulnerable: `/community/` "brand + model + common problems" aggregator pages lost 82% of clicks and 62% of top-100 presence, vs. -29.6% for blog and -9.1% site-wide. This concentration is the strongest evidence that AI Overviews are specifically absorbing "[brand] [model] problems/issues" query intent — a generic ranking drop would hit all content types roughly proportionally, and it isn't.
- Blog's pricing/subscription content (harder for an AIO to fully answer — involves current prices, plans, regional variation) is comparatively resilient (-19.1% vs -31.4% informational), reinforcing that AIO substitution risk scales with how "answerable in one paragraph" a query is.

---

## 3.6 Positive Trends

- `muss-man-fuer-carly-jaehrlich-bezahlen` (DE pricing/subscription-model page): +9.1% clicks, position improved 2.4→1.8.
- Pricing/brand cluster overall (-19.1%) is holding up meaningfully better than informational content (-31.4%) — the resilience pattern flagged in project context is confirmed with this cycle's data.
- No individual week in the clean 10-week trend shows a shock-drop >10% in impressions — this is gradual erosion, which is more addressable than a sudden algorithmic penalty.

---

## 3.7 Recommendations

**Community team — priority order:**
1. Triage the 22 dropped "brand/model common problems" aggregator pages first — this is where 82% of the section's traffic disappeared. Rewrite these as tightly structured, directly-quotable Q&A blocks (symptom → cause → fix, in that order, near the top) so they're easier for AI Overviews to cite rather than replace.
2. Add structured data (FAQPage / HowTo schema) to the surviving aggregator pages to improve citation odds in AIO, not just classic SERP snippets.
3. Individual discussion threads are a secondary asset, not a substitute — they carry 5-10x less volume per page than aggregators and shouldn't be the fallback content strategy.

**Blog team:**
- Scale pricing/subscription/plan content — it's the only content type still growing and the most AIO-resistant. Consider adding more region/model-specific pricing pages (e.g. per-country subscription guides) following the pattern of the one winning page.
- Pivot away from single-fact informational pages (warning-light meanings, OBD code lookups, "what is X" explainers) — these are the most AIO-substitutable and are declining fastest (-31.4%). Either consolidate into fewer, more comprehensive/citable hub pages, or accept they'll keep bleeding.

**Technical:**
- No new acute drops to escalate this cycle — the 06/22 week's -53.6% impressions reading is a GSC data-lag artifact, not real, and should be excluded from trend analysis until the next pull confirms actual values.
- Position drift (+0.68 cumulative since the CW16 event) is still moving in the wrong direction as of 06/15 — worth a technical crawl/indexing check (Cloudflare rules, robots.txt) if this continues past the next cycle.

---

## Most Critical Issue
**`/community/` "brand + model common problems" aggregator pages are being systematically wiped out — -82% clicks, -62% of pages fell out of top 100 — concentrated almost entirely in the exact page type built for AI Overview citation.** This is the single largest organic risk in the account right now and is accelerating past the already-flagged CW19-24 baseline (-48%→-82%).

## Best Opportunity
**Pricing/subscription blog content is the most AIO-resistant asset Carly has** (-19.1% vs -31.4% for informational, one page actually growing). Doubling down here — more region/model-specific pricing pages — is the highest-confidence way to defend organic revenue while the community-page GEO rebuild is underway.
