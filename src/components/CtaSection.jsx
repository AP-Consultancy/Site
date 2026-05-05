import "./CtaSection.css";
import { Link } from "react-router-dom";

export default function CtaSection() {
  return (
    <section id="contact" className="section-block cta-panel">
      <div>
        <p className="eyebrow">Get Started Today</p>
        <h2>Contact us for a free consultation and let's shape the future of your business together.</h2>
        <p className="section-lead">
          Join our newsletter.
        </p>
      </div>
      <div className="cta-actions">
        <Link className="button" to="/contact">
          Contact Us
        </Link>
        <div className="newsletter-group">
          <input
            className="newsletter-input"
            type="email"
            placeholder="Enter email for newsletter"
            aria-label="Newsletter email"
          />
          <button className="button button-ghost">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
