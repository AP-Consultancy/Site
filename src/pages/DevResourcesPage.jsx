import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { developers, featureHighlights, filterOptions } from "../data/devResourcesData";
import usePageMeta from "../hooks/usePageMeta";
import "./DevResourcesPage.css";

const PAGE_SIZE = 9;

function HeroIllustration() {
  return (
    <div className="dr-hero-visual" aria-hidden="true">
      <div className="dr-hero-glow" />
      <div className="dr-float dr-float--code">&lt;/&gt;</div>
      <div className="dr-float dr-float--chart">▦</div>
      <div className="dr-hero-window">
        <div className="dr-window-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="dr-window-lines">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="dr-window-dots">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="dr-window-shield">✓</div>
      </div>
    </div>
  );
}

function FeatureIcon({ type }) {
  const stroke = "currentColor";
  if (type === "user") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" stroke={stroke} strokeWidth="1.6" />
        <path d="M5 20c1.2-3 3.8-5 7-5s5.8 2 7 5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "onboard") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke={stroke} strokeWidth="1.6" />
        <path d="M9 12h6M12 9v6" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "flex") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="2.5" stroke={stroke} strokeWidth="1.6" />
        <circle cx="16" cy="8" r="2.5" stroke={stroke} strokeWidth="1.6" />
        <circle cx="12" cy="16" r="2.5" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function matchesFilter(value, selected, allLabel) {
  if (selected === allLabel) return true;
  if (selected === "Short-term or Long-term") return value.includes(selected);
  return value.toLowerCase().includes(selected.toLowerCase());
}

export default function DevResourcesPage() {
  const [skill, setSkill] = useState("All Skills");
  const [level, setLevel] = useState("All Levels");
  const [availability, setAvailability] = useState("All Availability");
  const [engagement, setEngagement] = useState("All Types");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return developers.filter((dev) => {
      const skillMatch =
        skill === "All Skills" || dev.skills.some((s) => s.toLowerCase() === skill.toLowerCase());
      const levelMatch = level === "All Levels" || dev.level === level;
      const availabilityMatch = matchesFilter(dev.availability, availability, "All Availability");
      const engagementMatch = matchesFilter(dev.engagement, engagement, "All Types");
      return skillMatch && levelMatch && availabilityMatch && engagementMatch;
    });
  }, [skill, level, availability, engagement]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const resetFilters = () => {
    setSkill("All Skills");
    setLevel("All Levels");
    setAvailability("All Availability");
    setEngagement("All Types");
    setPage(1);
  };

  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    return [1, 2, 3, "...", totalPages];
  }, [totalPages]);

  usePageMeta({
    title: "Hire Developers | Browse Pre-Vetted Remote Dev Profiles — AP Consultancy",
    description:
      "Browse pre-vetted remote developers available for short-term and long-term projects. Filter by skill, experience, and availability — hire in days, not weeks.",
  });

  return (
    <div className="dev-resources-page">
      <section className="dr-hero">
        <div className="dr-container dr-hero-grid">
          <div className="dr-hero-copy">
            <p className="dr-badge">DEV RESOURCE</p>
            <h1>Meet Our Pre-Vetted Developer Bench</h1>
            <p className="dr-lead">
              Every profile below has cleared our technical screening and interview process. Filter by skill and
              availability to find your match — or send us your requirement and we&apos;ll shortlist for you.
            </p>
          </div>
          <HeroIllustration />
        </div>
      </section>

      <section className="dr-filters-section">
        <div className="dr-container">
          <form className="dr-filters" onSubmit={(e) => e.preventDefault()}>
            <label className="dr-filter">
              <span>Skill / Stack</span>
              <select value={skill} onChange={(e) => { setSkill(e.target.value); setPage(1); }}>
                {filterOptions.skills.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </label>
            <label className="dr-filter">
              <span>Experience Level</span>
              <select value={level} onChange={(e) => { setLevel(e.target.value); setPage(1); }}>
                {filterOptions.levels.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </label>
            <label className="dr-filter">
              <span>Availability</span>
              <select value={availability} onChange={(e) => { setAvailability(e.target.value); setPage(1); }}>
                {filterOptions.availability.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </label>
            <label className="dr-filter">
              <span>Engagement Type</span>
              <select value={engagement} onChange={(e) => { setEngagement(e.target.value); setPage(1); }}>
                {filterOptions.engagement.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </label>
            <button type="button" className="dr-reset" onClick={resetFilters}>
              Reset Filters <span aria-hidden="true">↺</span>
            </button>
          </form>
        </div>
      </section>

      <section className="dr-cards-section">
        <div className="dr-container">
          {pageItems.length === 0 ? (
            <p className="dr-empty">No developers match your filters. Try adjusting or resetting them.</p>
          ) : (
            <div className="dr-cards-grid">
              {pageItems.map((dev) => (
                <article key={dev.id} className="dr-card">
                  <span className="dr-vetted">
                    <i aria-hidden="true" /> Vetted
                  </span>
                  <p className="dr-dev-id">{dev.id}</p>
                  <h2>{dev.title}</h2>
                  <p className="dr-exp">{dev.experience}</p>
                  <div className="dr-skills-block">
                    <strong>Core Skills</strong>
                    <div className="dr-skill-tags">
                      {dev.skills.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="dr-meta">
                    <div>
                      <span>Availability</span>
                      <strong className={dev.availability === "Immediate" ? "is-green" : "is-blue"}>
                        <i aria-hidden="true" />
                        {dev.availability}
                      </strong>
                    </div>
                    <div>
                      <span>Engagement</span>
                      <strong>{dev.engagement}</strong>
                    </div>
                  </div>
                  <button type="button" className="dr-btn dr-btn--outline">
                    <svg className="dr-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                    View Full Profile
                  </button>
                  <Link to="/contact" className="dr-btn dr-btn--primary">
                    <svg className="dr-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M22 3L11 14M22 3l-7 18-4-7-7-4 18-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    </svg>
                    Request This Developer
                  </Link>
                  <div className="dr-card-foot">
                    <span><i aria-hidden="true" /> Technically vetted</span>
                    <span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                      Avg. onboarding: 3–5 days
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <nav className="dr-pagination" aria-label="Developer pages">
              {pageNumbers.map((num, idx) =>
                num === "..." ? (
                  <span key={`ellipsis-${idx}`} className="dr-page-ellipsis">…</span>
                ) : (
                  <button
                    key={num}
                    type="button"
                    className={`dr-page-btn${currentPage === num ? " is-active" : ""}`}
                    onClick={() => setPage(num)}
                    aria-current={currentPage === num ? "page" : undefined}
                  >
                    {num}
                  </button>
                )
              )}
              <button
                type="button"
                className="dr-page-btn dr-page-next"
                disabled={currentPage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                aria-label="Next page"
              >
                →
              </button>
            </nav>
          )}
        </div>
      </section>

      <section className="dr-cta-section">
        <div className="dr-container">
          <div className="dr-cta-card">
            <div className="dr-cta-icon" aria-hidden="true">✦</div>
            <div className="dr-cta-copy">
              <h2>Looking for a Specific Skill Set?</h2>
              <p>
                Our full bench is larger than what&apos;s shown here — many developers are matched directly to
                requirements rather than listed publicly. Tell us what you need and get a shortlist within 24 hours.
              </p>
              <Link to="/contact" className="dr-btn dr-btn--cta">
                Submit Your Requirement <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="dr-cta-visual" aria-hidden="true">
              <div className="dr-cta-stack">
                <span />
                <span />
                <span />
              </div>
              <div className="dr-cta-profile">
                <i />
                <em />
                <em />
                <em />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dr-features">
        <div className="dr-container dr-features-grid">
          {featureHighlights.map((item) => (
            <article key={item.title} className="dr-feature">
              <div className="dr-feature-icon">
                <FeatureIcon type={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
