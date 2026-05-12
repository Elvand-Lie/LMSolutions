import { Hero } from "@/components/home/Hero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Capabilities } from "@/components/home/Capabilities";
import { WhyLM } from "@/components/home/WhyLM";
import { PricingTeaser } from "@/components/home/PricingTeaser";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { FAQ } from "@/components/home/FAQ";
import { CTABand } from "@/components/CTABand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Capabilities />
      <WhyLM />
      <PricingTeaser />
      <ProcessTimeline />
      <FAQ />
      <CTABand />
    </>
  );
}
