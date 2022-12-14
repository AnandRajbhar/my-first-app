import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  let navigate = useNavigate();

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{width:"100%", height:"100%"}}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Tutorials
            </span>
          </Link>
          <button
            color="success"
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About">
                  About
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch mx-3 text-${
                props.mode === "light" ? "info" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                info Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
