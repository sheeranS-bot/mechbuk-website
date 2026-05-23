export function ShopQuote({
  quote,
  who,
  full = false,
}: {
  quote: string;
  who: string;
  full?: boolean;
}) {
  return (
    <div className="shop-quote" style={full ? { gridColumn: "1 / -1" } : undefined}>
      <q>{quote}</q>
      <div className="who">{who}</div>
    </div>
  );
}
