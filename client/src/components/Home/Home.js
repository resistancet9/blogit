import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "./../../actions/posts";

class Home extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    return <div className="mt-3">Home</div>;
  }
}

export default connect(
  null,
  { fetchAllPosts }
)(Home);
