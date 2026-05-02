"use client";

import { ImageHero } from "@/components/ui/ImageHero";
import { NumberedCard } from "@/components/ui/NumberedCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreathingStatement } from "@/components/ui/BreathingStatement";
import { Globe, Users, Star, Heart } from "lucide-react";
import {
  ourCultureHero,
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

      {/* Culture — bento grid layout */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle
            title="What Defines Our Culture"
            subtitle="The qualities that make MDC a uniquely rewarding place to work."
            badge="Values"
            theme="light"
          />

          {/* Bento: 1 large feature + 2 stacked + 1 tall */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large featured card */}
            <ScrollReveal className="lg:col-span-2">
              <div className="bg-mdc-blue rounded-radius-lg p-9 md:p-12 h-full relative overflow-hidden min-h-[280px] flex flex-col justify-end">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-pop/[0.08] rounded-full blur-[80px] -translate-y-1/3 translate-x-1/4" />
                <div className="relative">
                  <Globe size={22} className="text-white/40 mb-5" />
                  <h3 className="font-sans font-semibold text-2xl md:text-3xl text-white tracking-[-0.02em] mb-3">
                    Diversity & Inclusion
                  </h3>
                  <p className="text-white/55 text-[15px] leading-[1.7] max-w-lg">
                    With students and staff from 167+ countries, MDC reflects the rich cultural
                    tapestry of Miami. We don&apos;t just welcome differences — they&apos;re the foundation of everything we build.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Tall right card */}
            <ScrollReveal delay={0.04}>
              <div className="bg-stone rounded-radius-lg p-8 h-full flex flex-col justify-between min-h-[280px]">
                <Users size={20} className="text-pop mb-auto" />
                <div>
                  <h3 className="font-sans font-semibold text-lg text-charcoal tracking-[-0.02em] mb-2">
                    Collaborative Environment
                  </h3>
                  <p className="text-charcoal-light text-[15px] leading-[1.65]">
                    Cross-departmental projects, shared governance, and open-door
                    leadership. Every voice is heard.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom left */}
            <ScrollReveal delay={0.06}>
              <div className="bg-stone rounded-radius-lg p-8 h-full flex flex-col justify-between min-h-[220px]">
                <Star size={20} className="text-pop-warm mb-auto" />
                <div>
                  <h3 className="font-sans font-semibold text-lg text-charcoal tracking-[-0.02em] mb-2">
                    Professional Development
                  </h3>
                  <p className="text-charcoal-light text-[15px] leading-[1.65]">
                    From new employee orientation to executive leadership institutes — we invest in every team member.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom right — spans 2 columns */}
            <ScrollReveal delay={0.08} className="lg:col-span-2">
              <div className="bg-charcoal rounded-radius-lg p-9 md:p-12 h-full flex items-center gap-8 min-h-[220px]">
                <Heart size={28} className="text-pop-mint shrink-0 hidden md:block" />
                <div>
                  <h3 className="font-sans font-semibold text-xl text-white tracking-[-0.02em] mb-2">
                    Community Engagement
                  </h3>
                  <p className="text-white/45 text-[15px] leading-[1.65] max-w-lg">
                    Employee volunteer programs, campus events, and community partnerships
                    extend our work beyond the classroom. We&apos;re not just at Miami — we&apos;re part of it.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Breathing statement */}
      <BreathingStatement
        text="167 countries. One team. One mission."
        theme="dark"
      />

      {/* Core values — horizontal stacked, not grid */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle
            title="Our Core Values"
            badge="Principles"
            theme="light"
            align="left"
          />

          <div className="space-y-0 border-t border-border">
            {cultureValues.map((value, i) => (
              <ScrollReveal key={value.number} delay={i * 0.04}>
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1.5fr] gap-4 md:gap-8 py-10 border-b border-border items-start">
                  <span className="font-sans text-[13px] font-medium text-charcoal/25 tracking-[0.06em] uppercase pt-1">
                    {value.number}
                  </span>
                  <h3 className="font-sans font-semibold text-xl md:text-2xl text-charcoal tracking-[-0.02em] leading-[1.15]">
                    {value.title}
                  </h3>
                  <p className="text-charcoal-light text-[15px] leading-[1.65] md:pt-1">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Employee resources — inline pills */}
          <ScrollReveal delay={0.12}>
            <div className="mt-16 p-8 md:p-10 bg-stone rounded-radius-lg">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-pop-mint" />
                <h3 className="font-sans font-semibold text-lg text-charcoal tracking-[-0.02em]">
                  Employee Resources
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Employee Assistance Program",
                  "Resource Groups",
                  "Wellness & Fitness",
                  "Professional Development Fund",
                  "Tuition Waiver",
                ].map((item) => (
                  <span key={item} className="text-[14px] text-charcoal-light bg-white px-4 py-2.5 rounded-full border border-border">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-stone py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle
            title="Voices of MDC"
            subtitle="Hear from team members about what it's like to be part of our community."
            badge="Testimonials"
            theme="light"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureTestimonials.map((t, i) => (
              <TestimonialCard
                key={t.name}
                {...t}
                variant={i === 1 ? "accent" : "white"}
                delay={i * 0.04}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
