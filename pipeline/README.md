# Content pipeline

How a "brands like X" page goes from a keyword to rows in Supabase. Every step writes files under
`pipeline/data/`, so each step can be reviewed and re-run, and nothing reaches the database until
`load` (after review).

| Step | Input | Output | Who |
|---|---|---|---|
| 1. Select | Ahrefs volumes, Apart Style GSC clicks, Similist inventory | `data/wave-1.tsv` | Claude, reviewed by Ash |
| 2. Evidence | `brands like X` / `stores like X` top 10 (Ahrefs SERP) | `data/pages/{slug}.json` → `candidates` | agent, `enrich.md` §1 |
| 3. Verify brands | each candidate + the anchor | `data/brands/{slug}.json` | agent, `enrich.md` §2 |
| 4. Pick | candidates + brand facts | `data/pages/{slug}.json` → `picks` | agent, `enrich.md` §3, then `lib/gate.ts` |
| 5. Write | page JSON | intro, per-pick body, FAQ + review | agent, `write.md` (wildcard-seo references, read-only) |
| 5b. Media | brand files, page files | `public/img/brands/`, `public/img/products/`, `data/images.json`, `data/product-images.json` | `node pipeline/images.mjs`, `node pipeline/product-images.mjs` |
| 6. Load | reviewed JSON | `stylodex.*` rows | script, after Ash's review |

Media rules: brand share images (`og:image`) come from the brand's own homepage; product photos
come from the category collection feed recorded in the brand file, regular-price items only, each
linking through `/go/` to that product. One honest User-Agent (`StylodexBot`), no workarounds: a
store that refuses us gets no image. Files live in the repo for now (≈30 KB each, WebP).

## Rules that bind every step
- **Outside evidence only.** apartstyle.com never counts as a source, and no Apart Style text is
  copied. Apart Style's `brand_relationships` is a candidate pool, never evidence.
- **Facts from the brand's own store**, dated, with the URL. If a fact can't be found, it stays
  empty; nothing is estimated. A failed URL means "re-check the record", not "dead brand"
  (`tasks/lessons.md`).
- **No bot-wall workarounds.** If a site refuses WebFetch, record `unverified` and move on.
- **Scope:** fashion, department stores, beauty.

## Writing (step 5) uses wildcard-seo as a read-only reference
`/home/user/wildcard-seo` is not modified. Step 5 follows, by reading them:
`reference/google-search-quality.md` (G1–G15 gate), `reference/ai-voice-avoid.md`,
`reference/listicle-research-patterns.md` (§2 entry schema, §5 quality bar, §6 live verification;
**not** §4: Stylodex has no client at #1), `reference/seo/proprietary-data.md` (the real prices,
sizes and shipping are the page's original data).
