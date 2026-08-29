# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact Form Email Setup (EmailJS)

The contact form supports two outgoing emails:

1. **Admin email** to AP Consultancy with full query details
2. **Acknowledgement email** to the user who submitted the form

### 1) Environment Variables (`.env.local`)

```env
VITE_CONTACT_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
VITE_CONTACT_RECEIVER_EMAIL=apconsultancy36@gmail.com
VITE_EMAILJS_SERVICE_ID=service_5yl29cg
VITE_EMAILJS_CONTACT_US_TEMPLATE_ID=template_23mob3w
VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=template_rejbajf
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

If all EmailJS variables above are set, EmailJS is used. If not, the app falls back to `VITE_CONTACT_ENDPOINT`.

**Production:** EmailJS values are in `.env.production` (baked in at build time). On **Render**, no extra env vars are required if that file is committed. You can override with Dashboard env vars if needed. For **Vercel**, add the same `VITE_*` values in Project Settings → Environment Variables.

### 2) Admin Template Format (EmailJS — Contact Us)

Use this for `VITE_EMAILJS_CONTACT_US_TEMPLATE_ID` (`template_23mob3w`):

**Subject**

```text
{{subject}}
```

**Body**

```text
New contact request received

Name: {{from_name}}
Email: {{from_email}}
Country: {{country}}
Company Type: {{company_type}}

Message:
{{message}}
```

Expected variables:

- `to_email`
- `to_name`
- `subject`
- `from_name`
- `from_email`
- `country`
- `company_type`
- `message`

### 3) User Acknowledgement Template Format (EmailJS — Auto-Reply)

Use this for `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID` (`template_rejbajf`):

**Subject**

```text
{{subject}}
```

**Body**

```text
Hi {{to_name}},

{{acknowledgement}}

Regards,
{{from_name}}
```

Expected variables:

- `to_email`
- `to_name`
- `from_name`
- `subject`
- `acknowledgement`

## Deploy on Render (static site)

This project is a Vite React SPA. Render serves the built `dist/` folder with SPA rewrites.

1. Push `render.yaml` to GitHub (`AP-Consultancy/Site`, branch `main`).
2. Open the Blueprint: [Create Blueprint from repo](https://dashboard.render.com/blueprint/new?repo=https://github.com/AP-Consultancy/Site)
3. Click **Apply** — build command: `npm ci && npm run build`, publish path: `dist`.
4. Optional custom domain: Render Dashboard → your static site → **Settings → Custom Domains** → add `www.apconsultancy.in` and update DNS (CNAME to your `*.onrender.com` URL).

EmailJS production config lives in `.env.production` and is inlined at build time.

### Verify deployment

With the dev server running locally:

```bash
npm run audit:site
```

Against production:

```bash
$env:SITE_URL="https://www.apconsultancy.in"; npm run audit:site
```
