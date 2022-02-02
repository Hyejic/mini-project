const dailyInitState = {
  items: [],
  loading: false,
  error: null
};
const dailyReducer = (state = dailyInitState, action) => {
  switch (action.type) {
    case "FETCH_DAILY_REQUEST" :
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DAILY_SUCCESS" :
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_DAILY_FAILURE" :
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default :
      return state;
  }
}

export default dailyReducer;
