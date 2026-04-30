import { ScrollReveal } from "./ScrollReveal";

interface NumberedCardProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export function NumberedCard({
  number,
  title,
  description,
  delay = 0,
}: NumberedCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-white p-8 md:p-11 h-full flex flex-col justify-between min-h-[280px]">
        <span className="font-heading text-6xl md:text-7xl leading-[1.1] tracking-[-0.03em] font-semibold block mb-6 text-charcoal/10">
          {number}
        </span>
        <div className="space-y-3">
          <h3 className="font-heading font-semibold text-2xl md:text-[2rem] leading-[1.1] tracking-[-0.02em] text-charcoal">
            {title}
          </h3>
          <p className="text-base leading-[1.6] tracking-[0.01em] text-charcoal-light">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
