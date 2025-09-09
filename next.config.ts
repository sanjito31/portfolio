import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://www.postgresql.org/**'),
                      new URL('https://agdha7peszt0aou5.public.blob.vercel-storage.com/**')
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
  
};

export default nextConfig;
