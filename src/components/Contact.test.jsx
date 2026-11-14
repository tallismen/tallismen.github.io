import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { site } from "../../site.config.js";
import { copy } from "../data/copy.js";
import Contact from "./Contact";

describe("Contact", () => {
  it("renders contact headings and social labels", () => {
    render(<Contact />);

    expect(
      screen.getByRole("heading", { level: 2, name: copy.contact.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(site.location)).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(site.brandDomain)),
    ).toBeInTheDocument();
  });
});
