import { NavLink, Outlet } from "react-router-dom";
import "./DashboardLayout.css";

const servicesUiUrl = "http://localhost:5174/";

const navItems = [
  { type: "internal", to: "/dashboard/home", label: "Home" },
  { type: "external", href: servicesUiUrl, label: "Services" },
  { type: "internal", to: "/dashboard/settings", label: "Settings" },
];

export default function DashboardLayout() {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="dashboard-brand">Dashboard</div>
        <nav className="dashboard-nav" aria-label="Dashboard navigation">
          {navItems.map((item) => (
            item.type === "external" ? (
              <a key={item.label} href={item.href} className="dashboard-link">
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `dashboard-link${isActive ? " active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
        </nav>
      </aside>

      <div className="dashboard-main">
        <header className="dashboard-topbar">
          <h1>App Dashboard</h1>
        </header>
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
