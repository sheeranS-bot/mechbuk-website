/** Right-aligned mono stamp block, e.g. ["FORM MB-002", "REV 7.4", "SHEET 1 OF 1"]. */
export function SpecStamp({ lines }: { lines: string[] }) {
  return (
    <div className="stamp">
      {lines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}
