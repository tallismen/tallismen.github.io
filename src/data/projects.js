import { copy } from "./copy.js";
import { formatProjectDate } from "../lib/formatDate.js";
import { projectList } from "./projectList.js";

/** @typedef {'work' | 'own' | 'earlier'} ProjectGroup */

/**
 * @typedef {{ year: number, month: number }} YearMonth
 * @typedef {{
 *   start?: YearMonth,
 *   end?: 'present' | YearMonth,
 *   labelKey?: 'ownTime',
 *   label?: string
 * }} ProjectPeriod
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} blurb
 * @property {string} description
 * @property {string} image
 * @property {string} imageAlt
 * @property {ProjectGroup} group
 * @property {ProjectPeriod} [period]
 * @property {string} [grade]
 * @property {{ label: string, href: string }[]} [links]
 */

/** @type {Project[]} */
export const projects = projectList;

export const groupLabels = copy.groups;

/** @type {ProjectGroup[]} */
export const groupOrder = ["work", "own", "earlier"];

/** @type {Map<string, Project>} */
export const projectsById = new Map(
  projects.map((project) => [project.id, project]),
);

/** @type {Map<ProjectGroup, Project[]>} */
export const projectsByGroup = new Map(
  groupOrder.map((group) => [
    group,
    projects.filter((project) => project.group === group),
  ]),
);

/**
 * Human-readable date/label for a project period.
 * @param {Project | null | undefined} project
 * @returns {string}
 */
export function projectDateLabel(project) {
  if (project == null) return "";

  const period = project.period;
  if (period == null) return "";

  const label = period.label;
  if (label != null && label !== "") return label;

  return formatProjectDate(period);
}
