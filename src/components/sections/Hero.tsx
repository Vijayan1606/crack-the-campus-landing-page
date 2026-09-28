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
          alt="Engineering students collaborating in modern campus lab"
          fill
          priority
          sizes="100vw"
        />
      </div>

      {/* Layered dark gradients for text contrast */}
      <div className="hero-overlay-horizontal" />
      <div className="hero-overlay-radial" />

      {/* Content Layer */}
      <div className="ctc-container hero-content">
        <div className="hero-quote-bar">
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-description">{hero.subtitle}</p>

          <div className="hero-cta-group">
            <Button href={site.ctas.primary.href} variant="primary">
              {site.ctas.primary.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Button>
            <Button href={site.ctas.secondary.href} variant="secondary">
              {site.ctas.secondary.label}
            </Button>
          </div>

          <div className="hero-trust-badge">
            <span className="pulse-dot" />
            <span>{hero.note} · 50,000+ engineering students enrolled</span>
          </div>
        </div>
      </div>
    </section>
  );
}
