/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['sr', 'en'],
    defaultLocale: 'sr',
    localeDetection: false,
  },
  images: {
    domains: [
      'lorempixel.com',
      'boi-files.s3.eu-central-1.amazonaws.com',
      'boi-files.s3.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
