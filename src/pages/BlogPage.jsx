import { CaseStudiesSection } from "../components";
import { caseStudies } from "../data/siteContent";

export default function BlogPage() {
  return (
    <>
      <section className="section-block">
        <p className="eyebrow">Blog</p>
        <h2>Insights on AI automation, software delivery, and growth.</h2>
        <p className="section-lead">
          Explore how teams use automation and modern IT services to scale faster
          with measurable outcomes.
        </p>
      </section>
      <CaseStudiesSection caseStudies={caseStudies} />
    </>
  );
}
