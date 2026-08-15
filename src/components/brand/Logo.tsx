import type { SVGProps } from "react";

/**
 * Placeholder brand mark: a stacked "E" built from three bars, the top one
 * offset to suggest forward motion. Swap the <svg> body for the real logo
 * artwork when it exists — the sizing and layout API can stay as-is.
 */
export function LogoMark({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <rect width="32" height="32" rx="8" className="fill-brand-600" />
      <rect x="9" y="9" width="14" height="3.2" rx="1.6" fill="white" />
      <rect x="9" y="14.4" width="9.5" height="3.2" rx="1.6" fill="white" />
      <rect
        x="9"
        y="19.8"
        width="14"
        height="3.2"
        rx="1.6"
        className="fill-accent-400"
      />
    </svg>
  );
}

type LogoProps = {
  /** Render light-on-dark, for use on the dark header/footer surfaces. */
  inverted?: boolean;
  className?: string;
};

/** Full lockup: mark plus wordmark. */
export function Logo({ inverted = false, className }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
    >
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-semibold tracking-tight ${
            inverted ? "text-white" : "text-ink-900"
          }`}
        >
          Enemial
        </span>
        <span
          className={`mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.18em] ${
            inverted ? "text-ink-400" : "text-ink-500"
          }`}
        >
          Technologies
        </span>
      </span>
    </span>
  );
}
