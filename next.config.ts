import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/Movie",
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Movie",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
