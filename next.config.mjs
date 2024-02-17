/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    runtime: "experimental-edge",
  },
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: "http://localhost:8000/index.php?graphql",
      },
    ];
  },
};

export default nextConfig;
