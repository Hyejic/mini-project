const topInitState = {
  items: [],
  loading: false,
  error: null
};
const topReducer = (state = topInitState, action) => {
  switch (action.type) {
    case "FETCH_TOP_REQUEST" :
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_TOP_SUCCESS" :
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_TOP_FAILURE" :
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
