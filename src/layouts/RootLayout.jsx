import { Outlet } from "react-router-dom";
import { ScrollToTop, SiteFooter, SiteHeader } from "../components";

export default function RootLayout() {
  return (
    <div className="site-shell">
      <div className="page-content">
        <ScrollToTop />
        <SiteHeader />

        <main>
          <Outlet />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}