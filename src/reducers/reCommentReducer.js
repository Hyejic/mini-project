const reInitState = {
  items: [],
  loading: false,
  error: null
};
const reCommentReducer = (state = reInitState, action) => {
  switch (action.type) {
    case "FETCH_RECOMMENT_REQUEST" :
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_RECOMMENT_SUCCESS" :
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_RECOMMENT_FAILURE" :
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default :
      return state;
  }
}

export default reCommentReducer;
