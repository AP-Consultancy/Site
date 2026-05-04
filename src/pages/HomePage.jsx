import {
  AboutSection,
  CaseStudiesSection,
  CtaSection,
  HeroSection,
  IndustriesSection,
  ProcessSection,
  ServicesSection,
  StatsSection,
  WhyChooseSection,
} from "../components";
import { useLocation } from "react-router-dom";
import {
  caseStudies,
  industryCards,
  processBoard,
  processSteps,
  services,
  trustStats,
  whyChoose,
} from "../data/siteContent";

export default function HomePage() {
  const location = useLocation();

  // useEffect(() => {
  //   if (location.hash) {
  //     const id = location.hash.replace("#", "");
  //     // small delay to ensure section is mounted
  //     setTimeout(() => {
  //       const el = document.getElementById(id);
  //       if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }, 60);
  //   } else {
  //     // optionally scroll to top when navigating to home without hash
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // }, [location]);
  return (
    <div style={{margin: "0 auto", maxWidth: "1200px"}}>
    
      <HeroSection />
      <AboutSection />
      <StatsSection trustStats={trustStats} />
      <ServicesSection services={services} />
      <ProcessSection processSteps={processSteps} processBoard={processBoard} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <IndustriesSection industryCards={industryCards} />
      <WhyChooseSection whyChoose={whyChoose} />
      <CtaSection />
    </div>
  );
}
