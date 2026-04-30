"use client";

import { ImageHero } from "@/components/ui/ImageHero";
import { Card } from "@/components/ui/Card";
import { NumberedCard } from "@/components/ui/NumberedCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ourCultureHero,
  cultureCards,
  cultureTestimonials,
  cultureValues,
} from "@/lib/data";

export function OurCulturePage() {
  return (
    <>
      <ImageHero
        image="https://img.youtube.com/vi/5tEse1V4MnU/maxresdefault.jpg"
        headline={ourCultureHero.headline}
        subtitle={ourCultureHero.subtitle}
        badge={ourCultureHero.badge}
        overlay="brand"
      />

      {/* Culture cards */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <SectionTitle
            title="What Defines Our Culture"
            subtitle="The qualities that make MDC a uniquely rewarding place to work."
            badge="Values"
            theme="light"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cultureCards.map((card, i) => (
              <Card key={card.title} {...card} delay={i * 0.03} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* Core values — numbered grid */}
      <section className="bg-stone py-1 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {cultureValues.map((value, i) => (
              <NumberedCard
                key={value.number}
                {...value}
                delay={i * 0.05}
              />
            ))}
            <ScrollReveal delay={0.15}>
              <div className="bg-white p-8 md:p-11 h-full flex flex-col justify-between min-h-[280px]">
                <h3 className="font-sans font-bold text-2xl text-charcoal leading-[1.2] tracking-[-0.01em] mb-4">
                  Employee Resources
                </h3>
                <ul className="space-y-2 text-charcoal-light text-sm">
                  {[
                    "Employee Assistance Program (EAP)",
                    "Employee Resource Groups",
                    "Wellness & Fitness Programs",
                    "Professional Development Fund",
                    "Tuition Waiver for Employees & Dependents",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-charcoal rounded-full shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <SectionTitle
            title="Voices of MDC"
            subtitle="Hear from team members about what it's like to be part of our community."
            badge="Testimonials"
            theme="light"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cultureTestimonials.map((t, i) => (
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
