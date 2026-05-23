import { SectionHead } from "@/components/molecules/SectionHead";

export function Changelog() {
  return (
    <section className="section tight" id="changelog" data-screen-label="06 Changelog">
      <div className="wrap">
        <SectionHead
          num="05"
          title="CHANGELOG"
          sub="WHAT SHIPPED. RECENTLY."
          stamp={["COMING SOON", "—", "—"]}
        />
        <div
          style={{
            border: "2px solid var(--ink)",
            padding: "32px 18px",
            textAlign: "center",
            fontFamily: "var(--mono)",
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          Changelog coming soon
        </div>
      </div>
    </section>
  );
}
