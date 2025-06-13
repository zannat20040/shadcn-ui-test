// D:/test-app/next.config.mjs

import withBundleAnalyzer from "@next/bundle-analyzer"; // Use import instead of require

/** @type {import('next').NextConfig} */
const nextConfig = {};

// Apply the bundle analyzer and then export the combined configuration
export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
