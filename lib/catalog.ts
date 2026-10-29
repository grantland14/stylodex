// What the home page, the A–Z page and the search index show: every built list and every
// brand profile, from the same gated data the pages use, so nothing links to a 404.
import { listAlternativesPages, listProfileBrands } from "./data";
import { brandsLikeTitle, judgeBrandsLikePage } from "./gate";
import { alternativesPath } from "./paths";
import type { Brand, BrandsLikePage, ProductShot } from "./types";

export interface ListCard {
  title: string;
  path: string;
  anchorName: string;
  anchorSlug: string;
  category: string;
  picks: number;
  /** Up to 3 product photos from the first picks, for the card mosaic. */
  shots: ProductShot[];
}

export interface Catalog {
  lists: ListCard[];
  brands: Brand[];
}

function cardFor(page: BrandsLikePage): ListCard | null {
  const { picks } = judgeBrandsLikePage(page);
  if (picks.length === 0) return null;
  const shots = picks.flatMap((p) => p.brand.productShots.filter((s) => s.category === page.category.slug).slice(0, 1)).slice(0, 3);
  return {
    title: brandsLikeTitle(page, picks.length),
    path: alternativesPath(page.urlPrefix, page.anchor.slug),
    anchorName: page.anchor.name,
    anchorSlug: page.anchor.slug,
    category: page.category.name,
    picks: picks.length,
    shots,
  };
}

export async function loadCatalog(): Promise<Catalog> {
  const lists = (await listAlternativesPages()).map(cardFor).filter((c): c is ListCard => c !== null);
  const brands = (await listProfileBrands()).sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
  return { lists, brands };
}

export interface SearchEntry {
  /** What the reader types: the brand or store name. */
  name: string;
  /** Where to go: its alternatives list if one exists, else its profile. */
  href: string;
  label: string;
}

export function searchEntries({ lists, brands }: Catalog): SearchEntry[] {
  const byName = new Map<string, SearchEntry>();
  for (const b of brands) byName.set(b.slug, { name: b.name, href: `/brands/${b.slug}`, label: "Brand" });
  for (const l of lists) byName.set(l.anchorSlug, { name: l.anchorName, href: l.path, label: `${l.picks} alternatives` });
  return [...byName.values()].sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
}
