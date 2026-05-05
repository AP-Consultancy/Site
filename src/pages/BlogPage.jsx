import { CaseStudiesSection } from "../components";
import { caseStudies } from "../data/siteContent";
import "./BlogPage.css";

export default function BlogPage() {
  return (
    <>
      <div className="blog-page-wrapper">
        <div className="blog-dot-grid"></div>
        <div className="blog-glow"></div>
        <section className="blog-intro-section">
          <p className="eyebrow">Blog</p>
          <h2>Insights on AI automation, software delivery, and growth.</h2>
          <p className="section-lead">
            Explore how teams use automation and modern IT services to scale faster
            with measurable outcomes.
          </p>
        </section>
        <CaseStudiesSection caseStudies={caseStudies} />
      </div>
    </>
  );
}
