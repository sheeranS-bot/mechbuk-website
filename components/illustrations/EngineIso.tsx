/** Isometric engine-block line drawing. Strokes currentColor. */
export function EngineIso({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 220" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "auto" }}>
      <line x1="20" y1="200" x2="340" y2="200" strokeDasharray="3 4" opacity="0.4" />
      <path d="M70 120 L70 70 L240 70 L240 120 L300 140 L300 180 L130 180 L70 160 Z" />
      <path d="M70 70 L130 90 L300 90 L240 70 Z" />
      <path d="M130 90 L130 180" />
      <path d="M300 90 L300 140" />
      {[0, 1, 2, 3].map((i) => {
        const x = 90 + i * 38;
        return (
          <g key={i}>
            <rect x={x} y="40" width="22" height="40" />
            <line x1={x} y1="50" x2={x + 22} y2="50" />
            <line x1={x + 6} y1="40" x2={x + 6} y2="22" />
            <line x1={x + 16} y1="40" x2={x + 16} y2="22" />
            <rect x={x + 3} y="18" width="16" height="6" />
          </g>
        );
      })}
      <line x1="80" y1="180" x2="80" y2="194" />
      <line x1="120" y1="190" x2="120" y2="200" />
      <line x1="260" y1="180" x2="260" y2="200" />
      <line x1="290" y1="180" x2="290" y2="200" />
      <g fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="1" fill="currentColor" stroke="none" opacity="0.85">
        <text x="90" y="14">CYL 1</text>
        <text x="128" y="14">CYL 2</text>
        <text x="166" y="14">CYL 3</text>
        <text x="204" y="14">CYL 4</text>
        <text x="270" y="60" opacity="0.6">BLOCK · 4.5L I4</text>
      </g>
    </svg>
  );
}
