import "./ServicesSection.css";
import SectionHeading from "./SectionHeading";

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="section-block">
      <SectionHeading
        eyebrow="Services"
        title="Industries We Serve"
        lead="We bring domain-specific expertise and innovative solutions to transform businesses across diverse sectors."
      />
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="mini-art" aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
