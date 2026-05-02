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
      <div className="bg-white p-9 md:p-12 h-full flex flex-col justify-between min-h-[300px]">
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-pop" />
          <span className="font-sans text-[13px] font-medium tracking-[0.06em] text-charcoal/30 uppercase">
            {number}
          </span>
        </div>
        <div className="space-y-4">
          <h3 className="font-sans font-semibold text-xl md:text-2xl leading-[1.15] tracking-[-0.02em] text-charcoal">
            {title}
          </h3>
          <p className="text-[15px] leading-[1.65] text-charcoal-light">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
