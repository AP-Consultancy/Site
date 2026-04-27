import "./HeroSection.css";

export default function HeroSection({ onServicesClick }) {
  return (
    <section id="home" className="hero section-block">
      <div className="hero-badge">
        <span className="badge-highlight">Arentis</span>
        <span className="badge-text">Your Trusted IT Partner</span>
      </div>
      <h1>
        Engineered for scale. Trusted by millions of
        <span>Growing Enterprises.</span>
      </h1>
      <p className="lead">
        Driving digital transformation with advanced IT solutions and expert
        support.
      </p>
      <div className="hero-actions">
        <button className="button">Get in touch -&gt;</button>
        <button className="button button-ghost" onClick={onServicesClick}>
          View services
        </button>
      </div>
      <p className="supporting-text">Over 50+ business trust us</p>
    </section>
  );
}
