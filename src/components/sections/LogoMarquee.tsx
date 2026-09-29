import React from "react";
import { row1Companies, row2Companies } from "@/data/companies";

export function LogoMarquee() {
  const track1 = [...row1Companies, ...row1Companies, ...row1Companies, ...row1Companies];
  const track2 = [...row2Companies, ...row2Companies];

  return (
    <section className="marquee-container" aria-label="Recruiting Companies">
      <h2 className="marquee-heading">
        EMPOWERING STUDENTS TO CRACK RECRUITMENT AT...
      </h2>

      {/* Edge gradient masks for smooth fade */}
      <div className="marquee-fade-left" aria-hidden="true" />
      <div className="marquee-fade-right" aria-hidden="true" />

      {/* First Track (Scroll Left) */}
      <div className="marquee-track-wrapper">
        <div className="marquee-track">
          {track1.map((company, idx) => (
            <div
              key={`${company.name}-1-${idx}`}
              className="logo-item"
              title={company.name}
              style={{
                "--brand-color": company.color,
              } as React.CSSProperties}
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
          {track2.map((company, idx) => (
            <div
              key={`${company.name}-2-${idx}`}
              className="logo-item"
              title={company.name}
              style={{
                "--brand-color": company.color,
              } as React.CSSProperties}
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
