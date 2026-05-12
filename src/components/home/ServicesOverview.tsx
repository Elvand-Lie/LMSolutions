"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader, Reveal } from "../Section";

const services = [
  {
    number: "01",
    title: "Custom Software",
    description:
      "Internal tools, dashboards, and platforms built around how your team actually works.",
    href: "/services/custom-software",
  },
  {
    number: "02",
    title: "AI & Automation",
    description:
      "Practical AI that removes the repetitive work so your team can focus on what needs a human.",
    href: "/services/ai-automation",
  },
  {
    number: "03",
    title: "Web Development",
    description:
      "Marketing sites, web apps, and e-commerce. Fast, ranked well, and easy for your team to update.",
    href: "/services/web-development",
  },
  {
    number: "04",
    title: "App Development",
    description:
      "Native and cross-platform mobile apps. Designed once, built right, shipped to both stores.",
    href: "/services/app-development",
  },
];

export function ServicesOverview() {
  return (
    <Section alt padSize="lg">
      <SectionHeader
        kicker="WHAT WE BUILD"
        headline="Four capabilities, one team."
        limeText="one team."
        subhead="From a quick-turnaround marketing site to a full custom platform, we cover the build, not just the pretty parts."
      />

      {/* Asymmetric grid: featured service full-width, then 2+1 layout */}
      <div className="space-y-5">
        {/* Featured service: full width with asymmetric internal layout */}
        <Reveal>
          <Link href={services[0].href} className="group block">
            <div
              className="relative overflow-hidden rounded-2xl p-8 md:p-10 lg:p-12 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, oklch(0.97 0.02 120), oklch(0.99 0.005 120))",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
                <div>
                  <span
                    className="block text-5xl font-bold mb-4 tabular-nums"
                    style={{ color: "oklch(0.82 0.18 120 / 0.35)" }}
                  >
                    {services[0].number}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{services[0].title}</h3>
                  <p className="text-lm-slate leading-relaxed max-w-[40ch]">
                    {services[0].description}
                  </p>
                </div>
                <div className="flex md:justify-end">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-lm-charcoal group-hover:text-lm-lime-dark transition-colors duration-200">
                    Learn more
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1.5"
                    />
                  </span>
                </div>
              </div>

              {/* Hover shadow transition */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "var(--shadow-md)" }}
              />
            </div>
          </Link>
        </Reveal>

        {/* Remaining services: 2+1 asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* First two: 7+5 split */}
          <Reveal delay={0.08} className="md:col-span-7">
            <Link href={services[1].href} className="group block h-full">
              <div
                className="h-full p-7 md:p-8 rounded-2xl transition-all duration-300 group-hover:-translate-y-0.5"
                style={{
                  background: "var(--lm-bg)",
                  boxShadow: "var(--shadow-sm)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)"; }}
              >
                <span
                  className="block text-4xl font-bold mb-4 tabular-nums"
                  style={{ color: "oklch(0.82 0.18 120 / 0.30)" }}
                >
                  {services[1].number}
                </span>
                <h3 className="text-lg font-bold mb-2">{services[1].title}</h3>
                <p className="text-sm text-lm-slate leading-relaxed mb-5">
                  {services[1].description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-lm-charcoal group-hover:text-lm-lime-dark transition-colors duration-200">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.16} className="md:col-span-5">
            <Link href={services[2].href} className="group block h-full">
              <div
                className="h-full p-7 md:p-8 rounded-2xl transition-all duration-300 group-hover:-translate-y-0.5"
                style={{
                  background: "var(--lm-bg)",
                  boxShadow: "var(--shadow-sm)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)"; }}
              >
                <span
                  className="block text-4xl font-bold mb-4 tabular-nums"
                  style={{ color: "oklch(0.82 0.18 120 / 0.30)" }}
                >
                  {services[2].number}
                </span>
                <h3 className="text-lg font-bold mb-2">{services[2].title}</h3>
                <p className="text-sm text-lm-slate leading-relaxed mb-5">
                  {services[2].description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-lm-charcoal group-hover:text-lm-lime-dark transition-colors duration-200">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Last service spans full width of the remaining row */}
          <Reveal delay={0.24} className="md:col-span-12">
            <Link href={services[3].href} className="group block">
              <div
                className="p-7 md:p-8 rounded-2xl transition-all duration-300 group-hover:-translate-y-0.5"
                style={{
                  background: "var(--lm-bg)",
                  boxShadow: "var(--shadow-sm)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)"; }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-center">
                  <span
                    className="text-4xl font-bold tabular-nums"
                    style={{ color: "oklch(0.82 0.18 120 / 0.30)" }}
                  >
                    {services[3].number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{services[3].title}</h3>
                    <p className="text-sm text-lm-slate leading-relaxed">
                      {services[3].description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-lm-charcoal group-hover:text-lm-lime-dark transition-colors duration-200">
                    Learn more
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
