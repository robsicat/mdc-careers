"use client";

import { ScrollReveal } from "./ScrollReveal";

interface ManifestoSectionProps {
  headline: string;
  body: string;
}

export function ManifestoSection({ headline, body }: ManifestoSectionProps) {
  return (
    <section className="bg-mdc-blue py-32 md:py-44 px-8 md:px-12 lg:px-16 overflow-hidden relative">
      {/* Subtle gradient orb for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pop/[0.06] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-[1200px] mx-auto relative">
        <div className="border-t border-white/10 pt-16 md:pt-20" />
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-28">
          <ScrollReveal>
            <h2
              className="font-sans font-bold text-white leading-[1.02] tracking-[-0.04em]"
              style={{ fontSize: "clamp(2.5rem, 6vw + 0.5rem, 5rem)" }}
            >
              {headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/50 text-lg md:text-xl leading-[1.7] tracking-[-0.01em] lg:pt-4">
              {body}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
