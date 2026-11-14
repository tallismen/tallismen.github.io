import { useEffect, useState } from "react";
import { site } from "../../site.config.js";
import { copy } from "../data/copy.js";
import { isNavScrolled } from "./navScroll.js";

/**
 * Sticky site navigation with mobile toggle.
 * @param {{ items?: { href: string, label: string }[] | null }} [props]
 * @returns {import('react').ReactElement}
 */
export function Nav({ items = copy.nav } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navItems = items == null ? [] : items;

  useEffect(() => {
    const onScroll = () => setScrolled(isNavScrolled(window.scrollY));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="site-nav"
      className={`site-nav${scrolled || open ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
      aria-label={copy.navAriaLabel}
    >
      <div className="nav-inner">
        <a className="brand" href="#page-top" onClick={() => setOpen(false)}>
          {site.brand}
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={copy.menuAriaLabel}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">☰</span>
        </button>
        <ul id="nav-links" className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
