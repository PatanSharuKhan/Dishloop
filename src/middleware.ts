import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')
    const { pathname } = request.nextUrl

    const ProtectedRoutes = ['/', '/create-restaurant']
    if (!token && ProtectedRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL('/signin', request.url))
    }
    if (token && (pathname === "/signin" || pathname === "/signup")) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/create-restaurant', '/signin', '/signup']
}