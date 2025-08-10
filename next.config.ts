import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{
				source: "/app/:path*",
				destination: "/app/:path*",
				has: [
					{
						type: "host",
						value: "(?!app\\.)(.*)",
					},
				],
			},
		]
	},
}

export default nextConfig
