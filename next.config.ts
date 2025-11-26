import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'auclub.s3.eu-north-1.amazonaws.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/squash-et-lieux-incroyables/',
        destination: '/',
        permanent: true
      },
      {
        source: '/squash-et-celebrites-dillustres-mordus-de-squash/',
        destination: '/',
        permanent: true
      },
      {
        source: '/lhistoire-farfelue-du-squash/',
        destination: '/',
        permanent: true
      },
      {
        source: '/allez-on-y-va/',
        destination: '/',
        permanent: true
      },
      {
        source: '/le-squash-aux-jeux-olympiques-2028/',
        destination: '/',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
