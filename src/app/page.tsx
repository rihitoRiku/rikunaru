import React from "react";
import Image from "next/image";
import CaleidoscopHeroSectionDemo from "@/components/sections/caleidoscop-hero";
import Quote from "@/components/sections/quote-section";
import { InterestsSection } from "@/components/sections/interests-section";
import DreamSection from "@/components/sections/dream-section";
import MonolosofisBannerSection from "@/components/sections/monolosofis-banner-section";
import DiscordBannerSection from "@/components/sections/discord-banner-section";
import MediumBlogSection from "@/components/sections/medium-blog-section";
import CaleidoscopNote from "@/components/sections/caleidoscop-note";

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
      {/* <Quote /> */}
      <CaleidoscopNote />
      {/* <DreamSection /> */}
      {/* <MonolosofisBannerSection /> */}
      {/* <MediumBlogSection /> */}
      {/* <InterestsSection /> */}
      {/* <DiscordBannerSection /> */}
    </div>
  );
}
