"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CollageImage {
  src: string;
  alt?: string;
  width: "narrow" | "medium" | "wide";
  offset: "top" | "center" | "bottom" | "high";
}

interface CollageHeroProps {
  headline: string;
  subtitle?: string;
  badge?: string;
  children?: ReactNode;
  images: CollageImage[];
}

/* Each image gets a width and vertical inset to create the stagger effect */
const widthClass = {
  narrow: "w-[130px] md:w-[160px] lg:w-[192px]",
  medium: "w-[155px] md:w-[192px] lg:w-[240px]",
  wide: "w-[170px] md:w-[210px] lg:w-[260px]",
};

/* Vertical insets: padding top / bottom to position image within the fixed-height strip */
const insetStyle: Record<string, { paddingTop: string; paddingBottom: string }> = {
  top: { paddingTop: "10px", paddingBottom: "90px" },
  high: { paddingTop: "40px", paddingBottom: "60px" },
  center: { paddingTop: "60px", paddingBottom: "40px" },
  bottom: { paddingTop: "90px", paddingBottom: "10px" },
};

export function CollageHero({
  headline,
  subtitle,
  badge,
  children,
  images,
}: CollageHeroProps) {
  // Triple images for seamless loop
  const strip = [...images, ...images, ...images];

  return (
    <section className="relative bg-mdc-blue-light overflow-hidden">
      {/* Text content — centered */}
      <div className="relative z-10 pt-20 md:pt-28 lg:pt-32 pb-10 md:pb-14 px-8 text-center">
        {badge && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-charcoal-light text-sm font-sans tracking-wide mb-5"
          >
            {badge}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-bold text-charcoal leading-[1.05] tracking-[-0.03em] mx-auto max-w-3xl"
          style={{ fontSize: "clamp(2.75rem, 5vw + 1rem, 5rem)" }}
        >
          {headline}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-charcoal-light text-base md:text-lg max-w-xl mx-auto leading-relaxed tracking-[-0.01em] mt-5"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Image marquee ribbon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative h-[240px] md:h-[320px] lg:h-[400px] mb-12 md:mb-16 lg:mb-20 overflow-hidden"
      >
        <div className="absolute inset-0 flex items-stretch gap-3 md:gap-4 animate-marquee">
          {strip.map((img, i) => (
            <div
              key={i}
              className={`${widthClass[img.width]} shrink-0 flex flex-col`}
              style={insetStyle[img.offset]}
            >
              <div className="relative flex-1 overflow-hidden rounded-xl md:rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt || ""}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={i < images.length ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
