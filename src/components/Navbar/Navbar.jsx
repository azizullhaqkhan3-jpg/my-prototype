import { NavLink, Link } from "react-router-dom";
import NavbarData from "./NavbarData";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          {NavbarData.brand}
          <span className="text-primary">.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
          aria-controls="portfolioNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="portfolioNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {NavbarData.links.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active fw-bold text-primary" : ""}`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}

            <li className="nav-item ms-lg-2">
              <Link
                to={NavbarData.button.path}
                className="btn btn-primary rounded-pill px-4"
              >
                {NavbarData.button.title}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;