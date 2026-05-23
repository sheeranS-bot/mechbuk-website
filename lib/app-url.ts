// Cross-product links point at the Mechbuk app origin. Override with
// NEXT_PUBLIC_APP_URL (defaults to localhost:3000 for local dev).
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const appHref = (path: string) => `${APP_URL}${path}`;
