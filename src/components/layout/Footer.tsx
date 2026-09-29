import Link from "next/link";
import Image from "next/image";
import { footerProductLinks } from "@/data/nav";
import { site } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" id="contact">
      <div className="ctc-container">
        <div className="footer-main-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col-brand">
            <Link href="/" aria-label={`${site.name} home`}>
              <Image
                src="/lightlogo.png"
                alt={site.name}
                width={150}
                height={34}
                style={{ width: "auto", height: "26px" }}
              />
            </Link>
            <p className="footer-brand-tagline">{site.tagline}</p>
          </div>

          {/* Column 2: PRODUCT */}
          <div className="footer-col-nav">
            <h4 className="footer-group-heading">PRODUCT</h4>
            <ul className="footer-links-list">
              {footerProductLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CONTACT */}
          <div className="footer-col-contact">
            <h4 className="footer-group-heading">CONTACT</h4>
            <a href={`mailto:${site.contact.email}`} className="footer-email-link">
              {site.contact.email}
            </a>
            <p className="footer-press-text">{site.contact.pressText}</p>

            <div className="footer-address-block">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer-map-pin"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="footer-address-lines">
                {site.contact.address.map((line, idx) => (
                  <span key={idx}>{line}</span>
                ))}
              </div>
            </div>

            <a
              href={site.contact.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-larger-map-link"
            >
              <span>Larger map →</span>
            </a>
          </div>

          {/* Column 4: Google Maps Embed Card */}
          <div className="footer-col-map">
            <div className="footer-map-container">
              <iframe
                src={site.contact.embedMapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Crack The Campus Location Map"
              />
              <a
                href={site.contact.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-badge"
              >
                <span>Maps</span>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-sub-bar">
          <div className="footer-sub-left">
            <span className="footer-copyright">
              © {currentYear} {site.name}. All rights reserved.
            </span>
            <div className="footer-social-icons">
              <a
                href="https://www.instagram.com/crackthecampus_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer-social-btn"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/crackthecampus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-btn"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-sub-right">
            <Link href="/privacy" className="footer-legal-link">
              Privacy
            </Link>
            <Link href="/terms" className="footer-legal-link">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
