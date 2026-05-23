"use client";

import { useState } from "react";
import { PRICING_TIERS, calcPrice } from "@/lib/demo-data";
import { SectionHead } from "@/components/molecules/SectionHead";
import { PricingTierFeatures } from "@/components/molecules/PricingTier";
import { buttonClasses } from "@/components/atoms/Button";
import { appHref } from "@/lib/app-url";

export function Pricing() {
  const [bays, setBays] = useState(6);
  const [cycle, setCycle] = useState<"monthly" | "annual">("annual");

  const featuredBg = { background: "rgba(245,197,24,0.10)" } as const;

  return (
    <section className="section" id="pricing" data-screen-label="05 Pricing">
      <div className="wrap">
        <SectionHead
          num="04"
          title="PRICING"
          sub="PER BAY. INDICATIVE."
          stamp={["INDICATIVE — NOT FINAL", "USD · EX-TAX", "SUBJECT TO CHANGE"]}
        />

        {/* Honesty pass: prices are illustrative, not a binding quote. */}
        <div className="stencil" style={{ marginBottom: 20 }}>
          <span className="dot" /> INDICATIVE PRICING · NOT A FINAL QUOTE
        </div>

        <div className="bay-controls">
          <div className="field">
            <span>BAYS</span>
            <button type="button" onClick={() => setBays((b) => Math.max(1, b - 1))}>−</button>
            <span className="v">{bays}</span>
            <button type="button" onClick={() => setBays((b) => Math.min(80, b + 1))}>+</button>
            <input type="range" min="1" max="40" value={bays} onChange={(e) => setBays(+e.target.value)} />
          </div>

          <div className="cycle-toggle">
            <button type="button" className={cycle === "monthly" ? "on" : ""} onClick={() => setCycle("monthly")}>
              Monthly
            </button>
            <button type="button" className={cycle === "annual" ? "on" : ""} onClick={() => setCycle("annual")}>
              Annual <span className="save">−17%</span>
            </button>
          </div>
        </div>

        <div className="pricing-table">
          <div className="pricing-row head">
            <div>
              <span className="label">TIER · 00</span>
              <div className="tier-name" style={{ marginTop: 8 }}>SPEC</div>
              <div className="tier-tag">YOUR CONFIG · {bays} BAYS · {cycle.toUpperCase()}</div>
            </div>
            {PRICING_TIERS.map((t, i) => (
              <div key={t.key}>
                <span className="label">TIER · 0{i + 1}</span>
                <div className="tier-name" style={{ marginTop: 8 }}>{t.name}</div>
                <div className="tier-tag" style={t.featured ? { color: "var(--accent)" } : undefined}>{t.tag}</div>
              </div>
            ))}
          </div>

          <div className="pricing-row">
            <div>
              <span className="label">PRICE / MO</span>
              <div className="tier-price">
                <span className="currency">$</span>—<span className="per">REF.</span>
              </div>
              <div className="label" style={{ marginTop: 6 }}>PER-BAY × COUNT</div>
            </div>
            {PRICING_TIERS.map((t) => (
              <div key={t.key} style={t.featured ? featuredBg : undefined}>
                <span className="label">PRICE / MO</span>
                <div className="tier-price">
                  <span className="currency">$</span>
                  {calcPrice(t.perBay, bays, cycle).toLocaleString()}
                  <span className="per">/MO</span>
                </div>
                <div className="label mono" style={{ marginTop: 6, color: "var(--ink-mute)" }}>
                  ${t.perBay} × {bays} BAY{bays !== 1 ? "S" : ""}
                  {cycle === "annual" ? " · −17%" : ""}
                </div>
              </div>
            ))}
          </div>

          <div className="pricing-row">
            <div>
              <span className="label">FEATURES</span>
              <ul className="featurelist" style={{ marginTop: 12 }}>
                <li><span className="x">·</span><span>Unlimited job cards</span></li>
                <li><span className="x">·</span><span>Tablet bay clock-in</span></li>
                <li><span className="x">·</span><span>Parts X-ref · catalogs</span></li>
                <li><span className="x">·</span><span>Customer SMS</span></li>
                <li><span className="x">·</span><span>Multi-location</span></li>
                <li><span className="x">·</span><span>API / SSO</span></li>
              </ul>
            </div>
            {PRICING_TIERS.map((t) => (
              <div key={t.key} style={t.featured ? featuredBg : undefined}>
                <span className="label">INCLUDES</span>
                <PricingTierFeatures tier={t} />
              </div>
            ))}
          </div>

          <div className="pricing-row">
            <div>
              <span className="label">ORDER</span>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--ink-mute)", marginTop: 8, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                30-DAY TRIAL · NO CARD
              </div>
            </div>
            <div>
              <a className={buttonClasses({ variant: "alt" })} href={appHref("/app")} style={{ width: "100%", justifyContent: "center" }}>
                Start Trial
              </a>
            </div>
            <div style={featuredBg}>
              <a
                className={buttonClasses()}
                href={appHref("/app")}
                style={{ width: "100%", justifyContent: "center", background: "var(--accent)", color: "var(--accent-ink)", borderColor: "var(--ink)" }}
              >
                Start Trial <span className="arr">→</span>
              </a>
            </div>
            <div>
              <a className={buttonClasses({ variant: "alt" })} href="#contact" style={{ width: "100%", justifyContent: "center" }}>
                Talk to Sales
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-mute)" }}>
          <span>↳ ADD-ONS · DOT INSPECTION FORMS · TELEMATICS · ON-PREM (FLEET ONLY)</span>
          <span>INDICATIVE</span>
        </div>
      </div>
    </section>
  );
}
