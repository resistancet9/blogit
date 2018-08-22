import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "./../../actions/posts";

class Home extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const Posts = this.props.posts.map(post => {
      return <div key={post._id}> {post.title} </div>;
    });

    return <div className="mt-3">{Posts}</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  };
}

export default connect(
  mapStateToProps,
  { fetchAllPosts }
)(Home);
