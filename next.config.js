/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enable built-in compression for better performance
  compress: true,

  // Image optimization configuration
  images: {
    // Adjust this according to where your images come from
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ],
    formats: ["image/avif", "image/webp"]
  },

  // Font optimization (Next automatically inlines and preloads fonts)
  optimizeFonts: true,

  // Example of enabling some experimental optimizations
  experimental: {
    // Helps bundle size when importing from large UI/icon libs
    optimizePackageImports: ["react-icons"],
    typedRoutes: true
  },

  // Webpack customization, if you want to further optimize dynamic imports
  webpack: (config) => {
    // Example: ensure dynamic imports split code nicely (Next does this by default)
    config.optimization.splitChunks = {
      ...config.optimization.splitChunks,
      chunks: "all"
    };

    return config;
  }
};

module.exports = nextConfig;
