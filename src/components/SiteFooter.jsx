import { Link } from "react-router-dom";
import { serviceCategories } from "../data/servicesPageData";
import { brandLogos } from "../data/brandAssets";
import { contactPath, mailtoLink, siteContact } from "../data/siteContact";
import SiteSocialLinks from "./SiteSocialLinks";
import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <Link to="/" className="footer-brand-link">
            <img src={brandLogos.full} alt="AP Consultancy" className="footer-logo" />
          </Link>
          <p className="footer-tagline">
            IT staff augmentation — pre-vetted remote developers, shortlist in 24 hours.
          </p>
          <SiteSocialLinks className="site-social-links--footer" />
        </div>

        <div className="footer-links-block">
          <p>Company</p>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/portfolio">Case Studies</Link>
            <Link to={contactPath("vendor")}>Partners &amp; Compliance</Link>
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
            <Link to={contactPath("hire")}>Submit a Hiring Requirement</Link>
            <Link to="/careers">Join Our Talent Pool</Link>
            <Link to={contactPath("vendor")}>Request Compliance Pack</Link>
          </div>
        </div>

        <div className="footer-links-block">
          <p>Contact &amp; Social</p>
          <div className="footer-links">
            <a href={mailtoLink()}>{siteContact.email}</a>
            <a href={`tel:${siteContact.phoneTel}`}>{siteContact.phoneDisplay}</a>
            <a href={siteContact.mapsUrl} target="_blank" rel="noreferrer">
              {siteContact.address}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© AP Consultancy. All rights reserved.</p>
        <div className="footer-legal">
          <Link to={contactPath("hire")}>Privacy Policy</Link>
          <Link to={contactPath("hire")}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
