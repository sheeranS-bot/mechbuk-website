import { SectionHead } from "@/components/molecules/SectionHead";
import { ChangelogList } from "@/components/molecules/ChangelogList";
import { changelogEntries } from "@/lib/changelog";

export function Changelog() {
  const latest = changelogEntries.slice(0, 3);
  return (
    <section className="section tight" id="changelog" data-screen-label="06 Changelog">
      <div className="wrap">
        <SectionHead
          num="05"
          title="CHANGELOG"
          sub="WHAT SHIPPED. RECENTLY."
          stamp={["LIVE", `${changelogEntries.length} ENTRIES`, "PLAIN ENGLISH"]}
        />
        <ChangelogList entries={latest} />
        <div className="cl-more">
          <a className="btn ghost" href="/changelog">
            View full changelog <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
