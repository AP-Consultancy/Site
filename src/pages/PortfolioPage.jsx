import { ThemeProvider } from "styled-components";
import PortfolioHome from "../portfolio/PortfolioHome";
import { useIsMobile } from "../portfolio/hooks/useIsMobile";
import { GlobalStylesFix } from "../portfolio/style";
import "../portfolio/index.css";
import "./PortfolioPage.css";

export default function PortfolioPage() {
  const isMobile = useIsMobile(920);

  return (
    <div className="portfolio-route">
      <ThemeProvider theme={{ isMobile, embedded: true }}>
        <GlobalStylesFix>
          <PortfolioHome showHeroLogo={false} />
        </GlobalStylesFix>
      </ThemeProvider>
    </div>
  );
}
