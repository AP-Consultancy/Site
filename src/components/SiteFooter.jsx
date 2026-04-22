import "./SiteFooter.css";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-block">
        <h3>Arentis</h3>
        <p>Your trusted IT partner.</p>
      </div>
      <div className="footer-links-block">
        <p>Links</p>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#cases">Case studies</a>
          <a href="#contact">Benefits</a>
          <a href="#home">Pricing</a>
        </div>
      </div>
      <div className="footer-links-block">
        <p>Pages</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#cases">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-links-block">
        <p>Socials</p>
        <div className="footer-links">
          <a href="#home">Instagram</a>
          <a href="#home">Facebook</a>
          <a href="#home">LinkedIn</a>
          <a href="#home">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
