import type { APIRoute } from "astro";
import { PREVIEW_ONLY } from "@/lib/data";

export const GET: APIRoute = ({ site }) => {
  const body = PREVIEW_ONLY
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\nDisallow: /go/\n\nSitemap: ${new URL("/sitemap.xml", site).href}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
