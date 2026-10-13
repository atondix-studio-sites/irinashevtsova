import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    }];
  },
  async redirects() {
    return [
      { source: "/index.php/aktuell", destination: "/aktuell", permanent: true },
      { source: "/index.php/kontakt", destination: "/kontakt", permanent: true },
      { source: "/index.php/leistungen", destination: "/leistungen", permanent: true },
      { source: "/index.php/ueber-mich", destination: "/ueber-mich", permanent: true },
      { source: "/hallo-welt", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
