import { Section } from "@/components/ui/Section";
import { sprintData } from "@/data/sprint";

export function MonthlySprintSection() {
  return (
    <Section
      id="sprint"
      badge={sprintData.badge}
      title={sprintData.heading}
      subtitle={sprintData.subheading}
      className="sprint-section"
    >
      {/* Monthly Challenges. Real Rewards. */}
      <div className="sprint-subheading-group">
        <h3 className="sprint-challenges-title">{sprintData.challengesHeading}</h3>
        <p className="sprint-challenges-desc">{sprintData.challengesSubheading}</p>
      </div>

      {/* Career Rewards Tier List */}
      <div className="sprint-rewards-block">
        <p className="sprint-rewards-label">{sprintData.rewardsLabel}</p>
        <div className="sprint-tiers-list">
          {sprintData.rewardTiers.map((tier) => (
            <div key={tier.title} className="sprint-tier-item">
              <h4 className="sprint-tier-title">{tier.title}</h4>
              <p className="sprint-tier-desc">{tier.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Contest Outer Card */}
      <div className="sprint-contest-card">
        {/* Top Header of Card */}
        <div className="sprint-card-header">
          <p className="sprint-card-badge">{sprintData.contest.badge}</p>
          <h3 className="sprint-card-title">{sprintData.contest.title}</h3>
          <p className="sprint-card-subtitle">{sprintData.contest.subtitle}</p>
        </div>

        {/* 2-Column Split */}
        <div className="sprint-card-body">
          {/* Left Column: Completed Challenge info */}
          <div className="sprint-challenge-column">
            <div>
              <div className="sprint-status-tag">
                <span className="sprint-status-dot" />
                <span>{sprintData.contest.status}</span>
              </div>
              <div className="sprint-challenge-title">
                {sprintData.contest.challengeLines.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>

            <div className="sprint-window-box">
              <p className="sprint-window-label">{sprintData.contest.windowLabel}</p>
              <p className="sprint-window-val">{sprintData.contest.windowStatus}</p>
              <p className="sprint-window-note">{sprintData.contest.windowNote}</p>
            </div>
          </div>

          {/* Right Column: Bounties & Leaderboard Preview */}
          <div className="sprint-bounties-column">
            {/* Bounties */}
            <div className="sprint-bounties-group">
              <div className="sprint-bounties-title">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
                <span>BOUNTIES</span>
              </div>
              <div className="sprint-bounties-list">
                {sprintData.contest.bounties.map((bounty, i) => (
                  <div key={i} className="sprint-bounty-row">
                    <span className="sprint-bounty-bullet" />
                    <span>{bounty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard Table Preview */}
            <div className="sprint-leaderboard-group">
              <p className="sprint-leaderboard-label">LEADERBOARD PREVIEW</p>
              <div className="sprint-table-container">
                <table className="sprint-table">
                  <thead>
                    <tr>
                      <th style={{ width: "48px" }}>#</th>
                      <th>PARTICIPANT</th>
                      <th style={{ textAlign: "right" }}>PTS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sprintData.contest.leaderboard.map((row) => (
                      <tr key={row.rank}>
                        <td className="sprint-td-rank">{row.rank}</td>
                        <td className="sprint-td-name">{row.name}</td>
                        <td className="sprint-td-pts">{row.pts}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
