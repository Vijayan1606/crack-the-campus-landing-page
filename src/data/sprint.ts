export interface RewardTier {
  name: string;
  badge: string;
  perks: string;
  highlight: boolean;
}

export interface LeaderboardEntry {
  rank: string;
  name: string;
  score: number;
  college: string;
  avatarColor: string;
}

export const sprintData = {
  badge: "The Monthly Sprint",
  heading: "The Monthly Performance Series.",
  subheading: "Test your growth, compete with your peers, and win rewards while you upskill.",
  tagline: "Monthly Challenges. Real Rewards.",
  description:
    "Every month, we launch a new Corporate Pathway contest. Master the specific tech stack, top the leaderboard, and claim your prize.",
  callout: {
    title: "Upskill. Compete. Win.",
    text: "Join our monthly contests to pressure-test your skills in a real-world environment.",
  },
  contest: {
    status: "Active Series",
    label: "COMPLETED CHALLENGE / CURRENT ROUND",
    title: "CORPORATE PATHWAY CTC CONTEST",
    window: "March 2026 Edition",
    timezoneNote: "All deadlines UTC",
    bounties: [
      { text: "Hardware & scholarship pool (Elite)", icon: "trophy" },
      { text: "Premium hiring event passes (Growth)", icon: "ticket" },
      { text: "Profile badge + score visibility (Credential)", icon: "shield" },
    ],
  },
  rewardTiers: [
    {
      name: "Elite Tier",
      badge: "Top 1%",
      perks: "Premium tech hardware or full course scholarships with 1-on-1 industry mentorship.",
      highlight: true,
    },
    {
      name: "Growth Tier",
      badge: "Top 10%",
      perks: "Exclusive fast-track invitations to premium private hiring events & mock interview panels.",
      highlight: false,
    },
    {
      name: "Participation Tier",
      badge: "All Qualified",
      perks: "Verified contest participation credential attached to your public CTC Score profile.",
      highlight: false,
    },
  ] satisfies RewardTier[],
  leaderboard: [
    { rank: "01", name: "PRI****YA", score: 8.0, college: "NIT Trichy", avatarColor: "#7c3aed" },
    { rank: "02", name: "ARJ****AN", score: 7.8, college: "VIT Vellore", avatarColor: "#3b82f6" },
    { rank: "03", name: "NEH****RI", score: 7.2, college: "BITS Pilani", avatarColor: "#10b981" },
    { rank: "04", name: "ROH****IT", score: 7.1, college: "IIT Madras", avatarColor: "#f59e0b" },
    { rank: "05", name: "ANK****TA", score: 6.9, college: "SRM University", avatarColor: "#ec4899" },
    { rank: "06", name: "VIK****AS", score: 6.8, college: "PES University", avatarColor: "#06b6d4" },
  ] satisfies LeaderboardEntry[],
};
