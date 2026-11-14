import { site } from "../../site.config.js";
import { copy } from "../data/copy.js";

/**
 * @typedef {{ year: number, month: number }} YearMonth
 * @typedef {'present' | 'ownTime' | YearMonth | null | undefined} DateEnd
 */

/**
 * Format a project period for display in the site locale.
 * @param {{ start?: YearMonth, end?: DateEnd, labelKey?: 'ownTime' }} period
 */
export function formatProjectDate(period) {
  if (!period) return "";
  if (period.labelKey === "ownTime") return copy.date.ownTime;

  const { start, end } = period;
  if (!start) return "";

  const startLabel = formatYearMonth(start);
  if (end === "present") {
    return `${startLabel}${copy.date.rangeSeparator}${copy.date.present}`;
  }
  if (end && typeof end === "object") {
    return `${startLabel}${copy.date.rangeSeparator}${formatYearMonth(end)}`;
  }
  return startLabel;
}

/** @param {YearMonth} value */
function formatYearMonth({ year, month }) {
  return new Intl.DateTimeFormat(site.locale, {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, 1));
}
