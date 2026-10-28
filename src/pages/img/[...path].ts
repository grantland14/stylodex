import type { APIRoute } from "astro";
import { env } from "@/lib/env";

// Serves brand images from stylodex.com/img/... so the shared Supabase project's
// hostname never appears in a page. Cached for a year at Vercel's edge, so the
// function runs about once per image.
export const prerender = false;

const BUCKET = "stylodex-images";
const SAFE_PATH = /^[a-z0-9][a-z0-9/_.-]*\.(jpe?g|png|webp)$/i;

export const GET: APIRoute = async ({ params }) => {
  const path = params.path ?? "";
  const base = env("SUPABASE_URL");
  if (!base || !SAFE_PATH.test(path) || path.includes("..")) return new Response(null, { status: 404 });

  const upstream = await fetch(`${base}/storage/v1/object/public/${BUCKET}/${path}`);
  if (!upstream.ok || !upstream.body) return new Response(null, { status: 404 });

  return new Response(upstream.body, {
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable",
    },
  });
};
