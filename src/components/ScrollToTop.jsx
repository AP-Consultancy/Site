import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return undefined;
    const prev = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = prev;
    };
  }, []);

  useEffect(() => {
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    toTop();
    window.addEventListener("pageshow", toTop);
    return () => window.removeEventListener("pageshow", toTop);
  }, [pathname]);

  return null;
}
