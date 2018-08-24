import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "./../../actions/auth_actions";
import classnames from "classnames";

class Register extends Component {
  state = { errors: {} };

  getData(formData) {
    this.props.registerUser(formData, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { handleSubmit } = this.props;
    const { errors } = this.state;

    return (
      <div>
        <div className="mt-3">
          <h2>Register</h2>
          <div className="row">
            <div className="col-md-5">
              <form
                autoComplete="off"
                onSubmit={handleSubmit(this.getData.bind(this))}
              >
                {errors.message && (
                  <div className="alert alert-danger"> {errors.message} </div>
                )}
                <div className="form-group">
                  <label htmlFor="user-name">Name</label>
                  <Field
                    component="input"
                    type="text"
                    name="name"
                    className={classnames("form-control", {
                      "is-invalid": errors.name
                    })}
                    id="user-name"
                    placeholder="Enter Name"
                    autoComplete="off"
                  />
                  {errors.name && (
                    <div className="invalid-feedback"> {errors.name} </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    component="input"
                    type="email"
                    name="email"
                    className={classnames("form-control", {
                      "is-invalid": errors.email
                    })}
                    id="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                  />
                  {errors.email && (
                    <div className="invalid-feedback"> {errors.email} </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    component="input"
                    type="password"
                    name="password"
                    className={classnames("form-control", {
                      "is-invalid": errors.password
                    })}
                    id="password"
                    placeholder="Enter Password"
                    autoComplete="off"
                  />
                  {errors.password && (
                    <div className="invalid-feedback"> {errors.password} </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <Field
                    component="input"
                    type="password"
                    name="password2"
                    className={classnames("form-control", {
                      "is-invalid": errors.password2
                    })}
                    id="confirm-password"
                    placeholder="Confirm Password"
                    autoComplete="off"
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback"> {errors.password2} </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors.errors
  };
}

export default reduxForm({
  form: "register"
})(
  connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(Register))
);
