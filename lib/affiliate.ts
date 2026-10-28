// Skimlinks wrapping for outbound brand links.
// Link format per Skimlinks' "go" redirect: confirm against the Skimlinks Hub
// docs when the account is approved, before the first live click.

const SKIMLINKS_GO = "https://go.skimresources.com/";

/**
 * Wraps a merchant URL for Skimlinks. With no site ID (pre-approval) the URL
 * is returned unchanged, so links work from day one and start earning once
 * SKIMLINKS_SITE_ID is set.
 */
export function affiliateUrl(destination: string, siteId: string | undefined, xcust?: string): string {
  if (!siteId) return destination;
  const params = new URLSearchParams({ id: siteId, xs: "1", url: destination });
  if (xcust) params.set("xcust", xcust);
  return `${SKIMLINKS_GO}?${params.toString()}`;
}

/**
 * Resolves where /go/[slug] should send a visitor. Deep links are allowed only
 * on the brand's own host, so /go/ can't be used as an open redirect.
 */
export function resolveDestination(websiteUrl: string, requestedPath: string | null): string {
  const home = new URL(websiteUrl);
  if (!requestedPath) return home.toString();
  try {
    const target = new URL(requestedPath, home);
    const sameHost = target.hostname === home.hostname || target.hostname === `www.${home.hostname}` || `www.${target.hostname}` === home.hostname;
    return sameHost && target.protocol === "https:" ? target.toString() : home.toString();
  } catch {
    return home.toString();
  }
}
