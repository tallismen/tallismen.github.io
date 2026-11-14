import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { site } from "../../site.config.js";
import { copy } from "../data/copy.js";
import About from "./About";

describe("About", () => {
  it("renders about title, lead, and location", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", { name: copy.about.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(copy.about.lead)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(site.location))).toBeInTheDocument();
    expect(screen.getByAltText(copy.about.photoAlt)).toBeInTheDocument();
  });
});
