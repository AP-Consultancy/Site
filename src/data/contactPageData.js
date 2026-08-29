import { contactInfoItems, siteContact } from "./siteContact";

export const intentOptions = [
  {
    id: "hire",
    title: "Need developers for your project?",
    text: "Submit your requirement and get a shortlist within 24 hours.",
    badge: "24hr response",
    badgeIcon: "⚡",
    icon: "briefcase",
  },
  {
    id: "vendor",
    title: "Managing a vendor panel or VMS?",
    text: "Request our compliance pack for vendor and MSP panel registration.",
    badge: "Compliance pack",
    badgeIcon: "📋",
    icon: "building",
  },
  {
    id: "talent",
    title: "Looking for your next project?",
    text: "Join our talent pool and get matched with vetted opportunities.",
    badge: "Vetted matches",
    badgeIcon: "🎯",
    icon: "user",
  },
];

export const engagementOptions = ["Short-term", "Long-term", "Not sure yet"];

export const roleOptions = [
  "eCommerce",
  "DevOps, Cloud & Security",
  "Agentic AI Software",
  "QA & Testing",
  "Mobile App & Web",
  "AI, ML & Automation",
  "Other",
];

export const contactInfo = {
  title: siteContact.company,
  items: contactInfoItems(),
};
