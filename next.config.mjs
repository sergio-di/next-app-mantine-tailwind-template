/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    domains: ['images.unsplash.com','assets.aceternity.com'],
  }, 
 
}

export default nextConfig;
