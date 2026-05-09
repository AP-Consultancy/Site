# AP Consultancy EmailJS Templates (Premium)

Use these templates in EmailJS:

- **Admin template**: receives full lead details
- **User template**: sends acknowledgement to submitter

Keep variable names exactly as provided.

---

## 1) Admin Notification Template

### Subject

```text
{{subject}}
```

### HTML Content

```html
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f3f4f6;font-family:Inter,Arial,Helvetica,sans-serif;color:#111827;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f4f6;padding:28px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:18px 24px;background:linear-gradient(90deg,#0f1115,#181b22);border-bottom:3px solid #ef1d26;">
                <p style="margin:0;color:#ef1d26;font-size:12px;letter-spacing:.12em;font-weight:700;text-transform:uppercase;">AP Consultancy</p>
                <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;line-height:1.3;font-weight:700;">New Website Enquiry Received</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:22px 24px 8px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-size:13px;font-weight:600;width:34%;">Name</td>
                    <td style="padding:10px 12px;border:1px solid #e5e7eb;font-size:13px;">{{from_name}}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-size:13px;font-weight:600;">Email</td>
                    <td style="padding:10px 12px;border:1px solid #e5e7eb;font-size:13px;">{{from_email}}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-size:13px;font-weight:600;">Phone</td>
                    <td style="padding:10px 12px;border:1px solid #e5e7eb;font-size:13px;">{{phone}}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-size:13px;font-weight:600;">Country</td>
                    <td style="padding:10px 12px;border:1px solid #e5e7eb;font-size:13px;">{{country}}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-size:13px;font-weight:600;">Company Type</td>
                    <td style="padding:10px 12px;border:1px solid #e5e7eb;font-size:13px;">{{company_type}}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 24px 22px;">
                <div style="border:1px solid #e5e7eb;background:#fcfcfd;border-radius:10px;padding:14px;">
                  <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#111827;">Message</p>
                  <p style="margin:0;font-size:13px;line-height:1.65;color:#374151;white-space:pre-line;">{{message}}</p>
                </div>
                <p style="margin:12px 0 0;font-size:12px;color:#6b7280;">
                  Delivered to: {{to_name}} ({{to_email}})
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 24px;background:#f9fafb;border-top:1px solid #e5e7eb;">
                <p style="margin:0;font-size:11px;color:#6b7280;">
                  Automated by AP Consultancy website contact form.
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

### Variables used

- `to_email`
- `to_name`
- `subject`
- `from_name`
- `from_email`
- `phone`
- `country`
- `company_type`
- `message`

---

## 2) User Acknowledgement Template

### Subject

```text
{{subject}}
```

### HTML Content

```html
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f3f4f6;font-family:Inter,Arial,Helvetica,sans-serif;color:#111827;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f3f4f6;padding:28px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:18px 24px;background:linear-gradient(90deg,#0f1115,#181b22);border-bottom:3px solid #ef1d26;">
                <p style="margin:0;color:#ef1d26;font-size:12px;letter-spacing:.12em;font-weight:700;text-transform:uppercase;">AP Consultancy</p>
                <h1 style="margin:6px 0 0;color:#ffffff;font-size:20px;line-height:1.3;font-weight:700;">Thank You for Contacting Us</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:22px 24px;">
                <p style="margin:0 0 12px;font-size:14px;line-height:1.7;color:#374151;">Hi {{to_name}},</p>

                <p style="margin:0 0 12px;font-size:14px;line-height:1.7;color:#374151;">
                  {{acknowledgement}}
                </p>

                <p style="margin:0 0 14px;font-size:14px;line-height:1.7;color:#374151;">
                  Our team will review your request and get back to you shortly.
                </p>

                <div style="padding:12px 14px;border:1px solid #e5e7eb;background:#f9fafb;border-radius:10px;">
                  <p style="margin:0;font-size:13px;line-height:1.6;color:#4b5563;">
                    If your request is urgent, reply to this email and include
                    <strong>Urgent</strong> in the subject line.
                  </p>
                </div>

                <p style="margin:16px 0 0;font-size:14px;line-height:1.7;color:#374151;">
                  Best regards,<br />
                  <strong>{{from_name}}</strong><br />
                  Info@apconsultancy.in
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 24px;background:#f9fafb;border-top:1px solid #e5e7eb;">
                <p style="margin:0;font-size:11px;color:#6b7280;">
                  You are receiving this email because a request was submitted with your email address.
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

### Variables used

- `to_email`
- `to_name`
- `from_name`
- `subject`
- `acknowledgement`

---

## Recommended values (already aligned with code)

- Admin subject:
  `New enquiry received | {{from_name}} | AP Consultancy`
- User subject:
  `Thank you for contacting AP Consultancy`
- Acknowledgement text:
  `Thank you for choosing AP Consultancy. We have received your request and our team will review it shortly. You can expect a response from us soon.`

---

## Quick test checklist

1. Put EmailJS IDs + public key in `.env.local`
2. Restart app
3. Submit a test form from Contact page
4. Confirm:
   - You receive admin email at `Info@apconsultancy.in`
   - User email receives acknowledgement
5. Check spam/promotions first time

