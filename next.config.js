const withPWAInit = require("next-pwa");

// PWA PRODUCTION
// const withPWA = withPWAInit({
//   dest: 'public',
//   disable: true,
//   exclude: [
//     // add buildExcludes here
//     ({ asset, compilation }) => {
//       if (
//         asset.name.startsWith("server/") ||
//         asset.name.match(/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/)
//       ) {
//         return true;
//       }
//       return false;
//     }
//   ],
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig;
