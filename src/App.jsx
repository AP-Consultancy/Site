import "./App.css";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LiveWallpaper, ServicesModal, SiteFooter, SiteHeader } from "./components";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const openServices = () => setIsServicesOpen(true);
  const closeServices = () => setIsServicesOpen(false);

  return (
    <div className="site-shell">
      <LiveWallpaper />
      <SiteHeader onServicesClick={openServices} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onServicesClick={openServices} />} />
          <Route path="/services" element={<ServicesPage onServicesClick={openServices} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <SiteFooter />
      <ServicesModal isOpen={isServicesOpen} onClose={closeServices} />
    </div>
  );
}
