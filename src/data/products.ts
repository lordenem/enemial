/**
 * Enemial's own SaaS products. Add a new entry here and it appears on both the
 * home page (if `featured`) and the products page automatically.
 */

export type ProductStatus = "live" | "launching" | "in-development";

export type Product = {
  slug: string;
  name: string;
  /** One line, used on cards and in the home-page summary. */
  tagline: string;
  /** Longer marketing copy for the products page. */
  description: string;
  /** Short capability labels — not a full feature breakdown. */
  highlights: string[];
  status: ProductStatus;
  /** Human-readable status label shown on the product badge. */
  statusLabel: string;
  /** External product site. Null while a product has no public presence yet. */
  url: string | null;
  ctaLabel: string | null;
  featured: boolean;
};

export const products: Product[] = [
  {
    slug: "attestway",
    name: "Attestway",
    tagline: "Digital signatures and document workflow, built for compliance.",
    description:
      "Attestway is a digital signature and document management platform. Send documents for signature, route them through the approvals your business actually uses, and keep every version, signer, and timestamp in one place. Each document carries a complete audit trail, so when someone asks who signed what and when, the answer takes seconds rather than an afternoon in a filing cabinet.",
    highlights: [
      "Legally sound e-signatures",
      "Document workflow and approvals",
      "Complete audit trail",
      "Centralised, searchable records",
    ],
    status: "launching",
    statusLabel: "Launching soon",
    // Placeholder — swap for the real Attestway URL.
    url: "https://attestway.com",
    ctaLabel: "Visit Attestway",
    featured: true,
  },
  {
    slug: "funinvite",
    name: "FunInvite",
    tagline: "Event creation and digital invitations.",
    description:
      "FunInvite is a platform for creating events and sending digital invitations — planning the occasion, inviting guests, and tracking who is coming, without the group-chat spreadsheet.",
    highlights: [
      "Event creation",
      "Digital invitations",
      "Guest responses in one place",
    ],
    status: "live",
    statusLabel: "Live",
    url: "https://www.fun-invite.com/",
    ctaLabel: "Visit FunInvite",
    featured: false,
  },
];

export const featuredProduct = products.find((product) => product.featured);
