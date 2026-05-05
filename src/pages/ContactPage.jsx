import "./ContactPage.css";
import { useState } from "react";
import CtaSection from "../components/CtaSection";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    // Basic client-side validation
    if (!payload.first || !payload.last || !payload.email || !payload.message) {
      setError("Please fill the required fields.");
      return;
    }

    try {
      setStatus("loading");
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || "";
      if (endpoint && !endpoint.includes("YOUR_FORM_ID")) {
        // If endpoint looks like Formspree, send as form-encoded/formdata
        if (endpoint.includes("formspree.io")) {
          const formData = new FormData();
          Object.entries(payload).forEach(([k, v]) => formData.append(k, v));
          await fetch(endpoint, { method: "POST", body: formData });
        } else {
          // POST JSON to configured endpoint
          await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
        }
      } else {
        // fallback: simulate submit when no endpoint configured
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError("Failed to send message. Please try again.");
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-page-wrapper">
        <div className="contact-dot-grid"></div>
        <div className="contact-glow"></div>
        <header className="contact-hero framer-hero">
          <div className="hero-eyebrow">24/7</div>
          <div className="hero-heading">
            <h1>Any Questions Rising? We are</h1>
            <h1 className="line-2">are Ready to Help.</h1>
            <p className="hero-sub">
              Whether you have a question, need assistance, or want to start a new
              project, our team is here to help.
            </p>
          </div>
        </header>
      </div>

      <section className="contact-main">
        <section className="contact-form-section">
          <form className="framer-contact-form" onSubmit={handleSubmit}>
            <div className="two-col">
              <label htmlFor="first">
                First name*
                <input id="first" placeholder="Jane" name="first" required />
              </label>
              <label htmlFor="last">
                Last Name*
                <input id="last" placeholder="Smith" name="last" required />
              </label>
            </div>

            <label htmlFor="email">
              How can we reach you?*
              <input id="email" placeholder="jane@framer.com" name="email" type="email" required />
            </label>

            <div className="two-col">
              <label htmlFor="country">
                Where Are you from?*
                <select id="country" name="country" required>
                  <option value="">Select your country…</option>
                  <option>Amsterdam</option>
                  <option>Barcelona</option>
                  <option>London</option>
                  <option>New York</option>
                </select>
              </label>
              <label htmlFor="companyType">
                What's the type of your company?*
                <select id="companyType" name="companyType" required>
                  <option value="">Select category</option>
                  <option>Agency</option>
                  <option>SAAS</option>
                  <option>Banking</option>
                  <option>Business</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <label htmlFor="message">
              Message*
              <textarea id="message" placeholder="Type your message..." name="message" rows={6} required />
            </label>

            <div className="form-actions framer-actions">
              <button
                className="button framer-submit"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Submit Now"}
              </button>
            </div>

            {status === "success" && (
              <div className="submit-success" role="status">Thanks — we received your message.</div>
            )}
            {error && <div className="submit-error" role="alert">{error}</div>}
          </form>

          <div className="trusted-by">
            <h1 className="trusted-heading">Trusted by Fortune 500 Companies, SMBs and Startups</h1>
            <div className="logos">
              <img src="/logos/logo1.svg" alt="partner logo 1" />
              <img src="/logos/logo2.svg" alt="partner logo 2" />
              <img src="/logos/logo3.svg" alt="partner logo 3" />
              <img src="/logos/logo4.svg" alt="partner logo 4" />
            </div>
          </div>
        </section>

        <CtaSection />
      </section>
    </div>
  );
}
