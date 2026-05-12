"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section, SectionHeader, Reveal } from "../Section";

const steps = [
  { number: "01", title: "Discover", description: "We get on a call, dig into the actual problem, and write a one-page scope. You'll know what you're getting and what it costs before we touch a keyboard." },
  { number: "02", title: "Design", description: "We mock up the key screens and flows so you can see it before we build it. Fewer surprises later, faster sign-off now." },
  { number: "03", title: "Build", description: "We ship in weekly increments. You see progress every week, not a black box for three months. Feedback gets folded in as we go." },
  { number: "04", title: "Launch & Support", description: "We deploy, hand over the keys, and stay on for the support window. Bugs, tweaks, small additions: all covered." },
];

function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 origin-top" style={{ background: "oklch(0.88 0.06 120)", transform: isInView ? "scaleY(1)" : "scaleY(0)", transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)", transformOrigin: "top" }} />
  );
}

function TimelineNode({ number, delay }: { number: string; delay: number }) {
  return (
    <motion.div
      className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", duration: 0.5, bounce: 0, delay }}
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold tabular-nums" style={{ background: "oklch(0.82 0.18 120)", color: "oklch(0.22 0.015 120)", boxShadow: "0 0 0 6px var(--lm-bg), var(--shadow-md)" }}>
        {number}
      </div>
    </motion.div>
  );
}

export function ProcessTimeline() {
  return (
    <Section>
      <SectionHeader kicker="HOW WE WORK" headline="A short, predictable path from idea to live." limeText="predictable path" />

      <div className="relative max-w-3xl mx-auto">
        <TimelineLine />

        <div className="space-y-14 md:space-y-20">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <TimelineNode number={step.number} delay={i * 0.1} />
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-lm-slate leading-relaxed">{step.description}</p>
                </div>
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
