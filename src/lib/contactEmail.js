import emailjs from "@emailjs/browser";
import { siteContact } from "../data/siteContact";

/**
 * EmailJS wiring (must match dashboard template names):
 * - Contact Us  (template_23mob3w) → team notification with full lead details
 * - Auto-Reply  (template_rejbajf) → acknowledgement to the submitter
 *
 * See EMAILJS_TEMPLATES.md for template field setup.
 *
 * Note: use direct import.meta.env.VITE_* reads so Vite inlines values at build time.
 */
function isPlaceholder(value) {
  return !value || value.includes("your_") || value.includes("YOUR_");
}

export function getContactEmailConfig() {
  const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || "").trim();
  const contactUsTemplateId = (
    import.meta.env.VITE_EMAILJS_CONTACT_US_TEMPLATE_ID ||
    import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID ||
    ""
  ).trim();
  const autoReplyTemplateId = (
    import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID ||
    import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID ||
    ""
  ).trim();
  const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "").trim();
  const receiverEmail = (import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || siteContact.email).trim();
  const formspreeEndpoint = (import.meta.env.VITE_CONTACT_ENDPOINT || "").trim();

  const emailJsReady =
    !isPlaceholder(serviceId) &&
    !isPlaceholder(contactUsTemplateId) &&
    !isPlaceholder(autoReplyTemplateId) &&
    !isPlaceholder(publicKey) &&
    Boolean(receiverEmail);

  return {
    serviceId,
    contactUsTemplateId,
    autoReplyTemplateId,
    publicKey,
    receiverEmail,
    formspreeEndpoint,
    emailJsReady,
  };
}

function buildAdminParams({ payload, receiverEmail, formIntent, developerRef }) {
  const isVendor = formIntent === "vendor";
  const subject = isVendor
    ? `Compliance pack request | ${payload.company} | ${payload.name}`
    : `Hiring requirement | ${payload.company} | ${payload.name}`;

  const message = isVendor
    ? payload.message
    : [
        `Role / Skill: ${payload.role}`,
        developerRef ? `Developer ref: ${developerRef}` : "",
        "",
        payload.projectDetails,
      ]
        .filter(Boolean)
        .join("\n");

  // Contact Us template: To Email must be {{to_email}} (team inbox).
  // Do NOT pass `email` here — Auto-Reply starters use {{email}} as recipient
  // and a shared key would route both messages to the same address.
  return {
    to_email: receiverEmail,
    to_name: siteContact.company,
    subject,
    from_name: payload.name,
    name: payload.name,
    from_email: payload.email,
    reply_to: payload.email,
    phone: payload.phone || "Not provided",
    country: payload.company,
    company: payload.company,
    company_type: isVendor ? "Vendor / compliance" : payload.engagementType,
    message,
  };
}

function buildAutoReplyParams({ payload, formIntent }) {
  const isVendor = formIntent === "vendor";
  const submitterEmail = payload.email.trim();
  const acknowledgement = isVendor
    ? "Thank you for contacting AP Consultancy. We have received your compliance pack request and will follow up shortly with the requested documentation."
    : "Thank you for contacting AP Consultancy. We have received your requirement and will get back to you within 24 hours with next steps or an initial shortlist.";

  // Auto-Reply template: To Email must be {{email}} (EmailJS default) or {{to_email}}.
  // Never pass the team inbox here — only the submitter's address.
  return {
    email: submitterEmail,
    to_email: submitterEmail,
    user_email: submitterEmail,
    to_name: payload.name,
    name: payload.name,
    from_name: siteContact.company,
    reply_to: siteContact.email,
    subject: isVendor ? "We received your compliance pack request" : "We received your hiring requirement",
    acknowledgement,
    message: acknowledgement,
  };
}

export async function sendContactEmails({ payload, formIntent, developerRef }) {
  const config = getContactEmailConfig();

  if (config.emailJsReady) {
    if (config.contactUsTemplateId === config.autoReplyTemplateId) {
      throw new Error(
        "EmailJS template IDs must be different: Contact Us (team) and Auto-Reply (visitor) are the same."
      );
    }

    const adminParams = buildAdminParams({
      payload,
      receiverEmail: config.receiverEmail,
      formIntent,
      developerRef,
    });
    const autoReplyParams = buildAutoReplyParams({ payload, formIntent });
    const sendOptions = { publicKey: config.publicKey };

    emailjs.init({ publicKey: config.publicKey });

    // Contact Us → team inbox (template_23mob3w)
    await emailjs.send(config.serviceId, config.contactUsTemplateId, adminParams, sendOptions);

    // Auto-Reply → submitter (template_rejbajf)
    try {
      await emailjs.send(config.serviceId, config.autoReplyTemplateId, autoReplyParams, sendOptions);
    } catch (userErr) {
      console.error("Acknowledgement email failed:", userErr);
      throw new Error(
        "Your request was sent to our team, but the confirmation email failed. In EmailJS, open Auto-Reply (template_rejbajf) and set To Email to {{to_email}} or {{email}}."
      );
    }

    return;
  }

  const endpoint = config.formspreeEndpoint;
  if (endpoint && !endpoint.includes("YOUR_FORM_ID")) {
    const formData = new FormData();
    formData.append("intent", formIntent);
    Object.entries(payload).forEach(([key, value]) => formData.append(key, value));
    if (developerRef) formData.append("developer", developerRef);

    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error("Form submission failed. Check your Formspree endpoint.");
    return;
  }

  throw new Error(
    `Email is not configured yet. Add EmailJS keys or a Formspree URL in .env.local, then restart npm run dev — or email us directly at ${siteContact.email}.`
  );
}
