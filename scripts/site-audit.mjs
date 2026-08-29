import { chromium, devices } from "@playwright/test";

const BASE = process.env.SITE_URL || "http://localhost:5173";

const ROUTES = [
  "/",
  "/about",
  "/about-us",
  "/services",
  "/services/ecommerce",
  "/services/devops-cloud-security",
  "/services/agentic-ai-software",
  "/portfolio",
  "/case-studies",
  "/portfolio/client-work",
  "/devresources",
  "/developers",
  "/contact",
  "/contact?intent=vendor",
  "/contact?intent=talent",
  "/careers",
  "/blog",
];

async function auditViewport(browser, label, viewport) {
  const context = await browser.newContext(viewport);
  const page = await context.newPage();
  const issues = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      issues.push({ route: page.url(), type: "console", message: msg.text() });
    }
  });

  page.on("pageerror", (err) => {
    issues.push({ route: page.url(), type: "pageerror", message: err.message });
  });

  page.on("response", (res) => {
    const status = res.status();
    if (status >= 400 && !res.url().includes("favicon")) {
      issues.push({
        route: page.url(),
        type: "http",
        message: `${status} ${res.url()}`,
      });
    }
  });

  for (const route of ROUTES) {
    const url = `${BASE}${route}`;
    const started = Date.now();
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      const elapsed = Date.now() - started;
      const title = await page.title();
      const h1 = await page.locator("h1").first().textContent().catch(() => "");
      if (elapsed > 4000) {
        issues.push({
          route: url,
          type: "slow",
          message: `Loaded in ${elapsed}ms`,
        });
      }
      if (!title || title.trim().length < 3) {
        issues.push({ route: url, type: "meta", message: "Missing document title" });
      }
      if (!h1 || !h1.trim()) {
        issues.push({ route: url, type: "a11y", message: "Missing h1" });
      }
      if (route === "/blog" && !page.url().includes("/portfolio")) {
        issues.push({ route: url, type: "redirect", message: `/blog did not redirect (${page.url()})` });
      }
    } catch (err) {
      issues.push({ route: url, type: "navigation", message: err.message });
    }
  }

  if (label === "mobile") {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
    const menu = page.getByRole("button", { name: /menu|open navigation/i });
    if (await menu.count()) {
      await menu.first().click();
      const navLink = page.getByRole("link", { name: /contact/i }).first();
      if (!(await navLink.isVisible())) {
        issues.push({ route: `${BASE}/`, type: "mobile", message: "Mobile menu did not reveal Contact link" });
      }
    }
  }

  await context.close();
  return issues;
}

const browser = await chromium.launch();
const desktopIssues = await auditViewport(browser, "desktop", { viewport: { width: 1280, height: 800 } });
const mobileIssues = await auditViewport(browser, "mobile", devices["iPhone 13"]);
await browser.close();

const all = [...desktopIssues, ...mobileIssues];
const grouped = all.reduce((acc, item) => {
  const key = `${item.type}:${item.message}`;
  acc[key] = acc[key] ?? { ...item, count: 0 };
  acc[key].count += 1;
  return acc;
}, {});

console.log(JSON.stringify({ base: BASE, issueCount: all.length, issues: Object.values(grouped) }, null, 2));
process.exit(all.length ? 1 : 0);
