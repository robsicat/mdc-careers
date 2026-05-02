import type { ReactNode } from "react";

interface ShowcaseProps {
  title: string;
  description?: string;
  children: ReactNode;
  code: string;
  /** Background style for the live example panel. */
  surface?: "light" | "dark" | "stone";
}

export function Showcase({
  title,
  description,
  children,
  code,
  surface = "light",
}: ShowcaseProps) {
  const surfaceClass = {
    light: "bg-white",
    dark: "bg-mdc-blue-dark",
    stone: "bg-stone",
  }[surface];

  return (
    <section className="border border-border rounded-radius-lg overflow-hidden">
      <header className="px-6 py-4 border-b border-border bg-gray-50">
        <h3 className="font-heading text-lg text-charcoal">{title}</h3>
        {description && (
          <p className="text-sm text-charcoal-light mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </header>

      <div className={`p-8 ${surfaceClass}`}>{children}</div>

      <details className="border-t border-border bg-charcoal text-white/90">
        <summary className="px-6 py-3 cursor-pointer font-mono text-xs uppercase tracking-[0.1em] text-white/60 hover:text-white select-none">
          View code
        </summary>
        <pre className="px-6 pb-6 pt-2 overflow-x-auto text-xs leading-relaxed font-mono">
          <code>{code}</code>
        </pre>
      </details>
    </section>
  );
}
