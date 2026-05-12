import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Section";

export const metadata: Metadata = {
  title: "Pricing — LM Solutions",
  description:
    "Clear pricing, no surprises. Indicative starting points for websites, custom software, AI automation, and mobile apps.",
};

const tiers = [
  {
    name: "Starter",
    price: "From $4,800",
    forLine: "Founders and small teams who need to launch something credible, fast.",
    features: [
      "Marketing website (up to 8 pages)",
      "Mobile-responsive design",
      "CMS so you can edit content yourself",
      "SEO foundations",
      "30 days post-launch support",
    ],
    buttonText: "Choose Starter",
    buttonHref: "/contact?plan=starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "From $14,500",
    forLine: "Established teams ready to replace manual work with custom tools or AI.",
    features: [
      "Custom web app or AI workflow",
      "User accounts and admin dashboard",
      "Integration with your existing tools",
      "Full documentation handover",
      "90 days post-launch support",
      "Two rounds of refinement built in",
    ],
    buttonText: "Choose Growth",
    buttonHref: "/contact?plan=growth",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Custom",
    price: "Let's talk",
    forLine: "Multi-platform builds, complex integrations, or anything outside the boxes above.",
    features: [
      "Scoped to your project — no fixed template",
      "Mobile + web + backend as needed",
      "Dedicated project lead",
      "Ongoing partnership available",
      "SLA-backed support options",
    ],
    buttonText: "Start a Conversation",
    buttonHref: "/contact?plan=custom",
    highlighted: false,
  },
];

const comparisonFeatures = [
  { name: "Responsive design", starter: true, growth: true, custom: true },
  { name: "CMS integration", starter: true, growth: true, custom: true },
  { name: "SEO foundations", starter: true, growth: true, custom: true },
  { name: "Custom UI/UX design", starter: true, growth: true, custom: true },
  { name: "User accounts & auth", starter: false, growth: true, custom: true },
  { name: "Admin dashboard", starter: false, growth: true, custom: true },
  { name: "Third-party integrations", starter: false, growth: true, custom: true },
  { name: "AI/automation workflows", starter: false, growth: true, custom: true },
  { name: "Mobile app (iOS/Android)", starter: false, growth: false, custom: true },
  { name: "Dedicated project lead", starter: false, growth: false, custom: true },
  { name: "SLA-backed support", starter: false, growth: false, custom: true },
  { name: "Post-launch support", starter: "30 days", growth: "90 days", custom: "Custom" },
  { name: "Refinement rounds", starter: "1", growth: "2", custom: "Unlimited" },
  { name: "Full documentation", starter: true, growth: true, custom: true },
  { name: "Code ownership", starter: true, growth: true, custom: true },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-lm-slate">{value}</span>;
  }
  return value ? (
    <Check size={18} className="text-lm-lime-dark mx-auto" />
  ) : (
    <Minus size={18} className="text-lm-muted/40 mx-auto" />
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-lm max-w-3xl">
          <p className="kicker mb-4">PRICING</p>
          <h1>
            Clear pricing.{" "}
            <span className="lime-accent">No&nbsp;surprises.</span>
          </h1>
          <p className="mt-5 text-lm-slate text-lg leading-relaxed">
            These are starting points, not ceilings. Every quote we send is
            itemised, fixed, and stays fixed unless the scope changes — in which
            case we tell you before doing the&nbsp;work.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-lm-bg-alt">
        <div className="container-lm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <div className="relative h-full flex flex-col">
                  {tier.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-lm-lime text-lm-charcoal text-xs font-semibold rounded-md z-10">
                      {tier.badge}
                    </span>
                  )}
                  <div
                    className={`flex-1 flex flex-col p-7 rounded-xl border-2 transition-colors duration-200 ${
                      tier.highlighted
                        ? "border-lm-lime bg-white"
                        : "border-lm-border bg-white hover:border-lm-lime/40"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                    <p className="text-2xl font-bold text-lm-charcoal mb-3">{tier.price}</p>
                    <p className="text-sm text-lm-slate mb-6">{tier.forLine}</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-lm-slate">
                          <Check size={16} className="text-lm-lime-dark mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={tier.buttonHref}
                      className={`inline-flex items-center justify-center w-full py-3.5 font-semibold text-sm rounded-lg transition-colors duration-200 ${
                        tier.highlighted
                          ? "bg-lm-lime text-lm-charcoal hover:bg-lm-lime-dark"
                          : "bg-white text-lm-charcoal border-[1.5px] border-lm-charcoal hover:border-lm-lime-dark"
                      }`}
                    >
                      {tier.buttonText}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-lm">
          <Reveal>
            <h2 className="text-center mb-10">Feature comparison</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-lm-border">
                    <th className="py-4 pr-4 text-sm font-semibold text-lm-charcoal">Feature</th>
                    <th className="py-4 px-4 text-sm font-semibold text-lm-charcoal text-center">Starter</th>
                    <th className="py-4 px-4 text-sm font-semibold text-lm-charcoal text-center">Growth</th>
                    <th className="py-4 px-4 text-sm font-semibold text-lm-charcoal text-center">Custom</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature) => (
                    <tr key={feature.name} className="border-b border-lm-border">
                      <td className="py-3.5 pr-4 text-sm text-lm-slate">{feature.name}</td>
                      <td className="py-3.5 px-4 text-center"><FeatureCell value={feature.starter} /></td>
                      <td className="py-3.5 px-4 text-center"><FeatureCell value={feature.growth} /></td>
                      <td className="py-3.5 px-4 text-center"><FeatureCell value={feature.custom} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 text-sm text-lm-muted text-center max-w-2xl mx-auto">
              Prices are indicative starting points in USD. Final quotes are
              fixed and itemised after a 30-minute scoping call. Third-party
              costs (domains, hosting, paid APIs) are not included and will be
              communicated upfront.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
