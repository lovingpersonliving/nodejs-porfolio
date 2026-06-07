/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nodejs-porfolio',
  assetPrefix: '/nodejs-porfolio',
};

export default nextConfig;
