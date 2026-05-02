"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

interface ImageCardData {
  image: string;
  title: string;
  href?: string;
}

interface ImageCardCarouselProps {
  label: string;
  headline: string;
  cards: ImageCardData[];
}

export function ImageCardCarousel({
  label,
  headline,
  cards,
}: ImageCardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 md:py-32 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-charcoal-light text-[13px] font-medium tracking-[0.08em] uppercase mb-3">{label}</p>
              <h2
                className="font-sans font-bold text-charcoal leading-[1.08] tracking-[-0.03em]"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
              >
                {headline}
              </h2>
            </div>
            {/* Navigation arrows */}
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-charcoal/5 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} className="text-charcoal" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-charcoal/5 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={18} className="text-charcoal" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Cards container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-2 px-2"
        >
          {cards.map((card, i) => {
            const inner = (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-radius-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.7)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-sans font-medium text-lg leading-tight">
                    {card.title}
                  </p>
                  <ArrowRight
                    size={16}
                    className="text-white/50 mt-2"
                  />
                </div>
              </div>
            );

            return (
              <ScrollReveal
                key={card.title}
                delay={i * 0.04}
                className="flex-none w-[85%] sm:w-[45%] lg:w-[32%] snap-start"
              >
                {card.href ? (
                  <Link href={card.href} className="block group">
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
