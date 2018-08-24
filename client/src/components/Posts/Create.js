import React, { Component } from "react";
import { reduxForm, Field, reset } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createNewPost } from "./../../actions/posts";

class Create extends Component {
  state = { loading: false, errors: {} };

  getData(formData) {
    this.setState(
      {
        loading: true
      },
      this.props.createNewPost(
        formData,
        this.props.history,
        this.changeState.bind(this)
      )
    );
  }

  changeState(error) {
    if (error) {
      this.setState({
        loading: false,
        errors: error
      });
    } else {
      this.props.dispatch(reset("create_post"));
      this.setState({
        loading: false,
        errors: {}
      });
    }
  }

  render() {
    const { handleSubmit } = this.props;
    const { errors } = this.state;

    return (
      <div>
        {!this.state.loading && (
          <div className="mt-3">
            <h2>Create New Post</h2>
            <div className="row">
              <div className="col-md-5">
                {errors.message && (
                  <div className="alert alert-danger"> {errors.message} </div>
                )}
                <form
                  autoComplete="off"
                  onSubmit={handleSubmit(this.getData.bind(this))}
                >
                  <div className="form-group">
                    <label htmlFor="post-title">Post Title</label>
                    <Field
                      component="input"
                      type="text"
                      name="title"
                      className="form-control"
                      id="post-title"
                      placeholder="Enter New Post Title"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="post-body">Body</label>
                    <Field
                      component="textarea"
                      className="form-control"
                      id="post-body"
                      placeholder="Enter Text Body"
                      rows="10"
                      name="body"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
        {this.state.loading && <div> Loading... </div>}
      </div>
    );
  }
}

export default reduxForm({
  form: "create_post"
})(
  connect(
    null,
    { createNewPost }
  )(withRouter(Create))
);
