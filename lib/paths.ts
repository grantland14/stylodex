import type { UrlPrefix } from "./types";

/** Public URL of a subject's alternatives page, e.g. /stores-like-wet-seal. */
export function alternativesPath(prefix: UrlPrefix, slug: string): string {
  return `/${prefix}-like-${slug}`;
}
