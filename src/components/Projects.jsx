import { useEffect, useId, useRef } from "react";
import { groupLabels, groupOrder, projects } from "../data/projects";

function ProjectDialog({ project, open, onClose }) {
  const dialogRef = useRef(null);
  const titleId = useId();

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
        <img src={project.image} alt="" width={96} height={96} />
        <h2 id={titleId}>{project.title}</h2>
        <p>{project.description}</p>
        <ul className="dialog-meta">
          {project.date ? (
            <li>
              Datum: <strong>{project.date}</strong>
            </li>
          ) : null}
          {project.grade ? (
            <li>
              Cijfer: <strong>{project.grade}</strong>
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
          Sluiten
        </button>
      </div>
    </dialog>
  );
}

export default function Projects({ activeId, onOpen, onClose }) {
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section className="section" id="portfolio">
      <div className="section-inner">
        <h2 className="section-title">Projecten</h2>
        <p className="section-lead">
          Werk bij Apadmi / The Mobile Company, eigen apps, en eerdere projecten.
        </p>

        {groupOrder.map((group) => {
          const items = projects.filter((p) => p.group === group);
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
                      src={project.image}
                      alt=""
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
