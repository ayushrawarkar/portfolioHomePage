/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.anupingle.com'],
    unoptimized: process.env.NODE_ENV === 'production' ? false : true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig