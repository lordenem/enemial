import { PageHeader } from "@/components/layout/PageHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { contact } from "@/data/site";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Software, data, and AI consulting from Enemial Technologies — software development, game development, data and analytics, business intelligence, data engineering, data science, and artificial intelligence consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Software, data, and AI consulting"
        description="We work with businesses that need software built well and data they can actually rely on. Seven service lines, one engineering team behind all of them."
      >
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-ink-300 backdrop-blur transition hover:border-brand-400/40 hover:text-white"
            >
              {service.title}
            </a>
          ))}
        </div>
      </PageHeader>

      <Section spacing="default" className="bg-white">
        <SectionHeading
          eyebrow="What we offer"
          title="How we can help"
          description="Engagements range from a single well-scoped build to ongoing work alongside your team. We are happy to start small and prove it works."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              anchored
              illustrated
            />
          ))}
        </div>
      </Section>

      {/* How we work */}
      <Section spacing="tight">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="How we work"
              title="Small steps, working software"
            />
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-8">
              {[
                {
                  title: "Understand the problem",
                  body: "We start with your process and the decision you are trying to make, not with a technology choice.",
                },
                {
                  title: "Scope something useful",
                  body: "We agree on a first piece small enough to deliver quickly and useful enough to be worth having on its own.",
                },
                {
                  title: "Build and hand over",
                  body: "You get working software in increments, with the documentation and tests needed to keep it running after we finish.",
                },
              ].map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 font-display text-sm font-semibold text-brand-700">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-600">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Unified CTA */}
      <section className="relative overflow-hidden bg-brand-700">
        <div className="absolute inset-0 grid-texture opacity-40" aria-hidden />
        <Container className="relative">
          <div className="flex flex-col items-start gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Get in touch
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-brand-100">
                Tell us about the project and we will come back to you with an
                honest view of scope, approach, and whether we are the right fit.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="inverted" size="lg">
                Contact us
              </ButtonLink>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-base font-medium text-white transition hover:bg-white/10"
              >
                Email us directly
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
