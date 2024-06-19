export { default } from "next-auth/middleware";

// export default middleware;

/* export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/new-page", request.url));
} */

export const config = {
  /* 
      "*" - 0 or more 
      "+" - 1 or more 
      "?" - 0 or 1
  */
  matcher: ["/dashboard/:path*"],
};
