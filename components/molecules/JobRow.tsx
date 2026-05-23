import type { Job } from "@/lib/demo-data";
import { StatusPill } from "@/components/atoms/StatusPill";

export function JobRow({
  job,
  active,
  onSelect,
}: {
  job: Job;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <tr className={`row ${active ? "active" : ""}`} onClick={() => onSelect(job.id)}>
      <td className="id">{job.id}</td>
      <td className="veh">
        {job.veh}
        <small>
          {job.vehSub} · {job.plate}
        </small>
      </td>
      <td className="bay">{job.bay}</td>
      <td className="tech">{job.tech}</td>
      <td className="hrs">
        {job.est.toFixed(1)} / {job.actual.toFixed(1)}
        {job.actual > job.est && job.status === "progress" && (
          <span className="delta">+{(job.actual - job.est).toFixed(1)}</span>
        )}
        {job.actual <= job.est && job.status === "progress" && (
          <span className="ok">−{(job.est - job.actual).toFixed(1)}</span>
        )}
      </td>
      <td className="status">
        <StatusPill status={job.status} />
      </td>
    </tr>
  );
}
