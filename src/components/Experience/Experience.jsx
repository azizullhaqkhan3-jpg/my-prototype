import ExperienceData from "./ExperienceData";

function Experience() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <p className="text-primary fw-semibold text-uppercase small">
            {ExperienceData.subtitle}
          </p>
          <h1 className="fw-bold">{ExperienceData.title}</h1>
          <div className="heading-line mx-auto" />
        </div>

        <div className="timeline mx-auto">
          {ExperienceData.items.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-dot">
                <i
                  className={`bi ${
                    item.type === "education"
                      ? "bi-mortarboard"
                      : item.type === "project"
                        ? "bi-code-slash"
                        : "bi-briefcase"
                  }`}
                />
              </div>

              <div className="content-card">
                <span className="badge bg-primary-subtle text-primary mb-3">
                  {item.type}
                </span>

                <h4 className="fw-bold">{item.role}</h4>
                <h6 className="text-primary">{item.organization}</h6>

                <p className="text-secondary small mb-3">
                  <i className="bi bi-calendar3 me-2" />
                  {item.period}
                </p>

                <p className="text-secondary lh-lg">
                  {item.description}
                </p>

                <div className="d-flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      className="badge bg-light text-dark border"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;