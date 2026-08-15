import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  width?: "default" | "wide" | "narrow";
  /** Vertical rhythm. `tight` for stacked sections that read as one block. */
  spacing?: "default" | "tight" | "loose";
};

const spacings = {
  tight: "py-14 sm:py-16",
  default: "py-20 sm:py-24",
  loose: "py-24 sm:py-32",
} as const;

export function Section({
  children,
  id,
  className,
  width = "default",
  spacing = "default",
}: SectionProps) {
  return (
    <section id={id} className={`${spacings[spacing]} ${className ?? ""}`}>
      <Container width={width}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            inverted ? "text-brand-300" : "text-brand-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-semibold sm:text-4xl ${
          inverted ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            inverted ? "text-ink-300" : "text-ink-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
