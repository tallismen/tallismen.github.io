import { site } from "../../site.config.js";
import { copy } from "../data/copy.js";
import { assetUrl } from "../lib/assetUrl.js";

/**
 * Full-bleed hero with brand, tagline, and portfolio CTA.
 * @returns {import('react').ReactElement}
 */
export function Hero() {
  return (
    <header className="hero" id="page-top">
      <div className="hero-inner" id="maincontent" tabIndex={-1}>
        <img
          className="hero-logo"
          src={assetUrl(site.logo)}
          alt={`${site.brand} logo`}
          width={140}
          height={140}
        />
        <h1>{site.brand}</h1>
        <p className="hero-tagline">{site.tagline}</p>
        <a className="hero-cta" href="#portfolio">
          {copy.heroCta}
        </a>
      </div>
    </header>
  );
}

export default Hero;
