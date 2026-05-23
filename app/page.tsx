import { Nav } from "@/components/organisms/Nav";
import { Hero } from "@/components/organisms/Hero";
import { Features } from "@/components/organisms/Features";
import { JobDemo } from "@/components/organisms/JobDemo";
import { ShopFloor } from "@/components/organisms/ShopFloor";
import { Pricing } from "@/components/organisms/Pricing";
import { Changelog } from "@/components/organisms/Changelog";
import { Footer } from "@/components/organisms/Footer";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <JobDemo />
      <ShopFloor />
      <Pricing />
      <Changelog />
      <Footer />
    </>
  );
}
