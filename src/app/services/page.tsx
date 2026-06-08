import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Sparkles, Globe, Smartphone } from "lucide-react";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Services — Solaris Collective",
  description:
    "Custom software, AI & automation, web development, and mobile app development. See what we build for growing teams.",
};

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Internal tools, dashboards, and platforms built around how your team actually works — not how some SaaS thinks you should.",
    href: "/services/custom-software",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description:
      "Practical AI that earns its keep. We automate the repetitive work so your team can focus on the parts that actually need a human.",
    href: "/services/ai-automation",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Marketing sites, web apps, and e-commerce — built fast, ranked well, and easy for your team to update.",
    href: "/services/web-development",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Designed once, built right, shipped to both stores.",
    href: "/services/app-development",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-lm">
          <p className="kicker mb-4">WHAT WE BUILD</p>
          <h1>
            Four capabilities.{" "}
            <span className="lime-accent">One&nbsp;team.</span>
          </h1>
          <p className="mt-4 text-lm-slate text-lg max-w-2xl leading-relaxed">
            From a quick-turnaround marketing site to a full custom platform — we
            cover the full build, not just the pretty&nbsp;parts.
          </p>
        </div>
      </section>

      <section className="section-padding bg-lm-bg-alt">
        <div className="container-lm grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.href} href={service.href} className="group block">
                <div className="h-full p-8 bg-white border border-lm-border rounded-xl hover:border-lm-amber-dark hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-14 h-14 rounded-lg bg-lm-card flex items-center justify-center mb-6">
                    <Icon size={28} className="text-lm-charcoal" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-bold mb-3">{service.title}</h2>
                  <p className="text-lm-slate leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-sm font-semibold text-lm-charcoal group-hover:text-lm-amber-dark transition-colors inline-flex items-center gap-1">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CTABand />
    </>
  );
}
