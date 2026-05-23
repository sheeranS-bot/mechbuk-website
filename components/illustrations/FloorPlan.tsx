/** 6-bay shop floor plan, line-drawn. Strokes currentColor. */
export function FloorPlan({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 460 220" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" style={{ width: "100%", height: "auto" }}>
      <rect x="10" y="10" width="440" height="200" />
      <rect x="10" y="10" width="80" height="60" />
      <rect x="10" y="70" width="80" height="40" />
      <text x="14" y="28" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="currentColor" stroke="none">SVC DESK</text>
      <text x="14" y="88" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="currentColor" stroke="none">PARTS</text>
      <rect x="10" y="110" width="80" height="100" />
      <text x="14" y="128" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="currentColor" stroke="none">BREAK / OFFICE</text>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const x = 90 + i * 60;
        const isActive = i === 1 || i === 3;
        return (
          <g key={i}>
            <rect x={x} y="10" width="60" height="200" />
            <text x={x + 6} y={26} fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="0.5" fill="currentColor" stroke="none">
              B-0{i + 1}
            </text>
            <circle cx={x + 30} cy={70} r="4" />
            <circle cx={x + 30} cy={150} r="4" />
            <line x1={x + 10} y1={110} x2={x + 50} y2={110} strokeDasharray="2 3" opacity="0.5" />
            {isActive && (
              <g opacity="0.85">
                <rect x={x + 10} y={80} width="40" height="60" rx="2" fill="currentColor" stroke="none" opacity="0.12" />
                <rect x={x + 10} y={80} width="40" height="60" rx="2" />
                <circle cx={x + 18} cy={86} r="3" />
                <circle cx={x + 42} cy={86} r="3" />
                <circle cx={x + 18} cy={134} r="3" />
                <circle cx={x + 42} cy={134} r="3" />
              </g>
            )}
          </g>
        );
      })}
      <g fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="0.5" fill="currentColor" stroke="none">
        <text x="14" y="200">SCALE 1:50</text>
      </g>
    </svg>
  );
}
