/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const rules = [
      // Public URL is /brands-like-levis; the route lives at /brands-like/[slug].
      { source: "/brands-like-:slug", destination: "/brands-like/:slug" },
    ];
    // Brand images are served from stylodex.com/img/..., proxied from Stylodex's own
    // bucket, so the shared Supabase project's hostname never appears in a page.
    if (process.env.SUPABASE_URL) {
      rules.push({
        source: "/img/:path*",
        destination: `${process.env.SUPABASE_URL}/storage/v1/object/public/stylodex-images/:path*`,
      });
    }
    return rules;
  },
  async redirects() {
    // Keep the internal path from being crawled as a duplicate.
    return [{ source: "/brands-like/:slug", destination: "/brands-like-:slug", permanent: true }];
  },
};

export default nextConfig;
