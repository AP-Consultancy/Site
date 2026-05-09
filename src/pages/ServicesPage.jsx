import { useState } from "react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "../components";
import "./ServicesPage.css";

const services = [
  {
    title: "Software Development",
    subtitle: "Product Engineering",
    description: "Add skilled developers to speed up product delivery.",
    mediaClass: "sv-media-1",
    icon: "code",
    techStack: "React, Node.js, TypeScript",
    delivery: "MVP to production, sprint-based releases",
    hoverPoints: ["API-first architecture", "Sprint releases every 1-2 weeks", "Code quality + test coverage"],
  },
  {
    title: "Mobile App Development",
    subtitle: "Mobile Apps",
    description: "Build scalable iOS, Android, or cross-platform apps.",
    mediaClass: "sv-media-2",
    icon: "mobile",
    techStack: "Flutter, React Native, Kotlin",
    delivery: "Cross-platform apps with native performance",
    hoverPoints: ["Cross-platform + native modules", "Store deployment support", "Crash and performance monitoring"],
  },
  {
    title: "DevOps",
    subtitle: "CI/CD Automation",
    description: "Automate workflows and streamline CI/CD pipelines.",
    mediaClass: "sv-media-3",
    icon: "devops",
    techStack: "Docker, Kubernetes, GitHub Actions",
    delivery: "CI/CD automation, cloud deployment, observability",
    hoverPoints: ["Automated CI/CD pipelines", "Zero-downtime deployments", "Monitoring and alerting setup"],
  },
  {
    title: "IT Consulting",
    subtitle: "Tech Strategy",
    description: "Align tech strategy with business goals.",
    mediaClass: "sv-media-4",
    icon: "chart",
    techStack: "Architecture reviews, roadmap planning",
    delivery: "Tech audit, scaling plan, execution blueprint",
    hoverPoints: ["Current-state audit", "Scalable target architecture", "Delivery roadmap with milestones"],
  },
  {
    title: "Database Architecture",
    subtitle: "Blockchain Development",
    description: "Create secure, scalable database systems.",
    mediaClass: "sv-media-5",
    icon: "database",
    techStack: "PostgreSQL, MongoDB, Redis",
    delivery: "Data modeling, optimization, secure access",
    hoverPoints: ["Schema and query optimization", "Backup + recovery strategy", "Role-based secure access"],
  },
  {
    title: "Blockchain Development",
    subtitle: "Blockchain Solutions",
    description: "Develop dApps and smart contracts.",
    mediaClass: "sv-media-6",
    icon: "chain",
    techStack: "Solidity, Web3.js, Hardhat",
    delivery: "Smart contracts, wallets, dApp integration",
    hoverPoints: ["Smart contract development", "Security-focused testing", "Wallet and dApp integration"],
  },
  {
    title: "QA Testing",
    subtitle: "Quality Assurance",
    description: "Ensure quality with thorough testing.",
    mediaClass: "sv-media-7",
    icon: "qa",
    techStack: "Cypress, Playwright, Jest",
    delivery: "Automation suites, regression and performance QA",
    hoverPoints: ["Automated regression suite", "Manual exploratory testing", "Performance and bug reports"],
  },
  {
    title: "Project Management",
    subtitle: "Project Delivery",
    description: "Manage timelines, budgets, and team coordination.",
    mediaClass: "sv-media-8",
    icon: "megaphone",
    techStack: "Agile, Jira, Notion",
    delivery: "Sprint planning, risk tracking, stakeholder updates",
    hoverPoints: ["Sprint planning and tracking", "Risk and dependency management", "Weekly stakeholder reporting"],
  },
  {
    title: "Maintenance and Support",
    subtitle: "Ongoing Support",
    description: "Provide ongoing updates and technical support.",
    mediaClass: "sv-media-9",
    icon: "support",
    techStack: "Monitoring, patching, incident response",
    delivery: "24/7 support, maintenance and SLA-backed uptime",
    hoverPoints: ["24/7 incident response", "Security patches and updates", "SLA-backed uptime support"],
  },
];

const vettingSteps = [
  {
    title: "Send Inquiry & Vet Profiles",
    description: "Share your requirements and review shortlisted developers matched to your needs.",
    icon: "bulb",
  },
  {
    title: "Interview & Select",
    description: "Assess candidates through interviews and choose the right fit for your team.",
    icon: "people",
  },
  {
    title: "Finalize & Onboard",
    description: "Complete contracts, sign NDAs, and smoothly onboard selected developers.",
    icon: "handshake",
  },
  {
    title: "Start Development",
    description: "Developers integrate into your workflow and begin contributing immediately.",
    icon: "rocket",
  },
];

const domains = [
  { title: "Technology & Digital", lines: "Fintech | E-commerce | Education", icon: "bars" },
  { title: "Core Industries", lines: "Healthcare | Manufacturing | Realty", icon: "clock" },
  { title: "Consumer Services", lines: "Entertainment | Logistics | Travel", icon: "bolt" },
];

const compareNegative = [
  "Limited Team Stability",
  "Onboarding Efforts",
  "Variable Commitment Levels",
  "Communication Challenges",
  "Talent Dependency Risk",
  "Less Product Ownership",
];

const comparePositive = [
  "Global Talent Access",
  "Faster Hiring Process",
  "Flexible Scaling Options",
  "Lower Operational Cost",
  "Latest Tech Expertise",
  "Full Project Control",
];

const faqs = [
  {
    q: "What is IT staff augmentation?",
    a: "IT staff augmentation adds vetted engineers to your team for a defined period. They integrate with your tools and ceremonies as an extension of your in-house org—without committing to full-time hiring for every role.",
  },
  {
    q: "How fast can we onboard a developer?",
    a: "Many placements start within a few days to a few weeks, depending on tech stack fit, timezone overlap, security or compliance checks, and your interview pace. We prioritize candidates who match both skills and workflow.",
  },
  {
    q: "Do I get to interview the candidates?",
    a: "Yes. You review shortlisted profiles first, then run your own interviews and technical assessments before anyone joins—so approvals always sit with your team.",
  },
  {
    q: "Is there a minimum engagement period?",
    a: "Most engagements include a short minimum commitment so capacity and onboarding are predictable for both sides. The exact duration is agreed upfront based on role and roadmap.",
  },
  {
    q: "How do you ensure quality and accountability?",
    a: "We verify experience, outcomes, and communication fit, document scope and ways of working in the agreement, and keep lightweight check-ins so ownership, delivery, and escalation paths stay clear.",
  },
];

function ServiceIcon({ name }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "code":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <path d="m16 18 4-6-4-6M8 6l-4 6 4 6" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M11 17h2" />
        </svg>
      );
    case "devops":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <path d="M4 18V6M9 18v-6M14 18v-9M19 18V9" />
        </svg>
      );
    case "database":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </svg>
      );
    case "chain":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <path d="M10 13a5 5 0 0 1 0-7l1.5-1.5a5 5 0 1 1 7 7L17 13M14 11a5 5 0 0 1 0 7l-1.5 1.5a5 5 0 1 1-7-7l1.5-1.5" />
        </svg>
      );
    case "qa":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <path d="M4 4l7 7 2-2 9 9-3 3-8-8-5 5-4-14z" />
        </svg>
      );
    case "megaphone":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <path d="M3 11v4h4l8 5V6L7 11H3zm14 5v-8M17 21l3-10" />
        </svg>
      );
    case "support":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    default:
      return null;
  }
}

function SmallIcon({ name }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "bulb":
      return (
        <svg {...common} width="22" height="22" aria-hidden>
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 13c.5.8.8 1.7.9 2.7h6.2c.1-1 .4-1.9.9-2.7a7 7 0 0 0-4-13z" />
        </svg>
      );
    case "people":
      return (
        <svg {...common} width="22" height="22" aria-hidden>
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 21v-2a5 5 0 0 1 5-5h2M17 21v-1a4 4 0 0 0-4-4h-2" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...common} width="22" height="22" aria-hidden>
          <path d="M11 12 8 15l-3-3a2 2 0 1 1 3-3l1 1 4-4a2 2 0 1 1 3 3l-4 7-2 2-3-4zM21 13l-2-5" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common} width="22" height="22" aria-hidden>
          <path d="m4 15 6-11 10-3-3 10-11 6-2-2zM14 10l4 4" />
          <path d="M12 21a6 6 0 0 0-6-6" />
        </svg>
      );
    case "bars":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <path d="M4 19V5M9 15V9M14 17V7M19 13v-2" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common} width="20" height="20" aria-hidden>
          <path d="M13 2 3 14h7l-1 8 11-13h-7l3-7z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="sv-page">
      <RevealOnScroll className="sv-hero">
        <div className="sv-hero-grid" aria-hidden="true" />
        <div className="sv-hero-inner">
          <div className="sv-badge">
            IT Staff Augmentation
          </div>
          <h1>
            Hire Remote
            <br />
            Developers
          </h1>
          <h2 className="sv-hero-sub">Building Strong Teams</h2>
          <p>
            Scale your engineering with top-tier talent on demand. Launch or expand faster with remote developers who
            extend your in-house team.
          </p>
        </div>
      </RevealOnScroll>

      <section className="sv-services" aria-label="Services">
        <div className="sv-services-grid">
          {services.map((s, i) => (
            <RevealOnScroll key={s.title} className="sv-service-card-wrap" delay={i * 70}>
              <article className="sv-service-card">
                <span className="sv-service-arrow" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17 17 7M10 7h7v7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="sv-service-head">
                  <div className="sv-icon-ring">
                    <ServiceIcon name={s.icon} />
                  </div>
                </div>
                <h3 className="sv-card-title">{s.title}</h3>
                <p className="sv-card-sub">{s.subtitle}</p>
                <p className="sv-card-desc">{s.description}</p>
                <div className={`sv-card-media ${s.mediaClass}`} />
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <RevealOnScroll className="sv-section-intro">
        <h2>Our Vetting Process</h2>
        <p>We follow a strict multi-step process to ensure you get only the best-fit talent</p>
      </RevealOnScroll>

      <section className="sv-vetting-grid">
        {vettingSteps.map((step, i) => (
          <RevealOnScroll key={step.title} delay={i * 80}>
            <article className="sv-vetting-card">
              <div className="sv-vetting-icon">
                <SmallIcon name={step.icon} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          </RevealOnScroll>
        ))}
      </section>

      <RevealOnScroll className="sv-section-intro sv-section-domains">
        <h2>Industry-Specific IT Staff Augmentation Services</h2>
        <p>
          From fintech to healthcare, eCommerce to logistics, our experts deliver industry insight and compliance expertise
          tailored to your needs.
        </p>
      </RevealOnScroll>

      <section className="sv-domain-grid">
        {domains.map((d, i) => (
          <RevealOnScroll key={d.title} delay={i * 90}>
            <article className="sv-domain-card">
              <div className="sv-domain-icon">
                <SmallIcon name={d.icon} />
              </div>
              <h3>{d.title}</h3>
              <p>{d.lines}</p>
            </article>
          </RevealOnScroll>
        ))}
      </section>

      <RevealOnScroll className="sv-section-intro">
        <h2>Why Choose Our IT Staff Augmentation Services?</h2>
        <p>Hiring full-time developers can be slow and costly. IT staff augmentation offers a smarter way to scale.</p>
      </RevealOnScroll>

      <section className="sv-compare-grid">
        <RevealOnScroll delay={60}>
          <article className="sv-compare-card">
            <h3>Manual Work</h3>
            <ul>
              {compareNegative.map((t) => (
                <li key={t}>
                  <span className="sv-x" aria-hidden="true">
                    ×
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </article>
        </RevealOnScroll>
        <RevealOnScroll delay={140}>
          <article className="sv-compare-card sv-compare-card--accent">
            <h3>Staff Augmentation</h3>
            <ul>
              {comparePositive.map((t) => (
                <li key={t}>
                  <span className="sv-check" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </article>
        </RevealOnScroll>
      </section>

      <RevealOnScroll className="sv-section-intro">
        <h2>We’ve Got the Answers You’re Looking For</h2>
        <p className="sv-faq-lead">Quick answers to your AI automation questions.</p>
      </RevealOnScroll>

      <RevealOnScroll className="sv-faq-block">
        <ul className="sv-faq-list">
          {faqs.map((item, i) => {
            const open = openFaq === i;
            const headingId = `faq-heading-${i}`;
            const panelId = `faq-panel-${i}`;
            return (
              <li key={item.q} className="sv-faq-item">
                <button
                  type="button"
                  className="sv-faq-row"
                  id={headingId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenFaq(open ? null : i)}
                >
                  <span className="sv-faq-q">{item.q}</span>
                  <svg
                    className={open ? "sv-chev open" : "sv-chev"}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    aria-hidden
                  >
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  aria-hidden={!open}
                  className={open ? "sv-faq-panel sv-faq-panel--open" : "sv-faq-panel"}
                >
                  <p>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </RevealOnScroll>

      <RevealOnScroll className="sv-cta">
        <h2>Ready to Scale Your Tech Team?</h2>
        <p>Let&apos;s connect and find your perfect developer match.</p>
        <Link className="button sv-cta-btn" to="/contact">
          Talk To Our Experts
          <span className="sv-cta-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>
      </RevealOnScroll>
    </div>
  );
}
