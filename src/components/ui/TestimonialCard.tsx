import { ScrollReveal } from "./ScrollReveal";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  variant?: "white" | "accent";
  delay?: number;
}

export function TestimonialCard({
  quote,
  name,
  role,
  variant = "white",
  delay = 0,
}: TestimonialCardProps) {
  const isAccent = variant === "accent";

  return (
    <ScrollReveal delay={delay} className="h-full">
      <article
        className={`h-full flex flex-col rounded-radius-lg overflow-hidden shadow-md ${
          isAccent ? "bg-accent" : "bg-white"
        }`}
      >
        {/* Photo placeholder — neutral gradient */}
        <div
          className={`h-72 relative ${
            isAccent
              ? "bg-gradient-to-br from-accent/80 to-navy"
              : "bg-gradient-to-br from-stone-dark to-charcoal/10"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Quote card overlay */}
        <div
          className={`p-5 -mt-4 mx-3 relative z-10 rounded-radius-sm ${
            isAccent ? "bg-accent text-white" : "bg-white text-charcoal"
          }`}
        >
          <blockquote>
            <p
              className={`font-heading text-base leading-[1.45] tracking-[-0.01em] mb-4 ${
                isAccent ? "text-white" : "text-charcoal"
              }`}
            >
              &ldquo;{quote}&rdquo;
            </p>
          </blockquote>
          <footer className="space-y-0.5">
            <cite
              className={`not-italic font-medium text-sm block ${
                isAccent ? "text-white" : "text-charcoal"
              }`}
            >
              {name}
            </cite>
            <span
              className={`text-xs block ${
                isAccent ? "text-white/70" : "text-charcoal-light"
              }`}
            >
              {role}
            </span>
          </footer>
        </div>

        <div className="pb-4" />
      </article>
    </ScrollReveal>
  );
}
