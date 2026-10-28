import type { APIRoute } from "astro";
import { affiliateUrl, resolveDestination } from "@/lib/affiliate";
import { getBrand, logClick } from "@/lib/data";
import { env } from "@/lib/env";

// Runs on every click: logs it and sends the visitor on, Skimlinks-wrapped once approved.
export const prerender = false;

export const GET: APIRoute = async ({ params, url, redirect }) => {
  const brand = params.slug ? await getBrand(params.slug) : null;
  if (!brand?.websiteUrl || brand.status !== "verified") return redirect("/", 302);

  const from = url.searchParams.get("from");
  const destination = resolveDestination(brand.websiteUrl, url.searchParams.get("to"));
  await logClick(brand.id, from);

  return new Response(null, {
    status: 302,
    headers: {
      Location: affiliateUrl(destination, env("SKIMLINKS_SITE_ID"), from ?? undefined),
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
};
