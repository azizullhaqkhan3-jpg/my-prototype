import { useState } from "react";
import ProjectsData from "./ProjectsData";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? ProjectsData.projects
      : ProjectsData.projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <p className="text-primary fw-semibold text-uppercase small">
            {ProjectsData.subtitle}
          </p>
          <h1 className="fw-bold">{ProjectsData.title}</h1>
          <div className="heading-line mx-auto" />
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          {ProjectsData.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`btn rounded-pill px-4 ${
                activeFilter === filter
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="card project-card h-100 border-0 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top project-image"
                  alt={project.title}
                />

                <div className="card-body p-4 d-flex flex-column">
                  <span className="badge bg-primary-subtle text-primary align-self-start mb-3">
                    {project.category}
                  </span>

                  <h5 className="card-title fw-bold">
                    {project.title}
                  </h5>

                  <p className="card-text text-secondary">
                    {project.description}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        className="badge bg-light text-dark border"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto d-flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-dark btn-sm"
                      >
                        <i className="bi bi-github me-1" />
                        GitHub
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-primary btn-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-secondary">
            No projects found in this category.
          </p>
        )}
      </div>

      {selectedProject && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-content border-0 rounded-4">
              <div className="modal-header">
                <h5
                  className="modal-title fw-bold"
                  id="project-modal-title"
                >
                  {selectedProject.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setSelectedProject(null)}
                />
              </div>

              <div className="modal-body">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="img-fluid rounded-3 mb-3"
                />
                <p>{selectedProject.description}</p>
                <p className="small text-secondary">
                  Technologies: {selectedProject.technologies.join(", ")}
                </p>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;