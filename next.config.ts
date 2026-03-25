import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async rewrites() {
    return [
        {
            source: '/gradient',
            destination: `https://ivanovicluka.co/gradient`,
        }
    ];
  }
};



export default nextConfig;
