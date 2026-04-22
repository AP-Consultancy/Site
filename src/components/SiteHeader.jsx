import "./SiteHeader.css";

export default function SiteHeader() {
  return (
    <header className="top-nav">
      <a className="brand" href="#home">
        <img src="/logo.png" alt="Logo" className="logo-image" />
      </a>
      <nav className="menu" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="button button-small" style={{borderRadius: '8px'}}>Book a call</button>
    </header>
  );
}
