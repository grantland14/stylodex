// Fetches each brand's own share image (og:image, else twitter:image) from its homepage,
// resizes it, and saves it under public/img/brands/{slug}.webp, served at /img/brands/....
// Results (and failures, with the reason) go to pipeline/data/images.json, which
// lib/pipeline.ts merges in. Brand files are not touched, so this can run beside
// enrichment agents.
//
// Usage: node pipeline/images.mjs [--force] [slug ...]
// Rules: one honest User-Agent, no retries with other agents, no headless browser.
// A site that refuses us gets no image this run (status "blocked").

import { execFile } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { promisify } from "node:util";
import sharp from "sharp";

const run = promisify(execFile);
const ROOT = new URL("..", import.meta.url).pathname;
const BRANDS = join(ROOT, "pipeline/data/brands");
const MANIFEST = join(ROOT, "pipeline/data/images.json");
const OUT = join(ROOT, "public/img/brands");
const UA = "StylodexBot/0.1 (+https://www.stylodex.com/how-we-pick)";
const WIDTH = 960;

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));

async function curl(url, extra = []) {
  const { stdout } = await run(
    "curl",
    ["-sSL", "--max-time", "25", "--max-filesize", "10000000", "-A", UA, "-w", "\n%{http_code} %{content_type}", ...extra, url],
    { maxBuffer: 20 * 1024 * 1024, encoding: "buffer" },
  );
  return stdout;
}

function metaImage(html, base) {
  for (const key of ["og:image:secure_url", "og:image", "twitter:image"]) {
    const re = new RegExp(`<meta[^>]+(?:property|name)=["']${key}["'][^>]*>`, "i");
    const tag = html.match(re)?.[0];
    const content = tag?.match(/content=["']([^"']+)["']/i)?.[1];
    if (content) return new URL(content.replace(/&amp;/g, "&"), base).href;
  }
  return null;
}

async function imageFor(slug, brand) {
  const site = brand.website_url;
  if (!site) return { status: "no_website" };
  const page = (await curl(site)).toString("utf8");
  const [code] = page.slice(page.lastIndexOf("\n") + 1).split(" ");
  if (code !== "200") return { status: "blocked", http: Number(code), source_page: site };
  const src = metaImage(page, site);
  if (!src) return { status: "no_share_image", source_page: site };

  const tmp = join(tmpdir(), `stylodex-img-${slug}`);
  await run("curl", ["-sSL", "--max-time", "25", "--max-filesize", "10000000", "-A", UA, "-o", tmp, "-w", "%{http_code} %{content_type}", src]).then(
    ({ stdout }) => {
      const [c, type] = stdout.split(" ");
      if (c !== "200" || !type?.startsWith("image/")) throw new Error(`image fetch ${c} ${type}`);
    },
  );
  const out = join(OUT, `${slug}.webp`);
  const info = await sharp(tmp).rotate().resize({ width: WIDTH, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
  rmSync(tmp, { force: true });
  return {
    status: "ok",
    path: `/img/brands/${slug}.webp`,
    width: info.width,
    height: info.height,
    bytes: info.size,
    source_page: site,
    source_image: src,
  };
}

mkdirSync(OUT, { recursive: true });
const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};
const slugs = readdirSync(BRANDS)
  .filter((f) => f.endsWith(".json"))
  .map((f) => f.replace(/\.json$/, ""))
  .filter((s) => (only.length ? only.includes(s) : true))
  .filter((s) => force || manifest[s]?.status !== "ok");

const queue = [...slugs];
async function worker() {
  for (let slug = queue.shift(); slug; slug = queue.shift()) {
    const brand = JSON.parse(readFileSync(join(BRANDS, `${slug}.json`), "utf8"));
    let result;
    try {
      result = await imageFor(slug, brand);
    } catch (err) {
      result = { status: "error", error: String(err.message ?? err).slice(0, 200), source_page: brand.website_url };
    }
    manifest[slug] = { ...result, fetched_at: new Date().toISOString().slice(0, 10) };
    console.log(`${slug.padEnd(28)} ${result.status}${result.bytes ? ` ${Math.round(result.bytes / 1024)}KB` : ""}${result.http ? ` http ${result.http}` : ""}`);
  }
}
await Promise.all([worker(), worker(), worker(), worker()]);
writeFileSync(MANIFEST, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2) + "\n");
