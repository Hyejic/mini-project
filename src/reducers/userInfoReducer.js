const userInfoInitState = {
  item: [],
  loading: false,
  error: null
};
const userInfoReducer = (state = userInfoInitState, action) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST" :
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_USER_SUCCESS" :
      return {
        ...state,
        loading: false,
        item: action.payload,
      };
    case "FETCH_USER_FAILURE" :
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default :
      return state;
  }
}

export default userInfoReducer;
