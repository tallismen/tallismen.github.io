import { copy } from "../data/copy.js";
import {
  groupLabels,
  groupOrder,
  projectsByGroup,
  projectsById,
} from "../data/projects";
import { assetUrl } from "../lib/assetUrl.js";
import ProjectDialog from "./ProjectDialog";

/**
 * Portfolio grid grouped by work / own / earlier, with detail dialog.
 * @param {{
 *   activeId: string | null,
 *   onOpen: (id: string) => void,
 *   onClose: () => void
 * }} props
 * @returns {import('react').ReactElement}
 */
export default function Projects({ activeId, onOpen, onClose }) {
  const active = activeId ? (projectsById.get(activeId) ?? null) : null;

  return (
    <section className="section" id="portfolio">
      <div className="section-inner">
        <h2 className="section-title">{copy.projects.title}</h2>
        <p className="section-lead">{copy.projects.lead}</p>

        {groupOrder.map((group) => {
          const items = projectsByGroup.get(group) ?? [];
          if (!items.length) return null;
          return (
            <div
              key={group}
              className={`project-group${group === "earlier" ? " is-secondary" : ""}`}
            >
              <h3 className="project-group-title">{groupLabels[group]}</h3>
              <div className="project-grid">
                {items.map((project) => (
                  <button
                    key={project.id}
                    type="button"
                    className="project-card"
                    onClick={() => onOpen(project.id)}
                  >
                    <img
                      src={assetUrl(project.image)}
                      alt={project.imageAlt}
                      width={72}
                      height={72}
                    />
                    <h3>{project.title}</h3>
                    <p>{project.blurb}</p>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <ProjectDialog project={active} open={Boolean(active)} onClose={onClose} />
    </section>
  );
}
