import type { PricingTier } from "@/lib/demo-data";

/** Feature checklist for one pricing tier (■ included / □ excluded). */
export function PricingTierFeatures({ tier }: { tier: PricingTier }) {
  return (
    <ul className="featurelist" style={{ marginTop: 12 }}>
      {tier.features.map(([yes, label], j) => (
        <li key={j} className={yes ? "" : "no"}>
          <span className="x">{yes ? "■" : "□"}</span>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
