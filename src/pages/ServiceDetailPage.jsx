import { Link, Navigate, useParams } from "react-router-dom";
import { getServiceBySlug } from "../data/servicesPageData";
import usePageMeta from "../hooks/usePageMeta";
import "./ServicesPage.css";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  usePageMeta(
    service?.meta ?? {
      title: "Services — AP Consultancy",
      description: "Explore AP Consultancy's developer specialization areas.",
    }
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="services-page services-page--detail">
      <section className="sv-detail-hero">
        <div className="sv-container sv-detail-hero-grid">
          <div className="sv-detail-copy">
            <p className="sv-eyebrow">{service.eyebrow}</p>
            <h1>{service.headline}</h1>
            <p className="sv-lead">{service.lead}</p>
          </div>
          <div className="sv-detail-visual">
            <img src={service.image} alt={service.imageAlt} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="sv-detail-section">
        <div className="sv-container sv-detail-grid">
          <div className="sv-detail-block">
            <p className="sv-block-label">What We Staff</p>
            <h2>Skills &amp; Platforms</h2>
            <ul className="sv-tag-list">
              {service.whatWeStaff.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="sv-detail-block">
            <p className="sv-block-label">Common Use Cases</p>
            <h2>When Teams Hire Us</h2>
            <ul className="sv-check-list">
              {service.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sv-detail-why">
        <div className="sv-container">
          <p className="sv-block-label sv-block-label--center">Why AP Consultancy for This</p>
          <h2 className="sv-section-title">Why AP Consultancy for This</h2>
          <div className="sv-why-grid">
            {service.whyUs.map((item, index) => (
              <article key={item} className="sv-why-card">
                <span className="sv-why-num">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
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
            <h2>{service.ctaTitle}</h2>
            <p>Get a shortlist within 24 hours.</p>
            <div className="sv-cta-actions">
              <Link to="/contact" className="sv-btn sv-btn--white">
                Submit Your Requirement <span aria-hidden="true">→</span>
              </Link>
              <Link to="/devresources" className="sv-btn sv-btn--ghost">
                View Available Developers <span aria-hidden="true">→</span>
              </Link>
            </div>
            <Link to="/services" className="sv-back-link">
              ← All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
