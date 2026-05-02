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
        className={`card-3d h-full flex flex-col justify-between p-7 md:p-9 rounded-radius-lg ${
          isAccent
            ? "bg-mdc-blue text-white"
            : "bg-white border border-border"
        }`}
      >
        <div>
          {/* Quote mark with accent color */}
          <div className={`text-4xl leading-none mb-5 font-heading ${isAccent ? "text-white/20" : "text-pop/30"}`}>
            &ldquo;
          </div>
          <blockquote>
            <p
              className={`text-[15px] leading-[1.7] tracking-[-0.01em] mb-8 ${
                isAccent ? "text-white/85" : "text-charcoal"
              }`}
            >
              {quote}
            </p>
          </blockquote>
        </div>
        <footer className={`pt-5 border-t ${isAccent ? "border-white/10" : "border-border"}`}>
          <cite
            className={`not-italic font-medium text-sm block ${
              isAccent ? "text-white" : "text-charcoal"
            }`}
          >
            {name}
          </cite>
          <span
            className={`text-[13px] block mt-0.5 ${
              isAccent ? "text-white/50" : "text-charcoal-light"
            }`}
          >
            {role}
          </span>
        </footer>
      </article>
    </ScrollReveal>
  );
}
