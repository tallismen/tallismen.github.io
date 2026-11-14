import { useSyncExternalStore } from "react";

const BIRTH_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

/**
 * Parse `VITE_BIRTH_DATE` (YYYY-MM-DD) into calendar parts.
 * @param {string | undefined} value
 * @returns {{ year: number, month: number, day: number } | null}
 */
export function parseBirthDate(value) {
  if (!value || typeof value !== "string") return null;
  const match = BIRTH_DATE_PATTERN.exec(value.trim());
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  return { year, month, day };
}

/**
 * Compute age in full years for a birth date relative to `today`.
 * @param {{ year: number, month: number, day: number }} birth
 * @param {Date} [today]
 * @returns {number}
 */
export function calcAgeFromBirth(birth, today = new Date()) {
  const birthDate = new Date(birth.year, birth.month - 1, birth.day);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

/**
 * Age from `import.meta.env.VITE_BIRTH_DATE`, or `0` when missing/invalid.
 * @param {string | null | undefined} [envValue]
 * @param {Date} [today]
 * @returns {number}
 */
export function calcAge(
  envValue = import.meta.env.VITE_BIRTH_DATE,
  today = new Date(),
) {
  const birth = parseBirthDate(envValue ?? undefined);
  if (!birth) return 0;
  return calcAgeFromBirth(birth, today);
}

/** @returns {number} */
function currentYear() {
  return new Date().getFullYear();
}

/** @returns {number} */
export function useAge() {
  return useSyncExternalStore(
    () => () => {},
    calcAge,
    calcAge,
  );
}

/** @returns {number} */
export function useCurrentYear() {
  return useSyncExternalStore(
    () => () => {},
    currentYear,
    currentYear,
  );
}
