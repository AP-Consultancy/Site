import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="home" className="hero section-block">
      <div className="hero-badge">
        <span className="badge-highlight">Arentis</span>
        <span className="badge-text">Your Trusted IT Partner</span>
      </div>
      <h1>
        Your Trusted IT Partner for <span>Business Growth</span>
      </h1>
      <p className="lead">
        Driving digital transformation with advanced IT solutions and expert
        support.
      </p>
      <div className="hero-actions">
        <button className="button">Get in touch ↗</button>
        <button className="button button-ghost">View services</button>
      </div>
    </section>
  );
}
