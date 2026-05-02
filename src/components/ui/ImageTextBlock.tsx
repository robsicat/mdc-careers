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
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Image */}
      <ScrollReveal className={reverse ? "lg:[direction:ltr]" : ""}>
        <div className="aspect-[4/3] overflow-hidden rounded-radius-lg">
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
        delay={0.08}
        className={`flex flex-col justify-center py-4 lg:py-8 ${
          reverse ? "lg:[direction:ltr]" : ""
        }`}
      >
        <p className="text-charcoal-light text-[13px] font-medium tracking-[0.08em] uppercase mb-4">{label}</p>
        <h3
          className="font-sans font-bold text-charcoal leading-[1.08] tracking-[-0.03em] mb-5"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
        >
          {headline}
        </h3>
        <p className="text-charcoal-light text-[15px] leading-[1.7] max-w-lg mb-8">
          {body}
        </p>
        {ctaLabel && ctaHref && (
          <div>
            <CTAButton
              label={ctaLabel}
              href={ctaHref}
              variant="link"
              external={ctaExternal}
            />
          </div>
        )}
      </ScrollReveal>
    </div>
  );
}
