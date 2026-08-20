export const heroCollage = [
  { src: "/salesforce.png", alt: "Salesforce", className: "wk-collage-card--salesforce" },
  { src: "/UplevylyCard.png", alt: "Uplevyl", className: "wk-collage-card--uplevyl" },
  { src: "/Card/agilty insights.png", alt: "Agility Insights", className: "wk-collage-card--agility" },
  { src: "/astrazeneca.png", alt: "AstraZeneca", className: "wk-collage-card--astra" },
];

export const trustedBrands = [
  { src: "/logos/Rocket-Learning_New-Logo-2-Picsart-BackgroundRemover-Picsart-AiImageEnhancer%202.png", alt: "Rocket Learning" },
  { src: "/logos/download-Picsart-BackgroundRemover.png", alt: "Propic" },
  { src: "/logos/Acuity_Analytics_idwIL6acVL_1%202.png", alt: "Acuity Analytics" },
  { src: "/logos/Bathfitter%203.png", alt: "Bath Fitter" },
];

export const caseStudies = [
  {
    id: "01",
    client: "Acuity Analytics",
    title: "Real-Time Financial Analytics Platform",
    summary:
      "Consolidated financial data into a secure analytics layer for near real-time business visibility.",
    technologies: ["Python", "AWS", "Snowflake", "Power BI", "Apache Airflow"],
    challenge:
      "The client needed to consolidate financial data from multiple systems while reducing reporting delays and improving data accuracy.",
    contribution:
      "Built a centralized analytics layer with automated ingestion pipelines, curated financial datasets, and stakeholder-ready Power BI dashboards.",
    outcome: "Centralized reporting with faster financial decisions.",
    image: "/Card/Acuity.png",
    accent: "#7c3aed",
    tagBg: "#f0efff",
    tagText: "#6d28d9",
  },
  {
    id: "02",
    client: "Agility Insights",
    title: "Centralized Business Intelligence Platform",
    summary:
      "A unified reporting solution to eliminate fragmented data sources and improve decision-making.",
    technologies: ["Tableau", "SQL", "Python", "AWS Redshift"],
    challenge:
      "Business intelligence was slowed by disconnected reports and inconsistent source data.",
    contribution:
      "Designed the warehouse architecture, implemented SQL transformations, automated ingestion with Python, and connected Tableau to Redshift.",
    outcome: "Consistent real-time insights with less manual reporting.",
    image: "/Card/agilty insights.png",
    accent: "#14b8a6",
    tagBg: "#ecfdf5",
    tagText: "#0f766e",
  },
  {
    id: "03",
    client: "AstraZeneca",
    title: "Secure Data & Analytics Platform",
    summary:
      "Secure research data access and analytics across distributed cloud environments.",
    technologies: ["Python", "AWS", "Azure", "SQL"],
    challenge:
      "Research data lived across multiple systems with strict security and compliance requirements.",
    contribution:
      "Integrated secure data sources, developed Python services, optimized SQL queries, and supported AWS and Azure deployment.",
    outcome: "Improved secure research access for analytics teams.",
    image: "/Card/astrazeneca.png",
    accent: "#7c3aed",
    tagBg: "#f0efff",
    tagText: "#6d28d9",
  },
  {
    id: "04",
    client: "Bath Fitter",
    title: "Workflow & Scheduling Automation",
    summary:
      "Responsive scheduling and order management systems for operational efficiency.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    challenge:
      "Manual scheduling and order management were slowing the field and customer experience.",
    contribution:
      "Developed workflow automation in Node.js, built responsive React scheduling interfaces, integrated APIs, and optimized PostgreSQL operations.",
    outcome: "Streamlined workflows and clearer operational visibility.",
    image: "/Card/bathfitter.png",
    accent: "#ec4899",
    tagBg: "#fdf2f8",
    tagText: "#db2777",
  },
  {
    id: "05",
    client: "HDFC Bank",
    title: "High-Performance Banking Systems",
    summary:
      "Secure backend systems built for large transaction volumes and high reliability.",
    technologies: ["Java", "Spring Boot", "Oracle Database", "AWS"],
    challenge:
      "The banking platform needed scalable services capable of supporting large transaction loads.",
    contribution:
      "Built Spring Boot microservices, optimized Oracle queries, implemented secure REST APIs, and supported AWS deployment.",
    outcome: "Faster transaction processing with high system reliability.",
    image: "/Card/hdfc.png",
    accent: "#14b8a6",
    tagBg: "#ecfdf5",
    tagText: "#0f766e",
  },
  {
    id: "06",
    client: "Propic",
    title: "AI Lead Scoring & Automation",
    summary:
      "Intelligent lead prioritization and automated engagement for scalable SaaS growth.",
    technologies: ["React", "Node.js", "TensorFlow", "AWS", "MongoDB"],
    challenge:
      "The client needed to prioritize leads and automate customer engagement at scale.",
    contribution:
      "Developed backend lead processing services, integrated TensorFlow scoring models, built React dashboards, and managed MongoDB data.",
    outcome: "Improved qualification accuracy and smoother engagement workflows.",
    image: "/Card/propic.png",
    accent: "#2563eb",
    tagBg: "#eff6ff",
    tagText: "#1d4ed8",
  },
  {
    id: "07",
    client: "Rocket Learning",
    title: "Scalable EdTech Platform",
    summary:
      "Mobile-first learning experiences with multilingual support and analytics.",
    technologies: ["React Native", "Node.js", "Firebase", "AWS"],
    challenge:
      "The platform required scalability, accessibility, and analytics for a growing user base.",
    contribution:
      "Built React Native app features, developed Node.js APIs, integrated Firebase, and supported AWS infrastructure.",
    outcome: "Improved accessibility and stronger learner engagement.",
    image: "/Card/rocket learning.png",
    accent: "#2563eb",
    tagBg: "#eef2ff",
    tagText: "#4338ca",
  },
  {
    id: "08",
    client: "Salesforce",
    title: "CRM Automation & Customization",
    summary: "Custom CRM workflows and integrations for enterprise operations.",
    technologies: ["Apex", "Lightning Web Components", "Salesforce Flows", "REST APIs"],
    challenge:
      "Enterprise CRM processes required automation, customization, and third-party integrations.",
    contribution:
      "Developed Apex classes, built Lightning Web Components, implemented Salesforce Flows, and connected REST APIs.",
    outcome: "More efficient CRM processes with automated workflows.",
    image: "/Card/salesforce.png",
    accent: "#06b6d4",
    tagBg: "#ecfeff",
    tagText: "#0891b2",
  },
  {
    id: "09",
    client: "Tailored Brands",
    title: "Omnichannel Retail & Personalization",
    summary:
      "Inventory synchronization and personalized shopping services at retail scale.",
    technologies: ["Java", "Spring Boot", "AWS", "Elasticsearch"],
    challenge:
      "The retailer required backend services supporting inventory sync and personalized shopping experiences.",
    contribution:
      "Implemented Spring Boot services, optimized Elasticsearch search, integrated AWS, and built inventory sync processes.",
    outcome: "Faster product discovery and improved inventory consistency.",
    image: "/Card/Tailoredbrands.png",
    accent: "#dc2626",
    tagBg: "#fef2f2",
    tagText: "#b91c1c",
  },
  {
    id: "10",
    client: "Telus",
    title: "Scalable Fintech Infrastructure",
    summary:
      "Event-driven backend services for high-throughput financial transactions.",
    technologies: ["Node.js", "Apache Kafka", "AWS", "PostgreSQL"],
    challenge:
      "The fintech platform needed reliable event-driven architecture for high transaction throughput.",
    contribution:
      "Developed Node.js microservices, implemented Kafka event streaming, optimized PostgreSQL, and supported AWS infrastructure.",
    outcome: "Resilient real-time financial transaction processing.",
    image: "/Card/telus.png",
    accent: "#8b5cf6",
    tagBg: "#f5f3ff",
    tagText: "#7c3aed",
  },
  {
    id: "11",
    client: "Uplevyl",
    title: "AI-Driven Coaching Experience",
    summary:
      "Personalized coaching journeys with analytics-backed product decisions.",
    technologies: ["React", "Firebase", "Node.js", "AWS"],
    challenge:
      "The platform aimed to improve engagement through personalized coaching and analytics.",
    contribution:
      "Built React components, developed Node.js APIs, integrated Firebase, and implemented analytics tracking within AWS infrastructure.",
    outcome: "Higher engagement and real-time visibility into user behavior.",
    image: "/Card/uplevyl.png",
    accent: "#f97316",
    tagBg: "#fff7ed",
    tagText: "#ea580c",
  },
];

export const techStackItems = [
  { label: "Python", icon: "/icons/Python-logo-notext.svg.png" },
  { label: "AWS", icon: "/icons/AWS.png" },
  { label: "Snowflake", icon: "/icons/snowflake-color.png" },
  { label: "Power BI", icon: "/icons/Power_BI_(4).png" },
  { label: "Adobe AEM", icon: "/icons/adobe-experience-manager-aem-icon.png" },
  { label: ".Net", icon: "/icons/NET-Framework-Logo.jpg" },
  { label: "SQL", icon: "/icons/SQL.png" },
  { label: "Java", icon: "/icons/javascript.png" },
  { label: "Azure", icon: "/icons/Azure devops.png" },
  { label: "React", icon: "/icons/react-js-icon.png" },
  { label: "Node.js", icon: "/icons/Node.js.png" },
  { label: "TypeScript", icon: "/icons/javascript.png" },
  { label: "Heroku", icon: "/icons/toppng.com-heroku-logo-328x512.png" },
  { label: "LangChain", icon: "/icons/langchain-color.png" },
  { label: "AI/ML", icon: "/icons/physics.png" },
];
