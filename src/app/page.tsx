import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Philosophy } from "@/components/sections/Philosophy";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Trust } from "@/components/sections/Trust";
import { Process } from "@/components/sections/Process";
import { Studio } from "@/components/sections/Studio";
import { Insights } from "@/components/sections/Insights";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <Philosophy />
        <WhatWeDo />
        <CaseStudy />
        <Trust />
        <Process />
        <Studio />
        <Insights />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
