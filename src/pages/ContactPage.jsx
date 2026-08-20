import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { contactInfo, engagementOptions, intentOptions, roleOptions } from "../data/contactPageData";
import usePageMeta from "../hooks/usePageMeta";
import "./ContactPage.css";

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

export default function ContactPage() {
  const [intent, setIntent] = useState("hire");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  usePageMeta({
    title: "Contact AP Consultancy | Hire Developers or Join Our Talent Pool",
    description:
      "Get in touch with AP Consultancy — submit a hiring requirement or apply to join our developer network. We respond within 24 hours.",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    if (!payload.name || !payload.company || !payload.email || !payload.role || !payload.engagementType || !payload.projectDetails) {
      setError("Please fill the required fields.");
      return;
    }

    try {
      setStatus("loading");
      const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
      const emailJsAdminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID || "";
      const emailJsUserTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID || "";
      const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
      const contactReceiverEmail = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || "";
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
        const adminParams = {
          to_email: contactReceiverEmail,
          to_name: "AP Consultancy",
          subject: `Hiring requirement | ${payload.company} | ${payload.name}`,
          from_name: payload.name,
          from_email: payload.email,
          phone: payload.phone || "Not provided",
          country: payload.company,
          company_type: payload.engagementType,
          message: [`Role / Skill: ${payload.role}`, "", payload.projectDetails].join("\n"),
        };

        const userParams = {
          to_email: payload.email,
          to_name: payload.name,
          from_name: "AP Consultancy",
          subject: "We received your hiring requirement",
          acknowledgement:
            "Thank you for contacting AP Consultancy. We have received your requirement and will get back to you within 24 hours with next steps or an initial shortlist.",
        };

        await Promise.all([
          emailjs.send(emailJsServiceId, emailJsAdminTemplateId, adminParams, { publicKey: emailJsPublicKey }),
          emailjs.send(emailJsServiceId, emailJsUserTemplateId, userParams, { publicKey: emailJsPublicKey }),
        ]);
      } else if (endpoint && !endpoint.includes("YOUR_FORM_ID")) {
        const formData = new FormData();
        Object.entries(payload).forEach(([key, value]) => formData.append(key, value));
        const res = await fetch(endpoint, { method: "POST", body: formData, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error("Form submission failed. Check your Formspree endpoint.");
      } else {
        throw new Error(
          "Email is not configured yet. Add EmailJS keys or a Formspree URL in .env.local, then restart npm run dev."
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
                onClick={() => setIntent(option.id)}
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
              <form className="ct-form-card" onSubmit={handleSubmit}>
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
                  <select name="role" required defaultValue="">
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
                    required
                  />
                </label>

                <button className="ct-submit" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Sending..." : "Submit Requirement"} <span aria-hidden="true">→</span>
                </button>
                <p className="ct-form-note">
                  We&apos;ll get back to you within 24 hours with next steps or an initial shortlist.
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

              <aside className="ct-sidebar">
                <div className="ct-info-card">
                  <div className="ct-info-glow" aria-hidden="true" />
                  <h3>{contactInfo.title}</h3>
                  <ul>
                    {contactInfo.items.map((item) => (
                      <li key={item.text}>
                        <ContactInfoIcon type={item.type} />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ct-map-card" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21s-6-4.35-8.4-7.35C2.1 11.35 2.6 7.5 5.4 5.8 7.4 4.6 9.6 5.1 12 7c2.4-1.9 4.6-2.4 6.6-1.2 2.8 1.7 3.3 5.55 1.8 7.85C18 16.65 12 21 12 21z" stroke="#6366f1" strokeWidth="1.8" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="2.5" stroke="#6366f1" strokeWidth="1.8" />
                  </svg>
                  <p>Google Map Embed Placeholder</p>
                </div>
              </aside>
            </div>
          ) : intent === "vendor" ? (
            <div className="ct-talent-redirect">
              <h2>Request Compliance Pack</h2>
              <p>
                For vendor panel or VMS registration, contact us with your company details and we&apos;ll
                send our compliance documentation — MSA, insurance, ISO certification, and onboarding
                requirements.
              </p>
              <a
                className="ct-talent-link"
                href="mailto:hello@apconsultancy.in?subject=Compliance%20Pack%20Request"
              >
                Request Compliance Pack <span aria-hidden="true">→</span>
              </a>
            </div>
          ) : (
            <div className="ct-talent-redirect">
              <h2>Join Our Talent Pool</h2>
              <p>
                Developer applications live on our Careers page — apply there to get matched with vetted
                project opportunities.
              </p>
              <Link to="/careers" className="ct-talent-link">
                Go to Careers <span aria-hidden="true">→</span>
              </Link>
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
