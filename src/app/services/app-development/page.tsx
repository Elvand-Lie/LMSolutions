import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "App Development — Solaris Collective",
  description:
    "Native iOS, native Android, or cross-platform with React Native. We design, build, submit, and support your mobile app.",
};

export default function AppDevelopmentPage() {
  return (
    <ServicePageTemplate
      kicker="APP DEVELOPMENT"
      headline="Mobile apps, shipped to both stores."
      limeText="shipped to both stores."
      subhead="Native iOS, native Android, or cross-platform with React Native — we'll recommend the right approach for your audience and budget. Then we design, build, submit, and support the whole thing."
      includes={[
        "Platform strategy recommendation (native vs cross-platform)",
        "UI/UX design for iOS and Android conventions",
        "Full app development and testing",
        "App Store and Google Play submission",
        "Push notifications and backend API integration",
        "Full documentation and code handover",
        "Post-launch support and bug fixes",
      ]}
      idealFor="Businesses that need a mobile presence — whether that's a customer-facing app, an internal field tool, or a companion to an existing web product. If your users are on their phones and your current solution isn't, this is the service."
      techBadges={["React Native", "Swift", "Kotlin", "Expo", "Flutter", "TypeScript", "Node.js", "Supabase"]}
      pricingNote="Mobile app projects are scoped individually. Most start from $14,500 for a single-platform MVP."
    />
  );
}
