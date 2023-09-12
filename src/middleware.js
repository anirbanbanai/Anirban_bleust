import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
    //   return NextResponse.redirect(new URL('/home', request.url))
    const {pathname} = request.nextUrl;
    try {
        let cookie = request.cookies.get("jwt-token")?.value;
        if (!cookie || cookie.startWith('Bearer')) {
            throw new error("Invalid token");
        }
        const secret = new TextEncoder().encode(process.env.jwt_secret);
        await jwtVerify(cookie.split("Bearer")[1], secret)
        return NextResponse.next();
    } catch (error) {
        // return NextResponse.redirect(new URL(`/login`, request.URL))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard/:path*',
}