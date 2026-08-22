import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { contactInfo, engagementOptions, intentOptions, roleOptions } from "../data/contactPageData";
import { mailtoLink, siteContact } from "../data/siteContact";
import usePageMeta from "../hooks/usePageMeta";
import "./ContactPage.css";

const VALID_INTENTS = new Set(["hire", "vendor", "talent"]);

function IntentIcon({ type }) {
  if (type === "briefcase") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (type === "building") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 20c1.5-3 3.8-4.5 6-4.5s4.5 1.5 6 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 8v6M22 11h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ContactInfoIcon({ type }) {
  const stroke = "currentColor";
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };

  if (type === "location") {
    return (
      <svg {...common}>
        <path d="M12 21s-6-4.35-8.4-7.35C2.1 11.35 2.6 7.5 5.4 5.8 7.4 4.6 9.6 5.1 12 7c2.4-1.9 4.6-2.4 6.6-1.2 2.8 1.7 3.3 5.55 1.8 7.85C18 16.65 12 21 12 21z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="2.5" stroke={stroke} strokeWidth="1.6" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M6.5 4h3l1.5 5-2 1.5a11 11 0 0 0 5 5l1.5-2 5 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4 6.5a2 2 0 0 1 2-2.5z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke={stroke} strokeWidth="1.6" />
        <path d="m3 7 9 6 9-6" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke={stroke} strokeWidth="1.6" />
      <path d="M8 10h8M8 14h5" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ContactSidebar() {
  return (
    <aside className="ct-sidebar">
      <div className="ct-info-card">
        <div className="ct-info-glow" aria-hidden="true" />
        <h3>{contactInfo.title}</h3>
        <ul>
          {contactInfo.items.map((item) => (
            <li key={item.text}>
              <ContactInfoIcon type={item.type} />
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="ct-map-card">
        <iframe
          title={`${siteContact.company} location`}
          src={siteContact.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </aside>
  );
}

function resolveRolePrefill(roleParam) {
  if (!roleParam) return "";
  return roleOptions.includes(roleParam) ? roleParam : "Other";
}

export default function ContactPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const intentFromUrl = searchParams.get("intent");
  const developerRef = searchParams.get("developer");
  const roleParam = searchParams.get("role");

  const [intent, setIntent] = useState(() =>
    VALID_INTENTS.has(intentFromUrl) ? intentFromUrl : "hire"
  );
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const rolePrefill = useMemo(() => resolveRolePrefill(roleParam), [roleParam]);
  const projectPrefill = useMemo(() => {
    if (!developerRef && !roleParam) return "";
    const parts = [];
    if (developerRef) parts.push(`Developer profile: ${developerRef}`);
    if (roleParam) parts.push(`Role: ${roleParam}`);
    return parts.join("\n");
  }, [developerRef, roleParam]);

  usePageMeta({
    title: "Contact AP Consultancy | Hire Developers or Join Our Talent Pool",
    description:
      "Get in touch with AP Consultancy — submit a hiring requirement or apply to join our developer network. We respond within 24 hours.",
  });

  useEffect(() => {
    if (VALID_INTENTS.has(intentFromUrl) && intentFromUrl !== intent) {
      setIntent(intentFromUrl);
    }
  }, [intentFromUrl, intent]);

  function selectIntent(nextIntent) {
    setIntent(nextIntent);
    setStatus("idle");
    setError("");
    const nextParams = new URLSearchParams(searchParams);
    if (nextIntent === "hire") {
      nextParams.delete("intent");
    } else {
      nextParams.set("intent", nextIntent);
    }
    setSearchParams(nextParams, { replace: true });
  }

  async function handleSubmit(e, formIntent) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    if (formIntent === "vendor") {
      if (!payload.name || !payload.company || !payload.email || !payload.message) {
        setError("Please fill the required fields.");
        return;
      }
    } else if (!payload.name || !payload.company || !payload.email || !payload.role || !payload.engagementType || !payload.projectDetails) {
      setError("Please fill the required fields.");
      return;
    }

    try {
      setStatus("loading");
      const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
      const emailJsAdminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID || "";
      const emailJsUserTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID || "";
      const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
      const contactReceiverEmail = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || siteContact.email;
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "";

      const emailJsReady =
        emailJsServiceId &&
        emailJsAdminTemplateId &&
        emailJsUserTemplateId &&
        emailJsPublicKey &&
        contactReceiverEmail &&
        !emailJsServiceId.includes("your_") &&
        !emailJsAdminTemplateId.includes("your_") &&
        !emailJsUserTemplateId.includes("your_") &&
        !emailJsPublicKey.includes("your_");

      if (emailJsReady) {
        const isVendor = formIntent === "vendor";
        const adminParams = isVendor
          ? {
              to_email: contactReceiverEmail,
              to_name: siteContact.company,
              subject: `Compliance pack request | ${payload.company} | ${payload.name}`,
              from_name: payload.name,
              name: payload.name,
              from_email: payload.email,
              email: payload.email,
              phone: payload.phone || "Not provided",
              country: payload.company,
              company_type: "Vendor / compliance",
              message: payload.message,
            }
          : {
              to_email: contactReceiverEmail,
              to_name: siteContact.company,
              subject: `Hiring requirement | ${payload.company} | ${payload.name}`,
              from_name: payload.name,
              name: payload.name,
              from_email: payload.email,
              email: payload.email,
              phone: payload.phone || "Not provided",
              country: payload.company,
              company_type: payload.engagementType,
              message: [`Role / Skill: ${payload.role}`, developerRef ? `Developer ref: ${developerRef}` : "", "", payload.projectDetails]
                .filter(Boolean)
                .join("\n"),
            };

        const userParams = {
          to_email: payload.email,
          email: payload.email,
          to_name: payload.name,
          name: payload.name,
          from_name: siteContact.company,
          subject: isVendor ? "We received your compliance pack request" : "We received your hiring requirement",
          acknowledgement: isVendor
            ? "Thank you for contacting AP Consultancy. We have received your compliance pack request and will follow up shortly with the requested documentation."
            : "Thank you for contacting AP Consultancy. We have received your requirement and will get back to you within 24 hours with next steps or an initial shortlist.",
        };

        emailjs.init({ publicKey: emailJsPublicKey });

        await emailjs.send(emailJsServiceId, emailJsAdminTemplateId, adminParams, { publicKey: emailJsPublicKey });
        try {
          await emailjs.send(emailJsServiceId, emailJsUserTemplateId, userParams, { publicKey: emailJsPublicKey });
        } catch (userErr) {
          console.error("Acknowledgement email failed:", userErr);
          throw new Error(
            "Your request was sent to our team, but the confirmation email failed. Check Auto-Reply template → To Email is {{to_email}} or {{email}}."
          );
        }
      } else if (endpoint && !endpoint.includes("YOUR_FORM_ID")) {
        const formData = new FormData();
        formData.append("intent", formIntent);
        Object.entries(payload).forEach(([key, value]) => formData.append(key, value));
        if (developerRef) formData.append("developer", developerRef);
        const res = await fetch(endpoint, { method: "POST", body: formData, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error("Form submission failed. Check your Formspree endpoint.");
      } else {
        throw new Error(
          `Email is not configured yet. Add EmailJS keys or a Formspree URL in .env.local, then restart npm run dev — or email us directly at ${siteContact.email}.`
        );
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
      setError(err?.message || "Failed to send message. Please try again.");
    }
  }

  const formKey = `${intent}-${developerRef || ""}-${roleParam || ""}`;

  return (
    <div className="contact-page">
      <section className="ct-hero">
        <div className="ct-container">
          <p className="ct-eyebrow">Contact Us</p>
          <h1>Let&apos;s Talk</h1>
          <p className="ct-lead">
            Whether you&apos;re looking to hire, evaluating us as a vendor partner, or looking to join our
            developer network, we typically respond within 24 hours.
          </p>

          <div className="ct-intent-grid" role="radiogroup" aria-label="Contact reason">
            {intentOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`ct-intent-card${intent === option.id ? " is-selected" : ""}`}
                onClick={() => selectIntent(option.id)}
                role="radio"
                aria-checked={intent === option.id}
              >
                <span className="ct-intent-radio" aria-hidden="true" />
                <span className="ct-intent-icon">
                  <IntentIcon type={option.icon} />
                </span>
                <span className="ct-intent-copy">
                  <strong>{option.title}</strong>
                  <span>{option.text}</span>
                </span>
                <span className="ct-intent-badge">
                  {option.badgeIcon} {option.badge}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="ct-main">
        <div className="ct-container">
          {intent === "hire" ? (
            <div className="ct-layout">
              <form key={formKey} className="ct-form-card" onSubmit={(e) => handleSubmit(e, "hire")}>
                <div className="ct-form-head">
                  <h2>Submit a Hiring Requirement</h2>
                  <p>Tell us what you need — we&apos;ll take it from there.</p>
                </div>

                <div className="ct-form-row ct-form-row--2">
                  <label className="ct-field">
                    Name
                    <input name="name" placeholder="Your full name" autoComplete="name" required />
                  </label>
                  <label className="ct-field">
                    Company
                    <input name="company" placeholder="Company name" autoComplete="organization" required />
                  </label>
                </div>

                <div className="ct-form-row ct-form-row--2">
                  <label className="ct-field">
                    Email
                    <input name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
                  </label>
                  <label className="ct-field">
                    Phone (optional)
                    <input name="phone" type="tel" placeholder="+1 234 567 8901" autoComplete="tel" />
                  </label>
                </div>

                <label className="ct-field">
                  Role / Skill Needed
                  <select name="role" required defaultValue={rolePrefill || ""}>
                    <option value="" disabled>
                      Select specialization
                    </option>
                    {roleOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="ct-field">
                  Engagement Type
                  <select name="engagementType" required defaultValue="Short-term">
                    {engagementOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="ct-field">
                  Project Details
                  <textarea
                    name="projectDetails"
                    rows={5}
                    placeholder="Tell us a bit about the project or your background..."
                    defaultValue={projectPrefill}
                    required
                  />
                </label>

                <button className="ct-submit" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Submit Requirement"} <span aria-hidden="true">→</span>
                </button>
                <p className="ct-form-note">
                  We&apos;ll get back to you within 24 hours with next steps or an initial shortlist. Prefer email?{" "}
                  <a href={mailtoLink({ subject: "Hiring requirement" })}>{siteContact.email}</a>
                </p>

                {status === "success" && (
                  <div className="ct-feedback ct-feedback--ok" role="status">
                    Thanks — we received your requirement.
                  </div>
                )}
                {error && (
                  <div className="ct-feedback ct-feedback--err" role="alert">
                    {error}
                  </div>
                )}
              </form>

              <ContactSidebar />
            </div>
          ) : intent === "vendor" ? (
            <div className="ct-layout">
              <form key={formKey} className="ct-form-card" onSubmit={(e) => handleSubmit(e, "vendor")}>
                <div className="ct-form-head">
                  <h2>Request Compliance Pack</h2>
                  <p>
                    For vendor panel or VMS registration, share your company details and we&apos;ll send our
                    compliance documentation.
                  </p>
                </div>

                <div className="ct-form-row ct-form-row--2">
                  <label className="ct-field">
                    Name
                    <input name="name" placeholder="Your full name" autoComplete="name" required />
                  </label>
                  <label className="ct-field">
                    Company
                    <input name="company" placeholder="Company name" autoComplete="organization" required />
                  </label>
                </div>

                <div className="ct-form-row ct-form-row--2">
                  <label className="ct-field">
                    Email
                    <input name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
                  </label>
                  <label className="ct-field">
                    Phone (optional)
                    <input name="phone" type="tel" placeholder="+1 234 567 8901" autoComplete="tel" />
                  </label>
                </div>

                <label className="ct-field">
                  What do you need?
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="MSA, insurance certificates, ISO documentation, onboarding requirements..."
                    defaultValue="Please send your compliance pack for vendor / VMS panel registration."
                    required
                  />
                </label>

                <button className="ct-submit" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Request Compliance Pack"} <span aria-hidden="true">→</span>
                </button>
                <p className="ct-form-note">
                  Or email us directly:{" "}
                  <a href={mailtoLink({ subject: "Compliance pack request" })}>{siteContact.email}</a>
                </p>

                {status === "success" && (
                  <div className="ct-feedback ct-feedback--ok" role="status">
                    Thanks — we received your compliance pack request.
                  </div>
                )}
                {error && (
                  <div className="ct-feedback ct-feedback--err" role="alert">
                    {error}
                  </div>
                )}
              </form>

              <ContactSidebar />
            </div>
          ) : (
            <div className="ct-layout">
              <div className="ct-talent-redirect">
                <h2>Join Our Talent Pool</h2>
                <p>
                  Developer applications live on our Careers page — apply there to get matched with vetted
                  project opportunities.
                </p>
                <Link to="/careers" className="ct-talent-link">
                  Go to Careers <span aria-hidden="true">→</span>
                </Link>
                <p className="ct-form-note ct-form-note--inline">
                  Questions? Email{" "}
                  <a href={mailtoLink({ subject: "Join talent pool" })}>{siteContact.email}</a>
                </p>
              </div>
              <ContactSidebar />
            </div>
          )}
        </div>
      </section>

      <section className="ct-banner">
        <div className="ct-container">
          <div className="ct-banner-card">
            <div className="ct-banner-rings" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <h2>No Long Forms. No Sales Pressure. Just a Fast Response.</h2>
            <p>
              Submit your requirement and hear back within 24 hours — that&apos;s the standard we hold
              ourselves to.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
