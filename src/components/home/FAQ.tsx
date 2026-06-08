"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader, Reveal } from "../Section";

const faqs = [
  { question: "How long does a typical project take?", answer: "Most marketing sites ship in 4\u20136 weeks. Custom apps and AI workflows usually run 8\u201312 weeks depending on scope. We give you a precise timeline after the discovery call, and we hit it. If something's going to slip, you'll know early, not on launch day." },
  { question: "What does the price actually include?", answer: "Everything needed to ship and run the project: design, build, testing, deployment, documentation, and a defined support window after launch. The only things not included are third-party costs you'd be paying anyway (domain, hosting, paid APIs), and we tell you about those upfront." },
  { question: "Do we own the code?", answer: "Yes. Fully. The repo is yours from day one, hosted on your GitHub account if you want. If we ever part ways, you walk away with everything: code, designs, documentation. No lock-in, no hostage situations." },
  { question: "What if our needs change mid-project?", answer: "That's normal. Most projects evolve as you see them taking shape. Small changes get folded in as we go. Bigger pivots get a quick conversation about scope and cost. No surprise invoices, ever." },
  { question: "Do you offer ongoing support after launch?", answer: "Yes, but it's optional. Every project includes a free support window (30 days for Starter, 90 days for Growth). After that, you can keep us on a monthly retainer for ongoing improvements, or hand it off entirely. Both are valid choices and we'll never push you toward one." },
  { question: "How do we get started?", answer: "Send us a message via the contact form or book a 30-minute discovery call. We'll talk through what you're building, ask the right questions, and follow up with a written scope and quote within two business days. No commitment until you sign." },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: (typeof faqs)[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid var(--lm-border)" }}>
      <button className="w-full flex items-center justify-between py-6 text-left group" onClick={onToggle} aria-expanded={isOpen}>
        <span className="text-base font-semibold text-lm-charcoal pr-4 group-hover:text-lm-amber-dark transition-colors duration-200">{faq.question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: "spring", duration: 0.35, bounce: 0 }} className="shrink-0 text-lm-muted">
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-lm-slate leading-relaxed text-[0.95rem] max-w-[65ch]">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section>
      <SectionHeader kicker="COMMON QUESTIONS" headline="Things people ask before getting started." limeText="before getting started." />
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <FAQItem faq={faq} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
