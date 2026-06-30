import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyAuth } from "./lib/auth"

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isProtectedRoute = path.startsWith("/admin") && path !== "/admin/login"
  const isApiAdminRoute = path.startsWith("/api/admin") && path !== "/api/admin/login" && path !== "/api/admin/setup"

  if (isProtectedRoute || isApiAdminRoute) {
    const token = request.cookies.get("admin_session")?.value
    const session = await verifyAuth(token || null)

    if (!session) {
      if (isApiAdminRoute) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
      }
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  // Redirect /admin to /admin/dashboard
  if (path === "/admin") {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
}
