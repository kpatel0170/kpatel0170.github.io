import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: "",
  ...(process.env.NODE_ENV === "production" && {
    output: "export"
  }),
  images: {
    unoptimized: true
  },
  productionBrowserSourceMaps: false
};

export default nextConfig;
