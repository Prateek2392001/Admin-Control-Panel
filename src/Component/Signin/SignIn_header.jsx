import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./signin.css";
const SignIn_Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white rounded-0 border-bottom">
          <div className="container">
            <Link className="navbar-brand" to="/">
              {/* <img
                src="assets/images/brand-logo-2.png"
                width="140"
                alt="Logo"
              /> */}
              <div className="d-flex flex-row">
                <img
                  src="./public/logo-icon.png"
                  alt="Logo"
                  className="logo-image"
                />
                <h1 className="logo">Snacked</h1>
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Services{" "}
                    {/* <i className="bi bi-chevron-down align-middle ms-2"></i> */}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    English
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
              <div className="d-flex ms-3 gap-3">
                <Link
                  className="btn btn-primary btn-sm px-4 radius-30"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-white btn-sm px-4 radius-30"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default SignIn_Header;
