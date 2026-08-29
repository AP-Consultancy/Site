import { caseStudies, heroCollage, techStackItems } from "../data/workPageData";
import usePageMeta from "../hooks/usePageMeta";
import "./WorkPage.css";

function CaseStudy({ study, reverse }) {
  return (
    <article className={`wk-case${reverse ? " wk-case--reverse" : ""}`}>
      <div className="wk-case-copy">
        <p className="wk-case-index" style={{ color: study.accent }}>
          {study.id} / {study.client}
        </p>
        <h2>{study.title}</h2>
        <p className="wk-case-summary">{study.summary}</p>

        <div className="wk-tech-tags">
          {study.technologies.map((tech) => (
            <span
              key={tech}
              style={{ background: study.tagBg, color: study.tagText }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="wk-detail-block" style={{ borderColor: study.accent }}>
          <h3>Challenge</h3>
          <p>{study.challenge}</p>
        </div>

        <div className="wk-detail-block" style={{ borderColor: study.accent }}>
          <h3>Solution</h3>
          <p>{study.contribution}</p>
        </div>
      </div>

      <div className="wk-case-visual">
        <div className="wk-case-image-wrap">
          <img src={study.image} alt={study.client} className="wk-case-image" loading="lazy" />
          <div className="wk-outcome-card">
            <span className="wk-outcome-label">Outcome</span>
            <p>{study.outcome}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function WorkPage() {
  usePageMeta({
    title: "Case Studies | Real Results From AP Consultancy's Staff Augmentation Clients",
    description:
      "See how businesses scaled their engineering teams with AP Consultancy's pre-vetted remote developers — real projects, real outcomes.",
  });

  return (
    <div className="work-page">
      <section className="wk-hero">
        <div className="wk-container wk-hero-grid">
          <div className="wk-hero-copy">
            <span className="wk-badge">CASE STUDIES</span>
            <h1>Real Teams. Real Timelines. Real Results.</h1>
            <p className="wk-lead">
              A look at how companies used AP Consultancy to scale their engineering capacity — without
              the hiring bottleneck.
            </p>
          </div>

          <div className="wk-hero-collage" aria-hidden="true">
            <div className="wk-hero-collage-glow" />
            {heroCollage.map((card) => (
              <div key={card.alt} className={`wk-collage-card ${card.className}`}>
                <img src={card.src} alt={card.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wk-trusted" aria-label="Trusted delivery">
        <div className="wk-container">
          <img
            src="/images/figma/trusted-brands-section.png"
            alt="Trusted delivery — A view of some of the best brands we have worked with."
            className="wk-trusted-banner"
            loading="lazy"
          />
        </div>
      </section>

      <section className="wk-cases">
        <div className="wk-container wk-cases-stack">
          {caseStudies.map((study, index) => (
            <CaseStudy key={study.id} study={study} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="wk-tech">
        <div className="wk-container">
          <div className="wk-tech-header">
            <div className="wk-tech-header-copy">
              <span className="wk-tech-eyebrow">Technology stack</span>
              <h2>Built with the tools modern enterprises already trust.</h2>
            </div>
            <p>
              Cloud infrastructure, data engineering, CRM automation, analytics, and product
              development come together in one delivery system.
            </p>
          </div>

          <div className="wk-tech-grid">
            {techStackItems.map((item) => (
              <article key={item.label} className="wk-tech-card">
                <img src={item.icon} alt="" loading="lazy" />
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
