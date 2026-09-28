import Link from "next/link";
import Image from "next/image";
import { footerGroups } from "@/data/nav";
import { site } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="ctc-container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div>
            <Link href="/" aria-label={`${site.name} home`}>
              <Image
                src="/lightlogo.png"
                alt={site.name}
                width={150}
                height={34}
                style={{ width: "auto", height: "30px" }}
              />
            </Link>
            <p className="footer-brand-statement">
              India&apos;s campus-to-career platform. AI-proctored assessments, company pathways, and verified CTC Scores built to bridge ambitious engineering students with leading enterprise recruiters.
            </p>
          </div>

          {/* Navigation Links */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="footer-heading">{group.title}</h4>
              <ul className="footer-link-list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Office & Direct Contact */}
          <div>
            <h4 className="footer-heading">Campus Headquarters</h4>
            <div className="footer-link-list">
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: "1.6" }}>
                {site.contact.address.map((line) => (
                  <span key={line} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              </p>
              <div>
                <a
                  href={site.contact.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  style={{ color: "var(--accent-light)", display: "inline-flex", alignItems: "center", gap: "0.25rem", marginTop: "0.5rem" }}
                >
                  <span>View on Google Maps</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
              <p style={{ marginTop: "0.5rem" }}>
                <a href={`mailto:${site.contact.email}`} className="footer-link">
                  {site.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {currentYear} {site.name}. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {site.social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {s.label}
              </a>
            ))}
            <Link href="/privacy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
