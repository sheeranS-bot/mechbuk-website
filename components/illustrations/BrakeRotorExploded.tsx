/**
 * Exploded brake-assembly technical drawing. `explode` (0..1.5+) controls how
 * far the components separate; `rotate` spins the rotor (degrees). Uses
 * currentColor so it tints with the surrounding section.
 *
 * Coordinates derived from Math.cos/sin are quantized via q() so the SSR
 * (Node) and client (browser) renders emit byte-identical attribute strings —
 * otherwise last-ULP float differences trip React hydration warnings.
 */
const q = (n: number) => Math.round(n * 10000) / 10000;
const rad = (deg: number) => ((deg - 90) * Math.PI) / 180;

export function BrakeRotorExploded({
  explode = 1,
  rotate = 0,
  className = "",
}: {
  explode?: number;
  rotate?: number;
  className?: string;
}) {
  const e = explode;
  const off = {
    caliperBack: -150 * e,
    pads: -80 * e,
    rotor: 0,
    hub: 80 * e,
    nut: 155 * e,
    bolts: 200 * e,
  };

  return (
    <svg
      className={className}
      viewBox="-260 -180 520 360"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
    >
      <line x1="-240" y1="0" x2="240" y2="0" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.5" />
      {[-240, -180, -120, -60, 0, 60, 120, 180, 240].map((x, i) => (
        <g key={i} opacity="0.55">
          <line x1={x} y1="-4" x2={x} y2="4" strokeWidth="0.5" />
        </g>
      ))}

      {/* CALIPER BACKING PLATE */}
      <g transform={`translate(${off.caliperBack}, 0)`}>
        <g className="part">
          <path d="M -28 -60 L 28 -60 A 18 18 0 0 1 46 -42 L 46 42 A 18 18 0 0 1 28 60 L -28 60 A 18 18 0 0 1 -46 42 L -46 -42 A 18 18 0 0 1 -28 -60 Z" />
          <rect x="-28" y="-44" width="56" height="88" rx="6" />
          <circle cx="-32" cy="-44" r="3" />
          <circle cx="32" cy="-44" r="3" />
          <circle cx="-32" cy="44" r="3" />
          <circle cx="32" cy="44" r="3" />
          <circle cx="0" cy="-24" r="9" />
          <circle cx="0" cy="24" r="9" />
          <circle cx="0" cy="-24" r="5" />
          <circle cx="0" cy="24" r="5" />
        </g>
      </g>

      {/* BRAKE PADS */}
      <g transform={`translate(${off.pads}, 0)`}>
        <g>
          <rect x="-8" y="-50" width="16" height="100" rx="3" />
          <rect x="-4" y="-46" width="8" height="92" rx="2" stroke="currentColor" strokeDasharray="2 2" opacity="0.5" />
          <rect x="-3" y="-58" width="6" height="8" />
          <rect x="-3" y="50" width="6" height="8" />
        </g>
        <g transform="translate(18, 0)">
          <rect x="-8" y="-50" width="16" height="100" rx="3" />
          <rect x="-4" y="-46" width="8" height="92" rx="2" stroke="currentColor" strokeDasharray="2 2" opacity="0.5" />
        </g>
      </g>

      {/* ROTOR */}
      <g transform={`translate(${off.rotor}, 0) rotate(${rotate})`}>
        <circle cx="0" cy="0" r="120" />
        <circle cx="0" cy="0" r="116" opacity="0.55" />
        <circle cx="0" cy="0" r="74" />
        <circle cx="0" cy="0" r="40" />
        <circle cx="0" cy="0" r="14" />
        <circle cx="0" cy="0" r="6" />
        {[0, 72, 144, 216, 288].map((a, i) => (
          <circle key={i} cx={q(Math.cos(rad(a)) * 27)} cy={q(Math.sin(rad(a)) * 27)} r="4" />
        ))}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 360) / 24;
          return (
            <line
              key={i}
              x1={q(Math.cos(rad(a)) * 76)}
              y1={q(Math.sin(rad(a)) * 76)}
              x2={q(Math.cos(rad(a)) * 114)}
              y2={q(Math.sin(rad(a)) * 114)}
              strokeWidth="0.7"
              opacity="0.7"
            />
          );
        })}
        {Array.from({ length: 60 }).map((_, i) => {
          const a = (i * 360) / 60;
          return (
            <line
              key={i}
              x1={q(Math.cos(rad(a)) * 118)}
              y1={q(Math.sin(rad(a)) * 118)}
              x2={q(Math.cos(rad(a)) * 120)}
              y2={q(Math.sin(rad(a)) * 120)}
              strokeWidth="0.4"
              opacity="0.4"
            />
          );
        })}
      </g>

      {/* HUB */}
      <g transform={`translate(${off.hub}, 0)`}>
        <circle cx="0" cy="0" r="42" />
        <circle cx="0" cy="0" r="34" />
        <circle cx="0" cy="0" r="10" />
        <circle cx="0" cy="0" r="5" />
        {[0, 72, 144, 216, 288].map((a, i) => {
          const ax = q(Math.cos(rad(a)) * 24);
          const ay = q(Math.sin(rad(a)) * 24);
          return (
            <g key={i}>
              <circle cx={ax} cy={ay} r="3.5" />
              <line x1={ax} y1={ay} x2={q(ax + 14 * Math.max(0, e * 0.6))} y2={ay} strokeWidth="0.7" />
            </g>
          );
        })}
      </g>

      {/* CASTLE NUT */}
      <g transform={`translate(${off.nut}, 0)`}>
        {(() => {
          const pts: string[] = [];
          for (let i = 0; i < 6; i++) {
            const a = ((i * 60 - 30) * Math.PI) / 180;
            pts.push(`${q(Math.cos(a) * 22)},${q(Math.sin(a) * 22)}`);
          }
          return <polygon points={pts.join(" ")} />;
        })()}
        <circle cx="0" cy="0" r="14" />
        <circle cx="0" cy="0" r="6" />
        {[0, 60, 120, 180, 240, 300].map((a, i) => (
          <line
            key={i}
            x1={q(Math.cos(rad(a)) * 22)}
            y1={q(Math.sin(rad(a)) * 22)}
            x2={q(Math.cos(rad(a)) * 16)}
            y2={q(Math.sin(rad(a)) * 16)}
          />
        ))}
      </g>

      {/* LUG BOLTS */}
      <g transform={`translate(${off.bolts}, 0)`}>
        {[0, 72, 144, 216, 288].map((a, i) => {
          const ax = q(Math.cos(rad(a)) * 30);
          const ay = q(Math.sin(rad(a)) * 30);
          return (
            <g key={i} transform={`translate(${ax}, ${ay})`}>
              {(() => {
                const pts: string[] = [];
                for (let j = 0; j < 6; j++) {
                  const an = ((j * 60 - 30) * Math.PI) / 180;
                  pts.push(`${q(Math.cos(an) * 5)},${q(Math.sin(an) * 5)}`);
                }
                return <polygon points={pts.join(" ")} />;
              })()}
              <circle cx="0" cy="0" r="2" />
              <line x1="5" y1="0" x2="14" y2="0" strokeWidth="0.7" />
              <line x1="14" y1="-1.5" x2="14" y2="1.5" strokeWidth="0.7" />
            </g>
          );
        })}
      </g>

      {/* Callout labels — appear when exploded */}
      <g
        style={{ opacity: Math.min(1, Math.max(0, (e - 0.4) * 2)), transition: "opacity .4s" }}
        fontFamily="JetBrains Mono, ui-monospace, monospace"
        fontSize="8"
        letterSpacing="1"
        fill="currentColor"
        stroke="none"
      >
        <line x1={off.caliperBack} y1={-62} x2={off.caliperBack} y2={-92} strokeWidth="0.4" stroke="currentColor" opacity="0.6" />
        <text x={off.caliperBack} y={-100} textAnchor="middle">A · CALIPER ASSY</text>
        <text x={off.caliperBack} y={-110} textAnchor="middle" opacity="0.55">P/N 04-2218</text>

        <line x1={off.pads + 10} y1={-52} x2={off.pads + 10} y2={-72} strokeWidth="0.4" stroke="currentColor" opacity="0.6" />
        <text x={off.pads + 10} y={-80} textAnchor="middle">B · PAD SET</text>
        <text x={off.pads + 10} y={-90} textAnchor="middle" opacity="0.55">P/N 41-009-R</text>

        <line x1={0} y1={-122} x2={0} y2={-142} strokeWidth="0.4" stroke="currentColor" opacity="0.6" />
        <text x={0} y={-150} textAnchor="middle">C · ROTOR · 330 MM</text>
        <text x={0} y={-160} textAnchor="middle" opacity="0.55">P/N RT-330-VENT</text>

        <line x1={off.hub} y1={44} x2={off.hub} y2={72} strokeWidth="0.4" stroke="currentColor" opacity="0.6" />
        <text x={off.hub} y={88} textAnchor="middle">D · HUB</text>
        <text x={off.hub} y={100} textAnchor="middle" opacity="0.55">P/N HUB-512</text>

        <line x1={off.nut} y1={24} x2={off.nut} y2={52} strokeWidth="0.4" stroke="currentColor" opacity="0.6" />
        <text x={off.nut} y={68} textAnchor="middle">E · NUT</text>
        <text x={off.nut} y={80} textAnchor="middle" opacity="0.55">M22 × 1.5</text>

        <line x1={off.bolts} y1={36} x2={off.bolts} y2={92} strokeWidth="0.4" stroke="currentColor" opacity="0.6" />
        <text x={off.bolts} y={108} textAnchor="middle">F · LUG ×5</text>
        <text x={off.bolts} y={120} textAnchor="middle" opacity="0.55">14×1.5 · 140NM</text>
      </g>

      {/* Leader lines when collapsed */}
      <g style={{ opacity: Math.max(0, 1 - e) * 0.8, transition: "opacity .3s" }} strokeWidth="0.5">
        <line x1="-100" y1="-130" x2="-50" y2="-100" />
        <line x1="100" y1="-130" x2="50" y2="-100" />
      </g>
    </svg>
  );
}
