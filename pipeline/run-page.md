# Runbook: one page, steps 2–5

For an agent producing one "brands like X" / "stores like X" page end to end. The rules live
in the files below; this only orders them. Accuracy is the whole point: every fact comes from a
source you fetched, with its URL. Nothing estimated, nothing from memory.

## Read first
- `pipeline/README.md`, `pipeline/enrich.md`, `pipeline/write.md`, `tasks/lessons.md`
- `lib/gate.ts` (what renders and what's indexable)
- `pipeline/voice.md` before writing a word. The existing page files predate it, so use them for
  the JSON shape only, never as a model for the copy.
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

## Requests
- Every scripted request uses the honest bot UA, `StylodexBot/0.1 (+https://www.stylodex.com/how-we-pick)`.
  **Never put Ash's email or any personal detail in a header, URL or payload**, even where a site
  (SEC EDGAR asks for a contact email) says it wants one. If a site refuses the bot UA, use
  WebFetch or leave the fact out.

## Shared files: other agents run at the same time
- Brand files in `pipeline/data/brands/` are shared. **Write them only through
  `python3 -I pipeline/merge_brand.py <slug> <patch.json> [--overwrite field,field]`**, which
  locks the file: put your facts in a patch file in your own scratchpad folder,
  `patches/{page slug}/` (never the repo, never a shared folder), and merge only the patches you
  wrote this run. Never loop over a folder of patches. Keep every other working file (scripts,
  downloads) in `<scratchpad>/{page slug}/` too: the scratchpad is shared by every agent.
  Prices replace only your category's entry; other fields fill only if empty unless named in
  `--overwrite` (use it for corrections, like a wrong `website_url`). `notes`, `sources` and
  `sells_categories` are always appended, never replaced: send only your new entries. Never write a brand file
  directly, never delete fields or other categories' prices.
- Write only your own `pipeline/data/pages/{slug}.json` and `{slug}.review.md`.
- Don't touch git, the database, Vercel, `public/`, or `pipeline/data/*.json` manifests; the
  coordinator commits, fetches images and deploys.

## Retailers and closed stores
- Single-brand retailers (they sell their own label: Uniqlo, Old Navy, H&M) are `kind: brand`.
- Multi-brand stores (TJ Maxx, Nordstrom, Urban Outfitters) are `kind: retailer`: C is the
  department most of their searches are about (usually `womens-clothing`). Picks are the stores
  outside sources name as alternatives: same-type stores first, and also discount department
  stores, outlets and chains people shop for the same reason (Ash, 2026-10-29: "stores like TJ
  Maxx" should list Ross, Burlington, Marshalls, Kohl's and the like). Store chains with US
  stores count without online shipping. Prices compare a like-for-like item the stores all sell
  (say which, in `category.why`); a store with no readable online prices can still be a pick,
  shown without a price. Prices are stored per category and shared, and `womens-clothing` prices
  already mean women's jeans: for any other item, use that product type as C (`dresses`,
  `tops`) rather than writing a different item under `womens-clothing`.
- A closed store (`defunct`) can anchor a `stores` page: say how we know it closed; every pick
  must be live.

## Reply (under 200 words)
Category and why; picks renderable / total; source counts; anchor status and `human_check`;
gate result (indexable or the reasons); honest quality estimate; anything that broke.
