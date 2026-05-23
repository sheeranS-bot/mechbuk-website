// Technical line icons for the Features module. All stroke currentColor.
// q() quantizes computed coordinates so SSR/client emit identical strings
// (avoids hydration mismatch from last-ULP Math.cos/sin float differences).

type IconProps = { size?: number };

const q = (n: number) => Math.round(n * 10000) / 10000;

export function IconWrench({ size = 48 }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M44 12 a10 10 0 0 0 -12 12 L 12 44 a4 4 0 0 0 0 6 L 14 52 a4 4 0 0 0 6 0 L 40 32 a10 10 0 0 0 12 -12 L 46 26 L 42 22 L 38 18 Z" />
      <line x1="32" y1="24" x2="36" y2="28" />
    </svg>
  );
}

export function IconClipboard({ size = 48 }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="12" width="36" height="44" rx="2" />
      <rect x="22" y="8" width="20" height="8" rx="1" />
      <line x1="20" y1="26" x2="44" y2="26" />
      <line x1="20" y1="34" x2="44" y2="34" />
      <line x1="20" y1="42" x2="38" y2="42" />
      <line x1="20" y1="50" x2="34" y2="50" />
    </svg>
  );
}

export function IconBoxes({ size = 48 }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="22" width="22" height="22" />
      <line x1="6" y1="28" x2="28" y2="28" />
      <line x1="14" y1="22" x2="14" y2="28" />
      <rect x="32" y="14" width="22" height="22" />
      <line x1="32" y1="20" x2="54" y2="20" />
      <line x1="40" y1="14" x2="40" y2="20" />
      <rect x="20" y="40" width="22" height="22" />
      <line x1="20" y1="46" x2="42" y2="46" />
      <line x1="28" y1="40" x2="28" y2="46" />
    </svg>
  );
}

export function IconClock({ size = 48 }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="22" />
      <line x1="32" y1="32" x2="32" y2="18" />
      <line x1="32" y1="32" x2="42" y2="36" />
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => {
        const r1 = 20, r2 = 22;
        const rad = ((a - 90) * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={q(32 + Math.cos(rad) * r1)}
            y1={q(32 + Math.sin(rad) * r1)}
            x2={q(32 + Math.cos(rad) * r2)}
            y2={q(32 + Math.sin(rad) * r2)}
          />
        );
      })}
    </svg>
  );
}
