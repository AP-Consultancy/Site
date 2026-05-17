import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function hashStringToInt(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function themeFromName(name = "") {
  const known = {
    "hdfc bank": { from: "#B11226", to: "#7A0E1A", accent: "#B11226" },
  };
  const key = String(name).trim().toLowerCase();
  if (known[key]) return known[key];

  const h = hashStringToInt(key || "app");
  const hue = h % 360;
  const hue2 = (hue + 18 + ((h >> 8) % 20)) % 360;
  const sat = clamp(70 + ((h >> 16) % 16), 68, 84);
  const light = clamp(46 + ((h >> 20) % 10), 42, 54);
  const light2 = clamp(light - 12, 30, 48);
  return {
    from: `hsl(${hue} ${sat}% ${light}%)`,
    to: `hsl(${hue2} ${sat}% ${light2}%)`,
    accent: `hsl(${hue} ${sat}% ${light - 6}%)`,
  };
}

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(2, 6, 23, 0.62);
  backdrop-filter: blur(10px);
  display: grid;
  place-items: center;
  padding: 24px;

  @media (max-width: 520px) {
    padding: 14px;
  }
`;

const Dialog = styled(motion.div)`
  width: min(980px, 100%);
  max-height: min(90vh, 860px);
  overflow: hidden;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 40px 140px rgba(2, 6, 23, 0.32);
  border: 1px solid rgba(2, 6, 23, 0.08);
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", system-ui, sans-serif;

  @media (max-width: 520px) {
    border-radius: 16px;
  }
`;

const Header = styled.div`
  position: relative;
  padding: 34px 28px 22px;
  color: white;
  background: ${({ $from, $to }) =>
    `linear-gradient(135deg, ${$from} 0%, ${$to} 80%)`};
  text-align: center;

  @media (max-width: 640px) {
    padding: 26px 18px 16px;
  }
`;

const HeaderTopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 640px) {
    align-items: center;
    justify-content: center;
    padding-top: 10px;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
  justify-content: center;
`;

const BrandIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.22);
  border: 1px solid rgba(255, 255, 255, 0.22);
  display: grid;
  place-items: center;
  flex: 0 0 auto;
`;

const BrandIconImg = styled.img`
  width: 26px;
  height: 26px;
  object-fit: contain;
  filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.22));
`;

const BrandText = styled.div`
  min-width: 0;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 36px;
  line-height: 1.08;
  font-weight: 850;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 28px;
    white-space: normal;
  }
`;

const Pills = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const Pill = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const CloseButton = styled.button`
  appearance: none;
  border: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
  cursor: pointer;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  transition: transform 0.18s ease, background 0.18s ease;
  position: relative;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.22);
  }
  &:active {
    transform: translateY(0px);
  }
  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.9);
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    position: absolute;
    top: 14px;
    right: 14px;
  }
`;

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M18 6 6 18M6 6l12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

const Subhead = styled.p`
  margin: 18px 0 0;
  max-width: 780px;
  font-size: 15.5px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.86);
  margin-left: auto;
  margin-right: auto;
`;

const StatsRow = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 420px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Stat = styled.div`
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  padding: 14px 14px 12px;
  min-height: 70px;
`;

const StatValue = styled.div`
  font-size: 22px;
  font-weight: 850;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.div`
  margin-top: 4px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.82);
`;

const Body = styled.div`
  padding: 22px 28px 28px;
  overflow: auto;
  flex: 1 1 auto;
  text-align: left;

  @media (max-width: 640px) {
    padding: 18px 18px 22px;
  }
`;

const SectionTitle = styled.div`
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 850;
  color: #b91c1c;
  margin: 18px 0 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  color: #475569;
  line-height: 1.7;
  font-size: 14.5px;
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 18px;
  max-width: 920px;
  margin: 0 auto;

  @media (min-width: 880px) {
    gap: 22px;
  }
`;

const Highlights = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
`;

const HighlightItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(2, 6, 23, 0.08);
  background: #f8fafc;
  justify-content: flex-start;

  @media (max-width: 520px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Check = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 7px;
  background: rgba(185, 28, 28, 0.12);
  color: #b91c1c;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  margin-top: 1px;
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  justify-content: flex-start;
`;

const Chip = styled.span`
  font-size: 12.5px;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(2, 6, 23, 0.04);
  border: 1px solid rgba(2, 6, 23, 0.08);
  color: #334155;
  font-weight: 650;
`;

const overlayMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.18 } },
  exit: { opacity: 0, transition: { duration: 0.16 } },
};

const dialogMotion = {
  initial: { opacity: 0, y: 14, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.99,
    transition: { duration: 0.16, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectModal({ open, onClose, project, iconSrc }) {
  const theme = useMemo(() => themeFromName(project?.title), [project?.title]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <Overlay
          {...overlayMotion}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose?.();
          }}
          aria-modal="true"
          role="dialog"
        >
          <Dialog {...dialogMotion} onMouseDown={(e) => e.stopPropagation()}>
            <Header $from={theme.from} $to={theme.to}>
              <HeaderTopRow>
                <Brand>
                  <BrandIcon aria-hidden>
                    {iconSrc ? <BrandIconImg src={iconSrc} alt="" /> : null}
                  </BrandIcon>
                  <BrandText>
                    <Title>{project?.title ?? "Project"}</Title>
                    <Pills>
                      {(project?.pills ?? []).map((pill, idx) => (
                        <Pill key={`${pill}-${idx}`}>{pill}</Pill>
                      ))}
                    </Pills>
                  </BrandText>
                </Brand>
                <CloseButton onClick={onClose} aria-label="Close modal">
                  <CloseIcon />
                </CloseButton>
              </HeaderTopRow>

              <Subhead>
                {project?.subhead ?? ""}
              </Subhead>

              <StatsRow aria-hidden>
                {(project?.stats ?? []).map((stat, idx) => (
                  <Stat key={`${stat.label}-${idx}`}>
                    <StatValue>{stat.value}</StatValue>
                    <StatLabel>{stat.label}</StatLabel>
                  </Stat>
                ))}
              </StatsRow>
            </Header>

            <Body>
              <TwoCol>
                <div>
                  <SectionTitle style={{ color: theme.accent }}>
                    The challenge
                  </SectionTitle>
                  <Paragraph>{project?.challenge ?? "-"}</Paragraph>

                  <SectionTitle style={{ color: theme.accent }}>
                    Our solution
                  </SectionTitle>
                  <Paragraph>{project?.solution ?? "-"}</Paragraph>

                  <SectionTitle style={{ color: theme.accent }}>
                    Key highlights
                  </SectionTitle>
                  <Highlights>
                    {(project?.keyHighlights ?? []).map((t, idx) => (
                      <HighlightItem key={`${t}-${idx}`}>
                        <Check aria-hidden>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="M20 6 9 17l-5-5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Check>
                        <Paragraph style={{ margin: 0 }}>{t}</Paragraph>
                      </HighlightItem>
                    ))}
                  </Highlights>

                  <SectionTitle style={{ color: theme.accent }}>
                    Technologies used
                  </SectionTitle>
                  <ChipRow>
                    {(project?.technologies ?? []).map((tech, idx) => (
                      <Chip key={`${tech}-${idx}`}>{tech}</Chip>
                    ))}
                  </ChipRow>
                </div>
              </TwoCol>
            </Body>
          </Dialog>
        </Overlay>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

