"use client";

import { ImageHero } from "@/components/ui/ImageHero";
import { Card } from "@/components/ui/Card";
import { NumberedCard } from "@/components/ui/NumberedCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { InfoCallout } from "@/components/ui/InfoCallout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ourFocusHero, focusAreas, focusInitiatives } from "@/lib/data";

export function OurFocusPage() {
  return (
    <>
      <ImageHero
        image="https://img.youtube.com/vi/9m7UxTxOerI/maxresdefault.jpg"
        headline={ourFocusHero.headline}
        subtitle={ourFocusHero.subtitle}
        badge={ourFocusHero.badge}
        overlay="brand"
      />

      {/* Focus areas */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <SectionTitle
            title="Our Focus Areas"
            subtitle="The pillars that guide everything we do at MDC."
            badge="Mission"
            theme="light"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {focusAreas.map((card, i) => (
              <Card key={card.title} {...card} delay={i * 0.03} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* Signature Initiatives — numbered grid */}
      <section className="bg-stone py-1 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {focusInitiatives.map((item, i) => (
              <NumberedCard
                key={item.number}
                {...item}
                delay={i * 0.05}
              />
            ))}
            <InfoCallout
              variant="quote"
              text="MDC is not just a college — it's the great equalizer. It provides opportunity for all, and our team makes that possible every single day."
              attribution="Dr. Madeline Pumariega, President"
            />
          </div>
        </div>
      </section>

      {/* Community stats — blue section */}
      <section className="bg-mdc-blue py-20 md:py-28 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-sans font-bold text-white text-5xl md:text-6xl tracking-[-0.02em] mb-2">300K+</p>
              <p className="text-white font-medium text-lg mb-1">Students Served</p>
              <p className="text-white/60 text-sm">Annually across all campuses and programs</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="text-center">
              <p className="font-sans font-bold text-white text-5xl md:text-6xl tracking-[-0.02em] mb-2">300+</p>
              <p className="text-white font-medium text-lg mb-1">Programs of Study</p>
              <p className="text-white/60 text-sm">From associate degrees to bachelor&apos;s programs</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="text-center">
              <p className="font-sans font-bold text-white text-5xl md:text-6xl tracking-[-0.02em] mb-2">8</p>
              <p className="text-white font-medium text-lg mb-1">Campuses</p>
              <p className="text-white/60 text-sm">Reaching every corner of Miami-Dade County</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
