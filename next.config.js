/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["i.postimg.cc", "randomuser.me", "api.uifaces.co", "images.unsplash.com", "raw.githubusercontent.com"],
    },
    output: "standalone",
    webpack: (config) => {
      config.resolve.alias.canvas = false;
      config.resolve.alias.encoding = false;
      return config;
    },
  };
  
  module.exports = nextConfig;
  