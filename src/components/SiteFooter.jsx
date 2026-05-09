import "./SiteFooter.css";
import { Link } from "react-router-dom";
import { useId } from "react";

function IconGmailBrand() {
  return (
    <svg className="footer-brand-svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64 6.545 11.73v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 10.11l8.073-6.617C21.69 2.28 24 3.434 24 5.457z"
      />
    </svg>
  );
}

function IconLinkedInBrand() {
  return (
    <svg className="footer-brand-svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path
        fill="#0A66C2"
        d="M20.447 20.452h-3.554v-5.569c0-1.356-.027-3.113-1.895-3.113-1.897 0-2.186 1.481-2.186 3.01v5.672H9.351V9h3.414v1.561h.047c.475-.9 1.637-1.85 3.37-1.85 3.606 0 4.273 2.376 4.273 5.475v6.266zm-15.11-13.02c-1.147 0-2.076-.934-2.076-2.087 0-1.153.929-2.087 2.076-2.087 1.141 0 2.071.934 2.071 2.087s-.93 2.087-2.071 2.087zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
      />
    </svg>
  );
}

function IconInstagramBrand({ gradId }) {
  return (
    <svg className="footer-brand-svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="25%" stopColor="#F77737" />
          <stop offset="50%" stopColor="#E1306C" />
          <stop offset="75%" stopColor="#C13584" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradId})`} />
      <path
        fill="#fff"
        d="M12 7.5c-1.26 0-1.42.01-1.91.04-.5.03-1.18.13-1.68.42a3.47 3.47 0 00-1.28 1.28c-.29.5-.39 1.18-.42 1.68-.03.49-.04.65-.04 1.91s.01 1.42.04 1.91c.03.5.13 1.18.42 1.68.28.5.74.96 1.28 1.28.5.29 1.18.39 1.68.42.49.03.65.04 1.91.04s1.42-.01 1.91-.04c.5-.03 1.18-.13 1.68-.42a3.47 3.47 0 001.28-1.28c.29-.5.39-1.18.42-1.68.03-.49.04-.65.04-1.91s-.01-1.42-.04-1.91c-.03-.5-.13-1.18-.42-1.68a3.47 3.47 0 00-1.28-1.28c-.5-.29-1.18-.39-1.68-.42-.49-.03-.65-.04-1.91-.04zm0 5.2a1.7 1.7 0 110-3.4 1.7 1.7 0 010 3.4zm4.3-5.6a.63.63 0 11-1.26 0 .63.63 0 011.26 0z"
      />
    </svg>
  );
}

function IconXBrand() {
  return (
    <svg className="footer-brand-svg" viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path
        fill="#111111"
        d="M18.901 2.25h2.943l-6.43 7.353L23 21.75h-6.022l-4.716-6.155L6.876 21.75H3.93l6.876-7.86L1 2.25h6.176l4.262 5.622L18.901 2.25zm-1.033 17.738h1.631L6.284 3.926H4.535L17.868 19.988z"
      />
    </svg>
  );
}

export default function SiteFooter() {
  const igGradId = `footer-ig-${useId()}`.replace(/:/g, "");

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-about-col">
          <Link to="/" className="footer-brand-link">
            <img src="/logos/ap-white.png" alt="AP Consultancy" className="footer-logo" />
          </Link>
          <div className="footer-about">
            <h2 className="footer-about-heading">About the company</h2>
            <p className="footer-about-text">
              We partner on strategy, engineering, and delivery so you can ship and scale quality technology—faster.
            </p>
          </div>
        </div>

        <div className="footer-contact-col">
          <div className="footer-connect">
            <p className="footer-contact-eyebrow">Connect</p>
            <div className="footer-social-row" aria-label="Social links">
              <a
                href="mailto:Info@apconsultancy.in"
                className="footer-social-tile footer-social-tile--brand"
                aria-label="Email us"
                rel="noopener noreferrer"
              >
                <IconGmailBrand />
              </a>
              <a
                href="https://www.linkedin.com/company/ap-consultancy-27202221b/"
                className="footer-social-tile footer-social-tile--brand"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconLinkedInBrand />
              </a>
              <a
                href="https://www.instagram.com/ap.consultancy_?igsh=MTRrcmx0MThvajk2dQ=="
                className="footer-social-tile footer-social-tile--brand"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconInstagramBrand gradId={igGradId} />
              </a>
              <a
                href="https://x.com/ap_consultancy_"
                className="footer-social-tile footer-social-tile--brand"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <IconXBrand />
              </a>
            </div>
            <address className="footer-address">
              <span className="footer-address-label">Company address</span>
              <span className="footer-address-lines">
                Surbhi Heights, 6th Floor, Office 605
                <br />
                Ayodhya Bypass, Bhopal
                <br />
                Madhya Pradesh - 462023, India
              </span>
            </address>
          </div>
        </div>

        <div className="footer-nav-col">
          <div className="footer-links-block">
            <p>Links</p>
            <div className="footer-links">
              <Link to="/">Process</Link>
              <Link to="/#cases">Case studies</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Pricing</Link>
            </div>
          </div>
          <div className="footer-links-block">
            <p>Pages</p>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
