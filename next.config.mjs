// next.config.mjs

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pages/home',
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    return config;
  },
  // Asegúrate de incluir otras configuraciones aquí
};

export default nextConfig;
