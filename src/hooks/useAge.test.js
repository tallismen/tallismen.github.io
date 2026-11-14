import { describe, expect, it } from "vitest";
import { calcAge, calcAgeFromBirth, parseBirthDate } from "./useAge";

describe("parseBirthDate", () => {
  it("parses a valid ISO date", () => {
    expect(parseBirthDate("1995-08-30")).toEqual({
      year: 1995,
      month: 8,
      day: 30,
    });
  });

  it("returns null for missing or invalid values", () => {
    expect(parseBirthDate(undefined)).toBeNull();
    expect(parseBirthDate("")).toBeNull();
    expect(parseBirthDate("not-a-date")).toBeNull();
    expect(parseBirthDate("1995-13-40")).toBeNull();
  });
});

describe("calcAgeFromBirth", () => {
  const birth = { year: 1995, month: 8, day: 30 };

  it("is one year younger the day before the birthday", () => {
    expect(calcAgeFromBirth(birth, new Date(2026, 7, 29))).toBe(30);
  });

  it("increments on the birthday", () => {
    expect(calcAgeFromBirth(birth, new Date(2026, 7, 30))).toBe(31);
  });

  it("stays the same after the birthday", () => {
    expect(calcAgeFromBirth(birth, new Date(2026, 8, 1))).toBe(31);
  });
});

describe("calcAge", () => {
  it("computes age from an env birth date", () => {
    expect(calcAge("1995-08-30", new Date(2026, 10, 14))).toBe(31);
  });

  it("returns 0 when the env birth date is missing", () => {
    // null bypasses the default env fallback used when the argument is omitted
    expect(calcAge(null, new Date(2026, 10, 14))).toBe(0);
  });

  it("returns 0 when the env birth date is invalid", () => {
    expect(calcAge("nope", new Date(2026, 10, 14))).toBe(0);
  });
});
