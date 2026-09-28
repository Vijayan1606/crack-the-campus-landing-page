import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="ctc-section" aria-label="Call to action">
      <div className="ctc-container">
        <div className="cta-banner-wrapper">
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--accent-light)",
              marginBottom: "1rem",
            }}
          >
            Ready for Placement Season?
          </span>

          <h2
            style={{
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#ffffff",
              maxWidth: "40rem",
              marginInline: "auto",
            }}
          >
            Accelerate your campus placement journey today.
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.125rem)",
              color: "var(--text-secondary)",
              maxWidth: "36rem",
              marginInline: "auto",
              marginTop: "1.25rem",
              lineHeight: 1.65,
            }}
          >
            Join over 50,000 engineering students preparing with AI-driven courses, company pathways, and verified CTC Scores trusted by leading enterprise recruiters.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
              marginTop: "2.25rem",
            }}
          >
            <Button href="/explore" variant="primary">
              Start Upskilling Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Button>
            <Button href="/download" variant="secondary">
              Download Desktop Suite
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
