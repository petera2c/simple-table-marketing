import type { NextConfig } from "next";
import path from "path";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const config: NextConfig = {
  // Use git commit hash for stable build IDs to prevent unnecessary chunk hash changes
  generateBuildId: async () => {
    // Use SOURCE_VERSION env var (Heroku) or fallback to timestamp
    return process.env.SOURCE_VERSION || process.env.HEROKU_SLUG_COMMIT || `build-${Date.now()}`;
  },
  redirects: async () => {
    return [
      {
        source: "/blog/simple-table-vs-ag-grid",
        destination: "/comparisons/simple-table-vs-ag-grid",
        permanent: true,
      },
      {
        source: "/blog/simple-table-vs-handsontable",
        destination: "/comparisons/simple-table-vs-handsontable",
        permanent: true,
      },
      {
        source: "/examples/finance",
        destination: "/examples/infrastructure",
        permanent: true,
      },
      {
        source: "/examples",
        destination: "/examples/crm",
        permanent: true,
      },
    ];
  },
  eslint: {
    // Only run ESLint during development, not during build
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Add path aliases to webpack
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };

    // Optimize chunk splitting to reduce total number of chunks
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization?.splitChunks,
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            // Group all node_modules into fewer chunks
            framework: {
              name: "framework",
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              name(module: any) {
                // Group antd and related packages together
                if (
                  /[\\/]node_modules[\\/](antd|@ant-design|rc-.*?)[\\/]/.test(
                    module.context || ""
                  )
                ) {
                  return "antd-vendor";
                }
                // Group other large libraries
                if (
                  /[\\/]node_modules[\\/](framer-motion|@fortawesome)[\\/]/.test(
                    module.context || ""
                  )
                ) {
                  return "ui-vendor";
                }
                return "vendor";
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: "commons",
              minChunks: 2,
              priority: 20,
            },
          },
        },
      };
    }

    return config;
  },
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-tree",
    "rc-table",
  ],
};

export default withBundleAnalyzer(config);
