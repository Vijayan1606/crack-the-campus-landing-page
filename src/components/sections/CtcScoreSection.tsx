import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ctcScoreData } from "@/data/ctcScore";
import { ScoreSimulator } from "./ScoreSimulator";

export function CtcScoreSection() {
  return (
    <Section
      id="score"
      badge={ctcScoreData.label}
      title={ctcScoreData.heading}
      subtitle={ctcScoreData.subheading}
    >
      {/* Three Core Signal Pillars */}
      <div className="score-formula-grid">
        {ctcScoreData.pillars.map((pillar) => (
          <div key={pillar.title} className="score-pillar-card">
            <div className="score-badge-img-wrapper">
              <Image
                src={pillar.badgeImg}
                alt={`${pillar.title} credential badge`}
                width={88}
                height={88}
                priority
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <h3 className="score-pillar-title">{pillar.title}</h3>
            <p className="score-pillar-desc">{pillar.description}</p>
            <span className="score-pillar-tag">{pillar.source}</span>
          </div>
        ))}
      </div>

      {/* Composite Standard Banner */}
      <div
        style={{
          marginTop: "2.5rem",
          background: "linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(20, 20, 28, 0.95) 100%)",
          border: "1px solid rgba(124, 58, 237, 0.35)",
          borderRadius: "var(--radius-lg)",
          padding: "1.75rem 2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
        }}
      >
        <div style={{ maxWidth: "44rem" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent-light)" }}>
            Composite Standard
          </span>
          <h4 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginTop: "0.25rem" }}>
            The Standardized Recruiter Benchmark (0.0 to 10.0 Scale)
          </h4>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.5rem", lineHeight: "1.6" }}>
            Recruiters cannot parse thousands of disparate resumes. The CTC Score synthesizes continuous Web Hub learning and proctored desktop software exams into a single fraud-proof score calibrated to Tier-1 through Tier-4 company requirements.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ textAlign: "right" }}>
            <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-subtle)", textTransform: "uppercase" }}>Defensibility</span>
            <span style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--success)" }}>Anti-Cheat Verified</span>
          </div>
        </div>
      </div>

      {/* Interactive Simulator */}
      <ScoreSimulator />
    </Section>
  );
}
