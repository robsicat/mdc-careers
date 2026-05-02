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

const widthClass = {
  narrow: "w-[130px] md:w-[160px] lg:w-[192px]",
  medium: "w-[155px] md:w-[192px] lg:w-[240px]",
  wide: "w-[170px] md:w-[210px] lg:w-[260px]",
};

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
  const strip = [...images, ...images, ...images];

  return (
    <section className="relative bg-charcoal overflow-hidden min-h-screen flex flex-col">
      {/* Text content — centered */}
      <div className="relative z-10 pt-32 md:pt-40 lg:pt-48 pb-12 md:pb-16 px-8 text-center flex-1 flex flex-col justify-center">
        {badge && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/30 text-[13px] font-medium tracking-[0.15em] uppercase mb-6"
          >
            {badge}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-bold leading-[0.95] tracking-[-0.05em] mx-auto max-w-4xl text-gradient bg-gradient-to-br from-white via-white to-white/50"
          style={{ fontSize: "clamp(3.5rem, 8vw + 1rem, 7rem)" }}
        >
          {headline}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-white/40 text-base md:text-lg max-w-lg mx-auto leading-[1.6] tracking-[-0.01em] mt-7"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Image marquee ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-[200px] md:h-[280px] lg:h-[360px] pb-8 md:pb-12 overflow-hidden"
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
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-charcoal to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-charcoal to-transparent z-10" />
      </motion.div>
    </section>
  );
}
