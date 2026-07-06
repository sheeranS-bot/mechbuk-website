import { CATEGORY_LABEL, type ChangelogEntry } from "@/lib/changelog";

const DATE_FMT: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "short",
  year: "numeric",
};

function formatDate(iso: string) {
  // Parse as UTC so the date doesn't shift by timezone.
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d))
    .toLocaleDateString("en-GB", { ...DATE_FMT, timeZone: "UTC" })
    .toUpperCase();
}

export function ChangelogList({ entries }: { entries: ChangelogEntry[] }) {
  return (
    <div className="changelog-list">
      {entries.map((entry) => (
        <article key={entry.slug} id={entry.slug} className="cl-entry">
          <div className="cl-gutter">
            <div className="cl-date">{formatDate(entry.date)}</div>
            <div className="cl-cats">
              {entry.categories.map((cat) => (
                <span key={cat} className={`cl-pill ${cat}`}>
                  {CATEGORY_LABEL[cat]}
                </span>
              ))}
            </div>
          </div>
          <div className="cl-body">
            <h3 className="cl-title">{entry.title}</h3>
            <p className="cl-lead">{entry.lead}</p>
            {entry.bullets && entry.bullets.length > 0 ? (
              <ul className="cl-bullets">
                {entry.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
