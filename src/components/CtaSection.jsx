import "./CtaSection.css";

export default function CtaSection() {
  return (
    <section id="contact" className="section-block cta-panel">
      <div>
        <p className="eyebrow">Get Started Tody</p>
        <h2>Contact Us For A Free Consultation And Shape Your Future</h2>
        <p className="section-lead">
          Join our newsletter and get practical product and AI growth updates.
        </p>
      </div>
      <div className="cta-actions">
        <button className="button">Book a free call</button>
        <input
          className="newsletter-input"
          type="email"
          placeholder="Enter email for newsletter"
          aria-label="Newsletter email"
        />
        <button className="button button-ghost">Subscribe</button>
      </div>
    </section>
  );
}
