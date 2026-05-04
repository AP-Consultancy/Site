  import "./SiteHeader.css";
  import { NavLink, Link, useLocation } from "react-router-dom";
  import { useEffect, useState } from "react";
import siteLogo from "../assets/ap-white.png"
  export default function SiteHeader() {
    const [active, setActive] = useState("");
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
    return (
      <header className="top-nav">
        <NavLink to="/" className="brand">
          {/* <img src="/logo.png" alt="Logo" className="logo-image" /> */}
<img src={siteLogo} alt="AP Consultancy Logo" className="logo-image" />        </NavLink>
        <nav className="menu" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <a href="/services" target="_blank" rel="noreferrer">Services</a>
          <Link to="/about" className={active === "about" ? "active" : ""}>About Us</Link>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Link className="button button-small" to="/contact" style={{ borderRadius: "8px" }}>
          Book a call
        </Link>
      </header>
    );
  }
