# Stylodex — build plan

**Decided (2026-10-28):** name Stylodex (stylodex.com was unregistered on 2026-10-28) · repo
`grantland14/stylodex` · main market US (USD prices; UK/CA/AU shipping kept as facts) · launch
monetisation Skimlinks only · Apart Style stays live and untouched · content produced with the
wildcard-seo pipelines (see "Content production").

## Goal

Rank for the same intents as Apart Style — "brands like X", "X vs Y", "is X fast fashion",
"does X have sales" — with a data-led site where every indexed page answers the query with
structured facts, earning affiliate revenue. Not a reskin of Apart Style.

## Ground rules

- [ ] **No shared footprint with Apart Style.** New repo, new Vercel project, new Supabase project,
      new GSC property, new analytics, no cross-links, no redirects, no copied prose.
- [ ] **Facts can be reused, text cannot.** Seed brand facts from Apart Style's `brands` table;
      every description and "why similar" line is regenerated from structured data.
- [ ] **Index only pages that pass the data gate** (Phase 3). Everything else ships `noindex`.
- [ ] **No display ads.** Affiliate links only, disclosed, `rel="sponsored"`.
- [ ] **Release in waves**, not 8,000 pages at once.

## What the existing data can and can't carry (checked 2026-10-28)

| Field | Coverage | Usable as-is? |
|---|---|---|
| Brands | 6,011 | Yes, as a seed list |
| Website URL | 100% | Needs re-verifying (see lessons.md: many stored domains were wrong) |
| Price tier | 100% | Too coarse: only 4 buckets, no actual prices |
| Aesthetic tags | 100% | No: 2,280 distinct free-text tags, needs a controlled vocabulary |
| Target demographic | 100% | No: 5,757 distinct free-text values |
| Description (>80 chars) | 70% | No: Apart Style's own text |
| Similar-brand links | 150,594 (≈25 per brand) | No: scores cluster at 10/10, reasons are one-line generic, and matches include non-fashion brands (Muji → Hobonichi, a stationery brand) |

On its own this is thin data. Enrichment (Phase 1) is what makes the site worth indexing.

## Phase 0 — Setup

- [x] Pick name: Stylodex
- [ ] Buy stylodex.com (+ USPTO/UKIPO check in clothing/retail classes)
- [x] Create GitHub repo (`grantland14/stylodex`)
- [x] Scaffold: Next.js app, schema, indexing gate, `/go/` Skimlinks redirect, article + profile templates, tests
- [ ] New Supabase project; apply `supabase/migrations/00001_schema.sql`
- [ ] New Vercel project (env vars from `.env.example`)
- [ ] Search Console + analytics on the new domain only
- [ ] Skimlinks: apply once wave 1 is live (needs real content to be approved), then set `SKIMLINKS_SITE_ID`
      and confirm the `go.skimresources.com` link format against the Skimlinks Hub docs

## Phase 1 — Data (the moat)

- [ ] Import the brand seed list (name, URL, price tier) into the new schema
- [ ] Re-verify every domain (WebFetch + search; a DNS failure means a bad record, not a dead brand)
- [ ] Drop non-apparel brands, or move them to a separate category
- [ ] Map 2,280 tags → ~40 controlled aesthetics; demographic → structured (gender, age band)
- [ ] Enrich per brand:
  - [ ] HQ country, founded year, parent company
  - [ ] Real price ranges by category (dresses, jeans, tees…), from affiliate product feeds where available
  - [ ] Size range + plus / petite / tall availability
  - [ ] Ships to (UK / US / EU / AU), free-shipping threshold, returns window
  - [ ] Main materials, certifications (B Corp, Fair Trade, GOTS…), production model (feeds the "is X fast fashion" intent)
  - [ ] Sale pattern: recurring events, typical discount depth (feeds "does X have sales")
  - [ ] Affiliate programme (Skimlinks merchant coverage)
- [ ] Completeness score per brand (input to Phase 3)

## Phase 1b — Similar brands must be real

Apart Style's 150k links are a **candidate pool only**. No pair gets published until it passes every check:

- [ ] **Both brands are live:** official site found and currently selling. A failed stored URL means "re-check", not "dead".
- [ ] **Same product category:** they overlap in the category the page is about (denim for Levi's, not stationery for Muji)
- [ ] **Price overlap:** real price ranges overlap, or the page labels the pick "cheaper" or "pricier"
- [ ] **Outside evidence the pair belongs together:** co-mentioned in top "brands like X" results or Reddit threads, or stocked by the same retailers. At least one source is stored with the pair.
- [ ] **One specific, checkable reason** per pick, citing a stored fact (e.g. "Montreal label using raw Japanese-mill denim"). Mood-only reasons ("minimalist aesthetic") don't count.
- [ ] Re-checked every 90 days; a brand that dies or goes off-category drops out and the title count updates

## Phase 2 — Page types

| Route | Intent | Built for |
|---|---|---|
| `/brands/[slug]` | brand profile, "is X fast fashion", "does X have sales" | every brand that passes the gate |
| `/brands-like-[slug]` | "brands like X" | article format, see below |
| `/compare/[a]-vs-[b]` | "X vs Y" | only pairs with proven demand (GSC + Ahrefs), not all 150k pairs |
| `/aesthetic/[tag]` and `/aesthetic/[tag]/[tier]` | "minimalist brands", "affordable preppy brands" | only where ≥ 8 brands qualify |
| `/brands/[slug]/alternatives/cheaper` and similar variants | "cheaper alternatives to X" | only where ≥ 5 brands qualify and there is demand |

### "Brands like X" article format (modelled on thredup.com/bg/p/brands-like-levis)

- **Title / H1:** `N Brands Like X for [X's defining trait]`, e.g. "7 Brands Like Levi's for Durable, High-Quality Denim". N is 6–12 verified picks, never padded to a round number.
- **Intro, about 100 words:** what people go to X for, and what this list matches on
- **One H2 per brand (brand name only),** each with:
  - 80–150 words built only from that brand's verified facts: what's alike, what's different, who it suits
  - a fact line: price range for the category, sizes, ships to, origin
  - brand image and an affiliate shop button, plus live products from the network feed where available
- **Quick comparison table:** brand, price, sizes, ships to, standout
- **FAQ:** 3–4 questions taken from real queries (GSC, People Also Ask)
- **Byline, last-checked date, method note** on how picks are chosen and verified
- Prose is drafted from the fact sheet only; any claim not in the stored data gets cut. The top ~200 pages by demand get a human edit.

- [ ] Fresh Next.js (App Router) build with its own design and templates, not a fork of Apart Style
- [ ] Schema.org: Brand/Organization, ItemList, BreadcrumbList
- [ ] Short editorial notes, written by people, on the top ~200 brands by demand

## Phase 3 — Indexing gate and rollout

- [ ] A page is indexable only if its brand(s) pass the completeness threshold and the page has unique facts to show
- [ ] Sitemap lists indexable pages only
- [ ] Wave 1: ~300–500 pages (strongest data × highest demand)
- [ ] Then waves of ~500 every 2–4 weeks, each gated on GSC indexing rate and impressions holding up

## Phase 4 — Affiliate

- [ ] `/go/[brand]` redirect with click logging; deep links to the category the page is about
- [ ] `rel="sponsored nofollow"`, a disclosure on every page, and a disclosure page
- [ ] Revenue tracked per page type

## Phase 5 — Measurement

- [ ] Weekly: indexed / submitted ratio, impressions per wave, clicks to `/go/`, EPC by network
- [ ] Kill or `noindex` any page type that indexes poorly after 6 weeks

## Content production (wildcard-seo)

Content is produced with the skills in `wildcard-agency/wildcard-seo`. They fit as follows:

| wildcard-seo piece | Use for Stylodex |
|---|---|
| `reference/listicle-research-patterns.md` + `/listicle-research` | Sourced, live-verified roster for each "brands like X" page (Phase 1b evidence) |
| `/blog` steps 01–11 | Writing, line edit, fact-check, AEO edit, self-review for each article |
| `reference/google-search-quality.md` (G1–G15) | Quality gate every page must pass |
| `reference/seo/proprietary-data.md` | The original-data element on each page (real prices, sizes, shipping) |
| `/seo` setup, strategy, weekly | Keyword map, demand evidence, measurement |

Gaps to resolve (decisions in the open questions):
- `/listicle-research` puts the client at #1. Stylodex has no product; picks are ranked by fit only.
- `/blog` is one article at a time with a review pause per step, and `/seo` puts programmatic batches
  out of scope in v1.
- `/publish` targets WordPress/Ghost/Webflow; Stylodex needs a Supabase destination.

## Open questions

1. Onboard Stylodex as a client inside wildcard-seo (`clients/stylodex/`), or keep its pipeline here?
2. Full `/blog` pipeline for which pages: wave 1 only, or every page?

## Review

_(fill in after build)_
