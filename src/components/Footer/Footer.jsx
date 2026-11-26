import { Link } from "react-router-dom";
import FooterData from "./FooterData";

function Footer() {
  return (
    <footer className="portfolio-footer text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <Link
              to="/"
              className="text-white text-decoration-none fs-4 fw-bold"
            >
              {FooterData.brand}
              <span className="text-info">.</span>
            </Link>

            <p className="text-white-50 mt-3 footer-description">
              {FooterData.description}
            </p>

            <div className="d-flex gap-3 mt-4">
              {FooterData.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="social-link"
                >
                  <i className={`bi ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Quick Links</h6>

            <ul className="list-unstyled d-flex flex-column gap-2">
              {FooterData.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white-50 text-decoration-none footer-link"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Let's Connect</h6>
            <p className="text-white-50">
              Interested in working together? Visit the contact page to
              discuss your project.
            </p>

            <Link
              to="/contact"
              className="btn btn-outline-light rounded-pill px-4"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-white-50 small">
          {FooterData.copyright}
        </div>
      </div>
    </footer>
  );
}

export default Footer;