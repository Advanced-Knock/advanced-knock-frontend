const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure Next.js serves from root, not conflicting with index.html
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/products/sales-training-ai',
        destination: '/products/advanced-ring',
        permanent: true,
      },
      {
        source: '/sales-training-ai/:path*',
        destination: '/advanced-ring/:path*',
        permanent: true,
      },
    ];
  },
  env: {
    // YAGNI CONVERGENCE: Environment variables with fallback for build-time safety
    // Set NEXT_PUBLIC_BACKEND_URL in Vercel dashboard (single source of truth)
    // Fallback ensures API calls work even if env var isn't set during build
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 
      process.env.NEXT_PUBLIC_BACKEND_URL || 
      (process.env.NODE_ENV === 'production' 
        ? 'https://backend-bravetto.vercel.app' 
        : 'http://localhost:3001'),
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 
      (process.env.NODE_ENV === 'production' 
        ? 'https://backend-bravetto.vercel.app' 
        : 'http://localhost:3001'),
  },
  poweredByHeader: false,
  compress: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  ...(process.env.NODE_ENV === 'development' && {
    generateBuildId: async () => `instant-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    experimental: { isrMemoryCacheSize: 0 },
  }),
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias = { ...config.resolve.alias, '@': path.resolve(__dirname, 'src') };
    if (dev) {
      config.cache = false;
      config.watchOptions = { poll: 1000, aggregateTimeout: 200, ignored: /node_modules/ };
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      };
      // Ensure webpack dev server serves correctly
      if (!isServer) {
        config.devServer = {
          ...config.devServer,
          hot: true,
          liveReload: true,
        };
      }
    }
    return config;
  },
}

module.exports = nextConfig

