import { describe, expect, it } from "vitest";
import { copy } from "./copy.js";
import { projectDateLabel, projectsById } from "./projects.js";

describe("projectDateLabel", () => {
  it("returns empty string when project is null", () => {
    expect(projectDateLabel(null)).toBe("");
    expect(projectDateLabel(undefined)).toBe("");
  });

  it("returns empty string when period is missing", () => {
    expect(
      projectDateLabel(/** @type {import('./projects.js').Project} */ ({ id: "x" })),
    ).toBe("");
  });

  it("returns period.label when present", () => {
    const project = projectsById.get("keurslager");
    expect(project).toBeDefined();
    expect(projectDateLabel(project)).toBe("Apadmi");
  });

  it("formats a date range via formatProjectDate", () => {
    const project = projectsById.get("waterkaarten");
    expect(project).toBeDefined();
    const label = projectDateLabel(project);
    expect(label).toContain("2022");
    expect(label).toContain(copy.date.present);
  });

  it("formats own-time labelKey periods", () => {
    const project = projectsById.get("pakkiepakkie");
    expect(project).toBeDefined();
    expect(projectDateLabel(project)).toBe(copy.date.ownTime);
  });
});

