import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

/** Compact dark banner used at the top of every inner page. */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 grid-texture opacity-50" aria-hidden />
      <div
        className="absolute -top-32 left-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative">
        <div className="max-w-3xl py-16 sm:py-20 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-300">
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
