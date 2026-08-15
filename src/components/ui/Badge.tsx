import type { ReactNode } from "react";

type BadgeTone = "brand" | "accent" | "neutral" | "onDark";

const tones: Record<BadgeTone, string> = {
  brand: "bg-brand-50 text-brand-800 ring-brand-200",
  accent: "bg-accent-50 text-accent-800 ring-accent-200",
  neutral: "bg-ink-100 text-ink-700 ring-ink-200",
  onDark: "bg-white/10 text-brand-100 ring-white/15 backdrop-blur",
};

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
};

export function Badge({ children, tone = "brand", className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider ring-1 ring-inset ${
        tones[tone]
      } ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
