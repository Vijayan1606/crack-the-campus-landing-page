import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ecosystemData } from "@/data/ecosystem";

export function EcosystemSection() {
  return (
    <Section
      id="ecosystem"
      badge={ecosystemData.label}
      title={ecosystemData.heading}
      subtitle={ecosystemData.subheading}
    >
      <div className="ecosystem-grid">
        {ecosystemData.tracks.map((track) => (
          <article key={track.number} className="ecosystem-card">
            <div className="ecosystem-card-header">
              <span className="ecosystem-number">{track.badge}</span>
            </div>

            <h3 className="ecosystem-card-title">
              {track.title} <span>{track.subtitle}</span>
            </h3>
            <p className="ecosystem-card-headline">{track.headline}</p>
            <p className="ecosystem-card-desc">{track.description}</p>

            <div className="feature-list">
              {track.features.map((feat) => (
                <div key={feat.title} className="feature-item">
                  <h4 className="feature-title">{feat.title}</h4>
                  <p className="feature-desc">{feat.description}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "auto" }}>
              <Button href={track.cta.href} variant="primary">
                {track.cta.label}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
