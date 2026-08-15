/**
 * Consulting service lines. `icon` maps to a key in `@/components/icons`.
 */

import type { IconName } from "@/components/icons";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
};

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "We design and build custom software — web applications, internal tools, and integrations between the systems you already run. We work from your actual process rather than a template, and we ship in increments you can use and give feedback on along the way.",
    icon: "code",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    description:
      "We turn the data your business already collects into reporting people trust and use. That means dashboards and metrics defined with your team, built on numbers that reconcile — so decisions start from a shared view instead of three conflicting spreadsheets.",
    icon: "chart",
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    description:
      "We build the pipelines and data models that move information reliably from source systems into somewhere useful. Batch or streaming, cloud or on-premise, with the tests and monitoring that keep it running once we hand it over.",
    icon: "pipeline",
  },
  {
    slug: "data-science",
    title: "Data Science Consulting",
    description:
      "We help you work out where statistics and machine learning genuinely pay off, and where simpler answers will do. From framing the problem through to a model running in production, we stay focused on results you can measure against the decision you are trying to make.",
    icon: "insight",
  },
];
