import "./AboutSection.css";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section className="section-block about-block" id="about">
      <SectionHeading
        eyebrow="Who We Are"
        title="Xtract Is A Team Focused On Practical AI Automation"
        lead="We help businesses streamline workflows, boost efficiency, and scale with AI-driven solutions that produce measurable outcomes."
      />
    </section>
  );
}
