import { Link } from "react-router-dom";
import { serviceCategories } from "../data/servicesPageData";
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <Link to="/" className="footer-brand-link">
            <img src="/logo/ap.png" alt="AP Consultancy" className="footer-logo" />
          </Link>
          <p className="footer-tagline">
            IT staff augmentation — pre-vetted remote developers, shortlist in 24 hours.
          </p>
        </div>

        <div className="footer-links-block">
          <p>Company</p>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/portfolio">Case Studies</Link>
            <Link to="/contact">Partners &amp; Compliance</Link>
            <Link to="/careers">Careers</Link>
          </div>
        </div>

        <div className="footer-links-block">
          <p>Services</p>
          <div className="footer-links">
            {serviceCategories.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-links-block">
          <p>Get Started</p>
          <div className="footer-links">
            <Link to="/contact">Submit a Hiring Requirement</Link>
            <Link to="/careers">Join Our Talent Pool</Link>
            <Link to="/contact">Request Compliance Pack</Link>
          </div>
        </div>

        <div className="footer-links-block">
          <p>Contact &amp; Social</p>
          <div className="footer-links">
            <a href="mailto:hello@apconsultancy.in">hello@apconsultancy.in</a>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <span>Ahmedabad, Gujarat, India</span>
            <a href="https://linkedin.com/company/ap-consultancy" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© AP Consultancy. All rights reserved.</p>
        <div className="footer-legal">
          <Link to="/contact">Privacy Policy</Link>
          <Link to="/contact">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
