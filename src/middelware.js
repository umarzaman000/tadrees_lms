// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   const path = request.nexturl.pathname;
//   const ispublicpath = path === "/signin" || path === "/register";
//   const token = request.cookies.get("token")?.value || "";
//   if (ispublicpath && token) {
//     return NextResponse.redirect(new URL(path), request.nexturl);
//   }
//   if (!ispublicpath && !token) {
//     return NextResponse.redirect(new URL("/signin"), request.nexturl);
//   }

//   return NextResponse.redirect(new URL("/home", request.url));
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/home", "/signin"],
// };