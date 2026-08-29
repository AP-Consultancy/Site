import { ThemeProvider } from "styled-components";
import ClientWorkPage from "../portfolio/pages/ClientWorkPage";
import { clientWorkPageCopy } from "../portfolio/pages/clientWork.data";
import { useIsMobile } from "../portfolio/hooks/useIsMobile";
import { GlobalStylesFix } from "../portfolio/style";
import usePageMeta from "../hooks/usePageMeta";
import "./PortfolioPage.css";

export default function PortfolioClientWorkPage() {
  const isMobile = useIsMobile(920);

  usePageMeta({
    title: "Client Work | AP Consultancy Case Studies",
    description: clientWorkPageCopy.subtitle,
  });

  return (
    <div className="portfolio-route">
      <ThemeProvider theme={{ isMobile, embedded: true }}>
        <GlobalStylesFix>
          <ClientWorkPage />
        </GlobalStylesFix>
      </ThemeProvider>
    </div>
  );
}
