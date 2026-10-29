import type { Brand, CategoryPrice } from "./types";

const COUNTRY_NAMES: Record<string, string> = { US: "US", CA: "Canada", GB: "UK", AU: "Australia" };

export function usd(amount: number): string {
  return `$${Math.round(amount).toLocaleString("en-US")}`;
}

export function money(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: amount % 1 ? 2 : 0 }).format(amount);
}

const REGIONS = new Intl.DisplayNames(["en"], { type: "region" });
/** ISO country code to name: "GB" → "United Kingdom". */
export function countryName(code: string | null): string | null {
  if (!code) return null;
  try {
    return REGIONS.of(code.toUpperCase()) ?? code;
  } catch {
    return code;
  }
}

/** The store's own prices, e.g. "$48–$56" or "£40–£95". */
export function priceRange(price: CategoryPrice | undefined): string | null {
  if (!price) return null;
  // Whole prices stay whole ($48–$56); show cents when a store uses them ($24.99–$48.95).
  const digits = price.min % 1 || price.max % 1 ? 2 : 0;
  const fmt = new Intl.NumberFormat("en-US", { style: "currency", currency: price.currency, minimumFractionDigits: digits, maximumFractionDigits: digits });
  return `${fmt.format(price.min)}–${fmt.format(price.max)}`;
}

/** Store price, plus the USD equivalent when the store charges in another currency. */
export function priceWithUsd(price: CategoryPrice | undefined): string | null {
  const own = priceRange(price);
  if (!price || !own || price.currency === "USD") return own;
  return `${own} (about ${usd(price.minUsd)}–${usd(price.maxUsd)})`;
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
