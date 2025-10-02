/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.cache = false;
      config.externals.push('ws');
    }
    return config;
  },
};

module.exports = nextConfig;