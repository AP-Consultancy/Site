import { ThemeProvider } from "styled-components";
import ClientWorkPage from "../portfolio/pages/ClientWorkPage";
import { useIsMobile } from "../portfolio/hooks/useIsMobile";
import { GlobalStylesFix } from "../portfolio/style";
import "../portfolio/index.css";
import "./PortfolioPage.css";

export default function PortfolioClientWorkPage() {
  const isMobile = useIsMobile(920);

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
