"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Section, SectionHeader, Reveal } from "../Section";

const tiers = [
  {
    name: "Starter",
    price: "From $4,800",
    forLine: "Founders and small teams who need to launch something credible, fast.",
    features: ["Marketing website (up to 8 pages)", "Mobile-responsive design", "CMS so you can edit content yourself", "SEO foundations", "30 days post-launch support"],
    buttonText: "Choose Starter",
    buttonHref: "/contact?plan=starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "From $14,500",
    forLine: "Established teams ready to replace manual work with custom tools or AI.",
    features: ["Custom web app or AI workflow", "User accounts and admin dashboard", "Integration with your existing tools", "Full documentation handover", "90 days post-launch support", "Two rounds of refinement built in"],
    buttonText: "Choose Growth",
    buttonHref: "/contact?plan=growth",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Custom",
    price: "Let\u2019s talk",
    forLine: "Multi-platform builds, complex integrations, or anything outside the boxes above.",
    features: ["Scoped to your project", "Mobile + web + backend as needed", "Dedicated project lead", "Ongoing partnership available", "SLA-backed support options"],
    buttonText: "Start a Conversation",
    buttonHref: "/contact?plan=custom",
    highlighted: false,
  },
];

export function PricingTeaser() {
  return (
    <Section alt padSize="lg">
      <SectionHeader
        kicker="PACKAGES"
        headline="Pricing that fits your stage."
        limeText="fits your stage."
        subhead="Indicative starting points. Most projects land somewhere in these ranges. We quote the exact figure after a 30-minute scoping call."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {tiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.1}>
            <div className="relative h-full flex flex-col">
              {tier.badge && (
                <span className="absolute -top-3.5 left-6 px-4 py-1.5 text-xs font-bold rounded-lg z-10" style={{ background: "oklch(0.82 0.18 70)", color: "oklch(0.22 0.015 70)" }}>
                  {tier.badge}
                </span>
              )}
              <div
                className={`flex-1 flex flex-col p-7 md:p-8 rounded-2xl transition-all duration-300 ${tier.highlighted ? "md:-translate-y-3" : "hover:-translate-y-1"}`}
                style={{
                  background: "var(--lm-bg)",
                  boxShadow: tier.highlighted ? "var(--shadow-lg), 0 0 0 2px oklch(0.82 0.18 70)" : "var(--shadow-sm)",
                }}
                onMouseEnter={(e) => { if (!tier.highlighted) (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)"; }}
                onMouseLeave={(e) => { if (!tier.highlighted) (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)"; }}
              >
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-2xl md:text-3xl font-extrabold text-lm-charcoal mb-3 tabular-nums" style={{ letterSpacing: "-0.02em" }}>{tier.price}</p>
                <p className="text-sm text-lm-slate mb-6 leading-relaxed">{tier.forLine}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-lm-slate">
                      <Check size={16} className="text-lm-amber-dark mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={tier.buttonHref} className={tier.highlighted ? "btn-primary w-full text-center" : "btn-secondary w-full text-center"}>
                  {tier.buttonText}
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <div className="mt-14 text-center">
          <Link href="/pricing" className="group inline-flex items-center gap-2 text-sm font-medium text-lm-charcoal hover:text-lm-amber-dark transition-colors">
            See full pricing breakdown
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
