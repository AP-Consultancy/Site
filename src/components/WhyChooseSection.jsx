import "./WhyChooseSection.css";
import SectionHeading from "./SectionHeading";

export default function WhyChooseSection({ whyChoose }) {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="Why Choose Us?"
        title="Why Choose Arentis?"
        lead="We combine cutting-edge technology with proven methodologies to deliver exceptional results."
      />
      <div className="why-grid">
        {whyChoose.map((item) => (
          <article className="why-card" key={item.title}>
            <div className="why-icon" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
