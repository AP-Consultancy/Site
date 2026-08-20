import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { serviceCategories } from "../data/servicesPageData";
import "./SiteHeader.css";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onResize = () => {
      if (window.innerWidth > 920) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return undefined;
    const onPointerDown = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [servicesOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/devresources", label: "Dev Resource" },
    { to: "/portfolio", label: "Case Studies" },
    { to: "/about", label: "About Us" },
    { to: "/careers", label: "Careers" },
  ];

  return (
    <header className={`top-nav${menuOpen ? " mobile-open" : ""}${scrolled ? " is-scrolled" : ""}`}>
      <Link to="/" className="brand" aria-label="AP Consultancy home">
        <img src="/logo/ap.png" alt="AP Consultancy" className="brand-logo" />
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
        {navLinks.slice(0, 2).map((link) => (
          <NavLink key={link.to + link.label} to={link.to} end={link.to === "/"}>
            {link.label}
          </NavLink>
        ))}

        <div className="nav-dropdown" ref={servicesRef}>
          <button
            type="button"
            className={`nav-dropdown-trigger${servicesOpen ? " is-open" : ""}`}
            aria-expanded={servicesOpen}
            aria-haspopup="true"
            onClick={() => setServicesOpen((open) => !open)}
          >
            Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className={`nav-dropdown-panel${servicesOpen ? " is-open" : ""}`}>
            <Link to="/services" onClick={() => setServicesOpen(false)}>
              All Services
            </Link>
            {serviceCategories.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`} onClick={() => setServicesOpen(false)}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {navLinks.slice(2).map((link) => (
          <NavLink key={link.to + link.label} to={link.to}>
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>

      <Link className="button button-small nav-cta" to="/contact">
        Hire a Developer <span aria-hidden="true">→</span>
      </Link>

      <nav id="mobile-nav" className={`mobile-menu${menuOpen ? " open" : ""}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <NavLink
            key={link.to + link.label}
            to={link.to}
            end={link.to === "/"}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <span className="mobile-menu-label">Services</span>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>
          All Services
        </NavLink>
        {serviceCategories.map((service) => (
          <NavLink
            key={service.slug}
            to={`/services/${service.slug}`}
            className="mobile-submenu-link"
            onClick={() => setMenuOpen(false)}
          >
            {service.title}
          </NavLink>
        ))}
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact Us
        </NavLink>
        <Link className="button mobile-contact-btn" to="/contact" onClick={() => setMenuOpen(false)}>
          Hire a Developer →
        </Link>
      </nav>
    </header>
  );
}
