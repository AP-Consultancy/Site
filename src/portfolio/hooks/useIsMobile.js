import { useMemo, useSyncExternalStore } from "react";

/**
 * Matches viewport widths typical for phones / small tablets (default 768px).
 */
export function useIsMobile(breakpointPx = 768) {
  const query = useMemo(
    () => `(max-width: ${breakpointPx}px)`,
    [breakpointPx]
  );

  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
