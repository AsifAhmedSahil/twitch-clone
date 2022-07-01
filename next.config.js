/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'avatars.githubusercontent.com','robohash.org','static-cdn.jtvnw.net'
    ]
  }
}
