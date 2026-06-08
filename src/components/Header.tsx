"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "oklch(0.985 0.004 70 / 0.92)" : "oklch(0.985 0.004 70 / 0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid oklch(0.90 0.01 70 / 0.6)" : "1px solid transparent",
      }}
    >
      <div className="container-lm flex items-center justify-between h-16 md:h-[4.5rem]">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
          <Image src="/logo.png" alt="Solaris Collective" width={400} height={80} className="h-14 md:h-[4.5rem] w-auto object-contain" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.9375rem] font-medium transition-colors duration-200 ${isActive ? "text-lm-charcoal" : "text-lm-slate hover:text-lm-charcoal"}`}
              >
                {link.label}
                {isActive && (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full" style={{ background: "oklch(0.82 0.18 70)" }} transition={spring} />
                )}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary !py-2.5 !px-5 !text-sm">Get in Touch</Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 -mr-2 text-lm-charcoal" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--lm-bg)", borderBottom: "1px solid var(--lm-border)" }}
          >
            <nav className="container-lm py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <motion.div key={link.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ ...spring, delay: i * 0.05 }}>
                    <Link href={link.href} onClick={() => setMobileOpen(false)} className={`block py-3 px-3 text-base font-medium rounded-lg transition-colors ${isActive ? "text-lm-amber-dark bg-lm-amber-soft/50" : "text-lm-charcoal hover:bg-lm-bg-alt"}`}>
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ ...spring, delay: navLinks.length * 0.05 }} className="mt-4">
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full">Get in Touch</Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
