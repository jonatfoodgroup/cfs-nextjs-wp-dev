/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.salsify.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://services.campbells.com/us/:path*',
      },
    ]
  },
}

module.exports = nextConfig
