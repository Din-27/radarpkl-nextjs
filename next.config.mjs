/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)', // Atur untuk semua rute
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache selama 1 tahun
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zdgnipjmpjiqktbpdvjj.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/news-image/**",
      },
    ],
  },
};

export default nextConfig;
