import type { APIRoute } from "astro";
import { FIXTURE_MODE, listAlternativesPages } from "@/lib/data";
import { judgeBrandsLikePage } from "@/lib/gate";
import { alternativesPath } from "@/lib/paths";

// Lists only pages that pass the gate, so the sitemap never invites Google to
// crawl a page that renders noindex. Fixture builds list nothing but the home page.
export const GET: APIRoute = async ({ site }) => {
  const urls: { loc: string; lastmod?: string }[] = [{ loc: new URL("/", site).href }];
  if (!FIXTURE_MODE) {
    for (const page of await listAlternativesPages()) {
      if (judgeBrandsLikePage(page).indexable) {
        urls.push({ loc: new URL(alternativesPath(page.urlPrefix, page.anchor.slug), site).href, lastmod: page.checkedAt });
      }
    }
  }
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((u) => `<url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}</url>`),
    "</urlset>",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
