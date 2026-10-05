import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  redirects() {
    return [{ source: '/projects/yaro-voicely', destination: '/projects/ludino', permanent: true }];
  },
};

export default nextConfig;
