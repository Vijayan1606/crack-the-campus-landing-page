import { companies } from "@/data/companies";

export function LogoMarquee() {
  const row1 = companies.slice(0, 9);
  const row2 = companies.slice(9);

  return (
    <section className="marquee-container" aria-label="Trusted Companies and Corporate Pathways">
      <h2 className="marquee-heading">
        POWERING HIRING BENCHMARKS FOR TOP RECRUITERS &amp; CORPORATE PATHWAYS
      </h2>

      {/* Edge gradient masks for smooth fade */}
      <div className="marquee-fade-left" aria-hidden="true" />
      <div className="marquee-fade-right" aria-hidden="true" />

      {/* First Track (Scroll Left) */}
      <div className="marquee-track-wrapper">
        <div className="marquee-track">
          {row1.concat(row1).map((company, idx) => (
            <div
              key={`${company.name}-1-${idx}`}
              className="logo-item"
              title={company.name}
            >
              <svg
                viewBox={company.viewBox}
                width="32"
                height="32"
                fill="currentColor"
                aria-label={company.name}
                role="img"
              >
                <path d={company.path} />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Second Track (Scroll Right) */}
      <div className="marquee-track-wrapper">
        <div className="marquee-track-reverse">
          {row2.concat(row2).map((company, idx) => (
            <div
              key={`${company.name}-2-${idx}`}
              className="logo-item"
              title={company.name}
            >
              <svg
                viewBox={company.viewBox}
                width="32"
                height="32"
                fill="currentColor"
                aria-label={company.name}
                role="img"
              >
                <path d={company.path} />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
