import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { products } from "@/data/products";
import { contact, nav, site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();
  const companyLinks = nav.filter((item) => item.href !== "/");

  return (
    <footer className="border-t border-white/10 bg-ink-950 text-ink-300">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-400">
              {site.tagline}
            </p>
            <p className="mt-4 text-sm text-ink-500">{site.location}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h2 className="font-display text-sm font-semibold text-white">
                Products
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href="/products"
                      className="text-ink-400 transition hover:text-brand-300"
                    >
                      {product.name}
                    </Link>
                    {product.status === "in-development" ? (
                      <span className="ml-2 text-xs text-ink-600">
                        Coming soon
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-sm font-semibold text-white">
                Services
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services#${service.slug}`}
                      className="text-ink-400 transition hover:text-brand-300"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-sm font-semibold text-white">
                Company
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-ink-400 transition hover:text-brand-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-8 border-t border-white/10 py-10 sm:grid-cols-3">
          <div className="flex gap-3 text-sm">
            <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
            <address className="not-italic leading-relaxed text-ink-400">
              {contact.address.line1}
              <br />
              {contact.address.postal}
              <br />
              {contact.address.city}, {contact.address.country}
            </address>
          </div>

          <div className="flex gap-3 text-sm">
            <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
            <div className="leading-relaxed">
              {contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="block text-ink-400 transition hover:text-brand-300"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-3 text-sm">
            <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
            <a
              href={`mailto:${contact.email}`}
              className="text-ink-400 transition hover:text-brand-300"
            >
              {contact.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-8 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            {site.registrationNumber
              ? `Registered in Botswana · Company No. ${site.registrationNumber}`
              : "Registered in Botswana"}
          </p>
        </div>
      </Container>
    </footer>
  );
}
