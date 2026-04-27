import "./ServicesPage.css";

const services = [
  {
    icon: "SD",
    title: "Software Development",
    subtitle: "Product Engineering",
    description: "Add skilled developers to speed up product delivery.",
  },
  {
    icon: "MA",
    title: "Mobile App Development",
    subtitle: "Mobile Apps",
    description: "Build scalable iOS, Android, or cross-platform apps.",
  },
  {
    icon: "DO",
    title: "DevOps",
    subtitle: "CI/CD Automation",
    description: "Automate workflows and streamline CI/CD pipelines.",
  },
  {
    icon: "IT",
    title: "IT Consulting",
    subtitle: "Tech Strategy",
    description: "Align your technology strategy with clear business goals.",
  },
  {
    icon: "DB",
    title: "Database Architecture",
    subtitle: "Data Systems",
    description: "Create secure, scalable and high-performance data foundations.",
  },
  {
    icon: "BC",
    title: "Blockchain Development",
    subtitle: "Blockchain Solutions",
    description: "Develop dApps and smart contracts for modern products.",
  },
  {
    icon: "QA",
    title: "QA Testing",
    subtitle: "Quality Assurance",
    description: "Ensure quality with deep test coverage and automation.",
  },
  {
    icon: "PM",
    title: "Project Management",
    subtitle: "Project Delivery",
    description: "Manage timelines, budgets, and team coordination.",
  },
  {
    icon: "MS",
    title: "Maintenance & Support",
    subtitle: "Ongoing Support",
    description: "Provide ongoing updates and dependable technical support.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Send Inquiry & Vet Profiles",
    description: "Share your requirements and review shortlisted developers matched to your needs.",
  },
  {
    number: "02",
    title: "Interview & Select",
    description: "Assess candidates through interviews and choose the right fit for your team.",
  },
  {
    number: "03",
    title: "Finalize & Onboard",
    description: "Complete contracts, sign NDAs, and smoothly onboard selected developers.",
  },
  {
    number: "04",
    title: "Start Development",
    description: "Developers integrate into your workflow and begin contributing immediately.",
  },
];

const domains = [
  ["Technology & Digital", "Fintech | E-commerce | Education"],
  ["Core Industries", "Healthcare | Manufacturing | Realty"],
  ["Consumer Services", "Entertainment | Logistics | Travel"],
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-dot-grid" aria-hidden="true" />
        <div className="services-hero-glow" aria-hidden="true" />
        <div className="services-hero-content">
          <div className="services-eyebrow">
            <span />
            IT Staff Augmentation
          </div>
          <h1>
            Hire Remote
            <br />
            Developers
          </h1>
          <h2>Building Strong Teams</h2>
          <p>
            Scale your engineering with top-tier talent on demand. Launch or
            expand faster with remote developers who seamlessly extend your
            in-house team.
          </p>
          <div className="services-hero-actions">
            <a className="button" href="/contact">Contact Us -&gt;</a>
            <a className="button button-ghost" href="#services">Learn More</a>
          </div>
        </div>
      </section>

      <section id="services" className="services-page-section">
        <div className="services-page-heading">
          <h2>Hire Remote Developers</h2>
          <p>Building Strong Teams</p>
          <span>
            Effortlessly connect with your favorite tools and extend your team
            with specialists tailored to your roadmap.
          </span>
        </div>

        <div className="services-page-grid">
          {services.map((service, index) => (
            <article
              className="services-page-card"
              key={service.title}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="services-page-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="services-page-subtitle">{service.subtitle}</p>
              <p>{service.description}</p>
              <span>Learn more -&gt;</span>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page-section">
        <div className="services-page-heading">
          <h2>How It Works</h2>
          <p>Simple onboarding, clear control</p>
        </div>
        <div className="services-process-grid">
          {processSteps.map((step) => (
            <article className="services-process-card" key={step.title}>
              <strong>{step.number}</strong>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page-section">
        <div className="services-page-heading">
          <h2>Domains We Support</h2>
          <p>Flexible teams across modern industries</p>
        </div>
        <div className="services-domain-grid">
          {domains.map(([title, items]) => (
            <article className="services-domain-card" key={title}>
              <h3>{title}</h3>
              <p>{items}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
