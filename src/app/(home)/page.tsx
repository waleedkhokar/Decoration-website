import type { Metadata } from "next";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import HappyDays from "@/components/home/HappyDays";
import BeforeAfter from "@/components/home/BeforeAfter";
import Services from "@/components/home/Services";
import PhoneShowcase from "@/components/home/PhoneShowcase";
import Moments from "@/components/home/Moments";
import ParallaxBreak from "@/components/home/ParallaxBreak";
import TrustedHands from "@/components/home/TrustedHands";
import Reviews from "@/components/home/Reviews";
import Faq from "@/components/home/Faq";
import Visit from "@/components/home/Visit";
import FinalCta from "@/components/home/FinalCta";
import Footer from "@/components/home/Footer";
import Lightbox from "@/components/home/Lightbox";
import HomeEffects from "@/components/home/Effects";

export const metadata: Metadata = {
  title: "Hasnain Decoration — Weddings, Birthdays & Events in Rawalpindi & Islamabad",
  description: "Hasnain Decoration — wedding stage, marriage, mehndi, walima, dholki, birthday and milad decoration, plus home lights, in Rawalpindi & Islamabad. Decorated personally by Muhammad Jamil Bhatti, 15 years of experience.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Marquee />
        <HappyDays />
        <BeforeAfter />
        <Services />
        <PhoneShowcase />
        <Moments />
        <ParallaxBreak />
        <TrustedHands />
        <Reviews />
        <Faq />
        <Visit />
        <FinalCta />
      </main>
      <Footer />
      <Lightbox />
      <HomeEffects />
    </>
  );
}
