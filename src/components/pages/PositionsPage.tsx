"use client";

import { ImageHero } from "@/components/ui/ImageHero";
import { Card } from "@/components/ui/Card";
import { NumberedCard } from "@/components/ui/NumberedCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { positionsHero, jobCategories, applicationSteps } from "@/lib/data";

export function PositionsPage() {
  return (
    <>
      <ImageHero
        image="https://img.youtube.com/vi/b8VYoZhTU6c/maxresdefault.jpg"
        headline={positionsHero.headline}
        subtitle={positionsHero.subtitle}
        badge={positionsHero.badge}
        overlay="brand"
      >
        <CTAButton
          label="View All Job Openings"
          href="https://recruitment.mdc.edu"
          variant="white"
          external
        />
      </ImageHero>

      {/* Job categories */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <SectionTitle
            title="Job Categories"
            subtitle="MDC offers career opportunities across a wide range of roles and disciplines."
            badge="Explore Roles"
            theme="light"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {jobCategories.map((card, i) => (
              <Card key={card.title} {...card} delay={i * 0.03} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* How to apply — numbered grid */}
      <section className="bg-stone py-1 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {applicationSteps.map((step, i) => (
              <NumberedCard
                key={step.number}
                {...step}
                delay={i * 0.05}
              />
            ))}
            <ScrollReveal delay={0.15}>
              <div className="bg-white p-8 md:p-11 h-full flex flex-col justify-center items-center text-center min-h-[280px] gap-6">
                <p className="font-sans font-bold text-2xl md:text-3xl leading-[1.2] tracking-[-0.02em] text-charcoal">
                  Ready to apply?
                </p>
                <CTAButton
                  label="Go to Recruitment Portal"
                  href="https://recruitment.mdc.edu"
                  variant="dark"
                  external
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Current employees */}
      <section className="bg-white py-20 md:py-28 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <ScrollReveal>
            <div className="bg-stone rounded-[5px] p-8 md:p-12">
              <h3 className="font-sans font-bold text-2xl text-charcoal mb-3 tracking-[-0.01em]">
                Current MDC Employees
              </h3>
              <p className="text-charcoal-light text-base leading-relaxed mb-6 max-w-xl">
                If you are a current Miami Dade College employee looking for
                internal opportunities or HR resources, please visit MDConnect
                for internal job postings and employee services.
              </p>
              <CTAButton
                label="Access MDConnect"
                href="https://mdconnect.mdc.edu"
                variant="outline"
                external
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
