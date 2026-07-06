import type { Metadata } from "next";
import { Nav } from "@/components/organisms/Nav";
import { Footer } from "@/components/organisms/Footer";
import { Kicker } from "@/components/atoms/Kicker";
import { ChangelogList } from "@/components/molecules/ChangelogList";
import { changelogEntries } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog — Mechbuk",
  description:
    "What's new in Mechbuk — features, improvements and fixes, in plain English.",
};

export default function ChangelogPage() {
  return (
    <>
      <Nav />
      <main className="cl-page">
        <div className="wrap">
          <div className="cl-page-head">
            <Kicker num="05">CHANGELOG · WHAT SHIPPED</Kicker>
            <h1 className="cl-page-title">Every update,<br />in plain English.</h1>
            <p className="cl-page-sub">
              New features, improvements and fixes as they land in Mechbuk &mdash;
              written for the people who run the shop, not the people who build it.
            </p>
          </div>
          <ChangelogList entries={changelogEntries} />
        </div>
      </main>
      <Footer />
    </>
  );
}
