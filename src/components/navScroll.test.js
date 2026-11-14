import { describe, expect, it } from "vitest";
import { SCROLL_THRESHOLD_PX, isNavScrolled } from "./navScroll.js";

describe("isNavScrolled", () => {
  it("is false at or below the threshold", () => {
    expect(isNavScrolled(0)).toBe(false);
    expect(isNavScrolled(SCROLL_THRESHOLD_PX)).toBe(false);
  });

  it("is true above the threshold", () => {
    expect(isNavScrolled(SCROLL_THRESHOLD_PX + 1)).toBe(true);
  });
});
