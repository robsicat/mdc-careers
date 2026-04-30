import { ScrollReveal } from "./ScrollReveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
}

export function SectionTitle({
  title,
  subtitle,
  badge,
  align = "center",
  theme = "dark",
}: SectionTitleProps) {
  const textColor = theme === "dark" ? "text-white" : "text-charcoal";
  const subtitleColor =
    theme === "dark" ? "text-warm-gray" : "text-charcoal-light";

  return (
    <ScrollReveal
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      {badge && (
        <p className="text-xs font-medium uppercase tracking-[0.1em] text-charcoal-light mb-4">
          {badge}
        </p>
      )}
      <h2
        className={`font-sans font-bold tracking-[-0.02em] leading-[1.1] mb-4 ${textColor}`}
        style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 3rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${subtitleColor} text-lg max-w-2xl leading-relaxed tracking-[-0.01em] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
