"use client";

import { ScrollReveal } from "./ScrollReveal";
import { CTAButton } from "./CTAButton";

interface ImageTextBlockProps {
  image: string;
  label: string;
  headline: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  reverse?: boolean;
}

export function ImageTextBlock({
  image,
  label,
  headline,
  body,
  ctaLabel,
  ctaHref,
  ctaExternal,
  reverse = false,
}: ImageTextBlockProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Image */}
      <ScrollReveal className={reverse ? "lg:[direction:ltr]" : ""}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={headline}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      {/* Text */}
      <ScrollReveal
        delay={0.1}
        className={`flex flex-col justify-center py-4 lg:py-12 ${
          reverse ? "lg:[direction:ltr]" : ""
        }`}
      >
        <p className="text-charcoal-light text-base mb-3">{label}</p>
        <h3
          className="font-sans font-bold text-charcoal leading-[1.1] tracking-[-0.02em] uppercase mb-6"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {headline}
        </h3>
        <p className="text-charcoal-light text-base leading-[1.6] max-w-lg mb-8">
          {body}
        </p>
        {ctaLabel && ctaHref && (
          <div>
            <CTAButton
              label={ctaLabel}
              href={ctaHref}
              variant="dark"
              external={ctaExternal}
            />
          </div>
        )}
      </ScrollReveal>
    </div>
  );
}
