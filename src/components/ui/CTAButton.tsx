import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "accent" | "white" | "dark" | "outline" | "outline-light";
  external?: boolean;
  className?: string;
  showArrow?: boolean;
}

export function CTAButton({
  label,
  href,
  variant = "accent",
  external = false,
  className = "",
  showArrow = false,
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 font-medium text-[15px] transition-all duration-[var(--duration-fast)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent";

  const variantClasses = {
    accent:
      "px-6 py-3 rounded-full bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md hover:-translate-y-0.5",
    white:
      "px-6 py-3 rounded-full bg-white text-charcoal hover:bg-white/90 shadow-sm hover:shadow-md hover:-translate-y-0.5",
    dark:
      "px-6 py-3 rounded-full bg-charcoal text-white hover:bg-charcoal/90 hover:-translate-y-0.5",
    outline:
      "px-6 py-3 rounded-full border border-border text-charcoal hover:bg-charcoal/5 hover:border-border-hover",
    "outline-light":
      "px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/50",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const icon = external ? (
    <>
      <ExternalLink size={14} className="opacity-70" />
      <span className="sr-only"> (opens in new tab)</span>
    </>
  ) : showArrow ? (
    <ArrowRight size={14} />
  ) : null;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
      {icon}
    </Link>
  );
}
