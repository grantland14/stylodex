// For every page in pipeline/data/pages, takes up to 3 regular-price products in the page's
// category from each pick's own store (the Shopify collection feed recorded in its brand
// file's price source_url), saves a resized photo under public/img/products/{brand}/, and
// records title, price and product URL in pipeline/data/product-images.json.
//
// Usage: node pipeline/product-images.mjs [--force] [page-slug ...]
// Same rules as images.mjs: one honest User-Agent, public endpoints only, no workarounds.

import { execFile } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { promisify } from "node:util";
import sharp from "sharp";

const run = promisify(execFile);
const ROOT = new URL("..", import.meta.url).pathname;
const DATA = join(ROOT, "pipeline/data");
const MANIFEST = join(DATA, "product-images.json");
const UA = "StylodexBot/0.1 (+https://www.stylodex.com/how-we-pick)";
const PER_BRAND = 3;

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));

async function fetchBuffer(url) {
  const { stdout } = await run(
    "curl",
    ["-sSL", "--max-time", "25", "--max-filesize", "15000000", "-A", UA, "-w", "\n%{http_code}", url],
    { maxBuffer: 30 * 1024 * 1024, encoding: "buffer" },
  );
  const cut = stdout.lastIndexOf("\n");
  return { code: Number(stdout.subarray(cut + 1).toString()), body: stdout.subarray(0, cut) };
}

/** Words a product title should contain for a category; falls back to any product. */
const CATEGORY_WORDS = {
  jeans: /\bjeans?\b|\bdenim\b(?!.*\b(skirt|jacket|shorts?|vest|dress|top|shirt)\b)/i,
  "graphic-tees": /\b(tee|t-shirt|shirt)\b/i,
};
/** Products that can't be in a category even when the collection includes them. */
const CATEGORY_EXCLUDE = { jeans: /\b(skirt|jacket|shorts?|vest|dress)\b/i };

function regularPrice(product) {
  const v = product.variants?.find((x) => x.price != null);
  if (!v) return null;
  const price = Number(v.price);
  const compare = v.compare_at_price == null ? null : Number(v.compare_at_price);
  return compare && compare > price ? null : price; // on sale: skip, pages list regular prices only
}

async function productsFor(brandSlug, category) {
  const brand = JSON.parse(readFileSync(join(DATA, "brands", `${brandSlug}.json`), "utf8"));
  const price = (brand.prices ?? []).find((p) => p.category === category);
  const feed = price?.source_url;
  if (!feed?.includes("/products.json")) return { status: "no_feed" };
  const url = new URL(feed);
  url.searchParams.set("limit", "60");
  const { code, body } = await fetchBuffer(url.href);
  if (code !== 200) return { status: "blocked", http: code };
  const products = JSON.parse(body.toString("utf8")).products ?? [];
  const words = CATEGORY_WORDS[category];
  const exclude = CATEGORY_EXCLUDE[category];
  const usable = products.filter((p) => p.images?.length && regularPrice(p) != null && !(exclude && exclude.test(p.title)));
  const ranked = [...usable.filter((p) => !words || words.test(p.title)), ...usable.filter((p) => words && !words.test(p.title))];

  const dir = join(ROOT, "public/img/products", brandSlug);
  mkdirSync(dir, { recursive: true });
  const items = [];
  for (const p of ranked.slice(0, PER_BRAND)) {
    const img = await fetchBuffer(p.images[0].src);
    if (img.code !== 200) continue;
    const file = `${p.handle}.webp`.replace(/[^a-z0-9._-]/gi, "-").toLowerCase();
    await sharp(img.body).rotate().resize({ width: 600, height: 750, fit: "cover" }).webp({ quality: 76 }).toFile(join(dir, file));
    items.push({
      path: `/img/products/${brandSlug}/${file}`,
      title: p.title,
      product_path: `/products/${p.handle}`,
      price: regularPrice(p),
      currency: price.currency ?? "USD",
      source_image: p.images[0].src,
    });
  }
  return { status: items.length ? "ok" : "no_products", items };
}

const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};
const pages = readdirSync(join(DATA, "pages"))
  .filter((f) => f.endsWith(".json"))
  .map((f) => JSON.parse(readFileSync(join(DATA, "pages", f), "utf8")))
  .filter((p) => (only.length ? only.includes(p.slug) : true));

for (const page of pages) {
  const category = page.category?.slug;
  for (const slug of [page.slug, ...(page.picks ?? []).map((p) => p.slug)]) {
    if (!existsSync(join(DATA, "brands", `${slug}.json`))) continue;
    if (!force && manifest[slug]?.[category]?.status === "ok") continue;
    let result;
    try {
      result = await productsFor(slug, category);
    } catch (err) {
      result = { status: "error", error: String(err.message ?? err).slice(0, 200) };
    }
    manifest[slug] = { ...(manifest[slug] ?? {}), [category]: { ...result, fetched_at: new Date().toISOString().slice(0, 10) } };
    console.log(`${page.slug} / ${slug.padEnd(22)} ${result.status} ${result.items?.length ?? ""}`);
  }
}
writeFileSync(MANIFEST, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2) + "\n");
