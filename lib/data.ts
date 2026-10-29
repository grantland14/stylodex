import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { env } from "./env";
import { fixtureClosedStorePage, fixturePage } from "./fixtures";
import { pipelinePages } from "./pipeline";
import type { Brand, BrandsLikePage, CategoryPrice, Evidence, Faq, SimilarPick, UrlPrefix } from "./types";

/** Placeholder data, local only. Forces noindex everywhere and an empty sitemap. */
export const FIXTURE_MODE = env("STYLODEX_FIXTURES") === "1";
/** Pages built from pipeline/data/ JSON, to read copy before it is loaded. Also noindex everywhere. */
export const PIPELINE_MODE = env("STYLODEX_DATA") === "pipeline";
/** Either local source: the site must not be indexed, and robots.txt disallows all. */
export const PREVIEW_ONLY = FIXTURE_MODE || PIPELINE_MODE;

/** Stylodex's own schema in the shared Supabase project. Never query Apart Style's `public` tables. */
const SCHEMA = "stylodex";

let localCache: BrandsLikePage[] | null = null;
/** Pages from a local source (fixtures or pipeline files), or null when reading Supabase. */
function localPages(): BrandsLikePage[] | null {
  if (!PREVIEW_ONLY) return null;
  localCache ??= FIXTURE_MODE ? [fixturePage(), fixtureClosedStorePage()] : pipelinePages();
  return localCache;
}
const localBrands = (pages: BrandsLikePage[]) => pages.flatMap((page) => [page.anchor, ...page.picks.map((p) => p.brand)]);

let client: SupabaseClient<any, typeof SCHEMA> | null = null; // eslint-disable-line @typescript-eslint/no-explicit-any

function db() {
  if (client) return client;
  const url = env("SUPABASE_URL");
  const key = env("SUPABASE_ANON_KEY");
  if (!url || !key) {
    throw new Error("Supabase env vars missing. Set them, or STYLODEX_FIXTURES=1 for local placeholder data.");
  }
  client = createClient(url, key, { db: { schema: SCHEMA } });
  return client;
}

const BRAND_COLUMNS =
  "id, slug, name, kind, website_url, status, known_for, hq_country, founded_year, size_range, has_plus, has_petite, has_tall, ships_to, free_shipping_min_usd, returns_days, materials, certifications, production_model, sale_pattern, image_url, verified_at, brand_category_prices(category_slug, currency, price_min, price_max, price_min_usd, price_max_usd, source_url, checked_at)";

/* eslint-disable @typescript-eslint/no-explicit-any -- untyped Supabase rows, mapped once here */
function toBrand(row: any): Brand {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    kind: row.kind,
    websiteUrl: row.website_url,
    status: row.status,
    knownFor: row.known_for,
    hqCountry: row.hq_country,
    foundedYear: row.founded_year,
    sizeRange: row.size_range,
    hasPlus: row.has_plus,
    hasPetite: row.has_petite,
    hasTall: row.has_tall,
    shipsTo: row.ships_to ?? [],
    freeShippingMinUsd: row.free_shipping_min_usd == null ? null : Number(row.free_shipping_min_usd),
    returnsDays: row.returns_days,
    materials: row.materials ?? [],
    certifications: row.certifications ?? [],
    productionModel: row.production_model,
    salePattern: row.sale_pattern,
    imageUrl: row.image_url,
    verifiedAt: row.verified_at,
    prices: (row.brand_category_prices ?? []).map(
      (p: any): CategoryPrice => ({
        category: p.category_slug,
        currency: p.currency,
        min: Number(p.price_min),
        max: Number(p.price_max),
        minUsd: Number(p.price_min_usd),
        maxUsd: Number(p.price_max_usd),
        sourceUrl: p.source_url,
        checkedAt: p.checked_at,
      }),
    ),
  };
}

export async function getBrand(slug: string): Promise<Brand | null> {
  const local = localPages();
  if (local) return localBrands(local).find((b) => b.slug === slug) ?? null;
  const { data, error } = await db().from("brands").select(BRAND_COLUMNS).eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data ? toBrand(data) : null;
}

/** Everything a "brands like X" page needs. Returns all verified picks; the gate decides what renders. */
export async function getBrandsLikePage(slug: string): Promise<BrandsLikePage | null> {
  const local = localPages();
  if (local) return local.find((page) => page.anchor.slug === slug) ?? null;

  const anchor = await getBrand(slug);
  if (!anchor) return null;

  const { data: pageRow, error: pageError } = await db()
    .from("brands_like_pages")
    .select("url_prefix, intro, faqs, author, human_edited, checked_at, categories(slug, name)")
    .eq("brand_id", anchor.id)
    .maybeSingle();
  if (pageError) throw pageError;
  if (!pageRow) return null;

  const { data: pairRows, error: pairError } = await db()
    .from("similar_pairs")
    .select(`status, rank, price_relation, reason, body, checked_at, pair_evidence(kind, url, note), brand:brands!similar_pairs_similar_brand_id_fkey(${BRAND_COLUMNS})`)
    .eq("brand_id", anchor.id)
    .eq("status", "verified")
    .order("rank");
  if (pairError) throw pairError;

  const picks: SimilarPick[] = (pairRows ?? [])
    .filter((row: any) => row.brand)
    .map((row: any) => ({
      brand: toBrand(row.brand),
      pair: {
        status: row.status,
        rank: row.rank,
        priceRelation: row.price_relation,
        reason: row.reason,
        body: row.body,
        checkedAt: row.checked_at,
        evidence: (row.pair_evidence ?? []).map((e: any): Evidence => ({ kind: e.kind, url: e.url, note: e.note })),
      },
    }));

  const category = (pageRow as any).categories;
  return {
    urlPrefix: pageRow.url_prefix,
    anchor,
    category: { slug: category.slug, name: category.name },
    intro: pageRow.intro,
    faqs: (pageRow.faqs ?? []) as Faq[],
    author: pageRow.author,
    humanEdited: pageRow.human_edited,
    checkedAt: pageRow.checked_at,
    picks,
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/** The URL prefix of a brand's alternatives page, or null if it has none. Used to link only to pages that exist. */
export async function getAlternativesPrefix(slug: string): Promise<UrlPrefix | null> {
  const local = localPages();
  if (local) return local.find((page) => page.anchor.slug === slug)?.urlPrefix ?? null;
  const { data, error } = await db()
    .from("brands_like_pages")
    .select("url_prefix, brands!inner(slug)")
    .eq("brands.slug", slug)
    .maybeSingle();
  if (error) throw error;
  return (data?.url_prefix as UrlPrefix | undefined) ?? null;
}

/** Slugs of every drafted "brands like X" page. The sitemap gates each one before listing it. */
export async function listBrandsLikeSlugs(): Promise<string[]> {
  const local = localPages();
  if (local) return local.map((page) => page.anchor.slug);
  const { data, error } = await db().from("brands_like_pages").select("brands(slug)");
  if (error) throw error;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data ?? []).map((row: any) => row.brands?.slug).filter(Boolean);
}

/**
 * Every drafted alternatives page, for the static build. Loads pages one by one,
 * which is fine at wave sizes (hundreds); batch it before the site reaches thousands.
 */
export async function listAlternativesPages(): Promise<BrandsLikePage[]> {
  const local = localPages();
  if (local) return local;
  const pages: BrandsLikePage[] = [];
  for (const slug of await listBrandsLikeSlugs()) {
    const page = await getBrandsLikePage(slug);
    if (page) pages.push(page);
  }
  return pages;
}

/** Verified brands, which get a profile page. Closed stores and candidates don't. */
export async function listProfileBrands(): Promise<Brand[]> {
  const local = localPages();
  if (local) return [...new Map(localBrands(local).filter((b) => b.status === "verified").map((b) => [b.slug, b])).values()];
  const { data, error } = await db().from("brands").select(BRAND_COLUMNS).eq("status", "verified");
  if (error) throw error;
  return (data ?? []).map(toBrand);
}

/** Server-side click log for /go/. Never throws: a logging failure must not block the redirect. */
export async function logClick(brandId: string, pagePath: string | null): Promise<void> {
  const url = env("SUPABASE_URL");
  const serviceKey = env("SUPABASE_SERVICE_ROLE_KEY");
  if (PREVIEW_ONLY || !url || !serviceKey) return;
  try {
    await createClient(url, serviceKey, { db: { schema: SCHEMA } }).from("clicks").insert({ brand_id: brandId, page_path: pagePath });
  } catch (err) {
    console.error("click log failed", err);
  }
}
