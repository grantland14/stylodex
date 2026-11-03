// Browsing by what people shop for: the category and fit hubs (/categories/x, /sizes/x) and
// the home page tiles that lead to them. A brand belongs to a category when its own store's
// prices were checked there, or an official source confirms it sells it (lib/types.ts).
import type { Brand } from "./types";

export interface CategoryDef {
  slug: string;
  name: string;
  /** Stored category slugs that count as this one (the pipeline has used more than one name). */
  matches: string[];
}

export interface CategoryGroup {
  name: string;
  categories: CategoryDef[];
}

const def = (slug: string, name: string, also: string[] = []): CategoryDef => ({ slug, name, matches: [slug, ...also] });

/** Every category a hub can be built for, grouped the way the home page shows them. */
export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    name: "Clothing",
    categories: [
      def("dresses", "Dresses"),
      def("tops", "Tops"),
      def("tees", "Tees"),
      def("graphic-tees", "Graphic tees"),
      def("shirts", "Shirts"),
      def("sweaters", "Sweaters"),
      def("hoodies", "Hoodies", ["sweatshirts"]),
      def("coats-jackets", "Coats & jackets"),
      def("leather-jackets", "Leather jackets"),
      def("womens-clothing", "Women's clothing", ["womenswear"]),
      def("mens-clothing", "Men's clothing"),
    ],
  },
  {
    name: "Denim & bottoms",
    categories: [def("jeans", "Jeans", ["denim"]), def("pants", "Pants", ["sweatpants"]), def("leggings", "Leggings"), def("boardshorts", "Boardshorts")],
  },
  { name: "Shoes", categories: [def("sneakers", "Sneakers"), def("boots", "Boots")] },
  { name: "Bags", categories: [def("bags", "Bags"), def("handbags", "Handbags")] },
  {
    name: "Jewelry",
    categories: [def("jewelry", "Jewelry"), def("necklaces", "Necklaces"), def("earrings", "Earrings"), def("rings", "Rings"), def("charms", "Charms")],
  },
  { name: "Intimates", categories: [def("underwear", "Underwear"), def("bras", "Bras")] },
];

export interface FitDef {
  slug: string;
  name: string;
  /** "Plus-size brands": how the hub's title reads. */
  title: string;
  has: (brand: Brand) => boolean;
}

export const FITS: FitDef[] = [
  { slug: "plus-size", name: "Plus size", title: "Plus-size brands", has: (b) => b.hasPlus === true },
  { slug: "petite", name: "Petite", title: "Petite brands", has: (b) => b.hasPetite === true },
  { slug: "tall", name: "Tall", title: "Tall brands", has: (b) => b.hasTall === true },
];

/** A hub with fewer brands than this is a thin page; it is neither built nor linked. */
export const MIN_HUB_BRANDS = 3;

/** True when the brand's store was checked in, or is confirmed to sell, this category. */
export function sellsCategory(brand: Brand, category: CategoryDef): boolean {
  return brand.prices.some((p) => category.matches.includes(p.category)) || brand.sellsCategories.some((c) => category.matches.includes(c));
}

/** The brand's checked prices for this category, if any (one per matching stored slug). */
export function categoryPrice(brand: Brand, category: CategoryDef) {
  return brand.prices.find((p) => category.matches.includes(p.category));
}

/** A product shot from this category first, then any product shot, then the homepage banner. */
export function productPhoto(brand: Brand, category?: CategoryDef): string | null {
  const inCategory = category && brand.productShots.find((s) => category.matches.includes(s.category));
  return (inCategory ?? brand.productShots[0])?.imageUrl ?? brand.look?.heroSmallUrl ?? null;
}

/**
 * A picture for the brand on a hub: a product photo, else its site image, which is often a logo
 * and so is shown whole rather than cropped (`cropped: false`). Null shows its initial.
 */
export function brandPhoto(brand: Brand, category?: CategoryDef): { url: string; cropped: boolean } | null {
  const photo = productPhoto(brand, category);
  if (photo) return { url: photo, cropped: true };
  return brand.imageUrl ? { url: brand.imageUrl, cropped: false } : null;
}

/** Brands with a product photo first, then a site image, then A–Z, so a hub reads as a lookbook. */
export function byPhotoThenName(category?: CategoryDef) {
  const rank = (b: Brand) => (productPhoto(b, category) ? 2 : b.imageUrl ? 1 : 0);
  return (a: Brand, b: Brand) => rank(b) - rank(a) || a.name.localeCompare(b.name, "en", { sensitivity: "base" });
}

export interface Hub {
  kind: "category" | "fit";
  slug: string;
  name: string;
  title: string;
  path: string;
  brands: Brand[];
  /** Set for category hubs; prices and photos are read for it. */
  category?: CategoryDef;
}

export interface HubGroup {
  name: string;
  hubs: Hub[];
}

export function categoryHubs(brands: Brand[]): HubGroup[] {
  return CATEGORY_GROUPS.map((group) => ({
    name: group.name,
    hubs: group.categories
      .map((category): Hub => ({
        kind: "category",
        slug: category.slug,
        name: category.name,
        title: `${category.name} brands and stores`,
        path: `/categories/${category.slug}`,
        brands: brands.filter((b) => sellsCategory(b, category)).sort(byPhotoThenName(category)),
        category,
      }))
      .filter((hub) => hub.brands.length >= MIN_HUB_BRANDS),
  })).filter((group) => group.hubs.length > 0);
}

export function fitHubs(brands: Brand[]): Hub[] {
  return FITS.map(
    (fit): Hub => ({
      kind: "fit",
      slug: fit.slug,
      name: fit.name,
      title: fit.title,
      path: `/sizes/${fit.slug}`,
      brands: brands.filter(fit.has).sort(byPhotoThenName()),
    }),
  ).filter((hub) => hub.brands.length >= MIN_HUB_BRANDS);
}
