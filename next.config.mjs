/** @type {import('next').NextConfig} */
const nextConfig = {

    async redirects() {
        return [
          {
            source: '/',
            destination: '/pages/index',
            permanent: true,
          },
        ];
      },

};

export default nextConfig;
``