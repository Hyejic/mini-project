const commentsInitState = {
  items: [],
  loading: false,
  error: null
};
const commnetsReducer = (state = commentsInitState, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS_REQUEST" :
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_COMMENTS_SUCCESS" :
      return {
        ...state,
        loading: false,
        items: action.payload,
        comment: action.comments,
      };
    case "FETCH_COMMENTS_FAILURE" :
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default :
      return state;
  }
}
export default commnetsReducer;
