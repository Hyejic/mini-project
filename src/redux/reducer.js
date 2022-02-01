const initState = {
  items: [],
  loading: false,
  error: null
};
const storyReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_STORY_REQUEST" :
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_STORY_SUCCESS" :
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_STORY_FAILURE" :
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default :
      return state;
  }
}

export default storyReducer;