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
      className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : ""}`}
    >
      {badge && (
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-charcoal-light mb-5">
          {badge}
        </p>
      )}
      <h2
        className={`font-sans font-bold tracking-[-0.03em] leading-[1.05] mb-5 ${textColor}`}
        style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.5rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${subtitleColor} text-lg max-w-2xl leading-[1.6] tracking-[-0.01em] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
