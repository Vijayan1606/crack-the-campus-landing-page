import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/hero";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero-wrapper" aria-labelledby="hero-heading">
      {/* Background office scene */}
      <div className="hero-bg-media" aria-hidden="true">
        <div className="hero-bg-img-wrap">
          <Image
            src="/hero-promo-office.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-office-img"
          />
        </div>
      </div>

      {/* Layered dark gradients for text contrast */}
      <div className="hero-overlay-mobile" aria-hidden="true" />
      <div className="hero-overlay-multi-stop" aria-hidden="true" />
      <div className="hero-radial-mobile" aria-hidden="true" />
      <div className="hero-radial-desktop" aria-hidden="true" />

      {/* Content Layer */}
      <div className="ctc-container hero-content">
        <div className="hero-main-column">
          {/* Vertical accent bar beside heading and description */}
          <div className="hero-quote-bar">
            <h1 id="hero-heading" className="hero-title">
              {hero.titleLine1 || "Your Fast Track to"}
              <br />
              {hero.titleLine2 || "Top Placements."}
            </h1>
            <div className="hero-description-block">
              <p className="hero-description">
                Upskill with industry-expert courses and master{" "}
                <strong>Corporate Pathways</strong> built for your dream companies.
              </p>
              <p className="hero-description">
                Build a <strong>CTC Score</strong> that gets you noticed.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
