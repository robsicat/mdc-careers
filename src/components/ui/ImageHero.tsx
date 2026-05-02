"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ImageHeroProps {
  image: string;
  headline: string;
  subtitle?: string;
  badge?: string;
  children?: ReactNode;
  overlay?: "dark" | "brand";
}

export function ImageHero({
  image,
  headline,
  subtitle,
  badge,
  children,
  overlay = "brand",
}: ImageHeroProps) {
  const gradientClass =
    overlay === "brand"
      ? "bg-gradient-to-b from-charcoal/20 via-charcoal/30 to-charcoal/95"
      : "bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.15)] to-[rgba(0,0,0,0.92)]";

  return (
    <section className="relative h-[85vh] min-h-[580px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${gradientClass}`} />

      {/* Content — bottom-left aligned */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-16 md:pb-20">
        <div className="max-w-[680px]">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-pop-warm" />
              <span className="text-white/40 text-[13px] font-medium tracking-[0.1em] uppercase">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold text-white leading-[1.02] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.75rem, 5.5vw + 1rem, 5rem)" }}
          >
            {headline}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-white/45 text-base md:text-lg max-w-lg leading-[1.6] tracking-[-0.01em] mt-5"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
