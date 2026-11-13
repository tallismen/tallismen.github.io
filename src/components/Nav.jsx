import { useEffect, useState } from "react";

const items = [
  { href: "#page-top", label: "Home" },
  { href: "#about", label: "Over mij" },
  { href: "#portfolio", label: "Projecten" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="site-nav"
      className={`site-nav${scrolled || open ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
      aria-label="Hoofdnavigatie"
    >
      <div className="nav-inner">
        <a className="brand" href="#page-top" onClick={() => setOpen(false)}>
          DesignLama
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">☰</span>
        </button>
        <ul id="nav-links" className="nav-links">
          {items.map((item) => (
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
