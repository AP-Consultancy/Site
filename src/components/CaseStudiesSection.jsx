import "./CaseStudiesSection.css";
import SectionHeading from "./SectionHeading";

export default function CaseStudiesSection({ caseStudies }) {
  return (
    <section id="cases" className="section-block">
      <SectionHeading
        eyebrow="Case Studies"
        title="See How Our Smart Solutions Transforms Businesses"
      />
      <div className="case-grid">
        {caseStudies.map((study) => (
          <article className="case-card" key={study.title}>
            <h3>{study.title}</h3>
            <p>{study.detail}</p>
            <p className="impact-label">Impact :</p>
            <ul>
              {study.impact.map((impactItem) => (
                <li key={impactItem}>{impactItem}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
