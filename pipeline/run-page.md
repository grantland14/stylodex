# Runbook: one page, steps 2–5

For an agent producing one "brands like X" / "stores like X" page end to end. The rules live
in the files below; this only orders them. Accuracy is the whole point: every fact comes from a
source you fetched, with its URL. Nothing estimated, nothing from memory.

## Read first
- `pipeline/README.md`, `pipeline/enrich.md`, `pipeline/write.md`, `tasks/lessons.md`
- `lib/gate.ts` (what renders and what's indexable)
- A finished example: `pipeline/data/pages/jaded-london.json`, `jaded-london.review.md`
- wildcard-seo references named in `write.md`, **read-only** (never edit `/home/user/wildcard-seo`)

## Steps
1. **Enrich** (`enrich.md` §1–§3): category C (a product type), SERP evidence for the four
   keywords (Ahrefs `serp-overview`, at most 4 calls), co-stocking, candidate pool (read-only
   SQL on `public.brand_relationships`), verify the anchor and up to 25 candidates (most-sourced first), pick 10–15 (never pad; 6 is
   the floor).
2. **Write** (`write.md`): intro, one body per renderable pick, FAQ from one Ahrefs
   `keywords-explorer-matching-terms` call (questions only), author "Ash", self-review file.
3. **Check**: run `node -e` or a short tsx script that loads the page through
   `lib/pipeline.ts` and `judgeBrandsLikePage`, and record the result in the review file.

## Shared files: other agents run at the same time
- Brand files in `pipeline/data/brands/` are shared. **Write them only through
  `python3 -I pipeline/merge_brand.py <slug> <patch.json> [--overwrite field,field]`**, which
  locks the file: put your facts in a patch file (in the scratchpad, not the repo) and merge it.
  Prices replace only your category's entry; other fields fill only if empty unless named in
  `--overwrite` (use it for corrections, like a wrong `website_url`). Never write a brand file
  directly, never delete fields or other categories' prices.
- Write only your own `pipeline/data/pages/{slug}.json` and `{slug}.review.md`.
- Don't touch git, the database, Vercel, `public/`, or `pipeline/data/*.json` manifests; the
  coordinator commits, fetches images and deploys.

## Retailers and closed stores
- Single-brand retailers (they sell their own label: Uniqlo, Old Navy, H&M) are `kind: brand`.
- Multi-brand stores (TJ Maxx, Nordstrom, Urban Outfitters) are `kind: retailer`: C is the
  department most of their searches are about (usually `womens-clothing`); picks are other stores
  of the same type (off-price, department, multi-brand boutique), and prices compare a
  like-for-like item the stores all sell (say which, in `category.why`).
- A closed store (`defunct`) can anchor a `stores` page: say how we know it closed; every pick
  must be live.

## Reply (under 200 words)
Category and why; picks renderable / total; source counts; anchor status and `human_check`;
gate result (indexable or the reasons); honest quality estimate; anything that broke.
