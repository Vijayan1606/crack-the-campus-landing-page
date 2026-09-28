export interface EcosystemTrack {
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  caption: string;
  features: {
    title: string;
    description: string;
  }[];
  cta: {
    label: string;
    href: string;
  };
}

export const ecosystemData = {
  label: "The Ecosystem",
  heading: "One Ecosystem. Two Ways to Win.",
  subheading:
    "Start with open-access learning on the web, then prove your skills in a professional hiring environment.",
  tracks: [
    {
      number: "01",
      badge: "01 · Web",
      title: "The Web Hub",
      subtitle: "(Learning & Discovery)",
      headline: "Your Daily Training Ground",
      description: "Open access to prepare anytime, anywhere.",
      caption: "Web app: courses, practice, and pathways in the browser.",
      features: [
        {
          title: "AI-Assisted Courses",
          description: "Upskill with interactive, industry-mapped modules tailored to placement exams.",
        },
        {
          title: "Corporate Pathways",
          description: "Master the specific requirements and question patterns for your dream companies.",
        },
        {
          title: "AI Resume Builder",
          description: "Create a professional, ATS-ready resume in minutes highlighting verified projects.",
        },
        {
          title: "Practice Assessments",
          description: "Unlimited mock tests in DSA, aptitude, and core CS without the pressure.",
        },
      ],
      cta: {
        label: "Explore Courses & Pathways",
        href: "/explore",
      },
    },
    {
      number: "02",
      badge: "02 · Software",
      title: "The Pro-Suite",
      subtitle: "(Performance & Hiring)",
      headline: "The Official Hiring Environment",
      description: "The software that secures your placement.",
      caption: "Desktop suite: assessments, CTC Score, and recruiter-ready workflows.",
      features: [
        {
          title: "Official Hiring Drives",
          description: "Attend actual recruitment assessments for top tier-1 and tier-2 companies.",
        },
        {
          title: "Simulated Environments",
          description: "Practice in a real, proctored coding and interview setting with anti-cheat controls.",
        },
        {
          title: "High-Stakes Evaluation",
          description: "Complete verified assessments that generate your standardized CTC Score.",
        },
        {
          title: "Direct Placement Access",
          description: "Connect directly with recruiters through authenticated performance benchmarks.",
        },
      ],
      cta: {
        label: "Download Software Suite",
        href: "/download",
      },
    },
  ] satisfies EcosystemTrack[],
};
