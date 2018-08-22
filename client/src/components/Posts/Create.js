import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createNewPost } from "./../../actions/posts";

class Create extends Component {
  getData(formData) {
    this.props.createNewPost(formData, this.props.history);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="mt-3">
        <h2>Create New Post</h2>
        <div className="row">
          <div className="col-md-5">
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
