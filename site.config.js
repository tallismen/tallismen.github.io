/** Shared site identity — importable from Vite config and app code. */
export const site = {
  brand: "DesignLama",
  brandDomain: "DesignLama.nl",
  tagline: "Mobile developer",
  location: "Zoetermeer / Zuid-Holland",
  locale: "nl-NL",
  logo: "img/designlamaLogov3Klein.png",
  photo: "img/maarten.jpg",
  social: [
    {
      id: "youtube",
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCkw1bfLas1wYLet6iww7Igg",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maarten-lammers-5b103169/",
    },
    {
      id: "soundcloud",
      label: "SoundCloud",
      href: "https://soundcloud.com/tallismen",
    },
  ],
};

/**
 * Resolve Vite's `base` option from the environment.
 *
 * Set `BASE_PATH` when the site is hosted under a subdirectory
 * (for example `/tallismen.github.io/` on GitHub Pages project sites).
 * Leave unset or empty for a custom domain / site root (`/`).
 *
 * @param {NodeJS.ProcessEnv | Record<string, string | undefined>} [env]
 * @returns {string} Public base path ending with `/` when non-root
 */
export function resolveBasePath(env = process.env) {
  return env.BASE_PATH || "/";
}
