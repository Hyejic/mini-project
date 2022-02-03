import Axios from "axios"
import { BASE_API_URL } from './constants';

// const getAskStory = async (id) => {
//   try {
//     const story = await Axios.get(`${BASE_API_URL}/item/${id}.json`);
//     return story;
//   } catch (error) {
//     console.log('Error while getting a story.');
//   }
// };

export const getUserInfo = (by) => async (dispatch, getState) => {
  dispatch({type: "FETCH_USER_REQUEST"})
  try {
    const info = await Axios.get(`${BASE_API_URL}/user/${by}.json`);
    // console.log(info)
    dispatch({type:"FETCH_USER_SUCCESS", payload: info})
  } catch (error) {
    dispatch({type:"FETCH_USER_FAILURE", error: error})
  }
}
