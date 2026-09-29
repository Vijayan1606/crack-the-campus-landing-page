export interface RewardTier {
  title: string;
  description: string;
}

export interface LeaderboardRow {
  rank: string;
  name: string;
  pts: string;
}

export const sprintData = {
  badge: "THE MONTHLY SPRINT",
  heading: "The Monthly Performance Series.",
  subheading: "Test your growth, compete with your peers, and win rewards while you upskill.",
  challengesHeading: "Monthly Challenges. Real Rewards.",
  challengesSubheading:
    "Every month, we launch a new Corporate Pathway contest. Master the specific tech stack, top the leaderboard, and claim your prize.",
  rewardsLabel: "CAREER REWARDS",
  rewardTiers: [
    {
      title: "Elite Tier",
      description: "Premium tech hardware or course scholarships.",
    },
    {
      title: "Growth Tier",
      description: "Exclusive access to premium hiring events.",
    },
    {
      title: "Participation Tier",
      description: "Recognition for all participants in your CTC Score profile.",
    },
  ] satisfies RewardTier[],
  contest: {
    badge: "MONTHLY CONTEST",
    title: "Upskill. Compete. Win.",
    subtitle: "Join our monthly contests to pressure-test your skills in a real-world environment.",
    status: "COMPLETED",
    challengeLines: ["COMPLETED CHALLENGE:", "CORPORATE PATHWAY", "CTC CONTEST"],
    windowLabel: "SERIES WINDOW",
    windowStatus: "Closed",
    windowNote: "All deadlines UTC",
    bounties: [
      "Hardware & scholarship pool (Elite)",
      "Premium hiring event passes (Growth)",
      "Profile badge + score visibility (Credential)",
    ],
    leaderboard: [
      { rank: "01", name: "PRI****YA", pts: "8" },
      { rank: "02", name: "ARJ****AN", pts: "7.8" },
      { rank: "03", name: "NEH****RI", pts: "7.2" },
    ] satisfies LeaderboardRow[],
  },
};
