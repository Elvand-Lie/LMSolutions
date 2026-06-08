"use client";

import { Section, SectionHeader, Reveal } from "../Section";

const reasons = [
  {
    number: "01",
    title: "Fast turnaround",
    description: "Most projects ship in weeks, not quarters. We scope tightly, build in clear phases, and don't disappear between updates.",
  },
  {
    number: "02",
    title: "Transparent pricing",
    description: "You see the full cost before we start. No surprise change orders, no padded line items, no hourly meters quietly running.",
  },
  {
    number: "03",
    title: "Built to scale",
    description: "Clean code, modern stacks, full documentation. Everything we build is yours to own, including if you ever bring it in-house.",
  },
];

export function WhyLM() {
  return (
    <Section padSize="lg">
      <SectionHeader
        kicker="WHY TEAMS CHOOSE SOLARIS COLLECTIVE"
        headline="Builders, not gatekeepers."
        limeText="not gatekeepers."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {reasons.map((reason, i) => (
          <Reveal key={reason.title} delay={i * 0.1}>
            <div className="p-8 md:p-10 h-full rounded-2xl" style={{ background: "var(--lm-bg-alt)" }}>
              <span className="block text-5xl md:text-6xl font-extrabold mb-5 tabular-nums" style={{ color: "oklch(0.82 0.18 70 / 0.25)", letterSpacing: "-0.03em" }}>
                {reason.number}
              </span>
              <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
              <p className="text-sm text-lm-slate leading-relaxed">{reason.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
