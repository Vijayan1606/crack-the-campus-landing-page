export interface Cta {
  label: string;
  href: string;
}

export const site = {
  name: "Crack The Campus",
  description:
    "AI-proctored assessments, coding and aptitude practice, and a CTC Score recruiters trust, built for engineering students.",
  tagline:
    "Campus-to-career infrastructure: Web Hub training, Pro-Suite verification, recruiter-trusted scores.",
  promo: {
    text: "Summer coupon: get your discount now.",
    cta: { label: "Claim on pricing", href: "/pricing" },
  },
  ctas: {
    primary: { label: "Start Upskilling", href: "/explore" } satisfies Cta,
    secondary: { label: "Get Started", href: "/signup" } satisfies Cta,
  },
  contact: {
    email: "info@crackthecampus.com",
    pressText: "Partnerships, institutions, and press.",
    address: [
      "Ground Floor, ThiDiff Tech Park",
      "Metro Station - Patalamma Temple, near Singasandra",
      "Aishwarya Crystal Layout, Singasandra",
      "Bengaluru, Karnataka 560068",
    ],
    mapHref:
      "https://maps.google.com/?q=ThiDiff+Tech+Park,+Singasandra,+Bengaluru",
    embedMapSrc:
      "https://maps.google.com/maps?q=ThiDiff+Tech+Park,+Singasandra,+Bengaluru&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/crackthecampus_",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/crackthecampus",
    },
  ],
};
