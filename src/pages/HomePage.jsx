import { Link } from "react-router-dom";
import heroBackgroundShadow from "../portfolio/assets/Background+Shadow.png";
import { contactPath } from "../data/siteContact";
import usePageMeta from "../hooks/usePageMeta";
import "./HomePage.css";

const serviceSpecializations = [
  {
    slug: "ecommerce",
    title: "eCommerce",
    text: "Shopify, Magento, headless commerce, custom storefronts",
    color: "#2e72ff",
    icon: "globe",
  },
  {
    slug: "devops-cloud-security",
    title: "DevOps, Cloud & Security",
    text: "AWS/Azure/GCP, CI/CD, SRE, cloud security",
    color: "#1b5fd9",
    icon: "monitor",
  },
  {
    slug: "agentic-ai-software",
    title: "Agentic AI Software",
    text: "LLM app development, agent orchestration, RAG pipelines",
    color: "#4d88ff",
    icon: "cube",
  },
  {
    slug: "qa-testing",
    title: "QA & Testing",
    text: "Manual, automation, performance, and security testing",
    color: "#2e72ff",
    icon: "users",
  },
  {
    slug: "mobile-app-web",
    title: "Mobile App & Web",
    text: "iOS, Android, Flutter/React Native, full-stack web",
    color: "#7ebfff",
    icon: "phone",
  },
  {
    slug: "ai-ml-automation",
    title: "AI, ML & Automation",
    text: "Data science, MLOps, workflow automation",
    color: "#1b5fd9",
    icon: "figma",
  },
];

const techStackStrip = [
  "React",
  "Node.js",
  "Angular",
  "Vue",
  "Python",
  "Django",
  "Java",
  "Spring Boot",
  ".NET",
  "PHP/Laravel",
  "iOS & Android",
  "Flutter/React Native",
  "DevOps/AWS/Azure/GCP",
  "QA & Automation Testing",
  "Data Engineering",
  "LLM/Agentic AI Frameworks",
];

const principles = [
  {
    num: "01",
    title: "Speed without shortcuts",
    text: "Fast shortlists, but every candidate is fully vetted first.",
  },
  {
    num: "02",
    title: "Transparency",
    text: "Clear rates, clear availability, no hidden layers.",
  },
  {
    num: "03",
    title: "Continuity",
    text: "A dedicated account manager stays with you for the life of the engagement.",
  },
  {
    num: "04",
    title: "Flexibility",
    text: "Scale up, scale down, or convert to long-term hires as your project evolves.",
  },
];

const speedMetrics = [
  { value: "24", unit: "h", label: "To a qualified shortlist" },
  { value: "5", unit: "min", label: "To share a requirement" },
  { value: "100", unit: "%", label: "Of developers pre-vetted" },
  { value: "1", unit: "POC", label: "Dedicated account manager" },
];

const hiringSteps = [
  {
    num: "01",
    title: "Share Your Requirement",
    tag: "~5 MIN",
    text: "Tell us the role, tech stack, and project scope. Takes less than 5 minutes.",
  },
  {
    num: "02",
    title: "Get a Shortlist in 24 Hours",
    tag: "24H SLA",
    text: "We match your requirement against our pre-vetted developer bench and send a shortlist within 24 hours.",
  },
  {
    num: "03",
    title: "Interview & Select",
    tag: "YOU DECIDE",
    text: "Speak directly with shortlisted developers. No black-box matching — you make the final call.",
  },
  {
    num: "04",
    title: "Fast Onboarding",
    tag: "DAYS",
    text: "Once selected, we handle onboarding logistics so the developer starts contributing within days.",
  },
  {
    num: "05",
    title: "Ongoing Support",
    tag: "1 POC",
    text: "A dedicated account manager monitors the engagement and is your single point of contact throughout.",
  },
];

const coverageTags = [
  "eCommerce",
  "DevOps/Cloud/Security",
  "Agentic AI",
  "QA & Testing",
  "Mobile & Web",
  "AI/ML/Automation",
];

const trustedLogos = [
  { name: "NORTHWIND", style: "serif-caps" },
  { name: "Lumen", style: "italic" },
  { name: "VERTEX", style: "sans-caps" },
  { name: "halcyon", style: "sans" },
  { name: "quanta.io", style: "sans" },
  { name: "Fielder", style: "italic" },
];

function SolutionIcon({ type, color }) {
  const stroke = color;
  if (type === "users") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke={stroke} strokeWidth="1.8" />
        <path d="M3.5 18c.8-2.6 2.8-4 5.5-4s4.7 1.4 5.5 4" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="17" cy="8" r="2.5" stroke={stroke} strokeWidth="1.8" />
        <path d="M14.5 14.2c1.6.4 2.9 1.5 3.5 3.8" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "monitor") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke={stroke} strokeWidth="1.8" />
        <path d="M8 20h8M12 16v4" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="10" r="2" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  if (type === "globe") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke={stroke} strokeWidth="1.8" />
        <path d="M4.5 12h15M12 4c2.5 2.4 3.8 5 3.8 8s-1.3 5.6-3.8 8c-2.5-2.4-3.8-5-3.8-8s1.3-5.6 3.8-8z" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="2.2" stroke={stroke} strokeWidth="1.8" />
        <path d="M10 17h4" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "figma") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 12a3 3 0 116 0 3 3 0 01-6 0z" stroke={stroke} strokeWidth="1.8" />
        <path d="M9 3h3v6H9a3 3 0 010-6zM12 3h3a3 3 0 010 6h-3V3zM9 9h3v6H9a3 3 0 010-6zM9 15h3v3a3 3 0 11-3-3z" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 12l7-4M12 12v10M12 12L5 8" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
}

export default function HomePage() {
  usePageMeta({
    title: "IT Staff Augmentation Company | Hire Pre-Vetted Remote Developers — AP Consultancy",
    description:
      "Hire pre-vetted remote developers across eCommerce, DevOps, AI/ML, QA, Mobile and Web. AP Consultancy delivers a shortlist in 24 hours — flexible, ISO-certified, fully supported.",
  });

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hp-hero" id="home">
        <img
          className="hp-hero-bg"
          src={heroBackgroundShadow}
          alt=""
          aria-hidden="true"
          loading="eager"
          decoding="async"
        />
        <div className="hp-hero-inner">
          <div className="hp-hero-copy">
            <div className="hp-hero-badge">
              Ready to scale your team? <span aria-hidden="true">→</span>
            </div>
            <h1>
              Hire Pre-Vetted Remote Developers.{" "}
              <span className="hp-accent hp-accent--glow">Across Every Stack You Need.</span>
            </h1>
            <p className="hp-hero-lead">
              AP Consultancy is an IT staff augmentation partner that helps you scale your engineering team
              fast — with rigorously screened developers across eCommerce, DevOps &amp; Cloud, AI/ML, QA, and
              Mobile &amp; Web, ready to start in days, for projects of any length.
            </p>
            <div className="hp-hero-actions">
              <Link to={contactPath("hire")} className="hp-btn hp-btn--primary">
                Hire a Developer <span aria-hidden="true">→</span>
              </Link>
              <Link to="/devresources" className="hp-btn hp-btn--ghost">
                See Available Developer <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="hp-trust-strip">
              Pre-vetted talent · 24-hour shortlist · ISO-certified processes · Short-term &amp; long-term
              engagements · Direct developer sourcing, no pass-down markups
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="hp-section hp-about" id="about">
        <div className="hp-container">
          <div className="hp-about-card">
            <div className="hp-about-media" aria-hidden="true">
              <img
                src="/images/it consulting.jpeg"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="hp-about-copy">
              <p className="hp-eyebrow hp-eyebrow--dot">ABOUT AP CONSULTANCY</p>
              <h2>Built to Make Hiring Developers Simple</h2>
              <p className="hp-body">
                AP Consultancy exists to remove the friction from technical hiring. We&apos;re an IT staff
                augmentation company that gives businesses direct access to experienced, pre-screened
                developers — without the long recruitment cycles, the guesswork, or the overhead of
                full-time hiring.
              </p>
              <p className="hp-body">
                Every developer we place has been technically vetted, interview-tested, and matched against
                your actual project needs — not just a keyword match on a resume. Whether you need one
                developer for six weeks or a full dedicated team for a year-long build, we structure the
                engagement around your project, not the other way around.
              </p>
              <Link to="/about" className="hp-btn hp-btn--primary hp-about-cta">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="hp-section hp-commitment">
        <div className="hp-container">
          <p className="hp-label-line">ABOUT · OUR COMMITMENT</p>
          <div className="hp-commitment-head">
            <h2>
              Our commitment to clients
            </h2>
            <span className="hp-mono">/ 04 principles</span>
          </div>
          <div className="hp-principles">
            {principles.map((item) => (
              <article key={item.num} className="hp-principle">
                <span className="hp-principle-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="hp-metrics-bar">
            {speedMetrics.map((item) => (
              <div key={item.label} className="hp-metric">
                <strong>
                  {item.value}
                  <small>{item.unit}</small>
                </strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="hp-section hp-process">
        <div className="hp-container hp-process-grid">
          <div className="hp-process-intro">
            <p className="hp-label-line">OUR HIRING PROCESS</p>
            <h2>From Requirement to Onboarded Developer — Fast</h2>
            <p className="hp-body">
              No black-box matching, no six-week pipelines. A five-step process engineered to put a
              contributing developer on your team in days.
            </p>
            <Link to={contactPath("hire")} className="hp-btn hp-btn--primary hp-btn--pill">
              Start Your Hiring Request <span aria-hidden="true">→</span>
            </Link>
            <div className="hp-process-stats">
              <div>
                <strong>&lt; 5 min</strong>
                <span>to submit</span>
              </div>
              <div>
                <strong>24 h</strong>
                <span>to shortlist</span>
              </div>
              <div>
                <strong>Days</strong>
                <span>to first commit</span>
              </div>
            </div>
          </div>
          <ol className="hp-process-steps">
            {hiringSteps.map((step) => (
              <li key={step.num}>
                <span className="hp-step-num">{step.num}</span>
                <div>
                  <div className="hp-step-title-row">
                    <h3>{step.title}</h3>
                    <span className="hp-tag">{step.tag}</span>
                  </div>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose */}
      <section className="hp-section hp-why">
        <div className="hp-container">
          <div className="hp-why-head">
            <div>
              <p className="hp-label-line hp-label-line--accent">WHAT MAKES US STAND OUT</p>
              <h2>Why Companies Choose AP Consultancy</h2>
            </div>
            <p className="hp-body">
              Six differentiators that matter when shipping is on the line — and why each one changes
              your outcome.
            </p>
          </div>

          <div className="hp-why-grid">
            <article className="hp-why-card hp-why-card--speed">
              <p className="hp-card-label">SPEED</p>
              <h3>24-Hour Shortlists</h3>
              <p>Most staffing partners take weeks. We turn around qualified candidates in a day.</p>
              <div className="hp-compare">
                <div className="hp-compare-row">
                  <span>Typical agency</span>
                  <div className="hp-bar hp-bar--long">
                    <i />
                    <em>2–4 weeks</em>
                  </div>
                </div>
                <div className="hp-compare-row">
                  <span>AP Consultancy</span>
                  <div className="hp-bar hp-bar--short">
                    <i />
                    <em>24 hours</em>
                  </div>
                </div>
              </div>
            </article>

            <article className="hp-why-card hp-why-card--quality">
              <p className="hp-card-label">QUALITY</p>
              <h3>Pre-Vetted, Not Just Screened</h3>
              <p>Every developer passes technical assessment and interview rounds before reaching your shortlist.</p>
              <ul className="hp-check-list">
                <li>Technical assessment</li>
                <li>Live interview rounds</li>
                <li>Project-fit matching</li>
              </ul>
            </article>

            <article className="hp-why-card hp-why-card--trust">
              <p className="hp-card-label">TRUST</p>
              <h3>ISO-Certified Processes</h3>
              <p>Hiring, data handling, and delivery follow ISO-certified standards.</p>
            </article>

            <article className="hp-why-card hp-why-card--flex">
              <p className="hp-card-label">FLEXIBILITY</p>
              <h3>Short-Term or Long-Term, Your Choice</h3>
              <p>Hire for a 4-week sprint or a multi-year build — the engagement flexes to your project.</p>
              <div className="hp-term-switch">
                <span className="hp-pill-soft">4-week sprint</span>
                <span className="hp-switch-icon" aria-hidden="true">⇄</span>
                <span className="hp-pill-grad">multi-year build</span>
              </div>
            </article>

            <article className="hp-why-card hp-why-card--support">
              <p className="hp-card-label">SUPPORT</p>
              <h3>Full Support, Not a Handoff</h3>
              <p>Replacements, scope changes, and check-ins — all included, all managed.</p>
              <div className="hp-manager">
                <div className="hp-avatar">
                  AM
                  <i />
                </div>
                <div>
                  <strong>Your dedicated manager</strong>
                  <span>Single point of contact, always.</span>
                </div>
              </div>
            </article>

            <article className="hp-why-card hp-why-card--coverage">
              <div>
                <p className="hp-card-label">COVERAGE</p>
                <h3>Broad, Specialized Coverage</h3>
                <p>eCommerce, DevOps/Cloud/Security, Agentic AI, QA, Mobile &amp; Web, AI/ML/Automation — one partner instead of many vendors.</p>
              </div>
              <div className="hp-coverage-tags">
                {coverageTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Trusted + Testimonial */}
      <section className="hp-section hp-social-proof">
        <div className="hp-container">
          <p className="hp-trusted-label">TRUSTED BY PRODUCT & ENGINEERING TEAMS</p>
          <div className="hp-trusted-logos">
            {trustedLogos.map((logo) => (
              <span key={logo.name} className={`hp-trusted-logo hp-trusted-logo--${logo.style}`}>
                {logo.name}
              </span>
            ))}
          </div>

          <blockquote className="hp-quote">
            <div className="hp-quote-mark" aria-hidden="true">
              ”
            </div>
            <p>
              AP Consultancy sent a shortlist of genuinely qualified developers within a day.{" "}
              <mark>
                We had someone contributing to our sprint by the following week — no agency has ever
                moved that fast for us.
              </mark>
            </p>
            <footer>
              <strong>Engineering Lead</strong>
              <span>· Series-B SaaS platform</span>
            </footer>
            <Link to="/portfolio" className="hp-text-link">
              Read more client stories →
            </Link>
          </blockquote>
        </div>
      </section>

      {/* Services strip */}
      <section className="hp-section hp-solutions" id="services">
        <div className="hp-container">
          <div className="hp-section-intro">
            <p className="hp-eyebrow hp-eyebrow--dot">WHAT WE STAFF</p>
            <h2>What We Staff</h2>
            <p className="hp-body">
              Explore our six specialization areas — each backed by a dedicated bench of pre-vetted developers.
            </p>
          </div>
          <div className="hp-solutions-grid">
            {serviceSpecializations.map((item) => (
              <Link key={item.slug} to={`/services/${item.slug}`} className="hp-solution-card hp-solution-card--link">
                <div className="hp-solution-icon" style={{ color: item.color }}>
                  <SolutionIcon type={item.icon} color={item.color} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
          <div className="hp-section-cta">
            <Link to="/services" className="hp-btn hp-btn--primary">
              Explore All Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech stack strip */}
      <section className="hp-section hp-tech-strip">
        <div className="hp-container">
          <div className="hp-section-intro hp-section-intro--center">
            <p className="hp-eyebrow hp-eyebrow--dot">TECH STACK</p>
            <h2>Developers Across Every Major Stack</h2>
          </div>
          <div className="hp-coverage-tags hp-coverage-tags--center">
            {techStackStrip.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hp-section hp-final-cta">
        <div className="hp-container">
          <div className="hp-banner hp-banner--start">
            <div className="hp-banner-copy">
              <h2>Ready to Scale Your Team Without the Hiring Headache?</h2>
              <p>Get a shortlist of pre-vetted developers within 24 hours.</p>
              <div className="hp-hero-actions">
                <Link to={contactPath("hire")} className="hp-btn hp-btn--white">
                  Hire a Developer <span aria-hidden="true">→</span>
                </Link>
                <Link to="/careers" className="hp-btn hp-btn--ghost hp-btn--ghost-on-dark">
                  Join Our Talent Pool <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
