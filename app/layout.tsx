import "./globals.css";
import "@fontsource-variable/inter/index.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import "@fontsource-variable/archivo/index.css";
import "@fontsource/archivo-black/400.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechbuk — Workshop Operating System for Truck & Auto Repair",
  description:
    "Mechbuk is the workshop operating system for commercial truck and auto repair. Track job cards, parts, and labour hours across every bay — from work order open to invoice closed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
