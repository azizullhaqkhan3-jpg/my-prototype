import { Link } from "react-router-dom";
import AboutData from "./AboutData";

function About() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-heading text-center mb-5">
          <p className="text-primary fw-semibold text-uppercase small">
            {AboutData.subtitle}
          </p>
          <h1 className="fw-bold">{AboutData.title}</h1>
          <div className="heading-line mx-auto" />
        </div>

        <div className="row g-5 align-items-start">
          <div className="col-lg-6">
            <div className="content-card h-100">
              <h3 className="fw-bold mb-4">
                My Story
              </h3>

              {AboutData.paragraphs.map((paragraph, index) => (
                <p className="text-secondary lh-lg" key={index}>
                  {paragraph}
                </p>
              ))}

              <h5 className="fw-bold mt-4 mb-3">
                My Interests
              </h5>

              <div className="d-flex flex-wrap gap-2">
                {AboutData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="badge bg-primary-subtle text-primary p-2"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="btn btn-primary rounded-pill px-4 mt-4"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="content-card">
              <h3 className="fw-bold mb-4">Personal Information</h3>

              {AboutData.details.map((detail) => (
                <div
                  key={detail.label}
                  className="d-flex flex-column flex-sm-row border-bottom py-3 gap-1"
                >
                  <span className="fw-semibold detail-label">
                    {detail.label}
                  </span>
                  <span className="text-secondary text-break">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;