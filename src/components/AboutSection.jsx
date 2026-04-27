import "./AboutSection.css";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section className="section-block about-block" id="about">
      <SectionHeading
        eyebrow="Who We Are"
        title="Xtract is a team of innovators dedicated to making AI automation simple and effective."
        lead="We help businesses streamline workflows, boost efficiency, and scale with smart, AI-driven solutions."
      />
    </section>
  );
}
