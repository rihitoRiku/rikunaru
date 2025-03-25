import EducationSection from "@/components/sections/education-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import SignatureSection from "@/components/sections/signature-section";
import TechstacksSection from "@/components/sections/techstacks-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SignatureSection />
      <TechstacksSection />
      <EducationSection />
      <ExperienceSection />
    </div>
  );
}
