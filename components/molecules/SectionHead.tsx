import { SpecStamp } from "@/components/atoms/SpecStamp";

export function SectionHead({
  num,
  title,
  sub,
  stamp = [],
}: {
  num: string;
  title: string;
  sub: string;
  stamp?: string[];
}) {
  return (
    <div className="section-head">
      <div className="num-block">
        <span className="big">{num} /</span>
        {title}
      </div>
      <div>
        <h2 className="h-section">{sub}</h2>
      </div>
      <SpecStamp lines={stamp} />
    </div>
  );
}
