import { AnimatePresence, motion as Motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  BackLink,
  ClientBrandSlot,
  ClientCard,
  ClientCardBody,
  ClientCardChips,
  ClientCardDesc,
  ClientCardMedia,
  ClientCardTitle,
  ClientGrid,
  ClientPageHeader,
  ClientWorkHeaderRow,
  Chip,
  PageShell,
  PageSub,
  PageTitle,
} from "../style";
import { clientWorkCards, clientWorkPageCopy } from "./clientWork.data";
import projectsData from "../data/data";
import ProjectModal from "../components/ProjectModal";
import { assetUrl } from "../utils/assetUrl";

const ease = [0.22, 1, 0.36, 1];

export default function ClientWorkPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);

  const selectedCard = useMemo(() => {
    if (!selectedKey) return clientWorkCards?.[0] ?? null;
    return clientWorkCards?.find((c) => c.key === selectedKey) ?? null;
  }, [selectedKey]);

  const modalProject = useMemo(() => {
    if (!Array.isArray(projectsData) || projectsData.length === 0) return null;
    const base = projectsData[0];
    const label =
      selectedCard?.client || selectedCard?.title || base?.title || "Project";

    const key = selectedCard?.imageFilename || selectedCard?.key || null;
    const needle = String(label).trim().toLowerCase();
    const match =
      (key ? projectsData.find((p) => p?.key === key) : null) ??
      projectsData.find(
        (p) => String(p?.title ?? "").trim().toLowerCase() === needle
      ) ??
      base;

    return { ...match, title: label };
  }, [selectedCard]);

  return (
    <PageShell>
      <ClientBrandSlot>
        <img src={assetUrl("/logo/ap-white.png")} alt="Company Logo" />
      </ClientBrandSlot>
      <ClientPageHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "column", 
          gap: "8px",
        }}
      >
          <ClientWorkHeaderRow>
            <PageTitle>{clientWorkPageCopy.title}</PageTitle>

            <BackLink as={Link} to="/portfolio" style={{ marginBottom: 0 }}>
              ← Back to portfolio
            </BackLink>
          </ClientWorkHeaderRow>

          <PageSub>
            {clientWorkPageCopy.subtitle}
          </PageSub>
      </div>
    </ClientPageHeader>
      <AnimatePresence>
        <ClientGrid
          as={Motion.div}
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08, delayChildren: 0.12 },
            },
          }}
        >
          {clientWorkCards.map((it) => (
            <ClientCard
              as={Motion.article}
              key={it.key}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${it.client} details`}
              onClick={() => {
                setSelectedKey(it.key);
                setIsModalOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedKey(it.key);
                  setIsModalOpen(true);
                }
              }}
            >
              <ClientCardMedia>
                <Motion.img
                  src={it.imageUrl}
                  alt={it.client}
                  loading="lazy"
                  initial={{ scale: 1.03 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.9, ease }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="mediaOverlay" aria-hidden />
                <div className="mediaCaption">
                  <span className="dot" />
                  {it.client}
                </div>
              </ClientCardMedia>

              <ClientCardBody>
                <ClientCardTitle>{it.title}</ClientCardTitle>
                <ClientCardDesc>{it.description}</ClientCardDesc>

                {it.chips?.length ? (
                  <ClientCardChips>
                    {it.chips.slice(0, 6).map((label) => (
                      <Chip key={`${it.key}-${label}`}>{label}</Chip>
                    ))}
                  </ClientCardChips>
                ) : null}
              </ClientCardBody>
            </ClientCard>
          ))}
        </ClientGrid>
      </AnimatePresence>

      <ProjectModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={modalProject}
        iconSrc={selectedCard?.imageUrl}
      />
    </PageShell>
  );
}

