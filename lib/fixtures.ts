// Placeholder data for local development and tests. Every brand here is
// invented ("Example ..."), so none of it can leak into the live site as fact.
// Fixture mode is noindex site-wide (see lib/data.ts).

import type { Brand, BrandsLikePage, SimilarPick } from "./types";

const CHECKED = "2026-10-01T00:00:00Z";

export function fixtureBrand(overrides: Partial<Brand> & Pick<Brand, "slug" | "name">): Brand {
  return {
    id: `fixture-${overrides.slug}`,
    websiteUrl: `https://${overrides.slug}.example.com`,
    status: "verified",
    knownFor: "Durable, Everyday Denim",
    hqCountry: "US",
    foundedYear: 2010,
    sizeRange: "W24–W40",
    hasPlus: false,
    hasPetite: false,
    hasTall: true,
    shipsTo: ["US", "CA", "GB", "AU"],
    freeShippingMinUsd: 75,
    returnsDays: 30,
    materials: ["cotton"],
    certifications: [],
    productionModel: "Seasonal collections, made to order in small runs",
    salePattern: "Twice-yearly end-of-season sale",
    imageUrl: "https://placehold.co/800x600?text=Example",
    verifiedAt: CHECKED,
    prices: [{ category: "denim", minUsd: 80, maxUsd: 140, sourceUrl: "https://example.com", checkedAt: CHECKED }],
    ...overrides,
  };
}

export function fixturePick(slug: string, name: string, rank: number, overrides: Partial<SimilarPick["pair"]> = {}): SimilarPick {
  return {
    brand: fixtureBrand({ slug, name }),
    pair: {
      status: "verified",
      rank,
      priceRelation: "similar",
      reason: `${name} cuts its jeans from the same weight of cotton denim at a similar price.`,
      body: `${name} is placeholder copy for local development. Real bodies are drafted from both brands' stored facts and nothing else.`,
      checkedAt: CHECKED,
      evidence: [{ kind: "serp_comention", url: "https://example.com/serp", note: null }],
      ...overrides,
    },
  };
}

export function fixturePage(): BrandsLikePage {
  const names = ["Example Selvedge", "Example Workwear", "Example Loom", "Example Rivet", "Example Indigo", "Example Raw", "Example Twill"];
  return {
    anchor: fixtureBrand({ slug: "example-denim-co", name: "Example Denim Co" }),
    category: { slug: "denim", name: "Denim" },
    intro: "Placeholder intro. On the live site this says what people go to the anchor brand for, and what the list matches on.",
    faqs: [{ q: "Is this real data?", a: "No. This is fixture data for local development." }],
    author: "Stylodex Editors",
    humanEdited: false,
    checkedAt: CHECKED,
    picks: names.map((name, i) => fixturePick(name.toLowerCase().replace(/\s+/g, "-"), name, i + 1)),
  };
}
