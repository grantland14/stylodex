// Step 5c: a brand's look for its profile page header. From the brand's own homepage:
//   - hero: the first landscape banner/slideshow image in <main> (else the first upright one),
//     at least 1000 px wide, saved at 1600 and 800 px wide as WebP;
//   - logo: the image or inline SVG inside the home link (else one marked "logo"), saved as an
//     alpha mask (shape only) so the page can paint it in any colour;
//   - background: the photo's most common colourful colour (lib/look.ts pageColour); the photo
//     fades into it.
// Results go to pipeline/data/looks.json, which lib/pipeline.ts merges in. Nothing renders until
// a person or agent has looked at the result and recorded `--review slug ok` (lib/look.ts).
//
// Usage:
//   node pipeline/look.mjs [--force] slug ...    fetch (skips slugs already fetched unless --force)
//   node pipeline/look.mjs --hero slug N         use hero candidate N instead (0 = first)
//   node pipeline/look.mjs --no-logo slug        drop the logo, keep the rest (name shows as text)
//   node pipeline/look.mjs --sheet out.png [slug ...]  contact sheet of fetched looks, for review
//   node pipeline/look.mjs --review slug ok|reject [note]
// Rules: one honest User-Agent, no retries with other agents, no headless browser. A site that
// refuses us gets no look (status "blocked").

import { execFile } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { promisify } from "node:util";
import sharp from "sharp";
import { logoBox, pageColour, themeFor } from "../lib/look.ts";

const run = promisify(execFile);
const ROOT = new URL("..", import.meta.url).pathname;
const BRANDS = join(ROOT, "pipeline/data/brands");
const MANIFEST = join(ROOT, "pipeline/data/looks.json");
const OUT = join(ROOT, "public/img/looks");
const UA = "StylodexBot/0.1 (+https://www.stylodex.com/how-we-pick)";
const MIN_HERO_WIDTH = 1000;
const LOGO_HEIGHT = 160;
const today = () => new Date().toISOString().slice(0, 10);

async function fetchBuffer(url) {
  const { stdout } = await run(
    "curl",
    ["-sSL", "--max-time", "25", "--max-filesize", "15000000", "-A", UA, "-w", "\n%{http_code} %{content_type}", url],
    { maxBuffer: 40 * 1024 * 1024, encoding: "buffer" },
  );
  const cut = stdout.lastIndexOf(10); // "\n" before the status line
  const [code, type = ""] = stdout.subarray(cut + 1).toString().split(" ");
  return { status: Number(code), type, body: stdout.subarray(0, cut) };
}

const attr = (tag, name) => tag.match(new RegExp(`\\s${name}\\s*=\\s*(["'])(.*?)\\1`, "is"))?.[2]?.replace(/&amp;/g, "&");

/** Largest entry of a srcset. */
function largest(srcset) {
  let top = null;
  for (const part of srcset.split(/,\s+(?=\S)/)) {
    const [u, d = ""] = part.trim().split(/\s+/);
    const w = d.endsWith("w") ? parseInt(d, 10) : 0;
    if (u && (!top || w > top.w)) top = { u, w };
  }
  return top?.u ?? null;
}

/** Shopify CDN images take a width parameter; ask for a big one without the theme's crop. */
function fullSize(url) {
  const u = new URL(url);
  if (!u.pathname.includes("/cdn/shop/") && !u.hostname.endsWith("cdn.shopify.com")) return u.href;
  u.pathname = u.pathname.replace(/_(\d+x\d*|\d*x\d+)(?=\.\w+$)/, "");
  for (const k of ["width", "height", "crop"]) u.searchParams.delete(k);
  u.searchParams.set("width", "2000");
  return u.href;
}

const HERO_HINT = /hero|banner|slideshow|slider|carousel|campaign|masthead|splash/i;

/** Hero candidates in page order, banner-like sections first. */
function heroCandidates(html, base) {
  const start = html.search(/<main\b/i);
  const body = start >= 0 ? html.slice(start) : html.slice(Math.max(0, html.search(/<\/header>/i)));
  const hinted = [];
  const rest = [];
  const seen = new Set();
  for (const m of body.matchAll(/<(img|source)\b[^>]*>/gis)) {
    const tag = m[0];
    const set = attr(tag, "srcset") ?? attr(tag, "data-srcset");
    const src = (set && largest(set)) ?? attr(tag, "src") ?? attr(tag, "data-src");
    if (!src || src.startsWith("data:") || /\.(svg|gif|mp4|webm|mov|m3u8)(\?|$)/i.test(src) || src.includes("{")) continue;
    let url;
    try {
      url = fullSize(new URL(src, base).href);
    } catch {
      continue;
    }
    const key = url.split("?")[0];
    if (seen.has(key)) continue;
    seen.add(key);
    // The nearest section-ish opening tag before this image says what kind of block it sits in.
    const before = body.slice(Math.max(0, m.index - 3000), m.index);
    const section = [...before.matchAll(/<(section|div|slideshow-component|[a-z]+-[a-z-]+)\b[^>]*(id|class)=["'][^"']*["'][^>]*>/gi)].at(-1)?.[0] ?? "";
    (HERO_HINT.test(section) || HERO_HINT.test(tag) ? hinted : rest).push(url);
    if (hinted.length + rest.length >= 12) break;
  }
  return [...hinted, ...rest];
}

/** The logo: an <img> or inline <svg> inside the link to the homepage, else one marked "logo". */
function findLogo(html, base) {
  const home = new URL(base);
  const host = home.hostname.replace(/^www\./, "");
  const homeLink = new RegExp(`<a\\b[^>]*href=["'](?:/|https?://(?:www\\.)?${host.replace(/\./g, "\\.")}/?)["'][^>]*>([\\s\\S]*?)</a>`, "gi");
  const marked = /<(svg|img)\b[^>]*(logo|wordmark)[^>]*>/i;
  const pick = (chunk) => {
    const svgAt = chunk.search(/<svg\b/i);
    const imgAt = chunk.search(/<img\b/i);
    if (svgAt >= 0 && (imgAt < 0 || svgAt < imgAt)) {
      const end = chunk.indexOf("</svg>", svgAt);
      if (end > 0) return { kind: "svg", svg: chunk.slice(svgAt, end + 6) };
    }
    if (imgAt >= 0) {
      const tag = chunk.slice(imgAt, chunk.indexOf(">", imgAt) + 1);
      const set = attr(tag, "srcset") ?? attr(tag, "data-srcset");
      const src = (set && largest(set)) ?? attr(tag, "src") ?? attr(tag, "data-src");
      if (src && !src.startsWith("data:")) return { kind: "img", url: new URL(src, base).href };
    }
    return null;
  };
  for (const m of html.matchAll(homeLink)) {
    const found = pick(m[1]);
    if (found) return found;
  }
  const m = html.match(marked);
  return m ? pick(html.slice(m.index)) : null;
}

/** An alpha-mask WebP of the logo: black, its shape carried in the alpha channel. */
async function saveLogo(found, slug) {
  let input;
  let source;
  if (found.kind === "svg") {
    // A sprite reference (<use href="#…">) has no shape of its own here.
    if (/<use\b/i.test(found.svg)) return { status: "logo_sprite" };
    let svg = found.svg.replace(/currentColor/g, "#000");
    if (!/xmlns=/.test(svg)) svg = svg.replace(/<svg\b/i, '<svg xmlns="http://www.w3.org/2000/svg"');
    input = Buffer.from(svg);
    source = "inline svg in the home link";
  } else {
    const r = await fetchBuffer(found.url);
    if (r.status !== 200 || !(r.type.startsWith("image/") || /\.svg(\?|$)/i.test(found.url))) return { status: "logo_fetch_failed", http: r.status };
    input = r.body;
    source = found.url;
  }
  const { data, info } = await sharp(input, { density: 600 }).resize({ height: LOGO_HEIGHT * 2, withoutEnlargement: false }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = info.width * info.height;
  let opaque = true;
  for (let i = 3; i < data.length; i += 4) if (data[i] < 250) { opaque = false; break; }
  // No transparency (a JPEG or a boxed PNG): take the shape from lightness, against the corners.
  let darkOnLight = true;
  if (opaque) {
    const lum = (i) => 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    const corners = [0, info.width - 1, px - info.width, px - 1].map((p) => lum(p * 4));
    darkOnLight = corners.reduce((a, b) => a + b, 0) / 4 > 128;
  }
  const mask = Buffer.alloc(px * 4);
  let ink = 0;
  for (let p = 0; p < px; p++) {
    const i = p * 4;
    const l = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    const a = opaque ? (darkOnLight ? 255 - l : l) : data[i + 3];
    mask[i + 3] = a < 24 ? 0 : a;
    if (a >= 24) ink++;
  }
  if (ink / px < 0.01 || ink / px > 0.85) return { status: "logo_unusable", source };
  const out = join(OUT, `${slug}-logo.webp`);
  const trimmed = await sharp(mask, { raw: { width: info.width, height: info.height, channels: 4 } }).trim().png().toBuffer();
  const saved = await sharp(trimmed).resize({ height: LOGO_HEIGHT, withoutEnlargement: true }).webp({ quality: 90, alphaQuality: 100 }).toFile(out);
  return { status: "ok", path: `/img/looks/${slug}-logo.webp`, width: saved.width, height: saved.height, bytes: saved.size, source };
}

/** Downloads a hero candidate and measures it; nothing is written yet. */
async function measureHero(url) {
  const r = await fetchBuffer(url).catch((e) => ({ status: 0, type: "", error: String(e.message ?? e).slice(0, 120) }));
  if (r.status !== 200 || !r.type.startsWith("image/")) return { status: "hero_fetch_failed", http: r.status || undefined, source_image: url };
  const meta = await sharp(r.body).metadata();
  const width = meta.autoOrient?.width ?? meta.width;
  const height = meta.autoOrient?.height ?? meta.height;
  if (!width || width < MIN_HERO_WIDTH) return { status: "hero_too_small", width, source_image: url };
  const ratio = width / height;
  // A strip (a promo bar) or a phone-only portrait won't crop into a header.
  if (ratio > 3 || ratio < 0.6) return { status: "hero_wrong_shape", width, height, source_image: url };
  return { status: "ok", body: r.body, landscape: ratio >= 1.2, source_image: url };
}

async function saveHero({ body, source_image }, slug) {
  const big = await sharp(body).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 68 }).toFile(join(OUT, `${slug}-1600.webp`));
  const small = await sharp(body).rotate().resize({ width: 800 }).webp({ quality: 68 }).toFile(join(OUT, `${slug}-800.webp`));
  const { data } = await sharp(body).rotate().resize({ width: 160 }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  return {
    hero: { path: `/img/looks/${slug}-1600.webp`, small_path: `/img/looks/${slug}-800.webp`, width: big.width, height: big.height, bytes: big.size + small.size, source_image },
    background: pageColour(data, 3),
  };
}

/** Fetch a brand's look. `heroIndex` forces one candidate; otherwise the first usable one wins. */
async function lookFor(slug, brand, previous, heroIndex = null) {
  const site = brand.website_url;
  if (!site) return { status: "no_website" };
  const page = await fetchBuffer(site);
  if (page.status !== 200) return { status: "blocked", http: page.status, source_page: site };
  const html = page.body.toString("utf8");
  const candidates = heroCandidates(html, site);
  if (candidates.length === 0) return { status: "no_hero", source_page: site };

  // The first landscape candidate among the first six wins; else the first usable upright one.
  const tried = [];
  let chosen = null;
  let upright = null;
  for (const i of heroIndex == null ? [0, 1, 2, 3, 4, 5] : [heroIndex]) {
    if (!candidates[i]) {
      if (heroIndex != null) return { status: "no_such_candidate", candidates, source_page: site };
      break;
    }
    const m = await measureHero(candidates[i]);
    if (m.status !== "ok") {
      tried.push({ candidate: i, ...m });
      continue;
    }
    if (m.landscape || heroIndex != null) {
      chosen = { ...m, candidate: i };
      break;
    }
    upright ??= { ...m, candidate: i };
  }
  chosen ??= upright;
  if (!chosen) return { status: "no_hero", tried, candidates, source_page: site };
  const hero = { ...(await saveHero(chosen, slug)), candidate: chosen.candidate };

  const found = previous?.logo_off ? null : findLogo(html, site);
  const logo = found ? await saveLogo(found, slug).catch((e) => ({ status: "logo_error", error: String(e.message ?? e).slice(0, 160) })) : null;

  const entry = {
    status: "ok",
    source_page: site,
    hero: { ...hero.hero, candidate: hero.candidate },
    logo: logo?.status === "ok" ? { path: logo.path, width: logo.width, height: logo.height, bytes: logo.bytes, source: logo.source } : null,
    logo_note: logo && logo.status !== "ok" ? logo.status : found ? undefined : previous?.logo_off ? "turned off" : "no logo found",
    logo_off: previous?.logo_off || undefined,
    background: hero.background,
    candidates,
    tried: tried.length ? tried : undefined,
  };
  // A review holds only for the files it saw.
  const same = previous && previous.hero?.source_image === entry.hero.source_image && previous.logo?.source === entry.logo?.source;
  entry.review = same && previous.review ? previous.review : { status: "pending" };
  return entry;
}

/** One tile per look as the header will show it: photo, page colour, logo in the theme's ink. */
async function sheet(manifest, out, only) {
  const W = 640;
  const tiles = [];
  for (const [slug, e] of Object.entries(manifest)) {
    if (e.status !== "ok" || (only.length && !only.includes(slug))) continue;
    const t = themeFor(e.background);
    const photo = await sharp(join(ROOT, "public", e.hero.path)).resize({ width: W, height: 300, fit: "cover", position: "attention" }).png().toBuffer();
    const layers = [{ input: photo, top: 0, left: 0 }];
    if (e.logo) {
      const box = logoBox(e.logo.width, e.logo.height, 56, 400);
      const alpha = await sharp(join(ROOT, "public", e.logo.path)).resize(box).extractChannel(3).toBuffer();
      const logo = await sharp({ create: { ...box, channels: 3, background: t.ink } }).joinChannel(alpha).png().toBuffer();
      layers.push({ input: logo, top: 300 + 40, left: Math.round((W - box.width) / 2) });
    }
    const label = `<svg width="${W}" height="24"><text x="8" y="17" font-family="sans-serif" font-size="14" fill="${t.ink}">${slug} · hero #${e.hero.candidate} · ${e.background} · ${e.logo ? "logo" : e.logo_note} · review ${e.review?.status}</text></svg>`;
    layers.push({ input: Buffer.from(label), top: 300 + 128, left: 0 });
    tiles.push(await sharp({ create: { width: W, height: 456, channels: 3, background: t.bg } }).composite(layers).png().toBuffer());
  }
  if (!tiles.length) return console.log("No fetched looks to show.");
  const cols = 2;
  const rows = Math.ceil(tiles.length / cols);
  await sharp({ create: { width: cols * (W + 8), height: rows * 464, channels: 3, background: "#ffffff" } })
    .composite(tiles.map((input, i) => ({ input, left: (i % cols) * (W + 8), top: Math.floor(i / cols) * 464 })))
    .png()
    .toFile(out);
  console.log(`${tiles.length} looks → ${out}`);
}

function save(manifest) {
  writeFileSync(MANIFEST, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2) + "\n");
}

function readBrand(slug) {
  const file = join(BRANDS, `${slug}.json`);
  if (!existsSync(file)) throw new Error(`no brand file for ${slug}`);
  return JSON.parse(readFileSync(file, "utf8"));
}

async function fetchOne(manifest, slug, heroIndex = null) {
  let result;
  try {
    result = await lookFor(slug, readBrand(slug), manifest[slug], heroIndex);
  } catch (err) {
    result = { status: "error", error: String(err.message ?? err).slice(0, 200) };
  }
  if (result.status !== "ok") for (const f of ["1600", "800", "logo"]) rmSync(join(OUT, `${slug}-${f}.webp`), { force: true });
  manifest[slug] = { ...result, fetched_at: today() };
  const r = manifest[slug];
  console.log(
    `${slug.padEnd(28)} ${r.status}` +
      (r.hero ? ` hero#${r.hero.candidate} ${r.hero.width}×${r.hero.height} ${Math.round(r.hero.bytes / 1024)}KB bg ${r.background}` : "") +
      (r.status === "ok" ? (r.logo ? ` logo ${r.logo.width}×${r.logo.height}` : ` logo: ${r.logo_note}`) : "") +
      (r.http ? ` http ${r.http}` : "") +
      (r.error ? ` ${r.error}` : ""),
  );
}

mkdirSync(OUT, { recursive: true });
const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {};
const [cmd, ...rest] = process.argv.slice(2);

if (cmd === "--review") {
  const [slug, verdict, ...note] = rest;
  if (!manifest[slug] || manifest[slug].status !== "ok") throw new Error(`${slug} has no fetched look`);
  if (!["ok", "reject"].includes(verdict)) throw new Error("verdict must be ok or reject");
  manifest[slug].review = { status: verdict, note: note.join(" ") || undefined, at: today() };
  // A rejected look never renders, so its files don't stay in the repo.
  if (verdict === "reject") for (const f of ["1600", "800", "logo"]) rmSync(join(OUT, `${slug}-${f}.webp`), { force: true });
  save(manifest);
  console.log(`${slug}: ${verdict}`);
} else if (cmd === "--sheet") {
  const [out, ...only] = rest;
  await sheet(manifest, out, only);
} else if (cmd === "--hero") {
  const [slug, n] = rest;
  await fetchOne(manifest, slug, Number(n));
  save(manifest);
} else if (cmd === "--no-logo") {
  const [slug] = rest;
  if (!manifest[slug]) throw new Error(`${slug} has no fetched look`);
  manifest[slug].logo_off = true;
  await fetchOne(manifest, slug, manifest[slug].hero?.candidate ?? null);
  save(manifest);
} else {
  const force = process.argv.includes("--force");
  const slugs = process.argv.slice(2).filter((a) => !a.startsWith("--")).filter((s) => force || manifest[s]?.status !== "ok");
  if (slugs.length === 0) console.log("Nothing to fetch. Name brand slugs (pipeline/data/brands/*.json); --force refetches.");
  const queue = [...slugs];
  const worker = async () => {
    for (let slug = queue.shift(); slug; slug = queue.shift()) await fetchOne(manifest, slug, manifest[slug]?.hero?.candidate ?? null);
  };
  await Promise.all([worker(), worker(), worker()]);
  save(manifest);
}
