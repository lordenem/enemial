import Link from "next/link";
import { ArrowRightIcon, icons } from "@/components/icons";
import { ServiceIllustration } from "@/components/illustrations/ServiceIllustration";
import { serviceHref, type Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  /** Adds a scroll anchor id — used on the services page. */
  anchored?: boolean;
  /** Shows the service's illustration across the top of the card. */
  illustrated?: boolean;
};

export function ServiceCard({
  service,
  anchored = false,
  illustrated = false,
}: ServiceCardProps) {
  const Icon = icons[service.icon];

  return (
    <Link
      href={serviceHref(service)}
      id={anchored ? service.slug : undefined}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-ink-900/5 sm:scroll-mt-28"
    >
      {illustrated ? (
        <div className="overflow-hidden border-b border-ink-200">
          <ServiceIllustration
            service={service}
            className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-7">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 transition group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
          <Icon className="h-6 w-6" />
        </span>

        <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-ink-600">
          {service.description}
        </p>

        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-brand-700 transition group-hover:text-brand-800">
          Learn more
          <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
