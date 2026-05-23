/** Estimate-vs-actual labour variance bar for a job detail panel. */
export function LabourBar({
  est,
  actual,
  status,
}: {
  est: number;
  actual: number;
  status: string;
}) {
  const total = Math.max(est, actual, 0.01);
  const estPct = (est / total) * 100;
  const actPct = (actual / total) * 100;
  const over = actual > est;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.08em" }}>
        <span>EST · {est.toFixed(1)}h</span>
        <span>ACT · {actual.toFixed(1)}h</span>
        <span style={{ color: over ? "#b04a14" : "#15803d" }}>
          {over ? "+" : "−"}
          {Math.abs(est - actual).toFixed(1)}h
        </span>
      </div>
      <div style={{ position: "relative", height: 14, marginTop: 8, border: "1px solid #1a1a1a" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${estPct}%`, background: "repeating-linear-gradient(45deg, transparent 0 4px, rgba(0,0,0,.25) 4px 5px)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${actPct}%`, background: over ? "#e85d1a" : "var(--accent)" }} />
        <div style={{ position: "absolute", left: `${estPct}%`, top: -3, bottom: -3, width: 0, borderLeft: "1.5px solid #1a1a1a" }} />
      </div>
      <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#6b6b6b", letterSpacing: "0.1em", marginTop: 6 }}>
        FLAT-RATE GUIDE · MOTOR · LINE {status === "progress" ? "OPEN" : "CLOSED"}
      </div>
    </div>
  );
}
