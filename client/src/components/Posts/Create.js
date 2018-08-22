import React, { Component } from "react";

class Create extends Component {
  render() {
    return (
      <div className="mt-3">
        <h2>Create New Post</h2>
        <div className="row">
          <div className="col-md-5">
            <form autoComplete="off">
              <div class="form-group">
                <label for="post-title">Post Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="post-title"
                  placeholder="Enter New Post Title"
                  autoComplete="off"
                />
              </div>
              <div class="form-group">
                <label for="post-body">Body</label>
                <textarea
                  class="form-control"
                  id="post-body"
                  placeholder="Enter Text Body"
                  rows="10"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
