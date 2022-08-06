import React from "react";
// import { Link } from "react-router-dom";
import "./navbar.css";
//import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  let navigate = useNavigate();

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/"> */}
          <span
            onClick={() => {
              navigate("/");
            }}
          >
            AirIndia
          </span>
          {/* </Link> */}
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link active" to="/About">
                 About
                </Link> */}
              </li>
              {/* <li className="nav-item ">
                <a
                  className="nav-link active"
                  href="/"
                  // role="button"
                  // data-bs-toggle="dropdown"
                  // aria-expanded="false"
                >
               Travel Info
                </a>
              </li>
                <li className="nav-item">
                  
                    <a className="nav-link active" href="/">
                      Flying Returns
                    </a>
                </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      Baggage
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="/">
                      Contact
                    </a>
                  </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Email
                </a>
              </li>*/}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control my-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger my-3" type="submit">
                Search
              </button>
            </form>  */}
            <div
              className={`form-check form-switch my-1 text-${
                props.mode === "light" ? "dark" : "light"
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
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
