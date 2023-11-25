/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'ja-JP', 'zh-CN'],
    localeDetection: false,
    defaultLocale: 'ja-JP',
    domains: [
      {
        domain: 'ja.localhost',
        defaultLocale: 'ja-JP',
      },
      {
        domain: 'en.localhost',
        defaultLocale: 'en-US',
      },
      {
        domain: 'ch.localhost',
        defaultLocale: 'zh-CN',
      }
    ]
  }
}

module.exports = nextConfig
