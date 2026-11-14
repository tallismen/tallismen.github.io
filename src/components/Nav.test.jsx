import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { site } from "../../site.config.js";
import { copy } from "../data/copy.js";
import { Nav } from "./Nav";
import { SCROLL_THRESHOLD_PX } from "./navScroll.js";

describe("Nav", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders brand and navigation links", () => {
    render(<Nav />);

    expect(screen.getByText(site.brand)).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: copy.navAriaLabel }),
    ).toBeInTheDocument();
    for (const item of copy.nav) {
      expect(screen.getByRole("link", { name: item.label })).toHaveAttribute(
        "href",
        item.href,
      );
    }
  });

  it("toggles the mobile menu and applies open styles", () => {
    render(<Nav />);
    const toggle = screen.getByRole("button", { name: copy.menuAriaLabel });
    const nav = screen.getByRole("navigation", { name: copy.navAriaLabel });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(nav.className).not.toContain("is-open");

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(nav.className).toContain("is-open");
    expect(nav.className).toContain("is-scrolled");
  });

  it("applies scrolled styles after passing the scroll threshold", () => {
    let scrollY = 0;
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      get: () => scrollY,
    });

    render(<Nav />);
    const nav = screen.getByRole("navigation", { name: copy.navAriaLabel });
    expect(nav.className).not.toContain("is-scrolled");

    scrollY = SCROLL_THRESHOLD_PX + 10;
    fireEvent.scroll(window);
    expect(nav.className).toContain("is-scrolled");
  });

  it("renders no links when nav items are empty", () => {
    render(<Nav items={[]} />);
    expect(screen.getByText(site.brand)).toBeInTheDocument();
    expect(screen.queryAllByRole("link")).toHaveLength(1);
  });

  it("renders no nav links when nav items are null", () => {
    render(<Nav items={null} />);
    expect(screen.getByText(site.brand)).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Home" })).not.toBeInTheDocument();
  });
});
