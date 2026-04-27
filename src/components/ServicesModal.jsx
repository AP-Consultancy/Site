import "./ServicesModal.css";

const popupServices = [
  {
    id: 1,
    icon: "SD",
    title: "Software Development",
    subtitle: "Product Engineering",
    description: "Add skilled developers to speed up product delivery.",
  },
  {
    id: 2,
    icon: "MA",
    title: "Mobile App Development",
    subtitle: "Mobile Apps",
    description: "Build scalable iOS, Android, or cross-platform apps.",
  },
  {
    id: 3,
    icon: "DO",
    title: "DevOps",
    subtitle: "CI/CD Automation",
    description: "Automate workflows and streamline CI/CD pipelines.",
  },
  {
    id: 4,
    icon: "IT",
    title: "IT Consulting",
    subtitle: "Tech Strategy",
    description: "Align your technology strategy with clear business goals.",
  },
  {
    id: 5,
    icon: "DB",
    title: "Database Architecture",
    subtitle: "Data Systems",
    description: "Create secure, scalable and high-performance data foundations.",
  },
  {
    id: 6,
    icon: "BC",
    title: "Blockchain Development",
    subtitle: "Blockchain Solutions",
    description: "Develop dApps and smart contracts for modern products.",
  },
  {
    id: 7,
    icon: "QA",
    title: "QA Testing",
    subtitle: "Quality Assurance",
    description: "Ensure quality with deep test coverage and automation.",
  },
  {
    id: 8,
    icon: "PM",
    title: "Project Management",
    subtitle: "Project Delivery",
    description: "Manage timelines, budgets, and team coordination.",
  },
  {
    id: 9,
    icon: "MS",
    title: "Maintenance & Support",
    subtitle: "Ongoing Support",
    description: "Provide ongoing updates and dependable technical support.",
  },
];

export default function ServicesModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="services-modal-overlay"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        className="services-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="services-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="services-modal-close"
          type="button"
          aria-label="Close services"
          onClick={onClose}
        >
          x
        </button>

        <div className="services-modal-header">
          <p>Building Strong Teams</p>
          <h2 id="services-modal-title">Hire Remote Developers</h2>
          <span>
            Effortlessly connect with your favorite tools and extend your team
            with specialists tailored to your roadmap.
          </span>
        </div>

        <div className="services-modal-grid">
          {popupServices.map((service) => (
            <article
              className="services-modal-card"
              key={service.id}
              style={{ animationDelay: `${service.id * 0.04}s` }}
            >
              <div className="services-modal-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="services-modal-subtitle">{service.subtitle}</p>
              <p className="services-modal-description">{service.description}</p>
              <span className="services-modal-link">Learn more -&gt;</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
