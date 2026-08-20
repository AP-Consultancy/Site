import { engagementTypes, processSteps, whyChooseCards } from "../data/careersPageData";
import usePageMeta from "../hooks/usePageMeta";
import "./CareersPage.css";

export default function CareersPage() {
  usePageMeta({
    title: "Careers at AP Consultancy | Join Our Remote Developer Network",
    description:
      "Join AP Consultancy's talent pool and get matched with remote contract and long-term development projects — flexible, fast, and fully supported.",
  });

  return (
    <div className="careers-page">
      <section className="cr-hero">
        <div className="cr-container">
          <h1>Build Your Career on Great Projects, Not Just Job Boards</h1>
          <div className="cr-hero-row">
            <p className="cr-lead">
              AP Consultancy connects skilled developers with vetted, well-scoped remote opportunities —
              short-term and long-term — backed by a team that supports you through every engagement.
            </p>
            <a className="cr-btn cr-btn--hero" href="#final-cta">
              Join Our Talent Pool <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="cr-why">
        <div className="cr-container">
          <p className="cr-eyebrow">Why Join Us</p>
          <h2 className="cr-section-title">Why Developers Choose AP Consultancy</h2>

          <div className="cr-why-grid">
            <article className="cr-feature-card">
              <div className="cr-feature-glow" aria-hidden="true" />
              <div className="cr-feature-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                  <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h3>{whyChooseCards.feature.title}</h3>
              <p>{whyChooseCards.feature.text}</p>
              <a className="cr-feature-link" href="#final-cta">
                {whyChooseCards.feature.link} <span aria-hidden="true">→</span>
              </a>
            </article>

            {whyChooseCards.items.map((item) => (
              <article key={item.title} className="cr-mini-card">
                <div className="cr-mini-icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cr-process">
        <div className="cr-container">
          <p className="cr-eyebrow cr-eyebrow--center">Our process</p>
          <h2 className="cr-section-title cr-section-title--center">How It Works for Developers</h2>

          <div className="cr-timeline">
            <div className="cr-timeline-line" aria-hidden="true" />
            {processSteps.map((step) => (
              <article key={step.num} className={`cr-step cr-step--${step.side}`}>
                <span className="cr-step-badge">{step.num}</span>
                <div className="cr-step-card">
                  <div className="cr-step-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <span className="cr-step-link">{step.link}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cr-engagement">
        <div className="cr-container">
          <p className="cr-eyebrow cr-eyebrow--center">Engagement types</p>
          <h2 className="cr-section-title cr-section-title--center">Open Engagement Types</h2>

          <div className="cr-engage-grid">
            {engagementTypes.map((item) => (
              <article key={item.id} className={`cr-engage-card ${item.gradient}`}>
                <div className="cr-engage-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="cr-engage-btn">LEARN MORE</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cr-final-cta" id="final-cta">
        <div className="cr-container">
          <div className="cr-final-card">
            <div className="cr-final-rings" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <h2>Ready for Better Project Opportunities?</h2>
            <p>Apply to join our talent pool and get matched with meaningful, remote-first work.</p>
            <a className="cr-btn cr-btn--white" href="mailto:hello@apconsultancy.in?subject=Join%20Talent%20Pool">
              Apply / Join Our Talent Pool
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
