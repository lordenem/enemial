/**
 * Company-wide facts, navigation, and contact details.
 * Edit here and the change propagates across every page and the footer.
 */

export const site = {
  name: "Enemial Technologies",
  legalName: "Enemial Technologies (Pty) Ltd",
  shortName: "Enemial",
  /** The production domain — used for canonical + OG URLs and the sitemap. */
  url: "https://enemialtechnologies.com",
  tagline: "We build software products, and we help you build yours.",
  description:
    "Enemial Technologies is a Gaborone-based software company building our own SaaS products and providing software and data consulting to businesses.",
  location: "Gaborone, Botswana",
  /**
   * Company registration (UIN) number, shown in the footer when set.
   * Left empty deliberately — fill in the real number rather than a guess.
   */
  registrationNumber: "" as string,
} as const;

export const contact = {
  email: "nmampare@enemialtechnologies.com",
  phones: ["+267 74750403", "+267 74996392"],
  address: {
    line1: "Plot 77372, Gaborone North",
    postal: "P O Box 80945",
    city: "Gaborone",
    country: "Botswana",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
