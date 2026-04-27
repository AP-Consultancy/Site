import {
  CaseStudiesSection,
  CtaSection,
  HeroSection,
  IndustriesSection,
  ProcessSection,
  ServicesSection,
  WhyChooseSection,
} from "../components";
import {
  caseStudies,
  industryCards,
  processBoard,
  processSteps,
  services,
  whyChoose,
} from "../data/siteContent";

export default function ServicesPage() {
  return (
    <>
      <HeroSection />
      <ServicesSection services={services} />
      <ProcessSection processSteps={processSteps} processBoard={processBoard} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <IndustriesSection industryCards={industryCards} />
      <WhyChooseSection whyChoose={whyChoose} />
      <CtaSection />
    </>
  );
}
