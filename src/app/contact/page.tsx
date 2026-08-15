import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { Section } from "@/components/ui/Section";
import { contact, site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Enemial Technologies (Pty) Ltd in Gaborone, Botswana — for product enquiries or software and data consulting work.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk about your project"
        description="Send us a message and we will come back to you. Whether it is a product question or a piece of work you need scoped, we are happy to hear from you."
      />

      <Section spacing="default" className="bg-white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Send a message
            </h2>
            <p className="mt-3 leading-relaxed text-ink-600">
              Fill in the form below and it will reach us directly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-ink-200 bg-ink-50 p-8">
              <h2 className="font-display text-lg font-semibold text-ink-900">
                Company details
              </h2>

              <p className="mt-5 font-medium text-ink-900">{site.legalName}</p>

              <dl className="mt-6 space-y-6 text-sm">
                <div className="flex gap-3">
                  <dt className="sr-only">Address</dt>
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <dd>
                    <address className="not-italic leading-relaxed text-ink-700">
                      {contact.address.line1}
                      <br />
                      {contact.address.postal}
                      <br />
                      {contact.address.city}, {contact.address.country}
                    </address>
                  </dd>
                </div>

                <div className="flex gap-3">
                  <dt className="sr-only">Phone</dt>
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <dd className="space-y-1">
                    {contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block text-ink-700 transition hover:text-brand-700"
                      >
                        {phone}
                      </a>
                    ))}
                  </dd>
                </div>

                <div className="flex gap-3">
                  <dt className="sr-only">Email</dt>
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <dd>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-ink-700 transition hover:text-brand-700"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
