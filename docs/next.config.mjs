import path from "node:path"
import { fileURLToPath } from "node:url"

const appDir = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prefer this app when another pnpm-lock.yaml exists at the repo root (avoids wrong Turbopack root on Vercel).
  turbopack: {
    root: appDir,
  },
}

export default nextConfig
