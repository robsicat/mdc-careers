import { TokenValue } from "./TokenValue";
import type { ReactNode } from "react";

interface TokenRowProps {
  name: string;
  utility?: string;
  description?: string;
  preview?: ReactNode;
}

export function TokenRow({ name, utility, description, preview }: TokenRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-4 md:gap-6 items-start py-4 border-b border-border last:border-b-0">
      <div className="flex items-center min-h-[64px]">{preview}</div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <code className="font-mono text-sm text-charcoal">{name}</code>
          <TokenValue name={name} className="font-mono text-xs text-charcoal-light" />
        </div>
        {utility && (
          <p className="font-mono text-xs text-charcoal-light mt-1">{utility}</p>
        )}
        {description && (
          <p className="text-sm text-charcoal-light mt-1.5 leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
