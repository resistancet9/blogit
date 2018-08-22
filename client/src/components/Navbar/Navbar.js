import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class NavbarComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md fixed-top">
          <div className="container">
            <NavLink className="navbar-brand" to="#">
              BlogIt
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link " to="#">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Link
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    Disabled
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavbarComponent;
