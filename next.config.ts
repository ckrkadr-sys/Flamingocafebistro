import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.105"],
  images: {
    imageSizes: [32, 48, 64, 96, 128, 192, 224, 256, 384, 448, 512],
    qualities: [75, 85],
  },
};

export default nextConfig;
