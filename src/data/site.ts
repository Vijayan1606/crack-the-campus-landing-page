export interface Cta { label: string; href: string }

export const site = {
  name: "Crack The Campus",
  description:
    "AI-proctored assessments, coding and aptitude practice, and a CTC Score recruiters trust, built for engineering students.",
  promo: { text: "Summer coupon: get your discount now.", cta: { label: "Claim on pricing", href: "/pricing" } },
  ctas: {
    primary: { label: "Start Upskilling", href: "/explore" } satisfies Cta,
    secondary: { label: "Get Started", href: "/signup" } satisfies Cta,
  },
  contact: {
    email: "info@crackthecampus.com",
    address: ["ThiDiff Tech Park, Singasandra", "Bengaluru, Karnataka 560068"],
    mapHref: "https://maps.app.goo.gl/y6P9HgeWedwsfCiz9",
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/crackthecampus_" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/crackthecampus" },
  ],
};
