import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 이미지 최적화 */
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 't-clean.vercel.app',
      },
    ],
  },

  /* 헤더 설정 - 보안 및 성능 */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      /* 정적 리소스 캐싱 */
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      /* OG 이미지 캐싱 */
      {
        source: '/og-image.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  },

  /* 리다이렉트 설정 */
  async redirects() {
    return [
      {
        source: '/academy/apply',
        destination: '/reservation',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
