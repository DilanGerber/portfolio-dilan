/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"], // Habilita formatos más ligeros
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**", // Permite imágenes externas (ajústalo según tu necesidad)
          },
        ],
    },
};

export default nextConfig;
