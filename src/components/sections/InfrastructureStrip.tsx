import { Section } from "@/components/ui/Section";
import { statsData } from "@/data/stats";

export function InfrastructureStrip() {
  return (
    <Section
      id="infrastructure"
      badge="Scalability & Reliability"
      title={statsData.heading}
      subtitle={statsData.subheading}
    >
      <div className="stats-grid">
        {statsData.metrics.map((stat) => (
          <div key={stat.label} className="stat-box">
            <span
              className="stat-number"
              style={stat.accent ? { color: stat.accent } : undefined}
            >
              {stat.value}
            </span>
            <span className="stat-label">{stat.label}</span>
            <p className="stat-detail">{stat.detail}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p style={{ fontSize: "0.8125rem", color: "var(--text-subtle)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {statsData.footerTagline}
        </p>
      </div>
    </Section>
  );
}
