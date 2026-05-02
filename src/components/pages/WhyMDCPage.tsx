"use client";

import { ImageHero } from "@/components/ui/ImageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreathingStatement } from "@/components/ui/BreathingStatement";
import { Shield, MapPin, TrendingUp, Heart } from "lucide-react";
import {
  whyMDCHero,
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

      {/* Value props — full-width stacked with large type */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="space-y-0 border-t border-border">
            {whyMDCNumbered.map((item, i) => (
              <ScrollReveal key={item.number} delay={i * 0.04}>
                <div className="py-12 md:py-16 border-b border-border">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 md:gap-16 items-start">
                    <div>
                      <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-pop" />
                        <span className="font-sans text-[13px] font-medium text-charcoal/25 tracking-[0.06em] uppercase">
                          {item.number}
                        </span>
                      </div>
                      <h3 className="font-sans font-bold text-2xl md:text-3xl text-charcoal tracking-[-0.03em] leading-[1.1]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-charcoal-light text-[15px] md:text-base leading-[1.7] md:pt-10">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Inline quote */}
          <ScrollReveal delay={0.12}>
            <div className="mt-16 md:mt-20 max-w-2xl mx-auto text-center">
              <div className="text-pop/20 text-5xl font-heading mb-4">&ldquo;</div>
              <p className="font-sans text-xl md:text-2xl text-charcoal leading-[1.4] tracking-[-0.02em] mb-6">
                We rebuilt our entire career around MDC. The stability,
                the benefits, the sense of purpose — it&apos;s unlike anywhere
                else in higher education.
              </p>
              <p className="text-charcoal-light text-[13px] tracking-[0.04em]">
                15-year MDC employee
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Breathing statement */}
      <BreathingStatement
        text="Public-sector stability with the energy of a mission-driven team."
      />

      {/* Benefits — icon + text rows, not card grid */}
      <section className="bg-stone py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle
            title="What We Offer"
            badge="Benefits"
            theme="light"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Shield,
                title: "Comprehensive Benefits",
                description: "Competitive health, dental, and vision. Retirement with employer matching. Tuition reimbursement for you and your dependents.",
                color: "bg-pop/[0.08]",
                iconColor: "text-pop",
              },
              {
                icon: MapPin,
                title: "10 Locations",
                description: "Campuses from Homestead to Hialeah, plus flexible remote options for eligible roles.",
                color: "bg-pop-warm/[0.08]",
                iconColor: "text-pop-warm",
              },
              {
                icon: TrendingUp,
                title: "Growth Paths",
                description: "Leadership development, conference funding, and clear pathways for career advancement.",
                color: "bg-pop-mint/[0.08]",
                iconColor: "text-pop-mint",
              },
              {
                icon: Heart,
                title: "Work-Life Balance",
                description: "Generous PTO, flexible scheduling, summer hours, and a culture that values well-being.",
                color: "bg-pop/[0.08]",
                iconColor: "text-pop",
              },
            ].map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.03}>
                <div className="card-3d bg-white rounded-radius-lg p-7 md:p-8 flex gap-5 items-start h-full">
                  <div className={`w-11 h-11 rounded-radius-md flex items-center justify-center shrink-0 ${benefit.color}`}>
                    <benefit.icon size={18} className={benefit.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-base text-charcoal tracking-[-0.01em] mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-charcoal-light text-[14px] leading-[1.6]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — offset layout */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle
            title="Hear From Our Team"
            badge="Testimonials"
            theme="light"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyMDCTestimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.04} className={`h-full ${i === 1 ? "lg:mt-8" : ""}`}>
                <TestimonialCard
                  {...t}
                  variant={i === 1 ? "accent" : "white"}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
