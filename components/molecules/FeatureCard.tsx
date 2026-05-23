import { SpecList } from "@/components/molecules/SpecList";

export interface FeatureItem {
  num: string;
  title: string;
  desc: string;
  Icon: React.ComponentType<{ size?: number }>;
  specs: [string, string][];
}

export function FeatureCard({ item }: { item: FeatureItem }) {
  const { num, title, desc, Icon, specs } = item;
  return (
    <div className="feat">
      <div className="num">{num}</div>
      <h3>{title}</h3>
      <p className="desc">{desc}</p>
      <SpecList specs={specs} />
      <div className="icon">
        <Icon size={48} />
      </div>
    </div>
  );
}
