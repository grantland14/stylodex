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

- [ ] **No visible footprint shared with Apart Style.** New repo, new Vercel project, new GSC property,
      new analytics, no cross-links, no redirects, no copied prose. Database: the Apart Style Supabase
      project, in a separate `stylodex` schema, server-side only; images re-hosted in Stylodex's own
      bucket and served from `/img/` (decided 2026-10-28).
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
- [x] Scaffold: schema, indexing gate, `/go/` Skimlinks redirect, article + profile templates, tests
- [x] **Moved from Next.js to Astro 7** (Ash, 2026-10-28): static pages with no JavaScript, `/go/` and
      `/img/` as the only server routes, `[prefix]-like-[slug]` as a real route (no rewrites)
- [x] **No CMS** (Ash, 2026-10-28): content lives in Supabase and comes from the pipeline. If people
      start editing often, add a small protected `/admin` over the same tables (not Sanity, which
      Apart Style uses)
- [x] First Vercel deploy checked 2026-10-29: `/brands-like-x` 200, `/brands-like-x/` 308 to it,
      wrong prefix 404, `/go/` stays on the brand's host, `/img/` rejects traversal, noindex +
      `robots.txt` disallow in fixture mode
- [x] Migration tested on a throwaway Postgres 16 (coexists with `public.brands`; anon reads verified rows only; only service_role writes clicks)
- [x] Applied `supabase/migrations/00001_schema.sql` to the Apart Style project as `stylodex_00001_schema` (2026-10-28; Apart Style tables unchanged: 6,011 brands, 150,594 relationships)
- [x] Exposed `stylodex` via the Data API (`00002_expose_stylodex_schema.sql`; overrides the dashboard setting, see the file)
- [x] Created public storage bucket `stylodex-images` (5 MB, jpeg/webp/png)
- [ ] Re-host brand images into it (Apart Style's `brand-images` URLs are never used)
- [x] Vercel project `ashs-projects-8f76f8b6/stylodex` (Astro, Node 24.x), created by Ash 2026-10-29.
      Not connected to GitHub (Ash doesn't sign in to Vercel with GitHub), so deploys go through the
      CLI: `vercel deploy` (preview) / `vercel deploy --prod`. `STYLODEX_FIXTURES=1` set for preview
      and production until real data is loaded.
- [ ] Search Console + analytics on the new domain only
- [ ] Skimlinks: apply once wave 1 is live (needs real content to be approved), then set `SKIMLINKS_SITE_ID`
      and confirm the `go.skimresources.com` link format against the Skimlinks Hub docs

## Phase 1 — Data (the moat)

Progress 2026-10-28:
- [x] Seeded all 6,011 Apart Style brands into `stylodex.brands` as `candidate` (name, slug, website
      URL, `seed_source_id`; no text). Hidden from the site by RLS until verified.
- [ ] Categories (fashion + beauty): unblocked by migration 00003
- [x] Pipeline written: `pipeline/README.md`, `pipeline/enrich.md`; output to `pipeline/data/`
- [ ] Wave-1 selection: Ahrefs volumes for 222 subjects × {brands, stores} like + Apart Style GSC
      clicks (Dec 2025–Aug 2026) → `pipeline/data/wave-1.tsv`
- [x] Wave-1 selection done: `pipeline/data/wave-1.tsv` (204 subjects; notes beside it)
- [x] Pilot page: Jaded London (`pipeline/data/pages/jaded-london.json`, 16 brand files). 7 picks,
      but it would fail the gate: the anchor's site refused reads (unverified), only 3 of 42 SERP
      pages were usable evidence, prices were truncated or GBP-only. ~240k tokens, 22 minutes.
- [x] Fixes from the pilot: `unverified` status and store-currency prices folded into the still
      unapplied migration 00003 (re-tested); `enrich.md` now uses product-type categories, four
      evidence keywords, retailer co-stocking, Shopify `products.json` for full price ranges
- [x] Pilot re-run (category jeans, 9 picks, 7 renderable) and written (step 5, author Ash), edit
      pass done, deployed in pipeline mode: `vercel deploy -b STYLODEX_DATA=pipeline -b
      STYLODEX_FIXTURES=0 -e …` (2026-10-29). Not publishable yet: G13 Medium, and G6/G9/G10
      blocked until a person checks jadedldn.com (`human_check` in the page file)
- [x] Images (2026-10-29): brand share images (18 of 32 brands; many are logos) and 3 product
      photos per pick from each store's own collection feed, served from `/img/` in the repo
- [x] Brand pages richer: product strip, grouped facts (prices, sizing, shipping and returns,
      about), "where it's recommended" links, checked-on line, Brand JSON-LD
- [ ] Sizes per category (like prices): Affliction's `size_range` now mixes jeans and tees
- [ ] Move product photos into Supabase/`stylodex-images` once a server-side upload key exists
      (the repo copy is fine for hundreds of brands, not thousands)
- [ ] Second page (Affliction) running, to measure a typical page against the gate and its cost

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

## Page inventory to match: similist.com (Ahrefs top pages, 2026-10-28)

Source: `research/similist-top-pages-2026-10-28.tsv`. 170 URLs, 134 unique subjects, ~660 visits/mo
in total (Ahrefs estimate), so this is a **list of keywords to cover, not proof of demand**. Validate
each subject's volume before it goes in a wave. Their shapes: `stores-like-X` (132 pages) and
`sites-like-X` (36).

| Bucket | Subjects | Similist traffic | In Apart Style seed |
|---|---|---|---|
| Fashion brands and retailers | 75 | 399 | |
| Department stores and off-price (Kohl's, Marshalls, Nordstrom…) | 8 | 60 | 58 of these 83 |
| Discount, general, marketplaces (Temu, Dollar Tree, Daiso…) | 13 | 72 | — |
| Home and furniture (Williams Sonoma, World Market, IKEA…) | 14 | 43 | — |
| Beauty (Bath & Body Works, Lush, Sephora, Ulta) | 4 | 25 | — |
| Outdoor, hardware, auto, sport (Cabela's, Lowe's, AutoZone…) | 9 | 29 | — |
| Electronics and gadgets (Micro Center, Brookstone…) | 6 | 19 | — |
| Grocery (Sprouts, Whole Foods) | 2 | 4 | — |
| Not shopping (YouTube, Photobucket) | 3 | 11 | — |

What this adds to the build:
- [x] **Scope (Ash, 2026-10-28): fashion, department stores and beauty only.** Enforced by
      `categories.vertical IN ('fashion','beauty')`. Home, discount, hardware, electronics, grocery
      and non-shopping subjects are out.
- [x] **`/stores-like-[slug]`** alongside `/brands-like-[slug]`: same article template, one URL per
      subject, prefix chosen by which phrasing has more volume. Add an entity kind (brand / retailer /
      marketplace) to `stylodex.brands`.
- [x] Migration 00003 applied 2026-10-29 (Ash, Supabase SQL editor; the connector's approval prompt never reached him). Verified; Apart Style data unchanged
- [x] **Closed anchors are allowed.** "Stores like Wet Seal / Payless / Charming Charlie / Pier 1" are
      replacement searches. The anchor can be `defunct` (the intro says so); every *pick* must still
      be live. Gate change plus tests.
- [ ] Add the 25 fashion/department subjects missing from the seed (Francesca's, Macy's, Marshalls,
      Dillard's, Buckle, Foot Locker…) after checking their slugs.

## Design direction

Modelled on thingtesting.com (Ash, 2026-10-28): white page, near-black type, hairline rules,
Schibsted Grotesk for headings and UI, Newsreader serif only for section titles, small-caps
eyebrows, solid black and outlined square buttons, chips for facts. Applied to the article,
brand profile, home, method and disclosure pages.
- [ ] Logo/wordmark beyond the text "•STYLODEX"
- [ ] Brand index and category hubs (Thingtesting's "All brands" / categories)
- [ ] Search, once there is data to search

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

Decided 2026-10-28: **the wildcard-seo repo is not modified.** It is read as a reference; any
Stylodex-specific adaptations (no client at #1, Supabase as the publish target, batch runs) live
in this repo.

## Open questions

1. Full pipeline for which pages: the first ~20, wave 1, or every page?
- Byline: **Ash** (decided 2026-10-29), bio supplied by Ash, author page at `/authors/ash`,
  linked from every byline and named in Article JSON-LD. G5 passes.
- Apart Style's `brand_relationships` lists stay **candidates only**, never copied as picks:
  they include off-category noise (hats, phone cases, homeware) and would be a visible footprint
  (Ash asked, 2026-10-29).
- Search demand ("X vs Y" volume) is **not** outside evidence for a pick (Ash, 2026-10-29).
- No "unlimited returns" value: `returns_days` stays a number of days, so a store with no
  return limit (Nordstrom) leaves it empty and its page stays noindex (Ash, 2026-10-29).
- FAQs from Google's "People also ask" are kept (Ash, 2026-10-29).
- The unsigned disco directory counts as evidence but is never cited on a page (Ash, 2026-10-29).
- No secondhand or thrift shops as picks on brands pages; Witch Bitch Thrift cut from Selkie
  (Ash, 2026-10-29).

## Review

_(fill in after build)_
