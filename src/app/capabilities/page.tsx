import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Section";

export const metadata: Metadata = {
  title: "Capabilities — Solaris Collective",
  description:
    "Our tech stack and how we choose tools. Frontend, mobile, backend, and AI — every project gets the right stack, not the trendy one.",
};

const stacks = [
  {
    heading: "Frontend & Web",
    description:
      "Fast, accessible, SEO-friendly. We build with frameworks that load instantly and stay maintainable.",
    expanded:
      "We default to Next.js for most web projects because it handles static and dynamic content equally well, has excellent SEO capabilities, and deploys with zero configuration. For content-heavy sites with minimal interactivity, Astro is our alternative — it ships less JavaScript and loads faster. Tailwind CSS handles styling because it maps directly to design tokens and keeps our CSS predictable across a team. TypeScript is non-negotiable; the upfront cost pays for itself in fewer bugs and easier handovers.",
    badges: ["Next.js", "React", "Astro", "Tailwind CSS", "TypeScript", "Vue"],
  },
  {
    heading: "Mobile Apps",
    description:
      "Native performance where it matters, cross-platform efficiency where it doesn't. We help you choose the right approach before we build.",
    expanded:
      "React Native is our default for cross-platform because our team already thinks in React, which means faster delivery and a single codebase for both platforms. When an app needs deep OS integration — advanced camera work, complex animations, Bluetooth — we go native with Swift (iOS) or Kotlin (Android). We'll always recommend the approach that fits your budget and your users, not the one that's easiest for us.",
    badges: ["React Native", "Swift", "Kotlin", "Expo", "Flutter"],
  },
  {
    heading: "Backend & Infrastructure",
    description:
      "Reliable APIs, clean databases, predictable deployments. The foundation your product runs on.",
    expanded:
      "Node.js and Python cover most of our backend work. Node for real-time, event-driven services that pair naturally with our frontend stack; Python for data-heavy workflows and AI integrations. PostgreSQL is our default database — it's battle-tested, well-documented, and handles everything from simple CRUD to complex analytics. We deploy on Vercel for frontend-heavy projects and AWS for anything that needs more infrastructure control. Supabase gives us a fast path to auth, storage, and real-time features without building from scratch.",
    badges: ["Node.js", "Python", "PostgreSQL", "AWS", "Vercel", "Supabase", "Docker"],
  },
  {
    heading: "AI & Automation",
    description:
      "Production-grade AI workflows, not demos. We integrate with the models that fit your use case and keep your data where it should be.",
    expanded:
      "We work primarily with OpenAI and Anthropic Claude for language tasks, choosing based on the specific use case — speed, accuracy, cost, or context window requirements. LangChain helps us build reliable chains and agents. For workflow automation, n8n and Zapier connect your existing tools without custom code. When a project needs retrieval-augmented generation (RAG), we set up vector databases and custom pipelines that keep your proprietary data secure and your AI responses grounded in facts, not hallucinations.",
    badges: ["OpenAI", "Anthropic Claude", "LangChain", "n8n", "Zapier", "Vector DBs", "Custom RAG"],
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-lm max-w-3xl">
          <p className="kicker mb-4">CAPABILITIES</p>
          <h1>
            How we <span className="lime-accent">choose&nbsp;tools.</span>
          </h1>
          <p className="mt-5 text-lm-slate text-lg leading-relaxed">
            Every project is different. The stack should serve the project, not
            the other way around. Here&rsquo;s what we work with, and how we
            decide what&nbsp;fits.
          </p>
        </div>
      </section>

      {/* Expanded sub-sections */}
      {stacks.map((stack, i) => (
        <section
          key={stack.heading}
          className={`section-padding ${i % 2 === 0 ? "bg-lm-bg-alt" : "bg-white"}`}
        >
          <div className="container-lm max-w-3xl">
            <Reveal>
              <h2 className="mb-3">{stack.heading}</h2>
              <p className="text-lm-slate font-medium mb-4">{stack.description}</p>
              <p className="text-lm-slate leading-relaxed mb-6">{stack.expanded}</p>
              <div className="flex flex-wrap gap-2">
                {stack.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center px-3.5 py-1.5 text-sm text-lm-charcoal bg-white border border-lm-border rounded-md hover:border-lm-lime-dark transition-colors duration-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <CTABand />
    </>
  );
}
