import { Link } from "react-router-dom";
import {
  beliefStats,
  companyStats,
  heroShortlist,
  heroTags,
  partnerAvatars,
  testimonials,
} from "../data/aboutPageData";
import { contactPath } from "../data/siteContact";
import usePageMeta from "../hooks/usePageMeta";
import "./AboutPage.css";

function HeroVisual() {
  return (
    <div className="au-hero-visual" aria-hidden="true">
      <div className="au-glass au-glass--shortlist">
        <span className="au-glass-label">Vetted Shortlist</span>
        <ul>
          {heroShortlist.map((person) => (
            <li key={person.name}>
              <span className={`au-avatar au-avatar--${person.tone}`}>{person.name.charAt(0)}</span>
              <div>
                <strong>{person.name}</strong>
                <em>{person.role}</em>
              </div>
            </li>
          ))}
        </ul>
        <div className="au-tag-row">
          {heroTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="au-glass au-glass--turnaround">
        <span className="au-glass-label">Turnaround Time</span>
        <strong>24 hrs</strong>
        <div className="au-bars">
          <i style={{ height: "42%" }} />
          <i style={{ height: "68%" }} />
          <i style={{ height: "52%" }} />
          <i style={{ height: "88%" }} />
          <i style={{ height: "64%" }} />
        </div>
      </div>

      <div className="au-glass au-glass--manager">
        <span className="au-glass-label">Account Manager Online</span>
        <p>Dedicated support throughout your hiring process — from shortlist to onboarding.</p>
      </div>
    </div>
  );
}

function StarRating() {
  return (
    <div className="au-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.2L12 18.8 5.6 21.6l1.7-7.2L1.7 9.5l7.4-.6L12 2z" />
        </svg>
      ))}
      <span>5.0</span>
    </div>
  );
}

export default function AboutPage() {
  usePageMeta({
    title: "About AP Consultancy | ISO-Certified IT Staff Augmentation Company",
    description:
      "Learn about AP Consultancy — an ISO-certified IT staff augmentation company helping businesses hire pre-vetted remote developers with speed and reliability.",
  });

  return (
    <div className="about-page">
      <section className="au-hero">
        <div className="au-container au-hero-grid">
          <div className="au-hero-copy">
            <p className="au-eyebrow au-eyebrow--hero">About AP Consultancy</p>
            <h1>We Believe Hiring Great Developers Shouldn&apos;t be Hard</h1>
            <p className="au-lead">
              AP Consultancy is an IT staff augmentation company built on one idea: businesses should be
              able to access great technical talent quickly, transparently, and without unnecessary layers.
            </p>
            <div className="au-hero-actions">
              <Link to="/devresources" className="au-btn au-btn--primary">
                Hire a Developer <span aria-hidden="true">→</span>
              </Link>
              <Link to="/careers" className="au-btn au-btn--ghost">
                Join Our Team
              </Link>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="au-why">
        <div className="au-container au-why-grid">
          <div className="au-why-quote">
            <p className="au-eyebrow">Why We Exist</p>
            <blockquote>
              Technical hiring is broken in two directions — too slow, or too risky.
            </blockquote>
          </div>
          <p className="au-why-body">
            Traditional recruitment cycles that take months are too slow. Unvetted freelancers with no
            accountability are too risky. AP Consultancy was built to solve both problems at once: a
            pre-vetted bench of developers, ready to deploy fast, backed by a team that stays accountable
            for the engagement from day one to delivery.
          </p>
          <p className="au-why-body">
            We started by sourcing developer requirements through other staffing vendors. As our bench and
            delivery track record grew, so did our ambition — today we work directly with hiring companies
            and are building direct relationships with the large vendor and MSP networks that manage
            enterprise contingent workforce programs.
          </p>
        </div>
      </section>

      <section className="au-beliefs">
        <div className="au-container">
          <div className="au-section-head">
            <p className="au-eyebrow au-eyebrow--center">Our Beliefs</p>
            <h2>What We Believe</h2>
          </div>

          <div className="au-beliefs-grid">
            <article className="au-belief-card au-belief-card--feature">
              <div className="au-belief-icon au-belief-icon--light" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2 3 14h7l-1 8 11-13h-7l3-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Speed and quality aren&apos;t a trade-off</h3>
              <p>A 24-hour shortlist only means something if every candidate on it is genuinely qualified.</p>
              <div className="au-stat-row">
                {beliefStats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="au-belief-card">
              <div className="au-belief-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M3.5 18c.8-2.6 2.8-4 5.5-4s4.7 1.4 5.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="17" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h3>Relationships outlast placements</h3>
              <p>We measure success by how long clients stay with us — not just how fast we fill a role.</p>
              <span className="au-pill-badge">98% retention rate</span>
            </article>

            <article className="au-belief-card">
              <div className="au-belief-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Transparency builds trust</h3>
              <p>Clear rates, vetting standards, and communication — no black boxes, ever.</p>
            </article>

            <article className="au-belief-card au-belief-card--wide">
              <div className="au-belief-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.4 5.2 5.6.8-4 3.9.9 5.6L12 15.8 7.1 17.5l.9-5.6-4-3.9 5.6-.8L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3>Developers are partners, not resources</h3>
                <p>We invest in our talent bench because a well-supported developer does better work for you.</p>
              </div>
              <div className="au-avatar-stack">
                {partnerAvatars.map((avatar) => (
                  <span key={avatar.label} className={`au-stack-avatar au-stack-avatar--${avatar.tone}`}>
                    {avatar.label}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="au-iso">
        <div className="au-container">
          <div className="au-iso-card">
            <div className="au-iso-copy">
              <p className="au-eyebrow au-eyebrow--iso">Certified &amp; Trusted</p>
              <h2>ISO-Certified Processes You Can Rely On</h2>
              <p>
                AP Consultancy&apos;s hiring, data handling, and delivery processes are ISO-certified, giving
                you confidence that you&apos;re working with a partner that follows recognized standards for
                information security and process quality — not just a vendor promising &quot;trusted and
                reliable&quot; without proof.
              </p>
              <Link to={contactPath("vendor")} className="au-btn au-btn--outline-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 4v10m0 4h.01M7 14l5 5 5-5M7 10l5-5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Certificate
              </Link>
            </div>
            <div className="au-iso-badge" aria-hidden="true">
              <div className="au-iso-badge-ring" />
              <div className="au-iso-badge-inner">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
                <strong>ISO 27001</strong>
                <span>CERTIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="au-stats">
        <div className="au-container">
          <div className="au-section-head">
            <p className="au-eyebrow au-eyebrow--center">AP Consultancy in Numbers</p>
            <h2>AP Consultancy in Numbers</h2>
          </div>
          <div className="au-stat-row au-stat-row--wide">
            {companyStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="au-testimonials">
        <div className="au-container">
          <div className="au-section-head">
            <p className="au-eyebrow au-eyebrow--center">Testimonials</p>
            <h2>What Our Clients Say</h2>
          </div>

          <div className="au-testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="au-testimonial-card">
                <span className="au-quote-mark" aria-hidden="true">”</span>
                <StarRating />
                <p>{item.quote}</p>
                <footer>
                  <span className={`au-testimonial-avatar au-testimonial-avatar--${item.tone}`}>
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role} · {item.company}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>

          <Link to="/portfolio" className="au-text-link">
            Read Full Case Studies <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="au-cta">
        <div className="au-container">
          <div className="au-cta-card">
            <div className="au-cta-rings" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="au-cta-copy">
              <h2>Let&apos;s Build Your Team Together</h2>
              <p>
                Whether you&apos;re hiring or looking for your next opportunity, we&apos;re ready when you are.
              </p>
              <div className="au-cta-actions">
                <Link to="/devresources" className="au-btn au-btn--white">
                  Hire a Developer
                </Link>
                <Link to="/careers" className="au-btn au-btn--ghost-light">
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
