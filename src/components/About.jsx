import { site } from "../../site.config.js";
import { copy, fillTemplate } from "../data/copy.js";
import { useAge } from "../hooks/useAge";
import { assetUrl } from "../lib/assetUrl.js";

/**
 * About section with photo and localized bio copy.
 * @returns {import('react').ReactElement}
 */
export default function About() {
  const age = useAge();
  const values = {
    age: new Intl.NumberFormat(site.locale).format(age),
    location: site.location,
  };

  return (
    <section className="section about" id="about" lang={site.locale}>
      <div className="section-inner">
        <h2 className="section-title">{copy.about.title}</h2>
        <p className="section-lead">{copy.about.lead}</p>
        <div className="about-grid">
          <img
            className="about-photo"
            src={assetUrl(site.photo)}
            alt={copy.about.photoAlt}
            width={180}
            height={180}
          />
          <div className="about-copy">
            {copy.about.body.map((paragraph) => (
              <p key={paragraph}>{fillTemplate(paragraph, values)}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
