let initialState = { posts: [] };

function posts(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_ALL":
      return {
        ...state,
        posts: payload
      };
    default:
      return state;
  }
}

export default posts;
