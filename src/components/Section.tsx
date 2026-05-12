"use client";

import { ReactNode, useRef } from "react";
import {
  motion,
  useInView,
  type Variants,
} from "framer-motion";

/* ── Reveal ───────────────────────────────────────────────────── */
/* Jakub Krehel materializing entrance: opacity + translateY + blur
   Spring: bounce 0, expo-feel duration. GPU-friendly.            */

const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={revealVariants}
      transition={{
        type: "spring",
        duration: 0.5,
        bounce: 0,
        delay,
      }}
      className={className}
      style={{ willChange: isInView ? "auto" : "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}

/* ── Section ──────────────────────────────────────────────────── */
interface SectionProps {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
  padSize?: "default" | "lg";
}

export function Section({
  children,
  alt = false,
  className = "",
  id,
  padSize = "default",
}: SectionProps) {
  const padClass = padSize === "lg" ? "section-padding-lg" : "section-padding";
  return (
    <section
      id={id}
      className={`${padClass} ${alt ? "bg-lm-bg-alt" : "bg-lm-bg"} ${className}`}
    >
      <div className="container-lm">{children}</div>
    </section>
  );
}

/* ── SectionHeader ────────────────────────────────────────────── */
interface SectionHeaderProps {
  kicker: string;
  headline: string;
  limeText: string;
  subhead?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  kicker,
  headline,
  limeText,
  subhead,
  align = "center",
}: SectionHeaderProps) {
  const parts = headline.split(limeText);
  const isCenter = align === "center";

  return (
    <Reveal className={`mb-14 md:mb-20 ${isCenter ? "text-center" : ""}`}>
      <p className="kicker mb-4">{kicker}</p>
      <h2 className={isCenter ? "mx-auto max-w-[22ch]" : "max-w-[22ch]"}>
        {parts[0]}
        <span className="lime-accent">{limeText}</span>
        {parts[1] || ""}
      </h2>
      {subhead && (
        <p
          className={`mt-5 text-lm-slate leading-relaxed text-base md:text-lg ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subhead}
        </p>
      )}
    </Reveal>
  );
}
