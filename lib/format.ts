import type { Brand, CategoryPrice } from "./types";

const COUNTRY_NAMES: Record<string, string> = { US: "US", CA: "Canada", GB: "UK", AU: "Australia" };

export function usd(amount: number): string {
  return `$${Math.round(amount).toLocaleString("en-US")}`;
}

export function priceRange(price: CategoryPrice | undefined): string | null {
  return price ? `${usd(price.minUsd)}–${usd(price.maxUsd)}` : null;
}

export function shipsTo(brand: Brand): string | null {
  if (brand.shipsTo.length === 0) return null;
  return brand.shipsTo.map((c) => COUNTRY_NAMES[c] ?? c).join(", ");
}

export function sizes(brand: Brand): string | null {
  if (!brand.sizeRange) return null;
  const extras = [brand.hasPlus && "plus", brand.hasPetite && "petite", brand.hasTall && "tall"].filter(Boolean);
  return extras.length ? `${brand.sizeRange} (${extras.join(", ")})` : brand.sizeRange;
}

export function longDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
