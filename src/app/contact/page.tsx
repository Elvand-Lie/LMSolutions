"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Section";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z.string().min(1, "Please tell us about your project"),
  honeypot: z.string().max(0), // anti-spam
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  "Website",
  "Mobile App",
  "AI & Automation",
  "Custom Software",
  "Not sure yet",
];

const budgetRanges = [
  "Under $5k",
  "$5k\u2013$15k",
  "$15k\u2013$50k",
  "$50k+",
  "Not sure yet",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    // In production, submit to API route / Formspree / Resend
    console.log("Form submitted:", data);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-8 md:pt-24 md:pb-12">
        <div className="container-lm max-w-5xl">
          <Reveal>
            <h1>
              Tell us what you&rsquo;re{" "}
              <span className="lime-accent">building.</span>
            </h1>
            <p className="mt-4 text-lm-slate text-lg max-w-2xl leading-relaxed">
              A quick form, a real reply within one business day. We read every
              submission ourselves.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + Side Panel */}
      <section className="section-padding pt-8 md:pt-12 bg-white">
        <div className="container-lm max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ type: "spring", duration: 0.45, bounce: 0 }}
                    className="p-8 bg-lm-card border border-lm-border rounded-xl text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-lm-lime flex items-center justify-center mx-auto mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F2937" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold mb-2">Got it. Thanks for reaching&nbsp;out.</h2>
                    <p className="text-lm-slate mb-6 leading-relaxed">
                      We&rsquo;ve received your message and will reply within one
                      business day. In the meantime, feel free to read more about
                      how we&nbsp;work.
                    </p>
                    <Link
                      href="/capabilities"
                      className="inline-flex items-center px-6 py-3 bg-lm-lime text-lm-charcoal font-semibold rounded-lg hover:bg-lm-lime-dark transition-colors duration-200"
                    >
                      See Our Capabilities
                    </Link>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ type: "spring", duration: 0.35, bounce: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    noValidate
                  >
                    {/* Honeypot */}
                    <input
                      type="text"
                      {...register("honeypot")}
                      className="absolute opacity-0 pointer-events-none h-0 w-0"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-lm-charcoal mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="w-full px-3 py-3 bg-white border-[1.5px] border-lm-border rounded-md text-lm-charcoal focus:border-lm-lime focus:outline-none transition-colors"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500" role="alert">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-lm-charcoal mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        {...register("company")}
                        className="w-full px-3 py-3 bg-white border-[1.5px] border-lm-border rounded-md text-lm-charcoal focus:border-lm-lime focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-lm-charcoal mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full px-3 py-3 bg-white border-[1.5px] border-lm-border rounded-md text-lm-charcoal focus:border-lm-lime focus:outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500" role="alert">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-lm-charcoal mb-1.5">
                        Project type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="projectType"
                        {...register("projectType")}
                        className="w-full px-3 py-3 bg-white border-[1.5px] border-lm-border rounded-md text-lm-charcoal focus:border-lm-lime focus:outline-none transition-colors appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a project type</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="mt-1 text-sm text-red-500" role="alert">{errors.projectType.message}</p>
                      )}
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-lm-charcoal mb-1.5">
                        Budget range
                      </label>
                      <select
                        id="budget"
                        {...register("budget")}
                        className="w-full px-3 py-3 bg-white border-[1.5px] border-lm-border rounded-md text-lm-charcoal focus:border-lm-lime focus:outline-none transition-colors appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a range (optional)</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-lm-charcoal mb-1.5">
                        Tell us about your project <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        {...register("message")}
                        placeholder="What are you trying to build, and what's the goal? Don't worry about being technical — we'll figure out the details together."
                        className="w-full px-3 py-3 bg-white border-[1.5px] border-lm-border rounded-md text-lm-charcoal focus:border-lm-lime focus:outline-none transition-colors resize-y placeholder:text-lm-muted"
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500" role="alert">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-lm-lime text-lm-charcoal font-semibold rounded-lg hover:bg-lm-lime-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Side Panel */}
            <div className="lg:col-span-2">
              <Reveal delay={0.15}>
                <div className="p-7 bg-lm-bg-alt border border-lm-border rounded-xl sticky top-24">
                  <h3 className="text-lg font-semibold mb-3">Prefer email or a&nbsp;call?</h3>
                  <p className="text-sm text-lm-slate leading-relaxed mb-6">
                    Drop us a line at{" "}
                    <a
                      href="mailto:hello@solariscollective.com"
                      className="font-medium text-lm-charcoal hover:text-lm-lime-dark transition-colors"
                    >
                      hello@solariscollective.com
                    </a>{" "}
                    or book a 30-minute discovery call below. No prep needed —
                    just bring the rough&nbsp;idea.
                  </p>

                  {/* Calendly placeholder */}
                  <div className="p-5 bg-white border border-lm-border rounded-lg text-center">
                    <p className="text-sm text-lm-muted mb-2">Discovery call booking</p>
                    <p className="text-xs text-lm-muted">
                      Calendly widget will be embedded here once the link is&nbsp;available.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-lm-border">
                    <p className="text-xs text-lm-muted">
                      Singapore-based · Typically reply within one business&nbsp;day
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
