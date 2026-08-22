import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const colors = {
  bgHero: "#000000",
  bgSection: "#2a2a2a",
  bgFooter: "#141414",
  /** Tech stack band — near-black panel */
  techPanel: "#1a1a1a",
  text: "#ffffff",
  textMuted: "rgba(255, 255, 255, 0.7)",
  textSubtle: "rgba(255, 255, 255, 0.55)",
  accent: "#ff2b2b",
  borderSubtle: "rgba(255, 255, 255, 0.1)",
};

export const Wrapper = styled.div`
  font-family: "Montserrat", system-ui, sans-serif;
  background: ${colors.bgHero};
  color: ${colors.text};
  overflow-x: hidden;
  min-height: 100vh;
  min-height: -webkit-fill-available;

  ${({ theme }) =>
    theme?.embedded &&
    css`
      padding-top: 72px;

      @media (max-width: 920px) {
        padding-top: max(64px, calc(env(safe-area-inset-top, 0px) + 56px));
      }
    `}

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      padding-left: max(1rem, env(safe-area-inset-left, 0px));
      padding-right: max(1rem, env(safe-area-inset-right, 0px));
    `}
`;

export const HeroSection = styled.section`
  --hero-pad-x: clamp(1.25rem, 4vw, 4rem);

  padding: clamp(1.25rem, 4vw, 2.5rem) var(--hero-pad-x) clamp(1.25rem, 4vw, 2.75rem);
  min-height: 90vh;
  background: ${colors.bgHero};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1100px) {   
    min-height: auto;
    padding: 2.5rem 2rem 2.5rem;
  }

  @media (max-width: 640px) {
    padding: 1.1rem 1.05rem 4.4rem;
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      padding-top: max(0.75rem, env(safe-area-inset-top, 0px));
      padding-bottom: 2.75rem;
      min-height: unset;
    `}

  ${({ theme }) =>
    theme?.embedded &&
    theme?.isMobile &&
    css`
      min-height: auto;
      padding-bottom: 2rem;
    `}
`;
export const HeroInner = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.25rem, 4vw, 2.25rem);
  align-items: center;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.08fr);
    gap: clamp(1.25rem, 2.2vw, 2rem);
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      align-items: center;
      justify-items: center;
      text-align: center;
      gap: 1.75rem;
    `}
`;

export const HeroLogoStrip = styled.div`
  text-align: center;
  margin-top: clamp(1.5rem, 4vw, 2.125rem);
  margin-bottom: clamp(4rem, 14vw, 6.875rem);
`;

/** Matches apconsultancy.in hero logo ticker (.hx-logo-marquee / .hx-logo-track) */
export const HeroLogoMarquee = styled.div`
  --strip-gap: 52px;

  position: relative;
  margin-top: 18px;
  width: min(860px, 100%);
  margin-inline: auto;

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      width: 100%;
      max-width: 100%;
      margin-top: 12px;
      -webkit-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 8% 92%,
        transparent
      );
      mask-image: linear-gradient(90deg, transparent, #000 8% 92%, transparent);
    `}
  overflow: hidden;
  padding: 0;
  background: transparent;
  border: none;

  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 12% 88%,
    transparent
  );
  mask-image: linear-gradient(90deg, transparent, #000 12% 88%, transparent);
`;

export const HeroLogoTrack = styled.div`
  display: flex;
  width: max-content;
  will-change: transform;
  align-items: center;
  gap: var(--strip-gap);
  color: #e2e2e2;
  opacity: 0.85;
  font-weight: 500;
  animation: marquee-left-to-right 18s linear infinite;

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      --strip-gap: 36px;
      gap: var(--strip-gap);
      animation-duration: 28s;
    `}

  @keyframes marquee-left-to-right {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: none;
    opacity: 1;
  }
`;

export const HeroLogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: var(--strip-gap);
  padding-right: var(--strip-gap);
`;

export const HeroLogoItem = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    object-fit: contain;
    width: auto;
    max-width: 170px;
    height: auto;
    min-height: 40px;
    max-height: 40px;
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      img {
        max-width: min(140px, 38vw);
        min-height: 32px;
        max-height: 34px;
      }
    `}
`;

export const HeroCopy = styled.div`
  text-align: left;
  font-family: "Figtree", "Montserrat", system-ui, sans-serif;

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      text-align: center;
      margin-inline: auto;
      max-width: min(22rem, 92vw);
    `}

  .line1,
  .line2 {
    display: block;
    font-size: clamp(1.65rem, 3.5vw, 2.65rem);
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1.12;
    color: ${colors.text};
  }

  .line3 {
    display: block;
    margin-top: 0.45rem;
    font-size: clamp(2.35rem, 5.2vw, 2.75rem);
    font-weight: 800;
    letter-spacing: 0.03em;
    line-height: 1.05;
    color: ${colors.accent};
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      .line1,
      .line2 {
        font-size: clamp(1.35rem, 5.2vw, 1.85rem);
        line-height: 1.18;
      }
      .line3 {
        font-size: clamp(1.75rem, 7vw, 2.25rem);
        margin-top: 0.35rem;
      }
    `}
`;

/* Balanced floating collage: diagonal flow TL → BR, intentional offsets + z-index */
export const LogoCollage = styled.div`
  --collage-pad: clamp(6px, 1.8vw, 14px);
  --card-w: 36%;
  --shadow-back: 0 10px 28px rgba(0, 0, 0, 0.35);
  --shadow-mid: 0 14px 36px rgba(0, 0, 0, 0.42);
  --shadow-main: 0 20px 48px rgba(0, 0, 0, 0.5);

  position: relative;
  width: 100%;
  height: 100%;
  max-width: min(520px, 100%);
  margin: 0 auto;
  padding: var(--collage-pad);
  box-sizing: border-box;
  min-height: clamp(300px, 78vw, 420px);
  isolation: isolate;
  overflow: visible;

  @media (max-width: 640px) {
    overflow: hidden;
  }

  @media (min-width: 480px) {
    --card-w: 34%;
    min-height: clamp(320px, 56vw, 440px);
  }

  @media (min-width: 960px) {
    max-width: 340px;
    margin: 0 0 0 auto;
    min-height: clamp(252px, 66vw, 330px);
    overflow: visible;
    transform: scale(1.32);
    transform-origin: top right;
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      max-width: min(100%, 380px);
      min-height: clamp(260px, 72vw, 340px);
      margin-inline: auto;
    `}
`;

// export const HeroCollageMotion = styled(motion.div)`
//   position: relative;
//   width: 100%;
//   max-width: min(520px, 100%);
//   margin: 0 auto;

//   @media (min-width: 960px) {
//     max-width: 540px;
//     margin: 0 0 0 auto;
//   }
// `;

// export const LogoCard = styled(motion.div)`
//   position: absolute;
//   width: var(--card-w);
//   aspect-ratio: 4 / 5;
//   border-radius: clamp(18px, 4vw, 26px);
//   overflow: hidden;
//   background: #fff;
//   transition: box-shadow 0.28s ease, transform 0.28s ease;
//   will-change: transform;

//   img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   /* card-1 — left, slightly lower than main (diagonal start) */
//   &.card-1 {
//     top: clamp(22%, 20vw, 30%);
//     left: var(--collage-pad);
//     z-index: 4;
//     box-shadow: var(--shadow-mid);
//     transform: rotate(-1.75deg);
//   }

//   /* card-2 — main hero, centered & elevated (highest z) */
//   &.card-2 {
//     top: clamp(5%, 3vw, 9%);
//     left: 50%;
//     z-index: 6;
//     background: #ffd4cc;
//     box-shadow: var(--shadow-main);
//     transform: translateX(-50%) rotate(0.75deg);
//   }

//   /* card-3 — bottom center, behind others */
//   &.card-3 {
//     bottom: var(--collage-pad);
//     left: 50%;
//     top: auto;
//     z-index: 1;
//     background: #1a2744;
//     box-shadow: var(--shadow-back);
//     transform: translateX(-50%) rotate(-1.25deg);
//   }

//   /*
//    * card-4 — right, partially past edge (~72% in-frame = >40% visible).
//    * Diagonal flow toward BR; kept deliberately modest overlap with main.
//    */
//   &.card-4 {
//     top: clamp(24%, 22vw, 32%);
//     right: var(--collage-pad);
//     z-index: 3;
//     box-shadow: var(--shadow-mid);
//     transform: translateX(28%) rotate(1.75deg);
//   }

//   &.card-1:hover,
//   &.card-2:hover,
//   &.card-3:hover,
//   &.card-4:hover {
//     box-shadow: 0 22px 52px rgba(25, 15, 45, 0.26);
//   }

//   &.card-1:hover {
//     transform: rotate(-1.75deg) scale(1.02);
//   }
//   &.card-2:hover {
//     transform: translateX(-50%) rotate(0.75deg) scale(1.02);
//   }
//   &.card-3:hover {
//     transform: translateX(-50%) rotate(-1.25deg) scale(1.02);
//   }
//   &.card-4:hover {
//     transform: translateX(28%) rotate(1.75deg) scale(1.02);
//   }

//   @media (max-width: 479px) {
//     --card-w: 38%;
//   }
// `;

export const CaseSection = styled.section`
  position: relative;
  z-index: 1;
  background: ${colors.bgSection};
  border-radius: clamp(40px, 8vw, 72px) clamp(40px, 8vw, 72px) 0 0;
  padding: clamp(3.5rem, 7vw, 5.75rem) clamp(1.25rem, 4vw, 4rem)
    clamp(4rem, 8vw, 6rem);
  margin-top: clamp(-2rem, -3vw, -1.25rem);
  box-shadow: 0 -12px 48px rgba(0, 0, 0, 0.45);
`;

export const CaseInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const CaseHeading = styled.div`
  text-align: left;
  margin-bottom: clamp(2rem, 4vw, 3rem);

  .sub {
    display: block;
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    font-weight: 500;
    line-height: 1.35;
    color: ${colors.text};
    max-width: 28ch;
  }

  .emph {
    display: block;
    margin-top: 0.5rem;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.15;
    color: ${colors.text};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 3rem);
  align-items: start;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: clamp(2.5rem, 5vw, 4rem);
    align-items: stretch;
  }
`;

export const TextBlock = styled.div`
  text-align: left;
  max-width: 420px;

  p {
    margin: 0 0 1.5rem;
    font-size: clamp(0.95rem, 1.5vw, 1.05rem);
    font-weight: 400;
    line-height: 1.65;
    color: ${colors.text};
  }

  .label {
    font-weight: 700;
    font-size: 1.05em;
  }
`;

export const PropicCard = styled(motion.div)`
  position: relative;
  border-radius: clamp(28px, 4vw, 48px);
  overflow: hidden;
  min-height: 280px;
  background: linear-gradient(
    165deg,
    #4a9ae8 0%,
    #5a6fd8 28%,
    #7b4ec4 62%,
    #9a5cb8 100%
  );
  box-shadow: 0 24px 50px rgba(60, 40, 120, 0.28);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.12) 0%,
        transparent 45%
      ),
      radial-gradient(
        ellipse 90% 60% at 50% 100%,
        rgba(30, 40, 80, 0.35) 0%,
        transparent 65%
      );
    pointer-events: none;
  }
`;

export const PropicSkyline = styled.div`
  position: absolute;
  bottom: 22%;
  left: 0;
  right: 0;
  height: 42%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 4%;
  padding: 0 8%;
  opacity: 0.85;
  pointer-events: none;

  span {
    display: block;
    background: rgba(255, 255, 255, 0.22);
    border-radius: 4px 4px 0 0;
    width: 12%;
    min-height: 35%;
  }

  span:nth-child(1) {
    height: 55%;
  }
  span:nth-child(2) {
    height: 80%;
    width: 14%;
  }
  span:nth-child(3) {
    height: 65%;
  }
  span:nth-child(4) {
    height: 95%;
    width: 16%;
  }
  span:nth-child(5) {
    height: 70%;
  }
`;

export const PropicTitle = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: clamp(2rem, 5vw, 2.75rem) 1.5rem 0.5rem;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 800;
  letter-spacing: 0.02em;
  color: #0a0a0a;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0;
`;

export const PropicI = styled.span`
  position: relative;
  display: inline-block;
  margin: 0 1px;
`;

export const PropicDots = styled.span`
  position: absolute;
  left: 50%;
  bottom: calc(100% + 4px);
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
  justify-content: center;

  i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: block;
  }

  i:nth-child(1) {
    background: #3ddc84;
  }
  i:nth-child(2) {
    background: #ff9f43;
  }
  i:nth-child(3) {
    background: #e040fb;
  }
`;

export const PropicBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: clamp(1rem, 2.5vw, 1.35rem) clamp(1.25rem, 3vw, 1.75rem);
  background: rgba(15, 12, 28, 0.62);
  backdrop-filter: blur(6px);

  p {
    margin: 0;
    font-size: clamp(0.85rem, 1.4vw, 0.95rem);
    font-weight: 500;
    line-height: 1.5;
    color: #ffffff;
    text-align: center;
  }
`;

export const BottomSection = styled.section`
  position: relative;
  z-index: 2;
  background: ${colors.bgFooter};
  border-radius: clamp(36px, 7vw, 64px) clamp(36px, 7vw, 64px) 0 0;
  min-height: clamp(100px, 18vw, 160px);
  margin-top: clamp(-1.5rem, -2.5vw, -0.75rem);
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.35);
`;

export const StoriesSection = styled.section`
  position: relative;
  z-index: 1;
  background: ${colors.bgHero};
  color: ${colors.text};
  border-radius: clamp(40px, 8vw, 72px) clamp(40px, 8vw, 72px) 0 0;
  padding: clamp(3.5rem, 7vw, 5.5rem) clamp(1.25rem, 4vw, 4rem);
  margin-top: 0;
  box-shadow: 0 -12px 48px rgba(0, 0, 0, 0.45);

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      padding-left: max(1rem, env(safe-area-inset-left, 0px));
      padding-right: max(1rem, env(safe-area-inset-right, 0px));
      padding-bottom: max(2.5rem, env(safe-area-inset-bottom, 0px));
      border-radius: clamp(28px, 8vw, 48px) clamp(28px, 8vw, 48px) 0 0;
    `}
`;

export const StoriesInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 3vw, 2rem);
`;

export const StoriesBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 5vw, 3.5rem);
  align-items: end;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.45fr);
  }

  @media (max-width: 640px) {
    align-items: start;
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      gap: 1.5rem;
    `}
`;

export const StoriesLeft = styled.div`
  text-align: left;
  max-width: 460px;

  @media (max-width: 640px) {
    max-width: none;
    width: 100%;
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      order: 0;
    `}
`;

export const Eyebrow = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${colors.accent};
  margin-bottom: 0.9rem;
`;

export const StoriesTitle = styled.h2`
  margin: 0;
  width: 100%;
  font-size: clamp(0.95rem, 2.8vw, 2rem);
  line-height: 1.15;
  letter-spacing: -0.03em;
  font-weight: 800;
  color: ${colors.text};

  @media (min-width: 960px) {
    white-space: nowrap;
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      font-size: clamp(0.82rem, 3.8vw, 1.05rem);
      line-height: 1.35;
      white-space: normal;
    `}
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin: 0.25rem 0 2rem;
  flex-wrap: wrap;

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      gap: 0.55rem;
      margin-bottom: 1.25rem;
      padding-bottom: 4px;

      &::-webkit-scrollbar {
        display: none;
      }
    `}
`;

export const Tab = styled.button`
  appearance: none;
  border: 1px solid
    ${(p) => (p["data-active"] ? colors.accent : colors.borderSubtle)};
  background: ${(p) => (p["data-active"] ? colors.accent : "transparent")};
  color: ${(p) => (p["data-active"] ? "#ffffff" : colors.textSubtle)};
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease, color 120ms ease,
    border-color 120ms ease;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-1px);
    color: ${(p) => (p["data-active"] ? "#ffffff" : colors.text)};
    border-color: ${(p) =>
      p["data-active"] ? colors.accent : "rgba(255, 255, 255, 0.22)"};
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      font-size: 0.8rem;
      padding: 0.45rem 0.72rem;
    `}
`;

export const StoriesLink = styled.a`
  color: ${colors.accent};
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  margin-left: 0.25rem;
  flex-shrink: 0;

  &:hover {
    text-decoration: underline;
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      margin-left: 0;
      font-size: 0.84rem;
    `}
`;

export const PageShell = styled.div`
  font-family: "Montserrat", system-ui, sans-serif;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  background: ${colors.bgHero};
  color: ${colors.text};
  padding: clamp(1.1rem, 3vw, 2.2rem);
  overflow-x: hidden;

  ${({ theme }) =>
    theme?.embedded &&
    css`
      padding-top: calc(72px + clamp(1.1rem, 3vw, 2.2rem));

      @media (max-width: 920px) {
        padding-top: calc(max(64px, env(safe-area-inset-top, 0px) + 56px) + 1rem);
      }
    `}

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      padding-left: max(1rem, env(safe-area-inset-left, 0px));
      padding-right: max(1rem, env(safe-area-inset-right, 0px));
      padding-bottom: max(1.1rem, env(safe-area-inset-bottom, 0px));
    `}
`;

export const PageHeader = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0.25rem 0 1.2rem;
`;

/** Client work page: header offset below floating logo */
export const ClientWorkHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  width: 100%;

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    `}
`;

export const ClientPageHeader = styled(PageHeader)`
  margin-top: 5rem;

  ${({ theme }) =>
    theme?.embedded &&
    css`
      margin-top: 1.5rem;
    `}

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      margin-top: max(1rem, calc(env(safe-area-inset-top, 0px) + 0.5rem));
    `}
`;

/** Top-left brand slot with safe-area insets on notched phones */
export const ClientBrandSlot = styled.div`
  position: absolute;
  top: 20px;
  left: 24px;
  z-index: 10;

  img {
    display: block;
    height: clamp(44px, 5vw, 56px);
    width: auto;
  }

  ${({ theme }) =>
    theme?.embedded &&
    css`
      display: none;
    `}

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      top: max(14px, env(safe-area-inset-top, 0px));
      left: max(14px, env(safe-area-inset-left, 0px));

      img {
        height: 40px;
      }
    `}
`;

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: ${colors.text};
  text-decoration: none;
  opacity: 0.92;
  margin-bottom: 1rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid ${colors.borderSubtle};
  backdrop-filter: blur(10px);
  transition: transform 140ms ease, opacity 140ms ease, background 140ms ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: clamp(1.8rem, 4.4vw, 3.2rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
  font-weight: 900;
  color: ${colors.text};
`;

export const PageSub = styled.p`
  margin: 0.65rem 0 0;
  max-width: 62ch;
  font-size: 1.05rem;
  line-height: 1.45;
  color: ${colors.textMuted};
`;

export const ClientGrid = styled.div`
  max-width: 1180px;
  margin: 1.25rem auto 0;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.05rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.2rem;
  }

  @media (min-width: 1040px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }
`;

export const ClientCard = styled.div`
  border-radius: 22px;
  overflow: hidden;
  background: ${colors.bgSection};
  border: 1px solid ${colors.borderSubtle};
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
  transform: translateZ(0);
`;

export const ClientCardMedia = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  background: radial-gradient(
      600px 240px at 20% 20%,
      rgba(111, 95, 220, 0.25),
      rgba(255, 255, 255, 0) 55%
    ),
    radial-gradient(
      520px 260px at 85% 30%,
      rgba(34, 197, 94, 0.18),
      rgba(255, 255, 255, 0) 58%
    ),
    linear-gradient(135deg, #0b1220, #111827);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(1.05) contrast(1.03);
    transform: translateZ(0);
  }

  .mediaOverlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(15, 23, 42, 0.05),
      rgba(15, 23, 42, 0.55)
    );
    pointer-events: none;
  }

  .mediaCaption {
    position: absolute;
    left: 1rem;
    bottom: 0.9rem;
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.55rem 0.8rem;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid ${colors.borderSubtle};
    backdrop-filter: blur(12px);
    font-weight: 600;
    color: ${colors.text};
    letter-spacing: -0.02em;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 4px;
    background: ${colors.accent};
    box-shadow: 0 12px 30px rgba(255, 43, 43, 0.35);
  }
`;

export const ClientCardBody = styled.div`
  padding: 1rem 1.05rem 1.15rem;
`;

export const ClientCardTitle = styled.h3`
  margin: 0;
  font-size: 1.08rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  color: ${colors.text};
  line-height: 1.15;
`;

export const ClientCardDesc = styled.p`
  margin: 0.55rem 0 0;
  font-size: 0.95rem;
  line-height: 1.45;
  color: ${colors.textMuted};
`;

export const ClientCardChips = styled.div`
  margin-top: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Chip = styled.span`
  font-size: 0.82rem;
  font-weight: 800;
  color: ${colors.text};
  background: rgba(255, 43, 43, 0.12);
  border: 1px solid rgba(255, 43, 43, 0.28);
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.35rem;
  margin-top: 0.25rem;
`;

export const StatNumber = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${colors.text};
  letter-spacing: -0.02em;
`;

export const StatLabel = styled.div`
  margin-top: 0.35rem;
  font-size: 0.92rem;
  color: ${colors.textMuted};
  line-height: 1.35;
  max-width: 30ch;
`;

export const ProductsUsed = styled.div`
  margin-top: 1.75rem;

  .title {
    font-size: 0.95rem;
    font-weight: 800;
    color: ${colors.text};
    margin-bottom: 0.75rem;
  }
`;

export const ProductList = styled.div`
  display: grid;
  gap: 0.55rem;
  font-size: 0.95rem;
  color: ${colors.textMuted};
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 4px;
    background: var(--c, #60a5fa);
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12);
  }
`;

export const StoriesRight = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 960px) {
    justify-content: flex-end;
  }

  @media (max-width: 640px) {
    justify-content: center;
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      order: -1;
    `}
`;

export const StoryCard = styled(motion.div)`
  position: relative;
  width: min(740px, 100%);
  height: clamp(300px, 30vw, 400px);
  border-radius: 13px;
  overflow: hidden;
//   box-shadow: 0 22px 60px rgba(15, 23, 42, 0.25);

  background: url(${(p) => p.bg}) center/cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    // background: radial-gradient(
    //     ellipse 80% 70% at 50% 20%,
    //     rgba(253, 253, 253, 0.18) 0%,
    //     transparent 55%
    //   ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.35) 100%);
  }

  .brand {
    position: absolute;
    top: 18px;
    left: 18px;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-weight: 800;
    letter-spacing: -0.02em;
    text-transform: lowercase;
  }

  .brandMark {
    width: 12px;
    height: 12px;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .bookmark {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: rgba(255, 255, 255, 0.14);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    backdrop-filter: blur(6px);
    font-weight: 900;
  }

  .caption {
    position: absolute;
    left: 22px;
    right: 22px;
    bottom: 22px;
    z-index: 2;
    color: #fff;
    font-weight: 800;
    font-size: clamp(1.05rem, 2.1vw, 1.35rem);
    line-height: 1.25;
    max-width: 44ch;
    text-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 640px) {
    height: clamp(220px, 62vw, 320px);
    border-radius: 16px;
    background-position: top center;

    .caption {
      left: 16px;
      right: 16px;
      bottom: 16px;
      max-width: 100%;
    }
  }
`;

export const HeroCollageMotion = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 520px;
  height: clamp(360px, 42vw, 480px);
  margin: 0 auto;
  overflow: visible;

  @media (max-width: 640px) {
    overflow: hidden;
    height: clamp(280px, 70vw, 360px);
    max-width: 340px;
  }

  @media (min-width: 641px) and (max-width: 959px) {
    height: clamp(320px, 46vw, 420px);
    max-width: 420px;
  }

  @media (min-width: 960px) {
    max-width: 340px;
    height: clamp(252px, 66vw, 330px);
    margin-left: auto;
    margin-right: 0;
    overflow: visible;
  }

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      max-width: min(340px, 92vw);
      height: clamp(252px, 66vw, 330px);
    `}
`;

export const LogoCard = styled.div`
  position: absolute;
  width: clamp(120px, 13vw, 200px);
  height: calc(clamp(120px, 13vw, 200px) * 1.22);  /* 257:314 ratio */
  border-radius: 35px;
  overflow: hidden;
  background: white;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-6px) scale(1.02);
  }

  /* Default / tablet — unchanged stagger */
  &.card-1 {
    top: 18%;
    left: 10%;
    z-index: 2;
  }
  &.card-2 {
    top: 10%;
    left: 40%;
    z-index: 4;
  }
  &.card-3 {
    top: 45%;
    left: 20%;
    z-index: 1;
  }
  &.card-4 {
    top: 37%;
    left: 50%;
    z-index: 3;
  }

  /* Desktop: same card size + % as mobile so center gap matches; parent scale() sizes hero */
  @media (min-width: 960px) {
    width: clamp(96px, 26vw, 132px);
    height: calc(clamp(96px, 26vw, 132px) * 1.22);
    border-radius: 22px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4);

    &.card-1 {
      top: 18%;
      left: 2%;
      z-index: 2;
    }
    &.card-2 {
      top: 2%;
      left: 36%;
      z-index: 4;
    }
    &.card-3 {
      top: 58%;
      left: 14%;
      z-index: 1;
    }
    &.card-4 {
      top: 32%;
      left: 52%;
      z-index: 3;
    }
  }

@media (max-width: 640px) {
  &.card-1 { top: 20%;  left: 0%;   }
  &.card-2 { top: 0%;   left: 38%;  }
  &.card-3 { top: 60%;  left: 16%;   }
  &.card-4 { top: 35%;  left:53%;  }
}

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      width: clamp(96px, 26vw, 132px);
      height: calc(clamp(96px, 26vw, 132px) * 1.22);
      border-radius: 22px;
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.4);

      &.card-1 {
        top: 18%;
        left: 2%;
      }
      &.card-2 {
        top: 2%;
        left: 36%;
      }
      &.card-3 {
        top: 58%;
        left: 14%;
      }
      &.card-4 {
        top: 32%;
        left: 52%;
      }
    `}
`;
export const GlobalStylesFix = styled.div`
  .hero-logo {
    padding: 4px 0 0 0;
    margin-bottom: 8px;   /* small gap before the grid */
    z-index: 10;

    img {
      height: clamp(48px, 6vw, 64px);
      width: auto;
      display: block;
    }
  }

  ${({ theme }) =>
    theme?.embedded &&
    css`
      .hero-logo {
        display: none !important;
      }
    `}

  ${({ theme }) =>
    theme?.isMobile &&
    css`
      .hero-logo {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-bottom: 10px;
      }
    `}
`;