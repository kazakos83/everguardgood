const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: 'export',
  trailingSlash: true,
  images: { 
    unoptimized: true,
    domains: ['images.pexels.com']
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
};

module.exports = nextConfig;