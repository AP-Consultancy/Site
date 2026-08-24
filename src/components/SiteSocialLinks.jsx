import { socialLinks } from "../data/siteContact";
import "./SiteSocialLinks.css";

function SocialIcon({ type }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };

  if (type === "linkedin") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10v7M8 7h.01M12 17v-4.2c0-1.2.9-2.2 2-2.2s2 1 2 2.2V17M12 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "gmail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "x") {
    return (
      <svg {...common}>
        <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function SiteSocialLinks({ className = "" }) {
  return (
    <div className={`site-social-links${className ? ` ${className}` : ""}`}>
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className="site-social-link"
          aria-label={link.label}
          {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <SocialIcon type={link.id} />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
