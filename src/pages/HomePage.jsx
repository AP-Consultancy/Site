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
import {
  caseStudies,
  industryCards,
  processBoard,
  processSteps,
  services,
  trustStats,
  whyChoose,
} from "../data/siteContent";

export default function HomePage({ onServicesClick }) {
  return (
    <>
      <HeroSection onServicesClick={onServicesClick} />
      <AboutSection />
      <StatsSection trustStats={trustStats} />
      <ServicesSection services={services} />
      <ProcessSection processSteps={processSteps} processBoard={processBoard} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <IndustriesSection industryCards={industryCards} />
      <WhyChooseSection whyChoose={whyChoose} />
      <CtaSection />
    </>
  );
}
