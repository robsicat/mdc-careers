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
      className={`card-3d p-7 md:p-9 h-full transition-all duration-300 ${
        isDark
          ? "bg-navy-light rounded-radius-lg border border-navy-border hover:border-white/10"
          : "bg-white rounded-radius-lg border border-transparent hover:border-border"
      } ${href ? "cursor-pointer group" : ""}`}
    >
      {Icon && (
        <div
          className={`w-11 h-11 rounded-radius-md flex items-center justify-center mb-6 ${
            isDark ? "bg-white/[0.06]" : "bg-pop/[0.08]"
          }`}
        >
          <Icon
            size={18}
            className={isDark ? "text-white/60" : "text-pop"}
          />
        </div>
      )}
      <h3
        className={`font-sans font-semibold text-lg leading-[1.2] tracking-[-0.02em] mb-3 ${
          isDark ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-[15px] leading-[1.65] ${
          isDark ? "text-white/50" : "text-charcoal-light"
        }`}
      >
        {description}
      </p>
      {href && (
        <div
          className={`mt-6 flex items-center gap-1.5 text-[13px] font-medium ${
            isDark ? "text-white/40 group-hover:text-white/70" : "text-pop group-hover:text-pop/80"
          } transition-colors`}
        >
          Learn more <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
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
