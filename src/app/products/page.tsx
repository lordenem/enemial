import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  ArrowRightIcon,
  CheckIcon,
  InviteIcon,
  SignatureIcon,
} from "@/components/icons";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { products } from "@/data/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Products",
  description:
    "The SaaS products built and owned by Enemial Technologies — Attestway for digital signatures and document workflow, and FunInvite, currently in development.",
  path: "/products",
});

const attestway = products.find((product) => product.slug === "attestway")!;
const funinvite = products.find((product) => product.slug === "funinvite")!;

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title="Software we build and run ourselves"
        description="Enemial Technologies operates its own portfolio of SaaS products. Each one starts with a problem we have watched businesses work around for years."
      />

      {/* Attestway — the funnel */}
      <Section spacing="default" className="bg-white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <SignatureIcon className="h-6 w-6" />
              </span>
              <h2 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
                {attestway.name}
              </h2>
              <Badge tone="brand">{attestway.statusLabel}</Badge>
            </div>

            <p className="mt-6 text-xl leading-relaxed text-ink-800">
              {attestway.tagline}
            </p>

            <p className="mt-5 leading-relaxed text-ink-600">
              {attestway.description}
            </p>

            <p className="mt-5 leading-relaxed text-ink-600">
              It is built for the documents a business cannot afford to lose
              track of — contracts, approvals, policy sign-offs — where being
              able to prove what happened matters as much as getting it signed.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {attestway.url ? (
                <ButtonLink
                  href={attestway.url}
                  size="lg"
                  external
                >
                  {attestway.ctaLabel}
                </ButtonLink>
              ) : null}
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Ask us about Attestway
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-ink-200 bg-ink-50 p-8">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-500">
                What it handles
              </h3>
              <ul className="mt-6 space-y-4">
                {attestway.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink-800">{highlight}</span>
                  </li>
                ))}
              </ul>

              {attestway.url ? (
                <a
                  href={attestway.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-700 transition hover:text-brand-800"
                >
                  Read more at attestway.com
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      {/* FunInvite — in development, no signup CTA */}
      <section className="border-t border-ink-200 bg-ink-50 py-20 sm:py-24">
        <Container>
          <div className="rounded-3xl border border-dashed border-ink-300 bg-white p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ink-100 text-ink-500">
                    <InviteIcon className="h-6 w-6" />
                  </span>
                  <h2 className="font-display text-3xl font-semibold text-ink-900">
                    {funinvite.name}
                  </h2>
                  <Badge tone="neutral">{funinvite.statusLabel}</Badge>
                </div>

                <p className="mt-6 text-lg leading-relaxed text-ink-800">
                  {funinvite.tagline}
                </p>

                <p className="mt-4 leading-relaxed text-ink-600">
                  {funinvite.description}
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-ink-50 p-6">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-ink-500">
                    Planned capabilities
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {funinvite.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-ink-700"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 border-t border-ink-200 pt-5 text-sm leading-relaxed text-ink-500">
                    Not open for signup yet. If you would like to hear when
                    FunInvite launches,{" "}
                    <Link
                      href="/contact"
                      className="font-medium text-brand-700 underline underline-offset-4 transition hover:text-brand-800"
                    >
                      send us a note
                    </Link>{" "}
                    and we will add you to the list.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing */}
      <Section spacing="tight" className="bg-white">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-ink-950 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Need something like this for your own business?
            </h2>
            <p className="mt-3 leading-relaxed text-ink-400">
              We build custom software as well as our own products. Tell us what
              you have in mind.
            </p>
          </div>
          <ButtonLink href="/services" variant="inverted" size="lg">
            See our services
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
