/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'daisyUI.com',
                port: '',
                pathname: '/images/stock/**'
            }
        ]
    }
};

export default nextConfig;
