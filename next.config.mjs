/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pathokpoint.s3.ap-southeast-1.amazonaws.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'test-pathokpoint.s3.ap-southeast-1.amazonaws.com',
                port: '',
                pathname: '/**'
            },
        ]
    }
};

export default nextConfig;
