import type { MetadataRoute } from "next";
import { FIXTURE_MODE } from "@/lib/data";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.stylodex.com";

export default function robots(): MetadataRoute.Robots {
  if (FIXTURE_MODE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/go/"] },
    sitemap: `${SITE}/sitemap.xml`,
  };
}
