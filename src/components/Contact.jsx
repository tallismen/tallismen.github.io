import { site } from "../../site.config.js";
import { copy } from "../data/copy.js";
import { useCurrentYear } from "../hooks/useAge";

const socialIcons = {
  youtube: (
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
  ),
  linkedin: (
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.7 4.8 6.1V23h-4v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V23h-4V8.5z" />
  ),
  soundcloud: (
    <path d="M17.5 10c-.3 0-.6 0-.9.1A4.5 4.5 0 0 0 8.2 8.4a3.4 3.4 0 0 0-1 .1A3.7 3.7 0 0 0 4 15.7h13.5a2.8 2.8 0 1 0 0-5.7z" />
  ),
};

/**
 * Contact footer with location, social links, and copyright.
 * @returns {import('react').ReactElement}
 */
export default function Contact() {
  const year = useCurrentYear();

  return (
    <footer className="contact" id="contact">
      <div className="section-inner">
        <h2 className="section-title">{copy.contact.title}</h2>
        <p className="section-lead">{copy.contact.lead}</p>
        <div className="contact-grid">
          <div>
            <h3>{copy.contact.locationHeading}</h3>
            <p>{site.location}</p>
          </div>
          <div>
            <h3>{copy.contact.socialHeading}</h3>
            <ul className="social-links">
              {site.social.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      {socialIcons[item.id]}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{copy.contact.contactHeading}</h3>
            <p>{copy.contact.contactBody}</p>
          </div>
        </div>
        <p className="footer-copy">
          Copyright © {site.brandDomain} {year}
        </p>
      </div>
    </footer>
  );
}
