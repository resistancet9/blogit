import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "./../../actions/auth_actions";

import "./Navbar.css";

class NavbarComponent extends Component {
  logoutUser(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { user, isAuthenticated: isAuth } = this.props.auth;

    return (
      <header>
        <nav className="navbar navbar-expand-md fixed-top">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              Blogger
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
                  <NavLink className="nav-link " to="/create">
                    Create
                  </NavLink>
                </li>
                {!isAuth ? (
                  <React.Fragment>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/register">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " to="/login">
                        Login
                      </NavLink>
                    </li>
                  </React.Fragment>
                ) : (
                  <li className="nav-item">
                    <a
                      href=""
                      onClick={this.logoutUser.bind(this)}
                      className="nav-link"
                    >
                      Logout
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavbarComponent);
