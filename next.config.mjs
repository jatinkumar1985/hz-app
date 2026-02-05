/** @type {import('next').NextConfig} */

const appEnv = process.env.APP_ENV || "development";
import loadEnv from "./env-loader.js";
loadEnv(appEnv);

const nextConfig = {
  /* config options here */
  images: {
        unoptimized: true,
        minimumCacheTTL: 10,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "imgeng.jagran.com",
                port: "",
                pathname: "/**",
            }
        ],
    },
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-store, must-revalidate",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
