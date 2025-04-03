import React from "react";
import Image from "next/image";
import CaleidoscopHeroSectionDemo from "@/components/sections/caleidoscop-hero";
import Quote from "@/components/sections/quote-section";
import { InterestsSection } from "@/components/sections/interests-section";
import DreamSection from "@/components/sections/dream-section";
import BannerSection from "@/components/sections/banner-section";

export default function Page() {
  return (
    // <div className="min-h-screen">
    //   <div className="flex h-[70vh] w-full flex-col items-center justify-center gap-8">
    //     <p>Still in Development Desuwa!</p>
    //     <Image src="/assets/seeya.gif" width={250} height={250} alt="SeeYa" />
    //     <p>Latest Update: 3/30/25</p>
    //   </div>
    // </div>
    <div className="min-h-screen">
      <CaleidoscopHeroSectionDemo />
      <Quote />
      <BannerSection />
      <DreamSection />
      <InterestsSection />
    </div>
  );
}
