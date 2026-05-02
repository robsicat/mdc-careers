"use client";

import { ImageHero } from "@/components/ui/ImageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GraduationCap, Sparkles, Globe, BookOpen } from "lucide-react";
import { ourFocusHero, focusInitiatives } from "@/lib/data";

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

      {/* Focus areas — alternating large/small, not uniform grid */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle
            title="Our Focus Areas"
            subtitle="The pillars that guide everything we do at MDC."
            badge="Mission"
            theme="light"
          />

          {/* Feature card — full width */}
          <ScrollReveal>
            <div className="bg-charcoal rounded-radius-lg p-10 md:p-14 mb-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-pop/[0.06] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
              <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-16 items-center">
                <div>
                  <GraduationCap size={24} className="text-white/30 mb-5" />
                  <h3 className="font-sans font-bold text-2xl md:text-3xl text-white tracking-[-0.02em] mb-3">
                    Student Success
                  </h3>
                </div>
                <p className="text-white/50 text-[15px] leading-[1.7]">
                  Every role at MDC — from faculty to facilities — directly contributes to student achievement.
                  We measure our success by the success of our students. It&apos;s not a talking point. It&apos;s the job.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Three cards — different sizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: Sparkles,
                title: "Innovation & Technology",
                description: "From the MAGIC lab to AI-powered student support — MDC leads in educational innovation.",
                color: "bg-pop-warm/[0.08]",
                iconColor: "text-pop-warm",
              },
              {
                icon: Globe,
                title: "Community Impact",
                description: "As an anchor institution, MDC drives economic mobility, cultural enrichment, and civic engagement.",
                color: "bg-pop-mint/[0.08]",
                iconColor: "text-pop-mint",
              },
              {
                icon: BookOpen,
                title: "Academic Excellence",
                description: "300+ programs backed by dedicated faculty and state-of-the-art facilities.",
                color: "bg-pop/[0.08]",
                iconColor: "text-pop",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.04}>
                <div className="card-3d bg-stone rounded-radius-lg p-8 h-full flex flex-col min-h-[240px]">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-auto ${item.color}`}>
                    <item.icon size={17} className={item.iconColor} />
                  </div>
                  <div className="mt-8">
                    <h3 className="font-sans font-semibold text-base text-charcoal tracking-[-0.01em] mb-2">{item.title}</h3>
                    <p className="text-charcoal-light text-[14px] leading-[1.6]">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives — horizontal divider layout */}
      <section className="bg-stone py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle
            title="Signature Initiatives"
            badge="Programs"
            theme="light"
            align="left"
          />

          <div className="space-y-0 border-t border-border">
            {focusInitiatives.map((item, i) => (
              <ScrollReveal key={item.number} delay={i * 0.04}>
                <div className="grid grid-cols-1 md:grid-cols-[60px_1fr_1.5fr] gap-4 md:gap-8 py-10 border-b border-border items-start">
                  <span className="font-sans text-[13px] font-medium text-charcoal/25 tracking-[0.06em] uppercase pt-1">
                    {item.number}
                  </span>
                  <h3 className="font-sans font-semibold text-xl text-charcoal tracking-[-0.02em] leading-[1.15]">
                    {item.title}
                  </h3>
                  <p className="text-charcoal-light text-[15px] leading-[1.65] md:pt-0.5">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* President quote */}
          <ScrollReveal delay={0.12}>
            <div className="mt-16 bg-white rounded-radius-lg p-9 md:p-12 flex flex-col md:flex-row gap-8 items-start">
              <div className="text-pop/20 text-5xl font-heading leading-none shrink-0">&ldquo;</div>
              <div>
                <p className="font-sans text-lg md:text-xl text-charcoal leading-[1.5] tracking-[-0.01em] mb-5">
                  MDC is not just a college — it&apos;s the great equalizer. It provides opportunity
                  for all, and our team makes that possible every single day.
                </p>
                <p className="text-charcoal-light text-[13px] tracking-[0.04em]">
                  Dr. Madeline Pumariega, President
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Community stats — oversized numbers */}
      <section className="bg-charcoal py-28 md:py-40 px-8 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-pop/[0.04] rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-[1200px] mx-auto relative">
          <ScrollReveal>
            <p className="text-white/25 text-[13px] font-medium tracking-[0.12em] uppercase text-center mb-16">
              By the numbers
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8">
            <ScrollReveal>
              <div className="text-center">
                <p className="font-sans font-bold text-white text-6xl md:text-7xl tracking-[-0.04em] mb-3">300K+</p>
                <p className="text-white/50 text-[15px]">Students served annually</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.06}>
              <div className="text-center">
                <p className="font-sans font-bold text-white text-6xl md:text-7xl tracking-[-0.04em] mb-3">300+</p>
                <p className="text-white/50 text-[15px]">Programs of study</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="text-center">
                <p className="font-sans font-bold text-white text-6xl md:text-7xl tracking-[-0.04em] mb-3">8</p>
                <p className="text-white/50 text-[15px]">Campuses across Miami-Dade</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
