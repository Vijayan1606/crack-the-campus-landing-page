import { Section } from "@/components/ui/Section";
import { statsData } from "@/data/stats";

export function InfrastructureStrip() {
  return (
    <Section
      id="infrastructure"
      title={statsData.heading}
      subtitle={statsData.subheading}
      className="infrastructure-section"
    >
      <div className="infra-stats-grid">
        {statsData.metrics.map((stat) => (
          <div key={stat.label} className="infra-stat-item">
            <span className="infra-stat-value">{stat.value}</span>
            <span className="infra-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="infra-tagline-wrap">
        <p className="infra-tagline">{statsData.footerTagline}</p>
      </div>
    </Section>
  );
}
