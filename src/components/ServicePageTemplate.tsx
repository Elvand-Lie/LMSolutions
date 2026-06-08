import Link from "next/link";
import { Check } from "lucide-react";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Section";

interface ServicePageProps {
  kicker: string;
  headline: string;
  limeText: string;
  subhead: string;
  includes: string[];
  idealFor: string;
  techBadges: string[];
  pricingNote: string;
}

export function ServicePageTemplate({
  kicker,
  headline,
  limeText,
  subhead,
  includes,
  idealFor,
  techBadges,
  pricingNote,
}: ServicePageProps) {
  const parts = headline.split(limeText);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-lm max-w-3xl">
          <p className="kicker mb-4">{kicker}</p>
          <h1>
            {parts[0]}
            <span className="lime-accent">{limeText}</span>
            {parts[1] || ""}
          </h1>
          <p className="mt-5 text-lm-slate text-lg leading-relaxed">
            {subhead}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-lm-amber text-lm-charcoal font-semibold rounded-lg hover:bg-lm-amber-dark transition-colors duration-200"
            >
              Get a Quote
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-lm-charcoal font-semibold rounded-lg border-[1.5px] border-lm-charcoal hover:border-lm-amber-dark transition-colors duration-200"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-lm-bg-alt">
        <div className="container-lm max-w-3xl">
          <Reveal>
            <h2 className="mb-8">What&rsquo;s included</h2>
            <ul className="space-y-4">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-lm-slate">
                  <Check size={18} className="text-lm-amber-dark mt-1 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Ideal for */}
      <section className="section-padding bg-white">
        <div className="container-lm max-w-3xl">
          <Reveal>
            <h2 className="mb-4">Ideal for</h2>
            <p className="text-lm-slate leading-relaxed text-lg">{idealFor}</p>
          </Reveal>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section-padding bg-lm-bg-alt">
        <div className="container-lm max-w-3xl">
          <Reveal>
            <h2 className="mb-6">Tech stack we use</h2>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-3.5 py-1.5 text-sm text-lm-charcoal bg-white border border-lm-border rounded-md hover:border-lm-amber-dark transition-colors duration-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing note */}
      <section className="section-padding bg-white">
        <div className="container-lm max-w-3xl">
          <Reveal>
            <div className="p-8 bg-lm-card border border-lm-border rounded-xl text-center">
              <p className="text-lg font-semibold text-lm-charcoal mb-2">Pricing</p>
              <p className="text-lm-slate">{pricingNote}</p>
              <Link
                href="/pricing"
                className="mt-4 inline-flex text-sm font-medium text-lm-charcoal hover:text-lm-amber-dark transition-colors items-center gap-1 group"
              >
                See full pricing breakdown
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
