import "./App.css";
import {
  AboutSection,
  CaseStudiesSection,
  CtaSection,
  HeroSection,
  IndustriesSection,
  LiveWallpaper,
  ProcessSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  StatsSection,
  WhyChooseSection,
} from "./components";
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