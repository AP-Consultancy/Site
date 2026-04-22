import "./SiteHeader.css";

export default function SiteHeader() {
  return (
    <header className="top-nav">
      <a className="brand" href="#home" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="white"/>
          <path d="M7 7H11V11H7V7Z" fill="black"/>
          <path d="M13 13H17V17H13V13Z" fill="black"/>
          <path d="M17 7L7 17" stroke="black" strokeWidth="2"/>
        </svg>
        <span>ARENTIS</span>
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
