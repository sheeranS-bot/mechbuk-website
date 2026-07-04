import { MarkIcon } from "@/components/atoms/MarkIcon";
import { FooterColumn } from "@/components/molecules/FooterColumn";

const COLUMNS: { heading: string; links: string[] }[] = [
  {
    heading: "Product",
    links: [
      "Job Cards",
      "Parts & Inventory",
      "Labour & Time",
      "Bay Scheduling",
      "DOT Compliance",
      "Mobile · Tablet",
      "Integrations",
    ],
  },
  {
    heading: "Trades",
    links: [
      "Heavy-duty truck",
      "Trailer / refer",
      "Fleet maintenance",
      "Diesel specialty",
      "Bus / coach",
      "General auto",
    ],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Changelog", "API", "DOT 396.11 guide", "Flat-rate primer", "Migration guide"],
  },
  {
    heading: "Company",
    links: ["About", "Press", "Careers", "Contact", "Partners", "Security", "Privacy"],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cols">
          <div>
            <div className="nav-logo" style={{ color: "var(--bone)" }}>
              <MarkIcon size={28} color="var(--accent)" />
              MECHBUK
            </div>
            <p className="blurb">
              Workshop operating system for commercial truck and auto repair shops.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <FooterColumn key={col.heading} heading={col.heading} links={col.links} />
          ))}
        </div>

        <div className="wordmark">MECHBUK</div>

        <div className="footer-base">
          <span>© 2026 Mechbuk</span>
          <span>No tracking scripts</span>
        </div>
      </div>
    </footer>
  );
}
