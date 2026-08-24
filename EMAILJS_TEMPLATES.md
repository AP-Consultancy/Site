# AP Consultancy EmailJS Templates

Use these templates in EmailJS:

- **Admin template** (start from **Contact Us**): receives full lead details to your team
- **User template** (start from **Auto-Reply**): sends acknowledgement to the submitter

Keep variable names **exactly** as provided — they match `ContactPage.jsx`.

### Brand (aligned with site)

| Token | Value |
|---|---|
| Primary blue | `#2e72ff` |
| Light blue | `#7ebfff` |
| Dark blue | `#1b5fd9` |
| Navy | `#0b1f3a` |
| Contact email | `apconsultancy36@gmail.com` |

Email headers use a **text-based AP mark** (no images) so they render reliably in EmailJS and all email clients.

---

## Paste guide — Admin template (Contact Us)

Open EmailJS → **Email Templates** → your **Contact Us** (admin) template.

| Step | Copy from (below) | Paste to (EmailJS) |
|---|---|---|
| 1 | [Admin → To Email](#admin--to-email) | Right panel → **To Email** |
| 2 | [Admin → From Name](#admin--from-name) | Right panel → **From Name** |
| 3 | [Admin → Reply To](#admin--reply-to) | Right panel → **Reply To** |
| 4 | [Admin → Subject](#admin--subject) | Right panel → **Subject** |
| 5 | [Admin → HTML Content](#admin--html-content) | **Content** tab → click **Edit** / source → replace all HTML |
| 6 | — | Click **Save** → copy **Template ID** |

### Admin → To Email

**Paste to:** EmailJS → Admin template → Right panel → **To Email**

Must be the team inbox variable (not `{{email}}`, which is the submitter):

```text
{{to_email}}
```

### Admin → From Name

**Paste to:** EmailJS → Admin template → Right panel → **From Name**

Shows the **submitter's name** in your inbox (e.g. "John Doe") so you can spot leads quickly.

```text
{{from_name}}
```

### Admin → Reply To

**Paste to:** EmailJS → Admin template → Right panel → **Reply To**

```text
{{from_email}}
```

### Admin → Subject

**Paste to:** EmailJS → Admin template → Right panel → **Subject**

```text
{{subject}}
```

### Admin → HTML Content

**Paste to:** EmailJS → Admin template → **Content** tab → editor (HTML / source mode) → select all → replace

```html
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f1f5f9;font-family:Inter,Arial,Helvetica,sans-serif;color:#0f172a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1f5f9;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 8px 28px rgba(11,31,58,0.08);">
            <tr>
              <td style="padding:24px 28px;background:linear-gradient(105deg,#0b1f3a 0%,#1b5fd9 45%,#2e72ff 100%);">
                <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 14px;">
                  <tr>
                    <td style="width:44px;height:44px;background:#ffffff;border-radius:10px;text-align:center;vertical-align:middle;font-family:Inter,Arial,Helvetica,sans-serif;font-size:17px;font-weight:800;color:#2e72ff;line-height:44px;letter-spacing:-0.04em;">AP</td>
                  </tr>
                </table>
                <p style="margin:0;color:#7ebfff;font-size:11px;letter-spacing:.14em;font-weight:700;text-transform:uppercase;">AP Consultancy</p>
                <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;line-height:1.3;font-weight:800;letter-spacing:-0.02em;">New Website Enquiry</h1>
                <p style="margin:8px 0 0;color:rgba(255,255,255,0.88);font-size:13px;line-height:1.5;">A new submission arrived from the contact form.</p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 28px 8px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:11px 14px;border:1px solid #e2e8f0;background:#f8fafc;font-size:13px;font-weight:700;color:#0b1f3a;width:34%;">Name</td>
                    <td style="padding:11px 14px;border:1px solid #e2e8f0;font-size:13px;color:#334155;">{{from_name}}</td>
                  </tr>
                  <tr>
                    <td style="padding:11px 14px;border:1px solid #e2e8f0;background:#f8fafc;font-size:13px;font-weight:700;color:#0b1f3a;">Email</td>
                    <td style="padding:11px 14px;border:1px solid #e2e8f0;font-size:13px;color:#334155;">{{from_email}}</td>
                  </tr>
                  <tr>
                    <td style="padding:11px 14px;border:1px solid #e2e8f0;background:#f8fafc;font-size:13px;font-weight:700;color:#0b1f3a;">Phone</td>
                    <td style="padding:11px 14px;border:1px solid #e2e8f0;font-size:13px;color:#334155;">{{phone}}</td>
                  </tr>
                  <tr>
                    <td style="padding:11px 14px;border:1px solid #e2e8f0;background:#f8fafc;font-size:13px;font-weight:700;color:#0b1f3a;">Company</td>
                    <td style="padding:11px 14px;border:1px solid #e2e8f0;font-size:13px;color:#334155;">{{country}}</td>
                  </tr>
                  <tr>
                    <td style="padding:11px 14px;border:1px solid #e2e8f0;background:#f8fafc;font-size:13px;font-weight:700;color:#0b1f3a;">Engagement / Type</td>
                    <td style="padding:11px 14px;border:1px solid #e2e8f0;font-size:13px;color:#334155;">{{company_type}}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 28px 24px;">
                <div style="border:1px solid #dbeafe;background:#eff6ff;border-radius:12px;padding:16px;border-left:4px solid #2e72ff;">
                  <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#0b1f3a;">Message</p>
                  <p style="margin:0;font-size:13px;line-height:1.7;color:#334155;white-space:pre-line;">{{message}}</p>
                </div>
                <p style="margin:14px 0 0;font-size:12px;color:#64748b;">
                  Delivered to: {{to_name}} ({{to_email}})
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:14px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;">
                <p style="margin:0;font-size:11px;color:#64748b;line-height:1.5;">
                  Automated by AP Consultancy website · <a href="mailto:apconsultancy36@gmail.com" style="color:#2e72ff;text-decoration:none;">apconsultancy36@gmail.com</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
```

**Admin variables used:** `to_email`, `to_name`, `subject`, `from_name`, `from_email`, `phone`, `country`, `company_type`, `message`

---

## Paste guide — User template (Auto-Reply)

Open EmailJS → **Email Templates** → **Create New Template** → select **Auto-Reply**.

| Step | Copy from (below) | Paste to (EmailJS) |
|---|---|---|
| 1 | [User → To Email](#user--to-email) | Right panel → **To Email** |
| 2 | [User → From Name](#user--from-name) | Right panel → **From Name** |
| 3 | [User → Subject](#user--subject) | Right panel → **Subject** |
| 4 | [User → HTML Content](#user--html-content) | **Content** tab → click **Edit** / source → replace all HTML |
| 5 | — | Click **Save** → copy **Template ID** |

### User → To Email

**Paste to:** EmailJS → User template → Right panel → **To Email**

Must be the **visitor's email** (the person who filled the form). Do not use a fixed address like `apconsultancy36@gmail.com`.

EmailJS Auto-Reply starters usually expect:

```text
{{email}}
```

If ack still fails, also try:

```text
{{to_email}}
```

The site sends `email`, `to_email`, and `user_email` — all set to the submitter's address.

### User → From Name

**Paste to:** EmailJS → User template → Right panel → **From Name**

Shows **AP Consultancy** to the visitor (the site sends `from_name` as "AP Consultancy").

```text
{{from_name}}
```

### User → Subject

**Paste to:** EmailJS → User template → Right panel → **Subject**

```text
{{subject}}
```

### User → HTML Content

**Paste to:** EmailJS → User template → **Content** tab → editor (HTML / source mode) → select all → replace

```html
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f1f5f9;font-family:Inter,Arial,Helvetica,sans-serif;color:#0f172a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1f5f9;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 8px 28px rgba(11,31,58,0.08);">
            <tr>
              <td style="padding:24px 28px;background:linear-gradient(105deg,#0b1f3a 0%,#1b5fd9 45%,#2e72ff 100%);">
                <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 14px;">
                  <tr>
                    <td style="width:44px;height:44px;background:#ffffff;border-radius:10px;text-align:center;vertical-align:middle;font-family:Inter,Arial,Helvetica,sans-serif;font-size:17px;font-weight:800;color:#2e72ff;line-height:44px;letter-spacing:-0.04em;">AP</td>
                  </tr>
                </table>
                <p style="margin:0;color:#7ebfff;font-size:11px;letter-spacing:.14em;font-weight:700;text-transform:uppercase;">AP Consultancy</p>
                <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;line-height:1.3;font-weight:800;letter-spacing:-0.02em;">Thank You for Contacting Us</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 28px;">
                <p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:#334155;">Hi {{to_name}},</p>

                <p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:#334155;">
                  {{acknowledgement}}
                </p>

                <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#334155;">
                  Our team will review your request and get back to you within <strong style="color:#1b5fd9;">24 hours</strong>.
                </p>

                <div style="padding:14px 16px;border:1px solid #dbeafe;background:#eff6ff;border-radius:12px;border-left:4px solid #2e72ff;">
                  <p style="margin:0;font-size:13px;line-height:1.65;color:#334155;">
                    If your request is urgent, reply to this email and include
                    <strong style="color:#0b1f3a;">Urgent</strong> in the subject line.
                  </p>
                </div>

                <p style="margin:18px 0 0;font-size:15px;line-height:1.7;color:#334155;">
                  Best regards,<br />
                  <strong style="color:#0b1f3a;">{{from_name}}</strong><br />
                  <a href="mailto:apconsultancy36@gmail.com" style="color:#2e72ff;text-decoration:none;font-weight:600;">apconsultancy36@gmail.com</a><br />
                  <span style="font-size:13px;color:#64748b;">Ahmedabad, Gujarat, India</span>
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:14px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;">
                <p style="margin:0;font-size:11px;color:#64748b;line-height:1.5;">
                  You received this email because a request was submitted with your email address on apconsultancy.in.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
```

**User variables used:** `to_email`, `to_name`, `from_name`, `subject`, `acknowledgement`

---

## Paste guide — `.env.local` (project root)

| Copy from (below) | Paste to |
|---|---|
| [Env block](#env-local-block) | `c:\Users\hp\Site\.env.local` → replace the 3 placeholder lines |

Also copy these from EmailJS dashboard:

| Copy from (EmailJS) | Paste to (`.env.local` / Vercel) |
|---|---|
| Contact Us template → **Template ID** | `VITE_EMAILJS_CONTACT_US_TEMPLATE_ID=` (`template_23mob3w`) |
| Auto-Reply template → **Template ID** | `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=` (`template_rejbajf`) |
| Account → **Public Key** | `VITE_EMAILJS_PUBLIC_KEY=` |

### `.env.local` block

**Paste to:** project root → `.env.local`

```env
VITE_CONTACT_RECEIVER_EMAIL=apconsultancy36@gmail.com
VITE_EMAILJS_SERVICE_ID=service_5yl29cg
VITE_EMAILJS_CONTACT_US_TEMPLATE_ID=template_23mob3w
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=template_rejbajf
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Also set these same variables in **Vercel → Project → Settings → Environment Variables** and redeploy. The live site previously used outdated values (`service_6kbylsm`, `Info@apconsultancy.in`, old template IDs).

Legacy env names `VITE_EMAILJS_ADMIN_TEMPLATE_ID` / `VITE_EMAILJS_USER_TEMPLATE_ID` still work.

Use `apconsultancy36@gmail.com` for `VITE_CONTACT_RECEIVER_EMAIL` (form lead delivery inbox).

---

## Quick test checklist

1. Paste **Admin** fields + HTML into EmailJS **Contact Us** template → Save
2. Paste **User** fields + HTML into EmailJS **Auto-Reply** template → Save
3. Paste Template IDs + Public Key into `.env.local`
4. Restart: `npm run dev`
5. Submit a test form at `/contact`
6. Confirm:
   - Admin email arrives at your receiver address
   - User email receives the branded acknowledgement
7. Check spam/promotions the first time

---

## Troubleshooting — no acknowledgement email

1. **Auto-Reply → To Email** must be `{{to_email}}` or `{{email}}` (not blank, not a fixed address).
2. EmailJS → **Email History** → open **Auto-Reply** (`template_rejbajf`) → check **Status** (Sent / Failed).
3. Check **Spam** at the address typed in the form (not `apconsultancy36@gmail.com`).
4. Restart dev server after `.env.local` changes: `npm run dev`.
5. Submit again — if ack fails, the form now shows a specific error message.
