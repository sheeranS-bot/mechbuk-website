/**
 * Changelog — the data behind the website's changelog section and the
 * /changelog page. Written for the people who use Mechbuk (workshop owners,
 * service advisors, mechanics) — NOT for developers.
 *
 * To add an entry:
 *   1. Prepend a new object to `changelogEntries` (newest first).
 *   2. Give it a unique `slug` (YYYY-MM-DD-short-name) — it's the anchor + key.
 *   3. Pick one or more `categories`.
 *   4. Write `lead` in plain "you can now…" language, plus 0–3 short bullets.
 * The section and page render whatever lives here — no component edits needed.
 *
 * Voice: a workshop owner should understand every line. No jargon, no code,
 * no version numbers of internal tools. If a change isn't something a user
 * would notice, it doesn't belong here.
 *
 * The `/release-notes` skill drafts these entries from shipped work.
 */

export type ChangelogCategory = "feature" | "improvement" | "fix";

export const CATEGORY_LABEL: Record<ChangelogCategory, string> = {
  feature: "New",
  improvement: "Improved",
  fix: "Fixed",
};

export interface ChangelogEntry {
  /** Unique, stable id — becomes the #anchor. Format: YYYY-MM-DD-short-name. */
  slug: string;
  /** ISO date, YYYY-MM-DD. Shown in the left gutter. */
  date: string;
  /** Short, plain-language headline. */
  title: string;
  /** One or more tags, rendered as pills. */
  categories: ChangelogCategory[];
  /** 1–2 sentence lead, in plain language. */
  lead: string;
  /** 0–3 short supporting bullets. */
  bullets?: string[];
}

export const changelogEntries: ChangelogEntry[] = [
  {
    slug: "2026-08-19-rework-no-charge",
    date: "2026-08-19",
    title: "When a job comes back, put it right at no charge",
    categories: ["feature"],
    lead:
      "A customer collects their unit, then brings it back because something wasn't fixed properly. You can now open a rework on the finished job: it's linked to the original, it costs the customer nothing, and it doesn't get counted as new work.",
    bullets: [
      "Open it from the finished work order — the customer and the unit carry over, so there's nothing to re-enter.",
      "Nothing is billed, but you still record the parts and hours, so you can see what comebacks are costing you.",
      "Both work orders link to each other, so the full story is on the unit's history.",
      "The customer sees \"no charge\" and nothing else. Owners and managers are the only ones who can open a rework.",
    ],
  },
  {
    slug: "2026-08-19-rework-reporting",
    date: "2026-08-19",
    title: "Reports no longer count a comeback as new work",
    categories: ["improvement", "fix"],
    lead:
      "Redoing a job used to make your numbers look better than they were — it counted as another job closed, and the mechanic redoing their own work looked busier. That's fixed, and there's a new rework panel on the overview.",
    bullets: [
      "Jobs closed, turnaround time and technician hours all leave reworks out.",
      "A new panel shows how often work comes back and what it's costing you.",
      "Reworks still count towards how busy the workshop is right now, because the bay and the mechanic really are tied up.",
    ],
  },
  {
    slug: "2026-08-19-work-order-page-fix",
    date: "2026-08-19",
    title: "The work order page opens for everyone again",
    categories: ["fix"],
    lead:
      "Team members without settings access were hitting an error when opening a work order. The page now opens for everyone, showing labour as zero if no rate has been set up.",
  },
  {
    slug: "2026-07-09-edit-component-details",
    date: "2026-07-09",
    title: "Fix a mistake on a checked-in component",
    categories: ["feature"],
    lead:
      "Typed the wrong make, model, or serial number when a component came in? You can now open the component and correct its details — no more being stuck with a mistake.",
    bullets: [
      "Edit the make, model, serial number, part number, year, weight, and component type.",
      "Works any time the component is still on your books.",
    ],
  },
  {
    slug: "2026-07-09-mechanics-vs-desk",
    title: "Front-desk staff and mechanics, kept apart",
    date: "2026-07-09",
    categories: ["fix"],
    lead:
      "When you put a technician on a job, the list now shows your real mechanics from the Technicians list — not your office logins. The person on a job is always an actual technician.",
    bullets: [
      "The technician picker on a work order and the reports show your workshop mechanics only.",
      "Office team members keep full access to run the app, but no longer show up as mechanics.",
    ],
  },
  {
    slug: "2026-07-06-assign-technicians",
    date: "2026-07-06",
    title: "Assign a technician to every job",
    categories: ["feature"],
    lead:
      "You can now put a specific technician on each operation in a job, and they can start, complete, or turn down that work right from the shop-floor tablet. The job board keeps everything in step, so nothing gets marked done before it actually is.",
    bullets: [
      "Assign work operation by operation, not just per job.",
      "Technicians start, complete, or decline their tasks on the floor.",
      "Declined work is flagged so the front desk can reassign it.",
    ],
  },
  {
    slug: "2026-07-06-reliable-photos",
    date: "2026-07-06",
    title: "More reliable job photos",
    categories: ["fix", "improvement"],
    lead:
      "Adding photos to a job is steadier now, and they load faster — including on the customer's tracking page — because they're sized for the screen instead of served at full resolution.",
  },
  {
    slug: "2026-07-05-notifications",
    date: "2026-07-05",
    title: "In-app notifications and a bell",
    categories: ["feature"],
    lead:
      "Follow-ups and reminders now show up as notifications with a bell in the top bar, so a callback or a chase-up doesn't slip through the cracks.",
  },
  {
    slug: "2026-07-05-shop-floor-tools",
    date: "2026-07-05",
    title: "New shop-floor tools",
    categories: ["feature"],
    lead:
      "The floor view is more hands-on, so mechanics can capture what's happening without walking back to the office.",
    bullets: [
      "Snap photos of a job straight from a tablet.",
      "Raise a finding the moment you spot extra work.",
      "Hand a vehicle off from one bay to the next in a tap.",
    ],
  },
  {
    slug: "2026-07-04-csv-export",
    date: "2026-07-04",
    title: "Export any list to a spreadsheet",
    categories: ["feature"],
    lead:
      "Every list in Mechbuk — jobs, customers, vehicles, parts, vendors and more — now has a one-click export to a spreadsheet, ready for reporting or sharing.",
  },
  {
    slug: "2026-07-04-team-permissions",
    date: "2026-07-04",
    title: "Add your team and set who sees what",
    categories: ["feature"],
    lead:
      "Owners can now add team members and choose exactly what each person can view or change — like reports and pricing — so everyone gets the right level of access and nothing sensitive is over-shared.",
    bullets: [
      "Add staff with a simple username and a temporary password.",
      "Give each person their own access to reports and settings.",
      "Only owners can manage the team.",
    ],
  },
  {
    slug: "2026-07-04-faster-and-steadier",
    date: "2026-07-04",
    title: "Faster reports and a steadier app",
    categories: ["improvement"],
    lead:
      "Reports and long lists load noticeably faster, and the app holds up better when a busy shop has a lot going on at once.",
  },
];
