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
        <h3 className="sprint-rewards-label">{sprintData.rewardsLabel}</h3>
        <ul className="sprint-tiers-list">
          {sprintData.rewardTiers.map((tier) => (
            <li key={tier.title} className="sprint-tier-item">
              <p className="sprint-tier-title">{tier.title}</p>
              <p className="sprint-tier-desc">{tier.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Monthly Contest Outer Card with Precision Gradient Frame */}
      <div id="contest" className="sprint-contest-wrapper">
        <div className="sprint-contest-border-wrap">
          <div className="sprint-contest-card-inner">
            {/* Top Specular Accent Line */}
            <div className="sprint-card-accent-top" aria-hidden="true" />

            {/* Header */}
            <div className="sprint-card-header">
              <p className="sprint-card-badge">{sprintData.contest.badge}</p>
              <h3 className="sprint-card-title">{sprintData.contest.title}</h3>
              <p className="sprint-card-subtitle">{sprintData.contest.subtitle}</p>
            </div>

            {/* 2-Column Split */}
            <div className="sprint-card-body">
              {/* Left Column: Challenge Details with Exact Deep Navy Gradient */}
              <div className="sprint-challenge-column">
                <div className="sprint-challenge-column-bg" aria-hidden="true" />
                <div className="sprint-challenge-content">
                  <div>
                    <div className="sprint-status-tag">
                      <span className="sprint-status-dot-wrap">
                        <span className="sprint-status-dot" />
                      </span>
                      <span>{sprintData.contest.status}</span>
                    </div>
                    <p className="sprint-challenge-title">
                      {sprintData.contest.challengeLines.map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx < sprintData.contest.challengeLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>

                  <div className="sprint-window-box">
                    <p className="sprint-window-label">{sprintData.contest.windowLabel}</p>
                    <p className="sprint-window-val">{sprintData.contest.windowStatus}</p>
                    <p className="sprint-window-note">{sprintData.contest.windowNote}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Bounties & Leaderboard Preview */}
              <div className="sprint-bounties-column">
                {/* Bounties */}
                <div>
                  <div className="sprint-bounties-title">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sprint-trophy-icon"
                      aria-hidden="true"
                    >
                      <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" />
                      <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" />
                      <path d="M18 9h1.5a1 1 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
                      <path d="M6 9H4.5a1 1 0 0 1 0-5H6" />
                    </svg>
                    <span>BOUNTIES</span>
                  </div>
                  <ul className="sprint-bounties-list">
                    {sprintData.contest.bounties.map((bounty, i) => (
                      <li key={i} className="sprint-bounty-row">
                        <span className="sprint-bounty-bullet" aria-hidden="true" />
                        <span>{bounty}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Leaderboard Table Preview */}
                <div>
                  <p className="sprint-leaderboard-label">LEADERBOARD PREVIEW</p>
                  <div className="sprint-table-wrapper">
                    <div className="sprint-table-head">
                      <span>#</span>
                      <span>PARTICIPANT</span>
                      <span className="sprint-th-pts">PTS</span>
                    </div>
                    {sprintData.contest.leaderboard.map((row) => (
                      <div key={row.rank} className="sprint-table-row">
                        <span className="sprint-td-rank">{row.rank}</span>
                        <span className="sprint-td-name">{row.name}</span>
                        <span className="sprint-td-pts">{row.pts}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
