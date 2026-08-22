export const siteContact = {
  company: "AP Consultancy",
  email: "hello@apconsultancy.in",
  phoneDisplay: "+91 98765 43210",
  phoneTel: "+919876543210",
  address: "Ahmedabad, Gujarat, India",
  linkedinUrl: "https://www.linkedin.com/company/ap-consultancy",
  linkedinLabel: "linkedin.com/company/ap-consultancy",
  mapsUrl: "https://maps.google.com/?q=Ahmedabad,Gujarat,India",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117332.41688243982!2d72.5713621!3d23.022505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd7d9%3A0x4fcedd11614f9c6!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
};

const validIntents = new Set(["hire", "vendor", "talent"]);

export function contactPath(intent = "hire", params = {}) {
  const search = new URLSearchParams();
  if (intent && intent !== "hire" && validIntents.has(intent)) {
    search.set("intent", intent);
  }
  Object.entries(params).forEach(([key, value]) => {
    if (value) search.set(key, value);
  });
  const query = search.toString();
  return query ? `/contact?${query}` : "/contact";
}

export function mailtoLink({ subject, body } = {}) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return query ? `mailto:${siteContact.email}?${query}` : `mailto:${siteContact.email}`;
}

export function contactInfoItems() {
  return [
    {
      type: "location",
      text: siteContact.address,
      href: siteContact.mapsUrl,
      external: true,
    },
    {
      type: "phone",
      text: siteContact.phoneDisplay,
      href: `tel:${siteContact.phoneTel}`,
    },
    {
      type: "email",
      text: siteContact.email,
      href: mailtoLink(),
    },
    {
      type: "linkedin",
      text: siteContact.linkedinLabel,
      href: siteContact.linkedinUrl,
      external: true,
    },
  ];
}
