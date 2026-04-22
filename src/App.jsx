import "./App.css";
import AboutSection from "./components/AboutSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import CtaSection from "./components/CtaSection";
import HeroSection from "./components/HeroSection";
import IndustriesSection from "./components/IndustriesSection";
import LiveWallpaper from "./components/LiveWallpaper";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import StatsSection from "./components/StatsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import {
  caseStudies,
  industryCards,
  processBoard,
  processSteps,
  services,
  trustStats,
  whyChoose,
} from "./data/siteContent";

export default function App() {
  return (
    <div className="site-shell">
      <LiveWallpaper />
      <SiteHeader />

      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection trustStats={trustStats} />
        <ServicesSection services={services} />
        <ProcessSection processSteps={processSteps} processBoard={processBoard} />
        <CaseStudiesSection caseStudies={caseStudies} />
        <IndustriesSection industryCards={industryCards} />
        <WhyChooseSection whyChoose={whyChoose} />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}