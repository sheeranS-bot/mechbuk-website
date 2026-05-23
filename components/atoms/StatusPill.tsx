import type { JobStatus } from "@/lib/demo-data";
import { STATUS_LABEL } from "@/lib/demo-data";

export function StatusPill({ status }: { status: JobStatus }) {
  return (
    <span className={`pill s-${status}`}>
      <span className="dot" />
      {STATUS_LABEL[status]}
    </span>
  );
}
