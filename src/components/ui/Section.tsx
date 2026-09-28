import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, badge, title, subtitle, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`ctc-section ${className}`.trim()}>
      <div className="ctc-container">
        {(badge || title || subtitle) && (
          <header className="section-heading-group">
            {badge && <p className="section-badge">{badge}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-description">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
