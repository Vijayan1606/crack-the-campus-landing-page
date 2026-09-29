import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { MonthlySprintSection } from "@/components/sections/MonthlySprintSection";
import { CtcScoreSection } from "@/components/sections/CtcScoreSection";
import { InfrastructureStrip } from "@/components/sections/InfrastructureStrip";
import { FaqSection } from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <EcosystemSection />
      <MonthlySprintSection />
      <CtcScoreSection />
      <InfrastructureStrip />
      <FaqSection />
    </>
  );
}
