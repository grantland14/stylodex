import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.SITE_URL ?? "https://www.stylodex.com",
  // Pages are prerendered from Supabase at build time; only /go/ and /img/ run on the server.
  output: "static",
  adapter: vercel(),
  // Clean URLs: /brands-like-levis, never /brands-like-levis/ (the adapter adds the 308).
  trailingSlash: "never",
  vite: { plugins: [tailwindcss()] },
});
