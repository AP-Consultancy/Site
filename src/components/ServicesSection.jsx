import "./ServicesSection.css";
import SectionHeading from "./SectionHeading";

export default function ServicesSection({ services }) {
  return (
    <section id="services" className="section-block">
      <SectionHeading
        eyebrow="Services"
        title="Services"
        lead="We provide end-to-end IT services to build, scale, and automate modern businesses."
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
