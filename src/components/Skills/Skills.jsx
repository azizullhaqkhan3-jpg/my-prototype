import SkillsData from "./SkillsData";

function Skills() {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <p className="text-primary fw-semibold text-uppercase small">
            {SkillsData.subtitle}
          </p>
          <h1 className="fw-bold">{SkillsData.title}</h1>
          <div className="heading-line mx-auto" />
          <p className="text-secondary mt-3">
            Technologies and tools I use to build web applications.
          </p>
        </div>

        <div className="row g-4">
          {SkillsData.categories.map((category) => (
            <div className="col-lg-4" key={category.name}>
              <div className="content-card h-100">
                <h4 className="fw-bold mb-4">{category.name}</h4>

                <div className="row g-3">
                  {category.skills.map((skill) => (
                    <div className="col-12" key={skill.name}>
                      <div className="skill-item d-flex align-items-center gap-3">
                        <div className="skill-icon">
                          <i className={`bi ${skill.icon}`} />
                        </div>

                        <div className="flex-grow-1">
                          <h6 className="fw-semibold mb-1">
                            {skill.name}
                          </h6>
                          <span className="text-secondary small">
                            {skill.level}
                          </span>
                        </div>

                        <i className="bi bi-check-circle-fill text-primary" />
                      </div>
                    </div>
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

export default Skills;