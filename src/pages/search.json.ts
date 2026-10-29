import type { APIRoute } from "astro";
import { loadCatalog, searchEntries } from "@/lib/catalog";

// The search box's index, built with the site. The browser never talks to Supabase.
export const GET: APIRoute = async () =>
  new Response(JSON.stringify(searchEntries(await loadCatalog())), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
