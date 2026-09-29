import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/hero";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero-wrapper" aria-label="Hero Section">
      {/* Background office scene */}
      <div className="hero-bg-media">
        <Image
          src="/hero-promo-office.jpg"
          alt="Engineering candidate smiling in office setting"
          fill
          priority
          sizes="100vw"
        />
      </div>

      {/* Layered dark gradients for text contrast */}
      <div className="hero-overlay-horizontal" />
      <div className="hero-overlay-vertical" />

      {/* Content Layer */}
      <div className="ctc-container hero-content">
        <div className="hero-main-column">
          {/* Vertical accent bar beside heading and description */}
          <div className="hero-quote-bar">
            <h1 className="hero-title">
              {hero.titleLine1 || "Your Fast Track to"}
              <br />
              {hero.titleLine2 || "Top Placements."}
            </h1>
            <div className="hero-description-block">
              <p className="hero-description">
                Upskill with industry-expert courses and master <strong>Corporate Pathways</strong> built for your dream companies.
              </p>
              <p className="hero-description">
                Build a <strong>CTC Score</strong> that gets you noticed.
              </p>
            </div>
          </div>

          {/* CTA Buttons aligned below accent bar */}
          <div className="hero-cta-group">
            <Button href={site.ctas.primary.href} variant="primary" className="hero-btn-primary">
              <span>{site.ctas.primary.label}</span>
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
            </Button>
            <Button href={site.ctas.secondary.href} variant="secondary" className="hero-btn-secondary">
              <span>{site.ctas.secondary.label}</span>
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
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
