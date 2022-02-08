const topInitState = {
  items: [],
  loading: false,
  error: null
};
const topReducer = (state = topInitState, action) => {
  switch (action.type) {
    case "FETCH_SUBMISSION_REQUEST" :
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SUBMISSION_SUCCESS" :
      return {
        ...state,
        loading: false,
        items: action.payload,
        comment: action.comments,
      };
    case "FETCH_SUBMISSION_FAILURE" :
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default :
      return state;
  }
}
export default topReducer;
