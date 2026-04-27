import "./SiteFooter.css";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-block">
        <h3>Arentis</h3>
        <p>Your Trusted IT Partner</p>
      </div>
      <div className="footer-links-block">
        <p>Links</p>
        <div className="footer-links">
          <Link to="/services">Services</Link>
          <Link to="/">Process</Link>
          <Link to="/">Case studies</Link>
          <Link to="/">Benefits</Link>
          <Link to="/">Pricing</Link>
        </div>
      </div>
      <div className="footer-links-block">
        <p>Pages</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/404">404</Link>
        </div>
      </div>
      <div className="footer-links-block">
        <p>Socials</p>
        <div className="footer-links">
          <a href="#home">Instagram</a>
          <a href="#home">Facebook</a>
          <a href="#home">Linkedin</a>
          <a href="#home">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
