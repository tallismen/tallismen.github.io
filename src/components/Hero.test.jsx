import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { site } from "../../site.config.js";
import { copy } from "../data/copy.js";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders brand, tagline, logo, and portfolio CTA", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { level: 1, name: site.brand }),
    ).toBeInTheDocument();
    expect(screen.getByText(site.tagline)).toBeInTheDocument();
    expect(screen.getByAltText(`${site.brand} logo`)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: copy.heroCta })).toHaveAttribute(
      "href",
      "#portfolio",
    );
  });
});
