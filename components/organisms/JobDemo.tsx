"use client";

import { useState, useEffect, useMemo } from "react";
import { JOBS, STATUS_LABEL, type JobStatus } from "@/lib/demo-data";
import { formatDate, formatTime } from "@/lib/format";
import { SectionHead } from "@/components/molecules/SectionHead";
import { JobRow } from "@/components/molecules/JobRow";
import { KVRow } from "@/components/molecules/KVRow";
import { PartRow } from "@/components/molecules/PartRow";
import { LabourBar } from "@/components/molecules/LabourBar";
import { buttonClasses } from "@/components/atoms/Button";

type Tab = "active" | "scheduled" | "closed" | "all";

export function JobDemo() {
  const [active, setActive] = useState(JOBS[0].id);
  const [tab, setTab] = useState<Tab>("active");
  const [tick, setTick] = useState(0);
  const [clock, setClock] = useState("");

  // Simulated live updates + client-only clock (avoids SSR hydration mismatch).
  useEffect(() => {
    const update = () => {
      setTick((t) => t + 1);
      setClock(`${formatDate()} · ${formatTime()}`);
    };
    update();
    const id = setInterval(update, 3000);
    return () => clearInterval(id);
  }, []);

  const live = useMemo(() => {
    return JOBS.map((j, i) => {
      if (j.status !== "progress") return j;
      const drift = tick * 0.05 * (i % 2 === 0 ? 1 : 1.1);
      return { ...j, actual: +(j.actual + drift).toFixed(1) };
    });
  }, [tick]);

  const isActiveStatus = (s: JobStatus) => s === "progress" || s === "qc" || s === "hold";

  const filtered = useMemo(() => {
    if (tab === "active") return live.filter((j) => isActiveStatus(j.status));
    if (tab === "scheduled") return live.filter((j) => j.status === "wait");
    if (tab === "closed") return live.filter((j) => j.status === "done");
    return live;
  }, [tab, live]);

  const detail = useMemo(() => live.find((j) => j.id === active) || live[0], [active, live]);

  const tabs: [Tab, string, number][] = [
    ["active", "Active", live.filter((j) => isActiveStatus(j.status)).length],
    ["scheduled", "Scheduled", live.filter((j) => j.status === "wait").length],
    ["closed", "Closed", live.filter((j) => j.status === "done").length],
    ["all", "All Today", live.length],
  ];

  return (
    <section className="section dark" id="demo" data-screen-label="03 Job Cards Demo">
      <div className="wrap">
        <SectionHead
          num="02"
          title="JOB CARDS · LIVE"
          sub="EVERY BAY. EVERY MIN."
          stamp={["SAMPLE DATA · INTERACT", "CLICK A ROW", "VAL · LIVE"]}
        />

        <div className="demo-frame">
          <div className="demo-titlebar">
            <div className="dots">
              <span />
              <span />
              <span />
            </div>
            <div className="left">MECHBUK · SAMPLE SHOP · DISPATCH BOARD</div>
            <div className="right">{clock}</div>
          </div>
          <div className="demo-tabs">
            {tabs.map(([k, label, n]) => (
              <div key={k} className={`tab ${tab === k ? "active" : ""}`} onClick={() => setTab(k)}>
                {label} <span className="count">{n}</span>
              </div>
            ))}
            <div style={{ marginLeft: "auto", padding: "12px 18px", color: "#6b6b6b" }}>
              ↻ AUTO-REFRESH · 3S
            </div>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table className="jobs">
              <thead>
                <tr>
                  <th style={{ width: 110 }}>WO #</th>
                  <th>Vehicle</th>
                  <th>Bay</th>
                  <th>Tech</th>
                  <th style={{ textAlign: "right" }}>Est / Act (h)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((j) => (
                  <JobRow key={j.id} job={j} active={active === j.id} onSelect={setActive} />
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} style={{ padding: 32, textAlign: "center", color: "#6b6b6b", fontFamily: "var(--mono)" }}>
                      NO RECORDS · TAB EMPTY
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="job-detail">
            <div className="panel">
              <h4>Selected · {detail.id}</h4>
              <div className="vid">VIN · {detail.vehSub.split("·")[0].trim().replace("VIN ", "")}</div>
              <div className="veh-name">{detail.veh}</div>
              <div className="veh-sub">
                {detail.vehSub.split("·").slice(1).join(" · ").trim()} · PLATE {detail.plate}
              </div>
              <div style={{ marginTop: 16 }}>
                <KVRow k="Customer" v={detail.customer} />
                <KVRow k="Bay" v={`${detail.bay} · ${detail.tech}`} />
                <KVRow k="Opened" v={detail.open} />
                <KVRow k="ETA" v={detail.eta} />
                <KVRow k="Status" v={STATUS_LABEL[detail.status]} />
              </div>
            </div>
            <div className="panel">
              <h4>Complaint · Diagnosis</h4>
              <div style={{ fontFamily: "var(--body)", fontSize: 14, color: "#2a2a2a", lineHeight: 1.5 }}>
                {detail.complaint}
              </div>
              <div style={{ marginTop: 18 }}>
                <h4>Labour Variance</h4>
                <LabourBar est={detail.est} actual={detail.actual} status={detail.status} />
              </div>
            </div>
            <div className="panel">
              <h4>Parts Requisition</h4>
              {detail.parts.length === 0 ? (
                <div className="vid" style={{ paddingTop: 4 }}>
                  NONE ASSIGNED
                </div>
              ) : (
                <div className="partlist">
                  {detail.parts.map((p, i) => (
                    <PartRow key={i} part={p} />
                  ))}
                </div>
              )}
              <div style={{ marginTop: 14, display: "flex", gap: 6 }}>
                {/* Inert demo control — labelled live demo, no real submit. */}
                <button type="button" className={buttonClasses({ size: "sm" })} style={{ flex: 1 }}>
                  ISSUE PARTS <span className="arr">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="wrap" style={{ padding: 0, marginTop: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(244,241,234,.6)" }}>
            <span>↳ THIS IS A LIVE INTERACTIVE COMPONENT · CLICK ANY ROW</span>
            <span>SAMPLE DATA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
