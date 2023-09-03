/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["snarbiqytzhytcegvkvh.supabase.co"],
  },
};

module.exports = nextConfig;
