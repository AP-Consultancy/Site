import { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  Wrapper,
  HeroSection,
  HeroInner,
  HeroCopy,
  HeroLogoStrip,
  HeroLogoMarquee,
  HeroLogoTrack,
  HeroLogoGroup,
  HeroLogoItem,
  LogoCollage,
  HeroCollageMotion,
  LogoCard,
} from "./style";
import { CustomerStoriesSection } from "./components/CustomerStoriesSection";
import { defaultClientShowcaseData } from "./data/defaultClientShowcaseData";
import TechStackSection from "./components/TechStackSection";
import { techData } from "./data/techData";
import logoStrip from "./data/logoStrip.json";
import { assetUrl } from "./utils/assetUrl";

const heroEase = [0.22, 1, 0.36, 1];

const clientShowcaseData = {
  ...defaultClientShowcaseData,
  storiesLink: { href: "/portfolio/client-work", label: "View all client work →" },
};

export default function PortfolioHome({ showHeroLogo = false }) {
  const [heroCollageKey, setHeroCollageKey] = useState(0);

  const replayHeroCollage = () => setHeroCollageKey((k) => k + 1);

  const handleHeroWheel = (e) => {
    const threshold = 28;
    const dx = e.deltaX;
    const shiftDx = e.shiftKey ? e.deltaY : 0;
    const effectiveDx = Math.abs(dx) > Math.abs(shiftDx) ? dx : shiftDx;
    if (effectiveDx < -threshold) replayHeroCollage();
  };

  const [heroTouchStartX, setHeroTouchStartX] = useState(null);
  const onHeroTouchStart = (e) => setHeroTouchStartX(e.touches?.[0]?.clientX ?? null);
  const onHeroTouchEnd = (e) => {
    const endX = e.changedTouches?.[0]?.clientX;
    if (heroTouchStartX == null || endX == null) return;
    const dx = endX - heroTouchStartX;
    if (dx > 40) replayHeroCollage();
    setHeroTouchStartX(null);
  };

  const logoUrls = (Array.isArray(logoStrip) ? logoStrip : []).map((src) => assetUrl(src));
  const hasStripLogos = logoUrls.length > 0;

  return (
    <Wrapper>
      <HeroSection>
        {showHeroLogo ? (
          <div className="hero-logo">
            <img
              src={assetUrl("/logo/ap-white.png")}
              alt="AP Consultancy"
              style={{ height: "36px", width: "auto" }}
            />
          </div>
        ) : null}
        <HeroInner onWheel={handleHeroWheel} onTouchStart={onHeroTouchStart} onTouchEnd={onHeroTouchEnd}>
          <Motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: heroEase }}
          >
            <HeroCopy>
              <span className="line1">Engineered for scale.</span>
              <span className="line2">Trusted by millions of</span>
              <span className="line3">Growing Enterprises.</span>
            </HeroCopy>
          </Motion.div>

          <HeroCollageMotion
            key={heroCollageKey}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.05, ease: heroEase }}
          >
            <LogoCollage>
              <LogoCard className="card-1">
                <img src={assetUrl("/salesforce.png")} alt="Salesforce" />
              </LogoCard>
              <LogoCard className="card-2">
                <img src={assetUrl("/uplevyl.png")} alt="Uplevyl" />
              </LogoCard>
              <LogoCard className="card-3">
                <img src={assetUrl("/nike.png")} alt="Nike" />
              </LogoCard>
              <LogoCard className="card-4">
                <img src={assetUrl("/astrazeneca.png")} alt="AstraZeneca" />
              </LogoCard>
            </LogoCollage>
          </HeroCollageMotion>
        </HeroInner>
      </HeroSection>

      {hasStripLogos ? (
        <HeroLogoStrip aria-hidden>
          <HeroLogoMarquee>
            <HeroLogoTrack>
              <HeroLogoGroup>
                {logoUrls.map((src, idx) => (
                  <HeroLogoItem key={`${src}-${idx}`}>
                    <img src={src} alt="" loading="lazy" draggable={false} />
                  </HeroLogoItem>
                ))}
              </HeroLogoGroup>
              <HeroLogoGroup aria-hidden>
                {logoUrls.map((src, idx) => (
                  <HeroLogoItem key={`${src}-${idx}-dup`}>
                    <img src={src} alt="" loading="lazy" draggable={false} />
                  </HeroLogoItem>
                ))}
              </HeroLogoGroup>
            </HeroLogoTrack>
          </HeroLogoMarquee>
        </HeroLogoStrip>
      ) : null}

      <CustomerStoriesSection {...clientShowcaseData} />
      <TechStackSection data={techData} />
    </Wrapper>
  );
}
