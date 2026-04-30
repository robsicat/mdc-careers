"use client";

import { ScrollReveal } from "./ScrollReveal";

interface ManifestoSectionProps {
  headline: string;
  body: string;
}

export function ManifestoSection({ headline, body }: ManifestoSectionProps) {
  return (
    <section className="bg-mdc-blue-dark py-24 md:py-32 px-8 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1344px] mx-auto">
        <div className="border-t border-white/15 pt-12 md:pt-16" />
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-24">
          <ScrollReveal>
            <h2
              className="font-sans font-bold text-white leading-[1.1] tracking-[-0.02em] uppercase"
              style={{ fontSize: "clamp(2.5rem, 6vw + 0.5rem, 5.5rem)" }}
            >
              {headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/75 text-lg md:text-xl leading-[1.6] tracking-[-0.01em] lg:pt-4">
              {body}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
