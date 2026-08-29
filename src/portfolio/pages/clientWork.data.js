function toTitleCaseFromFilename(filename) {
  const base = filename.replace(/\.[^/.]+$/, "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}

function cardImageUrl(filename) {
  return `/Card/${encodeURIComponent(filename)}`;
}

/**
 * Edit content here (captions, chips, etc.)
 * Key is the image filename inside `public/Card/`.
 */
export const clientWorkOverrides = {
  "Acuity.png": {
    client: "Acuity Analytics",
    title: "Real-Time Financial Analytics Platform",
    description:
      "Built scalable pipelines and dashboards to unify financial data and enable faster decision-making.",
    chips: ["Python", "AWS", "Snowflake", "Power BI", "Airflow"],
  },

  "propic.png": {
    client: "Propic",
    title: "AI Lead Scoring & Automation",
    description:
      "Developed AI-driven lead scoring and automated engagement workflows to improve real estate conversions.",
    chips: ["React", "Node.js", "TensorFlow", "AWS", "MongoDB"],
  },

  "agilty insights.png": {
    client: "Agility Insights",
    title: "Centralized Business Intelligence Platform",
    description:
      "Implemented unified data warehouse and real-time dashboards for faster business reporting.",
    chips: ["Tableau", "SQL", "Python", "AWS Redshift"],
  },

  "bathfitter.png": {
    client: "Bath Fitter",
    title: "Workflow & Scheduling Automation",
    description:
      "Digitized scheduling and order tracking with automated workflows and real-time updates.",
    chips: ["React", "Node.js", "AWS", "PostgreSQL"],
  },

  "Tailoredbrands.png": {
    client: "Tailored Brands",
    title: "Omnichannel Retail & Personalization",
    description:
      "Built scalable backend systems with real-time inventory sync and personalized recommendations.",
    chips: ["Java", "Spring Boot", "AWS", "Elasticsearch"],
  },

  "uplevyl.png": {
    client: "Uplevyl",
    title: "AI-Driven Coaching Experience",
    description:
      "Enhanced engagement through personalized user journeys and real-time analytics tracking.",
    chips: ["React", "Firebase", "Node.js", "AWS"],
  },

  "hdfc.png": {
    client: "HDFC Bank",
    title: "High-Performance Banking Systems",
    description:
      "Optimized backend systems for secure, high-throughput transactions and scalable APIs.",
    chips: ["Java", "Spring Boot", "Oracle DB", "AWS"],
  },

  "telus.png": {
    client: "Tellus",
    title: "Scalable Fintech Infrastructure",
    description:
      "Built distributed systems with event-driven architecture for fast and reliable transactions.",
    chips: ["Node.js", "Kafka", "AWS", "PostgreSQL"],
  },

  "salesforce.png": {
    client: "Salesforce",
    title: "CRM Automation & Customization",
    description:
      "Implemented advanced workflows, custom components, and integrations for enterprise CRM systems.",
    chips: ["Apex", "LWC", "Flows", "REST APIs"],
  },

  "astrazeneca.png": {
    client: "AstraZeneca",
    title: "Secure Data & Analytics Platform",
    description:
      "Integrated research data systems with secure access and advanced analytics capabilities.",
    chips: ["Python", "AWS", "Azure", "SQL"],
  },

  "rocket learning.png": {
    client: "Rocket Learning",
    title: "Scalable EdTech Platform",
    description:
      "Delivered mobile-first learning platform with analytics and multilingual support.",
    chips: ["React Native", "Node.js", "Firebase", "AWS"],
  },
};

export const clientWorkPageCopy = {
  title: "Client work",
  subtitle:
    "A curated set of projects—built for performance, scale, and clean user experience.",
};

export const clientWorkCards = Object.keys(clientWorkOverrides)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .map((filename) => {
    const override = clientWorkOverrides[filename];
    const inferredName = toTitleCaseFromFilename(filename);
    return {
      key: filename,
      imageUrl: cardImageUrl(filename),
      imageFilename: filename,
      client: override?.client ?? inferredName,
      title: override?.title ?? inferredName,
      description:
        override?.description ??
        "Add a short caption in `src/portfolio/pages/clientWork.data.js` to describe what you shipped.",
      chips: override?.chips ?? [],
    };
  });
