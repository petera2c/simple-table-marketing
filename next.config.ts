import type { NextConfig } from "next";
import path from "path";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const config: NextConfig = {
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
  webpack: (config) => {
    // Add path aliases to webpack
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
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
