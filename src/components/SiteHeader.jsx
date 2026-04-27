import "./SiteHeader.css";
import { NavLink, Link } from "react-router-dom";

export default function SiteHeader({ onServicesClick }) {
  return (
    <header className="top-nav">
      <NavLink to="/" className="brand">
        <img src="/logo.png" alt="Logo" className="logo-image" />
      </NavLink>
      <nav className="menu" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <button type="button" onClick={onServicesClick}>Services</button>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Link className="button button-small" to="/contact" style={{ borderRadius: "8px" }}>
        Book a call
      </Link>
    </header>
  );
}
