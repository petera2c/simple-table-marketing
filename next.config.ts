import type { NextConfig } from "next";
import path from "path";

const config: NextConfig = {
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
};

export default config;
