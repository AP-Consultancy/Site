/** Vite base URL (e.g. `/` or `/portfolio/`). Always ends with `/ when not `/`. */
export const BASE_URL = import.meta.env.BASE_URL;

/**
 * Prefix a public-folder path for deployment under a subpath (e.g. `/portfolio/`).
 * @param {string} path — `/logo/ap.png` or `logo/ap.png`
 */
export function assetUrl(path) {
  const clean = String(path).replace(/^\//, "");
  return `${BASE_URL}${clean}`;
}
