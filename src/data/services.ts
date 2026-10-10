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
    slug: "game-development",
    title: "Game Development",
    description:
      "We design and build games for web, mobile, and desktop — from small branded and educational games to full titles. We prototype early so you can play the idea before committing to it, and we handle the unglamorous parts too: performance on real devices, store submission, and updates after launch.",
    icon: "gamepad",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    description:
      "We dig into the data your business already collects to answer specific questions — what is driving a change, which customers behave differently, whether something actually worked. You get analysis you can act on, with the assumptions and caveats stated plainly rather than buried.",
    icon: "chart",
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence",
    description:
      "We build the reporting layer your business runs on: governed metrics, dashboards people actually open, and self-service tools that let teams answer routine questions without waiting on anyone. The aim is one agreed definition per number, so revenue means the same thing in every meeting.",
    icon: "gauge",
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
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence Consulting",
    description:
      "We help you apply AI where it genuinely earns its place — document processing, assistants that answer from your own material, forecasting, and automating work that is repetitive rather than judgement-heavy. We are candid about where today's models fall short, and we build with evaluation and human review in place from the start.",
    icon: "network",
  },
];
