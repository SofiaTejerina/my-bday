/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        // Basic redirect
        {
          source: '/',
          destination: '/form',
          permanent: true,
        },
      ]
    },
  };

export default nextConfig;
