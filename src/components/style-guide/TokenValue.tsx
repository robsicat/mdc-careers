"use client";

import { useEffect, useState } from "react";

interface TokenValueProps {
  /** CSS custom property name, e.g. "--color-mdc-blue". */
  name: string;
  className?: string;
}

/**
 * Reads the resolved value of a CSS custom property from :root and
 * displays it. Updating the value in globals.css updates this label.
 */
export function TokenValue({ name, className }: TokenValueProps) {
  const [value, setValue] = useState<string>("…");

  useEffect(() => {
    const resolved = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    setValue(resolved || "—");
  }, [name]);

  return <code className={className}>{value}</code>;
}
