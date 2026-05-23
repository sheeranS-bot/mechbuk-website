import { SectionHead } from "@/components/molecules/SectionHead";
import { FeatureCard, type FeatureItem } from "@/components/molecules/FeatureCard";
import { IconClipboard, IconBoxes, IconClock, IconWrench } from "@/components/illustrations/icons";

// Vendor names genericized vs the draft (honesty pass): no specific
// third-party integration is asserted. Regulatory refs (DOT 396.11) stay.
const ITEMS: FeatureItem[] = [
  {
    num: "01 / 04",
    title: "Job Cards",
    desc: "Open a card the second a unit rolls in. Capture VIN, complaint, photos, and DOT inspection results on a tablet. Cards carry through estimate, approval, dispatch, and invoice — same record, no re-keying.",
    Icon: IconClipboard,
    specs: [
      ["Open → close", "ONE RECORD"],
      ["VIN decode", "AUTOMATIC"],
      ["DOT 396.11", "BUILT-IN"],
      ["Photo evidence", "UNLIMITED"],
    ],
  },
  {
    num: "02 / 04",
    title: "Parts & Inventory",
    desc: "Live counts across the parts room and every truck-cab kit. Cross-reference OEM and aftermarket catalogs. Requisition from a job card; reorder points trigger PO drafts automatically.",
    Icon: IconBoxes,
    specs: [
      ["X-ref catalogs", "MULTI"],
      ["Min/max", "PER S.K.U."],
      ["Cycle count", "BARCODE"],
      ["PO drafts", "AUTO"],
    ],
  },
  {
    num: "03 / 04",
    title: "Labour & Time",
    desc: "Punch on and off a job from the bay tablet. Compare actual hours to flat-rate guide for every op. Foremen see who's behind, who's free, and which bay frees up next — without walking the floor.",
    Icon: IconClock,
    specs: [
      ["Flat-rate guide", "INDUSTRY STD"],
      ["Punch granularity", "PER OP"],
      ["Variance alerts", "REAL-TIME"],
      ["Payroll export", "ACH · 941"],
    ],
  },
  {
    num: "04 / 04",
    title: "Bay Scheduling",
    desc: "Drag work orders across a Gantt of every bay and every tech. Block lifts, parking, and exterior bays separately. Customer text updates fire on status changes, no phone tag.",
    Icon: IconWrench,
    specs: [
      ["View", "GANTT · BOARD"],
      ["Capacity rules", "PER BAY"],
      ["Customer SMS", "BUILT-IN"],
      ["Calendar sync", "iCAL"],
    ],
  },
];

export function Features() {
  return (
    <section className="section" id="features" data-screen-label="02 Features">
      <div className="wrap">
        <SectionHead
          num="01"
          title="WHAT IT DOES"
          sub="FOUR MODULES, ONE RECORD."
          stamp={["FORM MB-002", "REV 7.4", "SHEET 1 OF 1"]}
        />
        <div className="features">
          {ITEMS.map((item, i) => (
            <FeatureCard item={item} key={i} />
          ))}
        </div>
        <div className="stripe thin" style={{ marginTop: 56 }} />
      </div>
    </section>
  );
}
