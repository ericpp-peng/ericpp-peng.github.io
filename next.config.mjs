/** @type {import('next').NextConfig} */
const config = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};
export default config;
