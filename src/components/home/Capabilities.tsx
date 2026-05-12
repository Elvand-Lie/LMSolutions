"use client";

import { Section, SectionHeader, Reveal } from "../Section";

const capabilities = [
  {
    heading: "Frontend & Web",
    description: "Fast, accessible, SEO-friendly. We build with frameworks that load instantly and stay maintainable.",
    badges: ["Next.js", "React", "Astro", "Tailwind CSS", "TypeScript", "Vue"],
  },
  {
    heading: "Mobile Apps",
    description: "Native performance where it matters, cross-platform efficiency where it doesn't.",
    badges: ["React Native", "Swift", "Kotlin", "Expo", "Flutter"],
  },
  {
    heading: "Backend & Infrastructure",
    description: "Reliable APIs, clean databases, predictable deployments. The foundation your product runs on.",
    badges: ["Node.js", "Python", "PostgreSQL", "AWS", "Vercel", "Supabase", "Docker"],
  },
  {
    heading: "AI & Automation",
    description: "Production-grade AI workflows, not demos. We integrate the models that fit your use case.",
    badges: ["OpenAI", "Anthropic Claude", "LangChain", "n8n", "Zapier", "Vector DBs", "Custom RAG"],
  },
];

const ruleWidths = ["w-10", "w-8", "w-12", "w-6"];

export function Capabilities() {
  return (
    <Section alt>
      <SectionHeader
        kicker="OUR STACK"
        headline="Modern tools, chosen on purpose."
        limeText="chosen on purpose."
        subhead="We pick what's stable, well-supported, and right for the job, so what we ship today still runs cleanly five years from now."
      />
      <div className="space-y-14 md:space-y-20">
        {capabilities.map((cap, i) => (
          <Reveal key={cap.heading} delay={i * 0.06}>
            <div className={`flex flex-col md:flex-row gap-6 md:gap-14 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-2/5 shrink-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-block ${ruleWidths[i]} h-0.5 rounded-full`} style={{ background: "oklch(0.82 0.18 120)" }} />
                  <h3 className="text-xl font-bold">{cap.heading}</h3>
                </div>
                <p className="text-lm-slate leading-relaxed">{cap.description}</p>
              </div>
              <div className="md:flex-1 flex flex-wrap gap-2.5">
                {cap.badges.map((badge) => (
                  <span key={badge} className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg cursor-default transition-all duration-200 hover:-translate-y-px" style={{ background: "oklch(0.97 0.01 120)", boxShadow: "var(--shadow-sm)", color: "oklch(0.28 0.015 120)" }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <p className="mt-20 text-center text-lm-slate text-sm md:text-base max-w-xl mx-auto">
          Whether you need one of these or all of them, we&rsquo;ll scope what&rsquo;s right, not what&rsquo;s billable.
        </p>
      </Reveal>
    </Section>
  );
}
