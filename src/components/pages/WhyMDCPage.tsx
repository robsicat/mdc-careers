"use client";

import { ImageHero } from "@/components/ui/ImageHero";
import { Card } from "@/components/ui/Card";
import { NumberedCard } from "@/components/ui/NumberedCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { InfoCallout } from "@/components/ui/InfoCallout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  whyMDCHero,
  whyMDCCards,
  whyMDCNumbered,
  whyMDCTestimonials,
} from "@/lib/data";

export function WhyMDCPage() {
  return (
    <>
      <ImageHero
        image="https://img.youtube.com/vi/4E6u2obV1kg/maxresdefault.jpg"
        headline={whyMDCHero.headline}
        subtitle={whyMDCHero.subtitle}
        badge={whyMDCHero.badge}
        overlay="brand"
      />

      {/* Numbered value props — grid with 1px dividers */}
      <section className="bg-stone py-1 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {whyMDCNumbered.map((item, i) => (
              <NumberedCard
                key={item.number}
                {...item}
                delay={i * 0.05}
              />
            ))}
            <InfoCallout
              variant="quote"
              text="We rebuilt our entire career around MDC. The stability, the benefits, the sense of purpose — it's unlike anywhere else in higher education."
              attribution="15-year MDC employee"
            />
          </div>
        </div>
      </section>

      {/* Benefits cards */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <SectionTitle
            title="What We Offer"
            subtitle="MDC provides a comprehensive package of benefits, growth opportunities, and a supportive work environment."
            badge="Benefits"
            theme="light"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyMDCCards.map((card, i) => (
              <Card key={card.title} {...card} delay={i * 0.03} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone py-20 md:py-28 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <SectionTitle
            title="Hear From Our Team"
            subtitle="Real stories from the people who make MDC great."
            badge="Testimonials"
            theme="light"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyMDCTestimonials.map((t, i) => (
              <TestimonialCard
                key={t.name}
                {...t}
                variant={i === 1 ? "accent" : "white"}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
