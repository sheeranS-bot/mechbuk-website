/** Dotted key/value spec rows used inside a feature card. */
export function SpecList({ specs }: { specs: [string, string][] }) {
  return (
    <ul className="speclist">
      {specs.map(([k, v], i) => (
        <li key={i}>
          <span>{k}</span>
          <b>{v}</b>
        </li>
      ))}
    </ul>
  );
}
