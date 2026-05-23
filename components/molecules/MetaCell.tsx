/** One cell of the hero meta strip: a mono label over a display value. */
export function MetaCell({
  k,
  children,
}: {
  k: string;
  children: React.ReactNode;
}) {
  return (
    <div className="cell">
      <div className="k">{k}</div>
      <div className="v">{children}</div>
    </div>
  );
}
