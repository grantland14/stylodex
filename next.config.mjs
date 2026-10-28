/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Public URLs are /brands-like-levis, /stores-like-wet-seal, /sites-like-romwe; all
    // render app/alternatives/[slug], which redirects to the subject's one canonical prefix.
    const rules = ["brands", "stores", "sites"].map((prefix) => ({
      source: `/${prefix}-like-:slug`,
      destination: `/alternatives/:slug?via=${prefix}`,
    }));
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
    return [{ source: "/alternatives/:slug", destination: "/brands-like-:slug", permanent: true }];
  },
};

export default nextConfig;
