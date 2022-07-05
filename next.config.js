/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['sr', 'en'],
    defaultLocale: 'sr',
    localeDetection: false,
  },
}

module.exports = nextConfig
