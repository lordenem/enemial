/**
 * Consulting service lines. `icon` maps to a key in `@/components/icons`.
 * Each entry also drives its own page at `/services/[slug]`.
 */

import type { IconName } from "@/components/icons";

export type ServiceItem = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  /** Theme colour family for the service's illustration backdrop. */
  tone: "brand" | "accent";
  /** One-line promise, shown under the title on the service page. */
  tagline: string;
  /** What we offer within this service line. */
  offerings: ServiceItem[];
  /** The value the client gets — outcomes, not activities. */
  outcomes: ServiceItem[];
  /** How an engagement runs, in order. */
  approach: ServiceItem[];
  /** Situations where this service is the right call. */
  goodFit: string[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "We design and build custom software — web applications, internal tools, and integrations between the systems you already run. We work from your actual process rather than a template, and we ship in increments you can use and give feedback on along the way.",
    icon: "code",
    tone: "brand",
    tagline: "Custom software shaped around how your business actually works.",
    offerings: [
      {
        title: "Web applications",
        description:
          "Customer portals, booking and ordering systems, and line-of-business apps that run in the browser on any device.",
      },
      {
        title: "Internal tools",
        description:
          "Replacing the spreadsheets, paper forms and email chains your team relies on with a system built for the job.",
      },
      {
        title: "Mobile apps",
        description:
          "Apps for Android and iOS when your customers or field staff need to work from a phone.",
      },
      {
        title: "Integrations and APIs",
        description:
          "Connecting the systems you already run — accounting, payments, CRM, SMS and email — so data stops being typed in twice.",
      },
      {
        title: "Modernising existing systems",
        description:
          "Taking over, stabilising and gradually rebuilding software that has become hard to change.",
      },
      {
        title: "Support after launch",
        description:
          "Hosting, monitoring, fixes and new features once the system is live, for as long as you want us.",
      },
    ],
    outcomes: [
      {
        title: "Less manual work",
        description:
          "Repetitive steps are automated, so your team spends its time on the work that needs a person.",
      },
      {
        title: "Software you can use early",
        description:
          "We release in small increments, so you get value — and give feedback — weeks in, not at the end.",
      },
      {
        title: "A system you own",
        description:
          "You own the code and the data, with documentation and tests so any competent team can maintain it.",
      },
      {
        title: "Fewer errors",
        description:
          "Validation and a single source of truth replace re-keying between disconnected tools.",
      },
    ],
    approach: [
      {
        title: "Discovery",
        description:
          "We map the process the software has to support, with the people who will use it.",
      },
      {
        title: "First release",
        description:
          "We agree the smallest version that is useful on its own, and build that first.",
      },
      {
        title: "Iterate",
        description:
          "Short cycles of building, releasing and adjusting based on real use.",
      },
      {
        title: "Hand over or run",
        description:
          "We hand over with documentation and training, or keep running and improving it for you.",
      },
    ],
    goodFit: [
      "Your team runs key processes on spreadsheets and email.",
      "Off-the-shelf software forces you to work around it.",
      "Two or more of your systems need to share data.",
      "You have an idea for a product and need it built properly.",
    ],
  },
  {
    slug: "game-development",
    title: "Game Development",
    description:
      "We design and build games for web, mobile, and desktop — from small branded and educational games to full titles. We prototype early so you can play the idea before committing to it, and we handle the unglamorous parts too: performance on real devices, store submission, and updates after launch.",
    icon: "gamepad",
    tone: "accent",
    tagline: "Games for web, mobile and desktop — from first prototype to launch day.",
    offerings: [
      {
        title: "Branded and promotional games",
        description:
          "Short, shareable games that put your brand in front of people in a way they choose to spend time on.",
      },
      {
        title: "Educational games and gamified learning",
        description:
          "Training and learning content that people actually finish, with progress you can measure.",
      },
      {
        title: "Mobile and web games",
        description:
          "Casual and mid-sized titles for Android, iOS and the browser.",
      },
      {
        title: "Playable prototypes",
        description:
          "A rough but playable version of your idea, built fast, so you can test the fun before funding the full build.",
      },
      {
        title: "Store submission and release",
        description:
          "Builds, store listings, review requirements and the release itself on Google Play and the App Store.",
      },
      {
        title: "Live updates",
        description:
          "New levels, events, fixes and performance work after launch.",
      },
    ],
    outcomes: [
      {
        title: "Test the idea cheaply",
        description:
          "A prototype tells you whether the core idea works before you commit the full budget.",
      },
      {
        title: "Engagement that lasts",
        description:
          "Games hold attention far longer than an ad or a static page.",
      },
      {
        title: "Runs on real phones",
        description:
          "We test on the mid-range devices your players actually own, not just flagship hardware.",
      },
      {
        title: "A launch that sticks",
        description:
          "We handle the store process and stay on for the updates that keep players coming back.",
      },
    ],
    approach: [
      {
        title: "Concept",
        description:
          "We pin down the audience, the platform, and what the player should feel and learn.",
      },
      {
        title: "Prototype",
        description:
          "A playable build of the core loop, tested with real players.",
      },
      {
        title: "Production",
        description:
          "Art, levels, sound and polish, delivered in playable milestones.",
      },
      {
        title: "Launch and live",
        description:
          "Store release, then updates driven by how people actually play.",
      },
    ],
    goodFit: [
      "You want a campaign people engage with rather than scroll past.",
      "You need training or education content that people complete.",
      "You have a game idea and want to know whether it is fun before investing.",
      "You need a game studio that also handles release and upkeep.",
    ],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    description:
      "We dig into the data your business already collects to answer specific questions — what is driving a change, which customers behave differently, whether something actually worked. You get analysis you can act on, with the assumptions and caveats stated plainly rather than buried.",
    icon: "chart",
    tone: "brand",
    tagline: "Clear answers to specific business questions, from the data you already have.",
    offerings: [
      {
        title: "Question-led analysis",
        description:
          "We start from the decision you need to make and work back to the data that informs it.",
      },
      {
        title: "Sales and customer analysis",
        description:
          "Which customers buy what, who is at risk of leaving, and where revenue is really coming from.",
      },
      {
        title: "Operational analysis",
        description:
          "Finding the bottlenecks, delays and waste in how work actually moves through the business.",
      },
      {
        title: "Measuring what worked",
        description:
          "Whether a campaign, price change or new process actually made a difference — and by how much.",
      },
      {
        title: "Data quality review",
        description:
          "Finding gaps, duplicates and inconsistencies before they quietly skew your numbers.",
      },
      {
        title: "Reports you can share",
        description:
          "Findings written up plainly, with charts, assumptions and caveats your team can act on.",
      },
    ],
    outcomes: [
      {
        title: "Decisions with evidence",
        description:
          "Choices are backed by your own data rather than the loudest opinion in the room.",
      },
      {
        title: "Answers you can trust",
        description:
          "Every finding states its assumptions and limits, so nobody over-reads a number.",
      },
      {
        title: "Problems found early",
        description:
          "Trends and anomalies surface while there is still time to act on them.",
      },
      {
        title: "Skills that stay",
        description:
          "We show your team how the analysis was done so it can be repeated.",
      },
    ],
    approach: [
      {
        title: "Frame the question",
        description:
          "Agree exactly what we are trying to find out and what decision depends on it.",
      },
      {
        title: "Gather and check",
        description:
          "Pull the relevant data together and check it is fit to answer the question.",
      },
      {
        title: "Analyse",
        description:
          "Explore, test and quantify — and look for the explanations that could prove us wrong.",
      },
      {
        title: "Recommend",
        description:
          "Present what we found, how sure we are, and what we would do about it.",
      },
    ],
    goodFit: [
      "You collect plenty of data but rarely use it to decide anything.",
      "A key number has changed and nobody can say why.",
      "You want to know whether a past initiative actually paid off.",
      "You need an outside, impartial view of the evidence.",
    ],
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence",
    description:
      "We build the reporting layer your business runs on: governed metrics, dashboards people actually open, and self-service tools that let teams answer routine questions without waiting on anyone. The aim is one agreed definition per number, so revenue means the same thing in every meeting.",
    icon: "gauge",
    tone: "accent",
    tagline: "One trusted set of numbers, on dashboards your team actually opens.",
    offerings: [
      {
        title: "Dashboards and reporting",
        description:
          "Dashboards in tools like Power BI, built around the decisions each team makes — not every metric available.",
      },
      {
        title: "Agreed metric definitions",
        description:
          "One documented definition for revenue, margin, active customer and the rest, used everywhere.",
      },
      {
        title: "Automated reports",
        description:
          "Scheduled reports that arrive on their own, replacing the monthly copy-and-paste exercise.",
      },
      {
        title: "Self-service analytics",
        description:
          "Curated, governed datasets so teams can answer routine questions without waiting on anyone.",
      },
      {
        title: "Access and governance",
        description:
          "Making sure each person sees the data they should, and nothing they should not.",
      },
      {
        title: "Training",
        description:
          "Helping your team read, trust and build on the dashboards we deliver.",
      },
    ],
    outcomes: [
      {
        title: "One version of the truth",
        description:
          "Revenue means the same thing in every meeting, so discussions are about decisions, not whose number is right.",
      },
      {
        title: "Hours back every month",
        description:
          "Automated reporting replaces the manual effort of assembling the same numbers again and again.",
      },
      {
        title: "Problems spotted sooner",
        description:
          "Up-to-date dashboards show a dip in days, not at month-end.",
      },
      {
        title: "Less dependence on specialists",
        description:
          "Teams answer everyday questions themselves.",
      },
    ],
    approach: [
      {
        title: "Decisions first",
        description:
          "We list the decisions each team makes and the numbers those decisions need.",
      },
      {
        title: "Define the metrics",
        description:
          "Agree and document how each metric is calculated, with the people who own it.",
      },
      {
        title: "Build",
        description:
          "Connect the sources, model the data, and build the dashboards and reports.",
      },
      {
        title: "Adopt",
        description:
          "Train the people who will use them, and refine based on what they actually open.",
      },
    ],
    goodFit: [
      "Different reports give different answers to the same question.",
      "Someone spends days each month assembling reports by hand.",
      "Managers want to see performance without asking for it.",
      "You have dashboards that nobody opens.",
    ],
  },
  {
    slug: "data-engineering",
    title: "Data Engineering",
    description:
      "We build the pipelines and data models that move information reliably from source systems into somewhere useful. Batch or streaming, cloud or on-premise, with the tests and monitoring that keep it running once we hand it over.",
    icon: "pipeline",
    tone: "brand",
    tagline: "Reliable pipelines that get the right data to the right place, on time.",
    offerings: [
      {
        title: "Data pipelines",
        description:
          "Moving data from your source systems into a central store, on a schedule or in near real time.",
      },
      {
        title: "Data warehouses",
        description:
          "Designing and building the central store your reporting and analysis run on, in the cloud or on-premise.",
      },
      {
        title: "Data modelling",
        description:
          "Shaping raw records into clean, documented tables that are easy to query and hard to misuse.",
      },
      {
        title: "Integrating systems",
        description:
          "Bringing together data from your ERP, CRM, finance, spreadsheets and third-party APIs.",
      },
      {
        title: "Testing and monitoring",
        description:
          "Automated checks and alerts that catch broken or late data before your reports do.",
      },
      {
        title: "Migration",
        description:
          "Moving data safely between systems or platforms, reconciled so nothing is lost on the way.",
      },
    ],
    outcomes: [
      {
        title: "Data you can rely on",
        description:
          "Tests and monitoring mean problems are caught at the source, not discovered in a board meeting.",
      },
      {
        title: "Everything in one place",
        description:
          "Analysis and reporting draw from one consistent store instead of a dozen exports.",
      },
      {
        title: "Fresher numbers",
        description:
          "Reports update on their own, as often as the business needs.",
      },
      {
        title: "Room to grow",
        description:
          "Pipelines built to cope with more data and new sources without being rewritten.",
      },
    ],
    approach: [
      {
        title: "Audit the sources",
        description:
          "Find out where your data lives, how good it is, and who depends on it.",
      },
      {
        title: "Design",
        description:
          "Choose the architecture and data model that fit your scale and budget.",
      },
      {
        title: "Build and test",
        description:
          "Build the pipelines with tests and monitoring from day one.",
      },
      {
        title: "Operate and hand over",
        description:
          "Run it, document it, and train your team — or keep running it for you.",
      },
    ],
    goodFit: [
      "Reports depend on someone manually exporting and combining files.",
      "Your systems do not talk to each other.",
      "You are planning a move to the cloud or a new platform.",
      "Data problems are found by the people reading the reports.",
    ],
  },
  {
    slug: "data-science",
    title: "Data Science Consulting",
    description:
      "We help you work out where statistics and machine learning genuinely pay off, and where simpler answers will do. From framing the problem through to a model running in production, we stay focused on results you can measure against the decision you are trying to make.",
    icon: "insight",
    tone: "accent",
    tagline: "Statistics and machine learning, applied where they genuinely pay off.",
    offerings: [
      {
        title: "Opportunity assessment",
        description:
          "An honest look at where modelling could add value in your business — and where simpler methods will do.",
      },
      {
        title: "Forecasting",
        description:
          "Demand, sales, stock and cash-flow forecasts with stated uncertainty, not just a single line.",
      },
      {
        title: "Customer models",
        description:
          "Segmentation, churn risk and propensity models that tell you who to focus on.",
      },
      {
        title: "Experiments",
        description:
          "Designing and analysing tests so you know whether a change really made the difference.",
      },
      {
        title: "Models in production",
        description:
          "Taking a model from a notebook into a system your business uses every day.",
      },
      {
        title: "Monitoring",
        description:
          "Tracking model accuracy over time and retraining when the world changes.",
      },
    ],
    outcomes: [
      {
        title: "Better-informed decisions",
        description:
          "Forecasts and risk scores that feed directly into planning and day-to-day work.",
      },
      {
        title: "Effort where it counts",
        description:
          "Teams focus on the customers, products or risks most likely to matter.",
      },
      {
        title: "Measured results",
        description:
          "Every model is judged against the business decision it supports, not just a technical score.",
      },
      {
        title: "No black boxes",
        description:
          "We explain what drives each model's predictions, in plain language.",
      },
    ],
    approach: [
      {
        title: "Frame",
        description:
          "Define the decision, the data available, and what success looks like in business terms.",
      },
      {
        title: "Baseline",
        description:
          "Start with the simplest approach that could work, so every gain is measured against it.",
      },
      {
        title: "Model",
        description:
          "Build, validate and stress-test the model on data it has not seen.",
      },
      {
        title: "Deploy and monitor",
        description:
          "Put it into use, and keep checking that it still performs.",
      },
    ],
    goodFit: [
      "You plan stock, staff or cash from gut feel and last year's numbers.",
      "You want to know which customers are likely to leave or buy again.",
      "You have a model that never made it out of a notebook.",
      "You want an independent view on whether machine learning is worth it for you.",
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence Consulting",
    description:
      "We help you apply AI where it genuinely earns its place — document processing, assistants that answer from your own material, forecasting, and automating work that is repetitive rather than judgement-heavy. We are candid about where today's models fall short, and we build with evaluation and human review in place from the start.",
    icon: "network",
    tone: "brand",
    tagline: "Practical AI that saves time — evaluated, reviewed and built to be trusted.",
    offerings: [
      {
        title: "AI strategy and readiness",
        description:
          "Finding the processes where AI would genuinely help, and the ones where it would not — before anything is built.",
      },
      {
        title: "Document processing",
        description:
          "Pulling the information you need out of invoices, forms, contracts and applications, automatically.",
      },
      {
        title: "Assistants on your own material",
        description:
          "Chat assistants that answer questions from your policies, manuals and knowledge base, and show where each answer came from.",
      },
      {
        title: "Workflow automation",
        description:
          "Taking repetitive, rules-based work — sorting, drafting, summarising, routing — off your team's plate.",
      },
      {
        title: "Evaluation and safeguards",
        description:
          "Testing AI output against real examples, with human review where the stakes call for it.",
      },
      {
        title: "Training your team",
        description:
          "Helping staff use AI tools effectively and understand their limits.",
      },
    ],
    outcomes: [
      {
        title: "Hours saved on routine work",
        description:
          "Staff spend their time on judgement, not on retyping, sorting and summarising.",
      },
      {
        title: "Faster answers",
        description:
          "Customers and staff find information in seconds instead of searching documents.",
      },
      {
        title: "Controlled risk",
        description:
          "Evaluation and human review are designed in from the start, not bolted on after a mistake.",
      },
      {
        title: "Honest advice",
        description:
          "We will tell you when AI is the wrong tool — and suggest what to use instead.",
      },
    ],
    approach: [
      {
        title: "Identify",
        description:
          "Find the tasks where AI fits, and estimate the time and money it could save.",
      },
      {
        title: "Prove it",
        description:
          "Build a small pilot and measure it against real examples from your business.",
      },
      {
        title: "Build in safeguards",
        description:
          "Add evaluation, human review and monitoring before scaling up.",
      },
      {
        title: "Roll out",
        description:
          "Integrate it into daily work, train your team, and keep measuring.",
      },
    ],
    goodFit: [
      "Staff spend hours reading, sorting or retyping documents.",
      "People repeatedly ask the same questions answered in your own documents.",
      "You want to use AI but are unsure where it is safe and worthwhile.",
      "You tried an AI tool and could not trust its output.",
    ],
  },
];

export const serviceHref = (service: Pick<Service, "slug">) =>
  `/services/${service.slug}`;
