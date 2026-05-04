import { Outlet } from "react-router-dom";
import { LiveWallpaper, SiteFooter, SiteHeader } from "../components";

export default function RootLayout() {
  return (
    <div className="site-shell">
      <LiveWallpaper />

      <div className="page-content">
        <SiteHeader />

        <main>
          <Outlet />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}