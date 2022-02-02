const showInitState = {
  items: [],
  loading: false,
  error: null
};
const showReducer = (state = showInitState, action) => {
  switch (action.type) {
    case "FETCH_SHOW_REQUEST" :
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SHOW_SUCCESS" :
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_SHOW_FAILURE" :
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default :
      return state;
  }
}

export default showReducer;
