  import "./SiteHeader.css";
  import { NavLink, Link, useLocation } from "react-router-dom";
  import { useEffect, useState } from "react";
import siteLogo from "../assets/ap-white.png"
  export default function SiteHeader() {
    const [active, setActive] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
      const checkActive = () => {
        const aboutEl = document.getElementById("about");
        if (aboutEl) {
          const rect = aboutEl.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom > 120) {
            setActive("about");
            return;
          }
        }
        if (location.pathname === "/about") {
          setActive("about");
          return;
        }
        setActive("");
      };

      checkActive();
      window.addEventListener("scroll", checkActive, { passive: true });
      return () => window.removeEventListener("scroll", checkActive);
    }, [location]);

    const closeMenu = () => setMenuOpen(false);

    return (
      <header className="top-nav">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <img src={siteLogo} alt="AP Consultancy Logo" className="logo-image" />        
        </NavLink>
        <nav className={`menu ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <Link to="/about" className={active === "about" ? "active" : ""} onClick={closeMenu}>About Us</Link>
          <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>
        <Link className="button button-small" to="/contact" style={{ borderRadius: "8px" }} onClick={closeMenu}>
          Book a call
        </Link>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    );
  }
