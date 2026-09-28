"use client";

import { useState } from "react";
import Link from "next/link";
import { ctcScoreData } from "@/data/ctcScore";

export function ScoreSimulator() {
  const [mastery, setMastery] = useState(8.5);
  const [drills, setDrills] = useState(8.0);
  const [proctored, setProctored] = useState(8.8);

  // Weighted calculation: 35% Mastery + 25% Practice Drills + 40% Proctored Software Test
  const scoreRaw = mastery * 0.35 + drills * 0.25 + proctored * 0.40;
  const score = Math.min(10, Math.max(0, parseFloat(scoreRaw.toFixed(1))));

  const currentTier =
    ctcScoreData.tiers.find((t) => score >= t.min) ||
    ctcScoreData.tiers[ctcScoreData.tiers.length - 1];

  // Circle gauge math (radius 52, perimeter ~ 326.7)
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 10) * circumference;

  return (
    <div className="simulator-panel" aria-label="Interactive CTC Score Simulator">
      <div className="simulator-header">
        <div>
          <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent-light)" }}>
            Interactive Recruiter Benchmark
          </span>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginTop: "0.25rem" }}>
            Simulate Your Placement Projection
          </h3>
        </div>
        <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", maxWidth: "26rem" }}>
          Adjust your telemetry inputs below to see your calculated composite CTC Score and target company tiers.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))", gap: "2.5rem", alignItems: "center" }}>
        {/* Sliders Side */}
        <div className="slider-group">
          {/* Slider 1: Mastery */}
          <div className="slider-item">
            <div className="slider-item-header">
              <span className="slider-label">Skills &amp; Corporate Pathways (35%)</span>
              <span className="slider-value">{mastery.toFixed(1)} / 10</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={mastery}
              onChange={(e) => setMastery(parseFloat(e.target.value))}
              className="ctc-slider"
              aria-label="Skills & Corporate Pathways Weight"
            />
            <span style={{ fontSize: "0.75rem", color: "var(--text-subtle)" }}>
              Evaluates topic mastery, course milestones, and verified coding assignments.
            </span>
          </div>

          {/* Slider 2: Drills */}
          <div className="slider-item">
            <div className="slider-item-header">
              <span className="slider-label">Daily Practice &amp; Drills (25%)</span>
              <span className="slider-value">{drills.toFixed(1)} / 10</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={drills}
              onChange={(e) => setDrills(parseFloat(e.target.value))}
              className="ctc-slider"
              aria-label="Daily Practice & Drills Weight"
            />
            <span style={{ fontSize: "0.75rem", color: "var(--text-subtle)" }}>
              Tracks practice consistency, speed drills, and mock question solve ratios.
            </span>
          </div>

          {/* Slider 3: Proctored Software */}
          <div className="slider-item">
            <div className="slider-item-header">
              <span className="slider-label">Pro-Suite Proctored Assessment (40%)</span>
              <span className="slider-value">{proctored.toFixed(1)} / 10</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={proctored}
              onChange={(e) => setProctored(parseFloat(e.target.value))}
              className="ctc-slider"
              aria-label="Pro-Suite Proctored Assessment Weight"
            />
            <span style={{ fontSize: "0.75rem", color: "var(--text-subtle)" }}>
              High-stakes environment with anti-cheat telemetry and code efficiency metrics.
            </span>
          </div>
        </div>

        {/* Output Gauge & Benchmark Tier */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(11, 11, 14, 0.6)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-default)", padding: "2rem" }}>
          {/* SVG Radial Gauge */}
          <div style={{ position: "relative", width: "130px", height: "130px" }}>
            <svg width="130" height="130" viewBox="0 0 130 130" style={{ transform: "rotate(-90deg)" }}>
              <circle
                cx="65"
                cy="65"
                r={radius}
                fill="none"
                stroke="#272731"
                strokeWidth="10"
              />
              <circle
                cx="65"
                cy="65"
                r={radius}
                fill="none"
                stroke={currentTier.color}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: "stroke-dashoffset 200ms ease, stroke 300ms ease" }}
              />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", lineHeight: 1 }}>
                {score.toFixed(1)}
              </span>
              <span style={{ fontSize: "0.6875rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                CTC Score
              </span>
            </div>
          </div>

          {/* Tier Feedback */}
          <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.25rem 0.75rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: currentTier.color,
                background: `${currentTier.color}22`,
                border: `1px solid ${currentTier.color}55`,
              }}
            >
              {currentTier.tierName}
            </span>

            <p style={{ fontSize: "1.125rem", fontWeight: 700, color: "#ffffff", marginTop: "0.75rem" }}>
              Expected Package: {currentTier.salaryRange}
            </p>

            <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "0.35rem", maxWidth: "18rem" }}>
              {currentTier.tagline}
            </p>

            <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border-subtle)", fontSize: "0.75rem", color: "var(--text-subtle)" }}>
              Recruiter Target Pool:
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", justifyContent: "center", marginTop: "0.35rem" }}>
                {currentTier.targetCompanies.map((c) => (
                  <span
                    key={c}
                    style={{
                      background: "rgba(255, 255, 255, 0.06)",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "var(--radius-sm)",
                      color: "#ececf1",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/explore"
              style={{
                display: "inline-block",
                marginTop: "1.25rem",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--accent-light)",
                textDecoration: "underline",
              }}
            >
              Train on Pathways to Unlock This Tier →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
