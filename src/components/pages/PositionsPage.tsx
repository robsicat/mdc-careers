"use client";

import { ImageHero } from "@/components/ui/ImageHero";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GraduationCap, Building2, Briefcase, Users, ArrowRight } from "lucide-react";
import { positionsHero, applicationSteps } from "@/lib/data";

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

      {/* Job categories — horizontal list with hover, not cards */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <SectionTitle
            title="Job Categories"
            subtitle="MDC offers career opportunities across a wide range of roles and disciplines."
            badge="Explore Roles"
            theme="light"
            align="left"
          />

          <div className="border-t border-border">
            {[
              {
                icon: GraduationCap,
                title: "Faculty",
                description: "Full-time and adjunct teaching positions across all disciplines.",
                color: "text-pop",
              },
              {
                icon: Building2,
                title: "Professional Staff",
                description: "Administrative, advising, financial aid, IT, and other professional roles.",
                color: "text-pop-warm",
              },
              {
                icon: Briefcase,
                title: "Administrative",
                description: "Leadership and management positions across departments and campuses.",
                color: "text-pop-mint",
              },
              {
                icon: Users,
                title: "Support Staff",
                description: "Essential roles in facilities, security, library services, and operations.",
                color: "text-pop",
              },
            ].map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 0.03}>
                <a
                  href="https://recruitment.mdc.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6 py-7 border-b border-border transition-colors hover:bg-stone/50 -mx-4 px-4 rounded-radius-sm"
                >
                  <cat.icon size={22} className={`${cat.color} shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans font-semibold text-lg text-charcoal tracking-[-0.01em] mb-0.5 group-hover:text-pop transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-charcoal-light text-[14px] leading-[1.5] truncate md:whitespace-normal">
                      {cat.description}
                    </p>
                  </div>
                  <ArrowRight size={18} className="text-charcoal/20 group-hover:text-pop group-hover:translate-x-1 transition-all shrink-0" />
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply — vertical timeline */}
      <section className="bg-stone py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
            <div>
              <SectionTitle
                title="How to Apply"
                badge="Process"
                theme="light"
                align="left"
              />
              <CTAButton
                label="Go to Recruitment Portal"
                href="https://recruitment.mdc.edu"
                variant="dark"
                external
              />
            </div>

            <div className="space-y-0">
              {applicationSteps.map((step, i) => (
                <ScrollReveal key={step.number} delay={i * 0.06}>
                  <div className="flex gap-6 pb-10 last:pb-0">
                    {/* Timeline line + dot */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-pop flex items-center justify-center text-[12px] font-semibold text-pop">
                        {step.number}
                      </div>
                      {i < applicationSteps.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-sans font-semibold text-base text-charcoal tracking-[-0.01em] mb-2 -mt-0.5">
                        {step.title}
                      </h3>
                      <p className="text-charcoal-light text-[14px] leading-[1.6]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current employees */}
      <section className="bg-white py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="bg-charcoal rounded-radius-lg p-9 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-pop-mint/[0.06] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-pop-mint" />
                  <p className="text-white/30 text-[13px] font-medium tracking-[0.08em] uppercase">
                    Internal
                  </p>
                </div>
                <h3 className="font-sans font-semibold text-xl text-white mb-3 tracking-[-0.02em]">
                  Current MDC Employees
                </h3>
                <p className="text-white/45 text-[15px] leading-[1.7] mb-7 max-w-xl">
                  If you are a current Miami Dade College employee looking for
                  internal opportunities or HR resources, visit MDConnect.
                </p>
                <CTAButton
                  label="Access MDConnect"
                  href="https://mdconnect.mdc.edu"
                  variant="link-light"
                  external
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
