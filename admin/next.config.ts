import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/workspace/dashboard",
        permanent: true,
      },
    ];
  },

  output: "standalone",
};

export default nextConfig;
