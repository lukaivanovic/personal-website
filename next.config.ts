import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async rewrites() {
    return [
        {
            source: '/gradient',
            destination: `https://www.2026-03-23-easing-gradient-generato.vercel.app/gradient`,
        }
    ];
  }
};



export default nextConfig;
