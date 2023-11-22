/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    env: {
      // apiUrl: 'https://sokfotostaginadmin.websearchpro.net/api/v1',
    //   apiUrl: 'https://admin.sokfotograf.se/api/v1',
    },

    images: {
      domains: ['picsum.photos'],
    },
}

module.exports = nextConfig
