import "./IndustriesSection.css";
import SectionHeading from "./SectionHeading";

export default function IndustriesSection({ industryCards }) {
  return (
    <section className="section-block">
      <SectionHeading
        eyebrow="Industries We Serve"
        title="Industries We Serve"
        lead="Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes."
      />
      <div className="industry-grid">
        {industryCards.map((industry) => (
          <article className="industry-card" key={industry.title}>
            <div className="mini-art" aria-hidden="true" />
            <h3>{industry.title}</h3>
            <p>{industry.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
