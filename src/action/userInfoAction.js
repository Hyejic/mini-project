import Axios from 'axios'
import { BASE_API_URL } from './constants';


export const getUserInfo = (id) => async (dispatch, getState) => {
  dispatch({type: "FETCH_USER_REQUEST"})
  try {
    const info = await Axios.get(`${BASE_API_URL}/user/${id}.json`);
    dispatch({type:"FETCH_USER_SUCCESS", payload: info})
  } catch (error) {
    dispatch({type:"FETCH_USER_FAILURE", error: error})
  }
}
