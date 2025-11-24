/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  output: 'export', // Static export for frontend-only deployment
  images: {
    unoptimized: true, // Required for static export
    domains: [
      // Add your CDN domains here
      // 'res.cloudinary.com',
      // 'images.unsplash.com',
      // 'your-cdn.com',
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true, // Helps with Hostinger routing
  
  // Headers for caching and performance
  // Note: Headers are not supported in static export mode
  // Configure these headers on your hosting/CDN instead (e.g., Hostinger, Cloudflare)
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2|ttf|eot|mp4|webm|ogg)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //   ]
  // },
  
  // Experimental features for better performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
