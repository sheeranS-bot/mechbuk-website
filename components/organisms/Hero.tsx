"use client";

import { useState, useEffect, useRef } from "react";
import { BrakeRotorExploded } from "@/components/illustrations/BrakeRotorExploded";
import { buttonClasses } from "@/components/atoms/Button";
import { Kicker } from "@/components/atoms/Kicker";
import { MetaCell } from "@/components/molecules/MetaCell";
import { CalloutBand } from "@/components/molecules/CalloutBand";
import { formatDate } from "@/lib/format";

export function Hero() {
  const [explode, setExplode] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [today, setToday] = useState("");
  const reqRef = useRef<number | undefined>(undefined);

  // Live date is client-only to avoid SSR hydration mismatch.
  useEffect(() => {
    setToday(formatDate());
  }, []);

  // Animated entry: components separate over the first ~1.4s.
  useEffect(() => {
    const start = performance.now();
    const animate = (t: number) => {
      const elapsed = (t - start) / 1000;
      const target = Math.min(1, elapsed / 1.4);
      const eased = 1 - Math.pow(1 - target, 3); // ease-out cubic
      setExplode(eased);
      if (elapsed < 1.4) reqRef.current = requestAnimationFrame(animate);
    };
    reqRef.current = requestAnimationFrame(animate);
    return () => {
      if (reqRef.current !== undefined) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  // Slow constant rotor rotation (8 deg/sec).
  useEffect(() => {
    let id: number;
    let last = performance.now();
    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;
      setRotation((r) => (r + dt * 8) % 360);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  const onIllusEnter = () => setExplode(1.25);
  const onIllusLeave = () => setExplode(1.0);

  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="wrap">
        <div className="hero-grid">
          {/* LEFT: typographic */}
          <div className="hero-left">
            <Kicker num="[ 00 / 00 ]">
              WORKSHOP OPERATING SYSTEM &nbsp;·&nbsp; REV 7.4 &nbsp;·&nbsp; {today}
            </Kicker>
            <h1 className="h-display hero-title" style={{ marginTop: 28 }}>
              <span className="line">RUN THE</span>
              <span className="line">
                <span className="accent">SHOP FLOOR</span>.
              </span>
              <span className="line">NOT THE</span>
              <span className="line">PAPERWORK.</span>
            </h1>
            <p className="hero-deck">
              Mechbuk is the workshop operating system for commercial truck and auto repair.
              Track job cards, parts, and labour hours across every bay — from work order open
              to invoice closed. Built for foremen, not founders.
            </p>
            <div className="hero-cta-row">
              <a href="#pricing" className={buttonClasses()}>
                Start 30-Day Trial <span className="arr">→</span>
              </a>
              <a href="#demo" className={buttonClasses({ variant: "alt" })}>
                See Job Cards Live
              </a>
              <span className="small">NO CARD · 4 BAYS FREE FOREVER</span>
            </div>

            <div className="hero-meta">
              <MetaCell k="ONE RECORD">Open → invoice</MetaCell>
              <MetaCell k="EVERY BAY">Live dispatch board</MetaCell>
              <MetaCell k="LABOUR">Actual vs flat-rate</MetaCell>
              <MetaCell k="DEPLOY">Web · tablet</MetaCell>
            </div>
          </div>

          {/* RIGHT: technical drawing */}
          <div className="hero-right" onMouseEnter={onIllusEnter} onMouseLeave={onIllusLeave}>
            <div className="hero-spec">
              <span>FIG · 01 / 04</span>
              <b>BRAKE ASSY · EXPLODED VIEW</b>
              <span>SCALE 1 : 4</span>
            </div>
            <div className="hero-illus-wrap">
              <span className="corner tl">DWG · MB-0001-A</span>
              <span className="corner tr">REV 7.4</span>
              <span className="corner bl">SHEET 1/1</span>
              <span className="corner br">© MECHBUK</span>
              <div className="tick-grid" />
              <BrakeRotorExploded explode={explode} rotate={rotation} />
            </div>
            <div className="hero-spec" style={{ marginTop: "auto" }}>
              <span>HOVER TO EXPAND</span>
              <b>{Math.round(explode * 100)}% SEPARATED</b>
              <span>{Math.round(rotation)}°</span>
            </div>
          </div>
        </div>
      </div>

      {/* Callout band */}
      <div className="wrap" style={{ marginTop: 24 }}>
        <CalloutBand />
      </div>
    </section>
  );
}
