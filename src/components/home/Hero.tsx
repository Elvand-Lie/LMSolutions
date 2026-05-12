"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const spring = { type: "spring" as const, duration: 0.6, bounce: 0 };

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-lm-bg min-h-[92vh] flex items-center">
      {/* Committed lime wash — 40% coverage, atmospheric */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 70% 10%, oklch(0.88 0.14 120 / 0.30), transparent 65%)",
            "radial-gradient(ellipse 50% 70% at 5% 85%, oklch(0.92 0.08 120 / 0.18), transparent 55%)",
            "radial-gradient(ellipse 35% 40% at 90% 70%, oklch(0.86 0.10 120 / 0.12), transparent 50%)",
          ].join(", "),
        }}
      />

      {/* Subtle grain */}
      <div className="grain absolute inset-0" />

      <div className="container-lm relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          {/* Left: Copy — 7 columns, dramatically scaled */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring, delay: 0.1 }}
              className="kicker mb-6"
            >
              CUSTOM SOFTWARE · AI · WEB · MOBILE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring, delay: 0.2 }}
              className="max-w-[16ch]"
            >
              We build{" "}
              <span className="lime-accent">digital&nbsp;products</span> that
              actually ship.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring, delay: 0.35 }}
              className="mt-7 text-lm-slate text-lg md:text-xl leading-relaxed max-w-[46ch]"
            >
              Websites, apps, AI workflows, and custom software for teams that
              are done waiting. Transparent pricing, clean code, fast
              turnaround.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ ...spring, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-primary">
                Start a Project
              </Link>
              <Link href="/pricing" className="btn-secondary">
                See Pricing
              </Link>
            </motion.div>

            {/* Trust signal */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...spring, delay: 0.7 }}
              className="mt-9 text-sm text-lm-muted"
            >
              Singapore-based · Typically reply within one business day
            </motion.p>
          </div>

          {/* Right: Animated code editor mockup — 5 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ ...spring, delay: 0.35, duration: 0.9 }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Glow behind editor */}
              <div
                className="absolute -inset-6 rounded-3xl opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse at center, oklch(0.82 0.18 120 / 0.20), transparent 70%)",
                }}
              />

              {/* Editor frame */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "oklch(0.18 0.015 120)",
                  boxShadow: "var(--shadow-xl)",
                }}
              >
                {/* Title bar */}
                <div
                  className="flex items-center gap-2 px-5 py-3.5"
                  style={{
                    borderBottom: "1px solid oklch(0.26 0.012 120)",
                  }}
                >
                  <div className="flex gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: "oklch(0.65 0.20 25)" }}
                    />
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: "oklch(0.78 0.16 85)" }}
                    />
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: "oklch(0.72 0.19 145)" }}
                    />
                  </div>
                  <span
                    className="ml-3 text-xs font-mono"
                    style={{ color: "oklch(0.50 0.008 120)" }}
                  >
                    your-project.tsx
                  </span>
                </div>

                {/* Code lines with staggered reveal */}
                <div className="px-5 py-5 space-y-2 font-mono text-[13px] leading-relaxed">
                  <div className="code-line" style={{ "--line-index": 0 } as React.CSSProperties}>
                    <span style={{ color: "oklch(0.60 0.15 300)" }}>import</span>
                    <span style={{ color: "oklch(0.75 0.005 120)" }}>{" { deploy }"}</span>
                    <span style={{ color: "oklch(0.60 0.15 300)" }}> from</span>
                    <span style={{ color: "oklch(0.72 0.14 140)" }}>{" '@lm/core'"}</span>
                  </div>
                  <div className="code-line" style={{ "--line-index": 1 } as React.CSSProperties}>
                    <span style={{ color: "oklch(0.45 0.006 120)" }} />
                  </div>
                  <div className="code-line" style={{ "--line-index": 2 } as React.CSSProperties}>
                    <span style={{ color: "oklch(0.60 0.15 300)" }}>const</span>
                    <span style={{ color: "oklch(0.82 0.18 120)" }}> app</span>
                    <span style={{ color: "oklch(0.60 0.005 120)" }}> = </span>
                    <span style={{ color: "oklch(0.68 0.12 200)" }}>configure</span>
                    <span style={{ color: "oklch(0.60 0.005 120)" }}>{"({"}</span>
                  </div>
                  <div className="code-line" style={{ "--line-index": 3 } as React.CSSProperties}>
                    <span style={{ color: "oklch(0.75 0.005 120)" }}>{"  stack"}</span>
                    <span style={{ color: "oklch(0.60 0.005 120)" }}>: </span>
                    <span style={{ color: "oklch(0.72 0.14 140)" }}>{'"next + ai"'}</span>
                    <span style={{ color: "oklch(0.60 0.005 120)" }}>,</span>
                  </div>
                  <div className="code-line" style={{ "--line-index": 4 } as React.CSSProperties}>
                    <span style={{ color: "oklch(0.75 0.005 120)" }}>{"  speed"}</span>
                    <span style={{ color: "oklch(0.60 0.005 120)" }}>: </span>
                    <span style={{ color: "oklch(0.72 0.14 140)" }}>{'"fast"'}</span>
                    <span style={{ color: "oklch(0.60 0.005 120)" }}>,</span>
                  </div>
                  <div className="code-line" style={{ "--line-index": 5 } as React.CSSProperties}>
                    <span style={{ color: "oklch(0.75 0.005 120)" }}>{"  quality"}</span>
                    <span style={{ color: "oklch(0.60 0.005 120)" }}>: </span>
                    <span style={{ color: "oklch(0.72 0.14 140)" }}>{'"production"'}</span>
                    <span style={{ color: "oklch(0.60 0.005 120)" }}>,</span>
                  </div>
                  <div className="code-line" style={{ "--line-index": 6 } as React.CSSProperties}>
                    <span style={{ color: "oklch(0.60 0.005 120)" }}>{"}"}</span>
                    <span style={{ color: "oklch(0.60 0.005 120)" }}>)</span>
                  </div>
                  <div className="code-line" style={{ "--line-index": 7 } as React.CSSProperties}>
                    <span style={{ color: "oklch(0.45 0.006 120)" }} />
                  </div>
                  <div className="code-line" style={{ "--line-index": 8 } as React.CSSProperties}>
                    <span style={{ color: "oklch(0.60 0.15 300)" }}>await</span>
                    <span style={{ color: "oklch(0.82 0.18 120)" }}> deploy</span>
                    <span style={{ color: "oklch(0.60 0.005 120)" }}>(app)</span>
                    <span style={{ color: "oklch(0.45 0.006 120)" }}> </span>
                    <span style={{ color: "oklch(0.45 0.012 120)" }}>// ships in weeks</span>
                  </div>
                </div>

                {/* Status bar */}
                <div
                  className="flex items-center justify-between px-5 py-2 text-[11px]"
                  style={{
                    borderTop: "1px solid oklch(0.26 0.012 120)",
                    color: "oklch(0.45 0.006 120)",
                  }}
                >
                  <span>TypeScript</span>
                  <span style={{ color: "oklch(0.72 0.19 145)" }}>● Ready</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
