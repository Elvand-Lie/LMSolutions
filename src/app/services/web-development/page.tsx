import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Web Development — LM Solutions",
  description:
    "Marketing sites, web apps, and e-commerce — built on modern stacks, optimised for search, and easy for your team to update.",
};

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      kicker="WEB DEVELOPMENT"
      headline="Sites that load fast and convert."
      limeText="load fast and convert."
      subhead="Marketing sites, web apps, and e-commerce — built on modern stacks, optimised for search, and easy enough for your marketing team to update without calling a developer every week."
      includes={[
        "Custom responsive design (mobile-first)",
        "CMS integration so your team can edit content",
        "SEO foundations and technical optimisation",
        "Performance tuning (Lighthouse 95+ target)",
        "Contact forms with validation and email delivery",
        "Analytics integration (Plausible or GA4)",
        "30 days post-launch support",
      ]}
      idealFor="Founders and marketing teams who need a site that looks sharp, loads fast, ranks well, and doesn't require a developer every time you want to change a headline. Whether it's a new brand launch or a redesign of something outdated."
      techBadges={["Next.js", "React", "Astro", "Tailwind CSS", "TypeScript", "Vercel", "Sanity", "Notion API"]}
      pricingNote="Marketing websites start from $4,800. Web apps with custom functionality start from $14,500."
    />
  );
}
