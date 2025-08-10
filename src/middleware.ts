import { NextResponse, NextRequest } from "next/server"

export function middleware(request: NextRequest) {
	const url = request.nextUrl.clone()
	const hostname = request.headers.get("host")

	// Detectar subdominio
	let subdomain = null
	if (hostname) {
		if (hostname.includes("localhost")) {
			const parts = hostname.split(".")
			if (parts.length > 1 && parts[0] !== "localhost") {
				subdomain = parts[0]
			}
		} else {
			const parts = hostname.split(".")
			if (parts.length > 2) {
				subdomain = parts[0]
			}
		}
	}

	if (subdomain === "app") {
		if (
			!url.pathname.startsWith("/_next") &&
			!url.pathname.startsWith("/api") &&
			!url.pathname.startsWith("/app")
		) {
			const newPath = `/app${url.pathname}`

			const rewriteUrl = new URL(newPath, request.url)
			return NextResponse.rewrite(rewriteUrl)
		}
	} else {
		// Dominio principal - prevenir acceso directo a rutas de app
		if (url.pathname.startsWith("/app")) {
			const appUrl = new URL(url)
			if (hostname?.includes("localhost")) {
				appUrl.hostname = `app.localhost`
				appUrl.port = "3000"
			} else {
				appUrl.hostname = `app.${hostname}`
			}
			appUrl.pathname = url.pathname.replace("/app", "")
			return NextResponse.redirect(appUrl)
		}
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
}
