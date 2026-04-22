import "./SectionHeading.css";

export default function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="section-heading-wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}
