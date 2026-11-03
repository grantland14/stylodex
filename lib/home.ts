// Picking what the home page shows: one photo per category tile, the store cards and the
// product rows. Photos only come from each brand's own store (productShots) or homepage banner.
import { productPhoto, type Hub } from "./categories";
import type { Brand, ProductShot } from "./types";

/** The brand's product shots in the hub's category, or all of them for a size hub. */
function hubShots(brand: Brand, hub: Hub): ProductShot[] {
  const category = hub.category;
  return category ? brand.productShots.filter((s) => category.matches.includes(s.category)) : brand.productShots;
}

/**
 * One photo per tile, never the same photo on two tiles and, where possible, not the same brand:
 * a shot from the hub's category first, else any product photo, else none (the tile shows its
 * name on grey).
 */
export function tilePhotos(hubs: Hub[]): Map<string, string | null> {
  const usedPhotos = new Set<string>();
  const usedBrands = new Set<string>();
  const photos = new Map<string, string | null>();
  for (const hub of hubs) {
    const inCategory = hub.brands.flatMap((b) => hubShots(b, hub).map((s) => ({ slug: b.slug, url: s.imageUrl })));
    const anyPhoto = hub.brands.flatMap((b) => {
      const url = productPhoto(b);
      return url ? [{ slug: b.slug, url }] : [];
    });
    const fresh = (c: { url: string }) => !usedPhotos.has(c.url);
    const newBrand = (c: { slug: string; url: string }) => fresh(c) && !usedBrands.has(c.slug);
    const pick = inCategory.find(newBrand) ?? inCategory.find(fresh) ?? anyPhoto.find(newBrand) ?? anyPhoto.find(fresh);
    if (pick) {
      usedPhotos.add(pick.url);
      usedBrands.add(pick.slug);
    }
    photos.set(hub.path, pick?.url ?? null);
  }
  return photos;
}

export interface StoreCardData {
  brand: Brand;
  cover: string;
  shots: ProductShot[];
}

/** A store card needs a cover and two other product shots; the cover is the banner if there is one. */
function storeCard(brand: Brand): StoreCardData | null {
  const cover = brand.look?.heroSmallUrl ?? brand.productShots[0]?.imageUrl;
  if (!cover) return null;
  const shots = brand.productShots.filter((s) => s.imageUrl !== cover).slice(0, 2);
  return shots.length === 2 ? { brand, cover, shots } : null;
}

/**
 * Store cards: brands people look for first (those with a list, biggest list first), then
 * brands with a homepage banner, then A to Z. Brands without enough photos are skipped.
 */
export function storeCards(brands: Brand[], featured: string[], count: number): StoreCardData[] {
  const rank = new Map(featured.map((slug, i) => [slug, i]));
  const order = (b: Brand) => rank.get(b.slug) ?? featured.length + (b.look?.heroSmallUrl ? 0 : 1);
  return [...brands]
    .sort((a, b) => order(a) - order(b) || a.name.localeCompare(b.name, "en", { sensitivity: "base" }))
    .flatMap((b) => storeCard(b) ?? [])
    .slice(0, count);
}

/** A row of products from a category hub: one shot per brand, in the hub's order. */
export function hubProducts(hub: Hub, count: number): { brand: Brand; shot: ProductShot }[] {
  return hub.brands
    .flatMap((brand) => {
      const shot = hubShots(brand, hub)[0];
      return shot ? [{ brand, shot }] : [];
    })
    .slice(0, count);
}
