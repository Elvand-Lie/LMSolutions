import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Section";

export const metadata: Metadata = {
  title: "About — LM Solutions",
  description:
    "A senior tech team that ships clean. We started LM because small businesses deserve custom software that actually fits.",
};

const values = [
  {
    title: "Ship over polish.",
    description: "A working product in your hands beats a perfect mockup on ours.",
  },
  {
    title: "Plain language.",
    description: "If we can't explain it without jargon, we don't fully understand it yet.",
  },
  {
    title: "Your code, your call.",
    description: "You own everything from day one. We're partners, not landlords.",
  },
  {
    title: "Fewer, deeper.",
    description: "We take on fewer projects so each one gets real attention.",
  },
];

const team = [
  { initials: "EV", name: "Elvand", role: "Lead Developer" },
  { initials: "LM", name: "LM", role: "Co-founder" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-lm max-w-3xl">
          <p className="kicker mb-4">ABOUT LM</p>
          <h1>
            A senior team that{" "}
            <span className="lime-accent">ships&nbsp;clean.</span>
          </h1>
          <p className="mt-5 text-lm-slate text-lg leading-relaxed">
            We started LM because we kept seeing the same problem: small
            businesses being sold software that didn&rsquo;t fit, by vendors
            that didn&rsquo;t listen. We built the team we wished existed —
            fast, transparent, and genuinely on your&nbsp;side.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-lm-bg-alt">
        <div className="container-lm max-w-3xl text-center">
          <Reveal>
            <blockquote className="text-xl md:text-2xl font-semibold text-lm-charcoal leading-relaxed">
              We exist to make custom-built software accessible to teams who
              were told it wasn&rsquo;t for them. No bloated agency overhead, no
              SaaS-shaped compromises — just clean tools, built around how you
              actually&nbsp;work.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-lm">
          <Reveal>
            <h2 className="text-center mb-12">What we believe</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="p-6 bg-lm-card border border-lm-border rounded-xl">
                  <h3 className="text-base font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-lm-slate leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-lm-bg-alt">
        <div className="container-lm">
          <Reveal>
            <h2 className="text-center mb-12">The team</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-10">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-lm-lime flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl font-bold">
                      {member.initials}
                    </span>
                  </div>
                  <p className="font-semibold text-lm-charcoal">{member.name}</p>
                  <p className="text-sm text-lm-muted">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
