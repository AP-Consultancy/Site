import "./App.css";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LiveWallpaper, SiteFooter, SiteHeader } from "./components";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const servicesUiUrl = "http://127.0.0.1:5174/#services";

function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
}

export default function App() {
  return (
    <div className="site-shell">
      <LiveWallpaper />
      <SiteHeader servicesHref={servicesUiUrl} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ExternalRedirect to={servicesUiUrl} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
