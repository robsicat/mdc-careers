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
    <section className="py-16 md:py-24 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1344px] mx-auto">
        {/* Header */}
        <ScrollReveal>
          <p className="text-charcoal-light text-base mb-2">{label}</p>
          <h2
            className="font-sans font-bold text-charcoal leading-[1.1] tracking-[-0.02em] uppercase mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {headline}
          </h2>
        </ScrollReveal>

        {/* Cards container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-2 px-2"
          >
            {cards.map((card, i) => {
              const inner = (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[5px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-sans font-medium text-lg leading-tight">
                      {card.title}
                    </p>
                    <ArrowRight
                      size={18}
                      className="text-white/70 mt-2"
                    />
                  </div>
                </div>
              );

              return (
                <ScrollReveal
                  key={card.title}
                  delay={i * 0.05}
                  className="flex-none w-[85%] sm:w-[45%] lg:w-[31%] snap-start"
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

          {/* Navigation arrows */}
          <div className="flex gap-2 justify-end mt-4">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-stone flex items-center justify-center hover:bg-stone-dark transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="text-charcoal" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-stone flex items-center justify-center hover:bg-stone-dark transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="text-charcoal" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
