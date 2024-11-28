import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const access_token = request.cookies.get('access_token')?.value;
    const refresh_token = request.cookies.get('refresh_token')?.value;
    const isAuthorized = access_token !== undefined && refresh_token !== undefined;
    if(!isAuthorized) {
      return NextResponse.redirect(new URL('/?alert=로그인 후 이용 가능한 서비스입니다.', request.url));
    }
    //만료 된경우 메인 페이지로 리다이렉션 & 쿠키 삭제 (maxAge:0으로 설정)

    return response;
  }
  
  // See "Matching Paths" below to learn more
  export const config = {
    matcher: ['/graduation/:path*', '/lecture/:path*', '/timetable/:path*']
  }