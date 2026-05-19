import Link from "next/link";
import {
  ArrowRight,
  Truck,
  Engine,
  DeviceMobile,
  Buildings,
  Receipt,
} from "@phosphor-icons/react/dist/ssr";
import { Wordmark } from "@/components/Wordmark";
import { buttonClasses } from "@/components/Button";

// Marketing site lives in its own repo and is deployed separately from the
// app. Cross-product links (Service desk, Floor PWA, Customer view) point
// at the app origin — set NEXT_PUBLIC_APP_URL to wherever the app is
// hosted (defaults to http://localhost:3000 for local dev).
const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
const appHref = (path: string) => `${APP_URL}${path}`;

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center text-fg" aria-label="Mechbuk — home">
            <Wordmark height={24} />
          </Link>
          <nav className="flex items-center gap-1 text-[12.5px]">
            <a href={appHref("/app")} className={buttonClasses({ variant: "ghost", size: "sm" })}>Service desk</a>
            <a href={appHref("/floor")} className={buttonClasses({ variant: "ghost", size: "sm" })}>Floor PWA</a>
            <a href={appHref("/track/tk_v0lv0_fh_142")} className={buttonClasses({ variant: "ghost", size: "sm" })}>Customer view</a>
            <a href={appHref("/app")} className={buttonClasses({ variant: "primary", size: "sm" })}>
              Open app <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-plate px-2.5 py-1 text-[11px] font-medium text-fg-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Mockup · No backend yet
          </div>
          <h1 className="mt-6 text-[52px] font-semibold leading-[1.05] tracking-[-0.02em]">
            Run the workshop,
            <br />
            not the spreadsheet.
          </h1>
          <p className="mt-5 max-w-2xl text-[16px] text-fg-mute leading-relaxed">
            Mechbuk manages commercial-vehicle and light-vehicle repairs end to end —
            including loose components dropped off without a host vehicle. Job cards
            adapt to vehicle <em className="not-italic text-fg">or</em> gearbox. Four
            surfaces. One source of truth.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            <a href={appHref("/app")} className={buttonClasses({ variant: "primary" })}>
              Enter service desk <ArrowRight className="h-4 w-4" />
            </a>
            <a href={appHref("/floor/check-in")} className={buttonClasses({ variant: "secondary" })}>
              Try the check-in wizard
            </a>
          </div>
        </div>

        <section className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <SurfaceCard
            href={appHref("/app")}
            icon={<Buildings weight="regular" className="h-5 w-5" />}
            title="Service desk"
            sub="Advisors · Foremen · Owners"
            body="Dense desktop UI. Kanban, job cards, estimates, invoices, reports."
          />
          <SurfaceCard
            href={appHref("/floor")}
            icon={<DeviceMobile weight="regular" className="h-5 w-5" />}
            title="Technician PWA"
            sub="Tablet · Floor · Offline"
            body="Single-job focus. Clock on, capture photos, request parts."
          />
          <SurfaceCard
            href={appHref("/track/tk_v0lv0_fh_142")}
            icon={<Receipt weight="regular" className="h-5 w-5" />}
            title="Customer portal"
            sub="Mobile · No login · Signed link"
            body="Approve estimates, watch progress, see photos, pay invoice."
          />
          <SurfaceCard
            href={appHref("/fleet")}
            icon={<Truck weight="regular" className="h-5 w-5" />}
            title="Fleet portal"
            sub="Large customers · Multiple vehicles"
            body="Vehicle list, spend breakdown, downloadable history."
          />
        </section>

        <section className="mt-20 grid gap-6 rounded-xl border border-line bg-plate p-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-[26px] font-semibold leading-tight tracking-[-0.015em]">
              Vehicle <em className="not-italic text-fg-mute">or</em> just the gearbox.
            </h2>
            <p className="mt-3 text-[14px] text-fg-mute leading-relaxed">
              Most workshop software pretends customers only bring trucks. Mechbuk's job
              card is polymorphic from day one — a loose gearbox, engine, or turbo gets
              its own intake receipt with signed photos, a barcode for re-finding it on
              the storage rack, and a customer portal that says "Your ZF gearbox" instead
              of "Vehicle ABC-1234".
            </p>
            <div className="mt-5">
              <a href={appHref("/app/components")} className={buttonClasses({ variant: "secondary" })}>
                See components on premises
              </a>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <ConceptCard
              icon={<Truck weight="regular" className="h-4 w-4 text-fg" />}
              title="Vehicle subject"
              body="Make · Model · Registration · Odometer · Walk-around photos"
            />
            <ConceptCard
              icon={<Engine weight="regular" className="h-4 w-4 text-fg" />}
              title="Loose component subject"
              body="Type · Make · Serial · Storage location · Signed receipt"
            />
          </div>
        </section>

        <footer className="mt-20 border-t border-line pt-5 text-[11px] text-fg-dim">
          Mockup build · all data is fabricated · backend deferred until UX is validated
        </footer>
      </main>
    </div>
  );
}

function SurfaceCard({
  href,
  icon,
  title,
  sub,
  body,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  body: string;
}) {
  return (
    <a
      href={href}
      className="group flex flex-col gap-3 rounded-lg border border-line bg-surface p-4 transition-all hover:border-line-strong hover:shadow-sm"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-plate text-fg">
        {icon}
      </span>
      <div>
        <h3 className="text-[13.5px] font-semibold">{title}</h3>
        <p className="mt-0.5 text-[10.5px] uppercase tracking-wider text-fg-dim">{sub}</p>
      </div>
      <p className="text-[12.5px] text-fg-mute">{body}</p>
      <div className="mt-auto flex items-center gap-1 text-[11.5px] font-medium text-fg">
        Open{" "}
        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}

function ConceptCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-md border border-line bg-surface p-3.5">
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="text-[12.5px] font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-[11.5px] text-fg-mute leading-relaxed">{body}</p>
    </div>
  );
}
