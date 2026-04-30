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
      ? "bg-gradient-to-b from-[rgba(0,59,113,0.15)] via-[rgba(0,59,113,0.3)] to-[rgba(0,20,40,0.88)]"
      : "bg-gradient-to-b from-[rgba(0,0,0,0.15)] via-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.85)]";

  return (
    <section className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${gradientClass}`} />

      {/* Content — bottom-left aligned */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-16 md:pb-20">
        <div className="max-w-[720px]">
          {badge && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/60 text-sm font-sans tracking-wide mb-4"
            >
              {badge}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold text-white leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 5vw + 1rem, 4.5rem)" }}
          >
            {headline}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-heading italic text-white/70 text-lg md:text-xl max-w-lg leading-[1.5] tracking-[-0.01em] mt-5"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
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
