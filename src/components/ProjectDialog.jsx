import { useEffect, useId, useRef } from "react";
import { copy } from "../data/copy.js";
import { projectDateLabel } from "../data/projects";
import { assetUrl } from "../lib/assetUrl.js";

/**
 * @typedef {import('../data/projects.js').Project} Project
 */

/**
 * Modal dialog with project details.
 * @param {{
 *   project: Project | null,
 *   open: boolean,
 *   onClose: () => void
 * }} props
 * @returns {import('react').ReactElement | null}
 */
export default function ProjectDialog({ project, open, onClose }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const dateLabel = project ? projectDateLabel(project) : "";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  if (!project) return null;

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="dialog-body">
        <img
          src={assetUrl(project.image)}
          alt={project.imageAlt}
          width={96}
          height={96}
        />
        <h2 id={titleId}>{project.title}</h2>
        <p>{project.description}</p>
        <ul className="dialog-meta">
          {dateLabel ? (
            <li>
              {copy.projects.dateLabel}: <strong>{dateLabel}</strong>
            </li>
          ) : null}
          {project.grade ? (
            <li>
              {copy.projects.gradeLabel}: <strong>{project.grade}</strong>
            </li>
          ) : null}
        </ul>
        {project.links?.length ? (
          <div className="dialog-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
        <button type="button" className="dialog-close" onClick={onClose}>
          {copy.projects.close}
        </button>
      </div>
    </dialog>
  );
}
