// eslint-disable-next-line import/no-extraneous-dependencies
import createMDX from "fumadocs-mdx/config"

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // ! This is set to allow image optimization for google profiles.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["shiki", "vscode-oniguruma"],
  },
}

export default withMDX(nextConfig)
