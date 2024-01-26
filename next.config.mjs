/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'daisyui.com',
                port: '',
                pathname: '/images/stock/**'
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
