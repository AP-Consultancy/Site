import { assetUrl } from "../utils/assetUrl";

/** Dummy portfolio data — replace with real client metrics and copy when ready. */
export const defaultClientShowcaseData = {
  title: "A FEW TEAMS WE'VE BUILT AND SHIPPED PRODUCT WITH",
  tabs: ["Acuity", "HDFC", "Telus", "Propic", "AstraZeneca"],
  storiesLink: { href: "/client-work", label: "View all client work →" },
  slides: [
    {
      stats: [
        {
          value: "Customer Journey Data Modeling",
          label: "Designed scalable data model to capture end-to-end customer interactions across multiple touchpoints",
        },
        {
          value: "Analytics & Campaign Insights",
          label: "Enabled structured datasets for reporting on customer engagement and campaign",
        },
      ],
      products: [
        { label: "Python / Langchain / SQL", dotColor: "#60a5fa" },
        { label: "AWS / Podman / Airweave ", dotColor: "#22c55e" },
        { label: "GitHub Actions CI/CD / Factset / PG vector", dotColor: "#f59e0b" },
      ],
      story: {
        brand: "",
        caption: "",
        image: assetUrl("/Card/Acuity.png"),
      },
    },
    {
      stats: [
        {
          value: "HDFC Digital Experience Optimization Project",
          label: "worked on refining the content management system and optimizing performance for HDFC’s digital platforms. Role involved improving how content is structured, managed, and delivered to ensure a seamless user experience.",
        },
        {
          value: "Performance Optimization",
          label: "worked on improving system performance by optimizing backend processes and frontend delivery. These improvements resulted in faster page loads and a smoother user experience.",
        },
      ],
      products: [
        { label: "Kubernetes", dotColor: "#60a5fa" },
        { label: "Terraform", dotColor: "#22c55e" },
        { label: "Datadog / Grafana", dotColor: "#f59e0b" },
      ],
      story: {
        brand: "",
        caption: "",
        image: assetUrl("/Card/hdfc.png"),
      },
    },
    {
      stats: [
        {
          value: "Ticket Management System Development",
          label: "Worked on Synapse, a multi-client customer support ticketing platform to manage and track issues efficiently",
        },
        {
          value: "Performance & User Experience Optimization",
          label: "Improved system performance and responsiveness for handling multiple clients. Enhanced user experience by optimizing workflow and ensuring reliable, scalable operations",
        },
      ],
      products: [
        { label: "ReactJS / NodeJS / JavaScript", dotColor: "#60a5fa" },
        { label: "PostgreSQL / Third Party API", dotColor: "#22c55e" },
        { label: "SSO Login", dotColor: "#f59e0b" },
      ],
      story: {
        brand: "",
        caption: "",
        image: assetUrl("/Card/telus.png"),
      },
    },
    {
      stats: [
        {
          value: "Real Estate AI Automation Platform",
          label: "worked on developing and integrating AI-based features into the Propic platform to enhance automation in real estate workflows. Role included building backend services, creating interactive frontend interfaces, and implementing AI-",
        },
        {
          value: "Property Management",
          label: "contributed to automating lease enquiries, invoice follow-ups, and maintenance requests. This improved operational efficiency and reduced manual intervention for property managers.",
        },
      ],
      products: [
        { label: ".NET / Angular", dotColor: "#60a5fa" },
        { label: "Azure / OpenAI", dotColor: "#22c55e" },
      ],
      story: {
        brand: "",
        caption: "",
        image: assetUrl("/Card/propic.png"),
      },
    },
    {
      stats: [
        {
          value: "Scalable Data & Operations Enhancement",
          label: "Enhancing system scalability and optimizing data handling to support large-scale operations. Role involved improving how data flows across the system, ensuring it could efficiently handle high volumes of healthcare and operational data.",
        },
        {
          value: "Operational Efficiency",
          label: "The improvements reduced system bottlenecks and enhanced response times. This enabled smoother workflows and supported efficient operations across different business functions.",
        },
      ],
      products: [
        { label: "Azure / Entra ID", dotColor: "#60a5fa" },
        { label: ".NET / microservices", dotColor: "#22c55e" },
        { label: "Service mesh rollout", dotColor: "#f59e0b" },
      ],
      story: {
        brand: "",
        caption: "",
        image: assetUrl("/Card/astrazeneca.png"),
      },
    },
  ],
};
