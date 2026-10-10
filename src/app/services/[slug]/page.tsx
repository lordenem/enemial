import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, CheckIcon, icons } from "@/components/icons";
import { ServiceIllustration } from "@/components/illustrations/ServiceIllustration";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { serviceHref, services } from "@/data/services";
import { contact } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

/** Static export: every service page is built ahead of time, nothing else. */
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = findService((await params).slug);
  if (!service) return {};
  return pageMetadata({
    title: service.title,
    description: `${service.tagline} ${service.description}`,
    path: serviceHref(service),
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = findService((await params).slug);
  if (!service) notFound();

  const Icon = icons[service.icon];
  const others = services.filter((other) => other.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0 grid-texture opacity-50" aria-hidden />
        <div
          className="absolute -top-32 left-1/4 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl"
          aria-hidden
        />

        <Container className="relative">
          <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-400 transition hover:text-white"
              >
                <ArrowRightIcon className="h-4 w-4 rotate-180" />
                All services
              </Link>

              <span className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Icon className="h-6 w-6" />
              </span>

              <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 text-xl leading-relaxed text-brand-100">
                {service.tagline}
              </p>
              <p className="mt-5 leading-relaxed text-ink-300">
                {service.description}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="inverted" size="lg">
                  Discuss your project
                </ButtonLink>
                <a
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-medium text-white backdrop-blur transition hover:bg-white/10"
                >
                  Email us
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-4 rounded-4xl bg-linear-to-br from-brand-500/25 via-transparent to-accent-500/20 blur-2xl"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/30">
                <ServiceIllustration service={service} className="h-auto w-full" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What we offer */}
      <Section spacing="default" className="bg-white">
        <SectionHeading
          eyebrow="What we offer"
          title="How we can help"
          description={`The work we take on under ${service.title.toLowerCase()}. Pick one piece or combine several.`}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.offerings.map((offering) => (
            <div
              key={offering.title}
              className="rounded-2xl border border-ink-200 bg-white p-7 transition hover:border-brand-300"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                <CheckIcon className="h-4 w-4" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">
                {offering.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* The value */}
      <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-24">
        <div className="absolute inset-0 grid-texture opacity-40" aria-hidden />
        <Container className="relative">
          <SectionHeading
            eyebrow="The value"
            title="What you get out of it"
            inverted
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {service.outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent-400" />
                  {outcome.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-300">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How we deliver */}
      <Section spacing="default">
        <SectionHeading eyebrow="How we deliver" title="From first conversation to results" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.approach.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-ink-200 bg-white p-7">
              <span className="font-display text-4xl font-semibold text-brand-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Good fit */}
      <Section spacing="tight" className="bg-white">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Is this for you?"
              title="A good fit if…"
            />
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {service.goodFit.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-lg leading-relaxed text-ink-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA + other services */}
      <Section spacing="tight">
        <div className="relative overflow-hidden rounded-3xl bg-brand-700 p-8 sm:p-12">
          <div className="absolute inset-0 grid-texture opacity-40" aria-hidden />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Let&apos;s talk about your project
              </h2>
              <p className="mt-3 leading-relaxed text-brand-100">
                Tell us what you are trying to achieve. We will come back with an
                honest view of scope, approach, and whether we are the right fit.
              </p>
            </div>
            <ButtonLink href="/contact" variant="inverted" size="lg">
              Contact us
            </ButtonLink>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
            Other services
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={serviceHref(other)}
                className="group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-700 transition hover:border-brand-300 hover:text-brand-800"
              >
                {other.title}
                <ArrowRightIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
