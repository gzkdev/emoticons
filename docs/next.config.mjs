import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const libraryRoot = path.resolve(__dirname, "..")

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@gzkdev/emoticons"],
  turbopack: {
    resolveAlias: {
      // Relative to the app root; absolute paths break Turbopack (see vercel/next.js issues).
      "@gzkdev/emoticons": "../dist/index.js",
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Turbopack (default `next build` on 16) resolves from the repo root on Vercel and
      // misses the pnpm `file:..` link under docs/node_modules; webpack + alias is reliable.
      "@gzkdev/emoticons": path.join(libraryRoot, "dist/index.js"),
    }
    return config
  },
}

export default nextConfig
