const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 3000;
const HOST = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost:3000";
let DOMAIN = "";

if (ENV === "development") {
  DOMAIN = `http://localhost:${PORT}`;
} else {
  DOMAIN = `https://${HOST}`;
}

const isLocalhost =
  typeof window !== "undefined" && window.location.href.includes("localhost");

const PROTOCOL = isLocalhost ? "http" : "https";

console.log({ ENV, PORT, HOST, DOMAIN, PROTOCOL });
export { ENV, PORT, HOST, DOMAIN, PROTOCOL };
