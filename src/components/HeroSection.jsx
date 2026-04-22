import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="home" className="hero section-block">
      <p className="eyebrow">Your Trusted IT Partner</p>
      <h1>
        Your Trusted IT Partner for
        <span> Business Growth</span>
      </h1>
      <p className="lead">
        Driving digital transformation with advanced IT solutions and expert
        support.
      </p>
      <div className="hero-actions">
        <button className="button">Get In Touch</button>
        <button className="button button-ghost">View Services</button>
      </div>
      <p className="supporting-text">Over 50+ businesses trust us.</p>
    </section>
  );
}
