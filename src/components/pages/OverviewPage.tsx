"use client";

import { CollageHero } from "@/components/ui/CollageHero";
import { ManifestoSection } from "@/components/ui/ManifestoSection";
import { ImageTextBlock } from "@/components/ui/ImageTextBlock";
import { ImageCardCarousel } from "@/components/ui/ImageCardCarousel";
import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin } from "lucide-react";
import {
  overviewHero,
  campuses,
  overviewCredential,
  carouselCards,
  imageTextBlocks,
  heroCollageImages,
} from "@/lib/data";

export function OverviewPage() {
  return (
    <>
      {/* Collage hero — dark, cinematic, centered text + image marquee */}
      <CollageHero
        headline={overviewHero.headline}
        subtitle={overviewHero.subtitle}
        badge={overviewHero.badge}
        images={heroCollageImages}
      >
        <CTAButton
          label="Prospective Employees"
          href="https://recruitment.mdc.edu"
          variant="white"
          external
        />
        <CTAButton
          label="Current Employees"
          href="https://mdconnect.mdc.edu"
          variant="outline-light"
          external
        />
      </CollageHero>

      {/* Stats ribbon — high-impact numbers */}
      <section className="bg-white py-16 md:py-20 px-8 md:px-12 lg:px-16 border-b border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "170K+", label: "Students" },
              { number: "8", label: "Campuses" },
              { number: "167", label: "Countries represented" },
              { number: "300+", label: "Programs of study" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.04}>
                <div className="text-center md:text-left">
                  <p className="font-sans font-bold text-charcoal tracking-[-0.03em] text-3xl md:text-4xl lg:text-5xl">
                    {stat.number}
                  </p>
                  <p className="text-charcoal-light text-[13px] mt-1.5">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto — dark section */}
      <ManifestoSection
        headline="If You Have a Dream, We Have a Path."
        body="These words drive who we are and what we believe in — a better future for ourselves, our communities, and our students. We strive to bring opportunity and transformation to every person we serve, including our teammates."
      />

      {/* Horizontal scroll image cards */}
      <ImageCardCarousel
        label="More Than a Workplace"
        headline="What Moves Us"
        cards={carouselCards}
      />

      {/* Alternating image + text sections */}
      <section className="px-8 md:px-12 lg:px-16 py-8 md:py-16">
        <div className="max-w-[1200px] mx-auto space-y-24 md:space-y-36">
          {imageTextBlocks.map((block, i) => (
            <ImageTextBlock key={block.headline} {...block} reverse={i % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* Campuses — clean grid */}
      <section className="bg-stone py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="text-charcoal-light text-[13px] font-medium tracking-[0.08em] uppercase mb-3">
              10 Locations Across Miami-Dade
            </p>
            <h2
              className="font-sans font-bold text-charcoal leading-[1.08] tracking-[-0.03em] mb-12"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
            >
              Our Campuses
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {campuses.map((campus, i) => (
              <ScrollReveal key={campus.name} delay={i * 0.02}>
                <div className="flex items-start gap-3 p-5 bg-white rounded-radius-md hover:shadow-sm transition-shadow duration-300">
                  <MapPin
                    size={15}
                    className="text-pop shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="font-medium text-sm text-charcoal block">
                      {campus.name}
                    </span>
                    <span className="text-[13px] text-charcoal-light">
                      {campus.address}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credential — dark callout */}
      <section className="bg-charcoal py-24 md:py-32 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-pop-warm" />
              <p className="text-white/30 text-[13px] font-medium tracking-[0.08em] uppercase">
                Recognition
              </p>
            </div>
            <h3 className="font-sans font-bold text-white text-2xl md:text-3xl tracking-[-0.02em]">
              {overviewCredential.title}
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="text-white/45 text-base md:text-lg leading-[1.7]">
              {overviewCredential.text}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
