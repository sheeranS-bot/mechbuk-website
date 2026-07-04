import { MarkIcon } from "@/components/atoms/MarkIcon";
import { buttonClasses } from "@/components/atoms/Button";
import { appHref } from "@/lib/app-url";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#" className="nav-logo">
          <MarkIcon size={26} color="var(--ink)" />
          MECHBUK
        </a>
        <nav className="nav-links">
          <a href="#features">01 · Features</a>
          <a href="#demo">02 · Job Cards</a>
          <a href="#shop">03 · Shop Floor</a>
          <a href="#pricing">04 · Pricing</a>
          <a href="#changelog">05 · Changelog</a>
        </nav>
        <div className="nav-meta">
          <a className="nav-signin" href={appHref("/app")}>
            Sign In
          </a>
          <a className={buttonClasses({ size: "sm" })} href="#pricing">
            Start Trial <span className="arr">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
