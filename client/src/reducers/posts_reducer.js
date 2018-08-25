let initialState = { posts: [], featured: {} };

function posts(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_ALL":
      return {
        ...state,
        posts: payload.posts,
        featured: payload.featured
      };
    default:
      return state;
  }
}

export default posts;
