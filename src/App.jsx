import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
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
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/client-work" element={<PortfolioClientWorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/devresources" element={<Navigate to="/" replace />} />
          <Route path="/developers" element={<Navigate to="/" replace />} />
          <Route path="/careers" element={<Navigate to="/about" replace />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/case-studies" element={<Navigate to="/portfolio" replace />} />
          <Route path="/services/:slug" element={<Navigate to="/services" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
