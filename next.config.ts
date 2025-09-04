import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://192.168.0.18:3000",
      "http://192.168.0.18:3001",
    ],
  },
};

export default nextConfig;
