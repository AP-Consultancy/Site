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
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_ADMIN_TEMPLATE_ID=your_admin_template_id
VITE_EMAILJS_USER_TEMPLATE_ID=your_user_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_RECEIVER_EMAIL=Info@apconsultancy.in
```

If all EmailJS variables above are set, EmailJS is used. If not, the app falls back to `VITE_CONTACT_ENDPOINT`.

### 2) Admin Template Format (EmailJS)

Use this for `VITE_EMAILJS_ADMIN_TEMPLATE_ID`:

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

### 3) User Acknowledgement Template Format (EmailJS)

Use this for `VITE_EMAILJS_USER_TEMPLATE_ID`:

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
