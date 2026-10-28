/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Public URL is /brands-like-levis; the route lives at /brands-like/[slug].
    return [{ source: "/brands-like-:slug", destination: "/brands-like/:slug" }];
  },
  async redirects() {
    // Keep the internal path from being crawled as a duplicate.
    return [{ source: "/brands-like/:slug", destination: "/brands-like-:slug", permanent: true }];
  },
};

export default nextConfig;
