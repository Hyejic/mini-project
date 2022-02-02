const newInitState = {
  items: [],
  loading: false,
  error: null
};
const newReducer = (state = newInitState, action) => {
  switch (action.type) {
    case "FETCH_NEW_REQUEST" :
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_NEW_SUCCESS" :
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_NEW_FAILURE" :
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
