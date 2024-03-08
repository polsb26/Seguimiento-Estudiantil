import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
    const getToken = request.cookies.get('token')
    if (!getToken) {
        console.log("no logueado")
        if(request.nextUrl.pathname === '/'){
            return NextResponse.next()
        }
        return NextResponse.redirect(new URL('/', request.url))
    } else if (request.nextUrl.pathname === '/') {
        console.log("logueado")
        return NextResponse.redirect(new URL('/manage', request.url))
    }
}
export const config = {
    matcher: ['/manage', "/"],
}
