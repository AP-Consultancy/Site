import { Link } from "react-router-dom";
import { RevealOnScroll } from "../components";
import "./AboutPage.css";

const valueCards = [
  {
    title: "Innovation",
    text: "We challenge the norm to build smarter, faster, and better solutions.",
    icon: "bulb",
  },
  {
    title: "Collaboration",
    text: "We believe in growing together with our clients, building trust and shared success.",
    icon: "handshake",
  },
  {
    title: "Excellence",
    text: "We hold ourselves to the highest standards in everything we do.",
    icon: "rocket",
  },
  {
    title: "Integrity",
    text: "We act with absolute honesty and transparency in every interaction.",
    icon: "people",
  },
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

const clientLogos = [
  { src: "/logos/Acuity_Analytics_idwIL6acVL_1 2.png", alt: "Acuity Analytics" },
  { src: "/logos/Bathfitter 3.png", alt: "Bathfitter" },
  { src: "/logos/download-Picsart-BackgroundRemover.png", alt: "Telus" },
  { src: "/logos/hdfc-bank-logo 1.png", alt: "HDFC Bank" },
  { src: "/logos/langchain-color.png", alt: "Langchain" },
  { src: "/logos/images-Picsart-BackgroundRemover.png", alt: "AstraZeneca" },
  { src: "/logos/Rocket-Learning_New-Logo-2-Picsart-BackgroundRemover-Picsart-AiImageEnhancer 2.png", alt: "Rocket Learning" },
  { src: "/logos/Screenshot 2026-04-17 234303-Picsart-BackgroundRemover.png", alt: "Salesforce" },
  { src: "/logos/surface1.png", alt: "Agility Insights" },
  { src: "/logos/tailoreed-logo 1.png", alt: "Propic" },
  { src: "/logos/93d068_433e38f1a5de49a18691bbd9077a0f5c~mv2-Picsart-AiImageEnhancer.png", alt: "AP Consultancy" },
];

function IconValue({ name }) {
  const c = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "bulb":
      return (
        <svg {...c} width="22" height="22" aria-hidden>
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 13c.5.8.8 1.7.9 2.7h6.2c.1-1 .4-1.9.9-2.7a7 7 0 0 0-4-13z" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...c} width="22" height="22" aria-hidden>
          <path d="M11 12 8 15l-3-3a2 2 0 1 1 3-3l1 1 4-4a2 2 0 1 1 3 3l-4 7-2 2-3-4zM21 13l-2-5" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...c} width="22" height="22" aria-hidden>
          <path d="m4 15 6-11 10-3-3 10-11 6-2-2zM14 10l4 4" />
          <path d="M12 21a6 6 0 0 0-6-6" />
        </svg>
      );
    case "people":
      return (
        <svg {...c} width="22" height="22" aria-hidden>
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 21v-2a5 5 0 0 1 5-5h2M17 21v-1a4 4 0 0 0-4-4h-2" />
        </svg>
      );
    default:
      return null;
  }
}

function IconAccent({ name }) {
  const c = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "bolt") {
    return (
      <svg {...c} width="20" height="20" aria-hidden>
        <path d="M13 2 3 14h7l-1 8 11-13h-7l3-7z" />
      </svg>
    );
  }
  return (
    <svg {...c} width="20" height="20" aria-hidden>
      <path d="M4 19V5M9 15V9M14 17V7M19 13v-2" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="ab-page">
      <RevealOnScroll className="ab-hero">
        <div className="ab-hero-inner">
          <span className="ab-pill">About Us</span>
          <h1>About AP Consultancy</h1>
          <p className="ab-hero-sub">Empowering Businesses Through Technology</p>
          <p className="ab-hero-body">
            At AP Consultancy, we are passionate problem-solvers, strategic thinkers, and tech innovators. As a dynamic IT
            solutions company, we specialize in delivering custom software development, web development, mobile app
            development, UI/UX design, and digital transformation services that help businesses grow, scale, and succeed in
            a digital-first world. Founded with a mission to deliver high-quality, reliable, and scalable solutions, AP
            Consultancy partners with startups, SMEs, and enterprises to solve real-world business challenges using
            cutting-edge technology, deep industry knowledge, and user-centric design.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="ab-logos" delay={60}>
        <p className="ab-logos-caption">Over 50+ business trust us</p>
        <div className="ab-logo-marquee">
          <div className="ab-logo-track">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div className="ab-logo-item" key={`${logo.src}-${i}`}>
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="ab-section-intro" delay={40}>
        <h2>What We Do</h2>
        <p>
          We blend creativity, strategy, and technology to deliver custom solutions tailored to each client&apos;s unique
          needs. Whether you&apos;re building a product from scratch, automating a workflow, or enhancing customer
          engagement, our team ensures every project is aligned with your vision and business objectives.
        </p>
      </RevealOnScroll>

      <section className="ab-mv-grid">
        <RevealOnScroll delay={70}>
          <article className="ab-mv-card">
            <div className="ab-mv-accent">
              <IconAccent name="bolt" />
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower businesses by delivering innovative, efficient, and scalable digital solutions that drive measurable impact.
            </p>
          </article>
        </RevealOnScroll>
        <RevealOnScroll delay={130}>
          <article className="ab-mv-card">
            <div className="ab-mv-accent">
              <IconAccent name="chart" />
            </div>
            <h3>Our Vision</h3>
            <p>To be recognized as a trusted global technology partner known for excellence, integrity, and client success.</p>
          </article>
        </RevealOnScroll>
      </section>

      <RevealOnScroll className="ab-section-intro ab-values-head" delay={50}>
        <h2>The Values Behind AP Consultancy</h2>
        <p>
          Our values shape everything we do at AP Consultancy. From innovation to integrity, we&apos;re committed to building
          technology solutions that empower businesses and drive real impact.
        </p>
      </RevealOnScroll>

      <section className="ab-values-grid">
        {valueCards.map((item, i) => (
          <RevealOnScroll key={item.title} delay={i * 75}>
            <article className="ab-value-card">
              <div className="ab-value-icon">
                <IconValue name={item.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          </RevealOnScroll>
        ))}
      </section>

      <RevealOnScroll className="ab-section-intro" delay={60}>
        <h2>What makes us stand out in the industry</h2>
        <p>
          Discover how our innovative strategies, data-driven approach, and commitment to results set us apart from the
          competition.
        </p>
      </RevealOnScroll>

      <section className="ab-compare-grid">
        <RevealOnScroll delay={80}>
          <article className="ab-compare-card">
            <h3>Others</h3>
            <ul>
              {compareNegative.map((t) => (
                <li key={t}>
                  <span className="ab-x" aria-hidden="true">
                    ×
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </article>
        </RevealOnScroll>
        <RevealOnScroll delay={140}>
          <article className="ab-compare-card ab-compare-card--accent">
            <h3>APC</h3>
            <ul>
              {comparePositive.map((t) => (
                <li key={t}>
                  <span className="ab-check" aria-hidden="true">
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

      <RevealOnScroll className="ab-cta" delay={50}>
        <h2>Let&apos;s Build the Future Together</h2>
        <p>Contact us today to start your digital journey with confidence.</p>
        <Link className="button ab-cta-btn" to="/contact">
          Talk To Our Experts
          <span className="ab-cta-arrow" aria-hidden="true">
            ↗
          </span>
        </Link>
      </RevealOnScroll>
    </div>
  );
}
