import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const DevResourcesPage = lazy(() => import("./pages/DevResourcesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("./pages/ServiceDetailPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const PortfolioClientWorkPage = lazy(() => import("./pages/PortfolioClientWorkPage"));

function RouteFallback() {
  return <div className="route-fallback" aria-hidden="true" />;
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/devresources" element={<DevResourcesPage />} />
          <Route path="/developers" element={<DevResourcesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/blog" element={<Navigate to="/portfolio" replace />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/case-studies" element={<PortfolioPage />} />
          <Route path="/portfolio/client-work" element={<PortfolioClientWorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
