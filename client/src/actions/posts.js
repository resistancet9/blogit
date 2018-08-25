import axios from "axios";

function fetchAllPosts() {
  return function(dispatch) {
    fetch("/posts")
      .then(d => d.json())
      .then(data => {
        let data_clone = data.slice();
        data.featured = data_clone.shift();
        data.posts = data_clone;
        dispatch({ type: "FETCH_ALL", payload: data })
      });
  };
}

function createNewPost(formData, history, changeState) {
  return function(dispatch) {
    axios
      .post("/posts", formData)
      .then(function(response) {
        changeState();
      })
      .catch(function(error) {
        changeState(error.response.data);
      });
  };
}

export { fetchAllPosts, createNewPost };
