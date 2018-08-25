import React, { Component } from "react";
import { connect } from "react-redux";
import truncate from "truncate";

import { fetchAllPosts } from "./../../actions/posts";
import "./Home.css";

const PostMaker = (post, i) => {
  return (
    <div key={i} className="col-md-4 p-3">
      <h2>{post.title}</h2>
      <p>{truncate(post.body, 150)}</p>
    </div>
  );
};

const MainPostMaker = post => {
  return (
    <div key={"main-post"} className="cols mb-2 p-3 main-post border-bottom">
      <fieldset>
        <legend>Featured Article</legend>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </fieldset>
    </div>
  );
};

class Home extends Component {

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const { featured, posts } = this.props;
    const MainPost = MainPostMaker(featured);
    const Posts = posts.map((post, i) => PostMaker(post, i));
    return (
      <div className="mt-1">
        <div className="row">
          <div className="col-md-9 left-section">
            <div className="row mr-1">{MainPost}</div>
            <div className="row mr-1">{Posts}</div>
          </div>
          <div className="col-md-3 border-left p-4 right-section">right</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    featured: state.posts.featured
  };
}

export default connect(
  mapStateToProps,
  { fetchAllPosts }
)(Home);
