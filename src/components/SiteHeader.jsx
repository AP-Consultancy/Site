import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { brandLogos } from "../data/brandAssets";
import "./SiteHeader.css";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onResize = () => {
      if (window.innerWidth > 920) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About Us" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <header className={`top-nav${menuOpen ? " mobile-open" : ""}`}>
      <Link to="/" className="brand">
        <img src={brandLogos.header} alt="AP Consultancy" className="brand-logo" />
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className="menu" aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === "/"}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <Link className="button button-small" to="/contact" style={{ borderRadius: "8px" }}>
        Contact Us
      </Link>

      <nav id="mobile-nav" className={`mobile-menu${menuOpen ? " open" : ""}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={() => setMenuOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <Link className="button mobile-contact-btn" to="/contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
