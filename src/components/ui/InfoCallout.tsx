import { ScrollReveal } from "./ScrollReveal";
import { Star } from "lucide-react";
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
            isDark ? "border-white/30" : "border-charcoal"
          }`}
        >
          {stat && (
            <span
              className={`font-heading font-semibold text-4xl md:text-5xl tracking-[-0.03em] block mb-1 ${
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
            className={`text-sm leading-relaxed ${
              isDark ? "text-warm-gray" : "text-charcoal-light"
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
        <div className="bg-white p-8 md:p-10 h-full">
          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="text-charcoal"
                fill="currentColor"
              />
            ))}
          </div>
          <blockquote>
            <p className="font-heading text-lg md:text-xl leading-[1.5] tracking-[-0.01em] mb-5 text-charcoal">
              &ldquo;{text}&rdquo;
            </p>
          </blockquote>
          {attribution && (
            <cite className="not-italic text-sm text-charcoal-light">
              —{attribution}
            </cite>
          )}
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <div
        className={`rounded-radius-lg p-6 md:p-8 flex gap-5 border ${
          isDark
            ? "bg-navy-light border-navy-border"
            : "bg-white border-border"
        }`}
      >
        {Icon && (
          <div
            className={`w-10 h-10 rounded-radius-sm flex items-center justify-center shrink-0 ${
              isDark ? "bg-white/10" : "bg-charcoal/5"
            }`}
          >
            <Icon
              size={20}
              className={isDark ? "text-white" : "text-charcoal"}
            />
          </div>
        )}
        <div>
          {title && (
            <h3
              className={`font-heading font-medium text-lg mb-1 ${
                isDark ? "text-white" : "text-charcoal"
              }`}
            >
              {title}
            </h3>
          )}
          <p
            className={`text-sm leading-relaxed ${
              isDark ? "text-warm-gray" : "text-charcoal-light"
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
