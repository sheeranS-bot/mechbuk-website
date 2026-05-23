import { cn } from "@/lib/cn";

/** Mono eyebrow line: "[ 00/00 ]  WORKSHOP OS · REV 7.4". `num` renders in ink. */
export function Kicker({
  num,
  children,
  onDark = false,
  className,
}: {
  num?: string;
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("kicker", onDark && "on-dark", className)}>
      {num ? <span className="num">{num}</span> : null}
      {num ? "   " : null}
      {children}
    </div>
  );
}
