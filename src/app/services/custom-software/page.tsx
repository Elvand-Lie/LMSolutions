import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Custom Software — LM Solutions",
  description:
    "Internal tools, dashboards, and platforms built around how your team actually works. Custom software development for growing businesses.",
};

export default function CustomSoftwarePage() {
  return (
    <ServicePageTemplate
      kicker="CUSTOM SOFTWARE"
      headline="Tools shaped around your team."
      limeText="your team."
      subhead="Stop forcing your business to fit someone else's product. We build internal tools, dashboards, and platforms designed around the work you actually do — and the way you actually do it."
      includes={[
        "Discovery session and one-page scope document",
        "Custom UI/UX design tailored to your workflows",
        "Full-stack development with modern frameworks",
        "Admin dashboard and user management",
        "Integration with your existing tools and APIs",
        "Full documentation and code handover",
        "Post-launch support window",
      ]}
      idealFor="Teams that have outgrown spreadsheets and off-the-shelf SaaS but don't have the in-house engineering capacity to build what they actually need. If your team is working around your tools instead of with them, this is the service."
      techBadges={["Next.js", "React", "Node.js", "PostgreSQL", "TypeScript", "Supabase", "AWS", "Docker"]}
      pricingNote="Custom software projects typically start from $14,500. Final pricing depends on scope, integrations, and timeline."
    />
  );
}
