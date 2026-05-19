import "./globals.css";
import "@fontsource-variable/inter/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechbuk — Workshop repair, end to end",
  description:
    "Run vehicle and loose-component repairs from check-in to handover. One job card, four surfaces — service desk, technician PWA, customer portal, fleet portal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
