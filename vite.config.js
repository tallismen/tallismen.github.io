import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolveBasePath } from "./site.config.js";

/**
 * Vite build and test config.
 *
 * `base` is the public URL path where the site is served. Use `/` for a custom
 * domain or repo root host. Set the `BASE_PATH` env var (e.g. `/repo-name/`)
 * when deploying to a GitHub Pages project subdirectory so asset URLs resolve.
 *
 * @see resolveBasePath in site.config.js
 */
export default defineConfig({
  plugins: [react()],
  base: resolveBasePath(),
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
});
