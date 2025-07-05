import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://assets.calendly.com",
              "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
              "style-src-elem 'self' 'unsafe-inline' https://assets.calendly.com",
              "img-src 'self' data: https:",
              "font-src 'self' https://assets.calendly.com",
              "connect-src 'self' https://calendly.com https://api.calendly.com",
              "frame-src 'self' https://calendly.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;