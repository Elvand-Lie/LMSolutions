"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Section";

export function CTABand() {
  return (
    <section className="relative overflow-hidden" style={{ background: "oklch(0.82 0.18 120)" }}>
      {/* Subtle grain overlay */}
      <div className="grain absolute inset-0" />

      {/* Atmospheric glow layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 60% 100% at 80% 0%, oklch(0.88 0.22 120 / 0.4), transparent 60%)",
            "radial-gradient(ellipse 40% 80% at 15% 100%, oklch(0.72 0.19 120 / 0.3), transparent 50%)",
          ].join(", "),
        }}
      />

      <div className="container-lm relative z-10 py-24 md:py-32">
        <Reveal>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div>
              <h2
                className="text-lm-charcoal font-bold max-w-[18ch]"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}
              >
                Ready to build something that works?
              </h2>
              <p className="mt-4 text-lm-charcoal/65 text-base md:text-lg max-w-[42ch]">
                30-minute call. No pitch deck. Just the right questions.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-lm-charcoal text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shrink-0"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              Start a Conversation
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
