export interface EcosystemTrack {
  number: string;
  badge: string;
  videoUrl: string;
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
    variant: "primary" | "secondary";
    showArrow?: boolean;
  };
}

export const ecosystemData = {
  label: "DUAL-CORE STRUCTURE",
  heading: "One Ecosystem. Two Ways to Win.",
  subheading:
    "Start with open-access learning on the web, then prove your skills in a professional hiring environment.",
  tracks: [
    {
      number: "01",
      badge: "01 · WEB",
      videoUrl: "https://static.corp.crackthecampus.com/landing_page_assets/Web-version.mp4",
      title: "The Web Hub",
      subtitle: "(Learning & Discovery)",
      headline: "Your Daily Training Ground",
      description: "Open access to prepare anytime, anywhere.",
      caption: "WEB APP: COURSES, PRACTICE, AND PATHWAYS IN THE BROWSER.",
      features: [
        {
          title: "AI-Assisted Courses",
          description: "Upskill with interactive, industry-mapped modules.",
        },
        {
          title: "Corporate Pathways",
          description: "Master the specific requirements for your dream jobs.",
        },
        {
          title: "AI Resume Builder",
          description: "Create a professional, ATS-ready resume in minutes.",
        },
        {
          title: "Practice Assessments",
          description: "Unlimited mock tests to sharpen your skills without the pressure.",
        },
      ],
      cta: {
        label: "Explore Courses & Pathways",
        href: "/explore",
        variant: "secondary",
        showArrow: true,
      },
    },
    {
      number: "02",
      badge: "02 · SOFTWARE",
      videoUrl: "https://static.corp.crackthecampus.com/landing_page_assets/Software.mp4",
      title: "The Pro-Suite",
      subtitle: "(Performance & Hiring)",
      headline: "The Official Hiring Environment",
      description: "The software that secures your placement.",
      caption: "DESKTOP SUITE: ASSESSMENTS, CTC SCORE, AND RECRUITER-READY WORKFLOWS.",
      features: [
        {
          title: "Official Hiring Drives",
          description: "Attend actual recruitment assessments for top companies.",
        },
        {
          title: "Simulated Environments",
          description: "Practice in a real, proctored coding and interview setting.",
        },
        {
          title: "High-Stakes Evaluation",
          description: "Complete verified assessments that generate your CTC Score.",
        },
        {
          title: "Direct Placement Access",
          description: "Connect directly with recruiters through official test scores.",
        },
      ],
      cta: {
        label: "Download Software Suite",
        href: "/download",
        variant: "primary",
        showArrow: false,
      },
    },
  ] satisfies EcosystemTrack[],
};
