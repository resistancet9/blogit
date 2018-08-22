import axios from "axios";

function fetchAllPosts() {
  return function(dispatch) {
    fetch("/posts")
      .then(d => d.json())
      .then(data => dispatch({ type: "FETCH_ALL", payload: data }));
  };
}

function createNewPost(formData, history) {
  return function(dispatch) {
    axios
      .post("/posts", formData)
      .then(function(response) {
        history.push("/");
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export { fetchAllPosts, createNewPost };
