/**
 * CaseStudy.jsx
 *
 * Reusable editorial case-study component for the Circa AI brand.
 * Matches Circa's McKinsey-editorial aesthetic: navy/cream/gold,
 * Montserrat display + Georgia serif body.
 *
 * Drop into a Next.js page:
 *
 *   import CaseStudy from "@/components/CaseStudy";
 *
 *   <CaseStudy
 *     eyebrow="• REAL RESULTS · CLIENT CASE STUDY"
 *     headline="$37,500 in Revenue Growth Potential."
 *     subtitle="Norrita Johnson — Property Tax Consultant Scaling from 275 to 375 Properties"
 *     problemDescription="Norrita Johnson runs N.R. Vative Solutions..."
 *     solutionBullets={[
 *       "AI-powered comparable research system reducing manual work from 8 to 2 hours weekly",
 *       "Automated client onboarding and outreach sequence for pre-season engagement",
 *       "Hearing package template system with automated data population",
 *       "Invoice auto-calculation with exemption lookup integration",
 *     ]}
 *     metrics={[
 *       { variant: "light", value: "60–70%",       label: "Reduction in administrative overhead, freeing 26 hours per peak week" },
 *       { variant: "light", value: "26 hrs/wk",    label: "Reclaimed capacity at full AI implementation during peak season" },
 *       { variant: "dark",  value: "+100 properties", label: "Projected capacity increase by Season 1 without adding headcount" },
 *       { variant: "dark",  value: "$37.5K",       label: "Estimated incremental revenue from capturing turned-away referrals" },
 *     ]}
 *   />
 *
 * Note: this component uses styled-jsx (Next.js built-in). If you're not on
 * Next.js, swap the <style jsx> block for a CSS module or your styling lib.
 */

import React from "react";

// ── Brand tokens ────────────────────────────────────────────────────────────
const BRAND = {
  navy: "#1a2340",
  gold: "#c8a84e",
  cream: "#f0ece2",
  white: "#ffffff",
  muted: "#5a6278",
};

/**
 * @typedef {Object} MetricCard
 * @property {"light" | "dark"} variant - Card color treatment
 * @property {string} value              - Headline metric (e.g. "26 hrs/wk")
 * @property {string} label              - Supporting description
 */

/**
 * @typedef {Object} CaseStudyProps
 * @property {string}        eyebrow             - Small uppercase tag above headline
 * @property {string}        headline            - Main H1
 * @property {string}        subtitle            - Sub-headline / client identifier
 * @property {string}        problemDescription  - Narrative paragraph
 * @property {string[]}      solutionBullets     - List of solution items
 * @property {MetricCard[]}  metrics             - Exactly 4 metric cards (2x2 grid)
 */

/**
 * Editorial case-study block for the Circa AI brand system.
 * @param {CaseStudyProps} props
 */
export default function CaseStudy({
  eyebrow,
  headline,
  subtitle,
  problemDescription,
  solutionBullets = [],
  metrics = [],
}) {
  return (
    <section className="cs-root">
      <div className="cs-container">
        {eyebrow && <div className="cs-eyebrow">{eyebrow}</div>}

        {headline && <h1 className="cs-headline">{headline}</h1>}

        {subtitle && <p className="cs-subtitle">{subtitle}</p>}

        {(problemDescription || solutionBullets.length > 0) && (
          <div className="cs-problem">
            {problemDescription && <p>{problemDescription}</p>}

            {solutionBullets.length > 0 && (
              <ul className="cs-solution-list">
                {solutionBullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {metrics.length > 0 && (
          <div className="cs-metrics-grid">
            {metrics.map((m, i) => (
              <div key={i} className={`cs-metric-card cs-metric-card--${m.variant}`}>
                <div className="cs-metric-value">{m.value}</div>
                <div className="cs-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .cs-root {
          font-family: Georgia, serif;
          background: ${BRAND.cream};
          color: ${BRAND.navy};
          line-height: 1.6;
        }

        .cs-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 40px;
        }

        .cs-eyebrow {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${BRAND.gold};
          margin-bottom: 16px;
        }

        .cs-headline {
          font-family: "Montserrat", sans-serif;
          font-size: 56px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: ${BRAND.navy};
          margin: 0 0 24px 0;
        }

        .cs-subtitle {
          font-family: Georgia, serif;
          font-size: 18px;
          color: ${BRAND.muted};
          margin: 0 0 60px 0;
        }

        .cs-problem {
          background: ${BRAND.white};
          padding: 32px;
          border-radius: 2px;
          margin-bottom: 48px;
          box-shadow: 0 2px 8px rgba(26, 35, 64, 0.08);
        }

        .cs-problem p {
          font-size: 16px;
          line-height: 1.8;
          color: ${BRAND.navy};
          margin: 0 0 28px 0;
        }

        .cs-solution-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cs-solution-list li {
          font-size: 15px;
          color: ${BRAND.navy};
          padding-left: 24px;
          position: relative;
          margin-bottom: 12px;
        }

        .cs-solution-list li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: ${BRAND.gold};
          font-weight: bold;
        }

        .cs-metrics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .cs-metric-card {
          padding: 32px;
          border-radius: 2px;
        }

        .cs-metric-card--light {
          background: ${BRAND.white};
          box-shadow: 0 2px 8px rgba(26, 35, 64, 0.08);
        }

        .cs-metric-card--dark {
          background: ${BRAND.navy};
          color: ${BRAND.white};
        }

        .cs-metric-value {
          font-family: "Montserrat", sans-serif;
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .cs-metric-card--light .cs-metric-value {
          color: ${BRAND.navy};
        }

        .cs-metric-card--dark .cs-metric-value {
          color: ${BRAND.gold};
        }

        .cs-metric-label {
          font-size: 14px;
          line-height: 1.5;
        }

        .cs-metric-card--light .cs-metric-label {
          color: ${BRAND.muted};
        }

        .cs-metric-card--dark .cs-metric-label {
          color: ${BRAND.cream};
        }

        @media (max-width: 768px) {
          .cs-container {
            padding: 60px 24px;
          }
          .cs-headline {
            font-size: 40px;
          }
          .cs-metrics-grid {
            grid-template-columns: 1fr;
          }
          .cs-metric-value {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  );
}
