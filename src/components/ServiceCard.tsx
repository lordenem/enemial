import { icons } from "@/components/icons";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  /** Adds a scroll anchor id — used on the services page. */
  anchored?: boolean;
};

export function ServiceCard({ service, anchored = false }: ServiceCardProps) {
  const Icon = icons[service.icon];

  return (
    <article
      id={anchored ? service.slug : undefined}
      className="group relative flex flex-col rounded-2xl border border-ink-200 bg-white p-7 transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-ink-900/5 sm:scroll-mt-28"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 transition group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
        <Icon className="h-6 w-6" />
      </span>

      <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-600">
        {service.description}
      </p>
    </article>
  );
}
