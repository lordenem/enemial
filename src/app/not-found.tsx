import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 grid-texture opacity-50" aria-hidden />
      <Container className="relative">
        <div className="flex max-w-xl flex-col items-start py-28 sm:py-36">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-300">
            The page you were looking for does not exist, or has moved.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" variant="inverted" size="lg">
              Back to home
            </ButtonLink>
            <ButtonLink
              href="/contact"
              size="lg"
              className="border border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              Contact us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
