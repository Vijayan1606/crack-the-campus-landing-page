import type { Cta } from "./site";

export const navLinks: Cta[] = [
  { label: "Institution", href: "/institution" },
  { label: "Explore", href: "/explore" },
  { label: "Pricing", href: "/pricing" },
  { label: "Download", href: "/download" },
];

export const authLinks = { login: { label: "Login", href: "/login" }, signup: { label: "Sign up", href: "/signup" } };

export const footerGroups: { title: string; links: Cta[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Explore courses", href: "/explore" },
      { label: "Download suite", href: "/download" },
      { label: "Pricing", href: "/pricing" },
      { label: "Documentation", href: "/documentation" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
