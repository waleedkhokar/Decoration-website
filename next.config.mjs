/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Fast image delivery for placeholder photos.
    // Remove remotePatterns when you replace with your own /public images.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
