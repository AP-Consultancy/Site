import "./SiteHeader.css";

export default function SiteHeader() {
  return (
    <header className="top-nav">
      <a className="brand" href="#home">
        Arentis
      </a>
      <nav className="menu" aria-label="Main navigation">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#cases">Case Studies</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="button button-small">Book a call</button>
    </header>
  );
}
