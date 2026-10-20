import type { Metadata } from "next";
import Navbar from "@/components/our-work/Navbar";
import PageHero from "@/components/our-work/PageHero";
import Showcase from "@/components/our-work/Showcase";
import PhoneShowcase from "@/components/our-work/PhoneShowcase";
import Gallery from "@/components/our-work/Gallery";
import Reviews from "@/components/our-work/Reviews";
import FinalCta from "@/components/our-work/FinalCta";
import Footer from "@/components/our-work/Footer";
import Lightbox from "@/components/our-work/Lightbox";
import OurWorkEffects from "@/components/our-work/Effects";

export const metadata: Metadata = {
  title: "Our Work — Hasnain Decoration | Wedding & Event Decoration in Rawalpindi & Islamabad",
  description: "Our Work — Hasnain Decoration. See wedding stages, mehndi, walima, birthday and milad decoration and home lights in Rawalpindi & Islamabad. Before and after photos, real family reviews. Decorated by Jamil, 15 years of experience.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="top">
        <PageHero />
        <Showcase />
        <PhoneShowcase />
        <Gallery />
        <Reviews />
        <FinalCta />
      </main>
      <Footer />
      <Lightbox />
      <OurWorkEffects />
    </>
  );
}
