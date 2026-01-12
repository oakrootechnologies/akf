/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  // Removed static export to enable API routes
  // output: 'export', // Static export for frontend-only deployment
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

  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Oakroot Security Layer
  webpack: (config, { dev, isServer }) => {
    // Header Comment (Banner)
    const webpack = require('webpack');
    config.plugins.push(
      new webpack.BannerPlugin({
        banner: "Property of Oakroot Solutions. Licensed for use strictly on AgriKrishiFarms.com. Reverse engineering is prohibited.",
        raw: false,
        entryOnly: true,
      })
    );

    // Obfuscation & Domain Locking (Production Client Only)
    if (!dev && !isServer) {
      // const WebpackObfuscator = require('webpack-obfuscator');
      // config.plugins.push(
      //   // @ts-ignore
      //   new WebpackObfuscator({
      //     // Anti-Tamper / Crash Logic
      //     domainLock: ['agrikrishifarms.com', 'www.agrikrishifarms.com', 'localhost', '127.0.0.1'],
      //     domainLockRedirectUrl: 'about:blank', // Redirects to blank page on violation
      //     debugProtection: true, // Freezes browser if devtools are opened
      //     debugProtectionInterval: 4000,
      // 
      //     // Obfuscation Settings
      //     rotateStringArray: true,
      //     stringArray: true,
      //     stringArrayThreshold: 0.75,
      //     controlFlowFlattening: true,
      //     controlFlowFlatteningThreshold: 0.75,
      //     deadCodeInjection: true,
      //     deadCodeInjectionThreshold: 0.4,
      //     unicodeEscapeSequence: false,
      // 
      //     // Performance Tuning
      //     splitStrings: true,
      //     splitStringsChunkLength: 10,
      //   }, [])
      // );
    }

    return config;
  },
}

module.exports = withBundleAnalyzer(nextConfig)
