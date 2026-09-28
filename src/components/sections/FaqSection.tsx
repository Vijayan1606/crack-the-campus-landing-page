"use client";

import { useState, useId } from "react";
import { Section } from "@/components/ui/Section";
import { faqsData, faqCategories, type FaqItem } from "@/data/faqs";

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openId, setOpenId] = useState<string | null>("what-is-ctc");
  const searchInputId = useId();

  const filteredFaqs = faqsData.filter((faq: FaqItem) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section
      id="faq"
      badge="Frequently Asked Questions"
      title="Everything You Need to Know."
      subtitle="Clear answers about Crack The Campus, the CTC Score, proctoring integrity, and student placement preparation."
    >
      <div style={{ maxWidth: "52rem", marginInline: "auto" }}>
        {/* Search & Filter Controls */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          {/* Search bar */}
          <div style={{ position: "relative" }}>
            <label htmlFor={searchInputId} className="sr-only">
              Search FAQs
            </label>
            <input
              id={searchInputId}
              type="text"
              placeholder="Search placement questions, proctoring, score rules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.875rem 1.25rem 0.875rem 2.75rem",
                borderRadius: "var(--radius-md)",
                background: "var(--bg-card)",
                border: "1px solid var(--border-default)",
                color: "var(--text-primary)",
                fontSize: "0.9375rem",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
            />
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--text-subtle)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {/* Category Chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "0.375rem 0.875rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  transition: "all 0.15s ease",
                  background: activeCategory === cat.id ? "var(--accent)" : "var(--bg-card)",
                  color: activeCategory === cat.id ? "#ffffff" : "var(--text-muted)",
                  border: `1px solid ${activeCategory === cat.id ? "var(--accent)" : "var(--border-default)"}`,
                  cursor: "pointer",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "3rem", background: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-default)" }}>
              <p style={{ color: "var(--text-muted)" }}>
                No questions found matching &quot;{searchQuery}&quot;.
              </p>
              <button
                type="button"
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                style={{ marginTop: "0.75rem", color: "var(--accent-light)", fontSize: "0.875rem", textDecoration: "underline", background: "none", border: "none", cursor: "pointer" }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              const contentId = `faq-answer-${faq.id}`;
              const triggerId = `faq-btn-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`faq-card ${isOpen ? "open" : ""}`}
                >
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      className="faq-question-btn"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggleItem(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        className="faq-icon-arrow"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={triggerId}
                      className="faq-answer-panel"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Contact fallback */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Have a question that isn&apos;t answered here? Reach out to our team at{" "}
            <a
              href="mailto:info@crackthecampus.com"
              style={{ color: "var(--accent-light)", textDecoration: "underline" }}
            >
              info@crackthecampus.com
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}
