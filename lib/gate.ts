// The indexing gate. Apart Style was demoted site-wide on templated scale, so
// nothing on Stylodex is indexable unless every claim on it traces to a
// verified, dated fact. Rules here mirror tasks/todo.md Phase 1b and Phase 3.

import type { Brand, BrandsLikePage, CategoryPrice, PriceRelation, SimilarPick } from "./types";

export const MIN_PICKS = 6;
export const MAX_PICKS = 12;
export const RECHECK_DAYS = 90;
const MIN_REASON_CHARS = 40;
const DAY_MS = 24 * 60 * 60 * 1000;

export function priceFor(brand: Brand, category: string): CategoryPrice | undefined {
  return brand.prices.find((p) => p.category === category);
}

/** Fields a brand needs before any page about it can be indexed. */
export function missingBrandFacts(brand: Brand, category: string): string[] {
  const missing: string[] = [];
  if (brand.status !== "verified") missing.push("status");
  if (!brand.websiteUrl) missing.push("websiteUrl");
  if (!brand.knownFor) missing.push("knownFor");
  if (!brand.hqCountry) missing.push("hqCountry");
  if (!brand.sizeRange) missing.push("sizeRange");
  if (brand.shipsTo.length === 0) missing.push("shipsTo");
  if (brand.returnsDays == null) missing.push("returnsDays");
  // Only Stylodex-hosted images (/img/...). A raw storage or third-party URL would
  // expose the shared Supabase project or hotlink another site's copy.
  if (!brand.imageUrl?.startsWith("/img/")) missing.push("imageUrl");
  if (!priceFor(brand, category)) missing.push(`price:${category}`);
  return missing;
}

/**
 * Facts the page's subject needs. A closed store can anchor a page ("stores like
 * Payless" is a replacement search), so a defunct anchor needs only what the
 * intro and title use; it has no live prices, sizes or shipping to show.
 */
export function missingAnchorFacts(anchor: Brand, category: string): string[] {
  if (anchor.status !== "defunct") return missingBrandFacts(anchor, category);
  const missing: string[] = [];
  if (!anchor.knownFor) missing.push("knownFor");
  if (anchor.imageUrl && !anchor.imageUrl.startsWith("/img/")) missing.push("imageUrl");
  return missing;
}

/** How the pick's price range sits against the anchor's, for one category. */
export function computePriceRelation(anchor: CategoryPrice, pick: CategoryPrice): PriceRelation {
  if (pick.maxUsd < anchor.minUsd) return "cheaper";
  if (pick.minUsd > anchor.maxUsd) return "pricier";
  return "similar";
}

function isStale(checkedAt: string | null, now: Date): boolean {
  if (!checkedAt) return true;
  return now.getTime() - new Date(checkedAt).getTime() > RECHECK_DAYS * DAY_MS;
}

/** Reasons a pick can't be published on the anchor's page. Empty means publishable. */
export function pickProblems(anchor: Brand, pick: SimilarPick, category: string, now: Date): string[] {
  const { brand, pair } = pick;
  const problems: string[] = [];

  if (pair.status !== "verified") problems.push("pair not verified");
  if (brand.status !== "verified") problems.push("brand not verified");
  if (isStale(pair.checkedAt, now)) problems.push(`pair not checked in ${RECHECK_DAYS} days`);
  if (pair.evidence.length === 0) problems.push("no outside evidence");
  if (!pair.reason || pair.reason.trim().length < MIN_REASON_CHARS) problems.push("no specific reason");
  if (!pair.body) problems.push("no body");

  const anchorPrice = priceFor(anchor, category);
  const pickPrice = priceFor(brand, category);
  if (!pickPrice) {
    problems.push(`doesn't sell ${category}`);
  } else if (anchorPrice && pair.priceRelation !== computePriceRelation(anchorPrice, pickPrice)) {
    problems.push("price label doesn't match stored prices");
  } else if (!anchorPrice && pair.priceRelation) {
    problems.push("price label without an anchor price");
  }

  return problems;
}

export interface PageVerdict {
  indexable: boolean;
  /** Picks to render, in rank order, capped at MAX_PICKS. */
  picks: SimilarPick[];
  reasons: string[];
}

export function judgeBrandsLikePage(page: BrandsLikePage, now = new Date()): PageVerdict {
  const category = page.category.slug;
  const reasons: string[] = [];

  const anchorMissing = missingAnchorFacts(page.anchor, category);
  if (anchorMissing.length > 0) reasons.push(`anchor missing: ${anchorMissing.join(", ")}`);
  if (isStale(page.checkedAt, now)) reasons.push(`page not checked in ${RECHECK_DAYS} days`);

  const picks = page.picks
    .filter((pick) => pickProblems(page.anchor, pick, category, now).length === 0)
    .sort((a, b) => (a.pair.rank ?? Infinity) - (b.pair.rank ?? Infinity))
    .slice(0, MAX_PICKS);

  if (picks.length < MIN_PICKS) reasons.push(`only ${picks.length} publishable picks (need ${MIN_PICKS})`);

  return { indexable: reasons.length === 0, picks, reasons };
}

const TITLE_NOUN = { brands: "Brands", stores: "Stores", sites: "Sites" } as const;

/** "7 Brands Like Levi's for Durable, High-Quality Denim". The count is the real count. */
export function brandsLikeTitle(page: BrandsLikePage, pickCount: number): string {
  const base = `${pickCount} ${TITLE_NOUN[page.urlPrefix]} Like ${page.anchor.name}`;
  return page.anchor.knownFor ? `${base} for ${page.anchor.knownFor}` : base;
}
