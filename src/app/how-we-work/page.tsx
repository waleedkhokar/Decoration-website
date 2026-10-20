import type { Metadata } from "next";
import Navbar from "@/components/how-we-work/Navbar";
import Marquee from "@/components/how-we-work/Marquee";
import Hero from "@/components/how-we-work/Hero";
import Steps from "@/components/how-we-work/Steps";
import FinalCta from "@/components/how-we-work/FinalCta";
import Footer from "@/components/how-we-work/Footer";
import HowWeWorkEffects from "@/components/how-we-work/Effects";

export const metadata: Metadata = {
  title: "Hasnain Decoration — How We Work",
  description: "How Hasnain Decoration works: you tell us your idea, we show you the plan, you see the full look, and we decorate your event by hand in Rawalpindi & Islamabad.",
};

export default function Page() {
  return (
    <>
      <Navbar />
        <Marquee />
        <Hero />
        <Steps />
        <FinalCta />
      <Footer />
      <HowWeWorkEffects />
    </>
  );
}
