import { Nav } from "@/components/organisms/Nav";
import { Hero } from "@/components/organisms/Hero";
import { Features } from "@/components/organisms/Features";
import { JobDemo } from "@/components/organisms/JobDemo";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <JobDemo />
    </>
  );
}
