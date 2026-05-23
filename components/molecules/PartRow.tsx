import type { JobPart } from "@/lib/demo-data";

export function PartRow({ part }: { part: JobPart }) {
  const color =
    part.status === "STOCK" ? "#15803d" : part.status === "BACKORDER" ? "#b04a14" : "#1a1a1a";
  return (
    <div className="row">
      <span>
        {part.desc}
        <div className="pn">P/N {part.pn}</div>
      </span>
      <span className="qty">×{part.qty}</span>
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: "0.12em",
          padding: "2px 6px",
          border: "1px solid",
          color,
        }}
      >
        {part.status}
      </span>
    </div>
  );
}
