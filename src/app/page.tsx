import { Hero } from "@/components/sections/Hero";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { CtcScoreSection } from "@/components/sections/CtcScoreSection";
import { MonthlySprintSection } from "@/components/sections/MonthlySprintSection";
import { InfrastructureStrip } from "@/components/sections/InfrastructureStrip";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <EcosystemSection />
      <CtcScoreSection />
      <MonthlySprintSection />
      <InfrastructureStrip />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
