import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
    experimental: {
        serverComponentsExternalPackages: ["isolated-vm"],
      },
});

export default nextConfig;
