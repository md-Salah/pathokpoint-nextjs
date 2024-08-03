/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/dtxh6e0wv/image/upload/**'
            },
            {
                protocol: 'http',
                hostname: 'mdsalah.customerserver003003.eurhosting.net',
                port: '',
                pathname: '/test/**'
            }
        ]
    }
};

export default nextConfig;
