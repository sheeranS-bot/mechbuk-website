import { SectionHead } from "@/components/molecules/SectionHead";
import { Kicker } from "@/components/atoms/Kicker";
import { ShopQuote } from "@/components/molecules/ShopQuote";
import { FloorPlan } from "@/components/illustrations/FloorPlan";
import { EngineIso } from "@/components/illustrations/EngineIso";

export function ShopFloor() {
  return (
    <section className="section dark" id="shop" data-screen-label="04 Shop Floor" style={{ borderTop: "1px solid #1a1a1a" }}>
      <div className="wrap">
        <SectionHead
          num="03"
          title="BUILT FOR THE SHOP FLOOR"
          sub="GREASE-RATED. TABLET-FIRST."
          stamp={["FIELD-TESTED", "BUILT WITH SHOPS", "—"]}
        />

        <div className="shop-grid">
          <div className="shop-cell">
            <Kicker num="[ A ]" onDark>
              FLOOR PLAN AWARE
            </Kicker>
            <h3 style={{ marginTop: 12 }}>
              Every bay is a row.
              <br />
              Every tech is a column.
            </h3>
            <p>
              Map your actual shop — drive-thru lanes, scissor lifts, four-posts, exterior parking.
              Mechbuk schedules against the physical floor, not a calendar abstraction.
            </p>
            <div className="illus" style={{ color: "var(--bone)" }}>
              <FloorPlan />
            </div>
          </div>
          <div className="shop-cell">
            <Kicker num="[ B ]" onDark>
              UNIT-AWARE
            </Kicker>
            <h3 style={{ marginTop: 12 }}>Knows a Cascadia from a Cascadia DD15.</h3>
            <p>
              VIN decodes resolve to engine family and emissions class. Service intervals, recall
              data, and warranty terms attach automatically — no more "which Cummins is this?"
            </p>
            <div className="illus" style={{ color: "var(--bone)" }}>
              <EngineIso />
            </div>
          </div>
        </div>

        <div className="shop-quotes">
          {/* Testimonials neutralized (honesty pass) — real quotes pending consent. */}
          <ShopQuote
            full
            quote="Customer stories coming soon."
            who="PILOT FEEDBACK · TO BE PUBLISHED WITH CONSENT"
          />
        </div>
      </div>
    </section>
  );
}
