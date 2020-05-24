import React from "react";
import See from "./icons/See";

export default function Project({ project, openModal }) {
  return (
    <div className="project">
      <div className="image">
        <div>
          <img
            src={project.source}
            alt={project.name}
            data-description={project.description}
          />
        </div>

        <div className="hover" onClick={openModal}>
          <See onClick={(e) => e.stopPropagation()} />
        </div>
      </div>

      <a
        className="contributor"
        href="https://www.linkedin.com/in/elishaking/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <small>
          <strong>Contributor: </strong> Elisha King
        </small>
      </a>

      <a
        className="project-link"
        href={project.link}
        rel="noopener noreferrer"
        target="_blank"
      >
        {project.name}
      </a>

      {/* <div className="tech">
        {project.tech.map((t, i) => (
          <span>
            {t}
            {i !== project.tech.length - 1 && (
              <span className="separator">&middot;</span>
            )}
          </span>
        ))}
      </div> */}
    </div>
  );
}
