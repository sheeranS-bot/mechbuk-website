export type JobStatus = "progress" | "qc" | "hold" | "wait" | "done";

export interface JobPart {
  pn: string;
  desc: string;
  qty: number;
  status: "STOCK" | "ORD" | "BACKORDER";
}

export interface Job {
  id: string;
  veh: string;
  vehSub: string;
  plate: string;
  bay: string;
  tech: string;
  status: JobStatus;
  open: string;
  eta: string;
  est: number;
  actual: number;
  customer: string;
  complaint: string;
  parts: JobPart[];
}

export const STATUS_LABEL: Record<JobStatus, string> = {
  progress: "IN PROGRESS",
  qc: "QC HOLD",
  hold: "PARTS HOLD",
  wait: "SCHEDULED",
  done: "CLOSED",
};

// Sample dispatch board — fabricated demo data, surfaced in the UI as a
// clearly-labelled live interactive demo (see JobDemo organism).
export const JOBS: Job[] = [
  {
    id: "WO-24018",
    veh: "Kenworth T680",
    vehSub: "VIN ····4291 · 2021 · 412,602 mi",
    plate: "TX 7L42-RGA",
    bay: "B-02",
    tech: "M. CRUZ",
    status: "progress",
    open: "08:14",
    eta: "16:30",
    est: 6.5,
    actual: 5.2,
    customer: "Lone Star Logistics",
    complaint: "Engine derate · DPF regen failure · code SPN 3251 FMI 0",
    parts: [
      { pn: "VOL-21683795", desc: "DPF Filter — Volvo D13", qty: 1, status: "STOCK" },
      { pn: "BG-3406-K", desc: "DPF Gasket Kit", qty: 2, status: "STOCK" },
      { pn: "MB-DEF-2.5G", desc: "DEF — 2.5 gal", qty: 4, status: "STOCK" },
    ],
  },
  {
    id: "WO-24019",
    veh: "Freightliner Cascadia",
    vehSub: "VIN ····8866 · 2019 · 587,114 mi",
    plate: "AZ 4VP-211C",
    bay: "B-04",
    tech: "T. NGUYEN",
    status: "qc",
    open: "07:02",
    eta: "14:00",
    est: 8.0,
    actual: 7.4,
    customer: "Sunbelt Freight Co.",
    complaint: "Air leak rear axle · service brakes slow apply",
    parts: [
      { pn: "BENDIX-AD-9", desc: "Air Dryer Cartridge", qty: 1, status: "STOCK" },
      { pn: "HAL-S-ABS", desc: "ABS Sensor — rear LH", qty: 1, status: "ORD" },
      { pn: "AIR-1/2-300", desc: 'Air Line — 1/2" 300psi', qty: 12, status: "STOCK" },
    ],
  },
  {
    id: "WO-24020",
    veh: "Ford F-550 Super Duty",
    vehSub: "VIN ····0431 · 2022 · 84,221 mi",
    plate: "NV C-99841",
    bay: "B-01",
    tech: "R. PATEL",
    status: "progress",
    open: "09:48",
    eta: "13:00",
    est: 3.0,
    actual: 2.1,
    customer: "Mojave Utility Dist.",
    complaint: "Front brakes — pulsation under 40mph",
    parts: [
      { pn: "RT-330-VENT", desc: "Rotor — 330mm Vented", qty: 2, status: "STOCK" },
      { pn: "41-009-R", desc: "Pad Set — Front Semi-Met", qty: 1, status: "STOCK" },
      { pn: "BR-LUBE-4", desc: "Caliper Lube — 4oz", qty: 1, status: "STOCK" },
    ],
  },
  {
    id: "WO-24021",
    veh: "Peterbilt 389",
    vehSub: "VIN ····1287 · 2018 · 729,805 mi",
    plate: "OK 8E-2294",
    bay: "B-05",
    tech: "J. OBI",
    status: "hold",
    open: "06:55",
    eta: "—",
    est: 14.0,
    actual: 9.8,
    customer: "Red Dirt Hauling LLC",
    complaint: "Clutch slip · transmission whine in 8th gear",
    parts: [
      { pn: "EATON-FRO-15", desc: 'Clutch — Heavy Duty 15.5"', qty: 1, status: "BACKORDER" },
      { pn: "ESCAPE-FLUID", desc: "Trans Fluid — Roadranger", qty: 12, status: "STOCK" },
    ],
  },
  {
    id: "WO-24022",
    veh: "Mack Anthem",
    vehSub: "VIN ····5510 · 2020 · 332,944 mi",
    plate: "AR 7B-0810",
    bay: "B-03",
    tech: "L. KOWALSKI",
    status: "wait",
    open: "—",
    eta: "TOMORROW",
    est: 4.5,
    actual: 0,
    customer: "Ozark Bulk Transport",
    complaint: "Annual DOT inspection · ABS lamp intermittent",
    parts: [],
  },
  {
    id: "WO-24023",
    veh: "Ford Transit 350",
    vehSub: "VIN ····9011 · 2023 · 22,118 mi",
    plate: "TX 4-RVS-09",
    bay: "B-06",
    tech: "M. CRUZ",
    status: "done",
    open: "07:30",
    eta: "11:00",
    est: 2.0,
    actual: 1.8,
    customer: "Pecan Bakery Co.",
    complaint: "Oil + filter service · tire rotation",
    parts: [
      { pn: "FORD-OF-201", desc: "Oil Filter — Ford 6.7L", qty: 1, status: "STOCK" },
      { pn: "SHELL-15W40", desc: "Engine Oil 15W-40", qty: 13, status: "STOCK" },
    ],
  },
];

export interface PricingTier {
  key: "starter" | "standard" | "fleet";
  name: string;
  tag: string;
  perBay: number;
  featured?: boolean;
  features: [boolean, string][];
}

// NOTE: perBay figures are INDICATIVE placeholders, surfaced as
// "not final" in the Pricing UI (see Pricing organism).
export const PRICING_TIERS: PricingTier[] = [
  {
    key: "starter",
    name: "STARTER",
    tag: "1–4 BAYS · INDEPENDENT",
    perBay: 39,
    features: [
      [true, "Unlimited job cards"],
      [true, "Tablet bay clock-in"],
      [true, "Parts inventory · 1 location"],
      [true, "Customer SMS · 500/mo"],
      [false, "Multi-location"],
      [false, "API · webhooks"],
    ],
  },
  {
    key: "standard",
    name: "STANDARD",
    tag: "MOST POPULAR · 4–20 BAYS",
    perBay: 59,
    featured: true,
    features: [
      [true, "Everything in Starter"],
      [true, "Gantt scheduler · multi-bay"],
      [true, "Parts X-ref · 11 catalogs"],
      [true, "Labour variance reports"],
      [true, "Customer SMS · 5,000/mo"],
      [true, "QuickBooks · ProCare sync"],
    ],
  },
  {
    key: "fleet",
    name: "FLEET",
    tag: "20+ BAYS · MULTI-LOCATION",
    perBay: 89,
    features: [
      [true, "Everything in Standard"],
      [true, "Unlimited locations"],
      [true, "API · webhooks · SSO"],
      [true, "Custom reporting · DOT 396.11"],
      [true, "Named CSM · onboarding"],
      [true, "On-premise option"],
    ],
  },
];

export const ANNUAL_DISCOUNT = 0.83; // 17% off

// Pure pricing math, extracted so it is unit-testable later.
export function calcPrice(
  perBay: number,
  bays: number,
  cycle: "monthly" | "annual",
): number {
  const monthly = perBay * bays * (cycle === "annual" ? ANNUAL_DISCOUNT : 1);
  return Math.round(monthly);
}
