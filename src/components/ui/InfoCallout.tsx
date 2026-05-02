import { ScrollReveal } from "./ScrollReveal";
import type { LucideIcon } from "lucide-react";

interface InfoCalloutProps {
  title?: string;
  text: string;
  variant?: "highlight" | "stat" | "quote";
  icon?: LucideIcon;
  stat?: string;
  attribution?: string;
  theme?: "dark" | "light";
}

export function InfoCallout({
  title,
  text,
  variant = "highlight",
  icon: Icon,
  stat,
  attribution,
  theme = "light",
}: InfoCalloutProps) {
  const isDark = theme === "dark";

  if (variant === "stat") {
    return (
      <ScrollReveal>
        <div
          className={`border-l-2 pl-6 py-2 ${
            isDark ? "border-white/20" : "border-charcoal/20"
          }`}
        >
          {stat && (
            <span
              className={`font-sans font-bold text-4xl md:text-5xl tracking-[-0.03em] block mb-1 ${
                isDark ? "text-white" : "text-charcoal"
              }`}
            >
              {stat}
            </span>
          )}
          {title && (
            <h3
              className={`font-semibold text-base mb-1 ${
                isDark ? "text-white" : "text-charcoal"
              }`}
            >
              {title}
            </h3>
          )}
          <p
            className={`text-[15px] leading-[1.6] ${
              isDark ? "text-white/50" : "text-charcoal-light"
            }`}
          >
            {text}
          </p>
        </div>
      </ScrollReveal>
    );
  }

  if (variant === "quote") {
    return (
      <ScrollReveal>
        <div className="bg-white p-9 md:p-11 h-full flex flex-col justify-center">
          <div className="text-charcoal/15 text-3xl mb-4">&ldquo;</div>
          <blockquote>
            <p className="font-sans text-lg md:text-xl leading-[1.5] tracking-[-0.01em] mb-5 text-charcoal">
              {text}
            </p>
          </blockquote>
          {attribution && (
            <cite className="not-italic text-[13px] text-charcoal-light">
              {attribution}
            </cite>
          )}
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <div
        className={`rounded-radius-lg p-7 md:p-9 flex gap-5 ${
          isDark
            ? "bg-navy-light border border-navy-border"
            : "bg-white"
        }`}
      >
        {Icon && (
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
              isDark ? "bg-white/[0.08]" : "bg-charcoal/[0.04]"
            }`}
          >
            <Icon
              size={18}
              className={isDark ? "text-white/70" : "text-charcoal/60"}
            />
          </div>
        )}
        <div>
          {title && (
            <h3
              className={`font-sans font-semibold text-lg mb-1 ${
                isDark ? "text-white" : "text-charcoal"
              }`}
            >
              {title}
            </h3>
          )}
          <p
            className={`text-[15px] leading-[1.6] ${
              isDark ? "text-white/50" : "text-charcoal-light"
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
