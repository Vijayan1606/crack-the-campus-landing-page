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
      className="ecosystem-section"
    >
      <div className="ecosystem-dual-layout">
        {ecosystemData.tracks.map((track, idx) => (
          <article
            key={track.number}
            className={`ecosystem-column ${idx === 0 ? "ecosystem-col-left" : "ecosystem-col-right"}`}
          >
            {/* Tag Badge */}
            <div className="ecosystem-col-badge">{track.badge}</div>

            {/* Video Player */}
            <div className="ecosystem-media-frame">
              <video
                src={track.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>

            {/* Caption below video */}
            <p className="ecosystem-media-caption">{track.caption}</p>

            {/* Title & Subtitle */}
            <h3 className="ecosystem-col-title">
              {track.title}{" "}
              <span className="ecosystem-col-subtitle">{track.subtitle}</span>
            </h3>
            <p className="ecosystem-col-headline">{track.headline}</p>
            <p className="ecosystem-col-desc">{track.description}</p>

            {/* Feature List */}
            <div className="ecosystem-features">
              {track.features.map((feat) => (
                <div key={feat.title} className="ecosystem-feature-item">
                  <span className="ecosystem-feature-name">{feat.title}: </span>
                  <span className="ecosystem-feature-text">{feat.description}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="ecosystem-col-action">
              <Button
                href={track.cta.href}
                variant={track.cta.variant}
                className={track.cta.variant === "primary" ? "ecosystem-btn-primary" : "ecosystem-btn-secondary"}
              >
                <span>{track.cta.label}</span>
                {track.cta.showArrow && (
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
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                )}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
