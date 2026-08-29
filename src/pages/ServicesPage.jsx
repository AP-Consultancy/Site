import { Link } from "react-router-dom";
import { serviceCategories, servicesHubMeta } from "../data/servicesPageData";
import { contactPath } from "../data/siteContact";
import usePageMeta from "../hooks/usePageMeta";
import "./ServicesPage.css";

function ServiceIcon({ type, color }) {
  const stroke = color;
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };

  if (type === "cart") {
    return (
      <svg {...common}>
        <path d="M6 6h15l-1.5 9H8L6 6zM6 6 5 3H2" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="9" cy="20" r="1.5" fill={stroke} />
        <circle cx="18" cy="20" r="1.5" fill={stroke} />
      </svg>
    );
  }
  if (type === "cloud") {
    return (
      <svg {...common}>
        <path d="M7 18h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.6-1.5A3.5 3.5 0 0 0 7 18z" stroke={stroke} strokeWidth="1.8" />
      </svg>
    );
  }
  if (type === "mobile") {
    return (
      <svg {...common}>
        <rect x="7" y="3" width="10" height="18" rx="2" stroke={stroke} strokeWidth="1.8" />
        <path d="M11 17h2" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "qa") {
    return (
      <svg {...common}>
        <path d="M4 4l7 7 2-2 9 9-3 3-8-8-5 5-4-14z" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesPage() {
  usePageMeta(servicesHubMeta);

  return (
    <div className="services-page">
      <section className="sv-hub-hero">
        <div className="sv-container sv-hub-hero-grid">
          <div className="sv-hub-copy">
            <p className="sv-eyebrow">Services</p>
            <h1>Specialized Developers for Every Part of Your Stack</h1>
            <p className="sv-lead">
              Staff augmentation only works if the talent actually fits the project. Our bench is organized by
              specialization, not just job title — so the developer you get has already worked in your problem
              space.
            </p>
          </div>
          <div className="sv-hub-visual" aria-hidden="true">
            <img src="/images/it consulting.jpeg" alt="" loading="lazy" />
            <div className="sv-hub-visual-badge">6 Specializations</div>
          </div>
        </div>
      </section>

      <section className="sv-hub-cards">
        <div className="sv-container">
          <div className="sv-cards-grid">
            {serviceCategories.map((service) => (
              <article key={service.slug} className="sv-card">
                <div className="sv-card-top">
                  <div className="sv-card-icon" style={{ color: service.accent }}>
                    <ServiceIcon type={service.icon} color={service.accent} />
                  </div>
                  <h2>{service.title}</h2>
                  <p>{service.summary}</p>
                  <Link to={`/services/${service.slug}`} className="sv-card-link">
                    Learn More <span aria-hidden="true">→</span>
                  </Link>
                </div>
                <div className="sv-card-media">
                  <img src={service.image} alt={service.imageAlt} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-hub-cta">
        <div className="sv-container">
          <div className="sv-cta-card">
            <div className="sv-cta-rings" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <h2>Not Sure Which Category Fits Your Project?</h2>
            <p>Tell us what you&apos;re building and we&apos;ll route you to the right specialization.</p>
            <Link to={contactPath("hire")} className="sv-btn sv-btn--white">
              Talk to Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
