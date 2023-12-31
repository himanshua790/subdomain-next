// middleware.ts
import { NextResponse } from "next/server";
import { getValidSubdomain } from "./utils/subdomain";

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files

export async function middleware(req) {
  // Clone the URL
  const url = req.nextUrl.clone();
  // Skip public files
  if (
    PUBLIC_FILE.test(url.pathname) ||
    url.pathname.includes("_next") ||
    url.pathname.includes("/api/")
  ) {
    return NextResponse.next();
  }

  const host = req.headers.get("host");
  const subdomain = getValidSubdomain(host);

  if (subdomain === host.split(".")[0]) return NextResponse.next();

  if (subdomain) {
    // Subdomain available, rewriting
    console.log(
      `>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`
    );
    url.pathname = `/${subdomain}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}
