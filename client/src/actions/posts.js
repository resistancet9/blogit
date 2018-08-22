function fetchAllPosts() {
  return function(dispatch) {
    fetch("/posts")
      .then(d => d.json())
      .then(data => dispatch({ type: "FETCH_ALL", payload: data }));
  };
}

export { fetchAllPosts };
