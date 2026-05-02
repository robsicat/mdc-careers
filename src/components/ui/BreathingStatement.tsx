"use client";

import { ScrollReveal } from "./ScrollReveal";

interface BreathingStatementProps {
  text: string;
  theme?: "light" | "dark";
}

export function BreathingStatement({ text, theme = "light" }: BreathingStatementProps) {
  const isDark = theme === "dark";

  return (
    <section className={`py-28 md:py-36 px-8 md:px-12 lg:px-16 relative overflow-hidden ${isDark ? "bg-charcoal" : "bg-white"}`}>
      {/* Accent gradient orb */}
      <div className={`absolute top-1/2 left-1/2 w-[500px] h-[300px] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 ${
        isDark ? "bg-pop/[0.04]" : "bg-pop/[0.03]"
      }`} />

      <div className="max-w-[800px] mx-auto text-center relative">
        <ScrollReveal>
          <p
            className={`font-sans font-semibold leading-[1.2] tracking-[-0.03em] ${
              isDark ? "text-white" : "text-charcoal"
            }`}
            style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.75rem)" }}
          >
            {text}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
