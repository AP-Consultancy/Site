import { NavLink, Outlet } from "react-router-dom";
import "./DashboardLayout.css";

const navItems = [
  { to: "/dashboard/home", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/dashboard/settings", label: "Settings" },
];

export default function DashboardLayout() {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="dashboard-brand">Dashboard</div>
        <nav className="dashboard-nav" aria-label="Dashboard navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `dashboard-link${isActive ? " active" : ""}`
              }
            >
              {item.label}
            </NavLink>
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
