/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                "source" : "/api/:path*",
                "destination" : "http://43.202.12.235:3000/:path*"
            },
        ]
    }
};

export default nextConfig;
