/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL || '/api', // Set your API base URL here
  },
};

export default nextConfig;
