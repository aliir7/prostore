import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // outputFileTracing: false,
  eslint: {
    // غیرفعال کردن واکنش Next.js به خطاهای ESLint در build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
