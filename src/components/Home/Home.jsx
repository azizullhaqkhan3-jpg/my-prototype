import { Link } from "react-router-dom";
import HomeData from "./HomeData";

function Home() {
  return (
    <>
      <section className="hero-section py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3">
                {HomeData.greeting}
              </span>

              <h1 className="display-3 fw-bold mb-3">
                I'm {HomeData.name}
              </h1>

              <h2 className="h3 text-primary mb-4">
                {HomeData.role}
              </h2>

              <p className="lead text-secondary mb-4">
                {HomeData.description}
              </p>

              <div className="d-flex flex-wrap gap-3">
                {HomeData.buttons.map((button) => (
                  <Link
                    key={button.title}
                    to={button.link}
                    className={`btn ${button.style} btn-lg rounded-pill px-4`}
                  >
                    {button.title}
                    <i className="bi bi-arrow-up-right ms-2" />
                  </Link>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-4 mt-5">
                {HomeData.statistics.map((item) => (
                  <div key={item.label}>
                    <h3 className="fw-bold mb-1">{item.value}</h3>
                    <p className="text-secondary mb-0 small">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <div className="profile-frame mx-auto">
                <img
                  src={HomeData.image}
                  alt={`${HomeData.name} profile`}
                  className="img-fluid profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container text-center py-3">
          <p className="text-primary fw-semibold text-uppercase small">
            Welcome to my portfolio
          </p>
          <h2 className="fw-bold mb-3">
            Turning Ideas Into Digital Experiences
          </h2>
          <p className="text-secondary mx-auto section-description">
            Explore my projects, technical skills, and experience to learn
            more about what I can build.
          </p>
          <Link to="/about" className="btn btn-outline-primary rounded-pill px-4 mt-3">
            More About Me
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;