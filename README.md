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

"Sign In" and the trial CTAs link out to the Mechbuk app origin. Set
`NEXT_PUBLIC_APP_URL` to override the default (`http://localhost:3000`):

```bash
# .env.local
NEXT_PUBLIC_APP_URL=https://app.mechbuk.com
```

## Design system

`app/globals.css` is the site's own **industrial / blueprint** design
system (bone + ink surfaces, safety-yellow accent, Archivo Black display
type). It is intentionally distinct from the app's "Machined Precision"
UI — the marketing site has its own visual identity. Fonts are
self-hosted via `@fontsource` (Inter, JetBrains Mono, Archivo, Archivo
Black) and loaded in `app/layout.tsx`.

## Content honesty

Unverifiable claims from the original design draft (shop counts, named
testimonials, final pricing, dated changelog, specific third-party
integrations) have been **neutralized** — replaced with honest
placeholders or genericized. The interactive Job Cards demo and the
Pricing calculator run on sample data and are labelled as such. Replace
placeholders with real, verified content before any public launch.

## What lives here

```
app/
  layout.tsx          Root layout — fonts + metadata
  page.tsx            Landing page — composes the organisms only
  globals.css         Blueprint design system (tokens + component classes)
components/
  atoms/              Button, MarkIcon, Kicker, SpecStamp, StatusPill
  molecules/          SectionHead, MetaCell, CalloutBand, FeatureCard,
                      SpecList, JobRow, KVRow, PartRow, LabourBar,
                      ShopQuote, PricingTier, FooterColumn
  organisms/          Nav, Hero*, Features, JobDemo*, ShopFloor,
                      Pricing*, Changelog, Footer   (* = client component)
  illustrations/      BrakeRotorExploded, FloorPlan, EngineIso, icons
lib/
  cn.ts               clsx + tailwind-merge helper
  app-url.ts          NEXT_PUBLIC_APP_URL cross-product link helper
  demo-data.ts        Typed sample job cards + pricing tiers + calcPrice()
  format.ts           Client-only clock formatters (SSR-safe)
public/
  logo.svg, icon.svg
docs/superpowers/      Design spec + implementation plan for this port
```
