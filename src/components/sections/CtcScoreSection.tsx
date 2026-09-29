import { Fragment } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { ctcScoreData } from "@/data/ctcScore";

export function CtcScoreSection() {
  return (
    <Section
      id="score"
      badge={ctcScoreData.label}
      title={ctcScoreData.heading}
      subtitle={ctcScoreData.subheading}
      className="ctc-score-section"
    >
      <div className="score-formula-container">
        {/* Top 3 Equation Cards */}
        <div className="score-pillars-row">
          {ctcScoreData.pillars.map((pillar, idx) => (
            <Fragment key={pillar.title}>
              <div className="score-pillar-item">
                <div className="score-squircle">
                  <Image
                    src={pillar.badgeImg}
                    alt={`${pillar.title} badge`}
                    width={76}
                    height={76}
                    className="score-squircle-badge"
                    priority
                  />
                </div>
                <h3 className="score-pillar-title">{pillar.title}</h3>
                <p className="score-pillar-desc">{pillar.description}</p>
              </div>

              {idx < ctcScoreData.pillars.length - 1 && (
                <div className="score-operator-circle" aria-hidden="true">
                  +
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Horizontal Divider with = sign */}
        <div className="score-equals-divider">
          <div className="score-divider-line" />
          <div className="score-equals-circle" aria-hidden="true">
            =
          </div>
        </div>

        {/* Bottom Result: CTC Score */}
        <div className="score-result-block">
          <div className="score-result-glow" aria-hidden="true" />
          <div className="score-result-squircle">
            <Image
              src={ctcScoreData.result.badgeImg}
              alt={ctcScoreData.result.title}
              width={88}
              height={88}
              className="score-result-badge-img"
              priority
            />
          </div>
          <h3 className="score-result-title">{ctcScoreData.result.title}</h3>
          <p className="score-result-scale">{ctcScoreData.result.scale}</p>
          <p className="score-result-desc">
            {ctcScoreData.result.textPrefix}
            <strong>{ctcScoreData.result.textHighlight}</strong>
            {ctcScoreData.result.textSuffix}
          </p>
        </div>
      </div>
    </Section>
  );
}
