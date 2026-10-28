import type { MetadataRoute } from "next";
import { getBrandsLikePage, listBrandsLikeSlugs } from "@/lib/data";
import { judgeBrandsLikePage } from "@/lib/gate";

export const revalidate = 86400;

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.stylodex.com";

// Lists only pages that pass the gate, so the sitemap never invites Google to
// crawl a page that renders noindex. Loads pages one by one, which is fine at
// wave sizes (hundreds); batch it before the site reaches thousands.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [{ url: SITE }];
  for (const slug of await listBrandsLikeSlugs()) {
    const page = await getBrandsLikePage(slug);
    if (page && judgeBrandsLikePage(page).indexable) {
      entries.push({ url: `${SITE}/brands-like-${slug}`, lastModified: page.checkedAt });
    }
  }
  return entries;
}
