import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="home" className="hero section-block">
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        <source src="/videos/hero-background.webm" type="video/webm" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-badge">
        <span className="badge-highlight">AP Consultancy</span>
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
        <a className="button button-ghost" href="/services" target="_blank" rel="noreferrer">
          View services
        </a>
      </div>
      <p className="supporting-text">Over 50+ business trust us</p>
    </section>
  );
}
