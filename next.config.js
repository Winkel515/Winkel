/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.vox-cdn.com/'],
  },
};

module.exports = nextConfig;
