import React from "react";
import PropTypes from "prop-types";
import { Link,NavLink } from "react-router-dom";
export default function Navbar(props) {
  let border={
    borderBottom:"1px solid black",
  }
  return (
    <nav className={props.myTheme.nav_bg} style={border} data-bs-theme={props.myTheme.nav_style}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                {props.aboutText}
              </NavLink>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="theme"
              onChange={props.toggleStyle}
            />
            <label htmlFor="theme" style={props.myTheme}>
              {props.myTheme.btnText}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Set aboutText here",
};
