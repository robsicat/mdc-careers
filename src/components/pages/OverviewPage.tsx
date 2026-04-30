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
      {/* Collage hero — centered text + image marquee */}
      <CollageHero
        headline={overviewHero.headline}
        subtitle={overviewHero.subtitle}
        badge={overviewHero.badge}
        images={heroCollageImages}
      >
        <CTAButton
          label="Prospective Employees"
          href="https://recruitment.mdc.edu"
          variant="dark"
          external
        />
        <CTAButton
          label="Current Employees"
          href="https://mdconnect.mdc.edu"
          variant="outline"
          external
        />
      </CollageHero>

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
      <section className="px-8 md:px-12 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1344px] mx-auto space-y-20 md:space-y-32">
          {imageTextBlocks.map((block, i) => (
            <ImageTextBlock key={block.headline} {...block} reverse={i % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* Campuses — clean grid */}
      <section className="bg-stone py-20 md:py-28 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto">
          <ScrollReveal>
            <p className="text-charcoal-light text-base mb-2">
              10 Locations Across Miami-Dade
            </p>
            <h2
              className="font-sans font-bold text-charcoal leading-[1.1] tracking-[-0.02em] uppercase mb-10"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Our Campuses
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {campuses.map((campus, i) => (
              <ScrollReveal key={campus.name} delay={i * 0.02}>
                <div className="flex items-start gap-3 p-4 bg-white rounded-[5px]">
                  <MapPin
                    size={16}
                    className="text-mdc-blue shrink-0 mt-0.5"
                  />
                  <div>
                    <span className="font-medium text-sm text-charcoal block">
                      {campus.name}
                    </span>
                    <span className="text-xs text-charcoal-light">
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
      <section className="bg-mdc-blue py-20 md:py-28 px-8 md:px-12 lg:px-16">
        <div className="max-w-[1344px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          <ScrollReveal>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-white text-xl">
                  &#9733;
                </span>
              ))}
            </div>
            <h3 className="font-sans font-bold text-white text-2xl md:text-3xl tracking-[-0.01em]">
              {overviewCredential.title}
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/75 text-base md:text-lg leading-[1.6]">
              {overviewCredential.text}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
