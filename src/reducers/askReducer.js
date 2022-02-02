const askInitState = {
  items: [],
  loading: false,
  error: null
};
const newReducer = (state = askInitState, action) => {
  switch (action.type) {
    case "FETCH_ASK_REQUEST" :
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_ASK_SUCCESS" :
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_ASK_FAILURE" :
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default :
      return state;
  }
}

export default newReducer;
