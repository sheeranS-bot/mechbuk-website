# Mechbuk Website

Marketing site for Mechbuk. Lives in its own git repo so it can be
deployed and versioned independently of the app.

## Local dev

```bash
npm install
npm run dev     # http://localhost:3001
```

The app runs on port 3000; the website runs on 3001 to avoid clashes.

## Cross-product links

Buttons like "Open app" and "Service desk" link out to the Mechbuk app
origin. Set `NEXT_PUBLIC_APP_URL` to override the default
(`http://localhost:3000`):

```bash
# .env.local
NEXT_PUBLIC_APP_URL=https://app.mechbuk.com
```

## What lives here

```
app/                  Next.js App Router
  layout.tsx          Root layout (fonts, metadata)
  page.tsx            Landing page
  globals.css         Mechbuk DNA tokens + components (shared with app)
components/
  Wordmark.tsx        Inline-SVG logotype
  Button.tsx          Class-composer for .btn variants
lib/
  cn.ts               clsx + tailwind-merge helper
public/
  logo.svg, icon.svg
```

`globals.css` is intentionally a verbatim copy of the app's tokens. If
the design system diverges between app and site, decide whether to
extract a shared package — until then, keep them in lockstep manually.
