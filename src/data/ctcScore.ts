export interface ScorePillar {
  title: string;
  badgeImg: string;
  description: string;
  source: string;
}

export interface ScoreTier {
  range: string;
  min: number;
  max: number;
  tierName: string;
  targetCompanies: string[];
  salaryRange: string;
  color: string;
  tagline: string;
}

export const ctcScoreData = {
  label: "THE WHY",
  heading: "Beyond the Resume: The CTC Score.",
  subheading:
    "Give recruiters a defensible, institution-grade signal. Web Hub builds the foundation; Pro-Suite verifies performance, rolled into one credential.",
  pillars: [
    {
      title: "Skills",
      badgeImg: "/badges/badge-skills.png",
      description: "Capability signal mapped from your Web Hub profile, courses, and pathways.",
      source: "Web Hub Telemetry",
    },
    {
      title: "Practice",
      badgeImg: "/badges/badge-practice.png",
      description: "Consistency and reps recorded in the Web Hub: mocks, drills, and readiness.",
      source: "Continuous Drills",
    },
    {
      title: "Software performance",
      badgeImg: "/badges/badge-software.png",
      description: "Proctored outcomes and high-stakes results from the Pro-Suite environment.",
      source: "Pro-Suite Integrity",
    },
  ] satisfies ScorePillar[],
  result: {
    title: "CTC Score",
    scale: "0.0 to 10.0",
    badgeImg: "/badges/badge-ctc-hero.png",
    textPrefix: "Web Hub contributes skills and practice telemetry. Pro-Suite supplies proctored software performance. Together they produce one ",
    textHighlight: "verified credential",
    textSuffix: " recruiters can rely on.",
  },
  tiers: [
    {
      range: "8.5 – 10.0",
      min: 8.5,
      max: 10.0,
      tierName: "Tier 1: Global High-Performance",
      targetCompanies: ["Google", "Meta", "NVIDIA", "Amazon"],
      salaryRange: "20 – 45+ LPA",
      color: "#10b981",
      tagline: "Direct interview fast-track with top product firms.",
    },
    {
      range: "7.5 – 8.4",
      min: 7.5,
      max: 8.4,
      tierName: "Tier 2: Enterprise & Product Innovators",
      targetCompanies: ["SAP", "Intel", "Samsung", "PayPal"],
      salaryRange: "12 – 22 LPA",
      color: "#8b5cf6",
      tagline: "Shortlisted for high-yield technical and architectural roles.",
    },
    {
      range: "6.5 – 7.4",
      min: 6.5,
      max: 7.4,
      tierName: "Tier 3: Competitive Technology Services",
      targetCompanies: ["TCS Digital", "Accenture", "Infosys PP", "Wipro Turbo"],
      salaryRange: "7 – 12 LPA",
      color: "#3b82f6",
      tagline: "Preferred candidate status for elite digital consulting units.",
    },
    {
      range: "5.0 – 6.4",
      min: 5.0,
      max: 6.4,
      tierName: "Tier 4: Foundation Readiness",
      targetCompanies: ["TCS Ninja", "Cognizant", "Capgemini", "Tech Mahindra"],
      salaryRange: "4 – 6.5 LPA",
      color: "#f59e0b",
      tagline: "Solid baseline readiness across core aptitude and foundational coding.",
    },
  ] satisfies ScoreTier[],
};
