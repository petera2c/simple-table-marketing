/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Only run ESLint during development, not during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
