import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { sprintData } from "@/data/sprint";

export function MonthlySprintSection() {
  return (
    <Section
      id="sprint"
      badge={sprintData.badge}
      title={sprintData.heading}
      subtitle={sprintData.subheading}
    >
      <div className="sprint-layout">
        {/* Main Active Contest Card */}
        <article className="contest-main-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
            <span className="contest-status-pill">
              <span className="pulse-dot" style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "var(--success)" }} />
              {sprintData.contest.status} · {sprintData.contest.window}
            </span>
            <span style={{ fontSize: "0.75rem", color: "var(--text-subtle)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {sprintData.contest.timezoneNote}
            </span>
          </div>

          <div>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-subtle)" }}>
              {sprintData.contest.label}
            </span>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#ffffff", marginTop: "0.25rem", letterSpacing: "-0.02em" }}>
              {sprintData.contest.title}
            </h3>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", marginTop: "0.5rem", lineHeight: "1.6" }}>
              {sprintData.description}
            </p>
          </div>

          {/* Bounties / Stakes */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", background: "var(--bg-subtle)", padding: "1.25rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-default)" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent-light)" }}>
              Contest Bounty &amp; Placement Stakes
            </span>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {sprintData.contest.bounties.map((bounty) => (
                <li key={bounty.text} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "var(--text-primary)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                  <span>{bounty.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Button href="/explore" variant="primary">
              Enter Active Contest Round
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Button>
          </div>
        </article>

        {/* Right Column: Perks Tiers & Leaderboard Preview */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Reward Tiers */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-subtle)" }}>
              Sprint Reward Tiers
            </span>
            {sprintData.rewardTiers.map((tier) => (
              <div
                key={tier.name}
                className={`reward-card ${tier.highlight ? "highlight" : ""}`}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.25rem" }}>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff" }}>
                    {tier.name}
                  </h4>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      padding: "0.2rem 0.5rem",
                      borderRadius: "var(--radius-full)",
                      background: tier.highlight ? "var(--accent)" : "rgba(255, 255, 255, 0.08)",
                      color: "#ffffff",
                    }}
                  >
                    {tier.badge}
                  </span>
                </div>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", lineHeight: "1.5" }}>
                  {tier.perks}
                </p>
              </div>
            ))}
          </div>

          {/* Leaderboard Table Preview */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-md)",
              padding: "1.25rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-subtle)" }}>
                Active Round Standings
              </span>
              <span style={{ fontSize: "0.75rem", color: "var(--success)", fontWeight: 600 }}>
                ● Live Sync
              </span>
            </div>

            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Candidate</th>
                  <th>Institute</th>
                  <th style={{ textAlign: "right" }}>Score</th>
                </tr>
              </thead>
              <tbody>
                {sprintData.leaderboard.map((entry) => (
                  <tr key={entry.rank}>
                    <td style={{ fontWeight: 700, color: entry.rank === "01" ? "var(--gold)" : "var(--text-muted)" }}>
                      #{entry.rank}
                    </td>
                    <td style={{ fontWeight: 600, color: "#ffffff" }}>
                      {entry.name}
                    </td>
                    <td style={{ color: "var(--text-muted)", fontSize: "0.8125rem" }}>
                      {entry.college}
                    </td>
                    <td style={{ textAlign: "right", fontWeight: 700, color: "var(--accent-light)", fontFamily: "monospace" }}>
                      {entry.score.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}
