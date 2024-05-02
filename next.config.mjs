/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
  	nextScriptWorkers: true,
    transpilePackages: ['@reservoir0x/reservoir-kit-ui'],
  },
}

export default nextConfig
