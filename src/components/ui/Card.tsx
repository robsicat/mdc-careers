import { ScrollReveal } from "./ScrollReveal";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
  delay?: number;
  theme?: "dark" | "light";
  children?: ReactNode;
}

export function Card({
  title,
  description,
  icon: Icon,
  href,
  delay = 0,
  theme = "dark",
  children,
}: CardProps) {
  const isDark = theme === "dark";

  const content = (
    <div
      className={`rounded-radius-lg p-6 md:p-8 h-full border transition-all duration-[var(--duration-fast)] ${
        isDark
          ? "bg-navy-light border-navy-border hover:border-warm-muted/20"
          : "bg-white border-border hover:border-border-hover"
      } ${href ? "hover:-translate-y-0.5 hover:shadow-md cursor-pointer" : ""}`}
    >
      {Icon && (
        <div
          className={`w-10 h-10 rounded-radius-sm flex items-center justify-center mb-5 ${
            isDark ? "bg-accent/15" : "bg-charcoal/5"
          }`}
        >
          <Icon
            size={20}
            className={isDark ? "text-accent" : "text-charcoal"}
          />
        </div>
      )}
      <h3
        className={`font-heading font-medium text-xl leading-[1.2] tracking-[-0.01em] mb-2 ${
          isDark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm leading-[1.6] tracking-[0.01em] ${
          isDark ? "text-warm-gray" : "text-charcoal-light"
        }`}
      >
        {description}
      </p>
      {href && (
        <div
          className={`mt-4 flex items-center gap-1 text-sm font-medium ${
            isDark ? "text-accent" : "text-charcoal"
          }`}
        >
          Learn more <ArrowRight size={14} />
        </div>
      )}
      {children}
    </div>
  );

  return (
    <ScrollReveal delay={delay}>
      {href?.startsWith("http") ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
          {content}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      ) : href ? (
        <Link href={href} className="block h-full">
          {content}
        </Link>
      ) : (
        content
      )}
    </ScrollReveal>
  );
}
