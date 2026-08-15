import { PageHeader } from "@/components/layout/PageHeader";
import { ServicesIcon, StackIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { contact, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Enemial Technologies is a software company based in Gaborone, Botswana, building its own SaaS products and helping businesses with their software and data.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A software company based in Gaborone"
        description="Enemial Technologies (Pty) Ltd builds practical software products and helps businesses get more out of their software and data."
      />

      <Section spacing="default" width="narrow" className="bg-white">
        <div className="space-y-6 text-lg leading-relaxed text-ink-700">
          <p>
            Enemial Technologies is a software company based in{" "}
            {site.location}. We operate as a parent company with a growing
            portfolio of SaaS products, alongside a consulting and services arm.
          </p>
          <p>
            That structure is deliberate. Building and running our own products
            keeps us close to the realities of shipping software — the
            maintenance, the edge cases, the things that only show up once real
            users arrive. That experience is what we bring to client work.
          </p>
          <p>
            Our mission is straightforward: build practical software products,
            and help businesses with their data and software needs. We would
            rather deliver something small that genuinely works than something
            ambitious that never quite lands.
          </p>
        </div>
      </Section>

      <Section spacing="tight">
        <SectionHeading
          eyebrow="Two lines of business"
          title="What we do"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-ink-200 bg-white p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
              <StackIcon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
              Our own products
            </h3>
            <p className="mt-3 leading-relaxed text-ink-600">
              SaaS platforms we design, build, own, and operate — currently
              Attestway, with FunInvite in development.
            </p>
          </article>

          <article className="rounded-2xl border border-ink-200 bg-white p-8">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500 text-white">
              <ServicesIcon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
              Consulting and services
            </h3>
            <p className="mt-3 leading-relaxed text-ink-600">
              Software development, data engineering, analytics and business
              intelligence, data science, and AI consulting for client
              organisations.
            </p>
          </article>
        </div>
      </Section>

      <Section spacing="tight" className="bg-white">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-ink-200 bg-ink-50 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Work with us
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-ink-600">
              We are based in Gaborone and work with clients locally and
              remotely. Reach us at{" "}
              <a
                href={`mailto:${contact.email}`}
                className="font-medium text-brand-700 underline underline-offset-4 hover:text-brand-800"
              >
                {contact.email}
              </a>
              .
            </p>
          </div>
          <ButtonLink href="/contact" size="lg">
            Contact us
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
