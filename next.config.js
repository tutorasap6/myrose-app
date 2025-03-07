/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure output is set to export for static site generation if needed
  // output: 'export', // Uncomment if you need static exports
  // Disable image optimization if using static exports
  // images: { unoptimized: true }, // Uncomment if using static exports
  poweredByHeader: false,
  // Ensure proper handling of images and other assets
  images: {
    domains: [],
    remotePatterns: []
  }
}

module.exports = nextConfig 