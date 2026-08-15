import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import {
  ArrowRightIcon,
  CheckIcon,
  InviteIcon,
  ServicesIcon,
  SignatureIcon,
  StackIcon,
} from "@/components/icons";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software products and data consulting",
  description: site.description,
  path: "/",
});

const attestway = products.find((product) => product.slug === "attestway")!;
const funinvite = products.find((product) => product.slug === "funinvite")!;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0 grid-texture opacity-60" aria-hidden />
        <div
          className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-52 right-0 h-[28rem] w-[28rem] rounded-full bg-accent-500/10 blur-3xl"
          aria-hidden
        />

        <Container className="relative">
          <div className="max-w-3xl py-24 sm:py-32 lg:py-40">
            <Badge tone="onDark">{site.location}</Badge>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Enemial Technologies
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300 sm:text-xl">
              We build and own SaaS products, and we provide software and data
              consulting to businesses that need both built properly.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/products" variant="inverted" size="lg">
                Explore our products
              </ButtonLink>
              <ButtonLink
                href="/services"
                size="lg"
                className="border border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10"
              >
                Consulting services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Two paths: products vs services */}
      <Section spacing="default">
        <SectionHeading
          eyebrow="What we do"
          title="Two ways we build software"
          description="One team, two lines of business — the products we run ourselves, and the work we do for clients."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/products"
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white p-8 transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-xl hover:shadow-ink-900/5 sm:p-10"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
              <StackIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">
              Our products
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-600">
              SaaS platforms we design, build, and operate ourselves — starting
              with Attestway for digital signatures and document workflow, with
              FunInvite in development behind it.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
              See our products
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/services"
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white p-8 transition duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-xl hover:shadow-ink-900/5 sm:p-10"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500 text-white">
              <ServicesIcon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink-900">
              Consulting services
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-600">
              Software development, data engineering, analytics and business
              intelligence, data science, and AI consulting — the same
              engineering practice we use on our own products, applied to yours.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-700">
              See our services
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </Section>

      {/* Featured product — Attestway */}
      <section className="bg-ink-900 py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="onDark">Flagship product</Badge>
                <Badge tone="onDark">{attestway.statusLabel}</Badge>
              </div>

              <h2 className="mt-6 font-display text-4xl font-semibold text-white sm:text-5xl">
                {attestway.name}
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-brand-100">
                {attestway.tagline}
              </p>

              <p className="mt-5 leading-relaxed text-ink-400">
                Send documents for signature, route them through the approvals
                your business actually uses, and keep every signer, version, and
                timestamp in one auditable place.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {attestway.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm text-ink-300"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                {attestway.url ? (
                  <ButtonLink
                    href={attestway.url}
                    variant="inverted"
                    size="lg"
                    external
                  >
                    {attestway.ctaLabel}
                  </ButtonLink>
                ) : null}
                <ButtonLink
                  href="/products"
                  size="lg"
                  className="border border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10"
                >
                  Learn more
                </ButtonLink>
              </div>
            </div>

            {/* Decorative product panel */}
            <div className="relative" aria-hidden>
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-brand-500/25 via-transparent to-accent-500/15 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                    <SignatureIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-white">
                      Attestway
                    </p>
                    <p className="text-xs uppercase tracking-widest text-brand-300">
                      Document workflow
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    { label: "Agreement sent", done: true },
                    { label: "Signed by all parties", done: true },
                    { label: "Countersigned & filed", done: true },
                    { label: "Audit trail sealed", done: false },
                  ].map((step) => (
                    <div
                      key={step.label}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink-950/40 px-4 py-3"
                    >
                      <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${
                          step.done
                            ? "bg-brand-500 text-white"
                            : "border border-dashed border-white/25 text-transparent"
                        }`}
                      >
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-ink-300">{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Secondary product — FunInvite */}
      <Section spacing="tight">
        <div className="rounded-3xl border border-dashed border-ink-300 bg-white/60 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink-100 text-ink-500">
                <InviteIcon className="h-6 w-6" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-xl font-semibold text-ink-900">
                    {funinvite.name}
                  </h2>
                  <Badge tone="neutral">{funinvite.statusLabel}</Badge>
                </div>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-600">
                  {funinvite.tagline} Currently in development and not yet
                  available.
                </p>
              </div>
            </div>

            <Link
              href="/products"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-ink-700 transition hover:text-brand-700"
            >
              More about FunInvite
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Services overview */}
      <Section spacing="default" className="bg-white">
        <SectionHeading
          eyebrow="Consulting"
          title="Software and data expertise, on your side of the table"
          description="Service lines covering the work most businesses need help with — from building the software, to making sense of the data it produces, to putting AI to practical use."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/services" size="lg">
            Explore our services
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Talk to us about a project
          </ButtonLink>
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-brand-700">
        <div className="absolute inset-0 grid-texture opacity-40" aria-hidden />
        <Container className="relative">
          <div className="flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Have something you need built?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-100">
                Tell us what you are working on. We will tell you honestly
                whether we are the right people for it.
              </p>
            </div>
            <ButtonLink href="/contact" variant="inverted" size="lg">
              Get in touch
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
