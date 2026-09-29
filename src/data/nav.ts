import type { Cta } from "./site";

export const navLinks: Cta[] = [
  { label: "Institution", href: "/institution" },
  { label: "Explore", href: "/explore" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/download" },
];

export const rightNavLinks: Cta[] = [
  { label: "Signup", href: "/signup" },
  { label: "Contact", href: "/contact" },
];

export const authLinks = {
  login: { label: "Login", href: "/login" },
  signup: { label: "Signup", href: "/signup" },
  contact: { label: "Contact", href: "/contact" },
};

export const footerProductLinks: Cta[] = [
  { label: "Explore courses", href: "/explore" },
  { label: "Download suite", href: "/download" },
  { label: "Pricing", href: "/pricing" },
  { label: "Documentation", href: "/documentation" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "FAQ", href: "#faq" },
];
