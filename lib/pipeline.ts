// Builds pages straight from the reviewed pipeline files (pipeline/data/), so the
// written copy can be read on a preview before it is loaded into Supabase.
// Preview only: lib/data.ts makes the whole site noindex in this mode.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Brand, BrandsLikePage, CategoryPrice, Evidence, ProductShot, SimilarPick, UrlPrefix } from "./types";

const DATA = join(process.cwd(), "pipeline", "data");

/* eslint-disable @typescript-eslint/no-explicit-any -- hand-written JSON, mapped once here */
function readJson(path: string): any {
  return JSON.parse(readFileSync(path, "utf8"));
}

/** Media from pipeline/images.mjs and pipeline/product-images.mjs, keyed by brand slug. */
export interface Media {
  images: Record<string, any>;
  products: Record<string, Record<string, any>>;
  copy: Record<string, any>;
}

export function loadMedia(dataDir = DATA): Media {
  const read = (f: string) => (existsSync(join(dataDir, f)) ? readJson(join(dataDir, f)) : {});
  const copyDir = join(dataDir, "brand-copy");
  const copy: Record<string, any> = {};
  if (existsSync(copyDir)) {
    for (const f of readdirSync(copyDir).filter((x) => x.endsWith(".json"))) copy[f.replace(/\.json$/, "")] = readJson(join(copyDir, f));
  }
  return { images: read("images.json"), products: read("product-images.json"), copy };
}

function shotsFor(slug: string, media: Media): ProductShot[] {
  return Object.entries(media.products[slug] ?? {}).flatMap(([category, r]: [string, any]) =>
    r?.status === "ok"
      ? (r.items ?? []).map((i: any) => ({
          category,
          imageUrl: i.path,
          title: i.title,
          productPath: i.product_path,
          price: Number(i.price),
          currency: i.currency ?? "USD",
        }))
      : [],
  );
}

export function brandFromJson(slug: string, j: any, media: Media = { images: {}, products: {}, copy: {} }): Brand {
  return {
    id: `pipeline-${slug}`,
    slug,
    name: j.name ?? slug,
    kind: j.kind ?? "brand",
    websiteUrl: j.website_url ?? null,
    status: j.status ?? "candidate",
    knownFor: j.known_for ?? null,
    about: media.copy[slug]?.about ?? null,
    hqCountry: j.hq_country ?? null,
    foundedYear: j.founded_year ?? null,
    parentCompany: j.parent_company ?? null,
    sizeRange: j.size_range ?? null,
    hasPlus: j.has_plus ?? null,
    hasPetite: j.has_petite ?? null,
    hasTall: j.has_tall ?? null,
    shipsTo: j.ships_to ?? [],
    usStores: j.us_stores ?? null,
    freeShippingMinUsd: j.free_shipping_min_usd ?? null,
    returnsDays: j.returns_days ?? null,
    materials: j.materials ?? [],
    certifications: j.certifications ?? [],
    productionModel: j.production_model ?? null,
    salePattern: j.sale_pattern ?? null,
    // The brand's share image, else its first product photo from its own store.
    imageUrl: j.image_url ?? (media.images[slug]?.status === "ok" ? media.images[slug].path : null) ?? shotsFor(slug, media)[0]?.imageUrl ?? null,
    verifiedAt: j.verified_at ?? null,
    productShots: shotsFor(slug, media),
    sellsCategories: j.sells_categories ?? [],
    prices: (j.prices ?? [])
      .filter((p: any) => p.min != null && p.max != null && p.min_usd != null && p.max_usd != null)
      .map(
        (p: any): CategoryPrice => ({
          category: p.category,
          currency: p.currency ?? "USD",
          min: Number(p.min),
          max: Number(p.max),
          minUsd: Number(p.min_usd),
          maxUsd: Number(p.max_usd),
          sourceUrl: p.source_url,
          checkedAt: p.checked_at,
        }),
      ),
  };
}

/** One page file plus the brand files it names. Null if the page has no written copy yet. */
export function pageFromJson(page: any, brands: Map<string, Brand>): BrandsLikePage | null {
  if (!page.copy?.intro) return null;
  const anchor = brands.get(page.slug);
  if (!anchor) return null;
  const picks: SimilarPick[] = (page.picks ?? [])
    .filter((p: any) => brands.has(p.slug))
    .map((p: any) => ({
      brand: brands.get(p.slug)!,
      pair: {
        status: "verified" as const,
        rank: p.rank ?? null,
        priceRelation: p.price_relation ?? null,
        reason: p.reason ?? null,
        body: page.copy.bodies?.[p.slug] ?? null,
        bestFor: page.copy.best_for?.[p.slug] ?? null,
        checkedAt: page.checked_at ?? null,
        evidence: (p.evidence ?? []).map((e: any): Evidence => ({ kind: e.kind, url: e.url, note: e.note ?? null })),
      },
    }));
  return {
    urlPrefix: (page.url_prefix ?? "brands") as UrlPrefix,
    anchor,
    category: { slug: page.category.slug, name: page.category.name },
    intro: page.copy.intro,
    faqs: (page.copy.faqs ?? []).map((f: any) => ({ q: f.q, a: f.a })),
    closing: page.copy.closing?.body ? { heading: page.copy.closing.heading ?? "How to choose", body: page.copy.closing.body } : null,
    author: page.author ?? "Ash",
    humanEdited: false,
    checkedAt: page.checked_at,
    picks,
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export function pipelinePages(dataDir = DATA): BrandsLikePage[] {
  const brandsDir = join(dataDir, "brands");
  const pagesDir = join(dataDir, "pages");
  if (!existsSync(brandsDir) || !existsSync(pagesDir)) return [];
  const media = loadMedia(dataDir);
  const brands = new Map<string, Brand>();
  for (const file of readdirSync(brandsDir).filter((f) => f.endsWith(".json"))) {
    const slug = file.replace(/\.json$/, "");
    brands.set(slug, brandFromJson(slug, readJson(join(brandsDir, file)), media));
  }
  return readdirSync(pagesDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => pageFromJson(readJson(join(pagesDir, f)), brands))
    .filter((p): p is BrandsLikePage => p !== null);
}
