/** Prefix a public asset path with the Vite base URL. */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL || "/";
  const normalized = String(path).replace(/^\/+/, "");
  return `${base}${normalized}`;
}
