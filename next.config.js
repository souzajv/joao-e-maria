const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Evita que o Next use o lockfile da pasta pai (workspace) e corrompa chunks no dev
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
