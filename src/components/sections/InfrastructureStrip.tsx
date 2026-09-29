import { statsData } from "@/data/stats";

export function InfrastructureStrip() {
  return (
    <section 
      id="infrastructure" 
      className="infrastructure-strip-section"
      aria-labelledby="scalability-strip-heading"
    >
      <div className="infra-inner-container">
        <header className="infra-header">
          <h2 id="scalability-strip-heading" className="infra-title">
            {statsData.heading}
          </h2>
          <p className="infra-subtitle">
            {statsData.subheading}
          </p>
        </header>

        <div className="infra-stats-grid" role="presentation">
          {statsData.metrics.map((stat) => (
            <div key={stat.label} className="infra-stat-item">
              <p className="infra-stat-value">{stat.value}</p>
              <p className="infra-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="infra-tagline">
          {statsData.footerTagline}
        </p>
      </div>
    </section>
  );
}
