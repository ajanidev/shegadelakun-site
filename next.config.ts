import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export — deployable to Vercel, Netlify, or any static host.
  output: "export",
  // Folder-style URLs (/notes/slug/) so note pages work on any static host.
  trailingSlash: true,
  // Build timestamp for the self-observability panel (injected at build time).
  env: {
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
  },
};

export default nextConfig;
