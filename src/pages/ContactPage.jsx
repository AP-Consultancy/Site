import "./ContactPage.css";
import { useState } from "react";
import { RevealOnScroll } from "../components";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    if (!payload.first || !payload.last || !payload.email || !payload.phone || !payload.message || !payload.country || !payload.companyType) {
      setError("Please fill the required fields.");
      return;
    }

    try {
      setStatus("loading");
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "";
      const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
      const emailJsAdminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID || "";
      const emailJsUserTemplateId = import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID || "";
      const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
      const contactReceiverEmail = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || "";

      if (
        emailJsServiceId &&
        emailJsAdminTemplateId &&
        emailJsUserTemplateId &&
        emailJsPublicKey &&
        contactReceiverEmail
      ) {
        const fullName = `${payload.first} ${payload.last}`.trim();

        const adminParams = {
          to_email: contactReceiverEmail,
          to_name: "AP Consultancy",
          subject: `New enquiry received | ${fullName || payload.email} | AP Consultancy`,
          from_name: fullName,
          from_email: payload.email,
          phone: payload.phone,
          country: payload.country,
          company_type: payload.companyType,
          message: payload.message,
        };

        const userParams = {
          to_email: payload.email,
          to_name: fullName,
          from_name: "AP Consultancy",
          subject: "Thank you for contacting AP Consultancy",
          acknowledgement:
            "Thank you for choosing AP Consultancy. We have received your request and our team will review it shortly. You can expect a response from us soon.",
        };

        const [adminResult, userResult] = await Promise.allSettled([
          emailjs.send(emailJsServiceId, emailJsAdminTemplateId, adminParams, {
            publicKey: emailJsPublicKey,
          }),
          emailjs.send(emailJsServiceId, emailJsUserTemplateId, userParams, {
            publicKey: emailJsPublicKey,
          }),
        ]);

        const failed = [];
        if (adminResult.status === "rejected") failed.push("query email to AP Consultancy");
        if (userResult.status === "rejected") failed.push("acknowledgement email to user");

        if (failed.length) {
          const errorDetails = [
            adminResult.status === "rejected" ? adminResult.reason : null,
            userResult.status === "rejected" ? userResult.reason : null,
          ]
            .filter(Boolean)
            .map((e) => (e?.text ? `${e.text}` : e?.message ? `${e.message}` : String(e)))
            .join(" | ");

          throw new Error(`Failed to send ${failed.join(" and ")}.${errorDetails ? ` Details: ${errorDetails}` : ""}`);
        }
      } else if (endpoint && !endpoint.includes("YOUR_FORM_ID")) {
        if (endpoint.includes("formspree.io")) {
          const formData = new FormData();
          Object.entries(payload).forEach(([k, v]) => formData.append(k, v));
          await fetch(endpoint, { method: "POST", body: formData });
        } else {
          await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
        }
      } else {
        throw new Error(
          "Email service is not configured in this running app. Restart dev server after updating .env.local."
        );
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
      setError(err?.message || "Failed to send message. Please verify EmailJS template settings and try again.");
    }
  }

  return (
    <div className="ct-page">
      <div className="ct-bg-glow ct-bg-glow--left" aria-hidden="true" />
      <div className="ct-bg-glow ct-bg-glow--right" aria-hidden="true" />

      <RevealOnScroll className="ct-hero">
        <div className="ct-hero-grid" aria-hidden="true" />
        <div className="ct-hero-glow" aria-hidden="true" />
        <div className="ct-hero-inner">
          <div className="ct-badge">
            <span className="ct-badge-247">24/7</span>
            <span className="ct-badge-label">Collaborate With Us</span>
          </div>
          <h1 className="ct-hero-title">
            Have Any Doubts? We
            <br />
            are Ready to Help.
          </h1>
          <p className="ct-hero-lead">
            Whether you need guidance, support, or a fresh start, our team is ready to assist you.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll className="ct-form-section" delay={80}>
        <form className="ct-form-panel" onSubmit={handleSubmit}>
          <div className="ct-form-row ct-form-row--2">
            <label className="ct-field">
              First name<span className="ct-req">*</span>
              <input name="first" autoComplete="given-name" required />
            </label>
            <label className="ct-field">
              Last Name<span className="ct-req">*</span>
              <input name="last" autoComplete="family-name" required />
            </label>
          </div>

          <div className="ct-form-row ct-form-row--2">
            <label className="ct-field">
              How can we reach you?<span className="ct-req">*</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="ct-field">
              Phone number<span className="ct-req">*</span>
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
          </div>

          <div className="ct-form-row ct-form-row--2">
            <label className="ct-field">
              Where Are you from?<span className="ct-req">*</span>
              <select name="country" required defaultValue="">
                <option value="" disabled>
                  Select your country…
                </option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="in">India</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="ae">United Arab Emirates</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="ct-field">
              What&apos;s the type of your company?<span className="ct-req">*</span>
              <select name="companyType" required defaultValue="">
                <option value="" disabled>
                  Select category
                </option>
                <option value="agency">Agency</option>
                <option value="saas">SAAS</option>
                <option value="banking">Banking</option>
                <option value="business">Business</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <label className="ct-field">
            Message<span className="ct-req">*</span>
            <textarea name="message" rows={6} placeholder="Type your message..." required />
          </label>

          <div className="ct-form-actions">
            <button className="button ct-submit" type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Submit Now"}
            </button>
          </div>

          {status === "success" && (
            <div className="ct-feedback ct-feedback--ok" role="status">
              Thanks — we received your message.
            </div>
          )}
          {error && (
            <div className="ct-feedback ct-feedback--err" role="alert">
              {error}
            </div>
          )}
        </form>
      </RevealOnScroll>

      <RevealOnScroll className="ct-trusted" delay={60}>
        <h2 className="ct-trusted-title">Trusted by Fortune 500 Companies, SMBs and Startups</h2>
        <div className="ct-trusted-grid">
          <div className="ct-trusted-cell">
            <img className="ct-trusted-logo ct-trusted-logo--acuity" src="/logos/Acuity_Analytics_idwIL6acVL_1 2.png" alt="Acuity Analytics" loading="lazy" />
          </div>
          <div className="ct-trusted-cell">
            <img className="ct-trusted-logo ct-trusted-logo--agility" src="/logos/surface1.png" alt="Agility Insights" loading="lazy" />
          </div>
          <div className="ct-trusted-cell">
            <img className="ct-trusted-logo ct-trusted-logo--hdfc" src="/logos/hdfc-bank-logo 1.png" alt="HDFC Bank" loading="lazy" />
          </div>
          <div className="ct-trusted-cell">
            <img className="ct-trusted-logo ct-trusted-logo--rocket" src="/logos/Rocket-Learning_New-Logo-2-Picsart-BackgroundRemover-Picsart-AiImageEnhancer 2.png" alt="Rocket Learning" loading="lazy" />
          </div>
          <div className="ct-trusted-cell">
            <img className="ct-trusted-logo ct-trusted-logo--salesforce" src="/logos/Screenshot 2026-04-17 234303-Picsart-BackgroundRemover.png" alt="Salesforce" loading="lazy" />
          </div>
          <div className="ct-trusted-cell">
            <img className="ct-trusted-logo ct-trusted-logo--tailored" src="/logos/tailoreed-logo 1.png" alt="Tailored Brands" loading="lazy" />
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
