import { TokenValue } from "./TokenValue";

interface SwatchProps {
  name: string;
  utility?: string;
  description?: string;
}

export function Swatch({ name, utility, description }: SwatchProps) {
  return (
    <div className="flex gap-4 items-start py-4 border-b border-border last:border-b-0">
      <div
        className="w-16 h-16 rounded-radius-sm border border-border shrink-0"
        style={{ background: `var(${name})` }}
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <code className="font-mono text-sm text-charcoal">{name}</code>
          <TokenValue name={name} className="font-mono text-xs text-charcoal-light" />
        </div>
        {utility && (
          <p className="font-mono text-xs text-charcoal-light mt-1">{utility}</p>
        )}
        {description && (
          <p className="text-sm text-charcoal-light mt-1.5 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
