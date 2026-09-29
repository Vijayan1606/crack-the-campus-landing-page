"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, authLinks } from "@/data/nav";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="ctc-container header-container">
        <Link href="/" className="header-brand" aria-label={`${site.name} home`}>
          <Image
            src="/lightlogo.png"
            alt={site.name}
            width={160}
            height={36}
            priority
            style={{ width: "auto", height: "32px" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="header-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="mobile-nav-toggle"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-drawer-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={authLinks.signup.href}
              className="mobile-drawer-link"
              onClick={() => setMobileOpen(false)}
            >
              {authLinks.signup.label}
            </Link>
            <Link
              href={authLinks.contact.href}
              className="mobile-drawer-link"
              onClick={() => setMobileOpen(false)}
            >
              {authLinks.contact.label}
            </Link>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border-default)" }}>
              <Button
                href={authLinks.login.href}
                variant="primary"
                onClick={() => setMobileOpen(false)}
              >
                {authLinks.login.label}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
